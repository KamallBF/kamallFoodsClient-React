import React, {createContext, useContext, useEffect, useMemo, useState} from "react";
import MenuTemplate from "../components/modals/templates/MenuTemplate";
import LoginModalTemplate from "../components/modals/templates/LoginModalTemplate";
import SignUpModalTemplate from "../components/modals/templates/SignUpModalTemplate";
import ForgetPasswordModalTemplate from "../components/modals/templates/ForgetPasswordTemplate";

const ModalContext = createContext({});
const modals = [MenuTemplate, LoginModalTemplate, SignUpModalTemplate, ForgetPasswordModalTemplate];

export function ModalProvider({children}) {
    const [modalState, setModalState] = useState(false);
    const [selected, setSelected] = useState("MenuTemplate"); // selected modal template
    const [isInPage, setIsInPage] = useState(false);

    useEffect(() => {
        if (!modalState)
            setSelected("MenuTemplate")
    }, [modalState, selected])

    const memoizedValue = useMemo(
        () => ({
            modalState,
            setModalState,
            selected,
            setSelected,
            isInPage,
            setIsInPage,
            modals
        }),
        [modalState, selected, setSelected, isInPage, setIsInPage]
    );

    return (
        <ModalContext.Provider value={memoizedValue}>
            {children}
        </ModalContext.Provider>
    );
}

export default function useModalContext() {
    return useContext(ModalContext);
}
