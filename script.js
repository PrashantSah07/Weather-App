let data1 = (document.getElementsByClassName('data')[0]);
let data2 = (document.getElementsByClassName('data')[1]);
let data3 = (document.getElementsByClassName('data')[2]);

let cut = document.querySelector('.cut');
let searchButton = document.querySelector('#search-button');
let inputSearch = document.querySelector('#input-search');
let cityName = document.querySelector('.cityName');
let forecast = document.querySelector('.forecast');
let day1 = document.querySelector('.day1');
let day2 = document.querySelector('.day2');
let day3 = document.querySelector('.day3');


async function getData() {
    cityName.innerHTML = inputSearch.value
    cut.style.display = "block"
    let inputValue = inputSearch.value;
    console.log("fetching data, please wait...");
    let p = fetch(`https://goweather.herokuapp.com/weather/${inputValue}`);

    try {

        let response = await p;
        let response2 = await response.json();
        data1.innerHTML = `<span>${response2.temperature}</span>`;
        data1.innerHTML = data1.innerHTML + "<span>🌡️</span>";

        data2.innerHTML = `<span>${response2.description}</span>`;
        data2.innerHTML = data2.innerHTML + "<span>⛅</span>";

        data3.innerHTML = `<span>${response2.wind}</span>`;
        data3.innerHTML = data3.innerHTML + "<span>💨</span>";

        let f = response2.forecast;

        day1.innerHTML = "Day:" + (f[0].day);
        day1.innerHTML = day1.innerHTML + " Temperature: " + (f[0].temperature);
        day1.innerHTML = day1.innerHTML + " Wind: " + (f[0].wind);

        day2.innerHTML = "Day:" + (f[1].day);
        day2.innerHTML = day2.innerHTML + " Temperature: " + (f[1].temperature);
        day2.innerHTML = day2.innerHTML + " Wind: " + (f[1].wind);

        day3.innerHTML = "Day:" + (f[2].day);
        day3.innerHTML = day3.innerHTML + " Temperature: +" + (f[2].temperature);
        day3.innerHTML = day3.innerHTML + " Wind: " + (f[2].wind);

    }

    catch (error) {
        if (error) {
            document.write("Server not found:(")
        }
        console.log(error)
    }

    finally {
        console.log("Done!")
    }
}

searchButton.addEventListener("click", getData);


cut.addEventListener("click", function () {
    inputSearch.value = ""
    cut.style.display = "none"
    cityName.innerHTML = "'Enter city name'";
    data1.innerHTML = "";
    data2.innerHTML = "";
    data3.innerHTML = "";
    day1.innerHTML = "";
    day2.innerHTML = "";
    day3.innerHTML = "";
});
