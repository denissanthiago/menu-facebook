import React from 'react';
import styled from 'styled-components';

export const NavComponent = (props) => {
    return(
        <NavStyle>
            <NavUl>
                { props.children }
            </NavUl>
        </NavStyle>
    );
}

const NavStyle = styled.nav`
    height: var(--nav-size);
    background-color: var(--bg);
    padding: 0 1rem;
    border-bottom: var(--border);
`;

const NavUl = styled.ul`
    max-width: 100%;
    height: 100%;
    display: flex;
    justify-content: flex-end;
`


