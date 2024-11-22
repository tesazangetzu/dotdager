import React from "react";

export const OptSkill = ({ text }: { text: string }) => {
  return (
    <li className="border border-black/50 py-2 px-4 mr-2 rounded-full whitespace-nowrap mb-2 text-xs sm:text-base">
      {text}
    </li>
  );
};
