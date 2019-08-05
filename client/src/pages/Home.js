import React, { Component } from "react";
import Jumbotron from "../components/Jumbotron";
import { Container, Row } from "../components/Grid";
import { LargeBtn } from "../components/Buttons";
import quoteAPI from "../utils/quoteAPI";

class Home extends Component {

    state = {
        results: {},
        error: ""
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
                this.setState({ results: res.data, error: "" });
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
                    <Row className="justify-content-center">
                    <LargeBtn
                        text="Random Quote"
                        onClick={this.getQuote}
                        />
                    </Row>
                    <Row>
                    <LargeBtn
                        text="Write Your Own"
                        />
                    </Row>
                </Container>
            </div>
        )
    }

}

export default Home;