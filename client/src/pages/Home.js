import React, { Component } from "react";
import Jumbotron from "../components/Jumbotron";
import { Col, Container, Row } from "../components/Grid";
import { LargeBtn } from "../components/Buttons";
import QuoteBox  from "../components/QuoteBox";
import quoteAPI from "../utils/quoteAPI";
import TranslateCard from "../components/TranslateCard";
import options from "../../src/translateoptions.json";


class Home extends Component {

    state = {
        results: {},
        quote: "",
        error: "",
        options,
        styleTheme: {
            backgroundColor: "#ddd"
        }
    }

    componentDidMount() {
        console.log("Component mounted");
    }

    getQuote = event => {
        event.preventDefault();
        // Pull Quote from TheySaidSo API - Give credit when using free version
        quoteAPI.getQuote()
            .then(res => {
                if (res.data.status === "error") {
                    throw new Error(res.data.message);
                }
                console.log(res.data.contents.quotes[0].quote);
                this.setState({ quote: res.data.contents.quotes[0].quote, error: "" });
            })
            .catch(err => this.setState({ error: err.message}));
    }

    // Need to set API calls up and return here to execute
    chooseLanguage = id => {
        if (id === 1) {
            console.log("Choose Dothraki?");
            this.setState({ styleTheme: { backgroundColor: "red" }});
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

        return (
            <div style={ this.state.styleTheme }>
                <Jumbotron>
                    <h1>Nerdy Translator</h1>
                </Jumbotron>
                <Container fluid>
                    <Row>
                        <Col size="md-3">
                           <QuoteBox>
                                <textarea className="form-control quote" 
                                    onChange={this.handleChange} 
                                    rows="6"
                                    value={this.state.quote}
                                    name="quote" 
                                />   
                           </QuoteBox>
                        </Col>
                    </Row>
                    <Row className="justify-content-center">
                    <LargeBtn
                        text="Quote of the Day"
                        onClick={this.getQuote}
                        />
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
                </Container>
            </div>
        )
    }

}

export default Home;