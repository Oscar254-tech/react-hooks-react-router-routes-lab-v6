import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import NavBar from "../components/NavBar";

function Movie() {
  const [movie, setMovie] = useState({});
  const { id } = useParams();

  useEffect(() => {
    fetch(`http://localhost:4000/movies/${id}`)
      .then(r => r.json())
      .then(data => setMovie(data))
      .catch(error => console.error(error));
  }, [id]);

  if (!movie.title) {
    return <h1>Loading...</h1>;
  }

  return (
    <>
      <NavBar />
      <h1>{movie.title}</h1>
      <p>Time: {movie.time} minutes</p>
      <div>
        {movie.genres?.map((genre, index) => (
          <span key={index} style={{ margin: "0 0.5rem", padding: "0.25rem", background: "#eee" }}>
            {genre}
          </span>
        ))}
      </div>
    </>
  );
}

export default Movie;