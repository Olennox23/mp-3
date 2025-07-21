import styled from 'styled-components'

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
const SkillsInner = styled.div`
    display: flex;
    flex-direction: column;
    padding-left:5vw;
    @media screen and (max-width: 750px) {
        display: flex;
        flex-direction: column;
        padding-left: 5vw;
    }
`
const SkillsLi = styled.li`
    border: none;
    background-color: transparent;
    border-left: solid red 5px;
    padding: 0 0 0 1vw;
    font-size: calc(3px + 2vh);
    margin: 20px auto; /* auto center */
    margin-top: 3vh;
    width: 80%;
    color:steelblue;
    text-align: center;
    list-style: none;
    @media screen and (max-width: 750px) {
        border: none;
        background-color: transparent;
        border-left: solid red 5px;
        padding: 0;
        margin: 10px auto;
        font-size: calc(1px + 2vh);
        margin-top: 3vh;
        padding-left: 1vw;
        width: 15%;
    }
`
const StyledH2 = styled.h2`
    padding: 3vh 2vh 2vh 2vh;
    text-align: center;
    font-size: calc(20px + 2vw);
    font-family: "Arial", sans-serif, "helavetica";
    @media screen and (max-width: 750px) {
        
        padding-top: 3vh;
    }
`
const StyledH3 = styled.h3`
    font-size: calc(5px + 2vh);
`
const StyledUl = styled.ul`
    @media screen and (max-width: 750px) {
        display: flex;
        flex-direction: row;
    }
`

export default function Skills() {
    return(
        <StyledMain>

            <SkillsInner>
                <StyledH2> Skills </StyledH2>
                <StyledH3> Programming languages</StyledH3>
                <StyledUl>
                    <SkillsLi> <strong>Java</strong> - <em>Obtained through CS 112- BU</em> </SkillsLi>
                    <SkillsLi> <strong>Python</strong> - <em>Obtained through CS 237, CS 330, CS 132 - BU</em></SkillsLi>
                    <SkillsLi> <strong>XML</strong> - <em> Obtained through CS 460 -BU</em></SkillsLi>
                </StyledUl>
                <StyledUl>
                    <SkillsLi> <strong> SQL </strong> - <em> Obtained through CS 460 - BU</em></SkillsLi>
                    <SkillsLi> <strong>NoSQL</strong> - <em> Obtained through CS 460 - BU </em> </SkillsLi>
                    <SkillsLi> <strong> STATA </strong> - <em> Obtained through EC 204- BU</em></SkillsLi>

                </StyledUl>
                <StyledH3> Qualities </StyledH3>
                <StyledUl>
                    <SkillsLi> <strong> Leadership </strong>  - <em>Obtained through Sigma Chi as Vice president </em></SkillsLi>
                    <SkillsLi> <strong> Teamwork</strong> - <em> Obtained through working with E-board as Sigma Chi Vice-President</em></SkillsLi>
                    <SkillsLi> <strong> Problem-Solving </strong> - <em> Obtained through CS-330 and through Sigma Chi</em></SkillsLi>
                </StyledUl>


            </SkillsInner>
        </StyledMain>

    )
}