import React from 'react';

const FilmCard = props => {
   const cardShow = 'card-deck ' + (props.cardToggle.toggle ? 'visible' : 'invisible')
   
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
                  <h4>{cardShow}</h4>
               </div>
            </div>
         </div>
      </div>
   );
};

export default FilmCard;
