import React, { useContext, useEffect, useState } from "react";
import Login from "./component/Auth/Login.jsx";
import EmployeeDashboard from "./component/Dashboard/EmployeeDashboard.jsx";
import AdminDashboard from "./component/Dashboard/AdminDashboard.jsx";
import { getLocalStorage, setLocalStorage } from "./Utils/localStorage.jsx";
import { AuthContext } from "./context/AuthProvider.jsx";

function App() {

  const [user, setUser] = useState(null);
  const [loggedInUserData, setLoggedInUserData] = useState(null);

  const [userData, setUserData] = useContext(AuthContext);

  useEffect(() => {
    if(userData){
      const loggegInUser = localStorage.getItem('loggedInUser');
      if(loggegInUser){
        const userDataLogged = JSON.parse(loggegInUser);
        setUser(userDataLogged.role);
        setLoggedInUserData(userDataLogged.data);
      }
    }
  },[userData])

  const handleLogIn = (email, password) => {
    if(userData){
      const admin = userData.admin.find((e) => e.email === email && e.password === password);
      const employee = userData.employees.find((e) => e.email === email && e.password === password);
      if(admin) {
        setUser('admin');
        setLoggedInUserData(admin);
        localStorage.setItem('loggedInUser', JSON.stringify({role : 'admin', data: admin}));
      } else if(employee){
        setUser('employee')
        setLoggedInUserData(employee);
        localStorage.setItem('loggedInUser', JSON.stringify({role : 'employee', data: employee}));
      }
    }
    else{
      alert("Invalid credentials");
    }
  }

  return (
    <>
      { !user ? <Login handleLogIn={handleLogIn} /> : '' }
      { user === 'admin' ? <AdminDashboard data={loggedInUserData} changeUser={setUser} /> 
          : (user === 'employee' ? <EmployeeDashboard data={loggedInUserData} changeUser={setUser} /> : '') }
    </>
  )
}

export default App;