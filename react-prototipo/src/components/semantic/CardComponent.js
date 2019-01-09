import React from "react";
import { Card, Image, Button, Rating } from "semantic-ui-react";
import { CardComponentProps } from "./CardComponentProps";

// eslint-disable-next-line no-redeclare
// interface CardComponentProps {
//   description: string;
//   oldPrice: string;
//   image: string;
//   newPrice: string;
//   plots: string;
//   rating: number;
// }

function CardComponent(props: CardComponentProps) {
  return (
    // <div className="ui link cards four stackable">
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
        <Card.Content extra>
          <div className="ui two buttons">
            <Button basic color="green">
              Add
            </Button>
            <Button basic color="blue">
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
