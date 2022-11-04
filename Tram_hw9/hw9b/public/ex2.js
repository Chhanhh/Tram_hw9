/*
Send visited coutnries
*/

// Create traveler info
const traveler = {
    name: "Sam",
    countries: [
      {
        name: "Ecuador",
        year: 2003
      },
      {
        model: "Portugal",
        color: 2004
      },
      {
        model: "Russia",
        color: 2016
      }
    ]
  };
  
  // Send this object as JSON data to the server
  fetch("https://thejsway-server.herokuapp.com/api/countries", {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json"
    },
    body: JSON.stringify(traveler)
  })
    .then(response => response.text())
    .then(result => {
      console.log(result);
    })
    .catch(err => {
      console.error(err.message);
    });

    app.get("/api/articles", (request, response) => {
        response.json(articles);
      });
      
      app.post("/api/cars", jsonParser, (request, response) => {
        const cars = request.body;
        response.send(`You sent me a list of cars: ${JSON.stringify(cars)}`);
      });
      
      app.post("/api/countries", jsonParser, (request, response) => {
        const traveler = request.body;
        response.send(
          `Your name is ${traveler.name} and you visited ${traveler.countries
            .length} countries. Keep traveling!`
        );
      });
      
      // Start listening to incoming requests
      // If process.env.PORT is not defined, port number 3000 is used
      const listener = app.listen(process.env.PORT || 3000, () => {
        console.log(`Your app is listening on port ${listener.address().port}`);
      });