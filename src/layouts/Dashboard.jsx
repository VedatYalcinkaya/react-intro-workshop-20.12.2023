import React, { useEffect, useState } from "react";
import Categories from "./Categories";
import ProductList from "../pages/ProductList";
import {
  Grid,
  Form,
  Button,
  Label,
  GridColumn,
  GridRow,
  List,
  Icon,
  ListContent,
} from "semantic-ui-react";

export default function Dashboard() {
  const [toDoText, setToDoText] = useState("");
  const [toDoList, setToDoList] = useState([]);

  const addToDo = () => {
    if (toDoText.trim() !== "") {
      setToDoList([...toDoList, toDoText]);
      setToDoText("");
    }
  };

  const deleteToDo = (index) => {
    // Filter ile seçilen to-do dışındaki diğerlerini içeren yeni bir liste oluştur
    const updatedToDoList = toDoList.filter((_, i) => i !== index);
    setToDoList(updatedToDoList);
  };

  useEffect(() => {
    console.log("To-do eklendi");
  }, [toDoList]);

  return (
    <div>
      <Grid>
        <GridRow>
          <GridColumn width={14}>
            <Form>
              <input
                type="text"
                placeholder="To do"
                value={toDoText}
                onChange={(e) => setToDoText(e.target.value)}
              />
              <Label pointing>Lütfen to-do girin</Label>
            </Form>
          </GridColumn>
          <GridColumn width={2}>
            <Button onClick={addToDo} positive>
              Ekle
            </Button>
          </GridColumn>
        </GridRow>
        <GridRow>
          <List divided verticalAlign="middle">
            {toDoList.map((item, index) => (
              <List.Item key={index}>
                <List.Content floated="left">
                  <Icon name="circle" size="big" />
                  {item}
                </List.Content>
                <ListContent floated="right">
                  <Button onClick={() => deleteToDo(index)} negative size="small">
                    Sil
                  </Button>
                </ListContent>
              </List.Item>
            ))}
          </List>
        </GridRow>
      </Grid>
      {/* <Grid>
        <Grid.Row >
          <Grid.Column width={4}>
            <Categories />
          </Grid.Column>
          <Grid.Column width={12}>
            <ProductList />
          </Grid.Column>
        </Grid.Row>
      </Grid> */}
    </div>
  );
}
