import React from "react";
import { Card, CardText, Col} from "reactstrap";
import {MyCard, MyTitle} from "./styles";

export default function NameList (props) {
    return(
        <Col>
            <Card className = "listname" key={props.id}>
                <MyCard>
                    <MyTitle> Name: {props.name} </MyTitle>
                    <CardText> Gender: {props.gender} </CardText>
                    <CardText> Height: {props.height} </CardText>
                    <CardText> Hair Color: {props.hair_color} </CardText>
                    <CardText> Mass: {props.mass} </CardText>
                    <CardText> Birth Year: {props.birth_year}</CardText>
                </MyCard>
            </Card>
        </Col>
    );
};