import React, {useEffect} from "react";
import LoginModalTemplate from "../../core/components/modals/templates/LoginModalTemplate";
import useModalContext from "../../core/context/modalContext";

const LoginPage = ({data}) => {
    const {setSelected} = useModalContext();

    useEffect(() => {
        setSelected("LoginModalTemplate");
        console.log(data)
    })

    return (
        <section>
            <LoginModalTemplate setSelected={setSelected}/>
            {data}
        </section>
    )
}

export default LoginPage;
