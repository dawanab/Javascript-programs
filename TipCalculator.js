// The program allows the user to calculate the amount 
// of a tip she should leave based on the total cost 
// of the meal, and the type of tip she wants to leave.


function tipCalculator(quality, total) {
    switch (quality) {
      case "bad":
        return Math.ceil(.05 * total);
      case "ok":
        return Math.ceil(0.15 * total);
      case "good":
        return Math.ceil(0.20 * total);
      case "excellent":
        return Math.ceil(0.30 * total);
        default:
          return Math.ceil(0.18 * total);
    }
  }
  
  console.log(tipCalculator('good', 27.56));


 