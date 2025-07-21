import styled from 'styled-components'
const StyledHead=styled.header`
    background-color: steelblue;
    width : 100%;
    padding-left: 5px;
    padding-top: 5px;
    padding-bottom: 5px;
    font-size: 16px;
    font-weight: 700;
    @media screen and (max-width: 750px) {
        text-align: center;
    }
  
`
const StyledP=styled.p`
    font-weight: normal;
`
export default function Header() {

    return(
        <StyledHead>
            <h1>Owen Lennox</h1>
            <StyledP> My Online <strong>Resume</strong></StyledP>
        </StyledHead>
    )
}