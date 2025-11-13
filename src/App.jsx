import React, { useState, useEffect, useRef, useCallback, useMemo } from 'react';

const Loader = ({ className }) => (
  <svg className={`${className} animate-spin`} fill="none" viewBox="0 0 24 24">
    <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" opacity="0.25" />
    <path fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
  </svg>
);

const AlertCircle = ({ className }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <circle cx="12" cy="12" r="10" />
    <line x1="12" y1="8" x2="12" y2="12" />
    <line x1="12" y1="16" x2="12.01" y2="16" />
  </svg>
);

const CheckCircle = ({ className }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24">
    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
  </svg>
);

const X = ({ className }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <line x1="18" y1="6" x2="6" y2="18" />
    <line x1="6" y1="6" x2="18" y2="18" />
  </svg>
);

const Search = ({ className }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <circle cx="11" cy="11" r="8" />
    <line x1="21" y1="21" x2="16.65" y2="16.65" />
  </svg>
);

const ChevronRight = ({ className }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <polyline points="9 18 15 12 9 6" />
  </svg>
);

const ChevronUp = ({ className }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <polyline points="18 15 12 9 6 15" />
  </svg>
);

const ChevronDown = ({ className }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <polyline points="6 9 12 15 18 9" />
  </svg>
);

const Command = ({ className }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path d="M18 3a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3 3 3 0 0 0 3-3 3 3 0 0 0-3-3H6a3 3 0 0 0-3 3 3 3 0 0 0 3 3 3 3 0 0 0 3-3V6a3 3 0 0 0-3-3 3 3 0 0 0-3 3 3 3 0 0 0 3 3h12a3 3 0 0 0 3-3 3 3 0 0 0-3-3z" />
  </svg>
);

const ChromeIcon = ({ className }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10" />
    <circle cx="12" cy="12" r="4" />
    <line x1="21.17" y1="8" x2="12" y2="8" />
    <line x1="3.95" y1="6.06" x2="8.54" y2="14" />
    <line x1="10.88" y1="21.94" x2="15.46" y2="14" />
  </svg>
);

const Sun = ({ className }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="5" />
    <line x1="12" y1="1" x2="12" y2="3" />
    <line x1="12" y1="21" x2="12" y2="23" />
    <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
    <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
    <line x1="1" y1="12" x2="3" y2="12" />
    <line x1="21" y1="12" x2="23" y2="12" />
    <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
    <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
  </svg>
);

const MessageSquare = ({ className }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
  </svg>
);

const MoreVertical = ({ className }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="1" />
    <circle cx="12" cy="5" r="1" />
    <circle cx="12" cy="19" r="1" />
  </svg>
);

const Edit2 = ({ className }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
    <path d="M17 3a2.828 2.828 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3z" />
  </svg>
);

const Trash = ({ className }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
    <polyline points="3 6 5 6 21 6" />
    <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
  </svg>
);

const Clock = ({ className }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10" />
    <polyline points="12 6 12 12 16 14" />
  </svg>
);

const Settings = ({ className }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
    <path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z" />
    <circle cx="12" cy="12" r="3" />
  </svg>
);

const User = ({ className }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
    <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
    <circle cx="12" cy="7" r="4" />
  </svg>
);

const CreditCard = ({ className }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
    <rect x="1" y="4" width="22" height="16" rx="2" ry="2" />
    <line x1="1" y1="10" x2="23" y2="10" />
  </svg>
);

const Palette = ({ className }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
    <circle cx="13.5" cy="6.5" r=".5" />
    <circle cx="17.5" cy="10.5" r=".5" />
    <circle cx="8.5" cy="7.5" r=".5" />
    <circle cx="6.5" cy="12.5" r=".5" />
    <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 0 1 1.668-1.668h1.996c3.051 0 5.555-2.503 5.555-5.554C21.965 6.012 17.461 2 12 2z" />
  </svg>
);

const Ban = ({ className }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10" />
    <line x1="4.93" y1="4.93" x2="19.07" y2="19.07" />
  </svg>
);

const Square = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <circle cx="12" cy="12" r="10" fill="currentColor" />
    <rect x="8" y="8" width="8" height="8" rx="1" ry="1" fill="white" />
  </svg>
);

const CornerUpLeft = ({ className }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
    <polyline points="9 14 4 9 9 4" />
    <path d="M20 20v-7a4 4 0 0 0-4-4H4" />
  </svg>
);

const CornerDownLeft = ({ className }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
    <polyline points="9 10 4 15 9 20" />
    <path d="M20 4v7a4 4 0 0 1-4 4H4" />
  </svg>
);

const FileText = ({ className }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
    <polyline points="14 2 14 8 20 8" />
    <line x1="16" y1="13" x2="8" y2="13" />
    <line x1="16" y1="17" x2="8" y2="17" />
    <polyline points="10 9 9 9 8 9" />
  </svg>
);

const BarChart = ({ className }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
    <line x1="12" y1="20" x2="12" y2="10" />
    <line x1="18" y1="20" x2="18" y2="4" />
    <line x1="6" y1="20" x2="6" y2="16" />
  </svg>
);

const HelpCircle = ({ className }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10" />
    <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" />
    <line x1="12" y1="17" x2="12.01" y2="17" />
  </svg>
);

const Users = ({ className }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
    <circle cx="9" cy="7" r="4" />
    <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
    <path d="M16 3.13a4 4 0 0 1 0 7.75" />
  </svg>
);

const LogOut = ({ className }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
    <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" />
    <polyline points="16 17 21 12 16 7" />
    <line x1="21" y1="12" x2="9" y2="12" />
  </svg>
);

const RefreshCw = ({ className }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
    <polyline points="23 4 23 10 17 10" />
    <polyline points="1 20 1 14 7 14" />
    <path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15" />
  </svg>
);

const CompositeLogoMark = ({ className }) => (
  <svg className={className} viewBox="0 0 735 710" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M191.904 150H193.992C212.776 150 227.983 165.207 227.983 183.992C227.983 202.776 212.776 217.983 193.992 217.983C175.207 217.983 160 202.776 160 183.992V181.904C160 164.312 174.312 150 191.904 150Z" fill="currentColor"/>
    <path d="M343.382 183.992C343.382 165.219 328.163 150 309.39 150C290.617 150 275.398 165.219 275.398 183.992C275.398 202.765 290.617 217.983 309.39 217.983C328.163 217.983 343.382 202.765 343.382 183.992Z" fill="currentColor"/>
    <path d="M227.983 297.884C227.983 279.111 212.765 263.892 193.992 263.892C175.219 263.892 160 279.111 160 297.884C160 316.657 175.219 331.875 193.992 331.875C212.765 331.875 227.983 316.657 227.983 297.884Z" fill="currentColor"/>
    <path d="M343.382 297.884C343.382 279.111 328.163 263.892 309.39 263.892C290.617 263.892 275.398 279.111 275.398 297.884C275.398 316.657 290.617 331.875 309.39 331.875C328.163 331.875 343.382 316.657 343.382 297.884Z" fill="currentColor"/>
    <path d="M458.921 183.992C458.921 165.219 443.702 150 424.929 150C406.156 150 390.938 165.219 390.938 183.992C390.938 202.765 406.156 217.983 424.929 217.983C443.702 217.983 458.921 202.765 458.921 183.992Z" fill="currentColor"/>
    <path d="M458.921 297.884C458.921 279.111 443.702 263.892 424.929 263.892C406.156 263.892 390.938 279.111 390.938 297.884C390.938 316.657 406.156 331.875 424.929 331.875C443.702 331.875 458.921 316.657 458.921 297.884Z" fill="currentColor"/>
    <path d="M227.983 411.641C227.983 392.868 212.765 377.65 193.992 377.65C175.219 377.65 160 392.868 160 411.641C160 430.414 175.219 445.633 193.992 445.633C212.765 445.633 227.983 430.414 227.983 411.641Z" fill="currentColor"/>
    <path d="M343.382 411.641C343.382 392.868 328.163 377.65 309.39 377.65C290.617 377.65 275.398 392.868 275.398 411.641C275.398 430.414 290.617 445.633 309.39 445.633C328.163 445.633 343.382 430.414 343.382 411.641Z" fill="currentColor"/>
    <path d="M458.921 411.641C458.921 392.868 443.702 377.65 424.929 377.65C406.156 377.65 390.938 392.868 390.938 411.641C390.938 430.414 406.156 445.633 424.929 445.633C443.702 445.633 458.921 430.414 458.921 411.641Z" fill="currentColor"/>
    <path d="M227.983 525.544C227.983 506.771 212.765 491.552 193.992 491.552C175.219 491.552 160 506.771 160 525.544C160 544.317 175.219 559.535 193.992 559.535C212.765 559.535 227.983 544.317 227.983 525.544Z" fill="currentColor"/>
    <path d="M343.382 525.544C343.382 506.771 328.163 491.552 309.39 491.552C290.617 491.552 275.398 506.771 275.398 525.544C275.398 544.317 290.617 559.535 309.39 559.535C328.163 559.535 343.382 544.317 343.382 525.544Z" fill="currentColor"/>
    <path d="M458.921 525.544C458.921 506.771 443.702 491.552 424.929 491.552C406.156 491.552 390.938 506.771 390.938 525.544C390.938 544.317 406.156 559.535 424.929 559.535C443.702 559.535 458.921 544.317 458.921 525.544Z" fill="currentColor"/>
    <path d="M574.319 183.992C574.319 165.219 559.101 150 540.328 150C521.555 150 506.336 165.219 506.336 183.992C506.336 202.765 521.555 217.983 540.328 217.983C559.101 217.983 574.319 202.765 574.319 183.992Z" fill="currentColor"/>
    <path d="M574.319 297.884C574.319 279.111 559.101 263.892 540.328 263.892C521.555 263.892 506.336 279.111 506.336 297.884C506.336 316.657 521.555 331.875 540.328 331.875C559.101 331.875 574.319 316.657 574.319 297.884Z" fill="currentColor"/>
    <path d="M574.319 411.641C574.319 392.868 559.101 377.65 540.328 377.65C521.555 377.65 506.336 392.868 506.336 411.641C506.336 430.414 521.555 445.633 540.328 445.633C559.101 445.633 574.319 430.414 574.319 411.641Z" fill="currentColor"/>
    <path d="M574.319 525.544C574.319 506.771 559.101 491.552 540.328 491.552C521.555 491.552 506.336 506.771 506.336 525.544C506.336 544.317 521.555 559.535 540.328 559.535C559.101 559.535 574.319 544.317 574.319 525.544Z" fill="currentColor"/>
    <path d="M404.947 297.885H329.211C318.26 297.885 309.383 306.763 309.383 317.714V391.958C309.383 402.909 318.26 411.787 329.211 411.787H404.947C415.898 411.787 424.775 402.909 424.775 391.958V317.714C424.775 306.763 415.898 297.885 404.947 297.885Z" fill="currentColor"/>
    <path d="M404.953 426.557H329.218C309.985 426.557 294.48 410.903 294.48 391.82V317.725C294.48 298.493 310.135 282.988 329.218 282.988H404.953C424.185 282.988 439.69 298.642 439.69 317.725V391.82C439.69 411.053 424.036 426.557 404.953 426.557ZM329.367 312.805C326.683 312.805 324.447 315.041 324.447 317.725V391.82C324.447 394.504 326.683 396.74 329.367 396.74H405.102C407.786 396.74 410.022 394.504 410.022 391.82V317.725C410.022 315.041 407.786 312.805 405.102 312.805H329.367Z" fill="currentColor"/>
  </svg>
);

const VoiceInput = ({ isActive, onClick, className }) => {
  const waves = [
    { activeHeight: 16, inactiveHeight: 6, delay: 0 },
    { activeHeight: 20, inactiveHeight: 10, delay: 0.1 },
    { activeHeight: 24, inactiveHeight: 14, delay: 0.2 },
    { activeHeight: 20, inactiveHeight: 10, delay: 0.3 },
    { activeHeight: 16, inactiveHeight: 6, delay: 0.4 },
  ];

  return (
    <button
      onClick={onClick}
      onMouseDown={onClick}
      className={`${className} flex items-center justify-center gap-0.5 cursor-pointer transition-all duration-200 hover:opacity-80`}
      title="Voice Input (Hold Ctrl)" // Hold Ctrl on Mac, Alt on Windows
    >
      {waves.map((wave, index) => (
        <div
          key={index}
          className={`rounded-full bg-[#F06423] transition-all duration-150 flex-shrink-0 ${isActive ? 'voice-wave' : ''}`}
          style={{
            width: '2px',
            minWidth: '2px',
            maxWidth: '2px',
            height: isActive ? `${wave.activeHeight}px` : `${wave.inactiveHeight}px`,
            animationDelay: isActive ? `${wave.delay}s` : undefined,
          }}
        />
      ))}
    </button>
  );
};

const ArrowUpCircle = ({ className }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
    <polyline points="16 12 12 8 8 12" />
    <line x1="12" y1="16" x2="12" y2="8" />
  </svg>
);

const ExternalLink = ({ className }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
    <polyline points="15 3 21 3 21 9" />
    <line x1="10" y1="14" x2="21" y2="3" />
  </svg>
);

