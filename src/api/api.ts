const API_KEY =
  "live_VQrfSaim7AqbXcEpz0B7NWADH9i8qr9wZOADLLgrlxbhuUenTpDZxARSsNSCmytF";

const headers = new Headers({
  "Content-Type": "application/json",
  "x-api-key": API_KEY,
});

const requestOptions = {
  method: "GET",
  headers: headers,
  redirect: "follow",
};

export const getData = () => {
  fetch("https://api.thecatapi.com/v1/images/search?limit=10", requestOptions)
    .then((response) => response.json())
    .then((result) => console.log(result))
    .catch((error) => console.log("error", error));
};
