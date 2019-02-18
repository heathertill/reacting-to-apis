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
                  return (
                     <FilmCard
                        film={film}
                        cardToggle={{
                           toggle: this.state.toggle
                        }}
                     />
                  );
               })}
            </div>
         </div>
      );
   }
}

export default App;


///////

import React from 'react';

const FilmCard = props => {
   const cardShow =
      'card-deck ' + (props.cardToggle.toggle ? 'visible' : 'invisible');

   return (
      <div className={cardShow}>
         <div key={props.film.id} className="card-deck col-md-4 ">
            <div className="card m-2 p-1 border-dark rounded">
               <div className="card-header border-dark">
                  <h4 className="card-title">{props.film.title}</h4>
               </div>
               <div className="card-body">
                  <p className="card-text">{props.film.description}</p>
               </div>
               <div className="card-footer bg-transparent d-flex">
                  <img
                     className="d-flex align-items-center pr-2"
                     style={{ height: 37, width: 57 }}
                     src="http://chittagongit.com//images/rotten-tomatoes-icon/rotten-tomatoes-icon-21.jpg"
                     alt="placeholder"
                  />
                  <h5 className="pt-2">{props.film.rt_score}</h5>
               </div>
            </div>
         </div>
      </div>
   );
};

export default FilmCard;


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
            
            <div className="row justify-content-center">
               {this.state.films.map(film => {
                  return <FilmCard key={film.id} film={film} />;
               })}
            </div>
         </div>
      );
   }
}

export default App;



///

