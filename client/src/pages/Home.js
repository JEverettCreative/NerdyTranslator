import React, { Component } from "react";
import Jumbotron from "../components/Jumbotron";
import { Col, Container, Row } from "../components/Grid";
import { LargeBtn } from "../components/Buttons";
import QuoteBox  from "../components/QuoteBox";
import quoteAPI from "../utils/quoteAPI";
import translateAPI from "../utils/translateAPI";
import TranslateCard from "../components/TranslateCard";
import options from "../../src/translateoptions.json";
import Footer from "../components/Footer";


class Home extends Component {

    state = {
        results: {},
        quote: "",
        error: "",
        options,
        styleThemeBackground: {
            backgroundColor: "#ddd"
        },
        styleThemeText: {
            fontFamily: ""
        }
    }

    componentDidMount() {
        console.log("Component mounted");
    }

    handleChange = event => {
        const { name, value } = event.target;

        this.setState({
            [name]: value
        });
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
            let choice = "dothraki.json";
            translateAPI.translateQuote(this.state.quote, choice)
                .then(res => {
                    if (res.data.status === "error") {
                        throw new Error(res.data.message);
                    }
                    console.log(res.data.contents.translated);
                    console.log("Choose Dothraki?");
                    this.setState({ styleThemeBackground: { backgroundColor: "#EDC568" },
                        styleThemeText: { fontFamily: "'Cinzel Decorative', cursive" },
                        quote: res.data.contents.translated});
                });
        }
        else if (id === 2) {
            let choice = "sindarin.json";
            translateAPI.translateQuote(this.state.quote, choice)
                .then(res => {
                    if (res.data.status === "error") {
                        throw new Error(res.data.message);
                    }
                    console.log(res.data.contents.translated);
                    console.log("Choose Sindarin?");
                    this.setState({ styleThemeBackground: { backgroundColor: "#C71508" },
                        styleThemeText: { fontFamily: "'Aguafina Script', cursive" },
                        quote: res.data.contents.translated});
                });
        }
        else if (id === 3) {
            let choice = "vulcan.json";
            translateAPI.translateQuote(this.state.quote, choice)
                .then(res => {
                    if (res.data.status === "error") {
                        throw new Error(res.data.message);
                    }
                    console.log(res.data.contents.translated);
                    console.log("Choose Vulcan?");
                    this.setState({ styleThemeBackground: { backgroundColor: "#3363CA" },
                        styleThemeText: { fontFamily: "'Audiowide', cursive" },
                        quote: res.data.contents.translated});
                });
        }
        else {
            console.log("Click successful, but no ID" + id);
        }
    }

    render() {

        return (
            <div style={ this.state.styleThemeBackground }>
                <Jumbotron>
                    <h1 style={ this.state.styleThemeText }>Nerdy Translator</h1>
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
                    <h3 style={ this.state.styleThemeText }>Translate</h3>
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
                <Footer
                    style={ {backgroundColor: "#ddd"} }
                />
            </div>
        )
    }

}

export default Home;