import QuoteList from '../components/quotes/QuoteList';

const DUMMY_QUOTES= [
  {id: 'q1', author:'Kronos', text:'Learning react is fun!'},
  {id: 'q2', author:'Kronos', text:'Learning react is shit'},
]

const AllQuotes = () => {
  return <QuoteList quotes={DUMMY_QUOTES} />
}

export default AllQuotes