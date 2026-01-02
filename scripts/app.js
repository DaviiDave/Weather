//DOM Manipulation

const cityForm = document.querySelector('form');
const card = document.querySelector('.card');
const details = document.querySelector('.details');
const time = document.querySelector('img.time');
const icon = document.querySelector('.icon img');

const updateUI = (data) => {
    
   console.log(data);

   const { cityDets, weather } = data; //destructuring assignment
    

    //update details template
    details.innerHTML = `
    <h5 class="my-3">${cityDets.EnglishName}</h5>
     <div class="my-3 fst-italic">${weather.WeatherText}</div>
     <div class="display-4 my-4">
    <span>${weather.Temperature.Metric.Value}</span>
     <span>&deg;C</span>
     </div>
     `;

     

     //update the night/day & icon images
     const iconSrc = `img/icons/${weather.WeatherIcon}.svg`;
     icon.setAttribute('src', iconSrc);

    let timeSrc = weather.IsDayTime ? 'img/day.svg' : 'img/night.svg';

     time.setAttribute('src', timeSrc);

 

     
     

     //remove the d-none class if present
        if(card.classList.contains('d-none')){
            card.classList.remove('d-none');
        }
        };

const updateCity = async (city) => {

    const cityDets = await getCity(city); //we use this const to ensure that we wait to get the city details before getting the weather
    const weather = await getWeather(cityDets.Key);

    return { cityDets, weather }; //i can decide to remove the key names if I want to because the property names are the same as the variable names 

        };
cityForm.addEventListener('submit', e => {
    //preventing default behaviour
    e.preventDefault();

    //get city value
    const city = cityForm.city.value.trim();
    cityForm.reset();

   
 updateCity(city)
 .then(data => updateUI(data))
 .catch(err => console.log(err)); 
});




