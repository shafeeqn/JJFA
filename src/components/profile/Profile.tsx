"use client";
import React, { useState } from "react";
import ProgramResult from "./ProgramResult";

interface Props {
  candidate: any;
}

const Profile = (props: Props) => {
  const [programResultView, setProgramResultView] = useState<boolean>(false);
  const [selectedCP, setSelectedCP] = useState<any>();
  return (
    <>
      {props.candidate.name ? (
        <div className="flex flex-col justify-center items-center my-10 px-10 w-full">
          <p className="font-semibold bg-yellow px-2 py-1 rounded-md text-lg -mb-5 z-50">
            Details
          </p>
          <div className="flex flex-col items-center border-2 border-yellow p-5 rounded-xl">
            <p className="font-semibold text-xl text-center">
              {props?.candidate?.chest}
            </p>
            <p className="font-semibold text-xl text-center">
              {props?.candidate?.name}
            </p>
            <p className="font-semibold text-xl text-center">
              {props?.candidate?.programs[0].cat == "J" ? "Junior" : "Senior"}
            </p>
            <p className="font-semibold text-xl text-center">
              {props?.candidate?.dars}
            </p>
            <p className="font-semibold text-xl text-center">
              Total Points :{" "}
              <span className="text-2xl font-bold">
                {props?.candidate?.programs?.reduce((a: any, b: any) => {
                    if (b?.publish == 1 && b?.isGrp != 1) {
                        return a + (b?.pts as unknown as number) || 0;
                      } else {
                        return a + 0;
                      }
                
                }, 0)}
              </span>
            </p>
          </div>
          {(props.candidate?.programs as any[]).length > 0 && (
            <>
              <p className="font-semibold text-2xl mt-5">Programs</p>
              <div className="flex flex-col items-center mt-3 rounded-xl gap-2">
                {props.candidate.programs?.map((prg: any) => (
                  <p
                    onClick={() => {
                      setSelectedCP(prg as any);
                      setProgramResultView(true);
                    }}
                    className="font-semibold text-xl border-2 border-primary border-dashed rounded-xl p-2 w-full text-center cursor-pointer"
                  >
                    {prg.code} <br />
                    {prg.name}
                  </p>
                ))}
              </div>
            </>
          )}
        </div>
      ) : (
        <div className="flex flex-col justify-center items-center my-10 px-10 w-full">
          <p className="font-semibold bg-yellow px-2 py-1 rounded-md text-lg -mb-5 z-50">
            Details
          </p>
          <div className="flex flex-col items-center border-2 border-yellow p-5 rounded-xl">
            <p className="font-semibold text-xl text-center">
              No Candidate Found
            </p>
          </div>
        </div>
      )}
      <ProgramResult
        name={props.candidate.name}
        selectedCP={selectedCP as any}
        programResultView={programResultView}
        setProgramResultView={setProgramResultView}
      />
    </>
  );
};

export default Profile;
