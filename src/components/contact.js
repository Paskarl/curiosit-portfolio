import { Container, Row, Col } from "react-bootstrap";
import { useState } from "react"
import contactImg from "../assets/img/contact-img.svg"


export const Contact = () => {
    const formInitialDetails = {
        firstName: "",
        lastName: "",
        email: "",
        message: "",
    }

    const [formDetails, setFormDetails] = useState(formInitialDetails);
    const [buttonText, setButtonText] = useState('Send');
    const [status, setStatus] = useState({})

    const onFormUpdate = (category, value) => {
        setFormDetails({
            ...formDetails,
            [category]: value
        })
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        setButtonText("Sending...");
        let response = await fetch("http://localhost:5555/contact", {
            method: "POST",
            headers: {
                "Content-Type": "Application/json;charset=utf-8",
            },
            body: JSON.stringify(formDetails),
        })
        setButtonText("Send");
        let result = response.json();
        setFormDetails(formInitialDetails);
        if(result.code === 200) {
            setStatus({success: true, message: "Nachricht erfolgreich gesendet"});
        } else {
            setStatus({status: false, message: "Etwas ist schief gelaufen!"});
        }
    }

    return(
        <section className="contact" id="connect">
            <Container>
                <Row className="allign-items-center">
                    <Col md={6}>
                        <img src={contactImg} alt="Kontaktier' mich!"/>
                    </Col>
                    <Col md={6}>
                        <h2>Kontaktier mich!</h2>
                        <form onSubmit={handleSubmit}>
                            <Row>
                                <Col sm={6} className="px-1">
                                    <input type="text" value={formDetails.firstName} placeholder="Vorname" onChange={(e) => onFormUpdate("firstName", e.target.value)} />
                                </Col>

                                <Col sm={6} className="px-1">
                                    <input type="text" value={formDetails.lastName} placeholder="Nachname" onChange={(e) => onFormUpdate("lastName", e.target.value)} />
                                </Col>

                                <Col sm={6} className="px-1">
                                    <input type="email" value={formDetails.email} placeholder="E-Mail" onChange={(e) => onFormUpdate("email", e.target.value)} />
                                </Col>

                                <Col>
                                    <textarea row="6" value={formDetails.message} placeholder="Nachricht" onChange={(e) => onFormUpdate("message", e.target.value)} />
                                    <button type="submit"><span>{buttonText}</span></button>
                                </Col>
                                {
                                    status.message && 
                                    <Col>
                                    <p className={status.success === false ? "danger" : "success"}>{status.message}</p>
                                    </Col>
                                }
                            </Row>
                        </form>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}