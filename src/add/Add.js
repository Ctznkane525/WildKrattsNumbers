import React, {useState} from 'react';
import Addend from '../addend/Addend';
import Wolf from '../images/wolf.png'
import Walrus from '../images/walrus.png'
import Idk from '../images/idontknow.png'
import Elephant from '../images/elephant.png'
import './Add.css'



const Add = (props) =>
{

    const [msg, setMsg] = useState("");
    
    const images = [Wolf, Walrus, Idk, Elephant];

    const [imageIndex] = useState(Math.floor(Math.random() * images.length));
    
    const [checkRef] = useState(React.createRef());

    const sign = (props) =>
    {
        if (props.method === "add")
            return "+";
        else
            return "-";
    }

    const sumDiff = (props) =>
    {
        if (props.method === "add")
            return props.number1+props.number2;
        else
            return props.number1-props.number2;
    }

    const check = (props) =>
    {
        let currVal = checkRef.current?.value;
        if (currVal === sumDiff(props).toString())
        {
            setMsg("Good Job");
            setTimeout(() => {props.onSuccess()}, 1000);
        }
        else
        {
            setMsg("Incorrect, please keep trying!")
        }
    }

    return (<span>
                <span className="top-left-space"></span>
                <Addend image={images[imageIndex]} key="number1" number={props.number1}></Addend><br></br>
                <span className="plus-sign">{sign(props)}</span>
                <Addend image={images[imageIndex]} key="number2" number={props.number2}></Addend><br></br>
                <span className="equals-sign">=</span>
                <input className="input" type="text" ref={checkRef}></input>&nbsp;
                <button onClick={() => check(props)}>Check Answer</button><span className="message">{msg}</span>
        </span>
        )
}

export default Add;
