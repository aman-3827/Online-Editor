const button = document.getElementById('get-location-button');


async function getData(lat, long){
    const promise = await fetch(`http://api.weatherapi.com/v1/search.json?key=2e6a91070cd7437191121254240704&q=${lat},${long}&aqi=yes`);
    return await promise.json();
}


async function gotlocation(position){
   const result =  await getData(position.coords.latitude,position.coords.longitude);
   console.log(result);
}


function failedToGet(){
    console.log('There was some issues');
}
 
button.addEventListener('click', async () => {
    navigator.geolocation.getCurrentPosition(gotlocation,failedToGet);
})