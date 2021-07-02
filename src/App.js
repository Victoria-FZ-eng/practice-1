import React from 'react';
import './App.css';
import Main from './Components/Main.js';
import Header from './Components/Header.js';
import Footer from './Components/Footer.js';
import SelectedBeast from './Components/SelectedBeast';
import Beasts from './Components/data.json';
import 'bootstrap/dist/css/bootstrap.min.css';
import Form from './Components/Form.js'

class App extends React.Component{
  constructor(props){
    super(props);
    this.state={
      beastsArr: Beasts,
      show: false,
      selBeast:[],
    }
  }

  select=(event)=>{
    event.preventDefault();
    const selected = Beasts.find((beast)=>(beast.title == event.target.value));
    console.log(selected);
    this.setState({
      selBeast: selected,
      show:true,
    })



  }

 
  hide=()=>{
    this.setState({
      show:false,
    })
  }

  render(){
    return(
      <>
      <Header />
      <Form />
      <Main arr={this.state.beastsArr} modal={this.select}/>
      <SelectedBeast showing={this.state.show} beast={this.state.selBeast} onHide={this.hide} />
      <Footer />

      </>
    )
  }
  
}

export default App;
