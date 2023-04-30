import Skill_list from "./skillsdata";
import Image from "next/image";
const Skills = () =>{
  return(
    <div className='w-full h-auto py-12 px-6'>
      <div className="grid md:grid-cols-3 gap-10">
        {Skill_list.map((skill)=>{
          const {id,name,pic} = skill;
          return(
            <div key={id} className="text-center shadow-2xl p-10 rounded-xl my-10">
              <Image src={pic} alt='logo' width={200} height={100} objectFit="cover" className="justify-center" />
              <h1 className="text-2xl text-red-500 font-semibold pt-8 pb-2">{name}</h1>
            </div>
          )
        })}
      </div>
    </div>
  )
}
export default Skills;