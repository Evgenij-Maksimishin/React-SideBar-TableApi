import React from "react";
import * as BiIcons from "react-icons/bi";
import * as ImIcons from "react-icons/im";

export const SideBarData = [
    {
        title: "Home",
        path: '/',
        icon: <BiIcons.BiHome />,
        cName: 'nav-text'
    },
    {
        title: "Table",
        path: '/people/?page=1',
        icon: <ImIcons.ImTable />,
        cName: 'nav-text'
    }
]