import { useState, useCallback} from "react";
const useHttp = (applyData) => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const sendRequest = useCallback(async (requestConfig) => {
    setIsLoading(true);
    setError(null);
    // try {
    const response = await fetch(requestConfig.url, {
    //   method: requestConfig.method ? requestConfig.headers : "",
    //   headers: requestConfig.headers ? requestConfig.headers : {},
    //   body: requestConfig.body ? JSON.stringify(requestConfig.body) : null
    }, []);
    const data = await response.json();
    console.log(data)
    applyData(data);
    setIsLoading(false);
  },[]);
  return {
    isLoading,
    error,
    sendRequest,
  };
};

export default useHttp;
