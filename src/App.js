import { personalData, contacts } from './content/content.js';
import { educationUniversity, courses } from './content/education.js';
import experience from './content/experience.js';
import { ContentList, ContactList } from './ContentList.js';
import { EducationList } from './EducationList.js';
import { ExperienceList, Hardskills, Softskills, About } from './ExperienceList.js';
import './styles.css';

function App() {
  return (
    <div className='a4-container'>
      <div className='a4-page'>
        <div>
          <ContentList list = {personalData}/>
             {contacts.map((contact, index) => (
            <ContactList key={index} list={contact}/>
          ))}
          <div style={{ marginBottom: '20px' }}></div>
         <EducationList education={educationUniversity} courses={courses} />
         <ExperienceList list = {experience}/>
         <Hardskills list = {experience}/>
          <Softskills list = {experience}/>
          <About list = {experience}/>
        </div>
      </div>
    </div>
  );
}

export default App;
