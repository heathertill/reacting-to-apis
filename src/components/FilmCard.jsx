import React from 'react';

const FilmCard = props => {
   return props.films.map((film) => {
      return (
         <div key={film.id} className="card-deck col-md-4 ">
            <div className="card m-2 p-1 border-dark rounded">
               <div className="card-header border-dark">
                  <h4 className="card-title">{film.title}</h4>
               </div>
               <div className="card-body">
                  <p className="card-text">{film.description}</p>
               </div>
               <div className="card-footer bg-transparent d-flex">
                  <img
                     className="d-flex align-items-center pr-2"
                     style={{ height: 37, width: 57 }}
                     src="http://chittagongit.com//images/rotten-tomatoes-icon/rotten-tomatoes-icon-21.jpg"
                     alt="placeholder"
                  />
                  <h5 className="pt-2">{film.rt_score}</h5>
               </div>
            </div>
         </div>
      );
   });
};

export default FilmCard;
