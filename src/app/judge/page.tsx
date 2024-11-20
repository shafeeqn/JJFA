
import Judge from "@/components/programs/Judge";
import Programs from "@/components/programs/Programs";
import programsData from "@/data/programs.json";

const page = ({ params, searchParams }: any) => {
  const search = searchParams?.search || "";
  return (
    <div>
      <Judge
        programs={
          programsData
            .filter(
              (prg) =>
                prg.code.toLowerCase().includes(search.toLowerCase()) ||
                prg.name.toLowerCase().includes(search.toLowerCase())
            )
            .slice(0, 75) as any
        }
      />
    </div>
  );
};

export default page;
