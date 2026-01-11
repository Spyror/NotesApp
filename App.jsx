import React, { useState } from "react";
import {X} from 'lucide-react'

const App = () => {
  const [title, setTitle] = useState("");
  const [detail, setDetail] = useState("");
  const [task, setTask] = useState([])


  const deleteNote=(idx)=>{
    const copyTask = [...task];
    copyTask.splice(idx,1);
    setTask(copyTask)
  }

  return (
    <>
      <div className='h-screen lg:flex bg-black text-white'>
        <form
          className='flex flex-col lg:w-1/2 gap-4 items-start p-10'
          onSubmit={(e) => {
            e.preventDefault();
            const copyTask = [...task];
            copyTask.push({title,detail});
            
            setTask(copyTask)
            setDetail("");
            setTitle("");
          }}
        >
          <h1 className="text-3xl font-bold">Add Notes</h1>

          <input
            type='text'
            placeholder='Enter Notes Heading'
            className='px-5 w-full font-medium py-2 border-2 outline-none rounded'
            value={title}
            onChange={(e) => {
              setTitle(e.target.value);
            }}
          />
          <input
            type='text'
            placeholder='Write Details'
            className='px-5 font-medium py-2 outline-none w-full h-20 border-2 rounded'
            value={detail}
            onChange={(e) => {
              setDetail(e.target.value);

            }}
          />
          <button
          className='bg-white w-full text-black px-5 font-medium py-2 outline-none rounded'>
            Add Notes
          </button>
        </form>
        <div className='lg:w-1/2 p-10 lg:border-l-2 text-black'>
          <h1 className="text-3xl font-bold">Your Notes</h1>
          <div className="flex flex-wrap items-start justify-start gap-5 mt-5 h-[90%] overflow-auto">
            {task.map((elem,idx)=>{
              return<>
              <div key={idx} className='relative h-52 w-42 py-8 px-4 rounded-2xl bg-cover bg-[url(https://static.vecteezy.com/system/resources/thumbnails/037/152/672/small/sticky-note-paper-background-free-png.png)]'>
              <h1 
              onClick={()=>{
                deleteNote(idx)
              }}
              
              
              className="absolute top-5 right-5 bg-red-500 p-1 rounded-full text-xs cursor-pointer active:scale-95"><X size={16} strokeWidth={2.75} /></h1>
                <h1 className="leading-tight text-xl font-bold">{elem.title}</h1>
                <p className="mt-4 leading-tight font-medium text-gray-500">{elem.detail}</p>
              </div>
              
              </>
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
