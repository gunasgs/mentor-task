const getCountries = () => {
	console.log("Getting countriesss...");
	const xhr = new XMLHttpRequest();
	xhr.open("GET", "https://restcountries.com/v3.1/all");
	xhr.send();

	xhr.responseType = "json";

	xhr.onload = () => {
		const countries = xhr.response;
        function createflag(countries){
            
            
            const container = document.createElement("div");
            console.log(countries);
            
            container.innerHTML= ` <img 
            src=${country.flags.svg}
            alt=${country.name}
             class="flag"/>
            <div class="info">
                  
                    <h2>${country.name.common}</h2>
                    <p><span>Population:</span>${country.population}</p>
                    <p><span>Region:</span>${country.region}</p>
                    <p><span>Capital:</span>${country.capital}</p>
            </div>`;
            
           
            

            container.className="container";
            document.body.append(container);
            };
            for(country of countries){
                createflag(countries);
            
            }

    }
};
getCountries();