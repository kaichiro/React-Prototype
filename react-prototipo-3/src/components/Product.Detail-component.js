import React, { Component } from "react";
import { Segment, Image, Rating } from "semantic-ui-react";

import api from "../api/Api";
import { formataValorMoedaReal, returnPlots } from "../customs/utils";

class ProductDetail extends Component {
  constructor(props) {
    super(props);
    this.state = { product: {} };
    this.loadingData = this.loadingData.bind(this);
  }

  componentDidMount() {
    this.loadingData();
  }

  loadingData() {
    api.loadProductById(this.props.match.params.id).then(res => {
      this.setState({ product: res.data[0] });
    });
  }

  render() {
    return (
      <div>
        <Segment>
          <Image
            src={this.state.product.image}
            size="large"
            floated="left"
            bordered
            centered
            // circular
            // fluid
            // inline
            // rounded
            ui
            wrapped
          />
          <div style={{ height: 30 }} />
          <div>
            <h1>{this.state.product.description}</h1>
          </div>
          <div style={{ height: 30 }} />
          <div>Categoria: {this.state.product.category}</div>
          <div style={{ height: 60 }} />
          <div>{this.state.product.infos}</div>
          <div style={{ height: 90 }} />
          <div>
            <sub>
              <del>
                Era {formataValorMoedaReal(this.state.product.oldPrice + 0)}
              </del>
            </sub>
          </div>
          <div style={{ height: 30 }} />
          <div>
            <h3>
              Agora{" "}
              {(this.state.product.newPrice + 0).toLocaleString("pt-BR", {
                style: "currency",
                currency: "BRL"
              })}
            </h3>
          </div>
          <div style={{ height: 30 }} />
          <div>
            <p>
              {returnPlots(
                this.state.product.plots + 0,
                this.state.product.newPrice + 0
              )}
            </p>
          </div>
          <div style={{ height: 30 }} />
          <div>
            <Rating
              maxRating={5}
              defaultRating={this.state.product.rating}
              icon="star"
              size="mini"
              disabled
            />
          </div>
        </Segment>
      </div>
    );
  }
}

export default ProductDetail;
