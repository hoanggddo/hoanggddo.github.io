import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap"
import {ArrowRightCircle} from 'react-bootstrap-icons';
import headerImg from '../assets/img/header-img.png';
import pfpPic from '../assets/img/profile-pic.png';

export const Banner = () => {
    const toRotate = [ "Software Engineer", "Web Developer", "Tech Enthusiast" ];
    const [loopNum, setLoopNum] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const [text, setText] = useState('');
    const [delta, setDelta] = useState(300 - Math.random() * 100);
    const period = 2000;

    useEffect(() => {
        let ticker = setInterval(() => {
            tick();
        }, delta)
        return () => { clearInterval(ticker) };
    }, [text])
    const tick = () => {
        let i = loopNum % toRotate.length;
        let fullText = toRotate[i];
        let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

        setText(updatedText);
        if (isDeleting) {
            setDelta(prevDelta => prevDelta / 2);
        }
        if (!isDeleting && updatedText === fullText) {
            setIsDeleting(true);
            setDelta(period);
        }
        else if (isDeleting && updatedText === '') {
            setIsDeleting(false);
            setLoopNum(loopNum + 1);
            setDelta(500);
        }
    }
    return (
        <section className="banner" id="home">
            <Container>
                <Row className="align-items-center">
                    <Col xs={12} md={6} xl={7}>
                        <div className="glass-container-wrapper">
                            <div className="glass-container">
                            <h1>{`Hi! I'm Hoang, a Software Engineer`}</h1>
                            <p>
                                Hi! My name is Hoang Do, and I am a Computer Science student at George Mason University and a member of the Honors College.
                                I have hands-on experience building software and machine learning projects using technologies such as Python, Java, React, Django, and PyTorch. Through projects like an AI laptop recommendation system, a cybersecurity SOC home lab, and full-stack web applications, I have developed strong skills in problem-solving, software development, and data analysis.
                                I am passionate about using technology to solve real-world problems and enjoy continuously learning new tools and frameworks. I embrace challenges and value the growth that comes from tackling complex problems while collaborating with others.
                                I am currently seeking opportunities where I can apply my technical skills, contribute to innovative projects, and continue developing as a software engineer and technologist.
                            </p>
                            </div>
                        </div>
                    </Col>
                    <Col xs={12} md={6} xl={5}>
                        <div className="pfp-wrapper">
                            <img className="pfp" src={pfpPic} alt="Profile Picture" />
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}