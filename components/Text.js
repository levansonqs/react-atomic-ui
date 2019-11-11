import React from "react";

function Text({ level, children }) {
  const Level = level;
  return <Level className="font-bold text-white">{children}</Level>;
}

export default Text;
