document.getElementById('getWeather').addEventListener('click', function() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition((position) => {
            const lat = position.coords.latitude;
            const lon = position.coords.longitude;
            const apiKey = 'f3e57a89e98c2df2bbe56527a75c9182'; 
            const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric&lang=es`;

            fetch(url)
                .then(response => {
                    if (!response.ok) {
                        throw new Error('Error al obtener el clima');
                    }
                    return response.json();
                })
                .then(data => {
                    const cityName = data.name;
                    const temp = data.main.temp;
                    const weather = data.weather[0].description; // Descripción del clima

                    const result = `
                        <h2>Clima en ${cityName}</h2>
                        <p>Temperatura: ${temp} °C</p>
                        <p>Condiciones: ${weather}</p>
                    `;
                    document.getElementById('weatherResult').innerHTML = result;
                    document.getElementById('weatherResult').classList.add('show'); // Mostrar resultado
                })
                .catch(error => {
                    document.getElementById('weatherResult').innerHTML = `<p>${error.message}</p>`;
                });
        }, (error) => {
            alert('No se pudo obtener la ubicación. Error: ' + error.message);
        });
    } else {
        alert('Geolocalización no soportada en este navegador.');
    }
});
