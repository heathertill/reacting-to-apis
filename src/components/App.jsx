import React from 'react';
import FilmCard from './FilmCard';

class App extends React.Component {
   constructor(props) {
      super(props);

      this.state = {
         films: [],
         people: [],
         toggle: false
      };
   }

   async componentDidMount() {
      let res = await fetch('https://ghibliapi.herokuapp.com/films');
      let films = await res.json();
      this.setState({ films });
   }

   async handleFilmButton() {}

   clickButton(e) {
      // alert('push');
      e.preventDefault();
      this.setState(prevState => ({
         toggle: !prevState.toggle
      }));
   }

   render() {
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
               onClick={e => this.clickButton(e)}
            >
               Click for Ghibli Films
            </button>

            <h1 className="title text-center m-3">
               My Favorite Ghibli Movies!!!
            </h1>

            <div className="row justify-content-center">
               {this.state.films.map(film => {
                  return <FilmCard film={film}
                     cardToggle={{
                     toggle: this.state.toggle,
                  }}
                  />;
               })}
            </div>
         </div>
      );
   }
}

export default App;
