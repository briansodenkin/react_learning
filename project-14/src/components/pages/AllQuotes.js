import QuoteList from "../quotes/QuoteList";
import useHttp from "../hooks/use-http";
import { getAllQuotes } from "../lib/api";
import { useEffect } from "react";
import LoadingSpinner from "../UI/LoadingSpinner";
const DUMMY = [
  { id: "q1", author: "Brian", text: "GG" },
  { id: "q2", author: "LOL", text: "GGWP" },
];

const AllQuotes = () => {
  const {
    sendRequest,
    status,
    data: loadedData,
    error,
  } = useHttp(getAllQuotes, true);
  useEffect(() => {
    sendRequest();
  }, [sendRequest]);

  if (status === "pending") {
    return (
      <div className="centered">
        <LoadingSpinner />
      </div>
    );
  }

  if (error) {
    return (
      <div className="centered">
        {error}
      </div>
    );
  }
  return (
    <>
      <QuoteList quotes={loadedData} isLoading={false} />
    </>
  );
};

export default AllQuotes;
