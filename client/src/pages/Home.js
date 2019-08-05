import React, { Component } from "react";
import Jumbotron from "../components/Jumbotron";
import { Col, Container, Row } from "../components/Grid";
import { LargeBtn } from "../components/Buttons";
import QuoteBox  from "../components/QuoteBox";
import quoteAPI from "../utils/quoteAPI";

class Home extends Component {

    state = {
        results: {},
        quote: "",
        error: ""
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

    render() {
        return (
            <div>
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
                </Container>
            </div>
        )
    }

}

export default Home;