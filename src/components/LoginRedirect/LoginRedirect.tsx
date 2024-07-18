import {ERouteUnauthorizedPath} from "hocs/Router/Router.constants";
import {useEffect} from "react";
import {useNavigate} from "react-router-dom";

export const LoginRedirect = () => {
    const navigate = useNavigate();
    
    useEffect(() => {
        navigate(ERouteUnauthorizedPath.Login)
    }, []);


    return <></>
}