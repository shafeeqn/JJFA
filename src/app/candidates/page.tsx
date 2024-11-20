import React from "react";
import candidatesData from "@/data/candidates.json";
import Candidate from "@/components/candidates/Candidate";
import cpData from "@/data/cp.json";
import programsData from "@/data/programs.json";

const page = ({ params, searchParams }: any) => {
  const search = searchParams?.search || "";
  const chestNo = searchParams?.chestNo || "";

  return (
    <div>
      <Candidate
        candidates={
          candidatesData
            .filter((candidate) =>
              candidate.name.toLowerCase().includes(search.toLowerCase()) ||
              (candidate.chest+"").toLowerCase().includes(search.toLowerCase())

            )
            .slice(0, 12) as any
        }
      />
    </div>
  );
};

export default page;
