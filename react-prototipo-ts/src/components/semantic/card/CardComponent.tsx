import * as React from "react";
import { Card, Image, Rating } from "semantic-ui-react";

import { CardComponentProps } from "./CardComponentProps";

function CardComponent(props: CardComponentProps) {
  return (
    <div className="ui link cards four stackable">
      <Card>
        <Card.Content textAlign="left">
          <Image src={props.image} size="big"/>
          <Card.Header>{props.description}</Card.Header>
          <Card.Content extra={false} textAlign="right">
            <Card.Meta>
              <del>{props.oldPrice}</del>
            </Card.Meta>
          </Card.Content>
          <Card.Description>{props.detail}</Card.Description>
        </Card.Content>
        <Card.Content extra={true} textAlign="center">
          <Card.Header>
            <strong>
              {props.newPrice}
              <br />
              {props.plots}
            </strong>
          </Card.Header>
          <Card.Content extra={true}>
            <br />
            <Rating
              maxRating={5}
              defaultRating={props.rating}
              icon="star"
              size="mini"
            />
          </Card.Content>
        </Card.Content>
      </Card>
    </div>
  );
}

export default CardComponent;
