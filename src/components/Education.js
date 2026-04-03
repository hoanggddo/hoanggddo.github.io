import { Container, Row, Col, Tab, Nav, Card, Carousel } from "react-bootstrap";
import googleDataImg from "../assets/img/certs/data.jpg";
import googleITImg from "../assets/img/certs/it.jpg";
import codepathImg from "../assets/img/certs/tech.jpg";
import sapsImg from "../assets/img/certs/saps.jpg";
import ibmImg from "../assets/img/certs/cyber.jpg";
import cornellImg from "../assets/img/certs/corn.jpg";
export const Education = () => {
  const education = [
    {
      title: "B.S. Computer Science",
      school: "George Mason University",
      year: "Expected Dec 2027",
      details: "Honors College",
      courses: [
        "Data Structures & Algorithms",
        "Low Level Programming",
        "Object-Oriented Programming",
        "Linear Algebra",
        "Statistics",
        "Software Engineering",
      ],
    },
  ];

  const certifications = [
    { title: "Cornell Machine Learning Foundations", issuer: "eCornell", year: "2025", img: cornellImg },
    { title: "SAPS Bootcamp", issuer: "GuidEd by Stacy", year: "2025", img: sapsImg },
    { title: "Technical Interview Prep", issuer: "Codepath", year: "2025", img: codepathImg },
    { title: "Google Data Analytics Certificate", issuer: "Google", year: "2024", img: googleDataImg },
    { title: "Google IT Support Certificate", issuer: "Google", year: "2024", img: googleITImg },
    { title: "IBM Cyber Security Certificate", issuer: "IBM", year: "2024", img: ibmImg },
  ];

  return (
    <section className="education py-5" id="education">
      <Container>
        <h2 className="mb-4 text-center">Education / Certifications</h2>

        <Card className="education-card p-5 shadow-sm border-0">
          <Tab.Container defaultActiveKey="education">
            <Nav variant="pills" className="nav-pills mb-4 justify-content-center">
              <Nav.Item>
                <Nav.Link eventKey="education">Education</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="certifications">Certifications</Nav.Link>
              </Nav.Item>
            </Nav>

            <Tab.Content>
              {/* Education Tab */}
              <Tab.Pane eventKey="education">
                <Row className="justify-content-center">
                  {education.map((edu, index) => (
                    <Col key={index} md={12} className="mb-4">
                      <h4>{edu.title}</h4>
                      <p>
                        <strong>{edu.school}</strong> • {edu.year}
                      </p>
                      <p>{edu.details}</p>
                      <div className="course-bubbles">
                        {edu.courses.map((course, i) => (
                          <span key={i} className="course-bubble">
                            {course}
                          </span>
                        ))}
                      </div>
                    </Col>
                  ))}
                </Row>
              </Tab.Pane>

              {/* Certifications Tab */}
              <Tab.Pane eventKey="certifications">
                <Container className="d-flex justify-content-center">
                  <Carousel
                    indicators={false}
                    controls={true}
                    interval={null}
                    className="cert-carousel"
                  >
                    {Array.from({ length: Math.ceil(certifications.length / 3) }).map((_, slideIndex) => (
                      <Carousel.Item key={slideIndex}>
                        <Row className="justify-content-center">
                          {certifications
                            .slice(slideIndex * 3, slideIndex * 3 + 3)
                            .map((cert, index) => (
                              <Col key={index} xs={12} sm={6} md={4} className="mb-4 d-flex justify-content-center">
                                <Card className="cert-card border-0 shadow-sm">
                                  <a href={cert.img} target="_blank" rel="noopener noreferrer">
                                    <div className="cert-img-wrapper">
                                      <img src={cert.img} alt={cert.title} className="cert-img" />
                                    </div>
                                  </a>
                                  <div className="cert-text">
                                    <h6>{cert.title}</h6>
                                    <span>{cert.issuer} • {cert.year}</span>
                                  </div>
                                </Card>
                              </Col>
                            ))}
                        </Row>
                      </Carousel.Item>
                    ))}
                  </Carousel>
                </Container>
              </Tab.Pane>
            </Tab.Content>
          </Tab.Container>
        </Card>
      </Container>
    </section>
  );
};