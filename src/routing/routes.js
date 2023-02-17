import { Route } from "react-router-dom";
import UsersPage from "../pages/Users/UsersPage";
import AlbumsPage from "../pages/Albums/AlbumsPage";
import NotFoundPage from "../pages/NotFound/NotFoundPage";
import UserItem from "../components/UserItem/UserItem";
import ContactForm from "../components/ContactForm/ContactForm";
import AlbumItem from "../components/AlbumItem/AlbumItem";
import Index from "../components/Layout/Layout";

const routes = [
    {
        path: "/",
        exact: true,
        element: Index,
    },
    {
        path: "/users",
        element: UsersPage,
        routes: [
            {
                path: "/users/new",
                exact: true,
                element: ContactForm,
            },
            {
                path: "/users/:id/edit",
                element: ContactForm,
            },
            {
                path: "/users/:id",
                element: UserItem,
            },
            {
                exact: true,
                element: () => <p>Choose your contact</p>,
            },
        ],
    },
    {
        path: "/albums/byUserId/:userId",
        element: AlbumsPage,
        routes: [
            {
                path: "/albums/byUserId/:userId/:id",
                element: AlbumItem,
            },
            {
                exact: true,
                element: () => <p>Choose an album</p>,
            },
        ],
    },
    {
        path: "/albums",
        element: AlbumsPage,
        routes: [
            {
                path: "/albums/:id",
                element: AlbumItem,
            },
            {
                exact: true,
                element: () => <p>Choose an album</p>,
            },
        ],
    },
    {
        path: "*",
        element: NotFoundPage,
    },
];


export function RouteWithSubRoutes(route) {
    return (
        <Route
            path={route.path}
            render={props => (
                <route.element {...props} routes={route.routes} />
            )}
        />
    );
}

export default routes;
