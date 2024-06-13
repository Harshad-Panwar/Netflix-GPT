import { useEffect, useState } from "react";

export const useInternetStatus = () => {

    const [internetStatus, setInternetStatus] = useState(true);

    useEffect(()=>{
        window.addEventListener("online", ()=>{
            setInternetStatus(true);
        });

        window.addEventListener("offline", ()=>{
            setInternetStatus(false);
        });

    }, []);

    return internetStatus;
}