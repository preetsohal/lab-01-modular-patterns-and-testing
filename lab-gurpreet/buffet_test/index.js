var somefunc = function(num){
  console.log(num);
  somefunc(++num);
};

somefunc(0);
