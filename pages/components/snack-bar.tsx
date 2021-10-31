import * as React from 'react';
import { useEffect } from 'react';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert, { AlertProps } from '@mui/material/Alert';

const Alert = React.forwardRef<HTMLDivElement, AlertProps>(function Alert(
    props,
    ref,
) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

export default function CustomizedSnackbars(props: { open: boolean }) {
    const [open, setOpen] = React.useState(false);

    const handleClose = (event?: React.SyntheticEvent, reason?: string) => {
        if (reason === 'clickaway') {
            return;
        }
        setOpen(false)
    }

    const handleClickOut = (event?: React.SyntheticEvent, reason?: string) => {
        if (reason === 'clickaway') {
            return;
        }
        setOpen(false)
    }

    useEffect(() => {
        setOpen(props.open);
    }, [props])

    return (
        <Snackbar open={open} autoHideDuration={3000} onClose={handleClose}
            style={{
                position: 'absolute',
                top: '36px',
                left: '130px',
                height: 'fit-content',
                width: 'fit-content'
            }}
        >
            <Alert onClose={handleClose} severity="success"
                sx={{
                    width: '100%', background: 'rgba(188, 220, 250, 1)',
                    color: 'black', fontFamily: 'inherit', fontWeight: '400', textAlign: 'center',
                }}>
                Event list updated successfully!
            </Alert>
        </Snackbar>
    );
}
