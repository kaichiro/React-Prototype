import * as React from "react";
import { Card } from "semantic-ui-react";

import Products from "src/services/ProductsServices";
import CardComponent from "../card/CardComponent";

const prods = Products;

// tslint:disable-next-line:only-arrow-functions
prods.forEach(function(prod) {
  // tslint:disable-next-line:no-unused-expression
  <CardComponent
    image={prod.Product.image}
    description={prod.Product.description}
    oldPrice={prod.Product.oldPrice}
    detail={prod.Product.detail}
    newPrice={prod.Product.newPrice}
    plots={prod.Product.plots}
    rating={prod.Product.rating}
  />;
});

const CardGroupComponent = () => (
  <Card.Group stackable={true} centered={true} itemsPerRow={4}>
    <CardComponent
      image={prods[0].Product.image}
      description={prods[0].Product.description}
      oldPrice={prods[0].Product.oldPrice}
      detail={prods[0].Product.detail}
      newPrice={prods[0].Product.newPrice}
      plots={prods[0].Product.plots}
      rating={prods[0].Product.rating}
    />
    <CardComponent
      image={prods[1].Product.image}
      description={prods[1].Product.description}
      oldPrice={prods[1].Product.oldPrice}
      detail={prods[1].Product.detail}
      newPrice={prods[1].Product.newPrice}
      plots={prods[1].Product.plots}
      rating={prods[1].Product.rating}
    />
    <CardComponent
      image={prods[2].Product.image}
      description={prods[2].Product.description}
      oldPrice={prods[2].Product.oldPrice}
      detail={prods[2].Product.detail}
      newPrice={prods[2].Product.newPrice}
      plots={prods[2].Product.plots}
      rating={prods[2].Product.rating}
    />
    <CardComponent
      image={prods[3].Product.image}
      description={prods[3].Product.description}
      oldPrice={prods[3].Product.oldPrice}
      detail={prods[3].Product.detail}
      newPrice={prods[3].Product.newPrice}
      plots={prods[3].Product.plots}
      rating={prods[3].Product.rating}
    />
  </Card.Group>
);

export default CardGroupComponent;
