import React from 'react';

const Addend = (props) =>
{
    return (<span>
        <span style={{display: 'inline-block', verticalAlign: 'top', width: '3%', height: '2%'}}>{props.number}</span>
        <span style={{display: 'inline-block', width: '5%'}}></span>
        <span style={{textAlign: 'left', display: 'inline-block', width: '80%'}}>
        
        {range(props.number, 1).map((i) => {
            return <span>
                <img src={props.image} alt="Wolf" style={{width: '8%', height: '2%'}}/>
                <div style={{display: 'inline-block', width: '0.5%'}}></div>
            </span>
        })}
        
        </span></span>);
}

    
const range = (size, startAt = 0) => {
    return [...Array(size).keys()].map(i => i + startAt);
}

export default Addend;