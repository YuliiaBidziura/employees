import React, { useContext } from "react";
import { observer } from "mobx-react-lite";
import { Context } from "../index";

const EmployeesBirthday = observer(() => {
    const { activeUsers } = useContext(Context);
    const users = activeUsers.usersStore;
    const month = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    const d = new Date();

    let filterUsersActive = new Set();
    let lastArr = [];
    let monthName = month[d.getMonth()];

    function compare(a, b) {
        if (a.lastName < b.lastName) {
            return -1;
        }
        if (a.lastName > b.lastName) {
            return 1;
        }
        return 0;
    };

    function newDate(dob) {
        let months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
        let d = new Date(dob);
        let year = d.getUTCFullYear();
        let month = months[d.getUTCMonth()];
        let day = d.getUTCDate();
        let time = ' ' + day + ' ' + month + ', ' + year + 'year';
        return time;
    };

    for(let i = 0; i < users.length; i++) {
        filterUsersActive.add(JSON.stringify(users[i]));
    };

    for (let value of filterUsersActive) {
        lastArr.push(JSON.parse(value));
    };

    lastArr.sort(compare);
    
    return (
        <div className="birthday">
            {
                (lastArr.length > 0) ? 
                    <h3 className="hh">{monthName}</h3> 
                : 
                    <h3 className="hh">No Employees</h3>
            }
            {
                lastArr.map(i => <p className="pBrthd">{` ○ ${i.lastName} ${i.firstName}`}<span>{` - ${newDate(i.dob)}`}</span></p>)
            }
        </div>
    );
});

export default EmployeesBirthday;