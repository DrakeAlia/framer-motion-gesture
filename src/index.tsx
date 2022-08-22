import * as React from "react";
import { render } from "react-dom";
// import motion from framer motion;
import { motion } from "framer-motion";

import "./styles.css";

const App = () => {
  return (
    <div className="example-container">
      {/* Every element you want to animate you do by adding motion. in the element */}
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


// Notes & Different animation motions:

 // If it is true rotate to 360 degrees, if it is false then it should be 0 degrees
    // const [rotate, setRotate] = React.useState(false)
    // Instead of rotating, move the element when you click on it with move starting as false
    // const [move, setMove] = React.useState(false)

      // move the square 100px to the left and with a size(scale) of 1
      // initial is the begining state for your element with animation
      // animate={{ x: 100, scale: 1}} initial={{ scale: 0 }}

      // animate={{ 
        // If rotate state is true then rotate 360 degrees 
        // If its false, rotate back to 0 degrees
        // rotate: rotate ? 360 : 0 }} 
        // when you click on this div, set rotate to the opposite of what it is
        // onclick={() => {
        //   setRotate(!rotate)
        // }}

      // animate={{ 
        // if move is true, we move 200px to the right
        // if its false then move 200px to the left
        // x: move ? 200 : -200 }}
        // transition - prop gives certain properties that have to do with transition state of the element
        // delay the animation for 1 second 
        // transition={{ delay: 1 }}
        // onclick={() => {
        //   setMove(!move)
        // }}

      // animate={{ 
        // x: move ? 200 : -200 }}
        // spring, tween, inertia - is a physics animation when you need that kind of effect for your animation
        // type - is a type of transition were you can determine the duration of it
        // transition={{ type: "tween", duration: 5 }}
        // onclick={() => {
        //   setMove(!move)
        // }}

      // animate={{ 
        // x: move ? 200 : -200 }}
        // bounce - adds a "bounce" effect the element
        // transition={{ type: "spring", bounce: 5 }}
        // onclick={() => {
        //   setMove(!move)
        // }}

      // animate={{ 
        // x: move ? 200 : -200 }}
        // When you using inertia type you can determine the velocity
        // the element moves on its own but with some resistance depending on how you set your velocity
        // transition={{ type: "inertia", velocity: 40 }}
        // onclick={() => {
        //   setMove(!move)
        // }}


      // While hovering on the element the size will increase by 2px
      // <motion.div whileHover={{ scale: 2 }} ></motion.div>

      // When you drag the element(left click) you can move it around, which in order to successful animate that
      // you have to put the drag property in the front of whileDrag
      // <motion.div drag whileDrag={{ scale: 2 }}></motion.div>

      // Adding constraints to how much you can drag the element
      // drag the element only up and down with just "y"
      // drag only left and right with "x"
      // <motion.div drag="y"></motion.div>

      // You can only drag up to 50px to the left before coming back 
      // but as much as you want to the right with no constraints 
      // <motion.div drag="x" dragConstraints={{ left: 50 }}></motion.div>

      // Animate were the element is consistently rotating back and fourth
      // Using an array is best because is can be use in a sequential order for something like a rotation
      // <motion.div 
      // animate={{
      //     rotate: [0, 200, 200, 0],
      // Rotate while moving in the x direction
      //     x: [0, 200, 200, 0, -200, -200, 0]
      //   }}
      // Keep the animation rotating forever for every 3 seconds
      // transition={{ repeat: Infinity, duration: 3 }}
      // ></motion.div>