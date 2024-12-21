import ProjectCard from "../components/projectCard";
import myWorks from "../data/projectsData";

const Projects = () => {
    return ( 
        <section className="projects" id="projects">
            <h1>My Projects</h1>
            <div className="projectCards">
                {myWorks.map((work, index) => (
                    <ProjectCard key={index} work={work}/>
                ))}
            </div>
        </section>
     );
}
 
export default Projects;