import React from "react";
import { Outlet } from "react-router";
import { Alert } from "@mui/material";
import Loader from "../../components/Loader/Loader";
import Toast from "../../components/Toast/Toast";



export default function Layout({ sidebar = () => null, error = null, loading = null, actionText = null }) {
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
