import React from 'react';

function AnnouncementBar() {
  return (
    <div className="bg-black text-white py-2 overflow-hidden">
      <div className="whitespace-nowrap animate-pulse">
        <span className="text-sm font-medium uppercase tracking-wide px-8">
          ✨ New Client Special: 20% Off Your First Treatment • Book Now for Complimentary Consultation • 
        </span>
      </div>
    </div>
  );
}

export default AnnouncementBar;