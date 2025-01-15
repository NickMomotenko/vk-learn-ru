const API_KEY =
  "live_VQrfSaim7AqbXcEpz0B7NWADH9i8qr9wZOADLLgrlxbhuUenTpDZxARSsNSCmytF";

const headers = new Headers({
  "Content-Type": "application/json",
  "x-api-key": API_KEY,
});

const requestOptions: any = {
  method: "GET",
  headers: headers,
  redirect: "follow",
};

export const getData = async () => {
  try {
    const response = await fetch(
      "https://api.thecatapi.com/v1/images/search?limit=20&page=0",
      requestOptions
    );
    const data = await response.json();

    return data;
  } catch (err) {
    return err;
  }
};
