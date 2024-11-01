import React, { useState } from 'react';

//styles
import {HeaderWrap, HeaderItems, Logo, LogoImg, LogoText, HamburgerMenu} from "../styles/headerStyles"

//icon
import LogoIcon from "../assets/images/new-site-logo.png"
import { Link } from 'gatsby';
import { motion } from 'framer-motion';

const transition = { duration: 1.5, ease: [0.165, 0.84, 0.44, 1] };

const Header = ({ toggleMenu, setToggleMenu }) => {
    const [hovered, setHovered] = useState(false)
    return (
            <HeaderWrap>
                <HeaderItems>
                    <Logo>
                        <LogoImg>
                            <Link to="/" >
                            <img src={LogoIcon} alt="faholo icon"/>
                            {/* <p>Faholo<br/>Chemicals&nbsp;Ltd.</p> */}
                            </Link>
                        </LogoImg>
                        <LogoText>
                            <Link to="/">Home</Link>                            
                            <Link to="/products">Our Products</Link>
                            <Link to="/about">About us</Link>
                            <Link to="/contact">Contact us</Link>
                            <Link to="/stockists">Stockists</Link>   
                            <Link to="/"><span className="disabled">Insights</span><span className="label">Soon</span></Link>
                            <Link to="/"><span className="disabled">Careers</span><span className="label">Soon</span></Link>                                                       
                       </LogoText>                      
                    </Logo>
                    <HamburgerMenu onHoverStart={() => setHovered(!hovered)}
          onHoverEnd={() => setHovered(!hovered)} onClick={() => setToggleMenu(!toggleMenu)}>
                        <motion.span
                        animate={{ x: hovered ? -5 : 0}}
                        transition={{...transition}}
                        ></motion.span>
                        <motion.span
                        animate={{ x: hovered ? 5 : 0}}
                        transition={{...transition}}
                        ></motion.span>
                        <motion.span
                       animate={{ x: hovered ? -5 : 0}}
                       transition={{...transition}}
                        ></motion.span>
                    </HamburgerMenu>
                </HeaderItems>       
        </HeaderWrap>
    
    );
}

export default Header;
