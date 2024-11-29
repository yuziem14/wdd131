const MAX_TEMPERATURE = 10;
const MIN_SPEED = 4.899;
function calculateWindChill(temperature, windspeed) {
    if(temperature > MAX_TEMPERATURE || windspeed <= MIN_SPEED) return NaN;

    /**
     * Wind Chill Formula (in Celsius) provided by Chat GPT
     * Twc = 13.12 + 0.6215⋅T − 11.37 * v**0.16 + 0.3965 * T *  v**0.16
     */
    return (13.12 + 0.6215 * (temperature) - 11.37 * windspeed ** 0.16 + 0.3965 * temperature * windspeed ** 0.16);
}

(() => {
    const temperatureText = document.querySelector('#temperature').textContent;
    const windspeedText = document.querySelector('#wind-speed').textContent;

    const temperature = Number(temperatureText.replace(/\D+/g, '')) || 0;
    const windspeed = Number(windspeedText.replace(/\D+/g, '')) || 0;
    const windchill = calculateWindChill(temperature, windspeed);

    const windchillElement = document.querySelector('#wind-chill');
    windchillElement.textContent = windchill ? `${windchill.toFixed(1)} ºC` : 'N/A';
})();