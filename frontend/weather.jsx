import React from 'react';

class Weather extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      weather: null
    };
    this.getLocationData = this.getLocationData.bind(this);
  }


 getLocationData (position) {
   let lon = "lon=" + String(position.coords.longitude);
   let lat = "lat=" + String(position.coords.latitude) + "&";
   let api = '&APPID=a6de4cdd788e53fbd09f6d2f8cfb5fa2';
   let url = 'http://api.openweathermap.org/data/2.5/weather?' + lat + lon + api;
   let xmlhttp = new XMLHttpRequest();
   xmlhttp.onreadystatechange = () => {
     if (xmlhttp.status === 200 && xmlhttp.readyState === XMLHttpRequest.DONE) {
       const data = JSON.parse(xmlhttp.responseText);
       this.setState({weather: data});
     }
   };

   xmlhttp.open('GET', url, true);
   xmlhttp.send();
 }

  componentDidMount () {
    navigator.geolocation.getCurrentPosition(this.getLocationData);
  }

  render() {
    let content = <div></div>;

    if (this.state.weather) {
      let weather = this.state.weather;
      let temp = (weather.main.temp - 273.15) * 1.8 + 32;
      let humidity = (weather.main.humidity);
      content = <div>
                  <p>{weather.name}</p>
                  <p>{temp.toFixed(1)} degrees</p>
                  <p>{humidity}</p>
                </div>;
    } else {
      content = <div className='loading'>loading weather...</div>;
    }
    return (
      <div className="weather">
        <h3>Weather Report:</h3>
        <div>
          {content}
        </div>
      </div>
    );
  }

}

export default Weather;
