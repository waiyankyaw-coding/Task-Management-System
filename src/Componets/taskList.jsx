import { useState } from "react";
import './tasklist.css';
const TaskList = ({data,error,Delete,Update,filterfun,loading}) => {
const [editId,setEditId] = useState(null);
const [editData,setEditData] = useState('');
const Through = (d)=>{
    const tr = {...d,completed:!d.completed};
   Update(tr)
}
    return (
        <div className="TaskList-con select-none">
         
                
           <div className="">

                <ul className="">

                {filterfun().map((d)=>{
                    return(
                      <div className="flex gap-[20px] justify-center items-center mb-[15px]" key={d.id}>
                      <input type="checkbox" checked={d.completed}  className="" onChange={()=>{
                        Through(d)
                      }}/>
                      { editId !== d.id && <li className={` p-[10px] select-none  w-[420px] shadow shadow-[gray] ${d.completed?'line-through decoration-[1px] bg-[#DCF7EA]':''}`}
                      onDoubleClick={()=>{
                     
                       setEditId(d.id);
                       setEditData(d.title);
                      }}>{d.title}</li>}
                     
                      {editId === d.id && <form onSubmit={(e)=>{
                       e.preventDefault();
                       const updata = {
                          title : editData,
                          id : d.id,
                          completed : d.completed,
                       }
                       Update(updata)
                       setEditId(null);
                       setEditData('');
                      }}> <input type="text" value={editData} className="w-[420px] p-[10px]  h-[44px] border-[1px] border-[#1F4690]
                      outline-none
                      " onChange={(e)=>  setEditData(e.target.value) }/></form> }
                       <button className=" bg-[#1F4690]  h-[32px] w-[64px] text-[white] rounded-[2px]"
                       onClick={()=>{
                         Delete(d.id)
                       }}
                       >Delete</button>
                       </div>
                     );
                })}
                </ul>
       
                </div>
                {loading && <div  className="loading ml-[200px]" >
                       <div className="loading-con flex  items-center gap-[3px]">
                        <div className="">Loading</div>
                        <div className=" c-con flex gap-[8px] mt-[10px]">
                          <div className="w-[5px] h-[5px] bg-[black] rounded-[14px] c-one "></div>
                          <div className="w-[5px] h-[5px] bg-[black] rounded-[14px] c-two"></div>
                          <div className="w-[5px] h-[5px] bg-[black] rounded-[14px] c-three"></div>
                        </div>
                       </div>
                 </div>}
                {error && <div style={{color:'red',marginLeft:"100px"}}>{error}</div>}
               
            
        </div>
    ); 
}; 
export default TaskList;