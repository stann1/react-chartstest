import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Charts from './components/charts';
import ReactVis from './components/reactvis';

class App extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       chartId: "chartJs"
    }

    this.handleClick = this.handleClick.bind(this);
  }
  
  handleClick(ev){
    ev.preventDefault();

    console.log(ev.target.id);
    this.setState({chartId: ev.target.id});
  }

  renderCharts(){
    switch (this.state.chartId) {
      case "chartJs":
        return (<Charts/>)
      case "reactVis":
        return(<ReactVis />)
      default:
        break;
    }
  }

  render(){
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
      </header>
        <div className="btn-gropup">
          <button id="chartJs" onClick={this.handleClick}>ChartJS</button>
          <button id="reactVis" onClick={this.handleClick}>React-Vis</button>
        </div>
        {this.renderCharts()}
      </div>
      );
    }
}

export default App;
