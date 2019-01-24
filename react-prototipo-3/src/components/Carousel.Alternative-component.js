import React, { Component } from "react";
import Slider from "react-slick";
import { Link } from "react-router-dom";

import api from "../api/Api";
import { ApiTypesActions } from "../customs/utils";
import LoadData from "./LoadData-component";
import { Button, Icon } from "semantic-ui-react";
import CardProductAlternative from "./Card.Product.Alternative-Semantic-component";

class CarouselAlternative extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoading: false,
      description: this.props.description,
      products: [],
      apiTypesActions: this.props.apiTypesActions,
      category: this.props.category
    };

    this.renderProducts = this.renderProducts.bind(this);
  }

  componentDidMount() {
    this.setState({ isLoading: true });
    this.loadData();
    setTimeout(() => this.setState({ isLoading: false }), 300);
  }

  loadData() {
    switch (this.state.apiTypesActions) {
      case ApiTypesActions.loadTopSellingProducts:
        api.loadTopSellingProducts().then(res => {
          this.setState({ products: res.data });
        });
        break;
      case ApiTypesActions.loadProductsByCategory:
        api.loadProductsByCategory(this.props.category).then(res => {
          this.setState({ products: res.data });
        });
        break;
      default:
        api.loadProducts().then(res => {
          this.setState({ products: res.data });
        });
        break;
    }
  }

  renderProducts(Product) {
    return (
      <div key={Product.description}>
        <Button onClick={() => this.props.addProductToCart(Product.id)}>
          add
        </Button>
        <Button>
          <Link to={`/ProductsDetail/${Product.id}`}>
            <Icon name="eye" size="large" />
          </Link>
        </Button>
        <CardProductAlternative
          className="ui link cards"
          id={Product.id}
          description={Product.description}
          image={Product.image}
          newPrice={Product.newPrice}
          oldPrice={Product.oldPrice}
          plots={Product.plots}
          rating={Product.rating}
          category={Product.category}
          addProductToCart={this.addProductToCart}
        />
      </div>
    );
  }

  render() {
    const settings = {
      dots: true,
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2000
    };

    return (
      <div>
        <h2>{this.state.description}</h2>
        <Button onClick={() => this.props.addProductToCart(10)}>add</Button>
        <section>
          {this.state.isLoading && (
            <LoadData texto="Aguarde, carregando produtos..." />
          )}
          {!this.state.isLoading && (
            <Slider ref={slider => (this.slider = slider)} {...settings}>
              {this.state.products.map(this.renderProducts)}
            </Slider>
          )}
        </section>
      </div>
    );
  }
}

export default CarouselAlternative;
