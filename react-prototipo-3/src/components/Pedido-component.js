import React, { Component } from "react";
import { Form, Segment, Table, Header, Image, Button } from "semantic-ui-react";
import { Link } from "react-router-dom";

import api from "../api/Api";
import { formataValorMoedaReal } from "../customs/utils";

const cellAlignments = ["center", "left", "right", "right"];

class Pedido extends Component {
  constructor(props) {
    super(props);
    this.state = {
      productsQtde: [],
      products: [],
      name: String,
      surname: String,
      email: String,
      phonenumber: String,
      address: String,
      zipcode: String,
      state_: String,
      total: Number
    };
  }

  addQtdeProd = idx => {
    console.log(23);
  };

  componentDidMount() {
    api.loadTopSellingProducts().then(res => {
      this.setState({ products: res.data });
      this.setState({
        productsQtde: this.state.products.map(function() {
          return 1;
        })
      });
      this.setState({
        total: this.state.products.reduce((ttl, prod, idx) => {
          return ttl + prod.newPrice * this.state.productsQtde[idx];
        }, 0)
      });
    });
  }

  handleChange = (e, { name, value }) => this.setState({ [name]: value });

  handleSubmit = () => {
    alert(JSON.stringify(this.state));
  };

  render() {
    const {
      productsQtde,
      products,
      name,
      surname,
      email,
      phonenumber,
      address,
      zipcode,
      state_,
      total
    } = this.state;

    return (
      <Segment>
        <strong>debug...</strong>
        <pre>{JSON.stringify({ name, productsQtde, products }, null, 2)}</pre>
        <Form /*onSubmit={this.handleSubmit}*/>
          <Form.Group>
            <Form.Input
              placeholder="Name"
              name="name"
              value={name}
              onChange={this.handleChange}
            />
            <Form.Input
              placeholder="Surname"
              name="surname"
              value={surname}
              onChange={this.handleChange}
            />
          </Form.Group>
          <Form.Group>
            <Form.Input
              placeholder="Email"
              name="email"
              value={email}
              onChange={this.handleChange}
            />
            <Form.Input
              placeholder="Phone number"
              name="phonenumber"
              value={phonenumber}
              onChange={this.handleChange}
            />
          </Form.Group>
          <Form.Group>
            <Form.Input
              placeholder="Address"
              name="address"
              value={address}
              onChange={this.handleChange}
            />
            <Form.Input
              placeholder="Zipcode"
              name="zipcode"
              value={zipcode}
              onChange={this.handleChange}
            />
          </Form.Group>
          <Form.Group>
            <Form.Input
              placeholder="State"
              name="state_"
              value={state_}
              onChange={this.handleChange}
            />
            <Form.Input
              placeholder="Total"
              name="total"
              value={formataValorMoedaReal(total)}
              readOnly
            />
          </Form.Group>
          <Form.Group>
            {/* {this.renderTableProducts()} */}
            <Table celled padded>
              <Table.Header>
                <Table.Row>
                  <Table.HeaderCell
                    colSpan={cellAlignments.length}
                    textAlign="center"
                  >
                    <Header as="h1" textAlign="center">
                      {`Products (${this.state.products.length})`}
                    </Header>
                  </Table.HeaderCell>
                </Table.Row>
                <Table.Row>
                  <Table.HeaderCell textAlign={cellAlignments[0]}>
                    Image
                  </Table.HeaderCell>
                  <Table.HeaderCell textAlign={cellAlignments[1]}>
                    Description
                  </Table.HeaderCell>
                  <Table.HeaderCell textAlign={cellAlignments[2]}>
                    Qtde
                  </Table.HeaderCell>
                  <Table.HeaderCell textAlign={cellAlignments[3]}>
                    Price
                  </Table.HeaderCell>
                </Table.Row>
              </Table.Header>
              <Table.Body>
                {products.map(function(product, idx) {
                  // return renderTableRowProduct(elem, index);
                  return (
                    <Table.Row key={product.id}>
                      <Table.Cell>
                        <Image centered size="small" src={product.image} />
                      </Table.Cell>
                      <Table.Cell textAlign={cellAlignments[1]}>
                        <Link to={`/ProductsDetail/${product.id}`}>
                          {product.description}
                        </Link>
                      </Table.Cell>
                      <Table.Cell>
                        <Button.Group>
                          <Button
                            negative
                            icon="minus circle"
                            // onClick={alert(0)}
                          />
                          <Button.Or text={`${productsQtde[idx]}`} />
                          <Button
                            positive
                            icon="plus circle"
                            // onClick={alert(1)}
                          />
                        </Button.Group>
                      </Table.Cell>
                      <Table.Cell textAlign={cellAlignments[3]}>
                        <Header as="h4">
                          {`${productsQtde[idx]} x ${formataValorMoedaReal(
                            product.newPrice
                          )}`}
                        </Header>
                        <Header as="h4">
                          {`Total Item ${formataValorMoedaReal(
                            product.newPrice * productsQtde[idx]
                          )}`}
                        </Header>
                      </Table.Cell>
                    </Table.Row>
                  );
                })}
              </Table.Body>
            </Table>
          </Form.Group>
          <Form.Group>
            <Form.Button /*content="Submit"*/ onClick={this.handleSubmit}>
              Enviar Pedido
            </Form.Button>
          </Form.Group>
        </Form>
        <strong>onChange:</strong>
        <pre>{JSON.stringify({ name, surname, email }, null, 2)}</pre>
        <strong>onSubmit:</strong>
        <pre>{JSON.stringify({ name, surname, email }, null, 2)}</pre>
      </Segment>
    );
  }
}

export default Pedido;
