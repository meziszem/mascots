import React from 'react';

const Card = ({name, email, id, headshot, team }) => {
    
    return(
                <div className='tc bg-light-blue dib br3 grow shadow-hover pa3 ma2 bw2 shadow-5'>
            <img className='' 
            style={{width: 200, height: 300, borderRadius: 5 }} 
            src={headshot}  
            alt="mascots" />
            <div>
                <h2 style={{padding: 1}}>{name}</h2>
                <h4 style={{padding: 1}}>{team}</h4>
                <p style={{padding: 1}}>{email}</p>
            </div>
        </div>
    )
}

export default Card



// {`https://robohash.org/${id}?200x200`}

// headshot