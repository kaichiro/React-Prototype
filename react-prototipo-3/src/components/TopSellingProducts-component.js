import React, { Component } from "react";
import { Card } from "semantic-ui-react";

import LoadData from "./LoadData-component";
import api from "../api/Api";
import CardProduct from "./Card.Product-Semantic-component";

class TopSellingProducts extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoading: false,
      Products: []
    };
  }

  componentDidMount() {
    this.setState({ isLoading: true });

    api
      .loadTopSellingProducts()
      .then(res => this.setState({ Products: res.data, isLoading: false }));
  }

  renderProducts(Product) {
    return (
      <CardProduct
        key={Product.description}
        description={Product.description}
        image={Product.image}
        newPrice={Product.newPrice}
        oldPrice={Product.oldPrice}
        plots={Product.plots}
        rating={Product.rating}
        category={Product.category}
      />
    );
  }

  render() {
    return (
      <section>
        <h1>Produtos mais vendidos</h1>
        {this.state.isLoading && (
          <LoadData texto="Aguarde, carregando produtos..." />
        )}
        {!this.state.isLoading && (
          <Card.Group
            className="ui link cards"
            centered
            doubling
            stackable
            itemsPerRow={3}
          >
            {this.state.Products.map(this.renderProducts)}
          </Card.Group>
        )}
      </section>
    );
  }
}

export default TopSellingProducts;
