import React, {useEffect, useState} from "react";
import {useTranslation} from "react-i18next";
import iconValidated from "../assets/imgs/validateMailIcon.png"
import iconInvalid from "../assets/imgs/invalidMailIcon.png"
import {baseApi} from "../api/calls";

const EmailConfirmationPage = (props) => {
    const [t] = useTranslation();
    const [message, setMessage] = useState();
    const [resState, setResState] = useState(false);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const userId = props.match.params.userId;
        const token = props.match.params.token;

        baseApi.put(`Users/account_verification/email/${userId}/${token}`)
            .then((res) => {
                setLoading(false)
                setMessage(res.data)
                setResState(true)
            }).catch(err => {
            setLoading(false)
            setMessage(err.response.data.error);
        })
    })

    return (
        <div style={{backgroundColor: "#efefef"}} className="h-75 d-flex justify-content-center ">
            <div className="text-center align-items-center d-flex flex-column align-self-center">
                {
                    loading ? <i
                            className="fa fa-refresh fa-spin"
                            style={{marginRight: "5px", fontSize: "50px"}}
                        /> :
                        <>
                            <img className="m-lg-5" src={resState ? iconValidated : iconInvalid}
                                 alt="account validated logo"/>
                            <span>{t(message)}</span>
                            {resState && <a href="/login">{t("Back to login")}</a>}
                        </>
                }
            </div>
        </div>
    )
}

export default EmailConfirmationPage;
