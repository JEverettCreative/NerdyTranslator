import React, { Component } from "react";
import Jumbotron from "../components/Jumbotron";
import { Col, Container, Row } from "../components/Grid";
import { LargeBtn } from "../components/Buttons";
import Quote  from "../components/QuoteBox";
import TranslateCard from "../components/TranslateCard";
import options from "../../src/translateoptions.json";

class OriginalQuote extends Component {

    state = {
        options
    }

    // chooseLanguage = id => {
    //     if (this.state.options.name === 1) {
    //         console.log("Choose Dothraki?");
    //     }
    //     else {
    //         console.log("Click successful, but no ID" + this.state.options.alt);
    //     }
    // }

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
                <Row>
                {this.state.options.map(option => (
                    <TranslateCard
                        chooseLanguage = {this.chooseLanguage}
                        id={option.id}
                        key={option.id}
                        name={option.name}
                        image={option.image}
                    />
                ))}
                </Row>
                {/* Need to create components for translate buttons */}
            </div>
        )
    }
}

export default OriginalQuote;