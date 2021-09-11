import React, { Component } from 'react'
import axios from 'axios'

 class Jsonap extends Component {
     constructor(props) {
         super(props)
     
         this.state = {
              posts:[]
         }
     }
     
     componentDidMount(){
         axios
         .get('https://api.coindesk.com/v1/bpi/currentprice.json')
         .then(response=>{console.log(response)})
         .catch(error=>{console.log(error)})
     }
    render() {
        return (
            <div>
                <h1>my api</h1>
            </div>
        )
    }
}

export default Jsonap
