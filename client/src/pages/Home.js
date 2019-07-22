import React, { Component } from "react";
import Jumbotron from "../components/Jumbotron";
import { Container, Row } from "../components/Grid";
import { LargeBtn } from "../components/Buttons";

class Home extends Component {
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