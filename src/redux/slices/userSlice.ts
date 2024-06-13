import {createAsyncThunk, createSlice, isFulfilled, isRejected, PayloadAction} from "@reduxjs/toolkit";
import {IUser} from "../../models/IUser";
import {userService} from "../../services/api.service";
import {AxiosError} from "axios";

interface IState {
    users: IUser[];
    user: IUser | null;
    isLoaded: boolean;
}

const initialState: IState = {
    users: [],
    user: null,
    isLoaded: false,
}

const loadUsers = createAsyncThunk(
    'userSlice/loadUsers',
    async (_, thunkAPI) => {
        try {
            const users = await userService.getAll();
            thunkAPI.dispatch(actions.changeLoadState(true));
            return thunkAPI.fulfillWithValue(users);
        } catch (e) {
            const error = e as AxiosError;
            return thunkAPI.rejectWithValue(error.response?.data);
        }
    }
)

const loadUserById = createAsyncThunk(
    'userSlice/loadUserById',
    async (id: string | undefined, thunkAPI) => {
        if (id) {
            try {
                const user = await userService.getById(id);
                thunkAPI.dispatch(actions.changeLoadState(true));
                return thunkAPI.fulfillWithValue(user);
            } catch (e) {
                const error = e as AxiosError;
                return thunkAPI.rejectWithValue(error.response?.data);
            }
        }
        return null;
    }
)

const userSlice = createSlice({
    name: 'userSlice',
    initialState,
    reducers: {
        changeLoadState: (state, action: PayloadAction<boolean>) => {
            state.isLoaded = action.payload;
        }
    },
    extraReducers: builder => builder
        .addCase(loadUsers.fulfilled, (state, action) => {
            state.users = action.payload;
        })
        .addCase(loadUsers.rejected, (state, action) => {
            //.....
        })
        .addCase(loadUserById.fulfilled, (state, action) => {
            state.user = action.payload;
        })
        .addCase(loadUserById.rejected, (state, action) => {
            //.....
        })
        .addMatcher(isFulfilled(), (state, action) => {
            state.isLoaded = true;
        })
        .addMatcher(isRejected(), (state, action) => {
            //...
        })
})

const {reducer: userReducer, actions} = userSlice;

const userActions = {
    ...actions,
    loadUsers,
    loadUserById,
}

export {
    userActions,
    userReducer
}
