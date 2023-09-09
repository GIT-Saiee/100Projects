
const formE1 = document.getElementById("form");
const inputE1 = document.getElementById("input");

formE1.addEventListener("submit",()=>{
    
    console.log(inputE1.value);
    const httpReq = new XMLHttpRequest();
    const url =`http://api.weatherapi.com/v1/forecast.json?key=a98961f3ae134259843204751232208&q=${inputE1.value}&days=1&aqi=no&alerts=no`;   
   

    console.log(url);
    httpReq.open("GET",url,true);
    // httpReq.setRequestHeader('Access-Control-Allow-Origin',"127.0.0.1");
    // httpReq.setRequestHeader("Access-Control-Allow-Credentials", true);
    httpReq.responseType = "json";
    httpReq.send();
    
    httpReq.onreadystatechange = function() {
        console.log("hello world");
        if (httpReq.readyState === XMLHttpRequest.DONE) { 
            console.log("hello world"); // Makes sure the document is ready to parse
            if (httpReq.status === 200) {  // Makes sure it's found the file
                text = httpReq.responseText;
                console.log("hello world");
                console.log(this.responseText);
            }
        }
    }
    

});
