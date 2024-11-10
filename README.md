# Aplicación del Clima 🌦️

Esta aplicación web muestra el clima actual de la ubicación del usuario mediante geolocalización y la API de OpenWeather.

## Tabla de Contenidos
- [Descripción](#descripción)
- [Características](#características)
- [Instalación](#instalación)
- [Uso](#uso)
- [Tecnologías Utilizadas](#tecnologías-utilizadas)
- [Mejoras Futuras](#mejoras-futuras)

## Descripción
La **Aplicación del Clima** permite al usuario obtener información sobre el clima actual en su ubicación usando geolocalización del navegador y una integración con la API de OpenWeather. Muestra detalles como la temperatura y las condiciones climáticas en una interfaz simple y moderna.

## Características
- **Clima en tiempo real**: muestra temperatura, condiciones climáticas y ubicación.
- **Geolocalización**: detecta automáticamente la ubicación del usuario.
- **Diseño amigable**: interfaz intuitiva, con efectos visuales suaves y diseño responsivo para dispositivos móviles.

## Instalación
1. Clona el repositorio en tu máquina local:
    ```bash
    git clone https://github.com/CrisPerezNavarro/repositorio.git
    ```
2. Navega al directorio del proyecto:
    ```bash
    cd repositorio
    ```
3. **Configura la API Key**: Regístrate en [OpenWeather](https://home.openweathermap.org/users/sign_up) y obtén tu API Key. Luego, reemplaza el valor de `apiKey` en `script.js` con tu API Key.

## Uso
1. Abre el archivo `index.html` en tu navegador.
2. Haz clic en el botón **Obtener Clima**. Es posible que el navegador solicite permiso para acceder a la ubicación del usuario.
3. Una vez obtenida la ubicación, la aplicación mostrará el clima actual.

## Tecnologías Utilizadas
- **HTML, CSS, JavaScript**: tecnologías base para la estructura, el estilo y la funcionalidad de la aplicación.
- **API de OpenWeather**: proporciona datos climáticos actualizados.
- **Geolocalización**: utiliza la geolocalización del navegador para determinar la ubicación del usuario.

## Mejoras Futuras
- Añadir opción para seleccionar la ubicación manualmente.
- Agregar pronósticos extendidos para varios días.
- Visualización personalizada con íconos de condiciones climáticas (sol, lluvia, nubes, etc.).



