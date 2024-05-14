import React from 'react';
import './projectBlockStyles.css';

interface link {
    demoTextLink: string;
    demoText: string;
}

// Define the interface for the component's props
interface ProjectBlockProps {
    name: string;
    body: string;
    links: link[];
    languages: string[];
}

// Define the component function and specify its props type
const ProjectBlock: React.FC<ProjectBlockProps> = ({ name, body, links, languages }) => {
    return (
        <div id="projectBlockWrapper">
            <div id="projectBlock">
                <div id="projectBlockHeader">
                    <h3>{name}</h3>
                </div>
                <div id= "projectBody"> 
                    <div id = "projectContents">
                        <p id = "proectbodyText">{body}</p>
                        <div id = "projectLinks">
                        {links.map((link, index) => (
                             <a key={index} id={`demoImageLinkID_${index}`} className="defaultLink" href={link.demoTextLink}>
                                {link.demoText}
                            </a>
                        ))}
                        </div>
                    </div>
                    <div id ="languagesList" className='languageListProject'>
                        {languages.map((point1, index1) => (
                                <p className='languageListElement' key={index1}>{point1}</p>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProjectBlock;
