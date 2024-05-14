import React from 'react';
import './experienceBlockStyles.css';

// Define the interface for the component's props
interface ExperienceBlockProps {
    name: string;
    date: string;
    body: string[];
    languages: string[];
}

// Define the component function and specify its props type
const ExperienceBlock: React.FC<ExperienceBlockProps> = ({ name, date, body, languages }) => {
    return (
        <div id="experienceBlockWrapper">
            <div id="experienceBlock">
                <div id="experienceBlockHeader">
                    <h3>{name}</h3>
                    <p id ="experienceDate">{date}</p>
                </div>
                <div id="experiencebody"> 
                    <ul id = "experienceList">
                        {body.map((point, index) => (
                            <li className='experienceListElement' key={index}>{point}</li>
                        ))}
                    </ul>
                    <div id ="languagesList">
                    {languages.map((point1, index1) => (
                            <p className='languageListElement' key={index1}>{point1}</p>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ExperienceBlock;
