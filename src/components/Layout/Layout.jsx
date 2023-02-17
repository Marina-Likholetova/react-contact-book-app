import React from "react";
import { Switch } from "react-router";
import { Alert } from "@mui/material";
import { RouteWithSubRoutes } from "../../routing/routes";
import Loader from "../../components/Loader/Loader";
import Toast from "../../components/Toast/Toast";



export default function Layout({ sidebar = () => null, error = null, loading = null, actionText = null, routes = [] }) {
    return (
        <>
            <aside className="sidebar">{sidebar()}</aside>
            <article className="md-content" >
                <section className={!loading && !error ? "" : "display-none"}>
                    <Switch>
                        {routes.map((route, i) => (
                            <RouteWithSubRoutes key={i} {...route} />
                        ))}
                    </Switch>
                </section>
                {loading && <Loader />}
                {error && <Alert severity="error">Error message: {error}</Alert>}
            </article>
            <Toast actionText={actionText} error={error} />
        </>
    );
}

