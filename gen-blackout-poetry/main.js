fetch("https://planet-green-flute.glitch.me/", {
  method: 'GET',
  mode: "cors",
  headers: {
    "Access-Control-Allow-Origin": "*",
  },
})
  .then((response) => {return response.json()})
  .then((data) => console.log(data))
  .catch((e) => console.log(e))