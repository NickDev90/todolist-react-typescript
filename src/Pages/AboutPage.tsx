import React from 'react';
import {useNavigate} from 'react-router-dom';

const AboutPage: React.FC = () => {

    const navigate = useNavigate();

    return (
        <div className='container about-page'>
            <h4 className='about-title'>This project was built for improving and practice knowledge of TypeScript and React.JS</h4>
            <p className='list-title'>Technologies, that were used in the project:</p>

            <ul className='tech-list'>               
                <li><b>React</b> with its hooks, state and router</li>
                <li><b>TypeScript</b> for practice this language </li>
                <li><b>Materialize CSS</b> for quickly creating UI part of App</li>
                <li><b>Local storage</b> that remember our tasks after browser was restarted</li>
            </ul>
            <button className='btn back-btn' onClick={() => navigate('/')}>Back to tasks</button>
        </div>
    );
};

export default AboutPage;