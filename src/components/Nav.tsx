import { Link } from "react-router";
import styled from 'styled-components'
const StyledNav=styled.nav`
    background-color: dimgray;
    width : 30%;
    padding-top: 2vw;
    font-size: calc(2px + 1.5vw);
    @media screen and (max-width: 750px) {
        padding-top: 2px;
        padding-bottom: 2px;
        width: 100%;
    }
`
const StyledUl=styled.ul`
    list-style-type: none;
    @media screen and (max-width: 750px) {
        display: flex;
        flex-direction: row;
    }
`
const StyledLi=styled.li`
    border: black solid 1px;
    background-color: lightgray;
    font-size : calc(8px + 2vw);
    padding: 10px;
    margin: 20px auto; /* auto center */
    width: 80%; /* only makes up 80% of parents */
    color:steelblue;
    text-align: center;
    @media screen and (max-width: 750px) {
        font-size: calc(2px + 1.4vw);
        padding: 2px;
        margin: 10px auto;
        width: 15%;
    }
`

export default function Nav() {
    return (
        <StyledNav>
            <StyledUl>
                <StyledLi><p>Links</p></StyledLi>
                <StyledLi><Link to={'/'}> Home </Link> </StyledLi>
                <StyledLi><Link to={'/education'}>Education</Link></StyledLi>
                <StyledLi><Link to={'/experience'}>Experience</Link></StyledLi>
                <StyledLi><Link to = {'/skills'}>Skills</Link></StyledLi>
                <StyledLi><Link to={'/contacts'}>Contacts</Link></StyledLi>
                <StyledLi><Link to= {'/projects'}>Projects</Link></StyledLi>
                <StyledLi><Link to={"https://www.linkedin.com/in/owen-lennox-414771293/"}>LinkedIn Profile</Link></StyledLi>
            </StyledUl>
        </StyledNav>
    );
}