import React from 'react';
import 'isomorphic-fetch';
import 'es6-promise';
import FilmCard from './FilmCard';
import Main from './Main';
import PeopleCard from './PeopleCard';

class App extends React.Component {
   constructor(props) {
      super(props);
      this.state = {
         films: [],
         people: [],
         filmCards: false,
         peopleCards: false
      };
   }

   componentDidMount() {
      this.getInfo();
   }

   async getInfo() {
      try {
         let res = await fetch('https://ghibliapi.herokuapp.com/films');
         let films = await res.json();
         let res2 = await fetch('https://ghibliapi.herokuapp.com/people');
         let people = await res2.json();
         this.setState({ films, people });
      } catch (e) {
         console.log(e);
      }
   }

   displayFilms() {
      this.setState({
         filmCards: true,
         peopleCards: false
      });
   }

   displayPeople() {
      this.setState({
         filmCards: false,
         peopleCards: true
      });
   }

   render() {
      if (this.state.filmCards === false && this.state.peopleCards === false) {
         return (
            <div className="container-fluid">
               <Main />
               <div className="row">
                  <div className="col-md-12 text-center">
                     <button
                        className="btn btn-secondary m-2 d-inline-block"
                        onClick={() => this.displayFilms()}
                     >
                        Click for Ghibli Films
                     </button>
                     <button
                        className="btn btn-secondary m-2 d-inline-block"
                        onClick={() => this.displayPeople()}
                     >
                        Click for Ghibli People
                     </button>
                  </div>
               </div>
            </div>
         );
      } else if (
         this.state.filmCards === true &&
         this.state.peopleCards === false
      ) {
         return (
            <div className="container-fluid">
               <Main />
               <div className="row">
                  <div className="col-md-12 text-center">
                     <button
                        className="btn btn-secondary m-2 d-inline-block"
                        onClick={() => this.displayFilms()}
                     >
                        Click for Ghibli Films
                     </button>
                     <button
                        className="btn btn-secondary m-2 d-inline-block"
                        onClick={() => this.displayPeople()}
                     >
                        Click for Ghibli People
                     </button>
                  </div>
               </div>
               <div className="row justify-content-center">
                  <FilmCard films={this.state.films} />
               </div>
            </div>
         );
      } else if (
         this.state.filmCards === false &&
         this.state.peopleCards === true
      ) {
         return (
            <div className="container-fluid">
               <Main />
               <div className="row">
                  <div className="col-md-12 text-center">
                     <button
                        className="btn btn-secondary m-2 d-inline-block"
                        onClick={() => this.displayFilms()}
                     >
                        Click for Ghibli Films
                     </button>
                     <button
                        className="btn btn-secondary m-2 d-inline-block"
                        onClick={() => this.displayPeople()}
                     >
                        Click for Ghibli People
                     </button>
                  </div>
               </div>
               <div className="row justify-content-center">
                  <PeopleCard people={this.state.people} />
               </div>
            </div>
         );
      }
   }
}

export default App;
