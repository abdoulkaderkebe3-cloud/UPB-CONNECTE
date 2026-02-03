import React from "react";
import { ShareIcon } from "@heroicons/react/24/outline";

export default function Cards({
  titreCours = "ALGORITHME",
  typeCours = "CM",
  time = "14:00",
  room = "salle alpha",
  studentCount = "45",
  filiere = "ASSRI",
  niveau = "L1",
}) {
  return (
    <div className="bg-[#0F172A] text-white p-5 mx-auto rounded-2xl shadow-lg w-80 max-w-md">
      <div className="flex justify-between">
        <div className="flex  items-center mb-4">
          <span className="text-xs font-semibold uppercase tracking-wider opacity-80 text-[#A5B4FC]">
            🕒 Prochain Cours • {time}
          </span>
          <span className="bg-gray-700 px-2 py-1 rounded-[10px] text-[10px] ml-2">
            {typeCours}
          </span>
        </div>
        <div className="bg-[#272F40BF] w-8 h-8 py-3 rounded-full flex justify-center items-center cursor-pointer  hover:bg-gray-700">
          <ShareIcon className="h-4 w-4   " />
        </div>
      </div>
      <h2 className="text-xl font-bold mb-1 inter ">
        {niveau}•{filiere}•{titreCours}
      </h2>
      <p className="text-gray-400 text-sm mb-6">
        {room} • {studentCount} Étudiants
      </p>

      <div className="space-y-3">
        <button className="w-full py-3 rounded-xl border border-gray-600 font-semibold cursor-pointer hover:bg-gray-800 transition inter active:translate-1">
          Tout voir
        </button>
        <button className="w-full py-3 rounded-xl bg-[#FF9500BF] text-white cursor-pointer inter  font-bold hover:bg-orange-400 transition active:translate-1">
          Valider ma présence
        </button>
      </div>
    </div>
  );
}
