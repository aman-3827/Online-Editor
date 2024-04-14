const button = document.getElementById("search-button");
const input = document.getElementById("city-input");


const cityName = document.getElementById('city-name');
const cityTime = document.getElementById('city-time');
const cityTemprature = document.getElementById('city-tempreture');

async function getData(cityname){
    const promise = await fetch(`http://api.weatherapi.com/v1/current.json?key=2e6a91070cd7437191121254240704&q=${cityname}&aqi=yes`);
    return await promise.json();
}

button.addEventListener('click',async () => {
    const value = input.value;
    const result = await getData(value);
    cityName.innerText = `${result.location.name},${result.location.region}, ${result.location.country}`
    cityTime.innerHTML = result.location.localtime;
    cityTemprature.innerText = result.current.temp_c;
});