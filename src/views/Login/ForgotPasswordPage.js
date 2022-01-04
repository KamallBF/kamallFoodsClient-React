import React, {useEffect} from "react";
import useModalContext from "../../core/context/modalContext";
import ForgetPasswordModalTemplate from "../../core/components/modals/templates/ForgetPasswordTemplate";

const ForgotPasswordPage = () => {
    const {setSelected} = useModalContext();

    useEffect(() => {
        setSelected("ForgetPasswordModalTemplate");
    })

    return (
        <section>
            <ForgetPasswordModalTemplate setSelected={setSelected}/>
        </section>
    )
}

export default ForgotPasswordPage;