export default function BrowserCopilot() {
  // Utility function to remove tab mentions from text
  const removeTabMentions = (text) => {
    if (!text) return text;
    // Remove all @[...] patterns and clean up extra spaces
    return text.replace(/@\[([^\]]+)\]/g, '').replace(/\s+/g, ' ').trim();
  };

  // Utility function to format relative time (e.g., "1m", "2h", "3d", "4w")
  const formatRelativeTime = (timestamp) => {
    const now = new Date();
    const diffMs = now - timestamp;
    const diffSec = Math.floor(diffMs / 1000);
    const diffMin = Math.floor(diffSec / 60);
    const diffHour = Math.floor(diffMin / 60);
    const diffDay = Math.floor(diffHour / 24);
    const diffWeek = Math.floor(diffDay / 7);
    const diffMonth = Math.floor(diffDay / 30);
    const diffYear = Math.floor(diffDay / 365);

    if (diffSec < 60) return 'now';
    if (diffMin < 60) return `${diffMin}m`;
    if (diffHour < 24) return `${diffHour}h`;
    if (diffDay < 7) return `${diffDay}d`;
    if (diffWeek < 4) return `${diffWeek}w`;
    if (diffMonth < 12) return `${diffMonth}mo`;
    return `${diffYear}y`;
  };

  // Utility function to render message with tab mentions as badges
  const renderMessageWithTabBadges = (message) => {
    if (!message) return null;
    
    // Split message by tab mentions
    const parts = [];
    let lastIndex = 0;
    const mentionRegex = /@\[([^\]]+)\]/g;
    let match;
    
    while ((match = mentionRegex.exec(message)) !== null) {
      // Add text before the mention
      if (match.index > lastIndex) {
        parts.push({
          type: 'text',
          content: message.slice(lastIndex, match.index)
        });
      }
      
      // Add the mention as a badge
      const tabTitle = match[1];
      const tabData = mentionedTabs.get(tabTitle);
      
      parts.push({
        type: 'tab',
        content: tabTitle,
        favicon: tabData?.favicon
      });
      
      lastIndex = match.index + match[0].length;
    }
    
    // Add remaining text
    if (lastIndex < message.length) {
      parts.push({
        type: 'text',
        content: message.slice(lastIndex)
      });
    }
    
    // If no mentions found, return plain text
    if (parts.length === 0) {
      return <span>{message}</span>;
    }
    
    // Render parts
    return (
      <span>
        {parts.map((part, idx) => {
          if (part.type === 'text') {
            return <span key={idx}>{part.content}</span>;
          } else if (part.type === 'tab') {
            return (
              <span 
                key={idx}
                className="inline-flex items-center gap-1 px-1.5 py-0.5 bg-orange-50 border border-[#F06423]/30 rounded text-xs font-medium text-[#F06423] whitespace-nowrap align-middle mx-0.5"
              >
                {part.favicon && (
                  <img 
                    src={part.favicon} 
                    alt="" 
                    className="w-3 h-3 flex-shrink-0" 
                    onError={(e) => e.target.style.display = 'none'}
                  />
                )}
                <span>@{part.content.length > 30 ? part.content.slice(0, 30) + '...' : part.content}</span>
              </span>
            );
          }
          return null;
        })}
      </span>
    );
  };

  const [showSpotlight, setShowSpotlight] = useState(true);
  const [input, setInput] = useState('');
  const [threads, setThreads] = useState([]);
  const [activeThreadId, setActiveThreadId] = useState(null);
  const [showSettingsModal, setShowSettingsModal] = useState(false);
  const [showThreadsModal, setShowThreadsModal] = useState(false);
  const [chromeConnected, setChromeConnected] = useState(true); // true = green, false = orange
  const [currentTab, setCurrentTab] = useState({ id: 'current', title: 'hi - Google Search', favicon: 'https://www.google.com/favicon.ico', url: 'https://www.google.com' }); // Current browser tab info
  const [isReplyMode, setIsReplyMode] = useState(false); // true when replying to active thread
  const [replyThreadId, setReplyThreadId] = useState(null); // ID of thread being replied to
  const [visibleNotifications, setVisibleNotifications] = useState([]); // IDs of threads with visible notifications
  const [currentNotificationIndex, setCurrentNotificationIndex] = useState(0); // Current index in the notification cycle
  const [lastNotificationAction, setLastNotificationAction] = useState({}); // Track last action timestamp per thread to show new notifications
  const [threadViewTimestamps, setThreadViewTimestamps] = useState({}); // Track when each thread was last viewed in chat history
  const [dismissedOngoingTasks, setDismissedOngoingTasks] = useState(new Set()); // Track which ongoing tasks have been dismissed
  const [dismissedAttentionNeeded, setDismissedAttentionNeeded] = useState(new Set()); // Track which attention needed threads have been dismissed
  const [isVoiceActive, setIsVoiceActive] = useState(false); // Track if voice input is active (Ctrl on Mac, Alt on Windows)
  const voiceKeyTimerRef = useRef(null); // Timer for voice key hold detection
  const voiceActivatedRef = useRef(false); // Track if voice was activated
  const spotlightRef = useRef(null);
  const spotlightModalRef = useRef(null);
  const [modalPosition, setModalPosition] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 });
  const [openMenuThreadId, setOpenMenuThreadId] = useState(null); // Track which thread has menu open
  const [renamingThreadId, setRenamingThreadId] = useState(null); // Track which thread is being renamed
  const [renameValue, setRenameValue] = useState(''); // Temporary value for rename input
  const [threadSearchQuery, setThreadSearchQuery] = useState(''); // Search query for filtering threads
  
  // Tab mention state
  const [showMentionDropdown, setShowMentionDropdown] = useState(false);
  const [mentionQuery, setMentionQuery] = useState('');
  const [mentionCursorPosition, setMentionCursorPosition] = useState(null);
  const [selectedMentionIndex, setSelectedMentionIndex] = useState(0);
  const [mentionDropdownPosition, setMentionDropdownPosition] = useState({ top: 0, left: 0, width: 0 });
  const [isKeyboardNavigating, setIsKeyboardNavigating] = useState(false);
  const mentionDropdownRef = useRef(null);
  const fileInputRef = useRef(null);
  
  // File upload state
  const [uploadedFiles, setUploadedFiles] = useState(new Map());
  
  // Mock tab groups and tabs data
  const [tabGroups] = useState([
    {
      id: 'work',
      name: 'Work',
      color: '#3B82F6', // blue
      tabs: [
        { id: 2, title: 'GitHub - Notifications', favicon: 'https://github.githubassets.com/favicons/favicon.svg', url: 'https://github.com/notifications' },
        { id: 4, title: 'Notion - My Notes', favicon: 'https://www.notion.so/images/favicon.ico', url: 'https://notion.so' },
        { id: 5, title: 'Figma - Design Project', favicon: 'https://static.figma.com/app/icon/1/favicon.ico', url: 'https://figma.com' },
      ]
    },
    {
      id: 'atlassian',
      name: 'Atlassian Tools',
      color: '#0052CC', // atlassian blue
      tabs: [
        { id: 6, title: 'Jira - Sprint Planning', favicon: 'https://wac-cdn.atlassian.com/assets/img/favicons/atlassian/favicon-32x32.png', url: 'https://atlassian.net' },
        { id: 7, title: 'Confluence - Documentation', favicon: 'https://wac-cdn.atlassian.com/assets/img/favicons/atlassian/favicon-32x32.png', url: 'https://confluence.atlassian.com' },
      ]
    }
  ]);
  
  // Tabs not in any group
  const [ungroupedTabs] = useState([
    { id: 1, title: 'Gmail - Inbox', favicon: 'https://ssl.gstatic.com/ui/v1/icons/mail/rfr/gmail.ico', url: 'https://mail.google.com' },
    { id: 3, title: 'Slack - #general', favicon: 'https://a.slack-edge.com/80588/marketing/img/meta/favicon-32.png', url: 'https://slack.com' },
  ]);
  
  // Flatten all tabs for backwards compatibility
  const [availableTabs] = useMemo(() => {
    const allTabs = [...ungroupedTabs];
    tabGroups.forEach(group => {
      allTabs.push(...group.tabs);
    });
    return [allTabs];
  }, [tabGroups, ungroupedTabs]);
  
  // Track which tab groups are expanded
  const [expandedGroups, setExpandedGroups] = useState(new Set());

  // Track which major steps have expanded substeps (by threadId-stepId)
  const [expandedSteps, setExpandedSteps] = useState(new Set());

  // Drag handlers for modal
  const handleMouseDown = useCallback((e) => {
    // Only allow dragging from the top area (not from buttons or inputs)
    if (e.target.closest('input, button, textarea')) return;
    
    setIsDragging(true);
    setDragStart({
      x: e.clientX - modalPosition.x,
      y: e.clientY - modalPosition.y
    });
  }, [modalPosition]);

  const handleMouseMove = useCallback((e) => {
    if (!isDragging) return;
    
    const newX = e.clientX - dragStart.x;
    const newY = e.clientY - dragStart.y;
    
    setModalPosition({ x: newX, y: newY });
  }, [isDragging, dragStart]);

  const handleMouseUp = useCallback(() => {
    setIsDragging(false);
  }, []);

  useEffect(() => {
    if (isDragging) {
      window.addEventListener('mousemove', handleMouseMove);
      window.addEventListener('mouseup', handleMouseUp);
      return () => {
        window.removeEventListener('mousemove', handleMouseMove);
        window.removeEventListener('mouseup', handleMouseUp);
      };
    }
  }, [isDragging, handleMouseMove, handleMouseUp]);

  // Filter tabs based on mention query, with current tab always first
  const filteredTabs = useMemo(() => {
    const query = mentionQuery.toLowerCase();
    let tabs = mentionQuery 
      ? availableTabs.filter(tab => 
          tab.title.toLowerCase().includes(query) || 
          tab.url.toLowerCase().includes(query)
        )
      : availableTabs;
    
    // Check if current tab matches the filter (or if no filter)
    const currentTabMatches = !mentionQuery || 
      currentTab.title.toLowerCase().includes(query) || 
      currentTab.url.toLowerCase().includes(query);
    
    // Always put current tab first if it matches
    if (currentTabMatches) {
      return [currentTab, ...tabs.filter(tab => tab.id !== currentTab.id)];
    }
    
    return tabs;
  }, [mentionQuery, availableTabs, currentTab]);

  // Create combined menu items including file upload option and tab groups
  const mentionMenuItems = useMemo(() => {
    const items = [];
    const query = mentionQuery.toLowerCase();
    const hasQuery = query.length > 0;
    
    // Check if current tab matches the filter
    const currentTabMatches = !hasQuery || 
      currentTab.title.toLowerCase().includes(query) || 
      currentTab.url.toLowerCase().includes(query);
    
    // Add current tab first if it matches
    if (currentTabMatches) {
      items.push({ type: 'tab', data: currentTab, isCurrentTab: true });
      
      // Add file upload option after current tab
      items.push({ type: 'file-upload' });
    }
    
    // When searching (has query), expand all groups and show matching tabs
    if (hasQuery) {
      // Add ungrouped tabs that match
      ungroupedTabs.forEach(tab => {
        if (tab.id !== currentTab.id && 
            (tab.title.toLowerCase().includes(query) || 
             tab.url.toLowerCase().includes(query))) {
          items.push({ type: 'tab', data: tab });
        }
      });
      
      // Add grouped tabs that match (expanded, no group headers)
      tabGroups.forEach(group => {
        group.tabs.forEach(tab => {
          if (tab.id !== currentTab.id && 
              (tab.title.toLowerCase().includes(query) || 
               tab.url.toLowerCase().includes(query))) {
            items.push({ type: 'tab', data: tab, groupColor: group.color });
          }
        });
      });
    } else {
      // No query - show with collapsed groups
      // Add ungrouped tabs (except current tab which is already added)
      ungroupedTabs.forEach(tab => {
        if (tab.id !== currentTab.id) {
          items.push({ type: 'tab', data: tab });
        }
      });
      
      // Add tab groups
      tabGroups.forEach(group => {
        const isExpanded = expandedGroups.has(group.id);
        items.push({ 
          type: 'group-header', 
          data: group,
          isExpanded 
        });
        
        if (isExpanded) {
          group.tabs.forEach(tab => {
            if (tab.id !== currentTab.id) {
              items.push({ 
                type: 'tab', 
                data: tab, 
                groupColor: group.color,
                isGrouped: true 
              });
            }
          });
        }
      });
    }
    
    return items;
  }, [mentionQuery, currentTab, ungroupedTabs, tabGroups, expandedGroups]);

  // Store mentioned tabs data for rendering pills
  const [mentionedTabs, setMentionedTabs] = useState(new Map());
  const isUpdatingFromInput = useRef(false);
  const hasInitializedInput = useRef(false);

  // Insert a tab mention at cursor position
  const insertMention = useCallback((tab) => {
    if (!spotlightRef.current) return;
    
    const before = input.substring(0, mentionCursorPosition - mentionQuery.length - 1); // -1 for the @ symbol
    const after = input.substring(mentionCursorPosition);
    const mention = `@[${tab.title}]`;
    const newInput = before + mention + after;
    
    setInput(newInput);
    
    // Store the tab data for rendering the pill  
    setMentionedTabs(prev => {
      const newMap = new Map(prev);
      newMap.set(tab.title, { id: tab.id, title: tab.title, favicon: tab.favicon, url: tab.url });
      return newMap;
    });
    
    setShowMentionDropdown(false);
    setMentionQuery('');
    setMentionCursorPosition(null);
    setSelectedMentionIndex(0);
    
    // Force update the contentEditable and set cursor after the mention
    setTimeout(() => {
      if (spotlightRef.current) {
        spotlightRef.current.focus();
        // Move cursor to end of the inserted mention
        const selection = window.getSelection();
        const range = document.createRange();
        range.selectNodeContents(spotlightRef.current);
        range.collapse(false);
        selection.removeAllRanges();
        selection.addRange(range);
      }
    }, 0);
  }, [input, mentionCursorPosition, mentionQuery]);

  // Handle file upload
  const handleFileUpload = useCallback((event) => {
    const files = Array.from(event.target.files);
    if (files.length === 0) return;
    
    files.forEach(file => {
      const fileId = `file_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
      const fileName = file.name;
      
      // Store file data
      setUploadedFiles(prev => {
        const newMap = new Map(prev);
        newMap.set(fileName, { 
          id: fileId,
          name: fileName, 
          size: file.size,
          type: file.type,
          file: file
        });
        return newMap;
      });
      
      // Insert file mention in input
      if (spotlightRef.current && mentionCursorPosition !== null) {
        const before = input.substring(0, mentionCursorPosition - mentionQuery.length - 1);
        const after = input.substring(mentionCursorPosition);
        const mention = `@[${fileName}]`;
        const newInput = before + mention + after;
        setInput(newInput);
      }
    });
    
    setShowMentionDropdown(false);
    setMentionQuery('');
    setMentionCursorPosition(null);
    setSelectedMentionIndex(0);
    
    // Reset file input
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
    
    // Focus back on input
    setTimeout(() => {
      if (spotlightRef.current) {
        spotlightRef.current.focus();
        const selection = window.getSelection();
        const range = document.createRange();
        range.selectNodeContents(spotlightRef.current);
        range.collapse(false);
        selection.removeAllRanges();
        selection.addRange(range);
      }
    }, 0);
  }, [input, mentionCursorPosition, mentionQuery]);

  // Open file selector
  const openFileSelector = useCallback(() => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  }, []);

  // Toggle tab group expansion
  const toggleGroupExpansion = useCallback((groupId) => {
    setExpandedGroups(prev => {
      const newSet = new Set(prev);
      if (newSet.has(groupId)) {
        newSet.delete(groupId);
      } else {
        newSet.add(groupId);
      }
      return newSet;
    });
  }, []);

  // Detect @ mentions in input
  const detectMention = useCallback((text, cursorPos) => {
    // Find the last @ before cursor position
    let atIndex = -1;
    for (let i = cursorPos - 1; i >= 0; i--) {
      if (text[i] === '@') {
        // Check if @ is at start or preceded by whitespace
        if (i === 0 || /\s/.test(text[i - 1])) {
          atIndex = i;
          break;
        }
      }
      // Stop if we hit a space (means we're not in a mention)
      if (/\s/.test(text[i])) {
        break;
      }
    }
    
    if (atIndex !== -1) {
      const query = text.substring(atIndex + 1, cursorPos);
      // Only show dropdown if there are no spaces in the query
      if (!/\s/.test(query)) {
        setMentionQuery(query);
        setMentionCursorPosition(cursorPos);
        setShowMentionDropdown(true);
        setSelectedMentionIndex(0);
        setIsKeyboardNavigating(false);
        
        // Calculate dropdown position based on textarea position
        if (spotlightRef.current) {
          const rect = spotlightRef.current.getBoundingClientRect();
          setMentionDropdownPosition({
            top: rect.top,
            left: rect.left,
            width: rect.width
          });
        }
        return;
      }
    }
    
    setShowMentionDropdown(false);
    setMentionQuery('');
    setMentionCursorPosition(null);
    setIsKeyboardNavigating(false);
  }, []);

  // Handle input change with mention detection
  const handleInputChange = useCallback((e) => {
    const newValue = e.target.value;
    const cursorPos = e.target.selectionStart;
    setInput(newValue);
    detectMention(newValue, cursorPos);
  }, [detectMention]);

  // Update mention dropdown position when modal moves or window resizes
  useEffect(() => {
    if (showMentionDropdown && spotlightRef.current) {
      const updatePosition = () => {
        const rect = spotlightRef.current.getBoundingClientRect();
        setMentionDropdownPosition({
          top: rect.top,
          left: rect.left,
          width: rect.width
        });
      };
      
      updatePosition();
      window.addEventListener('resize', updatePosition);
      return () => window.removeEventListener('resize', updatePosition);
    }
  }, [showMentionDropdown, modalPosition]);

  // Scroll selected mention into view (only when using keyboard)
  useEffect(() => {
    if (showMentionDropdown && isKeyboardNavigating && mentionDropdownRef.current) {
      const selectedElement = mentionDropdownRef.current.querySelector(`button:nth-child(${selectedMentionIndex + 2})`); // +2 because of header div
      if (selectedElement) {
        selectedElement.scrollIntoView({ block: 'nearest', behavior: 'smooth' });
      }
    }
  }, [selectedMentionIndex, showMentionDropdown, isKeyboardNavigating]);

  // Close mention dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (showMentionDropdown && 
          mentionDropdownRef.current && 
          !mentionDropdownRef.current.contains(e.target) &&
          spotlightRef.current &&
          !spotlightRef.current.contains(e.target)) {
        setShowMentionDropdown(false);
        setMentionQuery('');
        setMentionCursorPosition(null);
      }
    };
    
    if (showMentionDropdown) {
      document.addEventListener('mousedown', handleClickOutside);
      return () => document.removeEventListener('mousedown', handleClickOutside);
    }
  }, [showMentionDropdown]);

  // Handle remove mention button clicks
  useEffect(() => {
    if (!spotlightRef.current) return;
    
    const handleClick = (e) => {
      // Check if clicked element or its parent is the remove button
      const button = e.target.closest('[data-remove-mention]');
      if (button) {
        e.preventDefault();
        e.stopPropagation();
        
        const tabTitle = button.getAttribute('data-remove-mention');
        const mentionToRemove = `@[${tabTitle}]`;
        
        // Get current text from contentEditable
        const extractText = (node) => {
          let text = '';
          node.childNodes.forEach(child => {
            if (child.nodeType === Node.TEXT_NODE) {
              text += child.textContent;
            } else if (child.nodeType === Node.ELEMENT_NODE) {
              if (child.hasAttribute('data-mention')) {
                text += `@[${child.getAttribute('data-mention')}]`;
              } else {
                text += extractText(child);
              }
            }
          });
          return text;
        };
        
        const currentText = extractText(spotlightRef.current);
        const newInput = currentText.replace(mentionToRemove, '');
        setInput(newInput);
        
        // Remove from mentioned tabs map
        setMentionedTabs(prev => {
          const newMap = new Map(prev);
          newMap.delete(tabTitle);
          return newMap;
        });
        
        // Remove from uploaded files map
        setUploadedFiles(prev => {
          const newMap = new Map(prev);
          newMap.delete(tabTitle);
          return newMap;
        });
        
        // Focus back on contentEditable
        setTimeout(() => {
          if (spotlightRef.current) {
            spotlightRef.current.focus();
          }
        }, 0);
      }
    };
    
    const contentEditable = spotlightRef.current;
    contentEditable.addEventListener('click', handleClick, true); // Use capture phase
    return () => contentEditable.removeEventListener('click', handleClick, true);
  }, []);

  // Update contentEditable only when inserting mentions programmatically
  useEffect(() => {
    if (!spotlightRef.current || isUpdatingFromInput.current) return;
    
    const contentEditable = spotlightRef.current;
    const currentContent = contentEditable.innerHTML;
    
    // Generate new HTML from input state
    const parts = [];
    let remaining = input;
    
    while (remaining.length > 0) {
      const mentionMatch = remaining.match(/^@\[([^\]]+)\]/);
      if (mentionMatch) {
        const fullMention = mentionMatch[0];
        const itemTitle = mentionMatch[1];
        const tabData = mentionedTabs.get(itemTitle);
        const fileData = uploadedFiles.get(itemTitle);
        
        if (tabData) {
          // Show "@Current Tab" for the current tab, otherwise show the actual tab title
          const isCurrentTab = tabData.id === currentTab.id;
          const displayText = isCurrentTab ? 'Current Tab' : (tabData.title.length > 20 ? tabData.title.substring(0, 20) + '...' : tabData.title);
          parts.push(`<span contenteditable="false" data-mention="${itemTitle}" class="inline-flex items-center gap-1 px-1.5 py-0.5 bg-orange-50 border border-[#F06423]/30 rounded text-xs font-medium text-[#F06423] whitespace-nowrap align-middle mx-0.5"><img src="${tabData.favicon}" class="w-3 h-3 flex-shrink-0" onerror="this.style.display='none'"/><span>@${displayText}</span><button type="button" class="ml-0.5 hover:bg-[#F06423]/20 rounded-full p-0.5 transition-colors flex items-center justify-center" data-remove-mention="${itemTitle}"><svg class="w-2.5 h-2.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg></button></span>`);
          remaining = remaining.substring(fullMention.length);
          continue;
        } else if (fileData) {
          const displayText = fileData.name.length > 20 ? fileData.name.substring(0, 20) + '...' : fileData.name;
          const fileSizeKB = (fileData.size / 1024).toFixed(1);
          parts.push(`<span contenteditable="false" data-mention="${itemTitle}" class="inline-flex items-center gap-1 px-1.5 py-0.5 bg-blue-50 border border-blue-300 rounded text-xs font-medium text-blue-700 whitespace-nowrap align-middle mx-0.5"><svg class="w-3 h-3 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg><span>@${displayText}</span><span class="text-[10px] text-blue-500 ml-0.5">(${fileSizeKB}KB)</span><button type="button" class="ml-0.5 hover:bg-blue-200 rounded-full p-0.5 transition-colors flex items-center justify-center" data-remove-mention="${itemTitle}"><svg class="w-2.5 h-2.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg></button></span>`);
          remaining = remaining.substring(fullMention.length);
          continue;
        }
      }
      
      // Escape HTML and add the character
      const char = remaining[0];
      parts.push(char === '<' ? '&lt;' : char === '>' ? '&gt;' : char === '&' ? '&amp;' : char);
      remaining = remaining.substring(1);
    }
    
    const newHTML = parts.join('');
    
    // Only update if content changed and we're not currently editing
    if (newHTML !== currentContent) {
      const selection = window.getSelection();
      const range = selection.rangeCount > 0 ? selection.getRangeAt(0) : null;
      
      contentEditable.innerHTML = newHTML || '';
      
      // Restore cursor position
      if (range) {
        try {
          selection.removeAllRanges();
          selection.addRange(range);
        } catch (e) {
          // If range is invalid, just place cursor at end
          const newRange = document.createRange();
          newRange.selectNodeContents(contentEditable);
          newRange.collapse(false);
          selection.removeAllRanges();
          selection.addRange(newRange);
        }
      }
    }
  }, [input, mentionedTabs, uploadedFiles]);

  // Initialize input with current tab mention when spotlight opens
  useEffect(() => {
    if (showSpotlight && !isReplyMode && !hasInitializedInput.current && currentTab) {
      hasInitializedInput.current = true;
      const mention = `@[${currentTab.title}]`;
      setInput(mention + ' ');
      
      // Store the current tab data for rendering the pill
      setMentionedTabs(prev => {
        const newMap = new Map(prev);
        newMap.set(currentTab.title, { 
          id: currentTab.id,
          title: currentTab.title, 
          favicon: currentTab.favicon, 
          url: currentTab.url 
        });
        return newMap;
      });
      
      // Focus and position cursor at the end
      setTimeout(() => {
        if (spotlightRef.current) {
          spotlightRef.current.focus();
          const selection = window.getSelection();
          const range = document.createRange();
          range.selectNodeContents(spotlightRef.current);
          range.collapse(false);
          selection.removeAllRanges();
          selection.addRange(range);
        }
      }, 100);
    }
  }, [showSpotlight, isReplyMode, currentTab]);

  // Stop execution for a specific thread - freezes current progress by saving snapshot
  const handleStopExecution = useCallback((threadId) => {
    setThreads((prev) =>
      prev.map((t) => {
        if (t.id === threadId && t.status === 'executing') {
          // Freeze current progress by saving snapshot on the last message
          const previousMessages = [...(t.conversationHistory || [])];
          if (previousMessages.length > 0) {
            const lastIdx = previousMessages.length - 1;
            previousMessages[lastIdx] = {
              ...previousMessages[lastIdx],
              progressSnapshot: t.majorSteps ? JSON.parse(JSON.stringify(t.majorSteps)) : null
            };
          }
          
          return {
            ...t,
            status: 'cancelled',
            currentAction: 'Task stopped by user',
            lastActionTime: Date.now(),
            conversationHistory: previousMessages,
          };
        }
        return t;
      })
    );
  }, []);

  // Toggle expansion state for a major step's substeps
  const toggleStepExpansion = useCallback((threadId, stepId) => {
    setExpandedSteps((prev) => {
      const key = `${threadId}-${stepId}`;
      const newSet = new Set(prev);
      if (newSet.has(key)) {
        newSet.delete(key);
      } else {
        newSet.add(key);
      }
      return newSet;
    });
  }, []);

  // Auto-expand executing steps and auto-collapse completed steps
  useEffect(() => {
    threads.forEach((thread) => {
      if (thread.majorSteps) {
        thread.majorSteps.forEach((step) => {
          const key = `${thread.id}-${step.id}`;
          
          // Auto-expand if step is currently executing and has substeps
          if (step.status === 'executing' && step.completedAtomicSteps && step.completedAtomicSteps.length > 0) {
            setExpandedSteps((prev) => {
              const newSet = new Set(prev);
              newSet.add(key);
              return newSet;
            });
          }
          
          // Auto-collapse if step just completed
          if (step.status === 'completed') {
            setExpandedSteps((prev) => {
              const newSet = new Set(prev);
              newSet.delete(key);
              return newSet;
            });
          }
        });
      }
    });
  }, [threads]);

  // Sort notifications by creation time (most recent first)
  const getSortedNotifications = useCallback(() => {
    return [...visibleNotifications].sort((aId, bId) => {
      const threadA = threads.find(t => t.id === aId);
      const threadB = threads.find(t => t.id === bId);
      
      if (!threadA || !threadB) return 0;
      
      // Sort by timestamp (creation time) - most recent first
      return (threadB.timestamp?.getTime() || 0) - (threadA.timestamp?.getTime() || 0);
    });
  }, [visibleNotifications, threads]);

  // Helper function to open spotlight with a specific thread
  const openSpotlightWithThread = useCallback((threadId) => {
    setShowSpotlight(true);
    setShowThreadsModal(true);
    setReplyThreadId(threadId);
    setActiveThreadId(threadId);
    setShowSettingsModal(false);
    
    const thread = threads.find(t => t.id === threadId);
    
    // Track that this thread has been viewed (like macOS Messages)
    setThreadViewTimestamps(prev => ({
      ...prev,
      [threadId]: Date.now()
    }));
    // Hide the notification for this thread
    setVisibleNotifications(prev => prev.filter(id => id !== threadId));
    
    // Remove from dismissed sets if present (in case user manually opens a previously dismissed notification)
    setDismissedOngoingTasks(prev => {
      const newSet = new Set(prev);
      newSet.delete(threadId);
      return newSet;
    });
    
    setDismissedAttentionNeeded(prev => {
      const newSet = new Set(prev);
      newSet.delete(threadId);
      return newSet;
    });
  }, [threads]);

  // Dismiss all notifications
  const dismissAllNotifications = useCallback(() => {
    // Add all executing threads to dismissedOngoingTasks
    const ongoingThreadIds = threads
      .filter(t => t.status === 'executing')
      .map(t => t.id);
    
    if (ongoingThreadIds.length > 0) {
      setDismissedOngoingTasks(prev => new Set([...prev, ...ongoingThreadIds]));
    }
    
    // Add all attention needed threads to dismissedAttentionNeeded
    const attentionNeededThreadIds = threads
      .filter(t => t.status === 'clarification_needed')
      .map(t => t.id);
    
    if (attentionNeededThreadIds.length > 0) {
      setDismissedAttentionNeeded(prev => new Set([...prev, ...attentionNeededThreadIds]));
    }
    
    // Mark completed threads as dismissed
    setThreads(prev => prev.map(t => 
      t.status === 'success' 
        ? { ...t, notificationDismissed: true }
        : t
    ));
    
    // Clear all notifications
    setVisibleNotifications([]);
    setCurrentNotificationIndex(0);
  }, [threads]);

  useEffect(() => {
    const handleKeyDown = (e) => {
      // Debug: Log key events when Alt is pressed (remove in production)
      if (e.altKey && !showSpotlight) {
        console.log('Alt key pressed with:', { key: e.key, code: e.code, showSpotlight, visibleNotifications: visibleNotifications.length });
      }
      
      // Option + Up/Down: Cycle through notifications (when spotlight is closed and notifications are visible)
      if (e.altKey && (e.key === 'ArrowUp' || e.key === 'ArrowDown') && !showSpotlight && visibleNotifications.length > 0) {
        e.preventDefault();
        const sortedNotifications = getSortedNotifications();
        if (sortedNotifications.length === 0) return;
        
        if (e.key === 'ArrowUp') {
          // Cycle backwards (infinite loop)
          setCurrentNotificationIndex(prev => 
            prev === 0 ? sortedNotifications.length - 1 : prev - 1
          );
        } else {
          // Cycle forwards (infinite loop)
          setCurrentNotificationIndex(prev => 
            (prev + 1) % sortedNotifications.length
          );
        }
      }
      // Option + R: Reply to current notification
      // Use e.code to handle special characters on macOS (Option+R = ®, etc.)
      else if (e.altKey && (e.key === 'r' || e.key === 'R' || e.code === 'KeyR') && !showSpotlight && visibleNotifications.length > 0) {
        e.preventDefault();
        const sortedNotifications = getSortedNotifications();
        if (sortedNotifications.length > 0) {
          const threadId = sortedNotifications[currentNotificationIndex];
          openSpotlightWithThread(threadId);
        }
      }
      // Option + P: Stop/Pause current notification (if it's executing)
      // Use e.code to handle special characters on macOS (Option+P = π, etc.)
      else if (e.altKey && (e.key === 'p' || e.key === 'P' || e.code === 'KeyP') && !showSpotlight && visibleNotifications.length > 0) {
        e.preventDefault();
        const sortedNotifications = getSortedNotifications();
        if (sortedNotifications.length > 0) {
          const threadId = sortedNotifications[currentNotificationIndex];
          const thread = threads.find(t => t.id === threadId);
          if (thread && thread.status === 'executing') {
            handleStopExecution(threadId);
          }
        }
      }
      // Option + X: Dismiss all notifications
      // Use e.code to handle special characters on macOS (Option+X = ≈, etc.)
      else if (e.altKey && (e.key === 'x' || e.key === 'X' || e.code === 'KeyX') && !showSpotlight && visibleNotifications.length > 0) {
        e.preventDefault();
        dismissAllNotifications();
      }
      // Cmd + Shift + Space: Toggle spotlight
      else if (e.metaKey && e.shiftKey && e.key === ' ') {
        e.preventDefault();
        setShowSpotlight(!showSpotlight);
        setInput('');
        setIsReplyMode(false);
        setReplyThreadId(null);
        setActiveThreadId(null); // Clear activeThreadId when closing spotlight
        hasInitializedInput.current = false; // Reset to allow re-initialization on next open
      }
      // Cmd + R: Enter reply mode (only when in spotlight)
      else if (e.metaKey && e.key === 'r' && showSpotlight && !isReplyMode && replyThreadId) {
        e.preventDefault();
        // If in spotlight but not reply mode, enter reply mode for the current thread
        setIsReplyMode(true);
        setInput('');
      }
      // Cmd + P: Stop execution (only when in spotlight with active thread)
      else if (e.metaKey && e.key === 'p' && showSpotlight && activeThreadId) {
        e.preventDefault();
        // If in spotlight, stop the active thread
        handleStopExecution(activeThreadId);
      }
      // Spotlight-specific shortcuts (only when spotlight is open and not in reply mode)
      else if (showSpotlight && !isReplyMode) {
        // Escape: Close spotlight
        if (e.key === 'Escape') {
          e.preventDefault();
          setShowSpotlight(false);
          setInput('');
          setShowThreadsModal(false);
          setShowSettingsModal(false);
          setActiveThreadId(null);
        }
        // Cmd + B: Toggle Chat History
        else if (e.metaKey && e.key === 'b') {
          e.preventDefault();
          setShowThreadsModal(!showThreadsModal);
          setShowSettingsModal(false);
        }
        // Cmd + ,: Toggle Settings
        else if (e.metaKey && e.key === ',') {
          e.preventDefault();
          setShowSettingsModal(!showSettingsModal);
          setShowThreadsModal(false);
        }
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [showSpotlight, isReplyMode, activeThreadId, replyThreadId, threads, visibleNotifications, handleStopExecution, showThreadsModal, showSettingsModal, currentNotificationIndex, getSortedNotifications, openSpotlightWithThread, dismissAllNotifications]);

  useEffect(() => {
    if (showSpotlight && spotlightRef.current) {
      spotlightRef.current.focus();
    }
  }, [showSpotlight]);

  // Handle Escape key globally when in reply mode
  useEffect(() => {
    if (!isReplyMode || !replyThreadId) return;

    const handleEscapeKey = (e) => {
      if (e.key === 'Escape') {
        e.preventDefault();
        e.stopPropagation();
        // Exit reply mode and go back to thread list, don't close spotlight
        setIsReplyMode(false);
        setReplyThreadId(null);
        setActiveThreadId(null); // Clear activeThreadId when exiting reply mode
        setInput('');
      }
    };

    window.addEventListener('keydown', handleEscapeKey);
    return () => window.removeEventListener('keydown', handleEscapeKey);
  }, [isReplyMode, replyThreadId]);

  // Handle Ctrl (Mac) / Alt (Windows) for voice input
  useEffect(() => {
    if (!showSpotlight) return;

    const isMac = navigator.platform.toUpperCase().indexOf('MAC') >= 0;

    const handleKeyDown = (e) => {
      // Use Ctrl on Mac, Alt on Windows/Linux
      const isVoiceKey = isMac ? e.ctrlKey : e.altKey;
      
      // Start timer on voice key press (only if not repeating)
      if (isVoiceKey && !e.repeat && !voiceKeyTimerRef.current) {
        // Set a timer to activate voice input after 250ms
        voiceKeyTimerRef.current = setTimeout(() => {
          voiceActivatedRef.current = true;
          setIsVoiceActive(true);
          voiceKeyTimerRef.current = null;
        }, 250);
      }
    };

    const handleKeyUp = (e) => {
      // Check for Ctrl on Mac, Alt on Windows/Linux
      const isVoiceKey = (isMac && e.key === 'Control') || (!isMac && e.key === 'Alt');
      
      if (isVoiceKey) {
        // Clear the timer if voice key released before 250ms
        if (voiceKeyTimerRef.current) {
          clearTimeout(voiceKeyTimerRef.current);
          voiceKeyTimerRef.current = null;
          voiceActivatedRef.current = false;
        } else if (voiceActivatedRef.current) {
          // Voice was activated, so deactivate it
          setIsVoiceActive(false);
          voiceActivatedRef.current = false;
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('keyup', handleKeyUp);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('keyup', handleKeyUp);
      // Clean up timer on unmount
      if (voiceKeyTimerRef.current) {
        clearTimeout(voiceKeyTimerRef.current);
        voiceKeyTimerRef.current = null;
      }
    };
  }, [showSpotlight]);

  // Automatically enter reply mode when a thread is selected in Chat History
  useEffect(() => {
    if (replyThreadId && showThreadsModal) {
      setIsReplyMode(true);
    }
  }, [replyThreadId, showThreadsModal]);

  // Auto-resize textarea based on content
  useEffect(() => {
    const textarea = spotlightRef.current;
    if (textarea) {
      // Reset height to auto to get the correct scrollHeight
      textarea.style.height = 'auto';
      // Set height based on content, respecting the max-height
      const newHeight = Math.min(textarea.scrollHeight, 120); // 120px = 6 lines
      textarea.style.height = `${newHeight}px`;
    }
  }, [input]);

  // Top suggestion text for placeholder - dynamically computed based on input
  const getSuggestionText = () => {
    // In reply mode, show "Reply to Composite" placeholder
    if (isReplyMode) {
      return 'Reply to Composite';
    }
    
    const currentTabMention = `@[${currentTab.title}]`;
    const hasCurrentTab = input.includes(currentTabMention);
    
    if (!hasCurrentTab && input.trim() === '') {
      return '@Current Tab';
    }
    
    if (hasCurrentTab || input.trim() === currentTabMention.trim()) {
      return 'Send reminder emails for today'; // 31 characters, fits with "tab" badge
    }
    
    return '@Current Tab';
  };
  
  const suggestionText = getSuggestionText();

  // Clean up dismissed ongoing tasks when they change status from 'executing'
  useEffect(() => {
    setDismissedOngoingTasks(prev => {
      const newSet = new Set(prev);
      let hasChanges = false;
      
      // Remove threads from dismissedOngoingTasks if they're no longer executing
      prev.forEach(threadId => {
        const thread = threads.find(t => t.id === threadId);
        if (!thread || thread.status !== 'executing') {
          newSet.delete(threadId);
          hasChanges = true;
        }
      });
      
      return hasChanges ? newSet : prev;
    });
  }, [threads]);

  // Clean up dismissed attention needed threads when they change status from 'clarification_needed'
  useEffect(() => {
    setDismissedAttentionNeeded(prev => {
      const newSet = new Set(prev);
      let hasChanges = false;
      
      // Remove threads from dismissedAttentionNeeded if they're no longer needing clarification
      prev.forEach(threadId => {
        const thread = threads.find(t => t.id === threadId);
        if (!thread || thread.status !== 'clarification_needed') {
          newSet.delete(threadId);
          hasChanges = true;
        }
      });
      
      return hasChanges ? newSet : prev;
    });
  }, [threads]);

  // Auto-show notifications only for NEW actions (when currentAction changes)
  useEffect(() => {
    threads.forEach(thread => {
      // Only show notification if:
      // 1. Thread needs attention (executing, needs clarification, or just completed)
      // 2. The currentAction is new (different from last time we showed a notification)
      // 3. It's not already visible
      // 4. The thread hasn't been viewed since the last action (like macOS Messages)
      // 5. For ongoing tasks, don't show if it's been dismissed (treat entire ongoing process as one notification)
      // 6. Thread is not currently being viewed in the spotlight
      const needsAttention = 
        thread.status === 'executing' || 
        thread.status === 'clarification_needed' || 
        thread.status === 'error' ||
        (thread.status === 'success' && !thread.notificationDismissed);
      
      const isNewAction = 
        lastNotificationAction[thread.id] !== thread.currentAction;
      
      const notAlreadyVisible = !visibleNotifications.includes(thread.id);
      
      // Check if thread has been viewed since the action (no notification needed)
      const lastViewedTime = threadViewTimestamps[thread.id];
      const hasBeenViewedSinceAction = lastViewedTime && thread.lastActionTime && lastViewedTime >= thread.lastActionTime;
      
      // For ongoing tasks (executing status), don't show notification if it's been dismissed
      const isOngoingAndDismissed = thread.status === 'executing' && dismissedOngoingTasks.has(thread.id);
      
      // For attention needed (clarification_needed status), don't show notification if it's been dismissed
      const isAttentionNeededAndDismissed = thread.status === 'clarification_needed' && dismissedAttentionNeeded.has(thread.id);
      
      // For error status, don't show notification if it's been dismissed
      const isErrorAndDismissed = thread.status === 'error' && dismissedAttentionNeeded.has(thread.id);
      
      // Don't show notification if the thread is currently being viewed
      const isCurrentlyViewing = showSpotlight && showThreadsModal && activeThreadId === thread.id;
      
      if (needsAttention && isNewAction && notAlreadyVisible && !hasBeenViewedSinceAction && !isOngoingAndDismissed && !isAttentionNeededAndDismissed && !isErrorAndDismissed && !isCurrentlyViewing) {
        setVisibleNotifications(prev => [...prev, thread.id]);
        setLastNotificationAction(prev => ({
          ...prev,
          [thread.id]: thread.currentAction
        }));
      }
    });
  }, [threads, lastNotificationAction, visibleNotifications, threadViewTimestamps, dismissedOngoingTasks, dismissedAttentionNeeded, showSpotlight, showThreadsModal, activeThreadId]);

  // Reset notification index when notifications change
  useEffect(() => {
    const sortedNotifications = getSortedNotifications();
    if (sortedNotifications.length > 0 && currentNotificationIndex >= sortedNotifications.length) {
      // If current index is out of bounds, reset to 0
      setCurrentNotificationIndex(0);
    }
  }, [visibleNotifications, currentNotificationIndex]);

  // Auto-dismiss notifications for currently viewed thread when status changes
  // Only trigger when actively viewing a thread in reply mode, not just in the thread list
  useEffect(() => {
    if (showSpotlight && showThreadsModal && isReplyMode && replyThreadId && activeThreadId === replyThreadId) {
      const activeThread = threads.find(t => t.id === activeThreadId);
      if (activeThread) {
        // Update view timestamp to mark as viewed
        setThreadViewTimestamps(prev => ({
          ...prev,
          [activeThreadId]: Date.now()
        }));
        
        // Mark as dismissed based on status
        if (activeThread.status === 'executing') {
          setDismissedOngoingTasks(prev => {
            if (!prev.has(activeThreadId)) {
              return new Set([...prev, activeThreadId]);
            }
            return prev;
          });
        } else if (activeThread.status === 'clarification_needed') {
          setDismissedAttentionNeeded(prev => {
            if (!prev.has(activeThreadId)) {
              return new Set([...prev, activeThreadId]);
            }
            return prev;
          });
        } else if (activeThread.status === 'error') {
          setDismissedAttentionNeeded(prev => {
            if (!prev.has(activeThreadId)) {
              return new Set([...prev, activeThreadId]);
            }
            return prev;
          });
        } else if (activeThread.status === 'success' && !activeThread.notificationDismissed) {
          setThreads(prev => prev.map(t => 
            t.id === activeThreadId 
              ? { ...t, notificationDismissed: true }
              : t
          ));
        }
      }
    }
  }, [showSpotlight, showThreadsModal, isReplyMode, replyThreadId, activeThreadId, threads]);

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (openMenuThreadId !== null) {
        setOpenMenuThreadId(null);
      }
    };
    
    if (openMenuThreadId !== null) {
      document.addEventListener('click', handleClickOutside);
      return () => document.removeEventListener('click', handleClickOutside);
    }
  }, [openMenuThreadId]);

  const handleExecute = (command) => {
    if (!command.trim()) return;

    // If in reply mode, send reply to the thread being replied to
    if (isReplyMode && replyThreadId) {
      handleRespondToClarification(replyThreadId, command);
      // KEEP Spotlight View open when replying to a thread
      setInput('');
      // Stay in reply mode to see the response
      return;
    }

    // Otherwise, create new thread
    const newThread = {
      id: Date.now(),
      command,
      status: 'executing',
      updates: [],
      currentAction: 'Starting task...',
      timestamp: new Date(),
      lastActionTime: Date.now(),
      conversationHistory: [
        { role: 'user', message: command, timestamp: new Date(), progressSnapshot: null }
      ],
    };

    setThreads([newThread, ...threads]);
    setShowSpotlight(false);
    setInput('');
    setIsReplyMode(false);
    setReplyThreadId(null);
    setActiveThreadId(null); // Clear activeThreadId when closing spotlight

    simulateTaskExecution(newThread.id, command);
  };

  const simulateTaskExecution = (threadId, command) => {
    // Different flows based on command
    if (command.includes('reminder emails')) {
      simulateReminderEmailsFlow(threadId);
    } else if (command.includes('interview summary')) {
      simulateInterviewSummaryFlow(threadId);
    } else if (command.includes('Zoom links')) {
      simulateZoomLinksFlow(threadId);
    } else if (command.includes('CSV')) {
      simulateCSVExportFlow(threadId);
    } else {
      // Default flow
      const actions = [
        'Analyzing context...',
        'Fetching current tab information...',
        'Clarification needed: Which email account to use?',
      ];
      const delays = [800, 1200, 2000];
      
      actions.forEach((action, idx) => {
        setTimeout(() => {
          setThreads((prev) =>
            prev.map((t) => {
              if (t.id === threadId && t.status !== 'cancelled') {
                const isError = action.includes('Clarification');
                return {
                  ...t,
                  currentAction: action,
                  status: isError ? 'clarification_needed' : 'executing',
                  updates: [...t.updates, action],
                  lastActionTime: Date.now(),
                };
              }
              return t;
            })
          );
        }, delays[idx]);
      });
    }
  };

  const simulateReminderEmailsFlow = (threadId) => {
    // Major steps with atomic sub-steps
    const majorSteps = [
      {
        id: 1,
        title: 'Open calendar and find today\'s reference check calls',
        atomicSteps: [
          { text: 'Navigate to calendar.google.com', delay: 800 },
          { text: 'Click on "Today" view', delay: 1000 },
          { text: 'Filter for events with "reference check" keyword', delay: 1200 },
          { text: 'Found 5 reference check calls scheduled for today', delay: 1500 },
        ]
      },
      {
        id: 2,
        title: 'Extract contact information',
        atomicSteps: [
          { text: 'Reading event details for first call...', delay: 1000 },
          { text: 'Extracting email: john.smith@company.com', delay: 900 },
          { text: 'Reading event details for second call...', delay: 1000 },
          { text: 'Extracting email: sarah.jones@company.com', delay: 900 },
          { text: 'Reading event details for remaining calls...', delay: 1200 },
          { text: 'Successfully extracted all 5 contact emails', delay: 800 },
        ]
      },
      {
        id: 3,
        title: 'Compose and send reminder emails',
        atomicSteps: [
          { text: 'Opening Gmail...', delay: 800 },
          { text: 'Composing email for John Smith (9:00 AM call)', delay: 1200 },
          { text: 'Sending email to john.smith@company.com', delay: 1000 },
          { text: 'Composing email for Sarah Jones (10:30 AM call)', delay: 1200 },
          { text: 'Sending email to sarah.jones@company.com', delay: 1000 },
          { text: 'Composing and sending remaining 3 emails...', delay: 1800 },
          { text: 'All reminder emails sent successfully', delay: 800 },
        ]
      }
    ];

    // Initialize with major steps visible - no message yet
    setTimeout(() => {
      setThreads((prev) =>
        prev.map((t) => {
          if (t.id === threadId && t.status !== 'cancelled') {
            return {
              ...t,
              majorSteps: majorSteps.map(step => ({ ...step, status: 'pending', completedAtomicSteps: [] })),
              currentAction: 'Planning task...',
              status: 'executing',
              lastActionTime: Date.now(),
            };
          }
          return t;
        })
      );
    }, 500);

    // Execute only first 2 major steps, then stop for clarification
    let cumulativeDelay = 1000;
    const stepsToExecute = 2; // Only execute first 2 steps
    
    for (let majorIdx = 0; majorIdx < stepsToExecute; majorIdx++) {
      const majorStep = majorSteps[majorIdx];
      
      // Mark major step as in progress
      setTimeout(() => {
        setThreads((prev) =>
          prev.map((t) => {
            if (t.id === threadId && t.status !== 'cancelled') {
              const updatedMajorSteps = [...t.majorSteps];
              updatedMajorSteps[majorIdx] = { ...updatedMajorSteps[majorIdx], status: 'executing' };
              return {
                ...t,
                majorSteps: updatedMajorSteps,
                currentAction: `${majorStep.title}...`,
                lastActionTime: Date.now(),
              };
            }
            return t;
          })
        );
      }, cumulativeDelay);
      cumulativeDelay += 300;

      // Execute atomic steps within this major step
      majorStep.atomicSteps.forEach((atomicStep, atomicIdx) => {
        // Start the atomic step (show as in-progress)
        setTimeout(() => {
          setThreads((prev) =>
            prev.map((t) => {
              if (t.id === threadId && t.status !== 'cancelled') {
                return {
                  ...t,
                  currentAction: atomicStep.text,
                  lastActionTime: Date.now(),
                };
              }
              return t;
            })
          );
        }, cumulativeDelay);
        
        cumulativeDelay += atomicStep.delay;
        
        // Mark atomic step as completed after its delay
        setTimeout(() => {
          setThreads((prev) =>
            prev.map((t) => {
              if (t.id === threadId && t.status !== 'cancelled') {
                const updatedMajorSteps = [...t.majorSteps];
                const completedAtomicSteps = [...(updatedMajorSteps[majorIdx].completedAtomicSteps || []), atomicStep.text];
                updatedMajorSteps[majorIdx] = {
                  ...updatedMajorSteps[majorIdx],
                  completedAtomicSteps,
                };
                return {
                  ...t,
                  majorSteps: updatedMajorSteps,
                };
              }
              return t;
            })
          );
        }, cumulativeDelay);
      });

      // Mark major step as completed - updates live in the existing todolist
      setTimeout(() => {
        setThreads((prev) =>
          prev.map((t) => {
            if (t.id === threadId && t.status !== 'cancelled') {
              const updatedMajorSteps = [...t.majorSteps];
              updatedMajorSteps[majorIdx] = { ...updatedMajorSteps[majorIdx], status: 'completed' };
              
              return {
                ...t,
                majorSteps: updatedMajorSteps,
              };
            }
            return t;
          })
        );
      }, cumulativeDelay);
      cumulativeDelay += 300;
    }

    // Stop for clarification after 2 steps
    setTimeout(() => {
      setThreads((prev) =>
        prev.map((t) => {
          if (t.id === threadId && t.status !== 'cancelled') {
            return {
              ...t,
              status: 'clarification_needed',
              currentAction: 'Which email account should I use to send the reminder emails?',
              lastActionTime: Date.now(),
            };
          }
          return t;
        })
      );
    }, cumulativeDelay);
  };

  const simulateInterviewSummaryFlow = (threadId) => {
    // Major steps with atomic sub-steps
    const majorSteps = [
      {
        id: 1,
        title: 'Read through interview notes',
        atomicSteps: [
          { text: 'Navigate to drive.google.com', delay: 800 },
          { text: 'Click on search bar', delay: 1200 },
          { text: 'Search for "Interview Notes"', delay: 1000 },
          { text: 'Press Enter to complete search', delay: 800 },
          { text: 'Click on "Q4 2024 Interview Notes" document', delay: 1200 },
          { text: 'Reading document contents...', delay: 1500 },
        ]
      },
      {
        id: 2,
        title: 'Create a new document for summary',
        atomicSteps: [
          { text: 'Navigate to docs.google.com', delay: 800 },
          { text: 'Click on "Blank" template', delay: 1000 },
          { text: 'Type title: "Interview Summary - Oct 30, 2024"', delay: 1200 },
          { text: 'Press Enter to confirm title', delay: 600 },
        ]
      },
      {
        id: 3,
        title: 'Summarize within document',
        atomicSteps: [
          { text: 'Analyzing interview notes...', delay: 1500 },
          { text: 'Typing candidate name: "Arya Sharma"', delay: 1000 },
          { text: 'Adding position: "Senior Software Engineer"', delay: 1000 },
          { text: 'Summarizing key points...', delay: 1800 },
          { text: 'Adding technical assessment notes...', delay: 1500 },
          { text: 'Adding interviewer feedback...', delay: 1500 },
          { text: 'Formatting document...', delay: 1000 },
          { text: 'Saving document...', delay: 800 },
        ]
      }
    ];

    // Initialize with major steps visible - no message yet
    setTimeout(() => {
      setThreads((prev) =>
        prev.map((t) => {
          if (t.id === threadId && t.status !== 'cancelled') {
            return {
              ...t,
              majorSteps: majorSteps.map(step => ({ ...step, status: 'pending', completedAtomicSteps: [] })),
              currentAction: 'Planning task...',
              status: 'executing',
              lastActionTime: Date.now(),
            };
          }
          return t;
        })
      );
    }, 500);

    // Execute major steps sequentially
    let cumulativeDelay = 1000;
    majorSteps.forEach((majorStep, majorIdx) => {
      // Mark major step as in progress
      setTimeout(() => {
        setThreads((prev) =>
          prev.map((t) => {
            if (t.id === threadId && t.status !== 'cancelled') {
              const updatedMajorSteps = [...t.majorSteps];
              updatedMajorSteps[majorIdx] = { ...updatedMajorSteps[majorIdx], status: 'executing' };
              return {
                ...t,
                majorSteps: updatedMajorSteps,
                currentAction: `${majorStep.title}...`,
                lastActionTime: Date.now(),
              };
            }
            return t;
          })
        );
      }, cumulativeDelay);
      cumulativeDelay += 300;

      // Execute atomic steps within this major step
      majorStep.atomicSteps.forEach((atomicStep, atomicIdx) => {
        // Start the atomic step (show as in-progress)
        setTimeout(() => {
          setThreads((prev) =>
            prev.map((t) => {
              if (t.id === threadId && t.status !== 'cancelled') {
                return {
                  ...t,
                  currentAction: atomicStep.text,
                  lastActionTime: Date.now(),
                };
              }
              return t;
            })
          );
        }, cumulativeDelay);
        
        cumulativeDelay += atomicStep.delay;
        
        // Mark atomic step as completed after its delay
        setTimeout(() => {
          setThreads((prev) =>
            prev.map((t) => {
              if (t.id === threadId && t.status !== 'cancelled') {
                const updatedMajorSteps = [...t.majorSteps];
                const completedAtomicSteps = [...(updatedMajorSteps[majorIdx].completedAtomicSteps || []), atomicStep.text];
                updatedMajorSteps[majorIdx] = {
                  ...updatedMajorSteps[majorIdx],
                  completedAtomicSteps,
                };
                return {
                  ...t,
                  majorSteps: updatedMajorSteps,
                };
              }
              return t;
            })
          );
        }, cumulativeDelay);
      });

      // Mark major step as completed - updates live in the existing todolist
      setTimeout(() => {
        setThreads((prev) =>
          prev.map((t) => {
            if (t.id === threadId && t.status !== 'cancelled') {
              const updatedMajorSteps = [...t.majorSteps];
              updatedMajorSteps[majorIdx] = { ...updatedMajorSteps[majorIdx], status: 'completed' };
              
              return {
                ...t,
                majorSteps: updatedMajorSteps,
              };
            }
            return t;
          })
        );
      }, cumulativeDelay);
      cumulativeDelay += 300;
    });

    // Mark entire task as complete - message will be shown separately after todolist
    setTimeout(() => {
      setThreads((prev) =>
        prev.map((t) => {
          if (t.id === threadId && t.status !== 'cancelled') {
            return {
              ...t,
              status: 'success',
              currentAction: 'Done! I\'ve successfully created a comprehensive interview summary document for Arya Sharma. The document includes all key points from the interview notes, technical assessment results, and interviewer feedback, formatted and saved in Google Docs.',
              lastActionTime: Date.now(),
            };
          }
          return t;
        })
      );
    }, cumulativeDelay);
  };

  const simulateZoomLinksFlow = (threadId) => {
    // Major steps with atomic sub-steps
    const majorSteps = [
      {
        id: 1,
        title: 'Find calendar events without Zoom links',
        atomicSteps: [
          { text: 'Navigate to calendar.google.com', delay: 800 },
          { text: 'Click on "Upcoming" view', delay: 1000 },
          { text: 'Scanning events for next 7 days...', delay: 1500 },
          { text: 'Checking event 1: "Team Standup" - No Zoom link', delay: 900 },
          { text: 'Checking event 2: "Client Demo" - No Zoom link', delay: 900 },
          { text: 'Checking event 3: "Design Review" - No Zoom link', delay: 900 },
          { text: 'Found 3 events without Zoom links', delay: 800 },
        ]
      },
      {
        id: 2,
        title: 'Generate Zoom meeting links',
        atomicSteps: [
          { text: 'Opening Zoom scheduler in new tab', delay: 1000 },
          { text: 'Generating Zoom link for "Team Standup"...', delay: 1500 },
          { text: 'Created: https://zoom.us/j/123456789', delay: 800 },
          { text: 'Generating Zoom link for "Client Demo"...', delay: 1500 },
          { text: 'Created: https://zoom.us/j/987654321', delay: 800 },
          { text: 'Generating Zoom link for "Design Review"...', delay: 1500 },
          { text: 'Created: https://zoom.us/j/456789123', delay: 800 },
        ]
      },
      {
        id: 3,
        title: 'Add links to calendar events',
        atomicSteps: [
          { text: 'Returning to Google Calendar...', delay: 800 },
          { text: 'Opening "Team Standup" event', delay: 1000 },
          { text: 'Adding Zoom link to event description', delay: 1200 },
          { text: 'Saving event...', delay: 800 },
          { text: 'Opening "Client Demo" event', delay: 1000 },
          { text: 'Adding Zoom link to event description', delay: 1200 },
          { text: 'Saving event...', delay: 800 },
          { text: 'Opening "Design Review" event', delay: 1000 },
          { text: 'Adding Zoom link to event description', delay: 1200 },
          { text: 'Saving event...', delay: 800 },
          { text: 'All calendar invites updated successfully', delay: 600 },
        ]
      }
    ];

    // Initialize with major steps visible - no message yet
    setTimeout(() => {
      setThreads((prev) =>
        prev.map((t) => {
          if (t.id === threadId && t.status !== 'cancelled') {
            return {
              ...t,
              majorSteps: majorSteps.map(step => ({ ...step, status: 'pending', completedAtomicSteps: [] })),
              currentAction: 'Planning task...',
              status: 'executing',
              lastActionTime: Date.now(),
            };
          }
          return t;
        })
      );
    }, 500);

    // Execute major steps sequentially
    let cumulativeDelay = 1000;
    majorSteps.forEach((majorStep, majorIdx) => {
      // Mark major step as in progress
      setTimeout(() => {
        setThreads((prev) =>
          prev.map((t) => {
            if (t.id === threadId && t.status !== 'cancelled') {
              const updatedMajorSteps = [...t.majorSteps];
              updatedMajorSteps[majorIdx] = { ...updatedMajorSteps[majorIdx], status: 'executing' };
              return {
                ...t,
                majorSteps: updatedMajorSteps,
                currentAction: `${majorStep.title}...`,
                lastActionTime: Date.now(),
              };
            }
            return t;
          })
        );
      }, cumulativeDelay);
      cumulativeDelay += 300;

      // Execute atomic steps within this major step
      majorStep.atomicSteps.forEach((atomicStep, atomicIdx) => {
        // Start the atomic step (show as in-progress)
        setTimeout(() => {
          setThreads((prev) =>
            prev.map((t) => {
              if (t.id === threadId && t.status !== 'cancelled') {
                return {
                  ...t,
                  currentAction: atomicStep.text,
                  lastActionTime: Date.now(),
                };
              }
              return t;
            })
          );
        }, cumulativeDelay);
        
        cumulativeDelay += atomicStep.delay;
        
        // Mark atomic step as completed after its delay
        setTimeout(() => {
          setThreads((prev) =>
            prev.map((t) => {
              if (t.id === threadId && t.status !== 'cancelled') {
                const updatedMajorSteps = [...t.majorSteps];
                const completedAtomicSteps = [...(updatedMajorSteps[majorIdx].completedAtomicSteps || []), atomicStep.text];
                updatedMajorSteps[majorIdx] = {
                  ...updatedMajorSteps[majorIdx],
                  completedAtomicSteps,
                };
                return {
                  ...t,
                  majorSteps: updatedMajorSteps,
                };
              }
              return t;
            })
          );
        }, cumulativeDelay);
      });

      // Mark major step as completed - updates live in the existing todolist
      setTimeout(() => {
        setThreads((prev) =>
          prev.map((t) => {
            if (t.id === threadId && t.status !== 'cancelled') {
              const updatedMajorSteps = [...t.majorSteps];
              updatedMajorSteps[majorIdx] = { ...updatedMajorSteps[majorIdx], status: 'completed' };
              
              return {
                ...t,
                majorSteps: updatedMajorSteps,
              };
            }
            return t;
          })
        );
      }, cumulativeDelay);
      cumulativeDelay += 300;
    });

    // Mark entire task as complete and add final message
    setTimeout(() => {
      setThreads((prev) =>
        prev.map((t) => {
          if (t.id === threadId && t.status !== 'cancelled') {
            return {
              ...t,
              status: 'success',
              currentAction: 'Done! I\'ve successfully added Zoom meeting links to 3 upcoming calendar events. All events now have unique meeting URLs and the calendar invites have been updated automatically.',
              lastActionTime: Date.now(),
            };
          }
          return t;
        })
      );
    }, cumulativeDelay);
  };

  const simulateCSVExportFlow = (threadId) => {
    // Major steps with atomic sub-steps
    const majorSteps = [
      {
        id: 1,
        title: 'Access calendar and select date range',
        atomicSteps: [
          { text: 'Navigate to calendar.google.com', delay: 800 },
          { text: 'Click on date range selector', delay: 1000 },
          { text: 'Select "This week" option', delay: 1200 },
          { text: 'Date range set: Oct 28 - Nov 3, 2024', delay: 800 },
        ]
      },
      {
        id: 2,
        title: 'Fetch and organize calendar events',
        atomicSteps: [
          { text: 'Fetching calendar events for selected range...', delay: 1500 },
          { text: 'Found 15 events in date range', delay: 1000 },
          { text: 'Extracting event titles...', delay: 1200 },
          { text: 'Extracting dates and times...', delay: 1200 },
          { text: 'Extracting attendee information...', delay: 1200 },
          { text: 'Extracting locations...', delay: 1000 },
          { text: 'All event data collected successfully', delay: 800 },
        ]
      },
      {
        id: 3,
        title: 'Convert to CSV and download',
        atomicSteps: [
          { text: 'Creating CSV headers...', delay: 1000 },
          { text: 'Formatting event data to CSV rows...', delay: 1800 },
          { text: 'Adding 15 events to CSV file...', delay: 1500 },
          { text: 'Validating CSV format...', delay: 1000 },
          { text: 'Generating download file...', delay: 1200 },
          { text: 'CSV file ready: calendar_export_week_44.csv', delay: 800 },
        ]
      }
    ];

    // Initialize with major steps visible - no message yet
    setTimeout(() => {
      setThreads((prev) =>
        prev.map((t) => {
          if (t.id === threadId && t.status !== 'cancelled') {
            return {
              ...t,
              majorSteps: majorSteps.map(step => ({ ...step, status: 'pending', completedAtomicSteps: [] })),
              currentAction: 'Planning task...',
              status: 'executing',
              lastActionTime: Date.now(),
            };
          }
          return t;
        })
      );
    }, 500);

    // Execute major steps sequentially
    let cumulativeDelay = 1000;
    majorSteps.forEach((majorStep, majorIdx) => {
      // Mark major step as in progress
      setTimeout(() => {
        setThreads((prev) =>
          prev.map((t) => {
            if (t.id === threadId && t.status !== 'cancelled') {
              const updatedMajorSteps = [...t.majorSteps];
              updatedMajorSteps[majorIdx] = { ...updatedMajorSteps[majorIdx], status: 'executing' };
              return {
                ...t,
                majorSteps: updatedMajorSteps,
                currentAction: `${majorStep.title}...`,
                lastActionTime: Date.now(),
              };
            }
            return t;
          })
        );
      }, cumulativeDelay);
      cumulativeDelay += 300;

      // Execute atomic steps within this major step
      majorStep.atomicSteps.forEach((atomicStep, atomicIdx) => {
        // Start the atomic step (show as in-progress)
        setTimeout(() => {
          setThreads((prev) =>
            prev.map((t) => {
              if (t.id === threadId && t.status !== 'cancelled') {
                return {
                  ...t,
                  currentAction: atomicStep.text,
                  lastActionTime: Date.now(),
                };
              }
              return t;
            })
          );
        }, cumulativeDelay);
        
        cumulativeDelay += atomicStep.delay;
        
        // Mark atomic step as completed after its delay
        setTimeout(() => {
          setThreads((prev) =>
            prev.map((t) => {
              if (t.id === threadId && t.status !== 'cancelled') {
                const updatedMajorSteps = [...t.majorSteps];
                const completedAtomicSteps = [...(updatedMajorSteps[majorIdx].completedAtomicSteps || []), atomicStep.text];
                updatedMajorSteps[majorIdx] = {
                  ...updatedMajorSteps[majorIdx],
                  completedAtomicSteps,
                };
                return {
                  ...t,
                  majorSteps: updatedMajorSteps,
                };
              }
              return t;
            })
          );
        }, cumulativeDelay);
      });

      // Mark major step as completed - updates live in the existing todolist
      setTimeout(() => {
        setThreads((prev) =>
          prev.map((t) => {
            if (t.id === threadId && t.status !== 'cancelled') {
              const updatedMajorSteps = [...t.majorSteps];
              updatedMajorSteps[majorIdx] = { ...updatedMajorSteps[majorIdx], status: 'completed' };
              
              return {
                ...t,
                majorSteps: updatedMajorSteps,
              };
            }
            return t;
          })
        );
      }, cumulativeDelay);
      cumulativeDelay += 300;
    });

    // Mark entire task as complete and add final message
    setTimeout(() => {
      setThreads((prev) =>
        prev.map((t) => {
          if (t.id === threadId && t.status !== 'cancelled') {
            return {
              ...t,
              status: 'success',
              currentAction: 'Done! I\'ve successfully exported 15 calendar events from this week to a CSV file. The file includes event titles, dates, times, attendees, and locations, ready for your reporting needs.',
              lastActionTime: Date.now(),
            };
          }
          return t;
        })
      );
    }, cumulativeDelay);
  };

  const handleRespondToClarification = (threadId, response) => {
    // First, save snapshot on the last message and stop execution, then add new user message
    setThreads((prev) =>
      prev.map((t) => {
        if (t.id === threadId) {
          // Save snapshot on the current last message before adding new message
          const previousMessages = [...(t.conversationHistory || [])];
          if (previousMessages.length > 0) {
            const lastIdx = previousMessages.length - 1;
            previousMessages[lastIdx] = {
              ...previousMessages[lastIdx],
              progressSnapshot: t.majorSteps ? JSON.parse(JSON.stringify(t.majorSteps)) : null
            };
          }
          
          // Add new user message with null snapshot (will be populated later)
          return {
            ...t,
            status: 'cancelled',
            currentAction: 'Task stopped by user',
            lastActionTime: Date.now(),
            conversationHistory: [
              ...previousMessages,
              { role: 'user', message: response, timestamp: new Date(), progressSnapshot: null }
            ],
          };
        }
        return t;
      })
    );

    // Continue with step 3
    const majorStep = {
      id: 3,
      title: 'Compose and send reminder emails',
      atomicSteps: [
        { text: 'Opening Gmail...', delay: 800 },
        { text: 'Composing email for John Smith (9:00 AM call)', delay: 1200 },
        { text: 'Sending email to john.smith@company.com', delay: 1000 },
        { text: 'Composing email for Sarah Jones (10:30 AM call)', delay: 1200 },
        { text: 'Sending email to sarah.jones@company.com', delay: 1000 },
        { text: 'Composing and sending remaining 3 emails...', delay: 1800 },
        { text: 'All reminder emails sent successfully', delay: 800 },
      ]
    };

    // Mark as executing and start step 3 - no new message, just update state
    // Note: We intentionally allow updating cancelled threads here since we're restarting execution
    setThreads((prev) =>
      prev.map((t) => {
        if (t.id === threadId) {
          const updatedMajorSteps = [...t.majorSteps];
          updatedMajorSteps[2] = { ...updatedMajorSteps[2], status: 'executing', completedAtomicSteps: [] };
          
          return {
            ...t,
            majorSteps: updatedMajorSteps,
            currentAction: `Proceeding with ${response}...`,
            status: 'executing',
            lastActionTime: Date.now(),
          };
        }
        return t;
      })
    );

    let cumulativeDelay = 300;

    // Execute atomic steps for step 3
    majorStep.atomicSteps.forEach((atomicStep, atomicIdx) => {
      // Start the atomic step (show as in-progress)
      setTimeout(() => {
        setThreads((prev) =>
          prev.map((t) => {
            if (t.id === threadId && t.status !== 'cancelled') {
              return {
                ...t,
                currentAction: atomicStep.text,
              };
            }
            return t;
          })
        );
      }, cumulativeDelay);
      
      cumulativeDelay += atomicStep.delay;
      
      // Mark atomic step as completed after its delay
      setTimeout(() => {
        setThreads((prev) =>
          prev.map((t) => {
            if (t.id === threadId && t.status !== 'cancelled') {
              const updatedMajorSteps = [...t.majorSteps];
              const completedAtomicSteps = [...(updatedMajorSteps[2].completedAtomicSteps || []), atomicStep.text];
              updatedMajorSteps[2] = {
                ...updatedMajorSteps[2],
                completedAtomicSteps,
              };
              return {
                ...t,
                majorSteps: updatedMajorSteps,
              };
            }
            return t;
          })
        );
      }, cumulativeDelay);
    });

    // Mark step 3 as completed
    setTimeout(() => {
      setThreads((prev) =>
        prev.map((t) => {
          if (t.id === threadId && t.status !== 'cancelled') {
            const updatedMajorSteps = [...t.majorSteps];
            updatedMajorSteps[2] = { ...updatedMajorSteps[2], status: 'completed' };
            return {
              ...t,
              majorSteps: updatedMajorSteps,
            };
          }
          return t;
        })
      );
    }, cumulativeDelay);
    cumulativeDelay += 300;

    // Mark entire task as complete and add final message
    setTimeout(() => {
      setThreads((prev) =>
        prev.map((t) => {
          if (t.id === threadId && t.status !== 'cancelled') {
            return {
              ...t,
              status: 'success',
              currentAction: `Done! I've successfully sent reminder emails for today's 5 reference check calls using your ${response}. All contacts have been notified with personalized messages including the scheduled call times.`,
              lastActionTime: Date.now(),
            };
          }
          return t;
        })
      );
    }, cumulativeDelay);
  };

  const getStatusIcon = (status) => {
    switch (status) {
      case 'executing':
        return <Loader className="w-4 h-4 text-blue-500" />;
      case 'clarification_needed':
        return <AlertCircle className="w-4 h-4 text-yellow-500" />;
      case 'success':
        return <CheckCircle className="w-4 h-4 text-green-500" />;
      case 'error':
        return <AlertCircle className="w-4 h-4 text-red-500" />;
      default:
        return null;
    }
  };

  const activeThread = threads.find((t) => t.id === activeThreadId);

  // Calculate notification count - should match the number of active threads that need attention
  const getNotificationCount = () => {
    return threads.filter(t => {
      // Don't count dismissed ongoing tasks
      if (t.status === 'executing' && dismissedOngoingTasks.has(t.id)) {
        return false;
      }
      
      // Don't count dismissed attention needed threads
      if (t.status === 'clarification_needed' && dismissedAttentionNeeded.has(t.id)) {
        return false;
      }
      
      // Don't count dismissed error threads
      if (t.status === 'error' && dismissedAttentionNeeded.has(t.id)) {
        return false;
      }
      
      return (
        t.status === 'executing' || 
        t.status === 'clarification_needed' || 
        t.status === 'error' ||
        (t.status === 'success' && !t.notificationDismissed)
      );
    }).length;
  };

  // Dismiss notification (hide it until next action)
  const dismissNotification = (threadId) => {
    const thread = threads.find(t => t.id === threadId);
    
    setVisibleNotifications(prev => {
      const newNotifications = prev.filter(id => id !== threadId);
      // Reset index if dismissing current notification and there are remaining notifications
      if (newNotifications.length > 0) {
        const sortedNotifications = getSortedNotifications();
        const currentThreadId = sortedNotifications[currentNotificationIndex];
        if (currentThreadId === threadId) {
          // Reset to 0 if we dismissed the current one
          setCurrentNotificationIndex(0);
        }
      } else {
        setCurrentNotificationIndex(0);
      }
      return newNotifications;
    });
    
    // If it's an ongoing task, add it to dismissedOngoingTasks
    if (thread && thread.status === 'executing') {
      setDismissedOngoingTasks(prev => new Set([...prev, threadId]));
    }
    
    // If it's an attention needed thread, add it to dismissedAttentionNeeded
    if (thread && thread.status === 'clarification_needed') {
      setDismissedAttentionNeeded(prev => new Set([...prev, threadId]));
    }
    
    // If it's an error thread, add it to dismissedAttentionNeeded
    if (thread && thread.status === 'error') {
      setDismissedAttentionNeeded(prev => new Set([...prev, threadId]));
    }
    
    // Mark the notification as dismissed for completed threads
    setThreads(prev => prev.map(t => 
      t.id === threadId && t.status === 'success' 
        ? { ...t, notificationDismissed: true }
        : t
    ));
  };

  // Get status indicator for thread
  const getThreadStatusIndicator = (status, notificationDismissed, threadId) => {
    if (status === 'executing') {
      // Don't show dot if the ongoing task has been dismissed
      const isDismissed = dismissedOngoingTasks.has(threadId);
      return { color: 'bg-blue-500', label: 'Ongoing', showDot: !isDismissed };
    } else if (status === 'clarification_needed') {
      // Don't show dot if the attention needed has been dismissed
      const isDismissed = dismissedAttentionNeeded.has(threadId);
      return { color: 'bg-yellow-500', label: 'Attention Needed', showDot: !isDismissed };
    } else if (status === 'error') {
      // Don't show dot if the error has been dismissed
      const isDismissed = dismissedAttentionNeeded.has(threadId);
      return { color: 'bg-red-500', label: 'Error', showDot: !isDismissed };
    } else if (status === 'success') {
      // If notification dismissed, no dot; otherwise green dot
      return { 
        color: 'bg-green-500', 
        label: 'Completed',
        showDot: !notificationDismissed
      };
    } else if (status === 'cancelled') {
      return { color: 'bg-gray-500', label: 'Cancelled', showDot: false };
    }
    return { color: 'bg-gray-500', label: 'Unknown', showDot: false };
  };

  const getTabColor = (index, status) => {
    const colors = [
      { bg: 'bg-orange-100/60', activeBg: 'bg-orange-50/90', text: 'text-orange-900', border: 'border-orange-500' },
      { bg: 'bg-blue-100/60', activeBg: 'bg-blue-50/90', text: 'text-blue-900', border: 'border-blue-500' },
      { bg: 'bg-purple-100/60', activeBg: 'bg-purple-50/90', text: 'text-purple-900', border: 'border-purple-500' },
      { bg: 'bg-green-100/60', activeBg: 'bg-green-50/90', text: 'text-green-900', border: 'border-green-500' },
      { bg: 'bg-pink-100/60', activeBg: 'bg-pink-50/90', text: 'text-pink-900', border: 'border-pink-500' },
    ];
    return colors[index % colors.length];
  };

  return (
    <div className="fixed inset-0 font-sans bg-gray-900 bg-cover bg-center bg-no-repeat" style={{ backgroundImage: 'url("/google-bg.png")' }}>
      {/* Background overlay */}

      {/* Notification Carousel - Only show when Spotlight is closed */}
      {visibleNotifications.length > 0 && !showSpotlight && (
        <div className="fixed top-6 right-6 w-[380px] z-50">
          {(() => {
            const sortedNotifications = getSortedNotifications();
            const currentThread = threads.find(t => t.id === sortedNotifications[currentNotificationIndex]);
            if (!currentThread) return null;
            
            const hasMultiple = visibleNotifications.length > 1;
            
            const handleCycleUp = () => {
              setCurrentNotificationIndex(prev => 
                prev === 0 ? sortedNotifications.length - 1 : prev - 1
              );
            };
            
            const handleCycleDown = () => {
              setCurrentNotificationIndex(prev => 
                (prev + 1) % sortedNotifications.length
              );
            };
            
            return (
              <div className="relative">
                {/* Stacked background cards - show when 2+ notifications */}
                {visibleNotifications.length >= 2 && (
                  <div className="absolute top-1 -right-1 w-full h-full glass-notification rounded-xl border border-white/20 -z-10"></div>
                )}
                {visibleNotifications.length >= 3 && (
                  <div className="absolute top-2 -right-2 w-full h-full glass-notification rounded-xl border border-white/20 -z-20"></div>
                )}
                
                {/* Main notification card */}
                <div className="flex glass-notification rounded-xl shadow-2xl border border-white/20 overflow-hidden">
                {/* Sidebar controls - Only show when there are multiple notifications */}
                {hasMultiple && (
                  <div className="flex flex-col border-r border-white/10">
                    {/* Dismiss all */}
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        dismissAllNotifications();
                      }}
                      className="px-1.5 py-1 hover:bg-white/20 transition-colors border-b border-white/10"
                      title="Dismiss all notifications (⌥X)"
                    >
                      <Ban className="w-3.5 h-3.5 text-red-600" />
                    </button>
                    
                    {/* Up arrow */}
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        handleCycleUp();
                      }}
                      className="px-1.5 py-1 hover:bg-white/20 transition-colors border-b border-white/10"
                      title="Previous notification (⌥↑)"
                    >
                      <ChevronUp className="w-3.5 h-3.5 text-slate-600" />
                    </button>
                    
                    {/* Down arrow */}
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        handleCycleDown();
                      }}
                      className="px-1.5 py-1 hover:bg-white/20 transition-colors border-b border-white/10"
                      title="Next notification (⌥↓)"
                    >
                      <ChevronDown className="w-3.5 h-3.5 text-slate-600" />
                    </button>
                    
                    {/* Counter */}
                    <div className="px-1.5 py-1 flex items-center justify-center">
                      <span className="text-[10px] font-medium text-slate-600">
                        {currentNotificationIndex + 1}/{sortedNotifications.length}
                      </span>
                    </div>
                  </div>
                )}
                
                {/* Main notification content */}
                <div
                  className="flex-1 relative group cursor-pointer"
                  onClick={() => openSpotlightWithThread(currentThread.id)}
                >
                  {/* Thread Header */}
                  <div className="flex items-center justify-between px-3 py-1.5 border-b border-white/10 bg-white/10">
                    <div className="flex items-center gap-2 flex-1 min-w-0">
                      <CompositeLogoMark className="w-3.5 h-3.5 text-[#F06423] flex-shrink-0" />
                      <span className="text-xs text-[#111111] truncate font-medium">{removeTabMentions(currentThread.command)}</span>
                    </div>
                    <div className="flex items-center gap-0.5">
                      {/* Stop button for executing threads */}
                      {currentThread.status === 'executing' && (
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            handleStopExecution(currentThread.id);
                          }}
                          className="p-1 hover:bg-[#F8F7F4] rounded transition-colors flex-shrink-0"
                          title="Stop execution (⌥P)"
                        >
                          <Square className="w-3.5 h-3.5 text-slate-600" />
                        </button>
                      )}
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          dismissNotification(currentThread.id);
                        }}
                        className="p-1 hover:bg-[#F8F7F4] rounded transition-colors flex-shrink-0"
                        title="Dismiss notification"
                      >
                        <X className="w-3.5 h-3.5 text-slate-600" />
                      </button>
                    </div>
                  </div>

                  {/* Thread Status - Minimal */}
                  <div className="px-3 py-2">
                    <div className="flex items-start gap-2">
                      {getStatusIcon(currentThread.status)}
                      <p className="text-xs text-slate-700 leading-snug flex-1">
                        {currentThread.currentAction}
                      </p>
                    </div>
                  </div>

                  {/* macOS-style Reply icon button - bottom right corner on hover */}
                  <div 
                    className="absolute bottom-1.5 right-1.5 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-auto"
                    title="Reply (⌥R)"
                  >
                    <div className="p-1.5 bg-orange-100 backdrop-blur-sm rounded text-slate-700 shadow-md border border-orange-200">
                      <CornerDownLeft className="w-3.5 h-3.5" />
                    </div>
                  </div>
                </div>
                </div>
              </div>
            );
          })()}
        </div>
      )}

      {/* Spotlight Modal */}
      {showSpotlight && (
        <div className="fixed inset-0 flex items-end justify-center pb-12 z-50 pointer-events-none">
          <div 
            ref={spotlightModalRef}
            onMouseDown={handleMouseDown}
            className="glass-morphism rounded-xl shadow-2xl w-full max-w-xl overflow-hidden pointer-events-auto border border-white/20 cursor-move"
            style={{
              transform: `translate(${modalPosition.x}px, ${modalPosition.y}px)`,
              transition: isDragging ? 'none' : 'transform 0.2s ease-out',
            }}
          >
            {/* Content Area - only show if there's content to display */}
            {(isReplyMode || showThreadsModal || showSettingsModal) && (
              <div className="glass-content border-b border-white/10 flex flex-col" style={{ height: showSettingsModal ? 'auto' : isReplyMode ? '320px' : '200px' }}>
              {isReplyMode && replyThreadId ? (
                /* Reply Mode - Show thread details */
                (() => {
                  const selectedThread = threads.find(t => t.id === replyThreadId);
                  if (!selectedThread) return null;
                  
                  return (
                    <>
                      {/* Sticky Header - Minimized single line */}
                      <div className="sticky top-0 z-10 bg-gradient-to-b from-orange-50/90 to-white/80 backdrop-blur-sm border-b-2 border-orange-200/40 px-4 py-3">
                        <div className="flex items-center gap-3">
                          {/* Back button - icon only with tooltip */}
                          <button
                            onClick={() => {
                              setReplyThreadId(null);
                              setIsReplyMode(false);
                              setActiveThreadId(null); // Clear activeThreadId when going back to thread list
                              setThreadSearchQuery(''); // Clear search when going back
                            }}
                            className="flex items-center text-slate-600 hover:text-[#F06423] transition-colors"
                            title="Chat History (Esc)"
                          >
                            <CornerUpLeft className="w-4 h-4" />
                          </button>
                          
                          {/* Thread Title - centered */}
                          <h3 className="text-sm font-semibold text-[#111111] flex-1 truncate text-center">{removeTabMentions(selectedThread.command)}</h3>
                          
                          {/* Relative timestamp with full timestamp tooltip */}
                          <span 
                            className="text-xs text-slate-600 flex-shrink-0 font-medium"
                            title={selectedThread.timestamp.toLocaleString()}
                          >
                            {formatRelativeTime(selectedThread.timestamp)}
                          </span>
                        </div>
                      </div>
                      
                      {/* Scrollable Conversation History */}
                      <div className="flex-1 overflow-y-auto">
                      <div className="p-4 space-y-2">
                        {selectedThread.conversationHistory && selectedThread.conversationHistory.map((msg, idx) => {
                          const isLastMessage = idx === selectedThread.conversationHistory.length - 1;
                          
                          return (
                            <div key={idx} className="space-y-2">
                              {/* Message - only show if it's a user message, or if it's Composite and NOT the last message */}
                              {(msg.role === 'user' || !isLastMessage) && (
                                <div className={`p-2.5 rounded-lg text-xs ${
                                  msg.role === 'user'
                                    ? 'bg-[#F06423]/10 border border-[#F06423]/20 ml-4'
                                    : 'bg-white/60 border border-white/20 mr-4'
                                }`}>
                                  <p className="text-slate-700 leading-relaxed">{renderMessageWithTabBadges(msg.message)}</p>
                                </div>
                              )}
                              
                              {/* Show LIVE todolist for last message, or frozen snapshot for previous messages */}
                              {selectedThread.majorSteps && (
                                <div className="bg-white/60 border border-white/20 rounded-lg p-2.5 mr-4">
                                  <div className="space-y-2">
                                    {(isLastMessage ? selectedThread.majorSteps : (msg.progressSnapshot || [])).map((step, stepIdx) => {
                                      const stepKey = `${selectedThread.id}-${step.id}`;
                                      const isExpanded = expandedSteps.has(stepKey);
                                      const hasSubsteps = step.completedAtomicSteps && step.completedAtomicSteps.length > 0;
                                      
                                      return (
                                        <div key={step.id} className="space-y-1">
                                          <div className="flex items-start gap-2">
                                            {step.status === 'completed' ? (
                                              <CheckCircle className="w-3 h-3 text-green-500 flex-shrink-0 mt-0.5" />
                                            ) : step.status === 'executing' && isLastMessage && selectedThread.status === 'executing' ? (
                                              <Loader className="w-3 h-3 text-blue-500 flex-shrink-0 mt-0.5" />
                                            ) : step.status === 'pending' && isLastMessage && selectedThread.status === 'executing' ? (
                                              <div className="w-3 h-3 rounded-full border-2 border-slate-300 flex-shrink-0 mt-0.5" />
                                            ) : (
                                              <X className="w-3 h-3 text-slate-400 flex-shrink-0 mt-0.5" />
                                            )}
                                            <div className="flex-1">
                                              <div className="flex items-center gap-1">
                                                {hasSubsteps && (
                                                  <button
                                                    onClick={() => toggleStepExpansion(selectedThread.id, step.id)}
                                                    className="p-0.5 hover:bg-white/50 rounded transition-colors"
                                                  >
                                                    {isExpanded ? (
                                                      <ChevronDown className="w-2.5 h-2.5 text-slate-500" />
                                                    ) : (
                                                      <ChevronRight className="w-2.5 h-2.5 text-slate-500" />
                                                    )}
                                                  </button>
                                                )}
                                                <p className={`text-[10px] font-semibold ${step.status === 'completed' || (isLastMessage && selectedThread.status === 'executing') ? 'text-slate-700' : 'text-slate-400 line-through'}`}>
                                                  {stepIdx + 1}. {step.title}
                                                </p>
                                              </div>
                                              
                                              {/* Show substeps if any are completed and step is expanded */}
                                              {hasSubsteps && isExpanded && (
                                                <ul className="space-y-0.5 mt-1.5 pl-2">
                                                  {step.completedAtomicSteps.map((atomicStep, atomicIdx) => (
                                                    <li key={atomicIdx} className="text-[10px] text-slate-600 flex items-start gap-1.5">
                                                      <span className="text-green-500 flex-shrink-0">✓</span>
                                                      <span className="flex-1">{atomicStep}</span>
                                                    </li>
                                                  ))}
                                                </ul>
                                              )}
                                            </div>
                                          </div>
                                        </div>
                                      );
                                    })}
                                  </div>
                                </div>
                              )}
                            </div>
                          );
                        })}
                        
                        {/* Show final completion message from Composite AFTER the todolist */}
                        {selectedThread.status === 'success' && selectedThread.currentAction && (
                          <div className="p-2.5 rounded-lg text-xs bg-white/60 border border-white/20 mr-4">
                            <p className="text-slate-700 leading-relaxed">{selectedThread.currentAction}</p>
                          </div>
                        )}
                        
                        {/* Show clarification message from Composite AFTER the todolist */}
                        {selectedThread.status === 'clarification_needed' && selectedThread.currentAction && (
                          <div className="p-2.5 rounded-lg text-xs bg-white/60 border border-white/20 mr-4">
                            <p className="text-slate-700 leading-relaxed">{selectedThread.currentAction}</p>
                          </div>
                        )}
                      </div>
                      </div>
                    </>
                  );
                })()
              ) : showThreadsModal ? (
                /* Threads View - Full Conversation History */
                <>
                  {threads.length === 0 ? (
                    <div className="flex-1 flex items-center justify-center">
                      <p className="text-xs text-slate-500">No active threads</p>
                    </div>
                  ) : replyThreadId ? (
                    /* Show detailed view of selected thread - Reply mode is default */
                    (() => {
                      const selectedThread = threads.find(t => t.id === replyThreadId);
                      if (!selectedThread) return null;
                      
                      return (
                        <>
                          {/* Sticky Header - Minimized single line */}
                          <div className="sticky top-0 z-10 bg-gradient-to-b from-orange-50/90 to-white/80 backdrop-blur-sm border-b-2 border-orange-200/40 px-4 py-3">
                            <div className="flex items-center gap-3">
                              {/* Back button - icon only with tooltip */}
                              <button
                                onClick={() => {
                                  setReplyThreadId(null);
                                  setIsReplyMode(false);
                                  setActiveThreadId(null); // Clear activeThreadId when going back to thread list
                                  setThreadSearchQuery(''); // Clear search when going back
                                }}
                                className="flex items-center text-slate-600 hover:text-[#F06423] transition-colors"
                                title="Chat History (Esc)"
                              >
                                <CornerUpLeft className="w-4 h-4" />
                              </button>
                              
                              {/* Thread Title - centered */}
                              <h3 className="text-sm font-semibold text-[#111111] flex-1 truncate text-center">{removeTabMentions(selectedThread.command)}</h3>
                              
                              {/* Relative timestamp with full timestamp tooltip */}
                              <span 
                                className="text-xs text-slate-600 flex-shrink-0 font-medium"
                                title={selectedThread.timestamp.toLocaleString()}
                              >
                                {formatRelativeTime(selectedThread.timestamp)}
                              </span>
                            </div>
                          </div>
                          
                          {/* Scrollable Conversation History */}
                          <div className="flex-1 overflow-y-auto">
                          <div className="p-4 space-y-2">
                            {selectedThread.conversationHistory && selectedThread.conversationHistory.map((msg, idx) => {
                              const isLastMessage = idx === selectedThread.conversationHistory.length - 1;
                              
                              return (
                                <div key={idx} className="space-y-2">
                                  {/* Message - User or Composite */}
                                  <div className={`p-2.5 rounded-lg text-xs ${
                                    msg.role === 'user'
                                      ? 'bg-[#F06423]/10 border border-[#F06423]/20 ml-4'
                                      : 'bg-white/60 border border-white/20 mr-4'
                                  }`}>
                                    <p className="text-slate-700 leading-relaxed">{renderMessageWithTabBadges(msg.message)}</p>
                                  </div>
                                  
                                  {/* Show LIVE todolist for last message, or frozen snapshot for previous messages */}
                                  {selectedThread.majorSteps && (
                                    <div className="bg-white/60 border border-white/20 rounded-lg p-2.5 mr-4">
                                      <div className="space-y-2">
                                        {(isLastMessage ? selectedThread.majorSteps : (msg.progressSnapshot || [])).map((step, stepIdx) => {
                                          const stepKey = `${selectedThread.id}-${step.id}`;
                                          const isExpanded = expandedSteps.has(stepKey);
                                          const hasSubsteps = step.completedAtomicSteps && step.completedAtomicSteps.length > 0;
                                          
                                          return (
                                            <div key={step.id} className="space-y-1">
                                              <div className="flex items-start gap-2">
                                                {step.status === 'completed' ? (
                                                  <CheckCircle className="w-3 h-3 text-green-500 flex-shrink-0 mt-0.5" />
                                                ) : step.status === 'executing' && isLastMessage && selectedThread.status === 'executing' ? (
                                                  <Loader className="w-3 h-3 text-blue-500 flex-shrink-0 mt-0.5" />
                                                ) : step.status === 'pending' && isLastMessage && selectedThread.status === 'executing' ? (
                                                  <div className="w-3 h-3 rounded-full border-2 border-slate-300 flex-shrink-0 mt-0.5" />
                                                ) : (
                                                  <X className="w-3 h-3 text-slate-400 flex-shrink-0 mt-0.5" />
                                                )}
                                                <div className="flex-1">
                                                  <div className="flex items-center gap-1">
                                                    {hasSubsteps && (
                                                      <button
                                                        onClick={() => toggleStepExpansion(selectedThread.id, step.id)}
                                                        className="p-0.5 hover:bg-white/50 rounded transition-colors"
                                                      >
                                                        {isExpanded ? (
                                                          <ChevronDown className="w-2.5 h-2.5 text-slate-500" />
                                                        ) : (
                                                          <ChevronRight className="w-2.5 h-2.5 text-slate-500" />
                                                        )}
                                                      </button>
                                                    )}
                                                    <p className={`text-[10px] font-semibold ${step.status === 'completed' || (isLastMessage && selectedThread.status === 'executing') ? 'text-slate-700' : 'text-slate-400 line-through'}`}>
                                                      {stepIdx + 1}. {step.title}
                                                    </p>
                                                  </div>
                                                  
                                                  {/* Show substeps if any are completed and step is expanded */}
                                                  {hasSubsteps && isExpanded && (
                                                    <ul className="space-y-0.5 mt-1.5 pl-2">
                                                      {step.completedAtomicSteps.map((atomicStep, atomicIdx) => (
                                                        <li key={atomicIdx} className="text-[10px] text-slate-600 flex items-start gap-1.5">
                                                          <span className="text-green-500 flex-shrink-0">✓</span>
                                                          <span className="flex-1">{atomicStep}</span>
                                                        </li>
                                                      ))}
                                                    </ul>
                                                  )}
                                                </div>
                                              </div>
                                            </div>
                                          );
                                        })}
                                      </div>
                                    </div>
                                  )}
                                </div>
                              );
                            })}
                            
                            {/* Show final completion message from Composite AFTER the todolist */}
                            {selectedThread.status === 'success' && selectedThread.currentAction && (
                              <div className="p-2.5 rounded-lg text-xs bg-white/60 border border-white/20 mr-4">
                                <p className="text-slate-700 leading-relaxed">{selectedThread.currentAction}</p>
                              </div>
                            )}
                            
                            {/* Show clarification message from Composite AFTER the todolist */}
                            {selectedThread.status === 'clarification_needed' && selectedThread.currentAction && (
                              <div className="p-2.5 rounded-lg text-xs bg-white/60 border border-white/20 mr-4">
                                <p className="text-slate-700 leading-relaxed">{selectedThread.currentAction}</p>
                              </div>
                            )}
                          </div>
                          </div>
                        </>
                      );
                    })()
                  ) : (
                    /* Thread List View */
                    <>
                    {/* Search Bar */}
                    <div className="sticky top-0 z-10 bg-white/80 backdrop-blur-sm border-b border-white/20 px-2 py-1.5">
                      <div className="relative">
                        <Search className="absolute left-2 top-1/2 -translate-y-1/2 w-3 h-3 text-slate-400" />
                        <input
                          type="text"
                          value={threadSearchQuery}
                          onChange={(e) => setThreadSearchQuery(e.target.value)}
                          placeholder="Search threads..."
                          className="w-full pl-7 pr-7 py-1 text-xs bg-white/60 border border-white/40 rounded-md focus:outline-none focus:ring-1 focus:ring-[#F06423]/20 focus:border-[#F06423]/40 placeholder-slate-400"
                        />
                        {threadSearchQuery && (
                          <button
                            onClick={() => setThreadSearchQuery('')}
                            className="absolute right-2 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600"
                          >
                            <X className="w-3 h-3" />
                          </button>
                        )}
                      </div>
                    </div>
                    
                    <div className="flex-1 overflow-y-auto">
                    <div className="px-2 py-1 space-y-0.5">
                    {(() => {
                      const filteredThreads = threads.filter(thread => {
                        if (!threadSearchQuery.trim()) return true;
                        const searchLower = threadSearchQuery.toLowerCase();
                        // Search in thread command/title
                        if (thread.command.toLowerCase().includes(searchLower)) return true;
                        // Search in conversation history messages
                        if (thread.conversationHistory && thread.conversationHistory.some(msg => 
                          msg.message.toLowerCase().includes(searchLower)
                        )) return true;
                        // Search in current action
                        if (thread.currentAction && thread.currentAction.toLowerCase().includes(searchLower)) return true;
                        return false;
                      });
                      
                      if (filteredThreads.length === 0 && threadSearchQuery.trim()) {
                        return (
                          <div className="flex flex-col items-center justify-center py-8 text-center">
                            <Search className="w-8 h-8 text-slate-300 mb-2" />
                            <p className="text-xs text-slate-500">No threads found matching "{threadSearchQuery}"</p>
                          </div>
                        );
                      }
                      
                      return filteredThreads.map((thread, idx) => {
                      const statusInfo = getThreadStatusIndicator(thread.status, thread.notificationDismissed, thread.id);
                      const isActive = replyThreadId === thread.id;
                      const isMenuOpen = openMenuThreadId === thread.id;
                      
                      // Status pill color based on status
                      const statusPillColor = {
                        'executing': 'bg-blue-50 text-blue-600 border-blue-200',
                        'clarification_needed': 'bg-yellow-50 text-yellow-600 border-yellow-200',
                        'error': 'bg-red-50 text-red-600 border-red-200',
                        'success': 'bg-green-50 text-green-600 border-green-200',
                        'cancelled': 'bg-gray-100 text-gray-600 border-gray-200'
                      }[thread.status] || 'bg-gray-100 text-gray-600 border-gray-200';
                      
                      return (
                        <div
                          key={thread.id}
                          className={`group relative w-full flex items-center gap-2 px-2 py-1.5 rounded-lg transition-colors ${
                            isActive 
                              ? 'bg-[#F06423]/10 border border-[#F06423]/20' 
                              : 'hover:bg-white/60 border border-transparent'
                          }`}
                        >
                          {/* Main clickable area */}
                          <button
                            onClick={() => {
                              setReplyThreadId(thread.id);
                              setActiveThreadId(thread.id);
                              setIsReplyMode(true); // Automatically enter reply mode
                              setOpenMenuThreadId(null); // Close any open menu
                              // Track that this thread has been viewed (like macOS Messages)
                              setThreadViewTimestamps(prev => ({
                                ...prev,
                                [thread.id]: Date.now()
                              }));
                              // Hide any notification for this thread
                              setVisibleNotifications(prev => prev.filter(id => id !== thread.id));
                              // Mark notification as dismissed if it was completed
                              if (thread.status === 'success' && !thread.notificationDismissed) {
                                setThreads(prev => prev.map(t => 
                                  t.id === thread.id ? { ...t, notificationDismissed: true } : t
                                ));
                              }
                            }}
                            className="flex items-center gap-2 flex-1 min-w-0 text-left"
                          >
                            {/* Status dot (optional) */}
                            {statusInfo.showDot && (
                              <div className={`w-2 h-2 rounded-full ${statusInfo.color} flex-shrink-0`} />
                            )}
                            
                            {/* Thread title */}
                            <p className={`text-xs font-medium text-[#111111] truncate flex-1 ${!statusInfo.showDot ? 'ml-4' : ''}`}>
                              {removeTabMentions(thread.command)}
                            </p>
                            
                            {/* Status pill */}
                            <span className={`px-2 py-0.5 text-[10px] font-medium rounded-full border ${statusPillColor} flex-shrink-0`}>
                              {statusInfo.label}
                            </span>
                          </button>
                          
                          {/* Three-dot menu button - appears on hover */}
                          <div className="relative flex-shrink-0">
                            <button
                              onClick={(e) => {
                                e.stopPropagation();
                                setOpenMenuThreadId(isMenuOpen ? null : thread.id);
                              }}
                              className="opacity-0 group-hover:opacity-100 p-1 hover:bg-white/80 rounded transition-opacity"
                            >
                              <MoreVertical className="w-3.5 h-3.5 text-slate-600" />
                            </button>
                            
                            {/* Dropdown menu */}
                            {isMenuOpen && (
                              <div className="absolute right-0 top-full mt-1 w-40 bg-white border border-slate-200 rounded-lg shadow-lg py-1 z-50">
                                <button
                                  onClick={(e) => {
                                    e.stopPropagation();
                                    setRenamingThreadId(thread.id);
                                    setRenameValue(thread.command);
                                    setOpenMenuThreadId(null);
                                  }}
                                  className="w-full flex items-center gap-2 px-3 py-2 text-xs text-slate-700 hover:bg-slate-50 transition-colors"
                                >
                                  <Edit2 className="w-3.5 h-3.5" />
                                  Rename
                                </button>
                                <button
                                  onClick={(e) => {
                                    e.stopPropagation();
                                    // Delete the thread
                                    setThreads(prev => prev.filter(t => t.id !== thread.id));
                                    setOpenMenuThreadId(null);
                                    // If this was the active thread, clear it
                                    if (replyThreadId === thread.id) {
                                      setReplyThreadId(null);
                                      setIsReplyMode(false);
                                    }
                                  }}
                                  className="w-full flex items-center gap-2 px-3 py-2 text-xs text-red-600 hover:bg-red-50 transition-colors"
                                >
                                  <Trash className="w-3.5 h-3.5" />
                                  Delete
                                </button>
                              </div>
                            )}
                          </div>
                        </div>
                      );
                    });
                    })()}
                    </div>
                    </div>
                    </>
                  )}
                </>
              ) : showSettingsModal ? (
                /* Settings Content */
                <div className="p-4">
                  {/* Header with inline extension info */}
                  <div className="flex items-center gap-2.5">
                    <div className="w-8 h-8 rounded-full bg-[#F06423] flex items-center justify-center text-white font-bold text-xs">W</div>
                    <div>
                      <p className="text-xs font-medium text-[#111111]">wasabininjaa@gmail.com</p>
                      <div className="flex items-center gap-2 mt-0.5">
                        <div className="flex items-center gap-1">
                          <ChromeIcon className="w-3 h-3 text-slate-600" />
                          <span className={`w-1.5 h-1.5 rounded-full ${chromeConnected ? 'bg-green-500' : 'bg-[#F06423]'}`} />
                          <span className="text-[10px] text-slate-600">{chromeConnected ? 'Connected' : 'Disconnected'}</span>
                        </div>
                        <span className="text-[10px] text-slate-400">•</span>
                        <div className="flex items-center gap-1">
                          <span className="text-[10px] text-slate-600">Chrome (Default)</span>
                          <button className="text-slate-500 hover:text-[#F06423] transition-colors p-0.5">
                            <RefreshCw className="w-3 h-3" />
                          </button>
                        </div>
                        <span className="text-[10px] text-slate-400">•</span>
                        <button className="text-[10px] text-[#F06423] hover:text-[#F06423]/80 font-medium">Install Extension</button>
                        <span className="text-[10px] text-slate-400">•</span>
                        <button onClick={() => window.open('settings.html', '_blank')} className="text-[10px] text-[#F06423] hover:text-[#F06423]/80 font-medium">More Settings</button>
                      </div>
                    </div>
                  </div>
                </div>
              ) : null}
              </div>
            )}

            {/* Tab Navigation - Chrome Style (hidden in reply mode) */}
            {!isReplyMode && (
              <div className="relative glass-nav px-4 pb-2">
                {(showThreadsModal || showSettingsModal) && (
                  <div className="absolute top-[4px] left-0 right-0 h-[2px] bg-[#F06423] z-0" />
                )}
                <div className="flex gap-1 pt-1.5 relative z-10">
                {/* Chat History Tab */}
                <button
                  onClick={() => {
                    // Toggle Chat History on/off
                    setShowThreadsModal(!showThreadsModal);
                    setShowSettingsModal(false);
                  }}
                  className={`relative flex items-center justify-center ${
                    showThreadsModal ? 'w-auto px-4 gap-2' : 'w-10'
                  } py-2 text-xs font-medium transition-all rounded-b-lg ${
                    showThreadsModal
                      ? 'bg-white text-[#F06423] shadow-sm border-l-2 border-r-2 border-b-2 border-[#F06423]'
                      : 'bg-transparent text-slate-600 hover:text-[#111111] hover:bg-white/40'
                  }`}
                  style={{
                    marginTop: showThreadsModal ? '-2px' : '0px',
                    paddingTop: showThreadsModal ? 'calc(0.5rem + 2px)' : '0.5rem',
                  }}
                  title="Chat History (⌘B)"
                >
                  <Clock className="w-4 h-4 flex-shrink-0" />
                  {showThreadsModal && <span>Chat History</span>}
                  {getNotificationCount() > 0 && (
                    <div className="absolute top-0 right-0 flex items-center justify-center min-w-[12px] h-[12px] px-0.5 bg-red-500 text-white rounded-full text-[8px] font-bold shadow-sm border border-white">
                      {getNotificationCount()}
                    </div>
                  )}
                </button>

                {/* Settings Tab */}
                <button
                  onClick={() => {
                    // Toggle Settings on/off
                    setShowSettingsModal(!showSettingsModal);
                    setShowThreadsModal(false);
                  }}
                  className={`relative flex items-center justify-center ${
                    showSettingsModal ? 'w-auto px-4 gap-2' : 'w-10'
                  } py-2 text-xs font-medium transition-all rounded-b-lg ${
                    showSettingsModal
                      ? 'bg-white text-[#F06423] shadow-sm border-l-2 border-r-2 border-b-2 border-[#F06423]'
                      : 'bg-transparent text-slate-600 hover:text-[#111111] hover:bg-white/40'
                  }`}
                  style={{
                    marginTop: showSettingsModal ? '-2px' : '0px',
                    paddingTop: showSettingsModal ? 'calc(0.5rem + 2px)' : '0.5rem',
                  }}
                  title="Settings (⌘,)"
                >
                  <Settings className="w-4 h-4 flex-shrink-0" />
                  {showSettingsModal && <span>Settings</span>}
                  <span className={`absolute top-0 right-0 w-[10px] h-[10px] rounded-full border border-white ${chromeConnected ? 'bg-green-500' : 'bg-[#F06423]'}`} />
                </button>

                {/* Spacer */}
                <div className="flex-1" />
                
                {/* Esc button to close spotlight */}
                <button
                  onClick={() => setShowSpotlight(false)}
                  className="ml-2 self-center px-1.5 py-0.5 text-[10px] bg-slate-200 text-slate-600 rounded font-medium transition-colors hover:bg-slate-300"
                  title="Close (Esc)"
                >
                  Esc
                </button>
              </div>
            </div>
            )}

            {/* Search input */}
            <div className="glass-input relative">
              <div className="flex items-start gap-3 px-4 py-3">
                <VoiceInput 
                  isActive={isVoiceActive}
                  onClick={() => setIsVoiceActive(!isVoiceActive)}
                  className="w-4 h-4 flex-shrink-0 mt-0.5"
                />
                <div className="flex-1 relative">
                  <div
                    ref={spotlightRef}
                    contentEditable
                    suppressContentEditableWarning
                    onInput={(e) => {
                    isUpdatingFromInput.current = true;
                    
                    // Extract plain text from contentEditable, preserving mentions
                    const extractText = (node) => {
                      let text = '';
                      node.childNodes.forEach(child => {
                        if (child.nodeType === Node.TEXT_NODE) {
                          text += child.textContent;
                        } else if (child.nodeType === Node.ELEMENT_NODE) {
                          if (child.hasAttribute('data-mention')) {
                            text += `@[${child.getAttribute('data-mention')}]`;
                          } else {
                            text += extractText(child);
                          }
                        }
                      });
                      return text;
                    };
                    
                    const text = extractText(e.currentTarget);
                    setInput(text);
                    
                    // Clear contentEditable completely if text is empty to show placeholder
                    if (text === '') {
                      e.currentTarget.innerHTML = '';
                    }
                    
                    // Get cursor position
                    const selection = window.getSelection();
                    let cursorPos = 0;
                    if (selection && selection.rangeCount > 0) {
                      const range = selection.getRangeAt(0);
                      const preCaretRange = range.cloneRange();
                      preCaretRange.selectNodeContents(e.currentTarget);
                      preCaretRange.setEnd(range.endContainer, range.endOffset);
                      cursorPos = extractText(preCaretRange.cloneContents()).length;
                    }
                    detectMention(text, cursorPos);
                    
                    setTimeout(() => {
                      isUpdatingFromInput.current = false;
                    }, 0);
                  }}
                  onKeyDown={(e) => {
                    // Handle mention dropdown navigation
                    if (showMentionDropdown && mentionMenuItems.length > 0) {
                      if (e.key === 'ArrowDown') {
                        e.preventDefault();
                        setIsKeyboardNavigating(true);
                        setSelectedMentionIndex(prev => 
                          prev < mentionMenuItems.length - 1 ? prev + 1 : prev
                        );
                        return;
                      }
                      if (e.key === 'ArrowUp') {
                        e.preventDefault();
                        setIsKeyboardNavigating(true);
                        setSelectedMentionIndex(prev => prev > 0 ? prev - 1 : prev);
                        return;
                      }
                      if (e.key === 'Enter' || e.key === 'Tab') {
                        e.preventDefault();
                        const selectedItem = mentionMenuItems[selectedMentionIndex];
                        if (selectedItem.type === 'tab') {
                          insertMention(selectedItem.data);
                        } else if (selectedItem.type === 'file-upload') {
                          openFileSelector();
                        } else if (selectedItem.type === 'group-header') {
                          toggleGroupExpansion(selectedItem.data.id);
                        }
                        return;
                      }
                      if (e.key === 'Escape') {
                        e.preventDefault();
                        setShowMentionDropdown(false);
                        setMentionQuery('');
                        setMentionCursorPosition(null);
                        setIsKeyboardNavigating(false);
                        return;
                      }
                    }
                    
                    // Handle Tab to autocomplete suggestion when not in mention dropdown
                    if (e.key === 'Tab' && !showMentionDropdown) {
                      // Check if input only contains mention(s) and whitespace
                      const textWithoutMentions = input.replace(/@\[[^\]]+\]/g, '').trim();
                      if (textWithoutMentions === '' && suggestionText) {
                        e.preventDefault();
                        
                        // In reply mode, don't auto-insert current tab, just skip Tab functionality
                        if (isReplyMode && suggestionText === 'Reply to Composite') {
                          // Do nothing - don't insert anything
                          return;
                        }
                        
                        // If suggestion is "@Current Tab", insert the current tab mention
                        if (suggestionText === '@Current Tab') {
                          const currentTabMention = `@[${currentTab.title}]`;
                          setInput(currentTabMention);
                        } else {
                          // Keep existing mentions and add the suggestion text
                          const mentions = input.match(/@\[[^\]]+\]/g) || [];
                          setInput(mentions.join(' ') + ' ' + suggestionText);
                        }
                        
                        // Focus and position cursor at the end
                        setTimeout(() => {
                          if (spotlightRef.current) {
                            spotlightRef.current.focus();
                            const selection = window.getSelection();
                            const range = document.createRange();
                            range.selectNodeContents(spotlightRef.current);
                            range.collapse(false);
                            selection.removeAllRanges();
                            selection.addRange(range);
                          }
                        }, 0);
                        return;
                      }
                    }
                    
                    if (e.key === 'Enter' && !e.shiftKey) {
                      e.preventDefault();
                      handleExecute(input);
                    }
                    if (e.key === 'Escape') {
                      e.preventDefault();
                      e.stopPropagation();
                      if (isReplyMode) {
                        // Exit reply mode and go back to thread list, don't close spotlight
                        setIsReplyMode(false);
                        setReplyThreadId(null);
                        setActiveThreadId(null);
                        setInput('');
                      } else {
                        // Only close spotlight if not in reply mode
                        setShowSpotlight(false);
                      }
                    }
                  }}
                  className="outline-none text-sm text-[#111111] bg-transparent resize-none overflow-y-auto w-full relative z-10"
                  style={{
                    minHeight: '25px',
                    maxHeight: '120px',
                    lineHeight: '20px',
                    whiteSpace: 'pre-wrap',
                    wordBreak: 'break-word'
                  }}
                />
                {/* Placeholder suggestion that appears after mentions */}
                {(() => {
                  const textWithoutMentions = input.replace(/@\[[^\]]+\]/g, '').trim();
                  // Only show if input is empty OR only contains the current tab mention
                  const currentTabMention = `@[${currentTab.title}]`;
                  const isEmptyOrCurrentTab = input === '' || input.trim() === currentTabMention.trim();
                  
                  if (textWithoutMentions === '' && suggestionText && (isReplyMode || isEmptyOrCurrentTab)) {
                    // Use the actual rendered HTML from contentEditable to measure width accurately
                    const currentHTML = spotlightRef.current?.innerHTML || '';
                    return (
                      <div className="absolute left-0 top-0 pointer-events-none text-sm" style={{ lineHeight: '20px' }}>
                        {currentHTML && (
                          <span className="invisible" dangerouslySetInnerHTML={{ 
                            __html: currentHTML
                          }} />
                        )}
                        <span className={`text-slate-400 ${!isReplyMode ? 'italic' : ''}`}>
                          {suggestionText} {!isReplyMode && <span className="ml-1 inline-block bg-slate-100 border border-slate-200 rounded text-[10px] leading-none font-medium text-slate-600 not-italic" style={{ padding: '1px 4px' }}>tab</span>}
                        </span>
                      </div>
                    );
                  }
                  return null;
                })()}
              </div>
                <div className="flex items-center gap-1">
                  {/* Stop button - only show when in reply mode AND thread is executing */}
                  {isReplyMode && replyThreadId && (() => {
                    const replyThread = threads.find(t => t.id === replyThreadId);
                    return replyThread && replyThread.status === 'executing' && (
                      <button
                        onClick={() => handleStopExecution(replyThreadId)}
                        className="p-1 hover:bg-[#F8F7F4] rounded transition-colors flex-shrink-0"
                        title="Stop execution (⌘P)"
                      >
                        <Square className="w-4 h-4 text-slate-600" />
                      </button>
                    );
                  })()}
                  {/* Send button - only show when there's text in the input */}
                  {input.trim() !== '' && (
                    <button
                      onClick={() => handleExecute(input)}
                      className="p-0.5 bg-orange-100 hover:bg-orange-200 rounded-full transition-colors flex-shrink-0"
                      title="Send message"
                    >
                      <ArrowUpCircle className="w-5 h-5 text-slate-700" />
                    </button>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Tab Mention Dropdown - Rendered at root level to avoid overflow constraints */}
      {showMentionDropdown && filteredTabs.length > 0 && (
        <div 
          ref={mentionDropdownRef}
          className="fixed glass-card rounded-lg shadow-2xl border border-slate-200 max-h-64 overflow-hidden z-[60] flex flex-col"
          style={{
            top: `${mentionDropdownPosition.top - 8}px`,
            left: `${mentionDropdownPosition.left}px`,
            width: `${mentionDropdownPosition.width}px`,
            transform: 'translateY(-100%)',
          }}
        >
          <div className="px-3 py-1.5 text-xs font-medium text-slate-500 bg-white border-b border-slate-100 flex-shrink-0">
            Mention a tab or file
          </div>
          <div className="py-1 overflow-y-auto">
            {mentionMenuItems.map((item, index) => {
              // File upload option
              if (item.type === 'file-upload') {
                return (
                  <button
                    key="file-upload"
                    onClick={openFileSelector}
                    onMouseMove={() => {
                      if (!isKeyboardNavigating) {
                        setSelectedMentionIndex(index);
                      }
                    }}
                    onMouseEnter={() => {
                      if (isKeyboardNavigating) {
                        setIsKeyboardNavigating(false);
                      }
                    }}
                    className={`w-full flex items-center gap-2.5 px-3 py-1.5 text-left transition-colors ${
                      index === selectedMentionIndex 
                        ? 'bg-blue-50 border-l-2 border-blue-600' 
                        : 'hover:bg-slate-50 border-l-2 border-transparent'
                    }`}
                  >
                    <svg 
                      className="w-4 h-4 flex-shrink-0 text-blue-600" 
                      fill="none" 
                      viewBox="0 0 24 24" 
                      stroke="currentColor" 
                      strokeWidth="2"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                    </svg>
                    <div className="text-sm font-medium text-blue-700 truncate">
                      Upload a file
                    </div>
                    {index === selectedMentionIndex && (
                      <div className="ml-auto flex items-center gap-1 text-xs text-slate-400 flex-shrink-0">
                        <span className="px-1 py-0.5 bg-slate-100 rounded text-[10px] font-mono">↵</span>
                      </div>
                    )}
                  </button>
                );
              }
              
              // Tab group header
              if (item.type === 'group-header') {
                const group = item.data;
                return (
                  <button
                    key={`group-${group.id}`}
                    onClick={() => toggleGroupExpansion(group.id)}
                    onMouseMove={() => {
                      if (!isKeyboardNavigating) {
                        setSelectedMentionIndex(index);
                      }
                    }}
                    onMouseEnter={() => {
                      if (isKeyboardNavigating) {
                        setIsKeyboardNavigating(false);
                      }
                    }}
                    className={`w-full flex items-center gap-2 px-3 py-1.5 text-left transition-colors ${
                      index === selectedMentionIndex 
                        ? 'bg-slate-100 border-l-2 border-slate-400' 
                        : 'hover:bg-slate-50 border-l-2 border-transparent'
                    }`}
                  >
                    <svg 
                      className={`w-3.5 h-3.5 flex-shrink-0 text-slate-600 transition-transform ${
                        item.isExpanded ? 'rotate-90' : ''
                      }`}
                      fill="none" 
                      viewBox="0 0 24 24" 
                      stroke="currentColor" 
                      strokeWidth="2"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                    </svg>
                    <div 
                      className="w-2 h-2 rounded-full flex-shrink-0" 
                      style={{ backgroundColor: group.color }}
                    />
                    <div className="text-sm font-medium text-slate-700 truncate">
                      {group.name}
                    </div>
                    <div className="ml-auto text-xs text-slate-500 flex-shrink-0">
                      {group.tabs.length}
                    </div>
                    {index === selectedMentionIndex && (
                      <div className="flex items-center gap-1 text-xs text-slate-400 flex-shrink-0">
                        <span className="px-1 py-0.5 bg-slate-100 rounded text-[10px] font-mono">↵</span>
                      </div>
                    )}
                  </button>
                );
              }
              
              // Tab item
              if (item.type === 'tab') {
                const tab = item.data;
                const isCurrentTab = item.isCurrentTab;
                const isGrouped = item.isGrouped;
                const groupColor = item.groupColor;
                
                return (
                  <button
                    key={tab.id}
                    onClick={() => insertMention(tab)}
                    onMouseMove={() => {
                      if (!isKeyboardNavigating) {
                        setSelectedMentionIndex(index);
                      }
                    }}
                    onMouseEnter={() => {
                      if (isKeyboardNavigating) {
                        setIsKeyboardNavigating(false);
                      }
                    }}
                    className={`w-full flex items-center gap-2.5 text-left transition-colors ${
                      isGrouped ? 'pl-8 pr-3 py-1.5' : 'px-3 py-1.5'
                    } ${
                      index === selectedMentionIndex 
                        ? 'bg-orange-50 border-l-2 border-[#F06423]' 
                        : 'hover:bg-slate-50 border-l-2 border-transparent'
                    }`}
                  >
                    {groupColor && !isCurrentTab && (
                      <div 
                        className="w-1 h-1 rounded-full flex-shrink-0" 
                        style={{ backgroundColor: groupColor }}
                      />
                    )}
                    <img 
                      src={tab.favicon} 
                      alt="" 
                      className="w-4 h-4 flex-shrink-0"
                      onError={(e) => {
                        e.target.style.display = 'none';
                      }}
                    />
                    <div className="flex-1 min-w-0 flex items-center gap-2">
                      <div className="text-sm font-medium text-slate-900 truncate">
                        {tab.title}
                      </div>
                      {isCurrentTab && (
                        <span className="px-1.5 py-0.5 bg-[#F06423] text-white text-[10px] font-medium rounded flex-shrink-0">
                          Current Tab
                        </span>
                      )}
                    </div>
                    {index === selectedMentionIndex && (
                      <div className="flex items-center gap-1 text-xs text-slate-400 flex-shrink-0">
                        <span className="px-1 py-0.5 bg-slate-100 rounded text-[10px] font-mono">↵</span>
                      </div>
                    )}
                  </button>
                );
              }
              
              return null;
            })}
          </div>
        </div>
      )}

      {/* Rename Thread Modal */}
      {renamingThreadId && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/40 backdrop-blur-sm">
          <div className="bg-white rounded-xl shadow-2xl border border-slate-200 p-6 w-96 max-w-[90vw]">
            <h3 className="text-base font-semibold text-[#111111] mb-4">Rename Thread</h3>
            <input
              type="text"
              value={renameValue}
              onChange={(e) => setRenameValue(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === 'Enter') {
                  // Save rename
                  setThreads(prev => prev.map(t => 
                    t.id === renamingThreadId ? { ...t, command: renameValue } : t
                  ));
                  setRenamingThreadId(null);
                  setRenameValue('');
                } else if (e.key === 'Escape') {
                  // Cancel rename
                  setRenamingThreadId(null);
                  setRenameValue('');
                }
              }}
              className="w-full px-3 py-2 border border-slate-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#F06423] focus:border-transparent"
              autoFocus
            />
            <div className="flex gap-2 mt-4 justify-end">
              <button
                onClick={() => {
                  setRenamingThreadId(null);
                  setRenameValue('');
                }}
                className="px-4 py-2 text-sm font-medium text-slate-600 hover:text-slate-800 transition-colors"
              >
                Cancel
              </button>
              <button
                onClick={() => {
                  setThreads(prev => prev.map(t => 
                    t.id === renamingThreadId ? { ...t, command: renameValue } : t
                  ));
                  setRenamingThreadId(null);
                  setRenameValue('');
                }}
                className="px-4 py-2 text-sm font-medium bg-[#F06423] text-white rounded-lg hover:bg-[#F06423]/90 transition-colors"
              >
                Save
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Hidden file input */}
      <input
        ref={fileInputRef}
        type="file"
        multiple
        onChange={handleFileUpload}
        className="hidden"
        aria-hidden="true"
      />

    </div>
  );
}

