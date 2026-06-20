// API KEYS

const weatherKey = "4dec5a9b9098a4131943a16b0921a2a4";

const movieKey = "b2789f59";



// ================= WEATHER APP =================


async function getWeather(){


    let city = document.getElementById("city").value;


    if(city === ""){

        document.getElementById("weatherResult").innerHTML =
        "Please enter city name";

        return;

    }



    let url =
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${weatherKey}&units=metric`;



    try{


        let response = await fetch(url);


        let data = await response.json();


        console.log(data);



        if(data.cod === 200){



            document.getElementById("weatherResult").innerHTML = `


            <h2>📍 ${data.name}</h2>


            <h3>
            🌡 Temperature:
            ${data.main.temp} °C
            </h3>


            <p>
            💧 Humidity:
            ${data.main.humidity}%
            </p>


            <p>
            ☁ Weather:
            ${data.weather[0].description}
            </p>


            `;



        }

        else{


            document.getElementById("weatherResult").innerHTML =

            "❌ " + data.message;


        }



    }

    catch(error){


        console.log(error);


        document.getElementById("weatherResult").innerHTML =

        "API Error";


    }



}







// ================= MOVIE APP =================



async function searchMovie(){



    let movie = document.getElementById("movie").value;



    let url =
    `https://www.omdbapi.com/?t=${movie}&apikey=${movieKey}`;



    try{


        let response = await fetch(url);



        let data = await response.json();



        console.log(data);



        if(data.Response === "True"){



            document.getElementById("movieResult").innerHTML = `


            <h2>${data.Title}</h2>


            <img src="${data.Poster}" width="200">


            <p>
            📅 Year:
            ${data.Year}
            </p>


            <p>
            ⭐ Rating:
            ${data.imdbRating}
            </p>


            <p>
            ${data.Plot}
            </p>


            `;



        }


        else{


            document.getElementById("movieResult").innerHTML =
            "Movie not found";


        }



    }


    catch(error){


        document.getElementById("movieResult").innerHTML =
        "Movie API Error";


    }



}