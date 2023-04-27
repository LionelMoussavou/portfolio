import { Container, Row, Col, Tab, Nav, } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import bleetsport from "../assets/img/BleetSport.png"
import osfpatriomoie from "../logoexce1.svg";
import projImg3 from "../assets/img/Bleu-reflet.png";
import Kidangui from "../assets/img/Kidangui-Logo_Test.png"
import Fackop from "../assets/img/fackopLogo3.png"
import antalatransport from "../assets/img/antala-logo.png"
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {





    const projects = [
        {
            title: "Mobile Application",
            description: "Full Stack Developpeur",
            imgUrl: bleetsport,
            link: "https://github.com/LionelMoussavou/bleetsport"
        },
        {
            title: "Web Application Fackop",
            description: "Full Stack Developpeur",
            imgUrl: Fackop,
            link: "https://fackop-web-app.vercel.app/"
        },
        {
            title: "Essayage virtuel",
            description: " AI & Machine learnig",
            imgUrl: projImg3,
            link: "https://bleu-reflet.com/"
        },
        {
            title: "Web apllication 7S",
            description: "Full Stack Developer",
            imgUrl: osfpatriomoie,

        },
        {
            title: " Kidangui ",
            description: "Full stack developer",
            imgUrl: Kidangui,
        },
        {
            title: "Web site Antala-transport",
            description: "Full Stack Developer (in progress)",
            imgUrl: antalatransport,
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
                                    <p>Discover my projects
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