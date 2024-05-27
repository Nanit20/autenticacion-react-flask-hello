import React, { useContext, useEffect } from "react";
import { Context } from "../store/appContext";

const Private = () => {
    const { store, actions } = useContext(Context);

    useEffect(() => {
        if (!store.logged) {
            actions.verifyAuthToken();
        }
    }, [store.logged]);

    return (
        <div className="text-center">
            {store.logged ? (
                <div>
                    <h1>Welcome, {store.user.email}!</h1>
                    <p><strong>Classified Information</strong></p>
                    <img src="https://hirukoeskape.com/wp-content/uploads/2023/01/HIRUKO_top_secret-icon.png"></img>
                </div>
            ) : store.logged == false ? (
                <div>
                    <h1>Unauthorized</h1>
                    <p>You only could access with the correct credentials.</p>
                </div>
            ) : (
                <div>
                    <h1>Authenticating</h1>
                    <p>Checking..................</p>
                </div>
            )}
        </div>
    );
};

export default Private;