import React from 'react';
import FilmCard from './FilmCard';
// import 'isomorphic-fetch';
// import es6Promise from 'es6-promise'
// es6Promise.polyfill();

class App extends React.Component {
   constructor(props) {
      super(props);
      this.state = {
         films: [],
         people: [],
         cards: false
      };
   }

   componentDidMount() {
      this.getFilms();
   }

   async getFilms() {
      let res = await fetch('https://ghibliapi.herokuapp.com/films');
      let films = await res.json();
      this.setState({ films });
   }

   displayCards(cards) {
      switch (cards) {
         case 'films':
            this.setState({
               show: <FilmCard films={this.state.films} />
            });
            break;
         default:
            this.setState({show: false})
   }
}



   // clickButton(e) {
   //    // alert('push');
   //    e.preventDefault();
   //    this.setState(prevState => ({
   //       toggle: !prevState.toggle
   //    }));
   // }

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
              
               onClick={() => this.displayCards('films')}
            >
               Click for Ghibli Films
            </button>
            <button
               className="people-button"
               
               onClick={() => this.displayCards('people')}
            >
               Click for Ghibli People
            </button>

            <h1 className="title text-center m-3">
               My Favorite Ghibli Movies!!!
            </h1>

            <div className="row justify-content-center">
               
            </div>
            {this.state.cards}
         </div>
      );
   }
}

export default App;
