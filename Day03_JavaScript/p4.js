function add(a,b)
{
    console.log(a+b);
}
add(4,3);


function OddEven(n)
{
    if(n%2==0)
    {
        console.log("Even");
    }
    else
    {
        console.log("Odd");
    }
}
OddEven(5)

function factorial(m)
{
    f=1;
    if(m>0)
    {
        for(i=m;i>1;i--)
        {
            f*=i;
        }
    }
    console.log(f);
}
factorial(5);
