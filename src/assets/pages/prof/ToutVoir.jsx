import React from 'react'
import Header from '../../../components/reuitilisable/Header'
import Indisponible from '../../../components/Indisponible'
import Navigation from '../../../components/reuitilisable/Navigation'
import Edt from '../../../components/reuitilisable/Edt'

export default function ToutVoir() {
  return (
    <div>
        <Header/>
        <hr />
        <Indisponible/>
        <Navigation/>
        <Edt/>
    </div>
  )
}
