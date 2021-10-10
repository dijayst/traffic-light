import React,{useState,useEffect} from 'react'

function Hookslight() {
    
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

const [red, setred] = useState(colors.red);
const [yellow, setyellow] = useState(colors.grey);
const [green, setGreen] = useState(colors.grey);
const [next, setNext] = useState(colors.yellow);


const handleswitch=()=>{
  switch (next) {
      case "red":
        setred({
          red: colors.grey,
          yellow: colors.grey,
          green: colors.green,
          next: 'green'
        });
        break;
      case "yellow":
        setyellow({
          red: colors.grey,
          yellow: colors.yellow,
          green: colors.grey,
          next: 'red'
        });
        break;
      default :
        setGreen({
          red: colors.red,
          yellow: colors.grey,
          green: colors.grey,
          next: 'yellow'
        });
        
    }
    console.log(`effective ${next}`)
 }

    return (
        <div>
             <button style={red} ></button> 
                
             <button style={yellow}></button> 
                
             <button style={green}></button>
           <p>{next}</p>
        </div>
    )
}

export default Hookslight
