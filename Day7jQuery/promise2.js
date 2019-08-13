var promise=new Promise(function(resolve,reject)
{
    const x="geek"
    const y="geek"
    if(x===y)
    {
        resolve();
    }
    else
    {
        reject();
    }
});
 promise.
     then(function()
{
    console.log("Success,You are geek");
 
})
    .catch(function()
{
    console.log("Some error has occured!");

});