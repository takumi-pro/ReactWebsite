import React, { useState, useEffect, VFC } from 'react'
import { FaBars, FaTimes } from 'react-icons/fa'
import { IconContext } from 'react-icons/lib'

import { Button } from '../../globalStyles'
import {
    Nav,
    NavbarContainer,
    NavLogo,
    NavIcon,
    MobileIcon,
    NavMenu,
    NavItem,
    NavLinks,
    NavItemBtn,
    NavBtnLink,
} from './Navbar.elements'

const Navbar: VFC = () => {
    const [click, setClick] = useState<boolean>(false)
    const [button, setButton] = useState<boolean>(true)

    const handleClick = (): void => setClick(!click)

    const showButton = (): void => {
        if (window.innerHeight <= 960) {
            setButton(false)
        } else {
            setButton(true)
        }
    }
    console.log('render')

    useEffect((): void => {
        showButton()
    }, [])

    window.addEventListener('resize', showButton)

    return (
        <>
            <IconContext.Provider value={{ color: '#fff' }}>
                <Nav>
                    <NavbarContainer>
                        <NavLogo to="/">
                            <NavIcon />
                            GAME
                        </NavLogo>
                        <MobileIcon onClick={handleClick}>
                            {click ? <FaTimes /> : <FaBars />}
                        </MobileIcon>
                        <NavMenu onClick={handleClick} click={click}>
                            <NavItem>
                                <NavLinks to="/">Home</NavLinks>
                            </NavItem>
                            <NavItem>
                                <NavLinks to="/">about</NavLinks>
                            </NavItem>
                            <NavItem>
                                <NavLinks to="/service">service</NavLinks>
                            </NavItem>
                            <NavItemBtn>
                                {button ? (
                                    <NavBtnLink to="/sign-up">
                                        <Button primary>SIGN UP</Button>
                                    </NavBtnLink>
                                ) : (
                                    <NavBtnLink to="/sign-up">
                                        <Button primary fontBig>
                                            SIGN UP
                                        </Button>
                                    </NavBtnLink>
                                )}
                            </NavItemBtn>
                        </NavMenu>
                    </NavbarContainer>
                </Nav>
            </IconContext.Provider>
        </>
    )
}

export default Navbar
