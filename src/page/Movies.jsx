import { getSearchMovie } from 'api';
import { useEffect, useState } from 'react';
import { Link, useSearchParams, useLocation } from 'react-router-dom';
import toast, { Toaster } from 'react-hot-toast';
import { Input, Button } from '@mui/material';

const Movies = () => {
  const [resultSearchMovie, setResultSearchMovie] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const location = useLocation();
  const onSubmit = e => {
    e.preventDefault();
    const wordQuery = e.currentTarget.elements.searchWord.value.trim();
    if (!wordQuery) {
      toast.error('Fill in the search field!');
    }
    setSearchParams({ searchMovie: wordQuery });
  };

  useEffect(() => {
    const controller = new AbortController();

    const searchWord = searchParams.get('searchMovie');

    if (!searchWord) {
      return;
    }
    const querySearchMovie = async () => {
      try {
        const { results, total_results } = await getSearchMovie(
          searchWord,
          controller
        );
        setResultSearchMovie([...results]);
        if (total_results === 0) {
          return toast.error('Sorry, but nothing was found for your request!');
        }
      } catch (error) {
        console.log('error', error);
      }
    };
    querySearchMovie();
    return () => {
      controller.abort();
    };
  }, [searchParams]);

  return (
    <>
      <form onSubmit={onSubmit}>
        <Input
          className="input"
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search movies"
          name="searchWord"
          sx={{ marginLeft: '15px' }}
        />
        <Button variant="contained" type="submit" sx={{ marginLeft: '30px' }}>
          Search
        </Button>
      </form>
      <section>
        <ul className=" p-6">
          {resultSearchMovie.map(item => {
            return (
              <li key={item.id} className="font-sans text-blue-600">
                <Link to={`${item.id}`} state={{ from: location }}>
                  {!item.title ? item.name : item.title}
                </Link>
              </li>
            );
          })}
        </ul>
      </section>
      <Toaster position="top-center" reverseOrder={false} />
    </>
  );
};
export default Movies;
