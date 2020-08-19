const add = (x, y) => {
    return x + y;
  };
  
  const subtract = (x, y) => {
    return x - y;
  };
  
  const multiply = (x, y) => {
    var multiply=(x * y);
    if(isNaN(x)||isNaN(y)){
    multiply=Number(x)||Number(y);
    }else{
       multiply=x*y;
    }
    return multiply;
  };
    

  
  const divide = (x, y) => {
    var division=(x/y);

    if(y===0){
        return "error";
    }else if (isNaN(x)||isNaN(y))
    {
         division= "Invalid"
    }else{
         division=(x/y);

}
return division;
};
const equal = (x, y) => {
  x=y;

};

  const clearAllfields = ()=>{
    
    return 0;
     
  };
  

  module.exports = {
    add,
    subtract,
    multiply,
    divide,
    equal,
    clearAllfields
  };