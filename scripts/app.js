const form = document.querySelector('.change-location');
const card = document.querySelector('.card');
const detail = document.querySelector('.details');
const img = document.querySelector('img.time');
const icon = document.querySelector('.icon img');

const updateUI = (data) => {
    console.log(data)

    // const cityDets = data.cityDets;
    // const weather = data.weather;

    // use of destructuring
    const {cityDets, weather} = data;

    const outputCityDet = `
                <h5 class="my-3">${cityDets.EnglishName}</h5>
                            <div class="my-3">${weather.WeatherText}</div>
                            <div class="display-4 my-4">
                                <span>${weather.Temperature.Metric.Value}</span>
                                <span>&deg;C</span>
                            </div>
                `;
    // update img background
    
    const imgSrc = weather.IsDayTime ? 'img/day.svg' : 'img/night.svg';
    img.setAttribute('src', imgSrc);

    // const iconPic = `
    //     <img src="img/icons/${weather.WeatherIcon}.svg">
    // `;
    // img.appendChild.innerHTML = iconPic;
    const iconSrc = `img/icons/${weather.WeatherIcon}.svg`;
    icon.setAttribute('src', iconSrc);

    // remove d-none class on div tag
    if(card.classList.contains('d-none')){
        card.classList.remove('d-none');
    }

    detail.innerHTML = outputCityDet;
}

const updateCity = async (citi) => {

    const cityDets = await getCity(citi);
    const weather = await getWeather(cityDets.Key)
    
    return {cityDets, weather};
        
}

form.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const citi = form.city.value.trim();

    updateCity(citi)
    .then(data => updateUI(data))
    .catch(err => console.log(err));

    // set localStorage
    localStorage.setItem('city', citi);
});

const searchCityInLocalS = localStorage.getItem('city');
    
if(searchCityInLocalS){
    updateCity(searchCityInLocalS)
    .then(data => updateUI(data))
    .catch(err => console.log(err));
};