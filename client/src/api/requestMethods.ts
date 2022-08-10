import axios from "axios";

const BASE_URL:string= "http://localhost:5000/api/";
const item:any = localStorage.getItem("persist:root");
const TOKEN:string = JSON.parse(JSON.parse(item).user).currentUser.accessToken;
console.log(TOKEN);
// const TOKEN = 
// "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyZTkwMjc0M2Q2ZjBiZDNkMDFjYTExOCIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY1OTg2NTEyOSwiZXhwIjoxNjYwMTI0MzI5fQ.s6unRTZd6Aqrqm0M1HIS2aO7jTuvRt46OK4ab0dDe_g";


export const publicRequest = axios.create({
  baseURL: BASE_URL,
});

export const userRequest = axios.create({
  baseURL: BASE_URL,
  headers: { token: `Bearer ${TOKEN}` },
});