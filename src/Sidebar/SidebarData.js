import React from "react";
import {
    Event,
    Group,
    Home,
    LibraryAdd,
    Man,
    RestaurantMenu,
    Schedule,
    Settings,
    StarPurple500
} from "@mui/icons-material";
import Profile from "../Profile/Profile";

export const SidebarData = [
    {
        title:"Home",
        icon:<Home/>,
        link:"/home"
    },
    {
        title:"Profile",
        icon:<Man/>,
        link:"/profile"
    },
]