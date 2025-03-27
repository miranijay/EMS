import React from "react";
import Header from "../Others/Header.jsx";
import TaskListNUmber from "../Others/TaskListNUmber.jsx";
import TaskList from "../TaskList/TaskList.jsx";

export default function EmployeeDashboard({data, changeUser}) {

    return(
        <div className="p-10 bg-[#1c1c1c] h-screen ">
             <Header data={data} changeUser={changeUser} />
             <TaskListNUmber data={data} />
             <TaskList data={data} />
        </div>
    )
}