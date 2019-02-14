import React from 'react';
import FilmCard from './FilmCard';

class App extends React.Component {
   constructor(props) {
      super(props);
      this.state = {
         films: [],
         people: [],
         show: false
      };
   }

   async componentDidMount() {
      let res = await fetch('https://ghibliapi.herokuapp.com/films');
      let films = await res.json();
      this.setState({ films });
   }

   async handleFilmButton() {
      
   }

   showCards(show) {
      switch (show) {
         case 'films':
            this.setState({
               show: <FilmCard films={this.state.films} />
            });
            break;
         case 'people':
            this.setState({ show: 'err'})
            break;
      }
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
               onClick={() => this.showCards('films')}
            >
               Click for Ghibli Films
            </button>

            <h1 className="title text-center m-3">
               My Favorite Ghibli Movies!!!
            </h1>
            {this.state.show}
            
            {/* <div className="row justify-content-center">
               {this.state.films.map(film => {
                  return <FilmCard key={film.id} film={film} />;
               })}
            </div> */}
         </div>
      );
   }
}

export default App;



///

