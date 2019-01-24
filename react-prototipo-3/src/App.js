import React, { Component } from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { Menu, Segment, Dropdown, Icon, Button } from "semantic-ui-react";

import Home from "./components/Home-component";
import Pedido from "./components/Pedido-component";
import api from "./api/Api";
import ProductsByCategory from "./components/ProductsByCategory-component";
import TopSellingProducts from "./components/TopSellingProducts-component";
import ProductDetail from "./components/Product.Detail-component";
import CarouselAlternative from "./components/Carousel.Alternative-component";
import { ApiTypesActions } from "./customs/utils";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = { activeItem: "home", Categories: [], Products: [] };

    this._loadCategories = this._loadCategories.bind(this);
    this.handleItemClick = this.handleItemClick.bind(this);
    this.addProductToCart = this.addProductToCart.bind(this);
    this.clearProduct = this.clearProduct.bind(this);
  }

  clearProduct() {
    this.setState({ Products: [] });
  }

  addProductToCart(id) {
    api
      .loadProductById(id)
      .then(res =>
        this.setState({ Products: [...this.state.Products, res.data] })
      );
  }

  componentDidMount() {
    this._loadCategories();
  }

  _loadCategories() {
    api.loadCategories().then(res => {
      this.setState({ Categories: res.data });
    });
  }

  _renderCategoriesLink(Category) {
    return (
      <Dropdown.Item key={Category}>
        <Link to={`/Category/${Category}`}>{Category}</Link>
      </Dropdown.Item>
    );
  }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name });

  render() {
    const { activeItem, Products } = this.state;

    return (
      <Router>
        <div>
          <Menu pointing>
            <Menu.Item
              as="div"
              name="home"
              active={activeItem === "home"}
              onClick={this.handleItemClick}
            >
              <Link to="/">Home</Link>
            </Menu.Item>

            <Menu.Menu>
              <Dropdown
                item
                text="Categorias"
                name="categorias"
                // active={activeItem === "categorias"}
                active={activeItem === "categorias" ? true : undefined}
              >
                <Dropdown.Menu>
                  {this.state.Categories.map(this._renderCategoriesLink)}
                </Dropdown.Menu>
              </Dropdown>
            </Menu.Menu>
            <Menu.Item
              as="div"
              name="topSelling"
              active={activeItem === "topSelling"}
              onClick={this.handleItemClick}
            >
              <Link to={`/TopSelling`}>Mais vendidos</Link>
            </Menu.Item>
            <Menu.Menu position="right">
              <Menu.Item
                as="div"
                name="pedido"
                active={activeItem === "pedido"}
                onClick={this.handleItemClick}
              >
                <Link to={`/Pedido`}>
                  <Icon name="shop" />
                </Link>
                <sup>{Products.length}</sup>
              </Menu.Item>
            </Menu.Menu>
          </Menu>
          <Segment>
            <Segment>
              <Button
                onClick={() => {
                  this.clearProduct();
                }}
              >
                clear shop
              </Button>
              <Button
                onClick={() => {
                  this.addProductToCart(10);
                }}
              >
                add prod 10
              </Button>
            </Segment>
            <Segment>
              <Segment>{JSON.stringify(this.state.Products)}</Segment>
              <CarouselAlternative
                description="TODOS"
                products={[]}
                apiTypesActions={ApiTypesActions.loadProducts}
                category={"x"}
                addProductToCart={this.addProductToCart}
              />
            </Segment>
            <Route exact path="/" component={Home} />
            <Route exact path="/Pedido" component={Pedido} />
            <Route
              exact
              path="/Category/:category"
              component={ProductsByCategory}
            />
            <Route exact path="/TopSelling" component={TopSellingProducts} />
            <Route exact path="/ProductsDetail/:id" component={ProductDetail} />
          </Segment>
        </div>
      </Router>
    );
  }
}

export default App;
