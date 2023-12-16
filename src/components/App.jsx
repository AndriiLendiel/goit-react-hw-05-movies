import {Routes, Route, Navigate} from 'react-router-dom';
import {lazy} from 'react'
import Home from './pages/Home/Home';



const Movies = lazy(() => import('./pages/Movies/Movies'));
const Movie = lazy(() => import('./pages/MovieDetails/MovieDetails.jsx'));
const Cast = lazy(() => import('./Cast/Cast'));
const Reviews = lazy(() => import('./Reviews/Reviews'));
const Layout = lazy(() => import('./SharedLayout/SharedLayout'));
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

      <Route path="*" element={<Navigate to={'/'}></Navigate>} />
      </Route>




      </Route>

      </Routes>
    </>
      
  );
};
