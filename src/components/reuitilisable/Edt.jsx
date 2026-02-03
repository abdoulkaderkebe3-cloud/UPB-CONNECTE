import React from 'react'

export default function Edt() {



  const Data = [
    {
      jour: "Lundi",
      classes: [
        { id: 1, title: "Algorithme", type: "cm", time: "08:00 - 12:00", room: "Salle Alpha", promo: "L2 MIAGE" },
        { id: 2, title: "Programmation Python", type: "TP", time: "13:00 - 16:00", room: "Salle Beta", promo: "L3 ASSRI" },
      ]
    },
    {
      jour: "Mardi",
      Message: "Vous n'avez pas de cours programmé",
      classes: [
        { id: 3, title: "Programmation Python", type: "TP", time: "13:00 - 16:00", room: "Salle Beta", promo: "L3 ASSRI" },
      ]
    }
  ];

  return (
    <div className="px-6 mt-8 space-y-8 pb-20 mb-10 inter">
      {Data.map((section, idx) => (
        <div key={idx}>
          <h3 className="text-black font-bold bg- text-md mb-4 bg-gray-200  rounded-md">{section.jour}</h3>
          
          <div className="space-y-4 border-l-2 border-blue-600 pl-4 ml-1">
            {section.Message && (
              <div className="p-4 bg-gray-50 border border-dashed border-gray-300 rounded-2xl text-center text-xs font-bold text-[#FF9000]">
                {section.Message}
              </div>
            )}
            
            {section.classes.map((course) => (
              <div key={course.id} className="relative py-1">
                <div className="flex justify-between items-start">
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <span className="font-bold text-sm">{course.title}</span>
                      <span className="bg-[#101828] text-white text-[9px] px-2 py-0.5 rounded-full font-bold">
                        {course.type}
                      </span>
                    </div>
                    <p className="text-gray-400 text-[11px] font-medium">
                      {course.time}  •  {course.room}
                    </p>
                  </div>
                  <span className="text-[10px] font-bold text-[#6D788B] bg-[#F1F5F9] px-2 py-1 rounded">
                    {course.promo}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

