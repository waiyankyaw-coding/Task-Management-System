
import './App.css';
import Form from './Componets/form';
import TaskList from './Componets/taskList';
import CheckAllAndDeleteAll from './Componets/checkAllandDeleteAll';
import FilterList from './Componets/filterList';
import { useEffect,useState } from 'react';


function App() {
     const [data,setData] = useState([]);
     const [error,setError] = useState('');
     const [loading,setLoading]=useState(true);
     const [filterData,setFilterData]= useState([data]);
     const [filterstatus,setfilterstatus] = useState('all')
 useEffect(()=>{
     fetch("http://localhost:3020/tasks").then((res)=>{
        if (!res.ok){
          throw new Error(`${res.statusText} and ${res.status}`)
        }
        return res.json()
     }).then((data)=>{
         setData(data);
         setFilterData(data)
     }).catch((err)=>{
         setError(err.message); 
     }).finally(()=>{setLoading(false)})
 },[]);

 const PostData = (post) => {
     fetch('http://localhost:3020/tasks',{
          method: "POST",
          headers : {
            "Content-type" : "application/json"
           },
          body: JSON.stringify(post),
     })
     setData((p)=>[...p,post])//client side post
 };
 const Delete = (id) => {
  fetch (`http://localhost:3020/tasks/${id}`,{
    method: "DELETE",

  })

   setData((p)=>p.filter((f)=> f.id !== id)) //client
 };

const Update = (up)=>{
fetch(`http://localhost:3020/tasks/${up.id}`,{
    method:"PATCH",
    headers : {
        "Content-type" : "application/json"
       },
       body : JSON.stringify(up)
})

  setData((p)=>p.map((d)=>{
     if(d.id === up.id){return up}else{return d}
  }))  
};
const CheckAll = ()=>{

  data.forEach((d)=>{
    d.completed = true;
    fetch(`http://localhost:3020/tasks/${d.id}`,{
        method:"PATCH",
        headers : {
            "Content-type" : "application/json"
           },
           body : JSON.stringify(d)
    })
  })

    setData((p)=> p.map((d)=> {return{...d,completed:true};}))
   
};
const ClearComplete = ()=> {
  data.forEach((d)=>{
    
    d.completed && fetch (`http://localhost:3020/tasks/${d.id}`,{
      method: "DELETE",
  
    })
  })

  setData((p)=>p.filter((f)=> f.completed === false) )
};

const remaining = data.filter((f)=> !f.completed).length;//remaining

const Filtering = () => {
if (filterstatus==="active"){ return data.filter(f => !f.completed)};
if (filterstatus==="complete"){ return data.filter(f => f.completed)}
return data


};

 return (
      <div className='outtest-con '>
      <div className='main-con flex justify-center '>
      <div className='w-[600px]  bg-[#F7FAFC] mt-[90px] shadow-lg'> 
      <h2 className='p-[20px] text-[1.8vw] font-[550] '>Task Management System</h2>
      <Form PostData={PostData}/>
      <TaskList data={data} filterfun= {Filtering} error={error} Delete={Delete} Update={Update}
      loading={loading} 
      />
      <CheckAllAndDeleteAll CheckAll={CheckAll} ClearComplete={ClearComplete}/>
      <FilterList  remain={remaining} set={setfilterstatus}/>
      </div>
      </div>
      </div>
 );
}

export default App;
