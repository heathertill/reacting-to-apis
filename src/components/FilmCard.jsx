import React from 'react';

const FilmCard = props => {
   return props.films.map(film => {
      return (
         <div className="card-deck col-md-4" key={film.id}>
            <div className="card m-2 p-1 border-dark rounded">
               <div className="card-header border-dark" style={{backgroundColor: '#e5eef0'}}>
                  
                  <h4 className="card-title">{film.title} ({film.release_date})</h4>
               </div>
               <div className="card-body">
                  <h5>Producer</h5>
                  <p className="card-text pl-2">{film.producer}</p>
               <h5>Synopsis</h5>
                  <p className="card-text p-2">{film.description}</p>
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
