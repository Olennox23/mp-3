import { Link } from 'react-router';
import styled from 'styled-components'

const StyledFooter= styled.footer`
    background-color: steelblue;
    width : 100%;
    padding-left: 5px;
    font-size: calc(3px + 2vw);
`
export default function Footer() {
    return(
        <StyledFooter>
            <p> All rights reserved by Owen Lennox <Link to={'../credits/credits.html'}>Credits</Link> &#169;</p>
        </StyledFooter>
    )
}