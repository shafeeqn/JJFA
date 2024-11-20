import Link from "next/link";
import React from "react";

interface Props {
  program: any;
}

const PrgList = (props: Props) => {
  return (
    <div className="p-20 print:p-2 lg:flex lg:flex-col lg:items-center">
      <div className="text-center">
        <p className="text-3xl font-bold ">Jamia Dars Fest 2023-&apos;24</p>
        <p className="text-2xl font-bold my-2">Grand Finale</p>

        <h1 className="font-bold mt-2 border-y-2 mb-4 border-black">
          {props.program?.code} - {props?.program?.name} - (
          {props.program?.cat == "J" ? "Junior" : "Senior"})
        </h1>
      </div>

      <table className="m-3">
        <thead>
          <tr className="print:bg-black print:text-white bg-black text-white">
            <th className="p-1">Sl No</th>
            <th className="p-1">Code</th>
            <th className="p-1">Name </th>
            <th className="p-1">Dars Place</th>
            <th className="p-1">Mark</th>
            <th className="p-1">Grade</th>
            <th className="p-1">Remarks</th>
          </tr>
        </thead>
        <tbody>
          {props.program?.candidates.map((v: any, i: number) => (
            <tr key={i} className="">
              <td className="px-1 text-center w-8 border ">{i + 1}</td>
              <td className="px-1 text-center w-10 border">{v.code}</td>
              <td className="px-1 w-72 border">
                {v.name?.length > 24 ? v.name?.slice(0, 20) + ".." : v.name}
              </td>
              <td className="px-1 w-80  border">
                {v.dars?.length > 24 ? v.dars?.slice(0, 25) + ".." : v.dars}
              </td>
              <td className="px-1 w-10 border"></td>
              <td className="px-1 w-8 border"></td>
              <td className="px-1 w-8 border"></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default PrgList;
