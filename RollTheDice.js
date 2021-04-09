/* 
This program simulates two dice being rolled and totalled. 
 */

const rollTheDice = () => {
    // Math.random() gives us a random number from 0 up to, but not including, 1.
    // Multiply that by 7 to get numbers from 1 to 6, inclusive
      const die1 = Math.floor(Math.random() * 7);
      const die2 = Math.floor(Math.random() * 7);
      return die1 + die2
  }
  
  console.log(rollTheDice());
