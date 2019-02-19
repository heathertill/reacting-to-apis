import React from 'react';

const Main = props => {
   return (
      <div className="row border-bottom border-secondary" style={{ backgroundColor: '#a7c4cd' }}>
         <div className="container d-md-flex justify-content-center">
            <img
               src="https://ghibliapi.herokuapp.com/images/logo.svg"
               alt="placeholder"
               className="ghibli-logo"
            />
         </div>
         
      </div>
   );
};

export default Main;
