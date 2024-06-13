const baseURL = 'https://jsonplaceholder.typicode.com/';

const users = '/users';
const posts = '/posts';

const urls = {
    users: {
        base: users,
        byId: (id: string): string => users + '/' + id,
    },
    posts: {
        base: posts,
        byId: (id: string): string => posts + '/' + id,
    },
}

export {
    baseURL,
    urls
}
