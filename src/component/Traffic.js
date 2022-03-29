
import React, { Component } from 'react';


const colors ={
    red:{
        background:"red"
    },
    yellow:{
        background:"yellow"
    },
    green:{
        background:"green"
    },
    grey:{
        background:"grey"
    }
}

 class Traffic extends Component {
constructor(props) {
    super(props)

    this.state = {
         red:colors.red,
         yellow:colors.grey,
         green:colors.grey,
         next:colors.yellow
    }
}

handleswitch=()=>{
    switch (this.state.next) {
        case "red":
          this.setState({
            red: colors.grey,
            yellow: colors.grey,
            green: colors.green,
            next: 'green'
          });
          break;
        case "yellow":
          this.setState({
            red: colors.grey,
            yellow: colors.yellow,
            green: colors.grey,
            next: 'red'
          });
          break;
        default :
          this.setState({
            red: colors.red,
            yellow: colors.grey,
            green: colors.grey,
            next: 'yellow'
          });
          
      }
    //  console.log(`effect1111 ${this.state.next}`)
   }


componentDidMount(){
    setInterval(() => {
        this.handleswitch();
    }, 2000);

}
    render() {
        
        return (
            <div className="bord">
                <button style={this.state.red}></button> <br/>
                
                <button style={this.state.yellow}></button> <br/>
                
                <button style={this.state.green}></button>
            </div>
        )
    }
 }

export default Traffic


