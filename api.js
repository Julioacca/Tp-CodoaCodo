let lon
let lat

let temperaturaValor=document.getElementById("tempValor")

window.addEventListener ('load', ()=>{
    let lon
    let lat
    if (navigator.geolocation){
        navigator.geolocation.getCurrentPosition( posicion => {
        
            lon=posicion.coords.longitude
            lat=posicion.coords.latitude
       
            const url=`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=2099131a396983cf702fd9b76e3779dc`


        fetch(url)
            .then (response => {return response.json()})
            .then (data => {
            let tempe = data.main.temp

            tempValor.textContent=`${Math.round(tempe-273)} ºC`
            })
            .catch ( error => {
            console.log(error)})
            })
        
    }
})
