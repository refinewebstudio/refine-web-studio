
// components/TrackingButton.jsx
'use client';
import { trackCTAClick } from '../lib/analytics';

export const TrackingButton = ({ 
  children, 
  onClick, 
  ctaLocation, 
  ctaText, 
  className, 
  href 
}) => {
  const handleClick = () => {
    trackCTAClick(ctaLocation, ctaText);
    if (onClick) onClick();
  };

  if (href) {
    return (
      <a href={href} onClick={handleClick} className={className}>
        {children}
      </a>
    );
  }

  return (
    <button onClick={handleClick} className={className}>
      {children}
    </button>
  );
};
