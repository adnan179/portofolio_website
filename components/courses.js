import React from 'react';
import course_List from './coursedata';

const Courses = () => {

  return (
    <div>
      <h1 className='font-semibold text-2xl text-red-500 cursor-pointer'>COURSES &amp; CERTIFICATES</h1>
      <div className='w-full h-[2px] bg-red-500'></div>
      <div className='py-2 px-2'>
        {course_List.map((course) =>{
          const{id,name,link} = course;

          return(
            <div key={id}>
              <h2 className='font-medium text-white pb-1'>
                <a href={link}>{name}</a>
              </h2>
              <div className='w-full h-[1px] bg-gray-700'></div>
            </div>
          )
        })}
      </div>
    </div>

  )
}

export default Courses;
