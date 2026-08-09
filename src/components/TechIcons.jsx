import React from 'react';

export function TechIcon({ name, className = "w-6 h-6" }) {
  switch (name.toLowerCase()) {
    case 'c':
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M18 10a6 6 0 1 0 0 4" />
          <path d="M12 4v2m0 12v2M4 12h2m12 0h2" opacity="0.4" />
        </svg>
      );
    case 'python':
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 2c-3.5 0-5 1.5-5 3.5v2.5h5V9H5c-2 0-3 1.5-3 4s1 4 3 4h2v-2.5c0-1.5 1-2.5 2.5-2.5h5c1.5 0 2.5-1 2.5-2.5V5.5c0-2-1.5-3.5-5-3.5z" />
          <path d="M12 22c3.5 0 5-1.5 5-3.5v-2.5h-5V15h7c2 0 3-1.5 3-4s-1-4-3-4h-2v2.5c0 1.5-1 2.5-2.5 2.5h-5c-1.5 0-2.5 1-2.5 2.5v3.5c0 2 1.5 3.5 5 3.5z" />
          <circle cx="9" cy="5" r="0.75" fill="currentColor" />
          <circle cx="15" cy="19" r="0.75" fill="currentColor" />
        </svg>
      );
    case 'javascript':
    case 'js':
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect width="18" height="18" x="3" y="3" rx="4" />
          <path d="M15 15.5c-.5.5-1.2.8-2 .8-1.5 0-2.2-.8-2.2-2.3v-5" />
          <path d="M8.5 13.5c.5.8 1.2 1.3 2 1.3 1 0 1.5-.5 1.5-1.2 0-.8-.7-1.1-1.6-1.5-.9-.4-1.9-.8-1.9-1.9 0-1 .8-1.7 2-1.7.8 0 1.5.3 1.9.9" />
        </svg>
      );
    case 'go':
    case 'golang':
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="6" cy="12" r="3.5" />
          <path d="M14 8.5h4.5a3.5 3.5 0 0 1 3.5 3.5v0a3.5 3.5 0 0 1-3.5 3.5H14" />
          <path d="M17.5 12H22" />
        </svg>
      );
    case 'html':
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M4 3l1.5 15.5L12 21l6.5-2.5L20 3H4z" />
          <path d="M7.5 7.5h9l-.8 7.5-3.7 1.3-3.7-1.3-.3-3.5h1.8l.2 1.8 2 .7 2-.7.3-3.8H7.5v-2z" />
        </svg>
      );
    case 'css':
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M4 3l1.5 15.5L12 21l6.5-2.5L20 3H4z" />
          <path d="M16.5 7.5H7.5l.3 3.5h8.4l-.5 4.5-3.7 1.3-3.7-1.3-.2-1.7H8.1l.3 3.2 3.6 1.2 3.6-1.2.9-9.5z" />
        </svg>
      );
    case 'react':
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <ellipse cx="12" cy="12" rx="10" ry="4.5" transform="rotate(0 12 12)" />
          <ellipse cx="12" cy="12" rx="10" ry="4.5" transform="rotate(60 12 12)" />
          <ellipse cx="12" cy="12" rx="10" ry="4.5" transform="rotate(120 12 12)" />
          <circle cx="12" cy="12" r="1.8" fill="currentColor" />
        </svg>
      );
    case 'next.js':
    case 'nextjs':
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="9" />
          <path d="M9 15V9l7 8V9" />
        </svg>
      );
    case 'node.js':
    case 'nodejs':
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 2L3.5 7v10L12 22l8.5-5V7L12 2z" />
          <path d="M12 6.5v11M7 9.5l5 3 5-3" />
        </svg>
      );
    case 'express.js':
    case 'expressjs':
    case 'express':
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect width="18" height="18" x="3" y="3" rx="4" />
          <path d="M7 8h10M7 12h7M7 16h10" />
        </svg>
      );
    case 'artificial intelligence':
    case 'ai':
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect width="14" height="14" x="5" y="5" rx="3" />
          <path d="M9 9h6v6H9z" />
          <path d="M9 2v3M15 2v3M9 19v3M15 19v3M2 9h3M2 15h3M19 9h3M19 15h3" />
        </svg>
      );
    case 'machine learning':
    case 'ml':
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="6" cy="6" r="3" />
          <circle cx="18" cy="6" r="3" />
          <circle cx="12" cy="18" r="3" />
          <path d="M8.5 7.5l5 7M15.5 7.5l-5 7M9 6h6" />
        </svg>
      );
    case 'ui/ux design':
    case 'ui/ux':
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect width="18" height="18" x="3" y="3" rx="4" />
          <path d="M3 9h18M9 21V9" />
        </svg>
      );
    case 'canva design':
    case 'canva':
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 3a9 9 0 1 0 9 9c0-.8-.2-1.6-.5-2.3L15 15l-3-6-2 4-2-2" />
        </svg>
      );
    case 'git':
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="6" cy="6" r="3" />
          <circle cx="6" cy="18" r="3" />
          <circle cx="18" cy="12" r="3" />
          <path d="M6 9v6M9 6h3a3 3 0 0 1 3 3v0a3 3 0 0 1-3 3H9" />
        </svg>
      );
    case 'github':
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
          <path d="M9 18c-4.51 2-5-2-7-2" />
        </svg>
      );
    case 'vs code':
    case 'vscode':
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M16.5 2.5L7 10.5 3 7.5 2 8.5l3.5 3.5L2 15.5l1 1 4-3 9.5 8 5.5-2.5V5z" />
          <path d="M16.5 7.5l-6 4.5 6 4.5" />
        </svg>
      );
    case 'figma':
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M5 5.5A3.5 3.5 0 0 1 8.5 2H12v7H8.5A3.5 3.5 0 0 1 5 5.5z" />
          <path d="M12 2h3.5a3.5 3.5 0 1 1 0 7H12V2z" />
          <path d="M12 12.5a3.5 3.5 0 1 1 7 0 3.5 3.5 0 1 1-7 0z" />
          <path d="M5 12.5A3.5 3.5 0 0 1 8.5 9H12v7H8.5A3.5 3.5 0 0 1 5 12.5z" />
          <path d="M5 19.5A3.5 3.5 0 0 1 8.5 16H12v3.5a3.5 3.5 0 1 1-7 0z" />
        </svg>
      );
    default:
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polygon points="12 2 2 7 12 12 22 7 12 2" />
          <polyline points="2 17 12 22 22 17" />
          <polyline points="2 12 12 17 22 12" />
        </svg>
      );
  }
}
