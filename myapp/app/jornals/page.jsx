import { Suspense } from 'react'
import Listjornal from './Listjornal'
import Loading from '../loading'

export default function page() {
  return (
    <main className='jornal'>
    <nav>
    <div>
       <h2>Journals</h2>
    </div>
    </nav>
       <Suspense fallback={<Loading/>}>
       <Listjornal/>
       </Suspense>
       
    </main>
  )
}
