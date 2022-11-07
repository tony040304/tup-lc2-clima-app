function getCitiesFromLocalStorage(){
    let cities = localStorage.getItem("CITIES");
    if(cities){
        cities = JSON.parse(cities);
    } else {
        cities = [];
    }
    return cities;
}

function addNewCityToLocalStorage(newCity) {
    let cartelError = document.getElementById("error");
    let cartelWarning = document.getElementById("warning");
    let cartelSuccess = document.getElementById("success");
    let cities = getCitiesFromLocalStorage();
    let ciudad_repetida = false;

    for(let i = 0; i < cities.length; i++){
        if(newCity == cities[i]){
            ciudad_repetida = true;
        }
    }
    
    if(newCity.length == 0){
        cartelError.style.display = "block";
        setInterval(function(){
            cartelError.style.display = "none";
        }, 3000);
    } else if(ciudad_repetida == true){
        cartelWarning.style.display = "block";
        setInterval(function(){
            cartelWarning.style.display = "none";
        }, 3000);
    } else {
        cartelSuccess.style.display = "block";
        setInterval(function(){
            cartelSuccess.style.display = "none";
        }, 3000);
        cities.push(newCity);
        localStorage.setItem("CITIES", JSON.stringify(cities));
    }
}

function obtenerCiudad() {     
    let city = document.getElementById("ciudad").value;
    addNewCityToLocalStorage(city); 
}