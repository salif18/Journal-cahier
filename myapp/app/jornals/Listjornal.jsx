import Cardjornal from '@/components/Cardjornal'
import axios from 'axios'

const getJornal =async()=>{
    await new Promise((resolve) => setTimeout(resolve,3000))
    const res = await axios.get('http://localhost:4000/journals')
    return res.data
}


export default async function Listjornal(){
    const data = await getJornal()
  return (
    <section className='listjornal'>
      {
        data.map((item) => (
            <Cardjornal item={item} key={item.id} />
        ))
      }
    </section>
  )
}
