import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import List from './components/List';


class App extends Component {
  render() {
    const items = [
      {
        name: "Cereales con chocolate",
        description: "Cereales rellenos de chocolate",
        quantity: 2,
        category: "Cereales",
        price: 5
      },
      {
        name: "Hamburguesa con queso",
        quantity: 1,
        category: "Fast-food",
        price: 15
      },
      {
        name: "Agua mineral",
        description: "Agua de un charco del Himalaya",
        quantity: 2,
        category: "Bebida",
        price: 5

      },
      {
        description: "Agua de un charco del Himalaya",
        quantity: 2,
        category: "Bebida",
        price: 5

      }
    ];
    return (
      <div className="App">
        <ul>
          {items.map((itemList) => {
            return (
              <List recipe={itemList.name} descrip={itemList.description} price={itemList.price}/> 
            );
          })}
        </ul>
      </div>                 
    );
  }
}

export default App;
