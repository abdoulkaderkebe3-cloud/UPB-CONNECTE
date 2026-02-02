import React from 'react'

export default function Date({jour="jeudi 25",mois="janvier",année="2026",}) {
  return (
    <div className="text-center my-6">
        <h2 className="text-base font-bold text-black  inter capitalize">
          {jour} {mois} {année}
        </h2>
      </div>
  )
}
