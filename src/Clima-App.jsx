import { useState } from "react";
import { MdLocationOff } from "react-icons/md";
import {
  WiDaySunny,
  WiCloudy,
  WiRain,
  WiSnow,
  WiThunderstorm,
  WiHumidity,
} from "react-icons/wi";
import { FaMapMarkerAlt, FaWind, FaTemperatureHigh } from "react-icons/fa";

export const ClimaApp = () => {
  const [ciudad, setCiudad] = useState("");
  const apiKey = "76b3bcb1e27b7984a6d90442a8f710db";
  const [dataClima, setDataClima] = useState(null);

  const weatherIcons = {
    Clear: <WiDaySunny className="text-yellow-400" size={100} />,
    Clouds: <WiCloudy className="text-blue-300" size={100} />,
    Rain: <WiRain className="text-blue-500" size={100} />,
    Snow: <WiSnow className="text-blue-200" size={100} />,
    Thunderstorm: <WiThunderstorm className="text-yellow-500" size={100} />,
    Default: <WiDaySunny className="text-gray-400" size={64} />,
  };

  const itemsWeather = {
    humidity: <WiHumidity className="text-blue-500" size={20} />,
    wind: <FaWind className="text-blue-500" size={20} />,
    tempMax: <FaTemperatureHigh className="text-blue-500" size={20} />,
    pressure: <FaTemperatureHigh className="text-blue-500" size={20} />,
  };

  function kelvinToC(k) {
    return (k - 273.15).toFixed(1);
  }

  const url_api = "https://api.openweathermap.org/data/2.5/weather?q=";

  const handleChange = (e) => {
    setCiudad(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (ciudad.trim() === "") {
      const alerta_ciudad = document.querySelector(".alerta_ciudad");
      alerta_ciudad.classList.add("opacity-100");
      alerta_ciudad.classList.remove("opacity-0");
      setTimeout(() => {
        alerta_ciudad.classList.add("opacity-0");
        alerta_ciudad.classList.remove("opacity-100");
      }, 3000);
    } else {
      if (ciudad.trim() !== "" && ciudad.length < 4) {
        const alerta_ciudad_valida = document.querySelector(
          ".alerta_ciudad_valida"
        );
        alerta_ciudad_valida.classList.add("opacity-100");
        alerta_ciudad_valida.classList.remove("opacity-0");
        setTimeout(() => {
          alerta_ciudad_valida.classList.add("opacity-0");
          alerta_ciudad_valida.classList.remove("opacity-100");
        }, 3000);
      }
      if (ciudad.trim() !== "" && ciudad.length >= 5) {
        fetchClima(ciudad);
        setCiudad("");
      }
    }
  };

  const fetchClima = async (ciudad) => {
    try {
      const response = await fetch(`${url_api}${ciudad}&appid=${apiKey}`);
      const data = await response.json();
      setDataClima(data);
      // Mostrar el mensaje de error de ciudad no encontrada
      if (data.cod === "404") {
        const ciudad_none = document.querySelector(".Ciudad_none");
        ciudad_none.classList.add("block");
        ciudad_none.classList.remove("hidden");
      }
    } catch (error) {
      console.log("Error al obtener el clima", error);
    }
  };

  return (
    <div>
      <div className="min-h-screen w-full bg-gradient-to-b from-blue-800 to-sky-600 flex flex-col items-center">
        <div className="w-full m-6 p-4 lg:flex justify-center items-center flex-col">
          <h1 className="text-4xl sm:text-5xl md:text-5xl lg:text-5xl xl:text-6xl text-center text-gray-800 dark:text-white font-black leading-10">
            ¿Qué <span className="text-amber-300">Clima</span> te Espera Hoy?
            <br />
            <h3 className="mt-2 text-2xl text-amber-300 sm:text-3xl md:text-3xl lg:text-3xl xl:text-4xl text-center leading-10">
              Descúbrelo en tu Ciudad
            </h3>
          </h1>
        </div>
        {/* alert ingresa ciudad */}
        <div className="alerta_ciudad opacity-0 bg-transparent text-center py-2 lg:px-2 m-2">
          <div
            className="p-2 bg-sky-500 items-center text-indigo-100 leading-none lg:rounded-full flex lg:inline-flex"
            role="alert"
          >
            <span className="flex rounded-full bg-yellow-400 uppercase px-4 py-1 text-xs font-bold mr-3 text-blue-900">
              Advertencia
            </span>
            <span className="font-bold mr-2 text-left flex-auto text-white">
              !Por favor, ingresa una ciudad!
            </span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="icon icon-tabler icons-tabler-outline icon-tabler-map-pin"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M9 11a3 3 0 1 0 6 0a3 3 0 0 0 -6 0" />
              <path d="M17.657 16.657l-4.243 4.243a2 2 0 0 1 -2.827 0l-4.244 -4.243a8 8 0 1 1 11.314 0z" />
            </svg>
          </div>
        </div>

        {/* alert ingresa ciudad valida */}
        <div className="alerta_ciudad_valida opacity-0  bg-transparent text-center py-2 lg:px-2 m-2">
          <div
            className="p-2 bg-sky-500 items-center text-indigo-100 leading-none lg:rounded-full flex lg:inline-flex"
            role="alert"
          >
            <span className="flex rounded-full bg-yellow-400 uppercase px-4 py-1 text-xs font-bold mr-3 text-blue-900">
              Error
            </span>
            <span className="font-bold mr-2 text-left flex-auto text-white">
              !Por favor, ingresa una ciudad valida!
            </span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="icon icon-tabler icons-tabler-outline icon-tabler-map-pin"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M9 11a3 3 0 1 0 6 0a3 3 0 0 0 -6 0" />
              <path d="M17.657 16.657l-4.243 4.243a2 2 0 0 1 -2.827 0l-4.244 -4.243a8 8 0 1 1 11.314 0z" />
            </svg>
          </div>
        </div>

        <div className="w-full h-auto max-w-lg bg-white/30 xs:p-8 p-6 m-12 rounded-xl flex flex-col shadow-lg">
          <form
            onSubmit={handleSubmit}
            className="flex flex-col md:flex-row gap-4 w-full max-w-sm md:max-w-md lg:max-w-lg text-bold text-md"
          >
            <div className="relative flex-grow">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <WiCloudy className="h-6 w-6 text-sky-600" />
              </div>
              <input
                className="
                w-full
                text-lg
                font-bold
                pl-10
                shadow-sm             
                p-3
                rounded-3xl                
                bg-white                  
                bg-opacity-50             
                border-2
                border-sky-500
                focus:outline-none
                focus:border-sky-800     
                focus:shadow-lg           
                placeholder:text-gray-900
                placeholder:text-md
                transition-all duration-500 ease-in-out 
                text-gray-900 "
                type="text"
                handleSubmit={handleSubmit}
                value={ciudad}
                onChange={handleChange}
                placeholder="Ingresa una Ciudad"
              />
            </div>
            <button
              className="
                  bg-yellow-400
                  opacity-90
                  text-blue-900
                  p-2
                  rounded-3xl
                  hover:bg-yellow-500
                  active:bg-yellow-400         
                  shadow-md                  
                  hover:shadow-lg            
                  active:shadow-inner       
                  focus:outline-none         
                  focus:ring-2              
                  focus:ring-sky-300        
                  transition-all duration-200 ease-in-out 
                  font-bold              
              "
              type="submit"
            >
              Consultar
            </button>
          </form>

          {dataClima && dataClima.main ? (
            <div className="w-full max-w-sm mx-auto bg-gradient-to-b from-sky-400 to-blue-700 rounded-3xl shadow-2xl p-6 text-white mt-6 relative">
              {/* Ciudad y ubicación */}
              <div className="flex items-center justify-center gap-2 mb-2">
                <FaMapMarkerAlt className="text-yellow-300" size={20} />
                <span className="font-bold text-lg">
                  {dataClima.name}, {dataClima.sys.country}
                </span>
              </div>
              {/* Temperatura e icono */}
              <div className="flex flex-col items-center mb-4">
                <div className="flex items-center gap-2">
                  <span className="text-8xl font-extrabold drop-shadow-lg">
                    {kelvinToC(dataClima.main.temp)}°
                  </span>
                  {weatherIcons[dataClima.weather[0].main] ||
                    weatherIcons.Default}
                </div>
                <span className="capitalize text-lg">
                  {(() => {
                    // Diccionario simple de traducciones para descripciones comunes
                    const traducciones = {
                      "clear sky": "cielo despejado",
                      "few clouds": "pocas nubes",
                      "scattered clouds": "nubes dispersas",
                      "broken clouds": "nubes rotas",
                      "shower rain": "chubascos",
                      "light intensity drizzle": "lluvia ligera",
                      drizzle: "lluvia",
                      "heavy intensity drizzle": "lluvia intensa",
                      "light intensity drizzle rain": "lluvia ligera",
                      "drizzle rain": "lluvia",
                      "heavy intensity drizzle rain": "lluvia intensa",
                      "shower rain and drizzle": "chubascos y lluvia",
                      rain: "lluvia",
                      thunderstorm: "tormenta eléctrica",
                      snow: "nieve",
                      mist: "niebla",
                      "overcast clouds": "nublado",
                      "light rain": "lluvia ligera",
                      "moderate rain": "lluvia moderada",
                      "heavy intensity rain": "lluvia intensa",
                      "light snow": "nieve ligera",
                      "heavy snow": "nieve intensa",
                      "few clouds: 11-25%": "pocas nubes (11-25%)",
                      "scattered clouds: 25-50%": "nubes dispersas (25-50%)",
                      "broken clouds: 51-84%": "nubes rotas (51-84%)",
                      "overcast clouds: 85-100%": "nublado (85-100%)",
                    };
                    const desc = dataClima.weather[0].description;
                    return traducciones[desc] || desc;
                  })()}
                </span>
              </div>
              {/* Detalles */}
              <div className="grid grid-cols-2 gap-4 bg-white/80 rounded-xl p-4">
                <div className="flex flex-col items-center">
                  {itemsWeather.humidity}
                  <span className="text-md text-gray-700 font-bold">
                    Humedad
                  </span>
                  <span className="font-bold text-blue-700">
                    {dataClima.main.humidity}%
                  </span>
                </div>
                <div className="flex flex-col items-center ">
                  {itemsWeather.wind}
                  <span className="text-md text-gray-700 font-bold">
                    Viento
                  </span>
                  <span className="font-bold text-blue-700">
                    {dataClima.wind.speed} m/s
                  </span>
                </div>
                <div className="flex flex-col items-center">
                  {itemsWeather.tempMax}
                  <span className="text-md text-gray-700 font-bold">
                    Temp. Máx
                  </span>
                  <span className="font-bold text-blue-700">
                    {kelvinToC(dataClima.main.temp_max)}°
                  </span>
                </div>
                <div className="flex flex-col items-center">
                  {itemsWeather.pressure}
                  <span className="text-md text-gray-700 font-bold">
                    Presión
                  </span>
                  <span className="font-bold text-blue-700">
                    {dataClima.main.pressure} hPa
                  </span>
                </div>
              </div>
            </div>
          ) : (
            <div className="Ciudad_none hidden w-full max-w-sm mx-auto bg-gradient-to-b from-sky-400 to-blue-700 rounded-3xl shadow-2xl p-6 text-white mt-6 relative flex flex-col items-center justify-center gap-4">
              <MdLocationOff className="text-yellow-300" size={60} />
              <h2 className="text-2xl font-bold text-center">
                Ciudad no encontrada
              </h2>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ClimaApp;
