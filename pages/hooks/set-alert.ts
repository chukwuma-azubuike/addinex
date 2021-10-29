import { useEffect, useState } from "react";

export default function useAlert() {

    const [open, setOpen] = useState(true)

    useEffect(() => {
        console.log('alert', open)
    }, [open])

    return {
        open,
        setOpen
    }
}