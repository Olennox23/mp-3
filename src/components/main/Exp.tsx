import styled from 'styled-components'

const StyledMain = styled.main`
    width : 70%; /* fill in the other 70% */
    display: flex;
    flex-direction: row; /* the main content is now alligned in a row */
    background-color:  #f0f4f8;
    height: 100vh;
    text-align: center;
    padding-top: 1vh;
    padding-bottom: 0;
    @media screen and (max-width: 750px) {
        width: 100%;
    }
   
`
const StyledTable = styled.table`
    width: 90%;
    border-collapse: collapse; /* merges adajcent borders into one single border */
    border: 3px solid steelblue;
    margin: 0 auto;
    padding: 2vh 0;
    @media screen and (max-width: 750px) {
        margin: 4vh auto;
    }
    
`
const StyledTd = styled.td`
    font-size: calc(8px + 2vh);
    padding: 1vw;
    border: 3px solid steelblue;
    @media screen and (max-width: 750px) {
        font-size: calc(8px + 2vh);
        padding: 1vw;
        border: 3px solid steelblue;
    }
`
const StyledH2 = styled.h2`
    padding: 2vh;
    text-align: center;
    font-size: calc(20px + 2vw);
    font-family: "Arial", sans-serif, "helavetica";
    @media screen and (max-width: 750px) {
        font-size: calc(10px + 2vh);
        
    }
`
const StyledDiv = styled.div`
    width: 95%;
    text-align: center;
    padding-top: 3px;
    padding-bottom: 0;
    margin: 0 auto;
`

export default function Exp() {
    return(
        <StyledMain>
            <StyledDiv>
                <StyledH2 > Experience and Employment</StyledH2>

                <StyledTable>
                    <thead>
                        <tr>
                            <StyledTd><strong><em>Orginization </em></strong> </StyledTd>
                            <StyledTd><strong><em>Role</em></strong></StyledTd>
                            <StyledTd><strong><em>Years</em></strong></StyledTd>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <StyledTd>Seapointe Village</StyledTd>
                            <StyledTd>Lifegaurd Supervisor</StyledTd>
                            <StyledTd>June, 2019- Sep, 2024</StyledTd>
                        </tr>
                    </tbody>
                    <tbody>
                        <tr>
                            <StyledTd>Sigma Chi</StyledTd>
                            <StyledTd>Educator</StyledTd>
                            <StyledTd>May,2024-May, 2025</StyledTd>
                        </tr>
                    </tbody>
                    <tbody>
                        <tr>
                            <StyledTd>Sigma Chi</StyledTd>
                            <StyledTd>Scolarship Chair</StyledTd>
                            <StyledTd>Jan, 2025 - May, 2025</StyledTd>
                        </tr>
                    </tbody>
                    <tbody>
                        <tr>
                            <StyledTd>Sigma Chi</StyledTd>
                            <StyledTd>Vice-President</StyledTd>
                            <StyledTd>May, 2025 - Present</StyledTd>
                        </tr>
                    </tbody>
                    <tbody>
                        <tr>
                            <StyledTd>Helens Leather</StyledTd>
                            <StyledTd> Cashier</StyledTd>
                            <StyledTd>Junen, 2025 - Present</StyledTd>
                        </tr>
                    </tbody>
                </StyledTable>
            </StyledDiv>
        </StyledMain>
    )
}