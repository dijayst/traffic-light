import React from 'react'
import './App.css';
//import Jsonap from './component/Jsonap';
//import PostList from './component/Postlist';
import Traffic from './component/Traffic';


function App() {
  return (
    <div className="App">
      <Traffic/>
      
    </div>
  );
}

export default App;


/*

handleswitch=()=>{
    switch(this.state.next){
        case"red":
        this.setState({
           red:colors.red,
           yellow:colors.black,
           green:colors.black,
           next:colors.green
        });
        break;

        default:
        case"green":
        this.setState({
           red:colors.red,
           yellow:colors.black,
           green:colors.black,
           next:colors.green
    });
}}

axios({
    url: '/',
    // configuration
})
.then(response => {
   // do something with JSON response data
})*/