import React from 'react'
import candidatesData from '@/data/candidates.json'
import programsData from "@/data/programs.json"
import darsData from '@/data/institutions.json'
import cp from '@/data/cp.json'
import Results from '@/components/result/Results'

const page = () => {
  const publishedPrograms = programsData.filter((prg : any)=> prg?.publish  == 1 )

  const candidateWithProgram : any = publishedPrograms.map((prg)=>{
    const candidate = cp.filter((c)=> c.prg == prg.code)
    const candidatesWithDetails = candidate.map((cnd)=> {
      return {
         
      cp :  cnd,
       ...candidatesData.find((c)=> c.chest == cnd.code)
      }
    })
    return {
      ...prg,
      candidate: candidatesWithDetails
    }
  })
  

  const darsWithTotalPoints = darsData.map((dars)=>{
    let totalPoints = 0;
    let juniorPoints = 0;
    let seniorPoints = 0;

    candidateWithProgram.map((prg : any)=>{
      prg.candidate.map((cnd : any)=>{
        if(cnd?.dars == dars.name){
          // console.log(cnd?.cp);
          
          totalPoints += cnd?.cp?.pts || 0
          if(prg?.cat == "J"){
            juniorPoints += cnd?.cp?.pts || 0
          }else if(prg?.cat == "S"){
            seniorPoints += cnd?.cp?.pts || 0
          }
        }
      })
    })

    return {
      ...dars,
      totalPoints,
      juniorPoints,
      seniorPoints
    }
  })

  const darsWithTotalPointsSorted = darsWithTotalPoints.sort((a,b)=> b.totalPoints - a.totalPoints)

  console.log(darsWithTotalPointsSorted[0]);
  
  
  const topCandidates = candidatesData.map((cnd)=>{
    let totalPoints = 0;
    let cat = ""

    cp.map((c)=>{
      if(cnd.chest == c.code){
        const prg = programsData.find((p)=> p.code == c.prg)

        if(prg?.publish == 1 && prg?.isGrp != 1){
          cat = c.prg.slice(0,1)
          totalPoints += c?.pts || 0
        }
      
      }
    }
    )
    

    return {
      ...cnd,
      totalPoints,
      cat
    }
  }

  )
    


  const topCandidatesSorted = topCandidates.sort((a,b)=> b.totalPoints - a.totalPoints)

  const top5JuniorCandidates = topCandidatesSorted.filter((cnd)=> cnd.cat == "J").slice(0,5)

  const top5SeniorCandidates = topCandidatesSorted.filter((cnd)=> cnd.cat == "S").slice(0,5)
  // console.log(topCandidatesSorted[0]);





  return (
    <div>
      <Results topTeams={darsWithTotalPointsSorted} programs={candidateWithProgram} 
       topJunior={top5JuniorCandidates} topSenior={top5SeniorCandidates}
      />
    </div>
  )
}

export default page