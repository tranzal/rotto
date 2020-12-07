import React,{useState,useEffect,ReactDOM} from "react";
import "./App.css";
import Popup from './popup';
import ModalPortal from './ModalPortal';

const App = () => {
    //state 생성
    const [rows,setRows]=useState([]);
    const [modal,setModal]=useState("");
    //입력받은 input 값 state에 담기
    const changeText = id => e => {
        const {
            target: {value}
        } = e;
        const tempRows = rows.map(row => {
            if (row.id === id + 1) {
                row["todo"] = value;
            }
            return row;
        });
        setRows(tempRows);
    };
    //행 추가
    const addRow = () => {
        let data = {
            id : rows.length+1,
            todo : ""
        };
        setRows([...rows,data]);
    };
    //초기화
    const allDeleteRow = () => {
        setRows([]);
    };
    //하나 삭제
    const deleteRow = id => () =>{
        console.log(id)
        let tempRows = rows.filter(row => {
            return row.id !== id;
        });
        setRows(tempRows);
    }
    //콘솔 찍기
    const display = () => {
        console.log(rows);
    };
    //모달
    const OpenModal = () =>{
            if(rows.length>0){
                let flag=true;
                const check = rows.map((d,i) =>{
                    if(d.todo===""){
                        flag= false;
                    }
                });
                if(flag){
                    setModal(true);
                }else{
                    alert("이름을 입력해 주세요");
                }
            }else{
                alert("인원수를 추가해 주세요");
            }
    }
    const CloseModal = () =>{
        setModal(false);
    }
    return (
        <>
            <div className="header">
                <h3 className="title">제비뽑기</h3>
            </div>
            <div className="body">
                <button className="reset" onClick={allDeleteRow}>초기화</button>
                <table className="person_table">
                    {rows.map((d, i) => (
                        <tr key={i}>
                            <td>
                                <input type="text" className="name_box" onChange={changeText(i)} value={d.todo} placeholder="이름을 입력해 주세요." />
                            </td>
                            <td>
                                <button onClick={deleteRow(d.id)}>삭제</button>
                            </td>
                        </tr>
                    ))}
                </table>
                <div className="add_person">
                    <div className="add" onClick={addRow}></div>
                </div>
            </div>
            <div className="footer">
               < div className="start" onClick={OpenModal} >
                   실행
                   </div>
                {modal && (
                    <ModalPortal>
                        <Popup onClose={CloseModal} result={rows[Math.floor(Math.random()*rows.length)].todo}/>
                    </ModalPortal>)}
            </div>
        </>
    );
}

export default App;

