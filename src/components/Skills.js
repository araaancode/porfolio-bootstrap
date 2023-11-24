
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';


export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
    <section className="skill" id="skills">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="skill-bx wow zoomIn">
                        <h2 style={{marginBottom:'50px'}}>مهارت های من</h2>
                        <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
                        <div className="item">
                                <img src="https://cdn-icons-png.flaticon.com/128/5968/5968292.png" alt="Image" />
                            </div>
                            <div className="item">
                                <img src="https://cdn-icons-png.flaticon.com/128/6132/6132222.png" alt="Image" />
                            </div>
                            <div className="item">
                                <img src="https://cdn-icons-png.flaticon.com/128/760/760457.png" alt="Image" />
                            </div>
                            <div className="item">
                                <img src="https://cdn-icons-png.flaticon.com/128/7432/7432950.png?uid=R25619652&ga=GA1.1.1410702522.1689505960&track=ais" alt="Image" />
                            </div>
                            <div className="item">
                                <img src="https://cdn-icons-png.flaticon.com/128/3098/3098090.png" alt="Image" />
                                </div>
                        </Carousel>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}