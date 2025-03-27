import React from 'react'
import Header from '../Others/Header.jsx';
import CreateTask from '../Others/CreateTask.jsx';
import AllTask from '../Others/AllTask.jsx';

const AdminDashboard = ({data, changeUser}) => {
  return (
    <div className='h-screen w-full p-7'>
        <Header data={data} changeUser={changeUser} />
        <CreateTask />
        <AllTask />
    </div>
  )
}

export default AdminDashboard;
