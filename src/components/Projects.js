import { Container, Row, Col, Tab,Card } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";

import 'animate.css';

export const Projects = () => {

  const projects = [
    {
      title:'فروشگاه',
      imgUrl: "//img.freepik.com/free-photo/cyber-monday-shopping-sales_23-2148688558.jpg?size=626&ext=jpg&ga=GA1.1.1410702522.1689505960&semt=sph",
    },
    {
      title:'بلاگ',

      imgUrl: "//img.freepik.com/free-photo/aerial-view-man-typing-retro-typewriter_53876-13416.jpg?size=626&ext=jpg&ga=GA1.1.1410702522.1689505960&semt=sph",
    },
    {
      title:'چت اپلیکیشن',

      imgUrl: "//img.freepik.com/free-vector/hand-drawn-chat-mobile-pattern_52683-713.jpg?size=626&ext=jpg&ga=GA1.1.1410702522.1689505960&semt=sph",
    },
    {
      title:'سفارش غذا',

      imgUrl: "//img.freepik.com/free-photo/fruit-salad-spilling-floor-was-mess-vibrant-colors-textures-generative-ai_8829-2895.jpg?size=626&ext=jpg&ga=GA1.1.1410702522.1689505960&semt=sph",
    },
    {
      title:'نوبت دهی آنلاین',

      imgUrl: "https://img.freepik.com/free-photo/doctor-with-stethoscope-hands-hospital-background_1423-1.jpg?size=626&ext=jpg&ga=GA1.1.717267418.1690213421&semt=sph",
    },
    {
      title:'هتل داری',

      imgUrl: "https://img.freepik.com/free-photo/vertical-shot-big-building-with-hotel-sign-dark-blue-sky_181624-1783.jpg?size=626&ext=jpg&ga=GA1.1.717267418.1690213421&semt=sph",
    },
  ];

  return (
    <section className="project" id="project">
      <Container>
        <Row>
          <Col size={12}>
              <div id="projects">
                <h2 style={{margin:'100px 0 25px 0'}}>پروژه ها</h2>
                <Tab.Container defaultActiveKey="first">
                  <Tab.Content>
                    <Tab.Pane eventKey="first">
                      <Row>
                        <Col>
                        <div className="project-imgs">
                        {
                          projects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }

                        </div>
                        </Col>
                      </Row>
                    </Tab.Pane>
                   
                  </Tab.Content>
                </Tab.Container>
              </div>
          </Col>
        </Row>
      </Container>
    </section>
  )
}
