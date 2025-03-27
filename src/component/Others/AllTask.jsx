import React, { useContext } from 'react'
import { AuthContext } from '../../context/AuthProvider';

const AllTask = () => {

    const [userData, setUserData] = useContext(AuthContext);
    
  return (
    <div className='bg-[1c1c1c] p-5 mt-5 rounded'>
        <div className='bg-red-400 mb-5 py-2 px-4 flex justify-between rounded'>
            <h2 className='text-lg font-medium w-1/5'>Employee Name</h2>
            <h3 className='text-lg font-medium w-1/5'>New Task</h3>
            <h3 className='text-lg font-medium w-1/5'>Active Task</h3>
            <h5 className='text-lg font-medium w-1/5'>Completed</h5>
            <h5 className='text-lg font-medium w-1/5'>Failed</h5>
        </div>
        <div className='overflow-auto'>
            {
                userData.employees.map((e, idx) => {
                    return(
                        <div key={idx} className='border-rose-300 border mb-2 py-2 px-4 flex justify-between rounded'>
                            <h2 className='text-lg font-medium w-1/5'>{e.firstname}</h2>
                            <h3 className='text-lg font-medium w-1/5 text-sky-400'>{e.taskNumbers.newTask}</h3>
                            <h3 className='text-lg font-medium w-1/5 text-blue-600'>{e.taskNumbers.active}</h3>
                            <h5 className='text-lg font-medium w-1/5 text-green-600'>{e.taskNumbers.completed}</h5>
                            <h5 className='text-lg font-medium w-1/5 text-red-600'>{e.taskNumbers.failed}</h5>
                        </div>
                    )
                })
            }
        </div>
    </div>
  )
}

export default AllTask;