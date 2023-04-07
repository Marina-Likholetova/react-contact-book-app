import React, {ReactNode } from "react";
import { Outlet } from "react-router";
import { Alert } from "@mui/material";
import Loader from "../Loader/Loader";
import Toast from "../Toast/Toast";

type Props = {
    sidebar?: () => ReactNode | null; 
    error?: string | null;
    loading?: boolean | null;
    actionText?: string | null;
}

const Layout: React.FC<Props> = ({ sidebar = () => null, error = null, loading = false, actionText = null }) => {
    return (
        <>
            <aside className="sidebar">{sidebar()}</aside>
            <article className="md-content">
                <section className={!loading && !error ? "" : "display-none"}>
                    <Outlet />
                </section>
                {loading && <Loader />}
                {error && <Alert severity="error">Error message: {error}</Alert>}
            </article>
            <Toast actionText={actionText} error={error} />
        </>
    );
}

export default Layout;