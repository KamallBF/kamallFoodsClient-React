import React, {useEffect} from "react";
import SignUpModalTemplate from "../../core/components/modals/templates/SignUpModalTemplate";
import useModalContext from "../../core/context/modalContext";

const RegisterPage = () => {
    const {setSelected} = useModalContext();

    useEffect(() => {
        setSelected("SignUpModalTemplate");
    })

    return (
        <section>
            <SignUpModalTemplate setSelected={setSelected}/>
        </section>
    )
}

export default RegisterPage;
