import React, { useEffect, useState } from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

//styles
import {colorPalette, breakpoints} from "../styles/globalStyles"

//styled components
import { createGlobalStyle } from "styled-components";
import { normalize } from "styled-normalize";

//fonts
import * as font from "../fonts";

//components
import Header from "./header";
import Menu from "./menu"
import { AnimatePresence, motion } from "framer-motion";

//global style
const GlobalStyle = createGlobalStyle`
${normalize}
@font-face {
  font-family: "CeraPro";
  font-weight: normal;
  font-style: normal;
  src: url("${font.CeraPro}") format("opentype");
  font-display: swap;
}
@font-face {
  font-family: "Archia";
  font-weight: normal;
  font-style: normal;
  src: url("${font.Archia}") format("truetype");
  font-display: swap;
}
* {
  box-sizing: border-box;
}
html,
body {
  height: 100%;
}

body {
  height: 100%;
  font-size: 16px;
  font-family: 'CeraPro', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  background: ${colorPalette.background};
  -webkit-font-smoothing: antialiased;
  overscroll-behavior-y: none;
  overflow-x: hidden;
}

h1,
h2,
h3 {
  margin: 0 0 1.05rem;
  font-weight: normal;
}
h1 {
  font-family: "Archia";
  letter-spacing: -2.5px;
  color: ${colorPalette.green};
  line-height: 1.15;
  font-size: 4vw;
  @media (max-width: ${breakpoints.xl}px){
      font-size: 3.3vw;
  }
  @media (max-width: ${breakpoints.m}px){
      font-size: 4vw;
  }
  @media (max-width: ${breakpoints.s}px){
      font-size: 8vw;
  }    
}
h2 {
  font-family: "Archia";
  font-size: 1.4em;
  letter-spacing: -1px;
  @media (max-width: ${breakpoints.s}px){
    font-size: 6vw;
  }
}
h3 {
  font-family: "CeraPro";
  font-size: 1.3vw;
  line-height: 1.3;
  margin-top: 0;
  @media (max-width: ${breakpoints.xl}px){
      font-size: 1.8vw;
  }
  @media (max-width: ${breakpoints.m}px){
      font-size: 2vw;
      line-height: 1.4;
  }
  @media (max-width: ${breakpoints.s}px){
      font-size: 4vw;
  }
}
h4 {
  font-family: "CeraPro";
  font-size: 1.2vw;
  line-height: 1.3;
  font-weight: normal;
  margin-top: 0;
  @media (max-width: ${breakpoints.xl}px){
      font-size: 1.8vw;
  }
  @media (max-width: ${breakpoints.m}px){
      font-size: 2vw;
      line-height: 1.4;
  }
  @media (max-width: ${breakpoints.s}px){
      font-size: 3.5vw;
  }
}
p {
  font-size: 1.1em;
  //text-transform: uppercase;
  letter-spacing: -1px;
  font-family: "Archia";
  color: ${colorPalette.green};
  @media (max-width: ${breakpoints.s}px){
    font-size: 0.9rem;
  }
  @media (max-width: ${breakpoints.xs}px){
    font-size: 0.8em;
  }
}
.body-lock {
  overflow-y: hidden;
  position:absolute;  
  background-color: rgba(153, 153, 153, 0.9);
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
}
a {
  position: relative;
  text-decoration: none;
  color: ${colorPalette.text};
  transition: ease-in-out 0.2s;
  &:hover {
    opacity: 0.5;
  }
  &.no-hover {
    &:hover {
      opacity: 1;
    }
  }
}

`;
if (typeof window !== "undefined") {
  // eslint-disable-next-line global-require
  require("smooth-scroll")('a[href*="#"]')
}

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)


  const [toggleMenu, setToggleMenu] = useState(false)

  useEffect(() => {
    toggleMenu
      ? document.body.classList.add("body-lock")
      : document.body.classList.remove("body-lock")
  }, [toggleMenu])

  return (
    <>
      <AnimatePresence>
      <GlobalStyle />
      <motion.div
      key={"home2"}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{duration: 1, ease: "easeInOut"}}
      exit={{ opacity: 0 }}
      >
      <Header 
      toggleMenu={toggleMenu}
      setToggleMenu={setToggleMenu}
      siteTitle={data.site.siteMetadata.title} />
      <Menu
      toggleMenu={toggleMenu}
      setToggleMenu={setToggleMenu}
      />
      <main>{children}</main>
      </motion.div>
      </AnimatePresence>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
