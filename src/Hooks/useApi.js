import axios from "axios";
import { useEffect, useState } from "react";

import { apiClient } from "../Helpers/apiClient";

export const useApi = (url) => {
  const [data, setData] = useState([]);
  const [loading, setLodaing] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    setLodaing(true);

    apiClient
      .get(url)
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        setError(error);
      })
      .finally(() => setLodaing(false));
  }, []);

  return { data, loading, error };
};
