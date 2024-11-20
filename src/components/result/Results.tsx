import React from "react";
import TeamsList from "./TeamsList";
import ProgramsList from "./ProgramsList";

interface Props {
  topTeams: any;
  programs: any;
  topJunior: any;
  topSenior: any;
}

const Results = (props: Props) => {
  return (
    <>
      <div className="flex flex-col lg:flex-row w-full md:h-screen items-center p-5">
        <div className="flex flex-col h-[90vh] min-w-[300px] rounded-3xl gap-4 p-3 ">

        <TeamsList topTeams={props.topTeams} />

        </div>

        <ProgramsList programs={props.programs} />
      </div>
      <div className="flex flex-col lg:flex-row mt-60 lg:mt-8">
        <div>
          <p className="font-bold text-xl text-center">Junior Toppers</p>
          <div className="flex flex-wrap p-3 overflow-x-scroll gap-2">
            {props.topJunior?.length > 0 ? (
              props.topJunior.map((topper: any) => (
                <div className="hover:bg-ysmoke p-3 border rounded-md w-full">
                  <p className="text-sm bg-yellow inline font-semibold p-1 rounded-md">
                    {topper.chest}
                  </p>
                  <p className="font-bold">{topper.name}</p>
                  <p className="text-3xl font-bold">{topper.totalPoints} pts</p>
                  <p className="text-sm uppercase">Junior | {topper.dars}</p>
                </div>
              ))
            ) : (
              <div className="flex flex-col items-center justify-center h-full">
                {/* <p className="text-2xl font-bold text-primary">
                    No Results Published.
                  </p> */}
              </div>
            )}
          </div>
        </div>

        <div>
          <p className="font-bold text-xl text-center">Senior Toppers</p>
          <div className="flex flex-wrap p-3 overflow-x-scroll gap-2">
            {props.topSenior?.length > 0 ? (
              props.topSenior.map((topper: any) => (
                <div className="hover:bg-ysmoke p-3 border rounded-md w-full">
                  <p className="text-sm bg-yellow inline font-semibold p-1 rounded-md">
                    {topper.chest}
                  </p>
                  <p className="font-bold">{topper.name}</p>
                  <p className="text-3xl font-bold">{topper.totalPoints} pts</p>
                  <p className="text-sm uppercase">Junior | {topper.dars}</p>
                </div>
              ))
            ) : (
              <div className="flex flex-col items-center justify-center h-full">
                {/* <p className="text-2xl font-bold text-primary">
                    No Results Published.
                  </p> */}
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Results;
