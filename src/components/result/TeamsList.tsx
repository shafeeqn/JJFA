"use client";
import React from 'react'

interface Props {
    topTeams: any;
    }

function TeamsList(props: Props) {
    const [search, setSearch] = React.useState("")
    const [filteredTeams, setFilteredTeams] = React.useState(props.topTeams)
  return (
    <>
     {/* search */}

    <div className='flex gap-1 justify-center cursor-pointer w-full' >
    <input
              type="text"
              className="rounded-full px-3 h-10
               border-yellow border-dashed border-2 w-full"
              placeholder="Search Dars Here"
              onChange={(e) => {
                setSearch(e.target.value)
                setFilteredTeams(props.topTeams.filter((team: any)=> team.name.toLowerCase().includes(e.target.value.toLowerCase())))
            }}
              required
            />
        <div className="bg-yellow rounded-full w-10 h-10">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="16"
                className="m-auto mt-3 "
                width="16"
                viewBox="0 0 512 512"
              >
                <path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z" />
              </svg>
            </div>
    </div>


     <div className="flex flex-col gap-2  items-center overflow-y-auto">
            {filteredTeams?.length > 0 ? (
              filteredTeams.map(
                (team: any, index: number) =>
                  team.totalPoints > 0 && (
                    <div key={index} className="flex border hover:bg-ysmoke w-full p-4 transition-colors duration-300 rounded-lg">
                      <div className="flex flex-col w-3/6 gap-1">
                        <p className="font-bold text-lg">#{index + 1}</p>
                        <div className="flex items-end">
                          <span className="font-bold text-4xl text-browner">
                            {team.totalPoints}
                          </span>
                        </div>
                        <p className="font-semibold text-xs">{team.name}</p>
                      </div>
                      <div className="flex flex-col justify-center w-3/6 text-xs font-semibold whitespace-nowrap gap-1">
                        <p>
                          <span className="bg-yellow px-2 rounded-full">
                            Junior : {team.juniorPoints}
                          </span>
                        </p>

                        <p>
                          <span className="bg-yellow px-2 rounded-full">
                            Senior : {team.seniorPoints}
                          </span>
                        </p>
                      </div>
                    </div>
                  )
              )
            ) : (
              <div className="flex flex-col items-center justify-center h-full">
                <p className="text-2xl font-bold ">No Results Published.</p>
              </div>
            )}
          </div>
          </>
  )
}

export default TeamsList