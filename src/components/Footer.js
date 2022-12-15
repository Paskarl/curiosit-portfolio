import { Container, Row, Col } from "react-bootstrap"
import navIcon1 from '../assets/img/nav-icon1.svg'
import navIcon2 from '../assets/img/nav-icon2.svg'
import navIcon3 from '../assets/img/nav-icon3.svg'
import footerIcon from "../assets/img/footer-icon.png"

export const Footer = () => {
    return(
        <footer className="footer">
            <Container>
                <Row className="align-item-center">
                    <Col className="text-center">
                        <div className="social-icon">
                            <a href=""><img src={navIcon1}/></a>
                            <a href=""><img src={navIcon2}/></a>
                            <a href=""><img src={navIcon3}/></a>
                        </div>
                        <p>Created with Love and Coffee by Pascal Hajda</p>
                    </Col>
                </Row>
            </Container>
        </footer>
    )
}