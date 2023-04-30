import project_list from './projectdata.js';
import Image from 'next/image';

const Projects = () =>{
  return(
    <div className='w-full h-auto py-12 px-6'>
      <div className='grid lg:grid-cols-3 gap-10 '>
        {project_list.map((project) => {
          const {id,name,desc,link,pic} = project;

          return(
            <div key={id} className='text-center shadow-2xl p-10 rounded-xl my-10 md:w-[96] '>
              <Image src={pic} alt={name} width={500} height={500}/>
              <h3 className='text-2xl text-red-500 font-semibold pt-8 pb-2'>{name}</h3>
              <p className='py-2 mb-2 text-xl text-white font-medium'>{desc}</p>
              <button className='rounded-md border-none bg-gradient-to-r from-blue-500 to-indigo-500 text-white font-medium p-2'>
                <a href={link}>Github Link</a>
              </button>
              </div>
            )})}
        </div>
      </div>
  )
}
export default Projects;