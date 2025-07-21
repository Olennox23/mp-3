import styled from 'styled-components'

const StyledMain=styled.main`
    width : 70%; /* fill in the other 70% */
    display: flex;
    flex-direction: row; /* the main content is now alligned in a row */
    background-color:  #f0f4f8;

    height: 100vh; /* Flexible but ensures full coverage */
    justify-content: center;
    @media screen and (max-width: 750px) {
        padding-top: 5px;
        width: 100%;
    }
`
const StyledBottom = styled.div`
    padding-top: 3vw;
    display : flex;
    flex-direction: row; /* Make the short bio and image side by side */
    width: 100%;
    text-align: center;
    padding-bottom: 2vh ;
    padding-right: 2vw;
    @media screen and (max-width: 750px) {
        display: flex;
        flex-direction: column;
        width: 100%;
        padding-top: 1vh;
        padding-bottom: 3vh;
    }
`
const StyledIntro = styled.p`
    padding: 0 3vw; /* make intro more spacious */
    font-size: calc(15px + 2vh);
    text-align: center;
    @media screen and (max-width: 750px) {
        font-size: calc(5px + 2vh);
    }
`
const StyledBio = styled.p`
    font-size: calc(15px + 2vh); /* make text grow/shrink with scrren */
    padding-left: 1vw;
    @media screen and (max-width: 750px) {
        font-size: calc(5px + 2vh);
       
}
`
const StyledImg = styled.img`
    max-width: 20vw; /* adjust headshot size */
    height: auto;
    padding-right: 1vw;
    padding-left: 2vw;
    @media screen and (max-width: 750px) {
        max-width: 30vh;
        height: auto;
        display: block;
        margin: 0 auto;
        padding-bottom: 3vh;
    }
`
const StyledH2 = styled.h2`
    padding: 2vh;
    text-align: center;
    font-size: calc(20px + 2vw);
    font-family: "Arial", sans-serif, "helavetica";
`

export default function Home() {
    return(
        <StyledMain>
            <div id="top">
                <StyledH2>Home</StyledH2>
                <StyledBottom>
                    <StyledImg src="/131981151_h1ywng57be copy.jpg" alt="Owen Lennox"/>
                    <StyledBio> My name is Owen Lennox, and I am a rising junior at Boston university double majoring in
                        computer Science and Economics. I would like to advance my career by getting into the banking
                        industry.</StyledBio>
                </StyledBottom>

                <StyledIntro> Welcome to my website. On this website, you will find information about my former
                    employment, achievments, and other information about myself.</StyledIntro>
            </div>
        </StyledMain>
    );
}