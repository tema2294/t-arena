import {useState} from "react";

export const useNavBarDrawerController = () => {
    const [isOpenDrawer, setOpenDrawer] = useState(false);
    const handleOpenDrawer = () => {
        setOpenDrawer((isOpen) => !isOpen);
    };
    const handleCloseDrawer = () => {
        setOpenDrawer(false);
    };


    return {isOpenDrawer, handleOpenDrawer, handleCloseDrawer}
}