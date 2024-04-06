import React, { useRef, useState } from "react";
import CommonSection from "../components/ui/Common-section/CommonSection";
import { Container, Row, Col } from "reactstrap";

const Contact = () => {
  const [alertVisible, setAlertVisible] = useState(false);
  const nameRef = useRef("");
  const emailRef = useRef("");
  const subjectRef = useRef("");
  const messageRef = useRef("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = {
      userName: nameRef.current.value,
      userEmail: emailRef.current.value,
      userSubject: subjectRef.current.value,
      userMessage: messageRef.current.value,
    };

    try {
      const response = await fetch("http://127.0.0.1:3000/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setAlertVisible(true);
        // Reset form fields after successful submission
        nameRef.current.value = "";
        emailRef.current.value = "";
        subjectRef.current.value = "";
        messageRef.current.value = "";
      } else {
        // Handle error scenario if needed
        console.error("Failed to send message");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <>
      <CommonSection title="Contact" />
      <section>
        <Container>
          <Row>
            <Col lg="6" md="6" className="m-auto text-center">
              <h2>Drop a Message</h2>
              <p>
                If you have any questions or need assistance, feel free to reach
                out to us by sending a message. We're here to help!
              </p>
              <div className="contact mt-4">
                <form onSubmit={handleSubmit}>
                  <div className="form__input">
                    <input
                      type="text"
                      placeholder="Enter your name"
                      ref={nameRef}
                    />
                  </div>
                  <div className="form__input">
                    <input
                      type="email"
                      placeholder="Enter your email"
                      ref={emailRef}
                    />
                  </div>
                  <div className="form__input">
                    <input
                      type="text"
                      placeholder="Enter subject"
                      ref={subjectRef}
                    />
                  </div>
                  <div className="form__input">
                    <textarea
                      rows="7"
                      placeholder="Write message"
                      ref={messageRef}
                    ></textarea>
                  </div>
                  <div className=" mt-3 d-flex align-items-center justify-content-between">
                    <button
                      className="bid__btn d-flex align-items-center gap-1" type="submit"
                    >Send a Message</button>
                  </div>
                </form>
              </div>
              {alertVisible && (
                <div className="alert alert-success mt-3" role="alert">
                  Message sent successfully!
                </div>
              )}
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default Contact;
