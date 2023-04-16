import axios from "axios";
import { useEffect, useState } from "react";
import { handleExciption } from "../Helpers/handleExceptionsErrors";

import { apiClient } from "../Helpers/apiClient";

export const useApi = () => {
  const [data, setData] = useState([]);
  const [loading, setLodaing] = useState(false);
  const [error, setError] = useState("");
  const { REACT_APP_API_KEY } = process.env;

  const fetchData = async (endpoints) => {
    try {
      setLodaing(true);

      const response = await apiClient.get(
        endpoints + `&key=${REACT_APP_API_KEY}`
      );

      setData(response.data);
    } catch (error) {
      handleExciption(error);
    } finally {
      setLodaing(false);
    }
  };

  return { data, loading, error, fetchData };
};
