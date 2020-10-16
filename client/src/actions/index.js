import axios from "axios";

export const PRUEBA_API = "PRUEBA_API";
export const ADD_TOOL = "ADD_TOOL";
export const ADD_CLIENT = "ADD_CLIENT";
export const CARGA_DB = "CARGA_DB";
export const ALL_CLIENT = "ALL_CLIENT";
export const GET_TOOL = "GET_TOOL";
export const GET_ALL_TOOLS = "GET_ ALL_TOOLS"


export function infoMovie (apiKey, ciudad ) {
    return function(dispatch) {
      return axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${ciudad}&appid=${apiKey}`)
        .then(result => result.data)
        .then(data => {
          dispatch({
            type: PRUEBA_API,
            payload: data
          })
          console.log("El Actions ",data)
        })
    };
  }

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

export function addTool(payload) {
  return {
    type: "ADD_TOOL",
    payload
  }
}

export function addClient(payload) {
  return {
    type: "ADD_CLIENT",
    payload
  }
}
