import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const Navbar = () => {
    const { store, actions } = useContext(Context);

    return (
        <nav className="navbar navbar-light bg-light">
            <div className="container">
                <Link to="/">
                    <span className="navbar-brand mb-0 h1"><i className="fas fa-home"></i></span>
                </Link>
                <div className="ml-auto">
                    {store.logged ? (
                        <button className="btn btn-danger" onClick={actions.logout}>
                            Logout
                        </button>
                    ) : (
                        <Link to="/login">
                            <button className="btn btn-secondary">Login</button>
                        </Link>
                    )}
                </div>
            </div>
        </nav>
    );
};
