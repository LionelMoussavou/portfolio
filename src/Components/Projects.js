import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/BleetSport.png";
import projImg3 from "../assets/img/Bleu-reflet.png";
import _R4A2676_1 from "../assets/img/_R4A2676_1 2.JPG"
import Luxury from "../assets/img/Luxury.jpg"
import Exce from "../assets/img/Exce.png"
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

    const projects = [
        {
            title: "Application Mobile BleetSport",
            description: "Full Stack Developpeur",
            imgUrl: projImg1,
        },
        {
            title: "UX Designer",
            description: "Vectorisation d'un logo",
            imgUrl: Luxury,
        },
        {
            title: "Essayage virtuel",
            description: "Machine learnig",
            imgUrl: projImg3,
        },
        {
            title: "Application Mobile",
            description: "Full Stack Developer",
            imgUrl: projImg1,
        },
        {
            title: "Création artistique",
            description: "Design & Development",
            imgUrl: _R4A2676_1,
        },
        {
            title: "Site web E-Commerce",
            description: "Full Stack Developer",
            imgUrl: Exce,
        },
    ];

    return (
        <section className="projects" id="projects">
            <Container>
                <Row>
                    <Col size={12}>
                        <TrackVisibility>
                            {({ isVisible }) =>
                                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                                    <h2>Projects</h2>
                                    <p>For a perpetual evolution in my chosen field, I know how to make myself available on various projects to bring my expertise and my know-how in IT and digital development.
                                    </p>
                                    <Tab.Container id="projects-tabs" defaultActiveKey="first">
                                        <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                                            <Nav.Item>
                                                <Nav.Link eventKey="first">Tab 1</Nav.Link>
                                            </Nav.Item>
                                            <Nav.Item>
                                                <Nav.Link eventKey="second">Tab 2</Nav.Link>
                                            </Nav.Item>
                                            <Nav.Item>
                                                <Nav.Link eventKey="third">Tab 3</Nav.Link>
                                            </Nav.Item>
                                        </Nav>
                                        <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                                            <Tab.Pane eventKey="first">
                                                <Row>
                                                    {
                                                        projects.map((projects, index) => {
                                                            return (
                                                                <ProjectCard
                                                                    key={index}
                                                                    {...projects}
                                                                />
                                                            )
                                                        })
                                                    }
                                                </Row>
                                            </Tab.Pane>
                                            <Tab.Pane eventKey="section">
                                                <p>For a perpetual evolution in my chosen field, I know how to make myself available on various projects to bring my expertise and my know-how in IT and digital development.
                                                </p>
                                            </Tab.Pane>
                                            <Tab.Pane eventKey="third">
                                                <p>For a perpetual evolution in my chosen field, I know how to make myself available on various projects to bring.
                                                </p>
                                            </Tab.Pane>
                                        </Tab.Content>
                                    </Tab.Container>
                                </div>}
                        </TrackVisibility>
                    </Col>
                </Row>
            </Container>
            <img className="background-image-right" src={colorSharp2} alt=""></img>
        </section>
    )
}