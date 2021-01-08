import React from "react";
import pigImage from "../../assets/blue-pig.png";
import "./MiniPig.css"

const MiniPig = (props) => {
    console.log(pigImage);
      return ( <div class="minipig" style={{
          backgroundImage: `url("${pigImage}")`,
          left: `${props.percentage * 0.8 }%`,
      }}>
          <div class="hoverbox" >
            <p style={{fontSize: "10px", margin: 0}} > John Smith  </p>
            <p style={{fontSize: "25px", margin: 0}} > {props.percentage }%  </p>
            <p style={{fontSize: "10px", margin: 0}} > started 1/1/20  </p>
          </div>
      </div>);
  
  }
  
  export default MiniPig;

