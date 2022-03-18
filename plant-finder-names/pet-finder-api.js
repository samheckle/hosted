let json = ''
let token = ''
let names = []
const nameText = document.getElementById('name')
$.ajaxSetup({async: false})

$.ajax({
  url: "https://api.petfinder.com/v2/oauth2/token",
  data: {"grant_type": "client_credentials", "client_id":"1xpMiX6NmRgxcqxGDfmHbKbp2kNypBjFcE4lRR2nH3OnoGpju1", "client_secret":"mipHnLHeEs8dQf9OuNFi2ewJZV6GC511UsDLu1vK"},
  type: "POST",
  success: function(res) {
    token = res
  }
})
$.ajax({
  url: "https://api.petfinder.com/v2/animals",
  data: {"limit": "100"},
  type: "GET",
  headers: {
    Authorization:
      "Bearer " + token.access_token
  },
  success: function(res) {
    json = res
  }
})

let animals = json.animals
let len = animals.length

let regex = /^[A-Za-z0-9 ]+$/

for ( let i = 0 ; i < len ; i++){
  let name = animals[i].name
  if(regex.test(name) && name != 'undefined' && name != undefined) names.push(name)
    // console.log(animals[i].name)
}

let rand = Math.floor(Math.random() * len)

let text = document.createTextNode(names[rand]);

nameText.appendChild(text);