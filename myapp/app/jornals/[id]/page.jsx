import Loading from '@/app/loading'
import { notFound } from 'next/navigation'
import { Suspense } from 'react'




const getOneJornal = async(id)=>{
  await new Promise((resolve) => setTimeout(resolve,3000))
  const res = await fetch(`http://localhost:4000/journals/${id}`)
  if(!res.ok){
      notFound()
  }
   return res.json()
}

export default async function page({params}) {
  const item = await getOneJornal(params.id)

  return (
    <main className='details'>
    <Suspense fallback={<Loading/>}>
    <table className="table">
    <thead className="head">
      <tr className="head-ligne">
        <th>Date</th>
        <th>Horraires</th>
        <th>Classes</th>
        <th>Leson</th>
        <th>Observation</th>
      </tr>
    </thead>
    <tbody className="table-body">
      <tr className="body-ligne">
        <th>{item.date}</th>
        <th>
          {item.debut} / {item.fin}
        </th>
        <th>{item.classe}</th>
        <th>{item.leson}</th>
        <th>{item.observation}</th>
      </tr>
    </tbody>
  </table>
      </Suspense>
    </main>
  )
}
