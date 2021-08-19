import ReactDOM from 'react-dom';

function DisplayLocationInfo(position) {
     
       const longitude = position.coords.longitude;
       const latitude = position.coords.latitude;
       console.log('latitude : ' + latitude)
       console.log('longitude : ' + longitude)
       fetch('http://api.weatherapi.com/v1/forecast.json?key=669aee55d3874a56939145654210208&q=' + latitude +"  " + longitude)
       .then(response => response.json())
       .then(response => {
         
         ReactDOM.render(
          <div className="Show">
          <div className="Result-today">
  <img src= {"http://" +response.current.condition.icon} alt={response.current.condition.text} />
  
  <div className="Satu">
  <h1>{response.current.temp_c} &deg; <span>C</span> </h1>

    <div className="Min-Max">
      <h3>{response.forecast.forecastday[0].day.mintemp_c} &deg; C / {response.forecast.forecastday[0].day.maxtemp_c} &deg; C</h3>
    </div>
    <p>{response.location.localtime}</p>
    <div className="Cloud-representation">
      <i className="fas fa-cloud"></i>
      <p>{response.current.condition.text}</p>
    </div>
    <div className="Rainy">
      <i className="fas fa-umbrella"></i>
      <p>Rain : {response.forecast.forecastday[0].day.daily_chance_of_rain} %</p>
    </div>
    
    <p>{response.location.region}, {response.location.country}</p>
   
</div>
</div>


<div className="One-column">
<div className="Hourly">
  <div className="Title">
    <h3>Hourly</h3>
  </div>
  <div className="Description">
    <div className="Hourly-detail">
      <p>00:00</p>
      <img src= {"http://" +response.forecast.forecastday[0].hour[0].condition.icon} alt={response.forecast.forecastday[0].hour[0].condition.text} />
      <p>{response.forecast.forecastday[0].hour[0].temp_c} &deg; C</p>
    </div>
    <div className="Hourly-detail">
      <p>03:00</p>
      <img src= {"http://" +response.forecast.forecastday[0].hour[3].condition.icon} alt={response.forecast.forecastday[0].hour[3].condition.text} />
      <p>{response.forecast.forecastday[0].hour[3].temp_c} &deg; C</p>
    </div>
    <div className="Hourly-detail">
      <p>06:00</p>
      <img src= {"http://" +response.forecast.forecastday[0].hour[6].condition.icon} alt={response.forecast.forecastday[0].hour[6].condition.text} />
      <p>{response.forecast.forecastday[0].hour[6].temp_c} &deg; C</p>
    </div>
    <div className="Hourly-detail">
      <p>09:00</p>
      <img src= {"http://" +response.forecast.forecastday[0].hour[9].condition.icon} alt={response.forecast.forecastday[0].hour[9].condition.text} />
      <p>{response.forecast.forecastday[0].hour[9].temp_c} &deg; C</p>
    </div>
    <div className="Hourly-detail">
      <p>12:00</p>
      <img src= {"http://" +response.forecast.forecastday[0].hour[12].condition.icon} alt={response.forecast.forecastday[0].hour[12].condition.text} />
      <p>{response.forecast.forecastday[0].hour[12].temp_c} &deg; C</p>
    </div>
    <div className="Hourly-detail">
      <p>15:00</p>
      <img src= {"http://" +response.forecast.forecastday[0].hour[15].condition.icon} alt={response.forecast.forecastday[0].hour[15].condition.text} />
      <p>{response.forecast.forecastday[0].hour[15].temp_c} &deg; C</p>
    </div>
    <div className="Hourly-detail">
      <p>18:00</p>
      <img src= {"http://" +response.forecast.forecastday[0].hour[18].condition.icon} alt={response.forecast.forecastday[0].hour[18].condition.text} />
      <p>{response.forecast.forecastday[0].hour[18].temp_c} &deg; C</p>
    </div>
    <div className="Hourly-detail">
      <p>21:00</p>
      <img src= {"http://" +response.forecast.forecastday[0].hour[21].condition.icon} alt={response.forecast.forecastday[0].hour[21].condition.text} />
      <p>{response.forecast.forecastday[0].hour[21].temp_c} &deg; C</p>
    </div>
  </div>
</div>


  <h2 className="Highlight">Highlight</h2>
  <div className="Description-weather">
    <div className="Humidity">
      <p> humidity</p>
      <h2>{response.current.humidity} %</h2> 
    </div>

    <div className="Wind-mph">
    <p>Wind Status</p>
      <h2>{response.current.wind_kph} <span>km / h</span></h2>
    </div>

    <div className="UV-Index">
      <p>UV Index</p>
      <h2>{response.current.uv}</h2>
    </div>
      
    <div className="Visibility">
      <p>Visibility</p>
      <h2>{response.current.vis_km} <span>km</span></h2>
    </div>

    <div className="Sunrise-sunset">
      <p>Sunrise & Sunset</p>
      <h3><i className="far fa-arrow-alt-circle-up"></i>{response.forecast.forecastday[0].astro.sunrise}</h3>
      <h3><i className="fas fa-arrow-circle-down"></i>{response.forecast.forecastday[0].astro.sunset}</h3>
    </div>

    <div className="Wind-dir">
      <p>Wind Direction</p>
      <h2>{response.current.wind_dir}</h2>
    </div>
      
    <div className="Moon-phase">
      <p>Moon Phase</p>
      <h4>{response.forecast.forecastday[0].astro.moon_phase}</h4>
    </div>

    <div className="Moon-illumination">
      <p>Moon illumination</p>
      <h4>{response.forecast.forecastday[0].astro.moon_illumination}</h4>
    </div>
  </div>
</div>

</div>,
           document.getElementById("Result")
           )
          })
       
   }

   navigator.geolocation.getCurrentPosition(DisplayLocationInfo);

   export default DisplayLocationInfo;