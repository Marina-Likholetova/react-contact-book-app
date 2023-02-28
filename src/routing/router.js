import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import UsersPage from "../pages/Users/UsersPage";
import AlbumsPage from "../pages/Albums/AlbumsPage";
import NotFoundPage from "../pages/NotFound/NotFoundPage";
import UserItem from "../components/UserItem/UserItem";
import ContactForm from "../components/ContactForm/ContactForm";
import AlbumItem from "../components/AlbumItem/AlbumItem";
import Index from "../components/Layout/Layout";
import withUser from "../hoc/withUser";
import withAddUser from "../hoc/withAddUser";


const ItemWithUser = withUser(UserItem);
const FormWithUser = withUser(ContactForm)
const FormWithAddUser = withAddUser(ContactForm)


const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
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
