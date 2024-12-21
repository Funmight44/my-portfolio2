import css from '../BG-img/icons8-css-logo-50.png'
import html from '../BG-img/icons8-html-logo-50.png';
import js from '../BG-img/js image.jpg'
import gmail from "../BG-img/gmail-logo.jpg";
import react from "../BG-img/icons8-react-80.png";
import grammar from "../BG-img/gram-logo.png";
import google from "../BG-img/google-doc-logo.jpg";
import microsoft from "../BG-img/office-365-logo.png";
import wps from "../BG-img/wps-logo.png";






const Skills = () => {
    return ( 
            <section className="skills" id='skills'>
                <h1>Skills and Tools</h1>
                <div className='skills-div'>
                    <div className='skills-logo'>
                        <img src={css} alt="css"/>
                        <img src={js} alt="js"/>
                        <img src={html} alt="html"/>
                        <img src={react} alt="react"/>
                        <img src={gmail} alt="gmail"/>
                        <img src={google} alt="google"/>
                        <img src={microsoft} alt="gmail"/>
                        <img src={wps} alt="gmail"/>
                        <img src={grammar} alt="gmail"/>
                        </div>

                    <ul className='skills-info'>
                        <li>HTML Proficient</li>
                        <li>CSS Proficient</li>
                        <li>JavaScript</li>
                        <li>React</li>
                        <li>Time management skill</li>
                        <li>Organisational skill</li>
                        <li>Communication skill</li>
                    </ul>
                </div>
            </section>
     );
}
 
export default Skills;