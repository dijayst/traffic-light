
import React, { Component } from 'react';


const colors ={
    red:{
        background:"#cc3232"
    },
    yellow:{
        background:"#e7b416"
    },
    green:{
        background:"#2dc937"
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
   }


componentDidMount(){
    setInterval(() => {
        this.handleswitch();
    }, 2000);

}
    render() {
        
        return (
            <div>
                <button style={this.state.red}></button> <br/>
                
                <button style={this.state.yellow}></button> <br/>
                
                <button style={this.state.green}></button>
            </div>
        )
    }
 }

export default Traffic
