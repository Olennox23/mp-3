import styled from 'styled-components'
import {StyledH2} from './styled-components.ts'

const StyledMain= styled.main`
    width : 70%; /* fill in the other 70% */
    display: flex;
    flex-direction: row; /* the main content is now alligned in a row */
    background-color:  #f0f4f8;
    height: 100vh; /* Flexible but ensures full coverage */
    justify-content: center;
    @media screen and (max-width: 750px) {
        width: 100%;
        padding-top: 5px;
        
    }
`
const StyledTable = styled.table`
    font-size: calc(5px + 2vh);
    background-color: lightblue;
    border: 1px solid black;
    @media screen and (max-width: 750px) {
        font-size: calc(5px + 1vh);
        background-color: lightblue;
        margin: 4vh auto;
        
    }
`
const StyledTd = styled.td`
    border-color: steelblue;
    border-style: solid;
    border-width: 3px;
    padding-bottom: 3vh;
`
const StyledInner = styled.div`
    display: flex;
    flex-direction: column;
    width: 95%;
    text-align: center;
    padding-top: 3px;
    padding-bottom: 0;
    margin: 0 auto;
`
const StyledH3 = styled.h3`
    padding: 2vh;
    font-size: calc(5px + 2vh);
`
export default function Contacts() {
    return(
        <StyledMain>
            <StyledInner>
                <StyledH2> References / Contacts</StyledH2>
                <StyledH3> My contact Information</StyledH3>

                <StyledTable>
                    <thead>
                        <tr>
                            <StyledTd><strong>Name</strong></StyledTd>
                            <StyledTd><strong>Phone Number</strong></StyledTd>
                            <StyledTd><strong>Email</strong></StyledTd>
                            <StyledTd><strong>LinkedIn</strong></StyledTd>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <StyledTd>Owen Lennox</StyledTd>
                            <StyledTd> <em>973-868-7474 </em></StyledTd>
                            <StyledTd><em>olennox@bu.edu</em></StyledTd>
                            <StyledTd><em><a href = "https://www.linkedin.com/in/owen-lennox-414771293/"> link</a> </em></StyledTd>
                        </tr>
                    </tbody>
                </StyledTable>
                <StyledH3> My References</StyledH3>
                <StyledTable>
                    <thead>
                        <tr>
                            <StyledTd><strong>Name</strong></StyledTd>
                            <StyledTd><strong>Phone Number</strong></StyledTd>
                            <StyledTd><strong>Email</strong></StyledTd>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <StyledTd>Keith Lennox</StyledTd>
                            <StyledTd><em>917-671-6264</em></StyledTd>
                            <StyledTd><em>keithlennox@comcast.net</em></StyledTd>
                        </tr>
                    </tbody>
                    <tbody>
                        <tr>
                            <StyledTd> Jim Yost</StyledTd>
                            <StyledTd> N/A</StyledTd>
                            <StyledTd><em>yostopmc@comcast.net</em></StyledTd>
                        </tr>
                    </tbody>
                </StyledTable>

            </StyledInner>
        </StyledMain>
    )
}