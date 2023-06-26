import React from 'react';
import Card from '../components/Card';


const CardList = ({mascots}) => {
     return (
        <div>
        {
        mascots.map((user, i) => {
        return (
        <Card key={i} 
        id={mascots[i].id} 
        name={mascots[i].name} 
        email={mascots[i].email} 
        headshot={mascots[i].headshot}
        team={mascots[i].team}
        />
        );
        })
        }
       </div>
    );
}

export default CardList;