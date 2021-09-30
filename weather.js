
var toggleButton = document.querySelector('.toggle-menu');
var navBar = document.querySelector('.nav-bar');
toggleButton.addEventListener('click', function () {
	navBar.classList.toggle('toggle');
});
// ************************

window.addEventListener('load',()=>{
    let long;
    let lat;
    let input= document.getElementById("search");
const iconElement = document.querySelector(".weather-icon");
const tempElement = document.querySelector(".temprature-v");
const descElement = document.querySelector(".temprature-descri");
const locationElement = document.querySelector(".location p");
input.addEventListener("keyup" , function(event){
    if(event.keyCode === 13){
        event.preventDefault();
fetch('https://api.openweathermap.org/data/2.5/weather?q='+input.value+'&appid=6f910298df644381d41794da05803cc9')
.then(response => response.json())
.then(data => {

tempElement.textContent= Math.floor((data.main.temp)-272.15);
descElement.innerHTML= data.weather[0].description;
locationElement.innerHTML= data.name +"_"+ data.sys.country ;
// iconElement.innerHTML=`<img src="http://openweathermap.org/img/wn//${data.weather[0].icon}@4x.png">
// `   ;
iconElement.innerHTML=`<img src="ressources/${data.weather[0].icon}.svg">`;

var imageLink = {
    thunderStorm: "url(http://extrawall.net/images/wallpapers/529_1920x1080_thunderstorm_over_grand_canyon.jpg)",
    drizzle: "url(https://www.gloucestercitizen.co.uk/images/localworld/ugc-images/276271/Article/images/21342065/6290248-large.jpg)",
    rain: "url(http://runlifthavefun.com/wp-content/uploads/2014/11/A-Rainy-Day.jpg)",
    snow: "url(https://iskin.co.uk/wallpapers/styles/1920x1080/public/snow_drifts.jpg)",
    clear: "url(http://xdesktopwallpapers.com/wp-content/uploads/2011/05/Clear-Sky-in-a-sunny-day.jpg)",
    cloud: "url(http://alliswall.com/file/1718/1920x1200/16:9/cloudy-weather-2.jpg)",
    mist: "url(http://static5.businessinsider.com/image/5390bbeb6bb3f7407d6ba579/why-different-weather-apps-give-you-different-forecasts.jpg)",
  }
  var weatherImage = "";
switch(data.weather[0].main){
    case data.weather[0].main = "Clouds":
        document.body.style.backgroundImage = imageLink.cloud;
        break;
    case data.weather[0].main = "Clear":
        document.body.style.backgroundImage = imageLink.clear;  
    break; 
    case data.weather[0].main = "Snow":
      document.body.style.backgroundImage = imageLink.snow; 
      break;
    case data.weather[0].main = "Rain":
          document.body.style.backgroundImage = imageLink.rain; 
          break;
  
}

        console.log(data.name)

     
    })
    .catch(err => alert("Wrong city name!"));
}

});
    if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition(position =>{
            longitude = position.coords.longitude;
            latitude = position.coords.latitude;
            const key='6f910298df644381d41794da05803cc9';
            const api=`http://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${key}`;

            fetch(api)
            .then(Response =>{
                return Response.json();})
                .then(data=>{
                    console.log(data);
                   
                    //SET DOOM ELEM FROM API
 tempElement.textContent= Math.floor((data.main.temp)-272.15);
 descElement.innerHTML= data.weather[0].description;
  locationElement.innerHTML= data.name +"_"+ data.sys.country ;
//   iconElement.innerHTML=`<img src="http://openweathermap.org/img/wn//${data.weather[0].icon}@4x.png">`
iconElement.innerHTML=`<img src="ressources/${data.weather[0].icon}.svg">`;
  var imageLink = {
    thunderStorm: "url(http://extrawall.net/images/wallpapers/529_1920x1080_thunderstorm_over_grand_canyon.jpg)",
    drizzle: "url(https://www.gloucestercitizen.co.uk/images/localworld/ugc-images/276271/Article/images/21342065/6290248-large.jpg)",
    rain: "url(http://runlifthavefun.com/wp-content/uploads/2014/11/A-Rainy-Day.jpg)",
    snow: "url(https://iskin.co.uk/wallpapers/styles/1920x1080/public/snow_drifts.jpg)",
    clear: "url(http://xdesktopwallpapers.com/wp-content/uploads/2011/05/Clear-Sky-in-a-sunny-day.jpg)",
  default:"url(https://images.pexels.com/photos/76969/cold-front-warm-front-hurricane-felix-76969.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940)",
    cloud: "url(https://images.pexels.com/photos/158827/field-corn-air-frisch-158827.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940)",
    mist: "url(http://static5.businessinsider.com/image/5390bbeb6bb3f7407d6ba579/why-different-weather-apps-give-you-different-forecasts.jpg)",
  }
  var weatherImage = "";
switch(data.weather[0].main){
    case data.weather[0].main = "Clouds":
        document.body.style.backgroundImage=  imageLink.cloud;
        break;
    case data.weather[0].main = "Clear":
        document.body.style.backgroundImage = imageLink.clear;  
    break; 
    case data.weather[0].main = "Snow":
      document.body.style.backgroundImage = imageLink.snow; 
      break;
    case data.weather[0].main = "Rain":
          document.body.style.backgroundImage = imageLink.rain; 
          break;
    // case data.weather[0].main = "Mist":
    //     document.body.style.backgroundImage = imageLink.mist;
    //     break;
    // case data.weather[0].main = "Drizzle":
    //         document.body.style.backgroundImage = imageLink.drizzle;
    //     break;
    // case data.weather[0].main = "Thunderstorm":
    //         document.body.style.backgroundImage = imageLink.thunderStorm;
    //         break;
    default:
        document.body.style.backgroundImage = imageLink.default;
  
}

});
       
    
    });   

}
  
});
