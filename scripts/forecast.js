const key = 'zpka_5d92df8893d94048bf31ec297f754c38_86455131'

//get weather information
const getWeather = async (id) => { //id is the location key
 
    const base = 'https://dataservice.accuweather.com/currentconditions/v1/';
    const query = `${id}?apikey=${key}`;
    
    const response = await fetch(base + query);
    const data = await response.json();

    return data[0]; /*returning the first element of the array*/

};

//get city information
const getCity = async (city) => {

    const base = 'https://dataservice.accuweather.com/locations/v1/cities/search'
    const query = `?apikey=${key}&q=${city}`;
    //combining the base url and query string:
   
    const response = await fetch(base + query); /*base+query concatenates the two const...it tacks the two together, places it inside the const response as a single argument and then it's going to fetch the resource*/ 
    const data = await response.json(); /*response.json() takes the response object and parses it into a json object*/
    
    return data[0]; /* We take the first array from the console...as it is the closest match */

};


 
