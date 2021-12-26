import React, {createContext, useContext, useEffect, useMemo, useState} from "react";
import {getCurrentUser, loginSession, logout, signupUser} from "./sessions"

const AuthContext = createContext({});

export function AuthProvider({children}) {
    const [user, setUser] = useState();
    const [error, setError] = useState();
    const [loading, setLoading] = useState(false);
    const [loadingInitial, setLoadingInitial] = useState(true);
    const [accountCreationValidation, setAccountCreationValidation] = useState(false);
    const [openSnackbar, setOpenSnackbar] = useState([false, "Connexion Réussi", "error"]);

    useEffect(() => {
        getUser()
    }, []);

    const getUserAfterLogin = () => {
        getCurrentUser().then(user => {
            setUser(user.data);
        }).catch(_ => {
            setOpenSnackbar([true, "can't fetch user. Try again later", "error"])
        })
    }

    const getUser = () => {
        getCurrentUser()
            .then(user => {
                setUser(user.data);
            })
            .catch((_error) => {
            })
            .finally(() => setLoadingInitial(false));
    }

    const signIn = (email, password) => {
        setLoading(true);

        loginSession({email, password})
            .then((user) => {
                setUser(user);
                setOpenSnackbar([true, "Successfully Authenticated", "success"]);
            })
            .catch((error) => {
                setOpenSnackbar([true, "An error has occurred", "error"]);
                setError(error);
            })
            .finally(() => setLoading(false));
    }

    const signUp = (email, password, firstname, lastname) => {
        setLoading(true);

        signupUser({email, firstname, password, lastname})
            .then((user) => {
                setOpenSnackbar([true, user.data.message, "success"]);
            })
            .catch((error) => {
                setError(error)
                setOpenSnackbar([true, "An error has occurred", "error"]);
            })
            .finally(() => setLoading(false));
    }

    const signOut = () => {
        logout().then(() => {
            setUser(undefined);
            setOpenSnackbar([true, "Déconnexion reussi", "success"]);
        }).catch(err => {
            setOpenSnackbar([true, "An error has occurred", "error"]);
        });
    }

    const memoizedValue = useMemo(
        () => ({
            user,
            loading,
            error,
            openSnackbar,
            setOpenSnackbar,
            accountCreationValidation,
            setAccountCreationValidation,
            signIn,
            signUp,
            signOut,
            getUser,
            getUserAfterLogin
        }),
        [user, loading, error, openSnackbar, accountCreationValidation]
    );

    return (
        <AuthContext.Provider value={memoizedValue}>
            {!loadingInitial && children}
        </AuthContext.Provider>
    );
}

export default function useAuth() {
    return useContext(AuthContext);
}
