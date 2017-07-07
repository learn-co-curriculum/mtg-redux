const devUrl = 'http://localhost:3000/api/v1'
const prodUrl = 'https://mtg-api.herokuapp.com/api/v1'

export default class AuthAdapter {
  static login (loginParams) {
    return fetch(`${prodUrl}/auth`, {
      method: 'POST',
      headers: headers(),
      body: JSON.stringify(loginParams)
    }).then(res => res.json())
  }

  static currentUser () {
    return fetch(`${prodUrl}/current_user`, {
      headers: headers()
    }).then(res => res.json())
  }
}

function headers () {
  return {
    'content-type': 'application/json',
    'accept': 'application/json',
    'Authorization': localStorage.getItem('jwt')
  }
}
