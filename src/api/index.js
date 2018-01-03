// for local server rails api:
const baseUrl = 'http://localhost:3000'

// for hosted heroku api:
//const baseUrl = 'https://word-nerds-api.herokuapp.com'

export function getUrls() {
  return fetch(`${baseUrl}/urls`, {
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'Authorization': localStorage.getItem('jwt')
    },
    mode: 'cors',
    method: 'GET',
  }).then( response => response.json() )
}
