
const CheckAllAndDeleteAll = ({CheckAll,ClearComplete}) => {
    return(
        <div className="checkallanddeleteall-con mt-[40px]">
            <div className="bg-[black] w-[100%] h-[0.5px]"></div>
            <div className="flex justify-between ml-[50px] mr-[50px] mb-[15px] mt-[15px]">
                <button className="bg-[#1F4690] h-[32px] w-[64px] rounded-[2px] text-[1vw] text-[white] "
                onClick={()=>{
                    CheckAll()
                }}
                >Check All</button>
                <button className="bg-[#1F4690] h-[32px] w-[110px] rounded-[2px] text-[1vw] text-[white] " 
                onClick={()=>{
                    ClearComplete()
                }}
                >Clear Completed</button>
            </div>
        </div>
    );
};
export default CheckAllAndDeleteAll;