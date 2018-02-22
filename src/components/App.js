import React, { Component } from 'react';
import logo from '../logo.svg';
import { v4 } from 'uuid';
import '../App.css';
import { ColorList } from './colorlist'
import { AddColorForm } from './AddColorForm'

export default class App extends Component {

  constructor(props){
    super(props)
    this.state = {
      colors:[]
    }
    this.addColor = this.addColor.bind(this)
    this.rateStar = this.rateStar.bind(this)
    this.removeColor = this.removeColor.bind(this)

  }

  addColor = (title, color) => {
    const colors = [
      ...this.state.colors,
      {
        id:v4(),
        title,
        hex: color,
        rating: 0
      }
    ]
    this.setState({colors})
  }

  rateStar = (id, rating) => {
    const colors = this.state.colors.map((color)=>(
      (color.id != id) ?
      color :
      {
        ...color,
        rating
      }
    ))
    this.setState({colors})
  }

  removeColor = (id) => {
    const colors = this.state.colors.filter(
      color => color.id != id
    )
    this.setState({colors})
  }

  render() {
    const { colors } = this.state.colors
    
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>
        <AddColorForm onNewColor = {this.addColor} />
        <ColorList colors = {this.state.colors}
                   onRate = {this.rateStar}
                   onRemove = {this.removeColor}/>
      </div>
    );
  }
}

