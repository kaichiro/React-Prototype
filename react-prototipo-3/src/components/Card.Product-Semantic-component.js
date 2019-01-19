import React, { Component } from "react";
import { Card, Rating, Image, Button, Icon } from "semantic-ui-react";
import { formataValorMoedaReal } from "../customs/utils";

const divStyle = { padding: 7, width: 200 };
const divImage = { height: 180, width: 180, align: "center" };

class CardProduct extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: false,
      Product: {
        description: props.description,
        image: props.image,
        newPrice: props.newPrice,
        oldPrice: props.oldPrice,
        plots: props.plots,
        rating: props.rating,
        category: props.category
      }
    };
  }

  // componentDidMount() {}

  returnPlots(plots_, value_) {
    return plots_ + " X " + formataValorMoedaReal(value_ / plots_);
  }

  render() {
    return (
      <div style={divStyle}>
        <Card>
          <div style={divImage}>
            <Image src={this.state.Product.image} />
          </div>
          <Card.Content>
            <Card.Header textAlign="left">
              {this.state.Product.description}
            </Card.Header>
            <Card.Meta textAlign="right">
              <span className="date">{this.state.Product.category}</span>
            </Card.Meta>
            <Card.Description textAlign="left">
              <sub>
                <del>{formataValorMoedaReal(this.state.Product.oldPrice)}</del>
              </sub>
            </Card.Description>
            <Card.Header textAlign="center">
              {formataValorMoedaReal(this.state.Product.newPrice)}
            </Card.Header>
            <Card.Description textAlign="center">
              {this.returnPlots(
                this.state.Product.plots,
                this.state.Product.newPrice
              )}
            </Card.Description>

            <Card.Content textAlign="center">
              <div style={{ position: "revert" }}>
                <Button.Group align="center">
                  <Button>
                    <Icon size="large" link={true} name="cart plus" />
                  </Button>
                  <Button.Or text="ou" />
                  <Button>
                    <Icon name="eye" size="large" />
                  </Button>
                </Button.Group>
              </div>
            </Card.Content>

            <Rating
              maxRating={5}
              defaultRating={this.state.Product.rating}
              icon="star"
              size="mini"
            />
          </Card.Content>
        </Card>
      </div>
    );
  }
}

export default CardProduct;
