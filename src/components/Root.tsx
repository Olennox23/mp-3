import{ Routes, Route, useLocation} from 'react-router';
import Header from './Header.tsx';
import Nav from './Nav.tsx';
import Home from './main/Home.tsx';
import Education from './main/Education.tsx';
import Exp from './main/Exp.tsx';
import Skills from './main/Skills.tsx';
import Contacts from './main/Contacts.tsx';
import Projects from './main/Projects.tsx';
import Footer from './Footer';

import styled from 'styled-components'

const Wrapper=styled.div<{$bool: boolean}>`
    width: ${(props) => (props.$bool ? '100vw' : '80vw')};
    margin: auto; /* make margin even on both sides */
    background-color:  #f0f4f8;
    
`
const Container=styled.div`
    display: flex;
    flex-direction: row;
    width: 100%;
    @media screen and (max-width: 750px) {
            display: flex;
            flex-direction: column;
            width: 100%;
    };
`


export default function Root(){
    const location = useLocation();
    const isProjectsPage = location.pathname === '/projects';
    return(
        <Wrapper $bool = {isProjectsPage}>
            {!isProjectsPage && <Header />}

            <Container>
                {!isProjectsPage && <Nav />}

                <Routes>
                    <Route path={`/`} element={<Home/>}/>
                    <Route path={`/education`} element={<Education/>}/>
                    <Route path = {`/experience`} element={<Exp/>}/>
                    <Route path = {`/skills`} element={<Skills/>}/>
                    <Route path = {`/contacts`} element={<Contacts/>}/>
                    <Route path = {`/projects`} element={<Projects/>}/>
                    <Route path={"https://www.linkedin.com/in/owen-lennox-414771293/"}/>
                </Routes>
            </Container>

            {!isProjectsPage && <Footer/>}

        </Wrapper>
    );
}