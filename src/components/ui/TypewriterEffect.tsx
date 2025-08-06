'use client';

import { useState, useEffect } from 'react';

interface TypewriterEffectProps {
  text: string | string[];
  className?: string;
  speed?: number;
  pauseTime?: number;
}

export function TypewriterEffect({ text, className = '', speed = 100, pauseTime = 2000 }: TypewriterEffectProps) {
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);

  const texts = Array.isArray(text) ? text : [text];
  const currentText = texts[loopNum % texts.length];

  useEffect(() => {
    let timer: NodeJS.Timeout;
    
    const type = () => {
      if (!isDeleting) {
        setDisplayText(currentText.substring(0, displayText.length + 1));
        
        if (displayText === currentText) {
          setTimeout(() => setIsDeleting(true), pauseTime);
        }
      } else {
        setDisplayText(currentText.substring(0, displayText.length - 1));
        
        if (displayText === '') {
          setIsDeleting(false);
          setLoopNum(loopNum + 1);
        }
      }
    };

    timer = setTimeout(type, isDeleting ? speed / 2 : speed);

    return () => clearTimeout(timer);
  }, [displayText, isDeleting, currentText, speed, pauseTime, loopNum]);

  return (
    <span className={className}>
      {displayText}
      <span className="animate-pulse">|</span>
    </span>
  );
}
