import React from 'react'
import programsData from "@/data/programs.json"
import candidatesData from "@/data/candidates.json"
import cp from "@/data/cp.json"
import PrgList from '@/components/programs/PrgList'

const page = ({ params }: { params: { code: string } }) => {
    const code = params.code

    const program = programsData.find((prg)=> prg.code == code)

    const programWithCandidates = cp.filter((cnd)=> cnd.prg == code).map((cnd)=>{

      return {
        ...cnd,
        ...candidatesData.find((c)=> c.chest == cnd.code)
      }
    })

    const cpWithProgram = {
      ...program,
      candidates : programWithCandidates
    }

  return (
    <div>
      <PrgList program={cpWithProgram}/>
    </div>
  )
}

export default page