import "./App.css";
import Products from "./components/Products";
import { Component, createRef } from "react";
import Home from "./layouts/Home";
import Title from "./components/Title";
import Navbar from "./components/Navbar";

class App extends Component {
  state = {
    products: [
      {
        name: "Tomate",
        price: 1500,
        img: "/products/tomate.jpg",
      },
      {
        name: "Arberjas",
        price: 1000,
        img: "/products/arbejas.jpg",
      },
      {
        name: "Lechuga",
        price: 500,
        img: "/products/lechuga.jpg",
      },
    ],
    car: [],
    isCarVisible: false
  };

  addToCart = (product) => {
    const { car } = this.state 
    if (car.find( c => c.name === product.name)) {
      const newCar = car.map( c => c.name === product.name
        ? ({
          ...c,
          quantity: c.quantity + 1
        })
        : c)
        return this.setState({ car: newCar})
    }
    return this.setState({
      car: this.state.car.concat({
        ...product,
        quantity: 1
      })
    })
  }

  showCar = () => {
    if (!this.state.car.length) {
      return;
    }
    this.setState({isCarVisible: !this.state.isCarVisible})
  }

  render() {
    const { car , isCarVisible} = this.state
    return (
      <Home>
        <Navbar 
        car= {car}
        showCar= {this.showCar}
        isCarVisible= {isCarVisible}/>      
        <Title />
        <Products
          addToCart={this.addToCart}
          products={this.state.products}
        />
      </Home>
    );
  }
}

export default App;
