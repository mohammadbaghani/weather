let citiesData = {
    tehran: {city: 'تهران', temp: 12, weather: 'Sunny', humidity: 23, windSpeed: 32},
    shiraz: {city: 'شیراز', temp: 9, weather: 'windy', humidity: 12, windSpeed: 14},
    tabriz: {city: 'تبریز', temp: 1, weather: 'rainy', humidity: 43, windSpeed: 12},
    mashhad: {city:' مشهد', temp: 16, weather: 'snowy', humidity: 7, windSpeed: 24},
    esfahan: {city: 'اصفهان', temp: 23, weather: 'Sunny', humidity: 15, windSpeed: 18},
  }
  
  let $ = document
  let searchBtn = $.getElementById('search')
  let searchBar = $.querySelector('.search-bar')
  
  searchBtn.addEventListener('click', function () {
    let searchBarValue = searchBar.value 
    let mainCityDatas = citiesData[searchBarValue]
  
    console.log(mainCityDatas)
  
    if (mainCityDatas) {
      $.querySelector('.city').innerHTML = "هوا در " + mainCityDatas.city
      $.querySelector('.temp').innerHTML = mainCityDatas.temp + '°C'
      $.querySelector('.description').innerHTML = mainCityDatas.weather
      $.querySelector('.humidity').innerHTML = "رصوبت " +  mainCityDatas.humidity
      $.querySelector('.wind').innerHTML = "سرعت  باد " +  mainCityDatas.windSpeed + 'km/h'
      $.querySelector('.weather').classList.remove('loading')
    } else {
      alert('شهر مورد نظر را به درستی وارد نمایید')
    }
  
  })