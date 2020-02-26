const key = 'bOimhjXAV6oNb4E1roXvE1Yha9jZHDmk';

// Get weather informaton
const getWeather = async (weatherID) => {
    const response = await fetch(`http://dataservice.accuweather.com/currentconditions/v1/${weatherID}?apikey=${key}`)
    const data = await response.json();

    return data[0];
}

// Get city information
const getCity = async (citi) => {
    const response = await fetch(`http://dataservice.accuweather.com/locations/v1/cities/search?apikey=${key}&q=${citi}`);
    const data = await response.json();

    return data[0];
};