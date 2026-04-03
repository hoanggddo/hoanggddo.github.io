import { Col } from "react-bootstrap";

export const ProjectCard = ({
  title,
  description,
  techStack,
  link,
}) => {
  return (
    <Col xs={12} sm={6} md={4}>
      <div className="proj-card">

        {/* Default */}
        <div className="proj-front">
          <h4>{title}</h4>
          <p>{description}</p>
        </div>

        {/* Hover */}
        <div className="proj-back">
          <div>
            {techStack.split(",").map((tech, i) => (
              <span key={i} className="tskill-bubble">
                {tech.trim()}
              </span>
            ))}
          </div>
          <a href={link} target="_blank" rel="noreferrer">
            View GitHub
          </a>
        </div>
      </div>
    </Col>
  );
};