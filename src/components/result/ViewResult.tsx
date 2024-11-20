"use client"
import React, { useEffect, useState } from "react";

interface Props {
  selectedProgram: any;
  resultView: boolean;
  setResultView: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function ViewResult(props: Props) {
  const [sorted,setSorted] = useState<any[]>(
    props.selectedProgram?.candidate?.sort((a : any,b : any)=>b?.cp.pts as number - ( a?.cp.pts  as number)
  ) as any[])

  useEffect(()=>{
    setSorted(
    props.selectedProgram?.candidate?.sort((a : any,b : any)=>b?.cp.pts as number - ( a?.cp.pts  as number) ) as any[]
    )
  },[
    props.selectedProgram
  ])

  return (
    <div
      className={`fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center  items-center  ${
        props.resultView ? "block" : "hidden"
      } `}
    >

     

      <div className="bg-white relative p-3 rounded-xl flex flex-col gap-2 items-center min-w-[400px]  max-w-[400px] max-h-[95vh] text-center  overflow-auto">
      
      <p className="text-sm bg-orange inline font-semibold p-1 rounded-md">{props?.selectedProgram?.code}</p>
      <p className="text-md font-bold">{props.selectedProgram?.name}</p>
      <p className="text-md font-bold">{props.selectedProgram?.cat == "J" ? "Junior" : "Senior" }</p>


      { 
        sorted?.length > 0 ? sorted?.map((cp : any)=>(
        //   <div className=" flex flex-col items-center justify-center border-2 rounded-md  border-black border-dashed">
        //   <p className="text-2xl font-semibold">{cp?.candidate?.name}</p>
        //   <p className="text-xl font-semibold">{cp?.candidate?.team?.name}</p>
        //   <div className="flex gap-3 ">
        //   <p className="text-xl font-semibold">{cp?.zonalpoint}</p> 
        //   <p className="text-xl font-semibold">{cp?.zonalposition?.name}</p> 
        //   <p className="text-xl font-semibold">{cp?.zonalgrade?.name}</p> 
        //   </div>
        // </div>
          cp?.cp?.pts > 0 &&
          <div className="hover:bg-ysmoke p-3 border rounded-md w-full">
          <p className="text-sm bg-yellow inline font-semibold p-1 rounded-md">{cp?.chest}</p>
          <p className=" text-md font-bold">{cp?.name}</p>
          <p className="text-sm">{cp?.dars}</p>
            <div className="flex gap-2 w-full items-center justify-center h-full">
          <p className="text-sm bg-yellow inline font-semibold p-1 rounded-md">{cp?.cp.pts} pts</p> 
          <p className="text-sm bg-yellow inline font-semibold p-1 rounded-md">{cp?.cp?.position || "NIL"}</p> 
         <p className="text-sm bg-yellow inline font-semibold p-1 rounded-md">{cp?.cp?.grade || "NIL"}</p> 
          </div>
        </div>
        ))
        : 
        <div className="flex flex-col items-center justify-center h-full">
          <p className="text-2xl font-bold text-primary">No Results To view</p>
          <p className="text-lg font-semibold text-primary">Please wait for the results to be published...</p>
        </div>
      }


<button
          className="bg-primary text-white rounded-full p-2  absolute top-4 right-4"
          onClick={() => {
            props.setResultView(false);
            // console.log(props.resultView);
          }}
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
</svg>

        </button>
      </div>
    </div>
  );
}