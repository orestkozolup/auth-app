import axios from "axios";
import { useState } from "react";

export const useRequest = ({ url, method, body }) => {
  const [errors, setErrors] = useState([]);

  const doRequest = async () => {
    try {
      const response = await axios[method](url, body);
      setErrors([]);

      return response.data;
    } catch (err) {
      setErrors(err.response.data.errors);
    }
  };

  return {
    doRequest,
    errors,
  };
};
