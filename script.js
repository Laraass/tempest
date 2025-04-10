// Vänta tills allt på sidan är laddat
$(document).ready(function () {

  // TODO: Skapa funktionen för att hämta väderdata
  // Tips: Funktionen ska ta emot en parameter
  function getWeather(city_input){
  
  // TODO: Hämta API-nyckeln från config.js
  // Tips: Använd API_KEY variabeln som är definierad i config.js
  const apiKey = API_KEY;
  
  // TODO: Kontrollera om fältet är tomt
  // Om det är tomt, visa ett felmeddelande i #error och avsluta funktionen

  // TODO: Skapa API-URL (använd backticks och infoga city och din API-nyckel)
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;


  // TODO: Gör ett anrop till OpenWeatherMap med $.get()
  // Tips: Använd url som du byggde ovan och logga svaret i konsolen

  $.get(url, function(city_input, ) {
    console.log("City: " + city_input + )
  })
  // Om det lyckas:
  // - Läs ut: stadsnamn, väderbeskrivning, temperatur, landkod, ikon-id
  // Om anropet misslyckas:
  // Visa ett felmeddelande i #error


  // TODO: Bygg HTML och visa i #result
  // Tips: Använd mallsträngar (backticks) för att bygga HTML

  
  }
  // TODO: Välj knappen och lyssna på klick
  // Tips: Använd .on("click", ...) på rätt element
  

});
