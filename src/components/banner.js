import { Col, Container, Row } from "react-bootstrap"
import { ArrowRightCircle } from "react-bootstrap-icons"
import headerImg from "../assets/img/footer-icon.png"
import { useState, useEffect } from "react"
import "animate.css"
import TrackVisibility from "react-on-screen"

export const Banner = () => {
    const [loopNum, setLoopNum] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const toRotate = ["Web Dev", "Back-End Dev", "UI/UX Designer"];
    const [text, setText] = useState('');
    const [delta, setDelta] = useState(30 - Math.random() * 10)
    const [index, setIndex] = useState(1);
    const period = 2000;

    useEffect(() => {
        let ticker = setInterval(() => {
          tick();
        }, delta);
    
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
          setIndex(prevIndex => prevIndex - 1);
          setDelta(period);
        } else if (isDeleting && updatedText === '') {
          setIsDeleting(false);
          setLoopNum(loopNum + 1);
          setIndex(1);
          setDelta(500);
        } else {
          setIndex(prevIndex => prevIndex + 1);
        }
      }

    return (
        <section className="banner" id="home">
            <Container>
                <Row className="allign-items-center">
                    <Col xs={12} md={6} xl={7}>
                      <TrackVisibility>
                      {({isVisible}) => 
                        <div className={isVisible ? "animate__animated animate__bounce" : ""}>
                          <span className="tagline">Willkommen zu meinem Portfolio!</span>
                          <h1>{`Hi! Ich bin Pascal,     `}<br/> <span className="txt-rotate" dataPeriod="1000" data-rotate='[ "Web Developer", "Web Designer", "UI/UX Designer" ]'><span className="wrap">{text}</span></span></h1>
                          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                          <button onClick={() => console.log('connect')}>Let’s Connect <ArrowRightCircle size={25} /></button>
                        </div>}
                      </TrackVisibility>
                    </Col>
                    <Col xs={12} md={6} xl={5}>
                        <img src={headerImg} alt="Header IMG" />

                    </Col>
                </Row>
            </Container>
        </section>
    )
}