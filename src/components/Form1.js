import React, { useContext } from "react";
import { observer } from "mobx-react-lite";
import { Context } from "../index";

const Form1 = observer(({ i }) => {
    const { activeUsers } = useContext(Context);

    function activeUser() {
        document.getElementById(i.id).style.color = "rgb(79, 62, 255)";
        document.getElementById(i.id + "j").style.background = "black";
        document.getElementById(i.id + "j").style.background = "-moz-radial-gradient(center, ellipse cover, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 49%, rgba(255,255,255,1) 50%, rgba(255,255,255,1) 51%, rgba(255,255,255,1) 100%)";
        document.getElementById(i.id + "j").style.background = "-webkit-gradient(radial, center center, 0px, center center, 100%, color-stop(0%, rgba(0,0,0,1)), color-stop(49%, rgba(0,0,0,1)), color-stop(50%, rgba(255,255,255,1)), color-stop(51%, rgba(255,255,255,1)), color-stop(100%, rgba(255,255,255,1)))";
        document.getElementById(i.id + "j").style.background = "-webkit-radial-gradient(center, ellipse cover, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 49%, rgba(255,255,255,1) 50%, rgba(255,255,255,1) 51%, rgba(255,255,255,1) 100%)";
        document.getElementById(i.id + "j").style.background = "-o-radial-gradient(center, ellipse cover, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 49%, rgba(255,255,255,1) 50%, rgba(255,255,255,1) 51%, rgba(255,255,255,1) 100%)";
        document.getElementById(i.id + "j").style.background = "-ms-radial-gradient(center, ellipse cover, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 49%, rgba(255,255,255,1) 50%, rgba(255,255,255,1) 51%, rgba(255,255,255,1) 100%)";
        document.getElementById(i.id + "j").style.background = "background: radial-gradient(ellipse at center, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 49%, rgba(255,255,255,1) 50%, rgba(255,255,255,1) 51%, rgba(255,255,255,1) 100%)";
        document.getElementById(i.id + "j").style.filter = "progid:DXImageTransform.Microsoft.gradient( startColorstr='#000000', endColorstr='#ffffff', GradientType=1 )";
        document.getElementById(i.id + "k").style.background = "white";
        activeUsers.setUserInUserStore(i);
    };

    function filterUsers() {
        let arr = [];
        arr = activeUsers.usersStore;
        activeUsers.setArrOfUsers(arr.filter(item => item.id !== i.id));
        document.getElementById(i.id).style.color = "black";
        document.getElementById(i.id + "j").style.background = "white";
        document.getElementById(i.id + "k").style.background = "black";
        document.getElementById(i.id + "k").style.background = "-moz-radial-gradient(center, ellipse cover, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 49%, rgba(255,255,255,1) 50%, rgba(255,255,255,1) 51%, rgba(255,255,255,1) 100%)";
        document.getElementById(i.id + "k").style.background = "-webkit-gradient(radial, center center, 0px, center center, 100%, color-stop(0%, rgba(0,0,0,1)), color-stop(49%, rgba(0,0,0,1)), color-stop(50%, rgba(255,255,255,1)), color-stop(51%, rgba(255,255,255,1)), color-stop(100%, rgba(255,255,255,1)))";
        document.getElementById(i.id + "k").style.background = "-webkit-radial-gradient(center, ellipse cover, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 49%, rgba(255,255,255,1) 50%, rgba(255,255,255,1) 51%, rgba(255,255,255,1) 100%)";
        document.getElementById(i.id + "k").style.background = "-o-radial-gradient(center, ellipse cover, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 49%, rgba(255,255,255,1) 50%, rgba(255,255,255,1) 51%, rgba(255,255,255,1) 100%)";
        document.getElementById(i.id + "k").style.background = "-ms-radial-gradient(center, ellipse cover, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 49%, rgba(255,255,255,1) 50%, rgba(255,255,255,1) 51%, rgba(255,255,255,1) 100%)";
        document.getElementById(i.id + "k").style.background = "background: radial-gradient(ellipse at center, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 49%, rgba(255,255,255,1) 50%, rgba(255,255,255,1) 51%, rgba(255,255,255,1) 100%)";
        document.getElementById(i.id + "k").style.filter = "progid:DXImageTransform.Microsoft.gradient( startColorstr='#000000', endColorstr='#ffffff', GradientType=1 )";
    };

    return (
        <div className="f1">
            <h3 id={i.id}>{`${i.firstName} ${i.lastName}`}</h3>
            <p className="pF1">
                <button
                    id={i.id + "k"}
                    className="oBtnNotActive"
                    onClick={filterUsers}
                >
                </button> No active
            </p>
            <p className="pF1">
                <button
                    id={i.id + "j"}
                    className="oBtn"
                    onClick={activeUser}
                >
                </button> Active
            </p>
        </div>
    );
});

export default Form1;