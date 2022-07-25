import { Link, Route, useParams, useRouteMatch} from "react-router-dom";
import Comments from "../comments/Comments";
import HighlightedQuote from "../quotes/HighlightedQuote";

const DUMMY = [
  { id: "q1", author: "Brian", text: "GG" },
  { id: "q2", author: "LOL", text: "GGWP" },
];

const QuotesDetails = () => {
  const match = useRouteMatch()
  const params = useParams();
  const item = DUMMY.find((item) => (item.id = params.quotesId));
  if (!item) {
    return <p>return </p>;
  }
  return (
    <>
      <HighlightedQuote text={item.text} author={item.author} />
      <Route path={`${match.path}`} exact>
        <div className='centered'>
            <Link to={`/quotes/${params.quotesId}/comments`} className='btn--flat'>Load</Link>
        </div>
      </Route>
      <Route path={`${match.path}/comments`}>
        <Comments />
      </Route>
    </>
  );
};

export default QuotesDetails;
