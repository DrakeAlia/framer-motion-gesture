import * as React from "react";
import { render } from "react-dom";
// import motion from framer motion;
import { motion } from "framer-motion";

import "./styles.css";

const App = () => {
  return (
    <div className="example-container">
      {/* every element you want to animate you do by adding motion. in the element */}
      <motion.div
        animate={{
          rotate: [0, 200, 200, 0],
          x: [0, 200, 200, 0, -200, -200, 0]
        }}
        transition={{ repeat: Infinity, duration: 3 }}
      ></motion.div>
    </div>
  );
};

render(<App />, document.getElementById("root"));


 // if it is true rotate to 360 degrees, if it is false then it should be 0 degrees
    // const [rotate, setRotate] = React.useState(false)
    //  instead of rotating, move the element when you click on it with move starting as false
    // const [move, setMove] = React.useState(false)

      // move the square 100px to the left and with a size(scale) of 1
      // initial is the begining state for your element with animation
      // animate={{ x: 100, scale: 1}} initial={{ scale: 0 }}
      // animate={{ 
        // if rotate state is true then rotate 360 degrees 
        // if its false, rotate back to zero degrees
        // rotate: rotate ? 360 : 0 }} 
        // when you click on this div, set rotate to the opposite of what it is
        // onclick={() => {setRotate(!rotate)}}
      // animate={{ 
        // if move is true, we move 200px to the right
        // if its false then move 200px to the left
        // x: move ? 200 : -200 }}
        // transition prop gives certain properties that have to do with transition state of the element
        // delay the animation for 1 second 
        // {{ type: "tween" }}
        // transition={{ delay: 1 }}
        // onclick={() => {setMove(!move)}}

