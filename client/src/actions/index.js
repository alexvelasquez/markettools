import axios from "axios";

export const PRUEBA_API = "PRUEBA_API";
export const ADD_TOOL = "ADD_TOOL";
export const ADD_CLIENT = "ADD_CLIENT";
export const CARGA_DB = "CARGA_DB";
export const ALL_CLIENT = "ALL_CLIENT";
export const GET_TOOL = "GET_TOOL";
export const GET_ALL_TOOLS = "GET_ALL_TOOLS";
export const INSERT_CATEGORY = "INSERT_CATEGORY";
export const LOGIN = "LOGIN";
export const INSERT_TOOLS = "INSERT_TOOLS";
export const GET_ALL_CATEGORY = "GET_ALL_CATEGORY";
export const INSERT_CLIENT = "INSERT_CLIENT";
export const UPDATE_TOOLS = "UPDATE_TOOLS";
export const UPDATE_CLIENT = "UPDATE_CLIENT"
export const DELETE_CLIENT = "DELETE_CLIENT"


// export function infoMovie (apiKey, ciudad ) {
//     return function(dispatch) {
//       return axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${ciudad}&appid=${apiKey}`)
//         .then(result => result.data)
//         .then(data => {
//           dispatch({
//             type: PRUEBA_API,
//             payload: data
//           })
//           console.log("El Actions ",data)
//         })
//     };
//   }

export function cargardb () {
  return function(dispatch) {
    return axios.post(`http://localhost:3005/registerhd`)
      .then(result => result.data)
      .then(data => {
        dispatch({
          type: "CARGA_DB",
          payload: data
        })
        console.log("la carga DB ", data)
      })
  };
}

export function getClient() {
  return function(dispatch) {
    return axios.get(`http://localhost:3005/clients`)
    .then(result => result.data)
    .then(data => {
      dispatch({
        type: "ALL_CLIENT",
        payload: data
      })
      console.log("Estos son todos los clientes", data)
    })
  }
}

export function getAllTools() {
  return function(dispatch) {
    return axios.get(`http://localhost:3005/tools`)
    .then(result => result.data)
    .then(data => {
      dispatch({
        type: "GET_ALL_TOOLS",
        payload: data
      })
      console.log("Todas las tools", data)
    })
  }
}

export function getAllCategory() {
  return function(dispatch) {
    return axios.get(`http://localhost:3005/category`)
    .then(result => result.data)
    .then(data => {
      dispatch({
        type: "GET_ALL_CATEGORY",
        payload: data
      })
      console.log("Todas las CATEGORY", data)
    })
  }
}

export function getTool() {
  return function(dispatch) {
    return axios.get(`http://localhost:3005/tools/:id`)
    .then(result => result.data)
    .then(data => {
      dispatch({
        type: "GET_TOOL",
        payload: data
      })
      console.log("La tool es", data)
    })
  }
}

export function insertCategory(category) {
  console.log('EL insert llega ', category)
  return function(dispatch) {
    return axios.post(`http://localhost:3005/tools/insertCategory`,category)
      .then(result => result.data)
      .then(data => {
        dispatch({
          type: INSERT_CATEGORY,
          payload: data
        })
        console.log("El insert category devuelve ",data)
      })
  };
}

export function login(login) {
  console.log("Los datos del login", login)
  return function(dispatch) {
    return axios.post(`http://localhost:3005/login`, login)
    .then(result => result.data)
    .then(data => {
      dispatch({
        type: LOGIN,
        payload: data
      })
      console.log("Login devuelve", data)
    })
  }
}

export function insertTools(tools) {
  console.log('EL insertTOOLS llega', tools)
  return function(dispatch) {
  return axios.post(`http://localhost:3005/tools/insertTools`, tools)
    .then(result => result.data)
    .then(data => {
      dispatch({
        type: INSERT_TOOLS,
        payload: data
      })
      console.log("El insert TOOLS devuelve ",data)
    })
  }
}

export function insertClient(client) {
  console.log("El insertClient llega", client)
  return function(dispatch) {
  return axios.post(`http://localhost:3005/clients/register`, client)
    .then(result => result.data)
    .then(data => {
      dispatch({
        type: INSERT_CLIENT,
        payload: data
      })
      console.log("El insertClient devuelve", data)
    })
  }
}
export function updateTools(date) {
  console.log("El UPDATE_TOOLS llega", date)
  return function(dispatch) {
  return axios.put(`http://localhost:3005/clients/update/${date.id}`, date)
    .then(result => result.data)
    .then(data => {
      dispatch({
        type: UPDATE_TOOLS,
        payload: data
      })
      console.log("El UPDATE_TOOLS", data)
    })
  }
}

export function updateClient(client) {
  console.log("El updateClient llega", client)
  return function(dispatch) {
  return axios.post(`http://localhost:3005/clients/updateClient/${client.id}`, client)
    .then(result => result.data)
    .then(data => {
      dispatch({
        type: UPDATE_CLIENT,
        payload: data
      })
      console.log("El updateClient devuelve", data)
    })
  }
}

export function deleteClient(client) {
  console.log("El deleteClient llega", client)
  return function(dispatch) {
  return axios.post(`http://localhost:3005/clients/delete/${client.id}`, client)
    .then(result => result.data)
    .then(data => {
      dispatch({
        type: DELETE_CLIENT,
        payload: data
      })
      console.log("El deleteClient devuelve", data)
    })
  }
}