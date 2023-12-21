import React, { useState, useEffect } from "react";
import { Icon, Label, Menu, Table } from "semantic-ui-react";
import ProductService from "../services/productServices";

export default function ProductList() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    let productService = new ProductService();
    productService.getProducts().then((result) => setProducts(result.data));
  });

  return (
    <div>
      <Table celled>
        <Table.Header>
          <Table.Row>
            <Table.Cell>Marka</Table.Cell>
            <Table.Cell>Model</Table.Cell>
            <Table.Cell>Renk</Table.Cell>
            <Table.Cell>Kilometre</Table.Cell>
            <Table.Cell>Plaka</Table.Cell>
            <Table.Cell>Model Yılı</Table.Cell>
            <Table.Cell>Günlük Kira Fiyatı</Table.Cell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          {products.map((product) => (
            <Table.Row key={product.id}>
              <Table.Cell>{product.model.brand.name}</Table.Cell>
              <Table.Cell>{product.model.name}</Table.Cell>
              <Table.Cell>{product.color.name}</Table.Cell>
              <Table.Cell>{product.kilometer}</Table.Cell>
              <Table.Cell>{product.plate}</Table.Cell>
              <Table.Cell>{product.year}</Table.Cell>
              <Table.Cell>{product.dailyPrice}</Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>

        <Table.Footer>
          <Table.Row>
            <Table.HeaderCell colSpan="3">
              <Menu floated="right" pagination>
                <Menu.Item as="a" icon>
                  <Icon name="chevron left" />
                </Menu.Item>
                <Menu.Item as="a">1</Menu.Item>
                <Menu.Item as="a">2</Menu.Item>
                <Menu.Item as="a">3</Menu.Item>
                <Menu.Item as="a">4</Menu.Item>
                <Menu.Item as="a" icon>
                  <Icon name="chevron right" />
                </Menu.Item>
              </Menu>
            </Table.HeaderCell>
          </Table.Row>
        </Table.Footer>
      </Table>
    </div>
  );
}
