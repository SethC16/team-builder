import React from 'react';

const Teammates = props => {
    return (
        <div className='mate-list'>
            {props.member.map(team => (
                <div className='member'>
                    <h3>{team.name}</h3>
                    <p>Email: {team.email}</p>
                    <p>Role: {team.role}</p>
                </div>    
            ))}
        </div>
    )
    
}

export default Teammates;