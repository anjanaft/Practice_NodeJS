const myos=require('os');

var userdata=myos.userInfo();
const myfs=require('fs');


//console.log(userdata.username);

var platform=myos.platform();
//console.log(platform);

myfs.appendFile("data.txt",userdata.username,(error)=>{
if(error)
{
    throw error;
    console.log(error);
}
});

