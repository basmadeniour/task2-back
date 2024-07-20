
const request=require("request")
const forecast=(latitude,longtitude,callback)=>{
const url="http://api.weatherapi.com/v1/current.json?key=b3ba42cb4e944cc195c60827242007&q="+latitude+" "+longtitude
request({url ,json:true},(error,response)=>{
    const dataobj =JSON.parse(response.body)
    if(error){
        // console.log("ERROR")
        //low level error
        callback("Error has occured",undefined)
    }
    else if(dataobj.error)
    {
     callback( dataobj.error.message,undefined)
    }
    else
    {
     // console.log(dataobj)
    // console.log(dataobj.location.name)
    // console.log(dataobj.current.condition.text)   
    callback (undefined,dataobj.location.name,dataobj.current.condition.text,response.body.current.temp_c)
    }
    
})
}
module.exports=forecast
