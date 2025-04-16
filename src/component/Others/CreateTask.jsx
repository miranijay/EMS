import React, { useContext, useState } from 'react'
import { AuthContext } from '../../context/AuthProvider';

const CreateTask = () => {

    const {userData, setUserData} = useContext(AuthContext);

    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [date, setDate] = useState('');
    const [assignTo, setAssignTo] = useState('');
    const [category, setCategory] = useState('');

    const[newTask, setNewTask] = useState({});

    const handleSubmit = (e) => {
        e.preventDefault();

        setNewTask({title, description, date, assignTo, category, active: false, newTask: true, completed: false, failed: false});

        const data = userData.employees;

        data.forEach((elem) => {
            if(assignTo === elem.firstname){
                elem.tasks.push(newTask);
                elem.taskNumbers.newTask +=1;
            }
        });
        setUserData({...userData, employees: data});
        console.log(userData.employees);

        setTitle('');
        setDescription('');
        setDate('');
        setAssignTo('');
        setCategory('');
    }

  return (
    <div className='p-5 bg-[#1c1c1c] mt-7 rounded'>
        <form onSubmit={(e) => handleSubmit(e)} className='flex flex-wrap w-full items-start justify-between '>
            <div className='w-1/2'>
                <div>
                    <h3 className='text-sm text-gray-300 mb-0.5'>Task Title :</h3>
                    <input 
                        type="text" 
                        placeholder='Enter Title' 
                        className='text-sm py-1 px-2 w-4/5 rounded outline-none border-[1px] border-gray-400 mb-4'
                        required  
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                    />
                </div>
                <div>
                    <h3 className='text-sm text-gray-300 mb-0.5'>Date</h3>
                    <input 
                        type="date"
                        className='text-sm py-1 px-2 w-4/5 rounded outline-none border-[1px] border-gray-400 mb-4'
                        required
                        value={date}
                        onChange={(e) => setDate(e.target.value)}
                    />
                </div>
                <div>
                    <h3 className='text-sm text-gray-300 mb-0.5'>Assign to</h3>
                    <input 
                        type="text"    
                        placeholder='Employee Name'
                        className='text-sm py-1 px-2 w-4/5 rounded outline-none border-[1px] border-gray-400 mb-4'
                        required 
                        value={assignTo}
                        onChange={(e) => setAssignTo(e.target.value)}
                    />
                </div>
                <div>
                    <h3 className='text-sm text-gray-300 mb-0.5'>Category</h3>
                    <input 
                        type="text" 
                        placeholder='design, dev, etc' 
                        className='text-sm py-1 px-2 w-4/5 rounded outline-none border-[1px] border-gray-400 mb-4'
                        required
                        value={category}
                        onChange={(e) => setCategory(e.target.value)}
                    />
                </div>
            </div>
            
            <div className='w-2/5 flex flex-col items-start'>
                <h3 className='text-sm text-gray-300 mb-0.5'>Description</h3>
                <textarea 
                    name="" id="" 
                    cols={30} rows={10}
                    className='w-full h-44 text-sm py-2 px-4 rounded outline-none border-[1px] border-gray-400'
                    required
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                >
                </textarea>
                <button className='bg-emerald-500 py-3 hover:bg-emerald-600 px-5 rounded text-sm mt-4 w-full'>Create Task</button>
            </div>
        </form>
    </div>
  )
}

export default CreateTask;