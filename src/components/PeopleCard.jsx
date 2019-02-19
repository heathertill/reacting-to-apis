import React from 'react';

const PeopleCard = props => {
   return props.people.map(person => {
      return (
         <div className="card-deck col-md-4" key={person.id}>
            <div className="card m-2 p-1 border-dark rounded">
               <div
                  className="card-header border-dark"
                  style={{ backgroundColor: '#e5eef0' }}
               >
                  <h4 className="card-title">{person.name}</h4>
               </div>
               <div className="card-body">
                  <h5>Description</h5>
                  <p className="card-text m-0 px-2">Gender: {person.gender}</p>
                  <p className="card-text m-0 px-2">Age: {person.age}</p>
                  <p className="card-text m-0 px-2">
                     Hair Color: {person.hair_color}
                  </p>
                  <p className="card-text m-0 px-2">
                     Eye Color: {person.eye_color}
                  </p>

                  <h5 className="pt-4">{person.name}'s URL</h5>
                  <a href={person.url} target="_blank" rel="noopener noreferrer">
                     {person.url}
                  </a>
               </div>
            </div>
         </div>
      );
   });
};

export default PeopleCard;
