// create a request variable. request variable issue the http request. by
// creating an instance of xml-http-request
var request = new XMLHttpRequest();

// open a connection 
request.open('GET', 'https://restcountries.eu/rest/v2/all', true)

//send the request
request.send();

//load the response once its ready. 
request.onload = function () {
    var data = JSON.parse(this.response);
    console.log(data);
    let asianregion=data.filter(a=>a.region==="Asia")
    console.log(asianregion);
    let lowpopulation=data.filter(a=>a.population<200000)
    console.log(lowpopulation);
     data.forEach(demo);
    let sum =data.reduce(function (a,b){
        return a+b.population;
    },0);
    let country=data.filter((item) =>{
        let flag=false;
        item.currencies.forEach(a=>{
            if(a.code==="USD")
            flag=true;     
        });
        if(flag===true){
            return true;
        }
        else{
            return false;
        }
       
    });
    console.log(country);
}
function demo(a,b){
    console.log("Name:",a.name,"capital:",a.capital,"Flag:",a.flag);
};
