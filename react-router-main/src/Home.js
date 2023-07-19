
import './App.css';
import { useRef, useState } from 'react';
import data from './Data/Data';
import MovieList from './components/MovieList';
import Add from './components/Add';
import Filters from './components/Filters';


function Home() {

  const [movies,setMovies] = useState(data)
  const [newMovie,setNewMovie] = useState([])
  const [search,setSearch] = useState("")
  const [rating,setRating] = useState(1)
  const myTitle = useRef()
  const myImg = useRef()
  const myRate = useRef()
  const toSearch = useRef()
  
  const [deleteMovie, setDeleteMovie] = useState(movies)

  const handleDelete = (e) => {
   setMovies(deleteMovie)
   setDeleteMovie(movies.filter((el) => el.id !== e.id ))
  }

  const handleAdd = () =>{
    setNewMovie([
      {
        title: myTitle.current.value,
        img: myImg.current.value,
        rate: myRate.current.value,
      }
    ])
    setMovies([...movies,...newMovie])
  }
 const handleSearch = () =>{
  setSearch(toSearch.current.value)
 }

 const handleRate = (rating) => {
  setRating(rating)
 }

 
console.log("movies :", movies)
  return (
    <div className="App">
      <header className="App-header">
        <Filters  handleSearch={handleSearch}  toSearch={toSearch} handleRate={handleRate}  />
        <handleRate/>
        <Add myTitle={myTitle} myImg={myImg} myRate={myRate}   handleAdd={handleAdd} />
        <MovieList  handleDelete={handleDelete} movies= {[...movies,...newMovie].filter(movie => movie.title.toLocaleLowerCase().trim()
        .includes(search.toLocaleLowerCase().trim()) && movie.rate >= rating )} />
       

      </header>

    </div>
  );
}

export default Home;
