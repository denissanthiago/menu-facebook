import React, {useState} from 'react';
import styled from 'styled-components';

export const NavItem = (props) => {

    const [ open, setOpen ] = useState(false);

    const Open = () => {
        setOpen( (prevState => !prevState) );
    }

    return(
        <ListItem>
            <a onClick={ Open } className='icon-button' >
                { props.icon }
            </a>
            {
                open && props.children
            }
        </ListItem>
    );
}

const ListItem = styled.li`
    width: calc(var(--nav-size)*0.8);
    display: flex;
    align-items: center;
    justify-content: center;
    
    .icon-button {
        --button-size: calc(var(--nav-size)*0.5);
        width: var(--button-size);
        height: var(--button-size);
        background-color: var(--bg-accent);
        border-radius: 50%;
        padding: 5px;
        margin: 2px;
        display: flex;
        align-items: center;
        justify-content: center;
        transition: filter 300ms;
    }
    
    .icon-button:hover {
        filter: brightness(1.2);
        cursor: pointer;
    }
    
    .icon-button svg {
        fill: var(--text-color);
        width: 20px;
        height: 20px;
    }
    
`
