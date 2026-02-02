import React from 'react'

export default function Indisponible() {
  
  return (
    <div className="mx-6 mt-4 p-4 bg-[#FF000040] border border-red-200 rounded-xl inter text-center">
      <h3 className="text-[#FF0000] font-semibold text-sm mb-1">
        Indisponible cette semaine ?
      </h3>
      <p className="text-red-600 text-[11px] leading-tight mb-4 px-4">
        Signalez-le ici pour prévenir l'administration et les étudiants automatiquement.
      </p>
      <button className="w-full py-2.5 bg-white border border-red-200 rounded-xl text-red-600 font-bold text-xs shadow-sm active:scale-95 hover:bg-red-50 transition">
        Signaler
      </button>
    </div>
  );
};

