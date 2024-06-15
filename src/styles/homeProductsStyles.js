import { motion } from "framer-motion";
import styled from "styled-components";
import {colorPalette, breakpoints} from "./globalStyles"

export const HomeProdWrap = styled(motion.div)` 
    position: relative;
    height: 100vh;
    width: 100%;
    //border-bottom: 1px solid ${colorPalette.darkgrey};
    @media (max-width: ${breakpoints.xl}px){
        height: 700px;
    }
    @media (max-width: ${breakpoints.l}px){
        height: 600px;
    }
    @media (max-width: ${breakpoints.s}px){
        height: auto;
        //border-bottom: none;
    } 
`
export const HomeProdWrapInner = styled.div` 
    position: relative;
    width: 100%;
    height: 100%;
    display: flex;
    @media (max-width: ${breakpoints.s}px){
        display: block;
    } 
`
export const HomeProdImage = styled.div` 
    position: relative;
    width: 50%;
    height: 100%;
    display: flex;
    padding-top: 20px;
    align-items: center;
    justify-content: center;
    //border-right: 1px solid ${colorPalette.darkgrey};
    @media (max-width: ${breakpoints.s}px){
        border-right: none;
        width: 100%;
        height: auto;
        padding: 0; 
        flex-direction: column; 
        align-items: flex-start;  
    }
    .bopp{
        position: relative;
        padding: 15% 0 0 40px;
        //margin-bottom: 0;
        @media (min-width: ${breakpoints.s}px){
            display: none;
        } 
    }
    .bop {
        position: relative;
        width: 400px;
        height: 500px;
        @media (max-width: ${breakpoints.xl}px){
            width: 300px;
            height: 400px;
        } 
        @media (max-width: ${breakpoints.m}px){
            width: 250px;
            height: 350px;
        } 
        @media (max-width: ${breakpoints.s}px){
            padding: 0 20px;
            width: 100%;
            height: 100%;
            margin-bottom: 15%;
        } 
    }

`
export const DragText = styled.div`
    position: absolute;
    transform-origin: top left;
    transform: translateY(100%) rotate(-90deg);
    left: 0;
    top: 70%;
    @media (max-width: ${breakpoints.s}px){
        top: 50%;
    } 
    p {
        text-transform: none;
        margin: 0;
        padding: 20px;
        color: ${colorPalette.blue};
        @media (max-width: ${breakpoints.s}px){
            padding: 0;
        } 
    }
`

export const SliderInner = styled.div`
  height: 100%;
  width: 100%;
  cursor: grab;
  p {
    text-transform: none;
    color: ${colorPalette.background};
    color: ${colorPalette.text};
  }
`;

export const HomeProdText = styled(motion.div)`
    position: relative;
    width: 50%;
    height: 100%;
    display: flex;
    padding: 20px 60px 0 100px;
    justify-content: center;
    flex-direction: column;
    @media (max-width: ${breakpoints.xl}px){
        //padding-left 80px;
    }
    @media (max-width: ${breakpoints.m}px){
        padding: 20px 30px 0 50px;
    }
    @media (max-width: ${breakpoints.s}px){
        width: 100%;
        height: 50%;
        padding: 0px 40px 0px;    
    }
    @media (max-width: ${breakpoints.xs}px){
        padding-left: 30px;
    }
    h1 {
        @media (max-width: ${breakpoints.s}px){
            //margin-top: 15%;
            display: none;
        }
    }

`