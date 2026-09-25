import React from 'react'

const Demo3 = () => {
  return (
    <div className='bg-slate-950 min-h-screen p-8 text-white flex flex-col gap-8'>
      

        <div className='bg-slate-900 border-slate-800 rounded-xl p-6 flex items-center justify-center'>
            <p className='text-sky-400 font-semibold'>
            Centered with: flex items-center justify-center
            </p>
        </div>

            <div className='bg-yellow-950 border-rose-300 rounded-2xl mt-2 flex items-center  justify-between p-4 '>
                <span className='text-green-400 font-bold hover:text-green-500'>Ayush</span>
                <div className='bg-yellow-850 flex gap-4 '>
                    <span className='text-green-400 font-semibold hover:text-green-500'>Skills</span>
                    <span className='text-green-400 font-semibold hover:text-green-500'>Projects</span>
                    <button className='bg-yellow-600 px-2 py-1 rounded-lg text-green-950 font-semibold hover:text-yellow-600 hover:bg-green-950'>
                        Follow
                        </button>
                </div>
            </div>


            <div className="bg-slate-900 border border-slate-800 rounded-xl p-4 flex items-center gap-4">
        <div className="text-3xl">☕</div>
        <div>
          <h4 className="font-bold text-white">Java Spring Boot</h4>
          <p className="text-sm text-slate-400">Layered Architecture & REST APIs</p>
        </div>
        <span className="ml-auto text-xs bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 px-2.5 py-1 rounded-full">
          Active
        </span>
      </div>

    </div>
  )
}

export default Demo3
