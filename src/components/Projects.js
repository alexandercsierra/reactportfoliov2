import React from 'react'
import Footer from './Footer'
import styled from 'styled-components'

export default function Projects() {
    return (
        <div>
            <Title>Projects</Title>

            <div>
                <Project>
                    <h3>Here is my project</h3>
                    <p>Here is a description of my project</p>
                </Project>
            </div>
            <Footer footerClass={'footer'}/>
        </div>
    )
}

const Title = styled.h1`
    margin: 4%;
`;

const Project = styled.div`
    display: flex;
    justify-content: space-around;
    margin-bottom: 5%;
    background: #21254f;
    width: 100%;
    height: 200px;
`;
