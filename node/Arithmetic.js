const op=require('./operation');
var a=10;
var b=5;
var c=op.add(a,b);
console.log("Add "+c);

const op2=require('./operation');
var a=10;
var b=5;
var c=op2.sub(a,b);
console.log("Sub "+c);

const op3=require('./operation');
var a=10;
var b=5;
var c=op3.mult(a,b);
console.log("Mult "+c);

const op4=require('./operation');
var a=10;
var b=5;
var c=op4.div(a,b);
console.log("Div "+c);