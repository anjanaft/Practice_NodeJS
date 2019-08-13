module.exports.primebtw=(l,h)=>
{
    var n;
    var i;
    var h
    var l;
    var flag
    while (l < h)
    {
        flag = 0;
        for(i = 2; i <= l/2; ++i)
        {
            if(l % i == 0)
            {
                flag = 1;
                break;
            }
        }
        if (flag == 0){
            console.log(l);}
        ++l;
    }
    return 0;

}