import { Container, Row, Col } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import colorSharp2 from "../assets/img/color-sharp2.png";
import TrackVisibility from "react-on-screen";

export const Projects = () => {
  const projects = [
    {
      title: "Rumi Press",
      description:
        "Developed a full-stack Django app to streamline book distribution workflows. Includes book/category management, expense tracking, search, and reporting dashboards for data visualization.",
      techStack: "Django, PostgreSQL, Bootstrap, Render, Neon, Github Actions, Python, HTML/CSS",
      link: "https://github.com/hoanggddo/rumi_press",
    },
    {
      title: "Multi-Modal Skin Condition Classification Model",
      description:
        "Built an ML model to classify skin conditions from images, providing accurate automated predictions to assist dermatologists across diverse skin types.",
      techStack: "Python, TensorFlow, OpenCV, Kaggle, Jupyter Notebook, Matplotlib, Seaborn",
      link: "https://github.com/hoanggddo/skinterest-2b",
    },
    {
      title: "AI Laptop Recommendation System",
      description:
        "Created an ML-based system recommending laptops based on user preferences, performance needs, and budget, optimizing suggestions for casual and professional users.",
      techStack: "PyTorch, Python, Scikit-learn, Pandas, NumPy, Jupyter Notebook, Matplotlib",
      link: "https://github.com/hoanggddo/ai-laptop-recommendation-system",
    },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__fadeIn" : ""
                  }
                >
                  <h2>Projects</h2>
                  <p>
                    Here are a few key projects showcasing my skills in Web
                    Development, Machine Learning, and AI.
                  </p>

                  <div className="project-body">
                    <Row className="gx-3 gy-3 justify-content-center">
                      {projects.map((project, index) => (
                        <ProjectCard key={index} {...project} />
                      ))}
                    </Row>
                  </div>
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>

      <img
        className="background-image-right"
        src={colorSharp2}
        alt="Background"
      />
    </section>
  );
};