import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import 'react-select/dist/react-select.css';
import { appendAttributeBonus } from './helpers';
import HitPoints from './components/HitPoints';
import Actions from './components/Actions';
import Attributes from './components/Attributes';
import Traits from './components/Traits';
import Main from './components/Main';

class App extends Component {
  state = {
    newShape: {
      hp: {},
      attributes: {},
      traits: [],
      actions: []
    }
  };

  url = 'http://localhost:3001/shapes';

  handleChangeFor = (propertyName) => (ev) => {
    this.setState({newShape: {
      ...this.state.newShape,
      [propertyName]: ev.target.value
    }});
  }

  getAttributeBonus = e => {
    this.setState({newShape: {
      ...this.state.newShape,
      attributes: {
        ...this.state.newShape.attributes,
        [e.target.name]: appendAttributeBonus(e.target.value)
      }
    }});
  }

  handleHpAndAttributeChange = (propName, subPropName) => ev => {
    this.setState({ newShape: {
      ...this.state.newShape,
      [propName]: {
        ...this.state.newShape[propName],
        [subPropName]: ev.target.value,
      }
    }})
  }

  handleTraitsAndActionsChange = propertyName => ev => {
    switch (ev.target.name) {
      case `${propertyName}1`:
      console.log('in 1');
        let newArr = [...this.state.newShape[propertyName]];
        newArr[0] = ev.target.value;
        console.log('newArr', newArr);
        this.setState({
          newShape: {
            ...this.state.newShape,
            [propertyName]: newArr
          }
        });
        break;
      case `${propertyName}2`:
        let newArr1 = [...this.state.newShape[propertyName]];
        newArr1[1] = ev.target.value;
        this.setState({
          newShape: {
            ...this.state.newShape,
            [propertyName]: newArr1
          }
        });
        break;
      case `${propertyName}3`:
        let newArr2 = [...this.state.newShape[propertyName]];
        newArr2[2] = ev.target.value;
        this.setState({
          newShape: {
            ...this.state.newShape,
            [propertyName]: newArr2
          }
        });
        break;
      default:
        return;
    }

  }

  postShapeToServer = () => {
    axios.post(this.url, this.state.newShape)
      .then(res => {
        this.setState({newShape: {
          hp: {}, 
          attributes: {},
          traits: [],
          actions: []
        }});
      })
      .catch(err => {
        console.log('err', err);
      });
  }

  render() {
    return (
      <div className="App">
        <h1>Add Shapes</h1>
        <form className="shape-form">
          <Main handleChangeFor={this.handleChangeFor} newShape={this.state.newShape} />

          <HitPoints handleHpAndAttributeChange={this.handleHpAndAttributeChange} 
                     hpData={this.state.newShape.hp} />

          <Attributes handleHpAndAttributeChange={this.handleHpAndAttributeChange} 
                      attributes={this.state.newShape.attributes} 
                      getAttributeBonus={this.getAttributeBonus} />

          <Traits traits={this.state.newShape.traits} 
                  handleTraitsAndActionsChange={this.handleTraitsAndActionsChange} />

          <Actions handleTraitsAndActionsChange={this.handleTraitsAndActionsChange} 
                   actions={this.state.newShape.actions} />

          <button className="form-button" type="button" onClick={this.postShapeToServer}>Add Shape</button>

        </form>

      </div>
    );
  }
}

export default App;
