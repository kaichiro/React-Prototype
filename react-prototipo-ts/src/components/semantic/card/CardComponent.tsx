import * as React from "react";
import { Button, Card, Image, Rating } from "semantic-ui-react";

import CardComponentProps from "./CardComponentProps";

function CardComponent(props: CardComponentProps) {
  return (
    <div className="ui link cards">
      <Card>
        <Image src={props.image} />
        <Card.Content textAlign="left">
          <Card.Header>{props.description}</Card.Header>
          <Card.Meta textAlign="right">
            <del>{props.oldPrice}</del>
          </Card.Meta>
        </Card.Content>
        <Card.Content extra={true}>
          <Card.Description>
            <strong>{props.newPrice}</strong>
          </Card.Description>
          <Card.Description>{props.plots}</Card.Description>
        </Card.Content>
        <Card.Content extra={true}>
          <div className="ui two buttons">
            <Button basic={true} color="green">
              Add
            </Button>
            <Button basic={true} color="blue">
              Detail
            </Button>
          </div>
        </Card.Content>
        <Card.Content extra={true}>
          <br />
          <Rating
            maxRating={5}
            defaultRating={props.rating}
            icon="star"
            size="mini"
          />
        </Card.Content>
      </Card>
    </div>
  );
}

export default CardComponent;
