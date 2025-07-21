import {useState} from "react";
import styled from 'styled-components'
import useColorCheck from "./useColorCheck.tsx";
import {Link} from "react-router";

const StyledOutput = styled.p<{$color: boolean}>`
    color: ${props => props.$color ? 'black' : 'red'};
    font-size: calc(5px + 3vh);
    text-align: center;
    @media screen and (max-width: 600px){ /* make font smaller for smaller screens */
            font-size: calc(10px + 1vw);

            text-align: center;  }
`
const StyledWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100vw;
    background-image: url('/try.jpeg');
    height: 100vh;
`
const StyledNav=styled.nav`
    color:lightskyblue;
    text-align: center;
    font-size: calc(10px + 4vh);
    padding: 2vh;
`
const StyledLink= styled(Link)`
    color:lightblue;
    text-decoration: none;
`
const StyledHeader = styled.header`
    color: lightblue;
    text-align: center;
    font-size: calc(10px + 4vh);
    padding: 2vh;
`
const StyledInput = styled.input`
    width: 12vw; /* height.width of box */
    height: 12vh;
    background-color: lightsalmon;
    font-size: calc(10px + 4vh);
    text-align: center; /* text in input is centered */
`
const StyledInput1 = styled.input`
    width: 12vw; /* height.width of box */
    height: 12vh;
    background-color: lightsalmon;
    font-size: calc(10px + 4vh);
    text-align: center; /* text in input is centered */
    margin-bottom: 2vh;
`
const StyledSepInput = styled.div`
    display: flex;
    flex-direction: column;
`
const Ops = styled.div`
    display: flex;
    flex-direction: column;
    background-color: lightgray;
`
const StyledButton = styled.button`
    width: 8vw;
    height: 8vw;
    border-radius: 999px; /* automatically bends the shape to make an oval no matter what */
    margin: 1vh 1vw;
    background-color: lightsalmon;
    font-size: calc(5px + 2vh);
`
const StyleCalc = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;/* center inputs height wize */

    border: 2px solid gray;
    background-color: darkgray;
    margin-bottom : 3vh;
`
const OutputBox = styled.div`
    border: white;
    padding: 1vh 1vw;
    margin-top: 5vh;
    background: lightcyan;
    width: 40vw;              /* have width adjust with cahnging screen*/
    height: 13vh;              /* have height adjust with cahnging screen*/
    text-align: center;
    display: flex;
    align-items: center;       /* vertical centering */
    justify-content: center;  /* horizontal centering */
    border-radius: 10px;
`

export default function Projects() {
    const [first, setFirst] = useState(``);
    const [second, setSecond] = useState(``)
    const [result, setResult] = useState< number | null>(null);
    const $color = useColorCheck(result ?? 0);

    function addition() {
        const a = Number(first);
        const b = Number(second);
        const sum = a + b;
        setResult(sum);

    }
    function subtract() {
        const a = Number(first);
        const b = Number(second);
        const diff = a - b;
        setResult(diff);

    }
    function multiply() {
        const a = Number(first);
        const b = Number(second);
        const prod = a * b;
        setResult(prod);

    }
    function divide() {
        const a = Number(first);
        const b = Number(second);
        const quot = a / b;
        setResult(quot);

    }
    function exp() {
        const a = Number(first);
        const b = Number(second);
        let temp = 1; // make temp to hold value
        if(b<0){ //check if b is negative
            const neg = 1/a //if neg, you multiply by flipping the number
            const count = b *- 1; // make a second so that the for loop will work
            for (let i = 0; i < count; i++) {
                temp *= neg;//multiply

            }

        }
        else {
            for (let i = 0; i < b; i++) { // multiply first by itself two times
                temp *= a;
            }

        }
        setResult(temp)

    }
    function clearfields() {
        setFirst('');
        setSecond('');
        setResult(null);
    }
    return (
        <StyledWrapper>
            <StyledHeader>

                <h1> Calculator</h1>
            </StyledHeader>
            <StyledNav>
                <ul>
                    <li><StyledLink to= {'/'}> Back to Home </StyledLink></li>
                </ul>
            </StyledNav>
            <OutputBox>
                <div id="output-table">
                    <StyledOutput $color={$color}>
                        {result}
                    </StyledOutput>
                </div>
            </OutputBox>
            <main>
                <StyleCalc>
                    <StyledSepInput>
                        <label htmlFor="first"> </label> <StyledInput1 type="text" id="first" onChange={(e) => setFirst(e.target.value)}/>
                        <label htmlFor="second"> </label><StyledInput type="text" id="second" onChange={(e) => setSecond(e.target.value)}/>
                    </StyledSepInput>

                    <Ops>
                        <div id="row1">
                            <StyledButton onClick={addition} >+</StyledButton>
                            <StyledButton onClick={subtract}>-</StyledButton>
                        </div>
                        <div id="row2">
                            <StyledButton onClick={multiply}>*</StyledButton>
                            <StyledButton onClick={divide}>/ </StyledButton>
                        </div>
                        <div id="row3">
                            <StyledButton onClick={exp}> **</StyledButton>
                            <StyledButton onClick={clearfields}>Clear</StyledButton>
                        </div>
                    </Ops>

                </StyleCalc>


            </main>
        </StyledWrapper>
    );
}