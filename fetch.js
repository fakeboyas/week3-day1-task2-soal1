let endpoint = `https://restcountries.eu/rest/v2/all`;
let options = {
    method: "GET",
    // headers: {
    //     "Content-type": "applications/json",
    // },
};

async function getCountry() {
    try {
        let response = await fetch(endpoint, options);
        let results = await response.json();

        results.forEach((result) => {
            console.log(result.length);
            console.log(result.name);
        });
    } catch (error) {
        console.log(error);
    }
}

getCountry();
