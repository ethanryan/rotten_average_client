// for local server rails api:
const baseUrl = 'http://localhost:3000'


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

export function createUrl(link) {
  return fetch(`${baseUrl}/urls`, {
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'Authorization': localStorage.getItem('jwt')
    },
    mode: 'cors',
    method: 'POST',
    body: JSON.stringify({
      url: link,
    })
  }).then( res => res.json() )
}
