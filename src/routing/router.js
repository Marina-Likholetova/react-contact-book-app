import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Index from "modules/common/components/Layout/Layout"
import UsersPage from "modules/users/pages/UsersPage";
import AlbumsPage from "modules/albums/pages/AlbumsPage";
import NotFoundPage from "modules/common/pages/NotFound/NotFoundPage";
import UserItem from "modules/users/components/UserItem/UserItem";
import ContactForm from "modules/users/components/ContactForm/ContactForm";
import AlbumItem from "modules/albums/components/AlbumItem/AlbumItem";
import withUser from "modules/users/hoc/withUser";
import withAddUser from "modules/users/hoc/withAddUser";
import withTheme from "modules/common/hoc/withTheme";


const AppWithTheme = withTheme(App);
const ItemWithUser = withUser(UserItem);
const FormWithUser = withUser(ContactForm)
const FormWithAddUser = withAddUser(ContactForm)


const router = createBrowserRouter([
    {
        path: "/",
        element: <AppWithTheme />,
        errorElement: <NotFoundPage />,
        children: [
            {
                element: <Index />,
                index: true
            },
            {
                path: "users/",
                element: <UsersPage />,
                children: [
                    {
                        element: <p>Choose your contact</p>,
                        index: true,
                    },
                    {
                        path: "new",
                        element: <FormWithAddUser/>
                    },
                    {
                        path: ":id",
                        element: <ItemWithUser/>
                    },
                    {
                        path: ":id/edit",
                        element: <FormWithUser/>
                    },
                ],
            },
            {
                path: "albums/",
                element: <AlbumsPage />,
                children: [
                    {
                        element: <p>Choose an album</p>,
                        index: true,
                    },
                    {
                        path: ":id",
                        element: <AlbumItem />,
                    },
                ],
            },
            {
                path: "albums/byUserId/:userId/",
                element: <AlbumsPage />,
                children: [
                    {
                        element: <p>Choose an album</p>,
                        index: true,
                    },
                    {
                        path: ":id",
                        element: <AlbumItem />,
                    },
                ],
            },
        ],
    },
]);

export default router;
