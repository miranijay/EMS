import React from 'react'
import AcceptTask from './AcceptTask.jsx';
import NewTask from './NewTask.jsx';
import CompleteTask from './CompleteTask.jsx';
import FailedTask from './FailedTask.jsx';

const TaskList = ({data}) => {
  return (
    <div id='tasklist' className='mt-10 overflow-x-auto flex items-center justify-start gap-5 flex-nowrap w-full py-5 h-[55%]'>
        { data.tasks.map((elem, idx) => {
            
            if(elem.newTask){
                return <NewTask key={idx} data={elem}/>
            }
            if(elem.completed) {
                return <CompleteTask key={idx} data={elem} />
            }
            if(elem.active) {
                return <AcceptTask key={idx} data={elem} />
            }
            if(elem.failed) {
                return <FailedTask key={idx} data={elem}/>
            }
        })}
    </div>
  )
}

export default TaskList;