import { Link } from "react-router-dom";

const ProjectCard = ({work}) => {
    return ( 
        <div className="projectCard">
            <img src={work.pic} alt="work"/>
            <h2>{work.name}</h2>
            <p>{work.desc}</p>
            <Link to={work.link}><span>View</span></Link>
        </div>
     );
}
 
export default ProjectCard;