function updateTime() {
  //New York
  let newyorkDateElement = document.querySelector("#new-york .date");
  let newyorkTimeElement = document.querySelector("#new-york .time");
  newyorkDateElement.innerHTML = moment()
    .tz("America / New_York")
    .format("MMMM Do YYYY");
  newyorkTimeElement.innerHTML = `${moment()
    .tz("America / New_York")
    .format("h:m:ss")} <small>${moment().format("A")}</small>`;

  //Houston
  let houstonDateElement = document.querySelector("#houston .date");
  let houstonTimeElement = document.querySelector("#houston .time");
  houstonDateElement.innerHTML = moment()
    .tz("US/Central")
    .format("MMMM Do YYYY");
  houstonTimeElement.innerHTML = `${moment()
    .tz("US/Central")
    .format("h:m:ss")} <small>${moment().format("A")}</small>`;

  //Chicago
  let chicagoDateElement = document.querySelector("#chicago .date");
  let chicagoTimeElement = document.querySelector("#chicago .time");
  chicagoDateElement.innerHTML = moment()
    .tz("America/Chicago")
    .format("MMMM Do YYYY");
  chicagoTimeElement.innerHTML = `${moment()
    .tz("America/Chicago")
    .format("h:m:ss")} <small>${moment().format("A")}</small>`;
}

function updateCity(event) {
  let cityTimeZone = event.target.value.replace("_", " ").split("/")[1];
  let cityTime = moment().tz(cityTimeZone);
  let citiesElement = document.querySelector("#cities-container");
  citiesElement.innerHTML = ` 
           <div class="new-york">
          <div class="city" id="new-york">
            <div>
              <h2>${cityTimeZone}</h2>
              <div class="date">${cityTime.format("MMMM Do YYYY")}</div>
            </div>
            <div class="time">${cityTime.format(
              "h:m:ss"
            )}<small>${cityTime.format("A")}</small></div>
          </div>
        </div>`;
}

updateTime();
setInterval(updateTime, 1000);

let citySelectElement = document.querySelector("#city-selector");
citySelectElement.addEventListener("change", updateCity);
