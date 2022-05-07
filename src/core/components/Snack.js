import * as React from 'react';
import Snackbar from '@mui/material/Snackbar';
import {Alert, Stack} from "@mui/material";
import {useTranslation} from "react-i18next";

export default function Snack({vertical, horizontal, handleClose, open, message, severity = "success"}) {
    const [t] = useTranslation();

    const success = (
        <Alert onClose={handleClose} severity={severity} sx={{width: '100%'}}>
            {t(`${message}`)}
        </Alert>
    );

    return (
        <Stack spacing={2} sx={{width: '100%'}}>
            <Snackbar
                open={open}
                autoHideDuration={4000}
                onClose={handleClose}
                message={message}
                anchorOrigin={{vertical, horizontal}}
            >
                {success}
            </Snackbar>

        </Stack>
    );
}
