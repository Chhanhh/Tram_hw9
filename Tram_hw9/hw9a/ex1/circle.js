// create circumference function
function circumference(circleRadiusAsParameter) {
    // calculate and return circumference
    const circumferenceOfAskedRadius = 2 * Math.PI * circleRadiusAsParameter;
  
    return circumferenceOfAskedRadius;
  }
  
  // create area function
  function area(circleRadiusAsParameter) {
    // calculate and return area
    const areaOfAskedRadius = Math.PI * circleRadiusAsParameter * circleRadiusAsParameter;
  
    return areaOfAskedRadius;
  }
  
  // export the 2 functions as named export
  module.exports = {
    circumference,
    area,
  };