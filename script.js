/*UNSPLASH API*/

fetch("https://apis.scrimba.com/unsplash/photos/random?orientation=landscape&query=nature")
	.then(res => res.json())
	.then(data => {
		document.body.style.backgroundImage = `url(${data.urls.full})`
        document.getElementById('author-section').textContent = `By: ${data.user.name}`
	})
    .catch(err => {
        console.log('Something went wrong: ',err)
        document.body.style.backgroundImage = `url(https://seocom.agency/wp-content/uploads/2024/05/Errores-Web-404-403-503-502-401.-Significado-y-soluciones-1.jpg.webp)`
    })

/*COINGECKO API*/

fetch("https://api.coingecko.com/api/v3/coins/bitcoin")
    .then(res => res.json())
    .then(btc => {
            const priceChange = (btc.market_data.price_change_percentage_24h).toFixed(2)
            const currentPrice = (btc.market_data.current_price.usd).toFixed(2)
            document.getElementById('cryptos').innerHTML += `
                <div class="symbol-section blur-background">
                    <img src="${btc.image.small}">
                    <p class="crypto-symbol">${btc.symbol}</p>
                <div>
                <div class="market-price">
                   <p>$${new Intl.NumberFormat('en-US').format(currentPrice).replace(',', ' ')}</p>
                </div>
                <div class="price-change">
                    <p>24h: ${priceChange}%</p>
                </div>

            `
        })
    .catch(err => console.log(err))

fetch("https://api.coingecko.com/api/v3/coins/ethereum")
    .then(res => res.json())
    .then(eth => {
        const priceChange = (eth.market_data.price_change_percentage_24h).toFixed(2)
        const current_price = (eth.market_data.current_price.usd).toFixed(2)
        document.getElementById('cryptos').innerHTML += `
            <div class="symbol-section blur-background">
                <img src="${eth.image.small}">
                <p class="crypto-symbol">${eth.symbol}</p>
            <div>
            <div class="market-price">
                <p>$ ${new Intl.NumberFormat('en-US').format(current_price).replace(',', ' ')}</p>
            </div>
            <div class="price-change">
                <p>24h: ${priceChange}%</p>
            </div>
            `
        })
    .catch(err => console.log(err))

fetch("https://api.coingecko.com/api/v3/coins/solana")
    .then(res => res.json())
    .then(sol => {
        const priceChange = (sol.market_data.price_change_percentage_24h).toFixed(2)
        const current_price = (sol.market_data.current_price.usd).toFixed(2)
        document.getElementById('cryptos').innerHTML += `
            <div class="symbol-section blur-background">
                <img src="${sol.image.small}">
                <p class="crypto-symbol">${sol.symbol}</p>
            <div>
            <div class="market-price">
                <p>$ ${new Intl.NumberFormat('en-US').format(current_price).replace(',', ' ')}</p>
            </div>
            <div class="price-change">
                <p>24h: ${priceChange}%</p>
            </div>
             `
        })
    .catch(err => console.log(err))

/*WEATHER API*/

navigator.geolocation.getCurrentPosition((position) => {

    const lat = position.coords.latitude 
    const lon = position.coords.longitude

        fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&lang=pl&appid=42493181434ee60318280075b6a8f18b`)
            .then(res => res.json())
            .then(weather => {
                console.log(weather)
                const temp = (weather.main.temp).toFixed(1)
                document.getElementById('weather').innerHTML = `
                    <div class="city">
                        <p class="city-icon">🏘️</p>
                        <p>${weather.name}</p>
                    </div>
                    <div class="weather-conditions">
                        <p>🌡️ ${temp}°C</p>
                        <p>⏲️ ${weather.main.pressure}hPa</p>
                        <p>💧 ${weather.main.humidity}%</p>
                    </div>
                `
            })
            .catch(err => console.log(err))
})

/*TIME*/

function actualTime(){
    const time = new Date()
    const hour = String(time.getHours()).padStart(2, '0');
    const minutes = String(time.getMinutes()).padStart(2, '0');
    const seconds = String(time.getSeconds()).padStart(2, '0');

    document.getElementById('actual-time').textContent = `${hour}:${minutes}:${seconds}`
}

setInterval(actualTime,1000)