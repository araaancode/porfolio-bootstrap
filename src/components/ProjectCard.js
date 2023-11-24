import { Col } from "react-bootstrap";

export const ProjectCard = ({ title,imgUrl }) => {
  return (
    <Col size={12} sm={6} md={4}>
      <div className="project-img">
        <img src={imgUrl} />
        <p>{title}</p>
      </div>
    </Col>
    
  )
}
