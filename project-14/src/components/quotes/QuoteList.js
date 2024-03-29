import { Fragment, useState } from 'react';
import { useHistory, useLocation} from 'react-router-dom';

import QuoteItem from './QuoteItem';
import classes from './QuoteList.module.css';

const sortQuotes = (quotes, ascending) => {
  return quotes.sort((quoteA, quoteB) => {
    if (ascending) {
      return quoteA.id > quoteB.id ? 1 : -1;
    } else {
      return quoteA.id < quoteB.id ? 1 : -1;
    }
  });
};

const QuoteList = (props) => {
  const history = useHistory()
  const location = useLocation()
  const a = new URLSearchParams(location.search)
  const isSortAscending = a.get('sort') === 'asc';
  const sortedQuotes = sortQuotes(props.quotes, isSortAscending)
  const changeSortingHandler = () =>{
    history.push(`/quotes?sort=` + (isSortAscending ? 'dsc' : 'asc'))
  }
  return (
    <Fragment>
      <div className={classes.sorting}>
        <button onClick={changeSortingHandler}>Sort {isSortAscending ? 'DSC' : 'ASC'}</button>
      </div>
      <ul className={classes.list}>
        {sortedQuotes.map((quote) => (
          <QuoteItem
            key={quote.id}
            id={quote.id}
            author={quote.author}
            text={quote.text}
          />
        ))}
      </ul>
    </Fragment>
  );
};

export default QuoteList;
