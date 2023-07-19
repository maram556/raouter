import React from 'react'
import { Link } from 'react-router-dom';
import StarRatingComponent from 'react-star-rating-component';



const MovieCard = ({movie, handleDelete}) => {
  console.log("movie from movieCard :", movie)
  console.log('movie id :', `/description/${movie.id}`)

  return (
    <div>
      <Link to={`/description/${movie.title}`}>
      <img  style={{width: "150px"}} src={movie.img} alt='movie'/>
      <div>{movie.title}</div>
      <StarRatingComponent 
          name="rate" 
          starCount={5}
          value={movie.rate}
          //onStarClick={this.onStarClick.bind(this)}
        />
        <button style={{backgroundColor:"red"}} onClick={handleDelete} >delete</button>
        </Link>
    </div>
  )
}

export default MovieCard
