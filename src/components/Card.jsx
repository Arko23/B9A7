import { useEffect } from "react";
import { useState } from "react";
import Packet from "./Packet";
import PropTypes from 'prop-types';


const Card = ({handleCook}) => {
    const [info,setInfo]=useState([]);
    useEffect(()=>{
        fetch('info.json')
        .then(res=>res.json())
        .then(data=>setInfo(data))
    },[])
    return (
        <div className="w-2/2 ml-16 grid grid-cols-2 gap-4 border-[1px] rounded-lg border-dashed border-gray-300">
           
            {
                info.map(info=>
                <Packet key={info.recipe_id}
                handleCook={ handleCook}
                 info={info}></Packet>)
            }
        </div>
    );
};
Card.propTypes ={
    handleCook : PropTypes.func
}

export default Card;