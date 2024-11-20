"use client";
import React, { use, useEffect } from "react";

interface Props {
  program: any;
}
const JdgList = (props: Props) => {
  useEffect(() => {
    console.log(props.program);
  }, []);
  return (
    <div className="p-20 text-sm print:p-2 lg:flex lg:flex-col lg:items-center">
      <div className="flex gap-8   print:gap-20">
        <div>
          <div className="text-center">
            <p className="text-3xl font-bold ">Jamia Dars Fest 2023-&apos;24</p>
            <p className="text-2xl font-bold my-2">Grand Finale</p>
            <h1 className="font-bold mt-2 border-y-2 mb-4 border-black">
              {props.program.name} ({props.program.cat})
            </h1>
          </div>
          <table className="w-full max-w-[700px] border border-slate-800">
            <thead>
              <tr className="print:bg-black print:text-white bg-black text-white">
                <th className="p-1">Sl No</th>
                <th className="p-1">Code</th>
                <th className="p-1">Mark</th>
                <th className="p-1">Grade</th>
                <th className="p-1">Remark</th>
              </tr>
            </thead>
            <tbody>
              {props.program.candidates.map((c: any, i: any) => (
                <tr key={i}>
                  <td className=" border border-slate-800 px-1 text-center w-8">
                    {i + 1}
                  </td>
                  <td className=" border border-slate-800 px-1 text-center w-20">
                    {c.code}
                  </td>
                  <td className=" border border-slate-800 px-1"></td>
                  <td className=" border border-slate-800 px-1"></td>
                  <td className=" border border-slate-800 px-1"></td>
                </tr>
              ))}
              <tr>
                <td className=" border border-slate-800 px-1">&nbsp;</td>
                <td className=" border border-slate-800 px-1"></td>
                <td className=" border border-slate-800 px-1"></td>
                <td className=" border border-slate-800 px-1"></td>
                <td className=" border border-slate-800 px-1"></td>
              </tr>
              <tr>
                <td className=" border border-slate-800 px-1">&nbsp;</td>
                <td className=" border border-slate-800 px-1"></td>
                <td className=" border border-slate-800 px-1"></td>
                <td className=" border border-slate-800 px-1"></td>
                <td className=" border border-slate-800 px-1"></td>
              </tr>
              <tr>
                <td className=" border border-slate-800 px-1">&nbsp;</td>
                <td className=" border border-slate-800 px-1"></td>
                <td className=" border border-slate-800 px-1"></td>
                <td className=" border border-slate-800 px-1"></td>
                <td className=" border border-slate-800 px-1"></td>
              </tr>
              <tr>
                <td className=" border border-slate-800 px-1">&nbsp;</td>
                <td className=" border border-slate-800 px-1"></td>
                <td className=" border border-slate-800 px-1"></td>
                <td className=" border border-slate-800 px-1"></td>
                <td className=" border border-slate-800 px-1"></td>
              </tr>
              <tr>
                <td className=" border border-slate-800 px-1">&nbsp;</td>
                <td className=" border border-slate-800 px-1"></td>
                <td className=" border border-slate-800 px-1"></td>
                <td className=" border border-slate-800 px-1"></td>
                <td className=" border border-slate-800 px-1"></td>
              </tr>
            </tbody>
          </table>
        </div>
        <div>
          <div className="text-center">
            <p className="text-3xl font-bold ">Jamia Dars Fest 2023-&apos;24</p>
            <p className="text-2xl font-bold my-2">Grand Finale</p>
            <h1 className="font-bold mt-2 border-y-2 mb-4 border-black">
              {props.program.name} ({props.program.cat})
            </h1>
          </div>
          <table className="w-full max-w-[700px] border border-slate-800">
            <thead>
              <tr className="print:bg-black print:text-white bg-black text-white">
                <th className="p-1">Sl No</th>
                <th className="p-1">Code</th>
                <th className="p-1">Mark</th>
                <th className="p-1">Grade</th>
                <th className="p-1">Remark</th>
              </tr>
            </thead>
            <tbody>
              {props.program.candidates.map((c: any, i: any) => (
                <tr key={i}>
                  <td className=" border border-slate-800 px-1 text-center w-8">
                    {i + 1}
                  </td>
                  <td className=" border border-slate-800 px-1 text-center w-20">
                    {c.code}
                  </td>
                  <td className=" border border-slate-800 px-1"></td>
                  <td className=" border border-slate-800 px-1"></td>
                  <td className=" border border-slate-800 px-1"></td>
                </tr>
              ))}
              <tr>
                <td className=" border border-slate-800 px-1">&nbsp;</td>
                <td className=" border border-slate-800 px-1"></td>
                <td className=" border border-slate-800 px-1"></td>
                <td className=" border border-slate-800 px-1"></td>
                <td className=" border border-slate-800 px-1"></td>
              </tr>
              <tr>
                <td className=" border border-slate-800 px-1">&nbsp;</td>
                <td className=" border border-slate-800 px-1"></td>
                <td className=" border border-slate-800 px-1"></td>
                <td className=" border border-slate-800 px-1"></td>
                <td className=" border border-slate-800 px-1"></td>
              </tr>
              <tr>
                <td className=" border border-slate-800 px-1">&nbsp;</td>
                <td className=" border border-slate-800 px-1"></td>
                <td className=" border border-slate-800 px-1"></td>
                <td className=" border border-slate-800 px-1"></td>
                <td className=" border border-slate-800 px-1"></td>
              </tr>
              <tr>
                <td className=" border border-slate-800 px-1">&nbsp;</td>
                <td className=" border border-slate-800 px-1"></td>
                <td className=" border border-slate-800 px-1"></td>
                <td className=" border border-slate-800 px-1"></td>
                <td className=" border border-slate-800 px-1"></td>
              </tr>
              <tr>
                <td className=" border border-slate-800 px-1">&nbsp;</td>
                <td className=" border border-slate-800 px-1"></td>
                <td className=" border border-slate-800 px-1"></td>
                <td className=" border border-slate-800 px-1"></td>
                <td className=" border border-slate-800 px-1"></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default JdgList;
