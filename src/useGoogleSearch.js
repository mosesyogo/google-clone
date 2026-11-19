import { useState, useEffect} from 'react'
import API_KEY from './components/keys'

const CONTEXT_KEY = "c2b667b64a2f14a4d"

const useGoogleSearch = (term) => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async => {
        fetch (
            `https://www.googleapis.com/customsearch/v1?key=${API_KEY}&cx=${CONTEXT_KEY}&q=${term}`
        )
        .then( response => response.json())
        .then( results => {
            setData(results)
        })
    }

    fetchData();

  }, [term]);
  return { data }
};

export default useGoogleSearch;