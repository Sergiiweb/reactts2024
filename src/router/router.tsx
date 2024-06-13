import {createBrowserRouter, RouteObject} from "react-router-dom";

import {MainLayout} from "../layouts/MainLayout";
import {UsersPage} from "../pages/UsersPage";
import {PostsPage} from "../pages/PostsPage";
import {UserPage} from "../pages/UserPage";

const routes: RouteObject[] = [
    {path:'', element: <MainLayout/>, children: [
            {path:'users', element: <UsersPage/>},
            {path:'posts', element: <PostsPage/>},
            {path:'users/:id', element: <UserPage/>},
        ]}
]

const router = createBrowserRouter(routes);

export {
    router
}
