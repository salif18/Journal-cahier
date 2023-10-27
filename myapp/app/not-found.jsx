import Link from 'next/link'
import React from 'react'

export default function Notfound() {
  return (
    <main>
      <h1>404 Page not-found</h1>
      <Link href='/' >Retour vers acceuil...</Link>
    </main>
  )
}
