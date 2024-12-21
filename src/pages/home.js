import pic from '../BG-img/profile-pic.jpg'


const Home = () => {
    return ( 
            <section className="home" id='home'>
                <img src={pic} alt="profile"/>
                <div className='home-info'>
                    <h1><span>Hello, I'am Funmilayo.  </span>Frontend Developer || Administrative Virtual Assistant.</h1>
                     <p>Proficient in HTML, CSS, JavaScript, and React, as well as an experienced Administrative Virtual Assistant skilled in email and calendar management,
                     Google Docs proofreading and editing, and creating CVs and resumes.</p>

                     <div className='home-btns'>
                        <a href='#contact'>Connect</a>
                        <a href='/resume.pdf'>Resume</a>
                     </div>
                </div>
                
            </section>
     );
}
 
export default Home;