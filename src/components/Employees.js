import React from "react";
import { observer } from "mobx-react-lite";
import Form from "./Form";
import "../App.css";
import EmployeesBirthday from "../components/EmployeesBirthday";

const Employees = observer(() => {
    const alphabet = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

    return (
        <div className="emloyees">
            <div className="elem1">
                <h1 className="h1">EMPLOYEES</h1>
                <div className="form">
                    {alphabet.map(alphabetItem => <Form alphabetItem={alphabetItem} />)}
                </div>
            </div>
            <div className="elem2">
                <h1 className="h2">EMPLOYEES BIRTHDAY</h1>
                <EmployeesBirthday />
            </div>
        </div>
    );
});

export default Employees;