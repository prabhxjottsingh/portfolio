import React, { useState, useEffect } from "react";

interface TypewriterProps {
  html: string;
  speed?: number;
}

const TypewriterEffect = ({ html, speed = 100 }: TypewriterProps) => {
  const [displayedText, setDisplayedText] = useState("");

  useEffect(() => {
    let currentText = "";
    let currentIndex = 0;

    // Split the text into parts: regular text and HTML tags
    const parts = html.split(/(<[^>]*>)/g);
    const validParts = parts.filter((part) => part.length > 0);

    const typeNextCharacter = () => {
      if (currentIndex < validParts.length) {
        const part = validParts[currentIndex];

        // If it's an HTML tag, add it immediately
        if (part.startsWith("<") && part.endsWith(">")) {
          currentText += part;
          currentIndex++;
          setDisplayedText(currentText);
          if (currentIndex < validParts.length) {
            setTimeout(typeNextCharacter, 0);
          }
        }
        // If it's text, type it character by character
        else {
          const textArray = part.split("");
          let charIndex = 0;

          const typeChar = () => {
            if (charIndex < textArray.length) {
              currentText += textArray[charIndex];
              setDisplayedText(currentText);
              charIndex++;
              setTimeout(typeChar, speed);
            } else {
              currentIndex++;
              setTimeout(typeNextCharacter, 0);
            }
          };

          typeChar();
        }
      }
    };

    typeNextCharacter();

    return () => {
      // Cleanup timeouts if component unmounts
      setDisplayedText("");
    };
  }, [html, speed]);

  return <h1 dangerouslySetInnerHTML={{ __html: displayedText }} />;
};

export default TypewriterEffect;
