
import MovieCard from './MovieCard'

const MovieList = ({movies, handleDelete}) => {

  return (
    <div className='mvlist'>
      {
movies.map((el) => <MovieCard Key={el.id} movie={el} handleDelete={()=> handleDelete(el)}/>)
      }
    </div>
  )
}

export default MovieList
