import React from 'react';

const TailwindDebug = () => {
  return (
    <div className="space-y-2 mb-4">
      <div className="inline-block px-3 py-1 rounded bg-red-500 text-white">Tailwind RED (should be red)</div>
      <div className="inline-block px-3 py-1 rounded bg-green-500 text-white">Tailwind GREEN (should be green)</div>
    </div>
  );
};

export default TailwindDebug;
