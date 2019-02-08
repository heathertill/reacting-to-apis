import React from 'react';
import FilmCard from './FilmCard';

class App extends React.Component {
   constructor(props) {
      super(props);
      this.state = {
         films: []
      };
   }

   async componentDidMount() {
      let res = await fetch('https://ghibliapi.herokuapp.com/films');
      let data = await res.json();
      this.setState({ films: data });
   }

   render() {
      return (
         <div className="container">
            <div className="container ">
               <div className="row justify-content-center">
                  <div className="col-2">
                     <img
                        src="https://ghibliapi.herokuapp.com/images/logo.svg"
                        alt="placeholder"
                        className="ghibli-logo"
                     />
                  </div>
               </div>
            </div>

            <h1 className="title text-center m-3">
               My Favorite Ghibli Movies!!!
            </h1>
            <div className="row">
               {this.state.films.map(film => {
                  return <FilmCard key={film.id} film={film} />;
               })}
            </div>
         </div>
      );
   }
}

export default App;
