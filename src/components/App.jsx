import {Routes, Route} from 'react-router-dom';
import Home from './pages/Home';
import Movies from './pages/Movies/Movies';
import Movie from './pages/MovieDetails/MovieDetails'
import Layout from './SharedLayout/SharedLayout';
import Cast from './Cast/Cast';
import Reviews from './Reviews/Reviews';
export const App = () => {
  return (
    <>
      <Routes>
      <Route path='/' element={<Layout/>}>
      <Route index element={<Home/>}/>
      <Route path="movies" element={<Movies/>}/>
      <Route path="movies/:movieId" element={<Movie/>}>
      <Route path='cast' element={<Cast/>}/>
      <Route path='reviews' element={<Reviews/>}/>
      </Route>




      </Route>

      </Routes>
    </>
      
  );
};
