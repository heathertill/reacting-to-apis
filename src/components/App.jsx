import React from 'react';
import FilmCard from './FilmCard';

class App extends React.Component {
   constructor(props) {
      super(props);
      this.state = {
         films: [],
         show: false
      };
   }

   async componentDidMount() {
      let res = await fetch('https://ghibliapi.herokuapp.com/films');
      let data = await res.json();
      this.setState({ films: data });
   }

   handleFilmButton(e) {
      this.setState({ show: true });
   }

   render() {
      if (this.state.show) {
         return (
            <div className="container">
               <div className="container d-md-flex justify-content-center">
                  <img
                     src="https://ghibliapi.herokuapp.com/images/logo.svg"
                     alt="placeholder"
                     className="ghibli-logo"
                  />
               </div>
               <button
                  className="film-button"
                  type="submit"
                  onClick={() => this.handleFilmButton()}
               >
                  Click for Ghibli Films
               </button>

               <h1 className="title text-center m-3">
                  My Favorite Ghibli Movies!!!
               </h1>

               <div className="row justify-content-center">
                  {this.state.films.map(film => {
                     return <FilmCard key={film.id} film={film} />;
                  })}
               </div>

               {/* <div className="row justify-content-center" >
               {this.state.films.map(film => {
                  return <FilmCard key={film.id} film={film} />;
               })}
            </div> */}
            </div>
         );
      } else {
         
            <div className="container">
               <div className="container d-md-flex justify-content-center">
                  <img
                     src="https://ghibliapi.herokuapp.com/images/logo.svg"
                     alt="placeholder"
                     className="ghibli-logo"
                  />
               </div>
               <button
                  className="film-button"
                  type="submit"
                  onClick={() => this.handleFilmButton()}
               >
                  Click for Ghibli Films
               </button>
               <h1 className="title text-center m-3">
                  My Favorite Ghibli Movies!!!
               </h1>
            </div>
            ;
         ;
      }
   }
}

export default App;
