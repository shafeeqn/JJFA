import React, { useEffect, useState } from "react";
import CP from "@/data/cp.json";
import programs from "@/data/programs.json";

interface Props {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
  selectedCandidate: any;
  setSelectedCandidate: (candidate: any) => void;
}

const ViewCandidate = (props: Props) => {
  const [cp, setCp] = useState<[]>([]);

  useEffect(() => {
    const cpOfc = CP.filter(
      (cp) => cp.code === props?.selectedCandidate?.chest
    );
    setCp(cpOfc as any);
  }, [props.selectedCandidate, props.isOpen]);

  return (
    <div
      className={`
    ${props.isOpen ? "fixed" : "hidden"}
    `}
    >
      {/* a modal for view detailed candidate */}

      <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 z-10 flex justify-center items-center">
        <div className="w-1/3 bg-white shadow-black border rounded-md">
          <div
            className="cursor-pointer"
            onClick={() => {
              props.setIsOpen(false);
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18 18 6M6 6l12 12"
              />
            </svg>
          </div>

          {/* details here */}
          <p className="text-xl font-bold text-primary">Candidate Details</p>
          <p className="text-lg font-bold text-primary">
            {props.selectedCandidate?.name}
          </p>
          <p className="text-lg font-bold text-primary">
            {props.selectedCandidate?.dars}
            </p>
          {cp &&
            cp.map((c: any, index) => {
              const prgData = programs.find((prg) => prg.code === c.prg);
              console.log(prgData);

              return (
                <div
                  className="
      border border-primary rounded-md p-2 m-2
      "
                >
                  {/* <p className="text-lg font-bold text-primary">Name: {props.selectedCandidate?.name}</p>
      <p className="text-lg font-bold text-primary">Chest No: {props.selectedCandidate?.chest}</p> */}
                  <p className="text-lg font-bold text-primary">
                    {prgData?.name}
                  </p>
                  <p className="text-lg font-bold text-primary">{c.prg}</p>
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
};

export default ViewCandidate;
