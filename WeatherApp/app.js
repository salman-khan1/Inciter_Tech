window.addEventListener('load',()=>{
    let long;
    let lat;
    let temperatureDescription=document.querySelector('.temperature-description')
    let temperatureDegree=document.querySelector('.temperature-degree')
    let locationTimezone=document.querySelector('.location-timezone')
    let degreeSection=document.querySelector('.degree-section')
    let Tempspan=document.querySelector('.Tempspan');
    let Wicon=document.querySelector('.icon');

    
    const key="67d7af0859c84f3096bc32067a00a9fd";
    if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition(position=>{
            // console.log(position)
            long=position.coords.longitude;
            lat=position.coords.latitude
     
            const api=`https://api.weatherbit.io/v2.0/current?lat=${lat}&lon=${long}&key=${key}&include=minutely `
            fetch(api)
            .then(response=>{
                return response.json();
            })
            .then(data=>{
                console.log(data);
                let temperature=data["data"][0]["temp"];
                let timezone=data["data"][0]["timezone"];
                let Description=data["data"][0]["weather"]["description"];
                
                // console.log(temperature);
                temperatureDegree.textContent=temperature;
                locationTimezone.textContent=timezone;
                temperatureDescription.textContent=Description;

           let celcius=(temperatureDegree.textContent -32)*(5/9);
        //    console.log(celcius)
                degreeSection.addEventListener('click',()=>{
                    if(Tempspan.textContent==="F"){
                        Tempspan.textContent="C";
                        temperatureDegree.textContent=Math.floor(celcius);
                        // console.log(temperatureDegree)
                    }
                    else{
                        Tempspan.textContent="F"
                        temperatureDegree.textContent=data["data"][0]["temp"];
                    }
                });
           
                
            })
        })
      
    }

})

// key=67d7af0859c84f3096bc32067a00a9fd
// link=https://api.weatherbit.io/v2.0/current?lat=35.7796&lon=-78.6382&key=API_KEY&include=minutely
