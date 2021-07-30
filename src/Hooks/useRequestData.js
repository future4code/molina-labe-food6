import { useState, useEffect } from "react";
import { api } from "../Services/api";

export default function useRequestData(url, initialState, id) {
  const [data, setData] = useState(initialState);
  api.defaults.headers.common['auth'] = window.localStorage.getItem('token')
  useEffect(() => {
    api
      .get(url)
      .then((response) => {
        if(id)setData(response.data[id])
        else setData(response.data);
      })
      .catch((error) => {
        alert(error.message);
      });
  }, [url]);

  return [data];
} 