import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "I have a knowledge in",
          "JavaScript",
          "React",
          "GitHub",
          "HTML",
          "CSS",
          "NodeJS"
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  );
}

export default Type;
