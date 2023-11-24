import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import headerImg from "../images/bg.png";

export const Banner = () => {

  return (
    <section className="banner" id="home">
      <Container>
        <Row className="aligh-items-center">
         
          <Col xs={12} md={6} xl={5}>
                <div>
                  <img src={headerImg} alt="Header Img"/>
                </div>
          </Col>

          <Col xs={12} md={6} xl={7}>
              <div>
                <h4 style={{marginTop:'100px',fontSize:'35px',textAlign:'right',textJustify:''}}>
                سلام من <b style={{color:'#0edefa',fontSize:'40px'}}>فاطمه رحمانی</b> هستم. من برنامه نویس بک اند هستم. من پنج سال سابقه کار در طراحی و توسعه برنامه های وب دارم و علاقمه مند به یادگیری تکنولوژی های جدید هستم  
                </h4>
                
              </div>
          </Col>
        </Row>
      </Container>
    </section>
  )
}
