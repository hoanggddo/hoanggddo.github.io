import { Container, Row, Col, Card } from "react-bootstrap";

export const Experience = () => {

  const experiences = [
    {
      title: "AI/ML Fellow",
      company: "Break Through Tech (Remote)",
      year: "May 2025 – Present",
      details: [
        "Designed a multimodal AI model combining CNNs for lesion images and transformer-based NLP for symptom descriptions, improving classification accuracy by 15% across diverse skin tones.",
        "Led weekly Agile team meetings and organized 20+ project milestones, accelerating development and improving workflow efficiency.",
        "Built a MatViT-based image preprocessing pipeline, enhancing data quality and reducing preprocessing time by 30%."
      ],
      tech: ["PyTorch", "CNNs", "Transfer Learning", "NLP", "Agile"]
    },
    {
      title: "Admissions Technical Worker",
      company: "George Mason University – Remote",
      year: "Apr 2025 – Present",
      details: [
        "Processed and verified 100+ student applications daily with 99% accuracy, ensuring timely and error-free admissions decisions.",
        "Conducted data audits that reduced processing errors by 30% within two months.",
        "Coordinated across departments to maintain consistent workflow and timely processing of applications."
      ],
      tech: ["Microsoft Excel", "Data Analysis", "Process Improvement", "Collaboration"]
    },
    {
      title: "Math 125 Learning Assistant",
      company: "George Mason University – Fairfax, VA",
      year: "Aug 2025 – Dec 2025",
      details: [
        "Facilitated problem-solving sessions, increasing student attendance by 25%.",
        "Provided academic support via Zoom chat and discussion boards in real-time.",
        "Collaborated with students in breakout rooms to enhance understanding and engagement."
      ],
      tech: ["Tutoring", "Zoom", "Collaborative Learning", "Math Instruction"]
    }
  ];

  return (
    <section className="experience" id="experience">
      <Container>
        <h2 className="mb-4">Work Experience</h2>
        <Row className="g-4">
          {experiences.map((exp, index) => (
            <Col md={12} key={index}>
              <Card className="experience-card shadow-sm p-3">
                <Card.Body>
                  <Card.Title>{exp.title}</Card.Title>
                  <Card.Subtitle className="mb-2 text-muted">{exp.company} • {exp.year}</Card.Subtitle>
                  <ul>
                    {exp.details.map((detail, i) => <li key={i}>{detail}</li>)}
                  </ul>
                  <div className="course-bubbles">
                    {exp.tech.map((techItem, i) => (
                      <div className="course-bubble" key={i}>{techItem}</div>
                    ))}
                  </div>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
}