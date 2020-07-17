import React from 'react';
import { NavComponent } from "./Navbar";
import { NavItem } from "./NavItem";
import { DropDownMenu } from "./DropDownMenu";

import { ReactComponent as BellIcon } from "../../assets/bell.svg";
import { ReactComponent as PlusIcon } from "../../assets/plus.svg";
import { ReactComponent as MessengerIcon } from "../../assets/messenger.svg";
import { ReactComponent as CareIcon } from "../../assets/caret.svg";

export const Header = () => {
    return(
        <div>
            <NavComponent>
                <NavItem icon={<PlusIcon/>}/>
                <NavItem icon={<BellIcon/>}/>
                <NavItem icon={<MessengerIcon/>}/>
                <NavItem icon={<CareIcon/>}>
                    <DropDownMenu/>
                </NavItem>
            </NavComponent>
        </div>
    );
}
