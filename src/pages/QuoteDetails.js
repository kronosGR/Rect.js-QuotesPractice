import { Link, Route, useParams, useRouteMatch } from 'react-router-dom';
import { Fragment } from 'react';
import Comments from '../components/comments/Comments';
import HighlightedQuote from '../components/quotes/HighlightedQuote';


const DUMMY_QUOTES = [
  { id: 'q1', author: 'Kronos', text: 'Learning react is fun!' },
  { id: 'q2', author: 'Kronos', text: 'Learning react is shit' },
];

const QuoteDetails = () => {
  const params = useParams();
  const match = useRouteMatch();

  const quote = DUMMY_QUOTES.find(quote => quote.id === params.quoteId);

  if (!quote) {
    return <p>No quote found!</p>;
  }

  return <Fragment>
    <HighlightedQuote text={quote.text} author={quote.author}/>
    <Route path={match.path} exact>
      <div className="centered">
        <Link className="btn--flat" to={`/quotes/${params.quoteId}/comments`}>Load
          Comments</Link>
      </div>
    </Route>
    <Route path={`${match.path}/comments`}>
      <Comments/>
    </Route>

  </Fragment>;

};

export default QuoteDetails;