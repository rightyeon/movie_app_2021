import React from 'react';
import axios from 'axios';
import Movie from '../components/Movie';
import './Home.css';

class Home extends React.Component {
  state = {
    isLoading : true,
    movies : [],
  }
 

  componentDidMount() {
    // 영화 API 호출한다! 
    this.getMovies();
  }

  // async-await로 이 함수는 시간이 좀 걸린다라고 알려주기 
  getMovies = async () => { 
    // 구조분해할당으로 movies.data.data.movies 에 접근
    const {
      data : {
        data: { movies },
      }
    } = await axios.get('https://yts.mx/api/v2/list_movies.json?sort_by=rating');
    this.setState({ movies, isLoading : false });
  }


  render(){
    const { isLoading, movies } = this.state;
    return (
        <section className="container">
          {isLoading ? (
            <div className="loader">
              <span className="loader__text">Loading...</span>
            </div>
          ) : (
            <div className="movies">
              { movies.map((movie) => {
                  return (
                    <Movie 
                      key     = { movie.id}
                      id      = { movie.id} 
                      title   = { movie.title}
                      summary = { movie.summary}
                      year    = { movie.year}
                      poster  = { movie.medium_cover_image}
                      genres  = { movie.genres}
                    /> 
                  )
                })}
            </div>
          )}
        </section>
    );
  }
}
 
export default Home;
