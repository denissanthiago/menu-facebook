import React, {useState} from 'react';
import { CSSTransition } from 'react-transition-group';
import styled from 'styled-components';

import { ReactComponent as CogIcon } from "../../assets/cog.svg";
import { ReactComponent as ChevRonIcon } from "../../assets/chevron.svg";
import { ReactComponent as ArrowIcon } from "../../assets/arrow.svg";

export const DropDownMenu = () => {

    const [ activeMenu, setActiveMenu ] = useState('main');
    const [ menuHeight, setMenuHeight ] = useState(null);

    const calcHeight = (el) => {
        const height = el.offsetHeight;
        setMenuHeight(height);
    }

    const DropDownItem = (props) => {
        return (
            <MenuItemContent>
                <a className='menu-item' onClick={() => props.goToMenu && setActiveMenu(props.goToMenu)}>
                    <span className='icon-button'>{props.leftIcon}</span>
                    { props.children }
                    <span className='icon-right'>{props.rightIcon}</span>
                </a>
            </MenuItemContent>
        )
    }

    return(
        <DropDownContainer >
            <CSSTransition
                in={activeMenu === 'main'}
                unmountOnExit
                timeout={500}
                classNames='menu-primary'
                onEnter={calcHeight}
            >
                <div className='menu'>
                    <DropDownItem>My profile</DropDownItem>
                    <DropDownItem
                        leftIcon={<CogIcon/>}
                        rightIcon={<ChevRonIcon/>}
                        goToMenu='settings'
                    >
                        Settings
                    </DropDownItem>
                </div>
            </CSSTransition>
            <CSSTransition
                in={activeMenu === 'settings'}
                unmountOnExit
                timeout={500}
                classNames='menu-secondary'
            >
                <div className='menu'>
                    <DropDownItem leftIcon={<ArrowIcon/>} goToMenu='main'/>
                    <DropDownItem>Settings</DropDownItem>
                    <DropDownItem>Settings</DropDownItem>
                    <DropDownItem>Settings</DropDownItem>
                    <DropDownItem>Settings</DropDownItem>
                    <DropDownItem>Settings</DropDownItem>
                    <DropDownItem>Settings</DropDownItem>
                    <DropDownItem>Settings</DropDownItem>
                    <DropDownItem>Settings</DropDownItem>
                </div>
            </CSSTransition>
        </DropDownContainer>
    );
}

const DropDownContainer = styled.div`
    position: absolute;
    top: 58px;
    width: 300px;
    transform: translateX(-45%);
    background-color: var(--bg);
    border: var(--border);
    border-radius: var(--border-radius);
    padding: 1rem;
    overflow: hidden;
    
    .menu-primary-enter {
        position: absolute;
        transform: translateX(-110%);
    }
    
    .menu-primary-enter-active {
        transition: all var(--speed) ease;
        transform: translateX(-110%);
    }
    
    .menu-primary-exit {
        position: absolute;
    }
    
    .menu-primary-exit-active {
        transform: translateX(-110%);
        transition: all var(--speed) ease;
    }
    
    .menu-secondary-enter {
        transform: translateX(110%);
    }
    
    .menu-secondary-enter-active {
        transition: all var(--speed) ease;
        transform: translateX(0%);
    }
    
    .menu-secondary-exit {
        
    }
    
    .menu-secondary-exit-active {
        transform: translateX(110%);
        transition: all var(--speed) ease;
    }
    
`;

const MenuItemContent = styled.div`
    .menu-item {
        height: 50px;
        display: flex;
        align-items: center;
        border-radius: var(--border-radius);
        transition: background var(--speed);
        padding: 0.5rem;
    }
    .menu-item:hover {
        background-color: #525357;
    }
    
    .icon-right {
        margin-left: auto;
    }
`
