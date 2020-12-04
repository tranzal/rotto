import React,{useEffect,useState} from "react";

const counter = () =>{
    let counter =0;
    return (counter+1);
}
const add_onePerson = () =>{
    <input type="text" id={counter()} className="person_name" placeholder="이름을 입력해 주세요." value=""/>

}

const Body = () =>{
    const img_url="data:image/png;base64,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";

    const [rows,setRows]=useState([]);
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
    };
    const addRow = () => {
        let data = {
            id : rows.length+1,
            todo : ""
        };
        setRows([...rows,data]);
    };
    const allDeleteRow = () => {
        setRows([]);
    };
    const deleteRow = id => () =>{
        let tempRows = rows.filter(row => {
            return row.id !== id+1;
        });
        setRows(tempRows);
    }
    const display = () => {
        console.log(rows);
    };

    return(
        <div className="body">
            <div  className="person">
            <tbody>
            {rows.map((d, i) => (
                <tr key={i}>
                    <td>{i + 1}</td>
                    <td>
                        <input type="text" onChange={changeText(i)} value={d.todo}/>
                    </td>
                    <td>
                        <button onClick={deleteRow(i)}>삭제</button>
                    </td>
                </tr>
            ))}
            </tbody>
            </div>
            <div className="add_person">
                <img src={img_url} alt="" title="" onClick={addRow}/>
                <button onClick={allDeleteRow}>초기화</button>
                <button onClick={display}>state 확인</button>

            </div>
        </div>
    );
}

export default Body;