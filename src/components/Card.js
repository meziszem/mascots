import React from 'react';
import {useState} from 'react';

const Card = ({name, email, id, headshot }) => {
    
    const [isHovering, setIsHovering] = useState(false);

  const handleMouseOver = () => {
    setIsHovering(true);
  };

  const handleMouseOut = () => {
    setIsHovering(false);
  };

    return(
                <div className='tc bg-light-blue dib br3 grow shadow-hover pa3 ma2 bw2 shadow-5'>
              <div
          onMouseOver={handleMouseOver}
          onMouseOut={handleMouseOut}
        >
            <img className='' 
            style={{width: 200, height: 300, borderRadius: 5 }} 
            src={headshot}  
            alt="mascots" />
            </div>
            <div>
                <h2 style={{padding: 1}}>{name}</h2>
                <p style={{padding: 1}}>{email}</p>
            </div>
            {isHovering && (
          <div>
            <h2>Only visible when hovering div</h2>
            </div>
        )}
        </div>
    )
}

export default Card

// {`https://robohash.org/${id}?200x200`}

// headshot