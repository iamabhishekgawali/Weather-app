
import { useEffect, useState } from 'react';
import Weather from './Component/Weather';
import  {Button, makeStyles} from '@material-ui/core'


const useStyle = makeStyles({

  button: {
      marginLeft : 350,
      background : 'linear-gradient(to right,#e74c3c,#e67e22)',
      marginTop : 10,
      color : "white",
      
  }
})


function App() {

  const [state, setstate] = useState({})

  function GetData() {

    navigator.geolocation.getCurrentPosition(async (result) => {

      console.log()
      console.log()

      var latitude = result.coords.latitude;
      var longitude = result.coords.longitude;

      try {
        const apikey = "7ed5494a7d851bd1c86357d5f172f5b6"
        console.log(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apikey}`)
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apikey}`, {
          method: 'GET'
        }).then(function (response) { return response.json(); })

        console.log(response.weather[0].description)
        console.log("Returning")
        setstate({
          condition :  response.weather[0].description,
          name: response.name,
          humidity: response.main.humidity,
          temp: response.main.temp,
          temp_max: response.main.temp_max,
          temp_min: response.main.temp_min,
          sunrise: response.sys.sunrise,
          sunset: response.sys.sunset,
          country :  response.sys.country
        })

      }
      catch (err) {
        console.log(err)
      }

    }, (error) => {
      console.log(error)
    })
  }

  useEffect(() => {
    GetData()
  }, [])

  const classes = useStyle()

  return (
    <>
    <Weather props  = {state} ></Weather>
    <Button className = {classes.button}  onClick = {()=>{
      GetData()
    }} >Refresh</Button>
    </>
  );
}

export default App;
