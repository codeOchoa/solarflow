// src/components/ScrollTopWidget.tsx
import React from 'react';
import { BiCaretUp } from 'react-icons/bi';

const ScrollTopWidget = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <a onClick={scrollToTop} className="scroll-top-widget" style={{ cursor: 'pointer' }}>
      <BiCaretUp />
    </a>
  );
};

export default ScrollTopWidget;