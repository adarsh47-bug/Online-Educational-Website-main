import React from "react";
import "./newsletter.css";
import { Container, Row, Col } from "reactstrap";

const Newsletter = () => {
  return (
    <section>
      <Container className="newsletter">
        <Row>
          <Col lg="12" className="text-center">
            <h2 className="mb-4">Subscribe Our Newsletter</h2>
            {/* <div className="subscribe"> */}
            <form className="subscribe" onSubmit={() => { alert("You have successfully subscribed to Our Newsletter") }}>
              <input className="px-2" type="email" placeholder="Email" required />
              <button className="btn" type="submit">Subscribe</button>
            </form>
            {/* </div> */}
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Newsletter;
