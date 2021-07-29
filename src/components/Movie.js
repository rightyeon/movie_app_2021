import React from 'react';
import PropTypes from 'prop-types';
import './Movie.css';
// Movie에 넘어와야 하는 데이터를 정의-관리하기 위해 propTypes 사용
// state가 필요없으므로 클래스형이 아닌 함수형 컴포넌트로 작성

function Movie( { year, title, summary, poster, genres}) {
    return (
        <div className="movie">
            <img src={poster} alt={title} title={title} />
            <div className="movie__data">
                <h3 className="movie__title" >{title}</h3>
                <h5 className="movie__year">{year}</h5>
                <ul className="movie__genres">
                    {genres.map((genre, idx) => {
                        return <li key={idx} className="movie__genre" >{genre}</li>;
                    })}
                </ul>
                <p className="movie__summary">{summary.slice(0,180)}...</p>
            </div>
        </div>
    );
}

Movie.propTypes = { 
    year    : PropTypes.number.isRequired,
    title   : PropTypes.string.isRequired,
    summary : PropTypes.string.isRequired,
    poster  : PropTypes.string.isRequired,    
    genres  : PropTypes.arrayOf(PropTypes.string).isRequired
    // arrayOf(PropTypes.string) 는 문자열을 원소로 하는 배열을 의미함
};

export default Movie;