module.exports.reverse=(n)=>
{
    var n
    var rev= 0
    var rem
    while(n>0)
    {
        rem = n%10;
        rev = rev*10 + rem;
        n =n/10;
    }
    console.log("Reversed Number"+rev);
    

}