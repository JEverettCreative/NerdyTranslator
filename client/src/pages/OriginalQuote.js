import React, { Component } from "react";
import Jumbotron from "../components/Jumbotron";
import { Col, Container, Row } from "../components/Grid";
import { LargeBtn } from "../components/Buttons";
import { Quote } from "../components/QuoteBox";

class OriginalQuote extends Component {
    render() {
        return(
            <div>
                <Jumbotron>
                    <h1>Nerdy Translator</h1>
                </Jumbotron>
                <Row>
                    <Col size="md-3">
                        <Quote 
                            quote="Placeholder quote"
                            />
                    </Col>
                </Row>
                <Row>
                    <h3>Translate</h3>
                </Row>
                {/* Need to create components for translate buttons */}
            </div>
        )
    }
}

export default OriginalQuote;