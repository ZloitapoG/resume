import { personalData, contacts } from './content/content.js';
import { educationUniversity, courses } from './content/education.js';
import experience from './content/experience.js';
import { ContentList, ContactList } from './ContentList.js';
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
        </div>
      </div>
    </div>
  );
}

export default App;
