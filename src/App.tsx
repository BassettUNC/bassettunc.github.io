import ExperienceBlock from './experienceBlock';
import ProjectBlock from './ProjectBlock'

import './App.css'

function App() {

  const handleScrollToRightContent = () => {
    const rightContent = document.getElementById('rightContent');
    if (rightContent != null) {
      rightContent.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div id = "wrapper">
      <div id ="contentWrapper">
      <div id = "leftContent">
        <div>
          <div id = "headerComponents"> 
            <h1 className="headerText">Elijah Bassett</h1>
            <h4 className="headerText">I create things.</h4>
          </div>
          <div id = "socialLinks">

            <a href="https://www.linkedin.com/in/elijah-bassett/" className="socialLinkContainer"> 
              <svg className="socialLink" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
            </a>

            <a href="https://github.com/BassettUNC/" className="socialLinkContainer"> 
              <svg className="socialLink" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-4.466 19.59c-.405.078-.534-.171-.534-.384v-2.195c0-.747-.262-1.233-.55-1.481 1.782-.198 3.654-.875 3.654-3.947 0-.874-.312-1.588-.823-2.147.082-.202.356-1.016-.079-2.117 0 0-.671-.215-2.198.82-.64-.18-1.324-.267-2.004-.271-.68.003-1.364.091-2.003.269-1.528-1.035-2.2-.82-2.2-.82-.434 1.102-.16 1.915-.077 2.118-.512.56-.824 1.273-.824 2.147 0 3.064 1.867 3.751 3.645 3.954-.229.2-.436.552-.508 1.07-.457.204-1.614.557-2.328-.666 0 0-.423-.768-1.227-.825 0 0-.78-.01-.055.487 0 0 .525.246.889 1.17 0 0 .463 1.428 2.688.944v1.489c0 .211-.129.459-.528.385-3.18-1.057-5.472-4.056-5.472-7.59 0-4.419 3.582-8 8-8s8 3.581 8 8c0 3.533-2.289 6.531-5.466 7.59z"/></svg>        
            </a>

            <a href="https://www.instagram.com/elijah1539/" className="socialLinkContainer"> 
              <svg className="socialLink" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M15.233 5.488c-.843-.038-1.097-.046-3.233-.046s-2.389.008-3.232.046c-2.17.099-3.181 1.127-3.279 3.279-.039.844-.048 1.097-.048 3.233s.009 2.389.047 3.233c.099 2.148 1.106 3.18 3.279 3.279.843.038 1.097.047 3.233.047 2.137 0 2.39-.008 3.233-.046 2.17-.099 3.18-1.129 3.279-3.279.038-.844.046-1.097.046-3.233s-.008-2.389-.046-3.232c-.099-2.153-1.111-3.182-3.279-3.281zm-3.233 10.62c-2.269 0-4.108-1.839-4.108-4.108 0-2.269 1.84-4.108 4.108-4.108s4.108 1.839 4.108 4.108c0 2.269-1.839 4.108-4.108 4.108zm4.271-7.418c-.53 0-.96-.43-.96-.96s.43-.96.96-.96.96.43.96.96-.43.96-.96.96zm-1.604 3.31c0 1.473-1.194 2.667-2.667 2.667s-2.667-1.194-2.667-2.667c0-1.473 1.194-2.667 2.667-2.667s2.667 1.194 2.667 2.667zm4.333-12h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm.952 15.298c-.132 2.909-1.751 4.521-4.653 4.654-.854.039-1.126.048-3.299.048s-2.444-.009-3.298-.048c-2.908-.133-4.52-1.748-4.654-4.654-.039-.853-.048-1.125-.048-3.298 0-2.172.009-2.445.048-3.298.134-2.908 1.748-4.521 4.654-4.653.854-.04 1.125-.049 3.298-.049s2.445.009 3.299.048c2.908.133 4.523 1.751 4.653 4.653.039.854.048 1.127.048 3.299 0 2.173-.009 2.445-.048 3.298z"/></svg>
            </a>
          </div>
        </div>
      </div> {/* Closing leftContent */}

      <div id= "mobileScrollIconContainer" onClick={handleScrollToRightContent}>
          <svg id = "mobileScrollIcon" width="24" height="24" xmlns="http://www.w3.org/2000/svg" fillRule="evenodd" clipRule="evenodd"><path d="M11 21.883l-6.235-7.527-.765.644 7.521 9 7.479-9-.764-.645-6.236 7.529v-21.884h-1v21.883z"/></svg>
      </div>

      <div id = "rightContent">
        <div id = "summaryContent">
          <h2 id = "summaryHeader" className="rightContentHeader">About Me</h2>
          <p>I'm always looking to build something that matters. I seek purpose
            in what I do, and look to create with intention. 

            <br /><br /> I began programming in middle school and have since graduated with
            distiniction from UNC Chapel Hill with a degree in computer science
            and a minor in data science.

            <br /><br /> I have taken a special intrest in hardware desgin and entreprenuership
            and look to combine principles from both in my daily life.

            <br /><br /> In my free time, you'll find me at the gym, on the lake, or playing NYT Games!
          
          </p>
        </div>
        <div id = "experienceContent">
          <h2 id = "experienceHeader" className="rightContentHeader">Experience</h2>
          <ExperienceBlock 
            name="Trulab"
            date="Soon"
            body={[
              "I am excited to begin my career at Trulab in June."
            ]}
            languages={[
            ]}
          />
          <ExperienceBlock 
            name="Cvent"
            date="Fall 2023"
            body={[
              "Worked on traditional development team creating reaction features in webinar client.",
              "Ensured effort correctness with extensive testing, and facilitated ticket movement through the CD pipeline."
            ]}
            languages={[
              "TypeScript", "JavaScript", "Java", "GraphQL"
            ]}
          />
          <ExperienceBlock 
            name="TIAA"
            date="Summer 2022 & 2023"
            body={[
              "Developed a logging portal to visualize companywide automated bot services.",
              "Directed technical development of a Python game for a companywide hackathon that achieved first place.",
              "Created a youth-centered retirement portal during that was praised throughout senior leadership."
            ]}
            languages={[
              "Angular", "Java", "SpringBoot", "Python"
            ]}
          />
          <ExperienceBlock 
            name="Chakraborty Lab"
            date="2021 - 2024"
            body={[
              "Engineered a codebase to run complex analytics on 30+ years of historical stock data.",
              "Collaborated with business and finance partners to continuously enhance the quickly growing product."
            ]}
            languages={[
              "Java", "Python"
            ]}
          />
        </div>
        <div id = "projectsContent">
          <h2 id = "projectsHeader" className="rightContentHeader">Projects</h2>
          <ProjectBlock 
            name="UNC Golf App"
            body= "I worked with the UNC Golf Team to develop a training application for their new facility. The app allows players to complete assignments and compete while allowing admins to track their progress. The app is built in Swift for iOS."
            links = {[
              {demoTextLink: 'https://apps.apple.com/us/app/unc-golf/id6480014034', demoText: 'App Store'},
              {demoTextLink: 'https://tarheels.live/sp24comp523teamd/', demoText: 'Project Information' },
            ]}
            languages={[
              "Swift", "Firebase", "Figma"
            ]}
          />
          <ProjectBlock 
            name="Stock Market Analysis Platform"
            body= "Working with Dr. Chakrabory at UNC, I created a deep anaylsis and predicitive algorithm suite for historical stock market data."
            links = {[
              {demoTextLink: 'https://www.canva.com/design/DAFgYWcKomw/uTHD3JMJP0I9wVSupq3LJQ/view?utm_content=DAFgYWcKomw&utm_campaign=designshare&utm_medium=link&utm_source=editor', demoText: 'More Information'},
            ]}
            languages={[
              "Java", "Python"
            ]}
          />

          <ProjectBlock 
            name="Porch Dashboard"
            body= "Implemented an inventory tracking system for the local food bank, Porch, in collaboration with the UNC club, CS+Social Good."
            links = {[
              {demoTextLink: 'https://chapelhill.porchcommunities.org/', demoText: 'About Porch'},
            ]}
            languages={[
              "React", "Firebase"
            ]}
          />
          <a id ="resumeLink" className="defaultLink" href= "./ElijahBassettResume.pdf">Full Resume</a>
        </div>
        {/* <div id ="bottomLinks">
          <h2 id = "linksHeader" className="rightContentHeader">Links</h2>
          <div id="links">
            <a className="defaultLink" href="">Resume</a>
          </div>
        </div> */}
      </div> {/* Closing RightContent */}
      </div>
            <div id = "footer">
            <h4 id = "footerText">Created by Elijah Bassett in Chapel Hill.</h4>
          </div>
    </div> 
  )
}

export default App
