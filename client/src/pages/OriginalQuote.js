import React, { Component } from "react";
import Jumbotron from "../components/Jumbotron";
import { Col, Row } from "../components/Grid";
import Quote  from "../components/QuoteBox";
import TranslateCard from "../components/TranslateCard";
import options from "../../src/translateoptions.json";

class OriginalQuote extends Component {

    state = {
        options
    }

    // Need to set API calls up and return here to execute
    chooseLanguage = id => {
        if (id === 1) {
            console.log("Choose Dothraki?");
        }
        else if (id === 2) {
            console.log("Choose Sindarin?");
        }
        else if (id === 3) {
            console.log("Choose Vulcan?");
        }
        else {
            console.log("Click successful, but no ID" + id);
        }
    }

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
                
            </div>
        )
    }
}

export default OriginalQuote;