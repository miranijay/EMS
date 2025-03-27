import React from 'react'

const TaskListNUmber = ({data}) => {
  return (
    <div className=' mt-10 flex justify-between gap-5'>
        <div className='w-[45%] px-9 py-6 bg-red-300 rounded-xl'>
            <h2 className='text-3xl font-semibold'>{data.taskNumbers.newTask}</h2>
            <h3 className='text-xl font-medium '>New Task</h3>
        </div>
        <div className='w-[45%] px-9 py-6 bg-green-400 rounded-xl'>
            <h2 className='text-3xl font-semibold'>{data.taskNumbers.completed}</h2>
            <h3 className='text-xl font-medium '>Completed Task</h3>
        </div>
        <div className='w-[45%] px-9 py-6 bg-blue-300 rounded-xl'>
            <h2 className='text-3xl font-semibold'>{data.taskNumbers.active}</h2>
            <h3 className='text-xl font-medium '>Accepted Task</h3>
        </div>
        <div className='w-[45%] px-9 py-6 bg-amber-500 rounded-xl'>
            <h2 className='text-3xl font-semibold'>{data.taskNumbers.failed}</h2>
            <h3 className='text-xl font-medium '>Failed Task</h3>
        </div>
    </div>
  )
}

export default TaskListNUmber;
