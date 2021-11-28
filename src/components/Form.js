import React from "react"; 
import { ReceivedDataFromTheServer } from "../data/ReceivedDataFromTheServer";
import Form1 from "./Form1";
import Form2 from "./Form2";

const Form = ({ alphabetItem }) => {
    const users = ReceivedDataFromTheServer();
    let arr = users.get(alphabetItem);

    return(
        <div className="form1">
            <h1 className="elem1H1">{alphabetItem}</h1>
            {arr.map(i => (i !== "No Employees") ? <Form1 i={i} /> : <Form2 i={i} />) }
        </div>
    );
};
export default Form;