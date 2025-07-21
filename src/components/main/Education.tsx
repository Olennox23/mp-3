import styled from 'styled-components';


const StyledMain=styled.main`
    
    align-items: center;
    padding-top: 3px;
    padding-bottom: 0;
    height: 100vh;
    width: 70%;
    @media screen and (max-width: 750px) {
        width: 100%;
    }
    
`
const EducationLi = styled.li`
    list-style: none;
    border: none;
    border-left: goldenrod solid 3vw;
    background-color: lightgray;
    font-size : calc(8px + 2vw);
    padding: 10px;
    margin: 20px auto; /* auto center */
    width: 80%; /* only makes up 80% of parents */
    color:steelblue;
    text-align: center;
    @media screen and (max-width: 750px) {
        width: 90%;
        font-size: calc(2px + 2vh);
        margin-bottom: 4vh ;
        padding: 2px;
    }
`
const EducationUl = styled.ul`
    padding-bottom: 2vh;
    list-style: none;
    @media screen and (max-width: 750px) {
        
    }
 
`
const Image = styled.img`
    width : 10vw;
    height: 10vh;
    padding: 1vh 1vw;
    background-color: transparent;
`
const PcBio = styled.p`
    padding-top: 1vh;
    padding-bottom: 1vh;
    font-size: calc(8px + 1vh);
`
const PcSep = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    width: 100%;
`
const BuBio = styled.p`
    padding-top: 2vh;
    text-align: center;
    font-size: calc(8px + 1vh);
`
const BuSep = styled.div`
    display: flex;
    flex-direction: row;
    width: 100%;
    align-items: center;
`
const CourseWorkUl = styled.ul`
    @media screen and (max-width: 750px) {
        display: flex;
        flex-direction: row;
    }
`
const CourseWorkLi = styled.li`
    font-size: calc(8px + 1vh);
    list-style: none;
    padding:0;
    border-left:red solid 3px;
    margin: 20px auto; /* auto center */
    width: 80%; /* only makes up 80% of parents */
    color:steelblue;
    text-align: center;
    @media screen max-width: 750px {
        
    }
    
    
`
const StyledH2 = styled.h2`
    padding: 2vh;
    text-align: center;
    font-size: calc(20px + 2vw);
    font-family: "Arial", sans-serif, "helavetica";
    @media screen and (max-width: 750px) {
        padding-top: 3vh;
        padding-bottom: 0 ;
    }
`

export default function Education() {
    return (
        <StyledMain>

                <StyledH2>Education History</StyledH2>
                <EducationUl>
                    <EducationLi> Paramus Catholic, 2019-2023
                        <PcSep><PcBio> I attended Paramus Catholic for
                        four years, In those years, I participated in sports, clubs, and developed my love for computer
                        science.</PcBio><Image src="../../../public/pc.png" alt="Paramus Catholic"/>
                        </PcSep>
                    </EducationLi>
                    <EducationLi> Boston University, 2023-Present
                        <BuSep>
                            <BuBio>I am currently attending, Boston
                            University. I am double majoring in computer science and Economics. At BU, I have become very
                            involved in the Sigma Chi fraternity. I currently hold the position of vice president.</BuBio>
                            <Image src="../../../public/bu.png" alt="Boston University"/>
                        </BuSep>
                    </EducationLi>
                    <EducationLi> Relevant Course Work, Boston University
                        <div id= "coursework">
                            <CourseWorkUl>
                                <CourseWorkLi>CAS CS:330, Introduction to Algorithm Analysis- Grade: A</CourseWorkLi>
                                <CourseWorkLi>CAS CS:237 Probability in Computing- Grade: A</CourseWorkLi>
                                <CourseWorkLi>CAS EC:341, Monetary and Banking Institutions- Grade: A</CourseWorkLi>
                            </CourseWorkUl>
                        </div>
                    </EducationLi>
                </EducationUl>


        </StyledMain>

    );
}