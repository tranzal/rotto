import React from 'react';
import './popup.css';

const PopUp = ({onClose,result}) =>{
    return(
        <div className="MyModal">
            <div className="content">
                <h3>당첨자~!</h3>
                <p>{result}</p>
                <button onClick={onClose}>닫기</button>
            </div>
        </div>
    );
}

export default PopUp;
