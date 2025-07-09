

☀️ App del Clima - Mi Primera App en React
¡Hola! Este repositorio contiene mi primera aplicación construida con React, un proyecto de práctica desarrollado como parte de un curso de programación. El objetivo principal fue consolidar conceptos fundamentales de React y la interacción con APIs externas.

🚀 Tecnologías Utilizadas
React 19: La biblioteca principal para construir la interfaz de usuario.

JavaScript: Lógica de la aplicación implementada con JavaScript puro.

Tailwind CSS: Framework CSS para un estilizado rápido y responsivo.

API de Clima: Consumo de datos meteorológicos de una API externa (Weather API).

✨ Características de la Aplicación
Consulta por Ciudad: Permite a los usuarios ingresar el nombre de una ciudad para obtener su pronóstico.

Gestión de Estado Local: Utiliza el Hook useState para manejar el estado de los componentes, como el valor del input de la ciudad y los datos del clima mostrados.

Datos Climatológicos Detallados: Muestra información clave como:

Temperatura actual

Velocidad del viento

Humedad

Temperatura máxima del día

Presión atmosférica

Validación de Entrada: Incluye una validación básica en JavaScript para asegurar que el usuario ingrese el nombre de una ciudad antes de realizar la búsqueda y valida la longitud del nombre.

Consumo de API Asíncrono: Utiliza async/await para gestionar las peticiones a la API de forma eficiente y no bloqueante.

🛠️ Cómo Ejecutar el Proyecto
Sigue estos pasos para poner en marcha la aplicación en tu entorno local:

Clona el repositorio:

Bash

git clone https://github.com/tu-usuario/nombre-de-tu-repositorio.git
(Asegúrate de reemplazar tu-usuario/nombre-de-tu-repositorio.git con la URL real de tu repositorio.)

Navega al directorio del proyecto:

Bash

cd nombre-de-tu-repositorio
Instala las dependencias:

Bash

npm install
# o si prefieres yarn
# yarn install
Configura tu clave de API (Weather API):

Necesitarás una clave de API de Weather API (o de la API de clima que hayas utilizado).

Crea un archivo .env en la raíz de tu proyecto (si no existe) y añade tu clave de API de la siguiente manera:

VITE_WEATHER_API_KEY=tu_clave_aqui
(Si estás usando Create React App en lugar de Vite, el prefijo debería ser REACT_APP_WEATHER_API_KEY.)

Inicia la aplicación:

Bash

npm run dev
# o si prefieres yarn
# yarn dev
La aplicación se abrirá en tu navegador, generalmente en http://localhost:5173.

📈 Aprendizajes Clave
Este proyecto me permitió familiarizarme con:

La estructura y el flujo de trabajo fundamental de una aplicación React.

El uso de Hooks esenciales como useState para la gestión del estado local y useEffect para la realización de efectos secundarios, como el consumo de APIs.

La integración eficiente de Tailwind CSS para un desarrollo rápido y estilizado de la interfaz de usuario.

El manejo de peticiones asíncronas utilizando async/await para interactuar con servicios externos.

Conceptos básicos de validación de formularios en el frontend para mejorar la experiencia del usuario.
