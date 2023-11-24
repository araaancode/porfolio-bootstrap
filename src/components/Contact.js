import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import 'animate.css';
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

export const Contact = () => {
  
  const sendMessage=(e)=>{
    console.log(e);
    console.log("message send");
    withReactContent(Swal).fire({
      title: <i>پیام فرستاده شد 😉</i>,
      confirmButtonText:'تایید',
      preConfirm: () => {
        window.location.reload()
      },
    })
  }

  return (
    <section className="contact" id="connect">
      <Container>
        <Row className="align-items-center">
        
          <Col style={{margin:'10px auto'}} size={12} md={8}>
                <div id="contact">
                <h2>ارتباط با من</h2>
                <form dir="rtl">
                  <Row>
                    <Col size={12} sm={6} className="px-1">
                      <input style={{textAlign:'right'}}  type="text" placeholder="نام" />
                    </Col>
                    <Col size={12} sm={6} className="px-1">
                      <input style={{textAlign:'right'}}  type="text"  placeholder="نام خانوادگی" />
                    </Col>
                    <Col size={12} sm={6} className="px-1">
                      <input style={{textAlign:'right'}}   type="email"  placeholder=" ایمیل" />
                    </Col>
                    <Col size={12} sm={6} className="px-1">
                      <input style={{textAlign:'right'}}  type="phone"  placeholder="شماره همراه" />
                    </Col>
                    <Col size={12} className="px-1">
                      <textarea style={{textAlign:'right'}} rows="6" placeholder="پیام" ></textarea>
                      <button onClick={sendMessage} style={{margin:'10px auto',float:'right'}} type="button"><span>فرستادن پیام</span></button>
                    </Col>
                  </Row>
                </form>
              </div>
          </Col>
        </Row>
      </Container>
    </section>
  )
}
