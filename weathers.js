var toggleButton = document.querySelector('.toggle-menu');
var navBar = document.querySelector('.nav-bar');
toggleButton.addEventListener('click', function () {
	navBar.classList.toggle('toggle');
});
// **************

    const APIkey ='6f910298df644381d41794da05803cc9';
    let resultatAPI;
    
const temps = document.querySelector('.temps');
const temperature = document.querySelector('.temperature');
const localisation = document.querySelector('.localisation');
const heure = document.querySelectorAll('.heure-nom-prevision');
const tempPourH = document.querySelectorAll('.heure-prevision-valeur');
const joursDiv = document.querySelectorAll('.jour-prevision-nom');
const tempJoursDiv = document.querySelectorAll('.jour-prevision-temp');
const imgIcone = document.querySelector('.logo-meteo');
const chargementContainer = document.querySelector('.overlay-icone-chargement');
    
    if (navigator.geolocation){
        navigator.geolocation.getCurrentPosition(position => {
         let lon = position.coords.longitude;
         let lat = position.coords.latitude;
          AppelAPI(lon,lat);
          
        }, () => {
            alert( 'vs devez accepter');
        })
    }
         


function AppelAPI(lon,lat){
    
    console.log(lon,lat);
    const api=`https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${APIkey}`
fetch(api)
.then(Response => {
    return Response.json();
})
.then(data =>{
    console.log(data);
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
    switch(data.list[0].weather[0].main){
        case data.list[0].weather[0].main = "Clouds":
            document.body.style.backgroundImage = imageLink.cloud;
            break;
        case data.list[0].weather[0].main = "Clear":
            document.body.style.backgroundImage = imageLink.clear;  
        break; 
        case data.list[0].weather[0].main= "Snow":
          document.body.style.backgroundImage = imageLink.snow; 
          break;
        case data.list[0].weather[0].main = "Rain":
              document.body.style.backgroundImage = imageLink.rain; 
              break;
      
    }
    resultatsAPI = data;
    
        temps.innerText = data.list[0].weather[0].description;
        temperature.innerText = `${Math.trunc(data.list[0].main.temp)-273}°`
        localisation.innerText =data.city.name +"_"+ data.city.country;  
        


        // les heures, par tranche de trois, avec leur temperature.

        let heureActuelle = new Date().getHours();

        for(let i = 0; i < heure.length; i++) {

            let heureIncr = heureActuelle + i * 3;

            if(heureIncr > 24) {
                heure[i].innerText = `${heureIncr - 24} h`;
            } else if(heureIncr === 24) {
                heure[i].innerText = "00 h"
            } else {
                heure[i].innerText = `${heureIncr} h`;
            }

        }

        // temp pour 3h
        for(let j = 0; j < tempPourH.length; j++) {
            tempPourH[j].innerText = `${Math.trunc(data.list[j].main.temp)-273}°`
        }
      

        // trois premieres lettres des jours 

        for(let k = 0; k < tabJoursEnOrdre.length; k++) {
            joursDiv[k].innerText = tabJoursEnOrdre[k].slice(0,3);
        }
        imgIcone.src = `ressources/${data.list[0].weather[0].icon}.svg`

        // Temps par jour
        for(let m = 0; m < 7; m++){
            tempJoursDiv[m].innerText = `${Math.trunc(data.list[m*8].main.temp)-273}°`
        }

        // Icone dynamique 
        //  if(heureActuelle >= 6 && heureActuelle < 21) {
             imgIcone.src = `ressources/${data.list[0].weather[0].icon}.svg`
        //  } else  {
        //     imgIcone.src = `ressources/nuit/${data.list[0].weather[0].icon}.svg`
        //  }


        //  chargementContainer.classList.add('disparition');

        

    })
    const joursSemaine = ["Monday", "Tuesday", "Wednesday",
    "Thursday", "Friday", "Saturday", "Sunday"];
   

let ajd = new Date();
let options = {weekday: 'long'};
let jourActuel = ajd.toLocaleDateString('fr-FR', options);
// console.log(jourActuel, ajd);

jourActuel = jourActuel.charAt(0).toUpperCase() + jourActuel.slice(1);

let tabJoursEnOrdre = joursSemaine.slice(joursSemaine.indexOf(jourActuel)).concat(joursSemaine.slice(0, joursSemaine.indexOf(jourActuel)));
// console.log(tabJoursEnOrdre);



}
