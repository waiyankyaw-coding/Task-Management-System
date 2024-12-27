import { useState } from "react";


const Form = ({PostData}) => {
   const [value,setValue] = useState('');
  return( 
     <form className="flex justify-center gap-[15px] mt-[20px] mb-[50px]"onSubmit={(e)=>{
      e.preventDefault();
      const post = {
         title: value,
         id: String( Math.floor(Math.random()*10000)),
         completed: false,
      };
      PostData(post)
      setValue('');
     }}>
        <input type="text" placeholder="Manage your tasks" className="pl-[10px] pt-[5px] pb-[5px] border-[1px] border-[black]
        outline-none w-[300px] rounded-[3px] focus:border-[#1F4690]
        " onChange={(e)=> setValue(e.target.value)} value={value}/>
        <button type="submit" className="bg-[#1F4690] h-[32px] text-[white] 
           w-[64px] rounded-[2px]
        ">Add</button>
    </form>
  )
};
export default Form;