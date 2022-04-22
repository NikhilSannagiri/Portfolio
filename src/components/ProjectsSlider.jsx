import AwesomeSlider from "react-awesome-slider";
import "react-awesome-slider/dist/styles.css";

const ProjectsSlider = () => {
    
    return (
      <div className="projects-slider">
        <AwesomeSlider>
        <div className="skill-0"><p>slide1</p></div>
        <div className="skill-1"><p>slide2</p></div>
        </AwesomeSlider>
      </div>
    );
  };
  
  export default ProjectsSlider;