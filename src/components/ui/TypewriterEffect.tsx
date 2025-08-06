'use client';

import { useState, useEffect, useRef } from 'react';

interface TypewriterEffectProps {
  text: string | string[];
  className?: string;  // Add this line
  speed?: number;
  pauseTime?: number;
}

export function TypewriterEffect({ 
  text, 
  className = "",  // Add this line
  speed = 150, 
  pauseTime = 2000 
}: TypewriterEffectProps) {
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const timer = useRef<NodeJS.Timeout | null>(null);

  const texts = Array.isArray(text) ? text : [text];
  const currentText = texts[loopNum % texts.length];

  useEffect(() => {
    const type = () => {
      if (!isDeleting) {
        setDisplayText(currentText.substring(0, displayText.length + 1));
        
        if (displayText === currentText) {
          timer.current = setTimeout(() => setIsDeleting(true), pauseTime);
        }
      } else {
        setDisplayText(currentText.substring(0, displayText.length - 1));
        
        if (displayText === '') {
          setIsDeleting(false);
          setLoopNum(loopNum + 1);
        }
      }
    };

    timer.current = setTimeout(type, isDeleting ? speed / 2 : speed);

    return () => {
      if (timer.current) {
        clearTimeout(timer.current);
      }
    };
  }, [displayText, isDeleting, currentText, speed, pauseTime, loopNum]);

  return (
    <span className={`text-purple-400 ${className}`}>
      {displayText}
      <span className="animate-pulse">|</span>
    </span>
  );
}