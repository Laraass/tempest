$(document).ready(function () {
  function getWeather(city) {
    const apiKey = API_KEY;

    // API-URL
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    // Get data
    $.get(url)
      .done(function (data) {
        const cityName = data.name;
        const weather = data.weather[0].main;
        const icon = data.weather[0].icon;
        const description = data.weather[0].description;
        const temperature = data.main.temp;
        const feelsLike = data.main.feels_like;
        const iconUrl = `https://openweathermap.org/img/wn/${icon}@2x.png`;

        const information = `
          <h2>${cityName}</h2>
          <p>Weather: ${weather} <img src="${iconUrl}"></p>
          <p>Description: ${description}</p>
          <p>Temperature: ${temperature}°C</p>
          <p>Feels like: ${feelsLike}°C</p>
        `;
        $("#result").html(information);

        $("#error").text("");
      })

      .fail(function () {
        $("#error").text("Please insert a location");
      });
  }

  // Get function for button
  $("#getWeather").on("click", function () {
    const city = $("#city").val().trim();

    getWeather(city);
  });

  // Support for enter-key on keyboard
  $('#city').keypress(function (e) {
    if (e.which === 13) {
      $('#getWeather').click();
    }
  })

});
