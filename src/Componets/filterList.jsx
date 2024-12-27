import { useState,useRef,useEffect } from "react";
const FilterList = ({remain,set})=>{
    const [allwidth,setAllwisth] = useState('');
    const [activeWidth,setActiveWidth]= useState('');
    const [completeWidth,setCompleteWidth] = useState('');
    
    const allref = useRef();
    const activeref = useRef()
    const completedref = useRef();
    const lineref = useRef();
     useEffect(()=>{
        setAllwisth(allref.current.offsetWidth);
        setActiveWidth(activeref.current.offsetWidth);
        setCompleteWidth(completedref.current.offsetWidth)
       
     },[]);
    
     
    return(
        <div className="filterlist-con mb-[50px] mt-[0px] relative">
              <div className="bg-[black] w-[100%] h-[0.5px]"></div>
            <div className="flex justify-between ml-[50px] mt-[15px] ">
            <div className=" flex gap-[20px]  ">
            <button ref={allref} onClick={()=>{
               set("all")
             lineref.current.style.width = `${allwidth}px`;
             lineref.current.style.marginLeft= `${allref.current.offsetLeft}px`;
             allref.current.style.color = 'red';
             activeref.current.style.color = 'black';
             completedref.current.style.color = 'black';
             
            
            }}>All</button>
                <button ref={activeref} onClick={()=>{
                    set("active")
                     lineref.current.style.width = `${activeWidth}px`
                     lineref.current.style.marginLeft= `${activeref.current.offsetLeft}px`;
                     activeref.current.style.color = 'red';
                     allref.current.style.color = 'black';
                     completedref.current.style.color = 'black';
                     
                }}>Active</button>
                <button ref={completedref} onClick={()=>{
                    set("complete")
                     lineref.current.style.width = `${completeWidth}px`;
                     lineref.current.style.marginLeft = `${completedref.current.offsetLeft}px`;
                     completedref.current.style.color = 'red';
                     allref.current.style.color = 'black';
                     activeref.current.style.color = 'black';
                }}>Completed</button>
            </div>
            <div className="mr-[30px]"><span> {remain} task{remain > 1 ? 's': ""} remaining</span></div>
            </div>
           {<div className={`bg-[#1F4690] w-[0%]  h-[1px] ml-[50px] transition-all duration-[.3s] ease-in mt-[2px]`}  ref={lineref}></div>}

        </div>
    );
};
export default FilterList;