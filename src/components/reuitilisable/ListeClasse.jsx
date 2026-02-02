import React from 'react'
import { ChevronRightIcon } from '@heroicons/react/24/solid';
export default function ListeClasse(){
    const classesData = [
  { id: 1, code: "L1", title: "L1 ASSRI", subtitle: "2 Matières • 45 étudiants" },
  { id: 2, code: "L2", title: "L2 MIAGE", subtitle: "4 Matières • 96 étudiants" },
  { id: 3, code: "L3", title: "L3 3EA", subtitle: "1 Matières • 89 étudiants" },
  { id: 4, code: "L3", title: "L3 SEA", subtitle: "1 Matières • 43 étudiants" },
  { id: 5, code: "L3", title: "L3 ASSRI", subtitle: "1 Matières • 60 étudiants" },
];
    return(
     <div className="px-6 mt-8 inter mb-3">
      <h3 className="font-semibold inter  text-lg mb-4 text-black ">Vos Classes</h3>
      <div className="space-y-3">
        {classesData.map((item) => (
          <div 
            key={item.id}
            className="flex items-center justify-between p-4 border  border-gray-100 rounded-[22px] hover:bg-gray-50 transition-all cursor-pointer shadow-sm"
          >
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-[#4E95FF40] flex items-center justify-center font-bold text-[#6366F1]">
                {item.code}
              </div>
              <div>
                <h4 className="font-bold text-sm text-[#101828]">{item.title}</h4>
                <p className="text-gray-400 text-[11px] font-medium">{item.subtitle}</p>
              </div>
            </div>
            <ChevronRightIcon className='h-6 w-6 '/>
          </div>
        ))}
      </div>
    </div>
    )
};



