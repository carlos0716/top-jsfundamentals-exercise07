const ftoc = function(f) {
 let c = (f -32)/1.8;
  return Math.round(c * 10)/10; // The math.round function allows to round a number to the nearest integer depending on the value of the decimals. here I used an extra step to generate a number with only one decimal by multiplying the number to round by ten and then dividing the result by ten. 
};

const ctof = function(c) {
  let f = (c * 1.8) + 32;  
  return Math.round(f * 10)/10;
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
