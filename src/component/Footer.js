import React,{useEffect,useState} from "react";
import Body from "./Body";
function play(){
    let lucky=Math.random();
    return(
        <div className="finish">
            data[lucky].name
        </div>

    );
}

function Header(){
    const [data,setData] =useState([]);
    const addData = () =>{

    }
    return(
        <div className="header" onClick="play()">
            실행
        </div>
    );


}

export default Header;