import React, { useState, useEffect, useRef, useCallback } from 'react';

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

const Lightbulb = ({ className }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
    <line x1="9" y1="18" x2="15" y2="18" />
    <line x1="10" y1="22" x2="14" y2="22" />
    <path d="M15.09 14c.18-.98.65-1.74 1.41-2.5A4.65 4.65 0 0 0 18 8 6 6 0 0 0 6 8c0 1 .23 2.23 1.5 3.5A4.61 4.61 0 0 1 8.91 14" />
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

const ExternalLink = ({ className }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
    <polyline points="15 3 21 3 21 9" />
    <line x1="10" y1="14" x2="21" y2="3" />
  </svg>
);

export default function BrowserCopilot() {
  const [showSpotlight, setShowSpotlight] = useState(true);
  const [input, setInput] = useState('');
  const [threads, setThreads] = useState([]);
  const [activeThreadId, setActiveThreadId] = useState(null);
  const [showSettingsModal, setShowSettingsModal] = useState(false);
  const [showThreadsModal, setShowThreadsModal] = useState(false);
  const [showSuggestions, setShowSuggestions] = useState(true);
  const [chromeConnected, setChromeConnected] = useState(true); // true = green, false = orange
  const [sharingEnabled, setSharingEnabled] = useState(true); // true = enabled, false = disabled
  const [isReplyMode, setIsReplyMode] = useState(false); // true when replying to active thread
  const [replyThreadId, setReplyThreadId] = useState(null); // ID of thread being replied to
  const [visibleNotifications, setVisibleNotifications] = useState([]); // IDs of threads with visible notifications
  const [expandedNotificationGroup, setExpandedNotificationGroup] = useState(false); // Whether notification stack is expanded
  const [lastNotificationAction, setLastNotificationAction] = useState({}); // Track last action timestamp per thread to show new notifications
  const [threadViewTimestamps, setThreadViewTimestamps] = useState({}); // Track when each thread was last viewed in chat history
  const [dismissedOngoingTasks, setDismissedOngoingTasks] = useState(new Set()); // Track which ongoing tasks have been dismissed
  const [dismissedAttentionNeeded, setDismissedAttentionNeeded] = useState(new Set()); // Track which attention needed threads have been dismissed
  const spotlightRef = useRef(null);

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

  useEffect(() => {
    const handleKeyDown = (e) => {
      // Cmd + Shift + Space: Toggle spotlight
      if (e.metaKey && e.shiftKey && e.key === ' ') {
        e.preventDefault();
        setShowSpotlight(!showSpotlight);
        setInput('');
        setIsReplyMode(false);
        setReplyThreadId(null);
      }
      // Cmd + R: Enter reply mode (only from outside reply mode)
      else if (e.metaKey && e.key === 'r') {
        e.preventDefault();
        const firstVisibleThread = visibleNotifications[0];
        if (!showSpotlight && firstVisibleThread) {
          // If spotlight is closed and there's a notification visible, open spotlight with that thread
          openSpotlightWithThread(firstVisibleThread);
        } else if (showSpotlight && !isReplyMode && replyThreadId) {
          // If in spotlight but not reply mode, enter reply mode for the current thread
          setIsReplyMode(true);
          setInput('');
        }
      }
      // Cmd + P: Stop execution (if active thread is executing)
      else if (e.metaKey && e.key === 'p') {
        e.preventDefault();
        if (activeThreadId) {
          handleStopExecution(activeThreadId);
        }
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [showSpotlight, isReplyMode, activeThreadId, replyThreadId, threads, visibleNotifications, handleStopExecution]);

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
        // Exit reply mode and go back to thread list
        setIsReplyMode(false);
        setReplyThreadId(null);
        setInput('');
      }
    };

    window.addEventListener('keydown', handleEscapeKey);
    return () => window.removeEventListener('keydown', handleEscapeKey);
  }, [isReplyMode, replyThreadId]);

  // Automatically enter reply mode when a thread is selected in Chat History
  useEffect(() => {
    if (replyThreadId && showThreadsModal) {
      setIsReplyMode(true);
    }
  }, [replyThreadId, showThreadsModal]);

  const suggestions = [
    { text: 'Send reminder emails for today\'s reference check calls' },
    { text: 'Create interview summary doc for today\'s candidates' },
    { text: 'Add missing Zoom links to upcoming calendar events' },
    { text: 'Export this week\'s calendar to CSV for reporting' },
  ];

  // Helper function to open spotlight with a specific thread
  const openSpotlightWithThread = (threadId) => {
    setShowSpotlight(true);
    setShowThreadsModal(true);
    setReplyThreadId(threadId);
    setActiveThreadId(threadId);
    setShowSettingsModal(false);
    setShowSuggestions(false);
    // Track that this thread has been viewed (like macOS Messages)
    setThreadViewTimestamps(prev => ({
      ...prev,
      [threadId]: Date.now()
    }));
    // Hide the notification for this thread
    setVisibleNotifications(prev => prev.filter(id => id !== threadId));
    // Mark as notification dismissed if completed
    setThreads(prev => prev.map(t => 
      t.id === threadId && t.status === 'success' 
        ? { ...t, notificationDismissed: true }
        : t
    ));
  };

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
      const needsAttention = 
        thread.status === 'executing' || 
        thread.status === 'clarification_needed' || 
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
      
      if (needsAttention && isNewAction && notAlreadyVisible && !hasBeenViewedSinceAction && !isOngoingAndDismissed && !isAttentionNeededAndDismissed) {
        setVisibleNotifications(prev => [...prev, thread.id]);
        setLastNotificationAction(prev => ({
          ...prev,
          [thread.id]: thread.currentAction
        }));
      }
    });
  }, [threads, lastNotificationAction, visibleNotifications, threadViewTimestamps, dismissedOngoingTasks, dismissedAttentionNeeded]);

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
    setActiveThreadId(newThread.id);
    setShowSpotlight(false);
    setInput('');
    setIsReplyMode(false);
    setReplyThreadId(null);

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
    // First, stop execution (which freezes progress by saving snapshot)
    handleStopExecution(threadId);
    
    // Then add user reply message to conversation history
    setThreads((prev) =>
      prev.map((t) => {
        if (t.id === threadId) {
          return {
            ...t,
            conversationHistory: [
              ...(t.conversationHistory || []),
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
        return <Loader className="w-4 h-4 text-[#F06423]" />;
      case 'clarification_needed':
        return <AlertCircle className="w-4 h-4 text-[#F06423]" />;
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
      
      return (
        t.status === 'executing' || 
        t.status === 'clarification_needed' || 
        (t.status === 'success' && !t.notificationDismissed)
      );
    }).length;
  };

  // Dismiss notification (hide it until next action)
  const dismissNotification = (threadId) => {
    const thread = threads.find(t => t.id === threadId);
    
    setVisibleNotifications(prev => prev.filter(id => id !== threadId));
    if (expandedNotificationGroup) {
      setExpandedNotificationGroup(false);
    }
    
    // If it's an ongoing task, add it to dismissedOngoingTasks
    if (thread && thread.status === 'executing') {
      setDismissedOngoingTasks(prev => new Set([...prev, threadId]));
    }
    
    // If it's an attention needed thread, add it to dismissedAttentionNeeded
    if (thread && thread.status === 'clarification_needed') {
      setDismissedAttentionNeeded(prev => new Set([...prev, threadId]));
    }
    
    // Mark the notification as dismissed for completed threads
    setThreads(prev => prev.map(t => 
      t.id === threadId && t.status === 'success' 
        ? { ...t, notificationDismissed: true }
        : t
    ));
  };

  // Dismiss all notifications
  const dismissAllNotifications = () => {
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
    
    setVisibleNotifications([]);
    setExpandedNotificationGroup(false);
    // Mark all completed threads as having their notifications dismissed
    setThreads(prev => prev.map(t => 
      t.status === 'success' 
        ? { ...t, notificationDismissed: true }
        : t
    ));
  };

  // Get status indicator for thread
  const getThreadStatusIndicator = (status, notificationDismissed, threadId) => {
    if (status === 'executing') {
      // Don't show dot if the ongoing task has been dismissed
      const isDismissed = dismissedOngoingTasks.has(threadId);
      return { color: 'bg-[#F06423]', label: 'Ongoing', showDot: !isDismissed };
    } else if (status === 'clarification_needed') {
      // Don't show dot if the attention needed has been dismissed
      const isDismissed = dismissedAttentionNeeded.has(threadId);
      return { color: 'bg-red-500', label: 'Attention Needed', showDot: !isDismissed };
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

  // Sort notifications by priority: error > action required > ongoing > completed
  const getSortedNotifications = () => {
    return [...visibleNotifications].sort((aId, bId) => {
      const threadA = threads.find(t => t.id === aId);
      const threadB = threads.find(t => t.id === bId);
      
      if (!threadA || !threadB) return 0;
      
      // Define priority values (lower = higher priority)
      const getPriority = (status) => {
        if (status === 'error') return 1; // Error - highest priority
        if (status === 'clarification_needed') return 2; // Action required - high priority
        if (status === 'executing') return 3; // Ongoing - medium priority
        if (status === 'success') return 4; // Completed - low priority
        return 5; // Other statuses (e.g., cancelled) - lowest priority
      };
      
      const priorityA = getPriority(threadA.status);
      const priorityB = getPriority(threadB.status);
      
      // Sort by priority, then by lastActionTime (most recent first) for same priority
      if (priorityA !== priorityB) {
        return priorityA - priorityB;
      }
      return (threadB.lastActionTime || 0) - (threadA.lastActionTime || 0);
    });
  };

  return (
    <div className="fixed inset-0 font-sans bg-gray-900 bg-cover bg-center bg-no-repeat" style={{ backgroundImage: 'url("/google-bg.png")' }}>
      {/* Background overlay */}

      {/* Notification Stack - macOS Style - Only show when Spotlight is closed */}
      {visibleNotifications.length > 0 && !showSpotlight && (
        <div className="fixed top-6 right-6 w-[380px] z-50">
          {expandedNotificationGroup ? (
            /* Expanded Stack - Show all notifications */
            <div className="space-y-2">
              {getSortedNotifications().map((threadId, index) => {
                const thread = threads.find(t => t.id === threadId);
                if (!thread) return null;
                
                return (
                  <div
                    key={threadId}
                    className="glass-notification rounded-xl shadow-2xl border border-white/20 overflow-hidden cursor-pointer hover:shadow-3xl transition-shadow"
                    onClick={() => openSpotlightWithThread(threadId)}
                  >
                    {/* Thread Header */}
                    <div className="flex items-center justify-between px-4 py-2.5 border-b border-white/10 bg-white/10">
                      <div className="flex items-center gap-2 flex-1 min-w-0">
                        <CompositeLogoMark className="w-4 h-4 text-[#F06423] flex-shrink-0" />
                        <span className="text-xs text-[#111111] truncate font-medium">{thread.command}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        {/* Stop button for executing threads */}
                        {thread.status === 'executing' && (
                          <button
                            onClick={(e) => {
                              e.stopPropagation();
                              handleStopExecution(threadId);
                            }}
                            className="p-1 hover:bg-[#F8F7F4] rounded transition-colors flex-shrink-0"
                            title="Stop execution"
                          >
                            <Square className="w-4 h-4 text-slate-600" />
                          </button>
                        )}
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            dismissNotification(threadId);
                          }}
                          className="p-1 hover:bg-[#F8F7F4] rounded transition-colors flex-shrink-0"
                          title="Dismiss notification"
                        >
                          <X className="w-4 h-4 text-slate-600" />
                        </button>
                      </div>
                    </div>

                    {/* Thread Status - Minimal */}
                    <div className="px-4 py-3">
                      <div className="flex items-start gap-2">
                        {getStatusIcon(thread.status)}
                        <p className="text-xs text-slate-700 leading-relaxed flex-1">
                          {thread.currentAction}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
              
              {/* Collapse and Dismiss All Controls - Only show when there are multiple notifications */}
              {visibleNotifications.length > 1 && (
                <div className="flex gap-2">
                  <button
                    onClick={() => setExpandedNotificationGroup(false)}
                    className="flex-1 px-3 py-2 glass-button border border-white/20 rounded-lg text-xs text-[#111111] hover:bg-white/60 transition-colors font-medium"
                  >
                    Collapse
                  </button>
                  <button
                    onClick={dismissAllNotifications}
                    className="flex-1 px-3 py-2 glass-button border border-white/20 rounded-lg text-xs text-red-600 hover:bg-red-50 transition-colors font-medium"
                  >
                    Dismiss All
                  </button>
                </div>
              )}
            </div>
          ) : (
            /* Collapsed Stack - Show multiple notifications stacked visually like macOS */
            <div className="relative">
              {(() => {
                const sortedNotifications = getSortedNotifications();
                const topThread = threads.find(t => t.id === sortedNotifications[0]);
                if (!topThread) return null;
                
                const hasStack = visibleNotifications.length > 1;
                // Show 1 edge for 2 notifications, 2 edges for 3+ notifications (macOS style)
                const stackEdgeCount = visibleNotifications.length === 2 ? 1 : visibleNotifications.length >= 3 ? 2 : 0;
                
                return (
                  <div className="relative">
                    {/* Stack edge indicators (visual effect only) - positioned behind and below */}
                    {stackEdgeCount > 0 && Array.from({ length: stackEdgeCount }).map((_, index) => {
                      const layer = index + 1; // 1, 2
                      
                      return (
                        <div
                          key={`stack-edge-${layer}`}
                          className="absolute left-0 right-0 glass-notification rounded-b-xl border-b border-x border-white/30"
                          style={{
                            bottom: `${-4 * layer}px`, // Position below the main card
                            height: '16px',
                            zIndex: 10 - layer, // Behind the main card
                          }}
                        />
                      );
                    })}
                    
                    {/* Top notification - fully visible and interactive */}
                    <div
                      className="relative glass-notification rounded-xl border border-white/20 overflow-hidden cursor-pointer hover:border-white/30 transition-all"
                      style={{ 
                        zIndex: 10,
                        boxShadow: '0 10px 30px -5px rgba(0, 0, 0, 0.15)',
                      }}
                      onClick={(e) => {
                        if (hasStack) {
                          // If stacked, expand first
                          setExpandedNotificationGroup(true);
                        } else {
                          // If only 1 notification, open directly
                          openSpotlightWithThread(topThread.id);
                        }
                      }}
                    >
                      {/* Thread Header */}
                      <div className="flex items-center justify-between px-4 py-2.5 border-b border-white/10 bg-white/10">
                        <div className="flex items-center gap-2 flex-1 min-w-0">
                          <CompositeLogoMark className="w-4 h-4 text-[#F06423] flex-shrink-0" />
                          <span className="text-xs text-[#111111] truncate font-medium">{topThread.command}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          {/* Stop button for executing threads */}
                          {topThread.status === 'executing' && (
                            <button
                              onClick={(e) => {
                                e.stopPropagation();
                                handleStopExecution(topThread.id);
                              }}
                              className="p-1 hover:bg-[#F8F7F4] rounded transition-colors flex-shrink-0"
                              title="Stop execution"
                            >
                              <Square className="w-4 h-4 text-slate-600" />
                            </button>
                          )}
                          <button
                            onClick={(e) => {
                              e.stopPropagation();
                              dismissNotification(topThread.id);
                            }}
                            className="p-1 hover:bg-[#F8F7F4] rounded transition-colors flex-shrink-0"
                            title="Dismiss notification"
                          >
                            <X className="w-4 h-4 text-slate-600" />
                          </button>
                        </div>
                      </div>

                      {/* Thread Status - Minimal */}
                      <div className="px-4 py-3">
                        <div className="flex items-start gap-2">
                          {getStatusIcon(topThread.status)}
                          <p className="text-xs text-slate-700 leading-relaxed flex-1">
                            {topThread.currentAction}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })()}
            </div>
          )}
        </div>
      )}

      {/* Spotlight Modal */}
      {showSpotlight && (
        <div className="fixed inset-0 flex items-end justify-center pb-12 z-50 pointer-events-none">
          <div className="glass-morphism rounded-xl shadow-2xl w-full max-w-xl overflow-hidden pointer-events-auto border border-white/20">
            {/* Content Area - only show if there's content to display */}
            {(isReplyMode || showThreadsModal || showSettingsModal || showSuggestions) && (
              <div className="max-h-96 glass-content border-b border-white/10 flex flex-col">
              {isReplyMode && replyThreadId ? (
                /* Reply Mode - Show thread details */
                (() => {
                  const selectedThread = threads.find(t => t.id === replyThreadId);
                  if (!selectedThread) return null;
                  
                  return (
                    <>
                      {/* Sticky Header */}
                      <div className="sticky top-0 z-10 bg-white/80 backdrop-blur-sm border-b border-white/20 p-4 space-y-3">
                        {/* Back button */}
                        <button
                          onClick={() => {
                            setReplyThreadId(null);
                            setIsReplyMode(false);
                          }}
                          className="flex items-center gap-2 text-xs text-slate-600 hover:text-[#111111] transition-colors"
                        >
                          <CornerUpLeft className="w-3 h-3" />
                          Chat History
                          <span className="ml-auto px-1.5 py-0.5 text-[10px] bg-slate-200 text-slate-600 rounded font-medium">Esc</span>
                        </button>
                        
                        {/* Thread Title */}
                        <div className="pb-2 border-b border-white/10">
                          <div className="flex items-center gap-2">
                            <CompositeLogoMark className="w-4 h-4 text-[#F06423] flex-shrink-0" />
                            <h3 className="text-sm font-semibold text-[#111111]">{selectedThread.command}</h3>
                          </div>
                          <p className="text-[10px] text-slate-500 mt-1">
                            {selectedThread.timestamp.toLocaleString()}
                          </p>
                        </div>
                      </div>
                      
                      {/* Scrollable Conversation History */}
                      <div className="p-4 pt-0 overflow-y-auto">
                      <div className="space-y-2">
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
                                  <p className="text-slate-700 leading-relaxed">{msg.message}</p>
                                </div>
                              )}
                              
                              {/* Show LIVE todolist for last message, or frozen snapshot for previous messages */}
                              {selectedThread.majorSteps && (
                                <div className="bg-white/60 border border-white/20 rounded-lg p-2.5 mr-4">
                                  <div className="space-y-2">
                                    {(isLastMessage ? selectedThread.majorSteps : (msg.progressSnapshot || [])).map((step, stepIdx) => (
                                      <div key={step.id} className="space-y-1">
                                        <div className="flex items-start gap-2">
                                          {step.status === 'completed' ? (
                                            <CheckCircle className="w-3 h-3 text-green-500 flex-shrink-0 mt-0.5" />
                                          ) : step.status === 'executing' && isLastMessage && selectedThread.status === 'executing' ? (
                                            <Loader className="w-3 h-3 text-[#F06423] flex-shrink-0 mt-0.5" />
                                          ) : step.status === 'pending' && isLastMessage && selectedThread.status === 'executing' ? (
                                            <div className="w-3 h-3 rounded-full border-2 border-slate-300 flex-shrink-0 mt-0.5" />
                                          ) : (
                                            <X className="w-3 h-3 text-slate-400 flex-shrink-0 mt-0.5" />
                                          )}
                                          <div className="flex-1">
                                            <p className={`text-[10px] font-semibold ${step.status === 'completed' || (isLastMessage && selectedThread.status === 'executing') ? 'text-slate-700' : 'text-slate-400 line-through'}`}>
                                              {stepIdx + 1}. {step.title}
                                            </p>
                                            
                                            {/* Show substeps if any are completed */}
                                            {step.completedAtomicSteps && step.completedAtomicSteps.length > 0 && (
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
                                    ))}
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
                    <div className="p-4">
                    <div className="text-center py-8">
                      <p className="text-xs text-slate-500">No active threads</p>
                    </div>
                    </div>
                  ) : replyThreadId ? (
                    /* Show detailed view of selected thread - Reply mode is default */
                    (() => {
                      const selectedThread = threads.find(t => t.id === replyThreadId);
                      if (!selectedThread) return null;
                      
                      return (
                        <>
                          {/* Sticky Header */}
                          <div className="sticky top-0 z-10 bg-white/80 backdrop-blur-sm border-b border-white/20 p-4 space-y-3">
                            {/* Back button */}
                            <button
                              onClick={() => {
                                setReplyThreadId(null);
                                setIsReplyMode(false);
                              }}
                              className="flex items-center gap-2 text-xs text-slate-600 hover:text-[#111111] transition-colors"
                            >
                              <CornerUpLeft className="w-3 h-3" />
                              Chat History
                              <span className="ml-auto px-1.5 py-0.5 text-[10px] bg-slate-200 text-slate-600 rounded font-medium">Esc</span>
                            </button>
                            
                            {/* Thread Title */}
                            <div className="pb-2 border-b border-white/10">
                              <div className="flex items-center gap-2">
                                <CompositeLogoMark className="w-4 h-4 text-[#F06423] flex-shrink-0" />
                                <h3 className="text-sm font-semibold text-[#111111]">{selectedThread.command}</h3>
                              </div>
                              <p className="text-[10px] text-slate-500 mt-1">
                                {selectedThread.timestamp.toLocaleString()}
                              </p>
                            </div>
                          </div>
                          
                          {/* Scrollable Conversation History */}
                          <div className="p-4 pt-0 overflow-y-auto">
                          <div className="space-y-2">
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
                                    <p className="text-slate-700 leading-relaxed">{msg.message}</p>
                                  </div>
                                  
                                  {/* Show LIVE todolist for last message, or frozen snapshot for previous messages */}
                                  {selectedThread.majorSteps && (
                                    <div className="bg-white/60 border border-white/20 rounded-lg p-2.5 mr-4">
                                      <div className="space-y-2">
                                        {(isLastMessage ? selectedThread.majorSteps : (msg.progressSnapshot || [])).map((step, stepIdx) => (
                                          <div key={step.id} className="space-y-1">
                                            <div className="flex items-start gap-2">
                                              {step.status === 'completed' ? (
                                                <CheckCircle className="w-3 h-3 text-green-500 flex-shrink-0 mt-0.5" />
                                              ) : step.status === 'executing' && isLastMessage && selectedThread.status === 'executing' ? (
                                                <Loader className="w-3 h-3 text-[#F06423] flex-shrink-0 mt-0.5" />
                                              ) : step.status === 'pending' && isLastMessage && selectedThread.status === 'executing' ? (
                                                <div className="w-3 h-3 rounded-full border-2 border-slate-300 flex-shrink-0 mt-0.5" />
                                              ) : (
                                                <X className="w-3 h-3 text-slate-400 flex-shrink-0 mt-0.5" />
                                              )}
                                              <div className="flex-1">
                                                <p className={`text-[10px] font-semibold ${step.status === 'completed' || (isLastMessage && selectedThread.status === 'executing') ? 'text-slate-700' : 'text-slate-400 line-through'}`}>
                                                  {stepIdx + 1}. {step.title}
                                                </p>
                                                
                                                {/* Show substeps if any are completed */}
                                                {step.completedAtomicSteps && step.completedAtomicSteps.length > 0 && (
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
                                        ))}
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
                    <div className="p-4">
                    {threads.map((thread, idx) => {
                      const statusInfo = getThreadStatusIndicator(thread.status, thread.notificationDismissed, thread.id);
                      const isActive = replyThreadId === thread.id;
                      
                      return (
                        <button
                          key={thread.id}
                          onClick={() => {
                            setReplyThreadId(thread.id);
                            setActiveThreadId(thread.id);
                            setIsReplyMode(true); // Automatically enter reply mode
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
                          className={`w-full flex items-center gap-2 px-3 py-2 rounded-lg transition-colors text-left ${
                            isActive 
                              ? 'bg-[#F06423]/10 hover:bg-[#F06423]/15 border border-[#F06423]/20' 
                              : 'hover:bg-white/60 border border-transparent'
                          }`}
                        >
                          <div className="flex items-center gap-2 flex-1 min-w-0">
                            {statusInfo.showDot && (
                              <div className={`w-2 h-2 rounded-full ${statusInfo.color} flex-shrink-0`} />
                            )}
                            <div className={`flex-1 min-w-0 ${!statusInfo.showDot ? 'ml-4' : ''}`}>
                              <p className="text-xs font-medium text-[#111111] truncate">{thread.command}</p>
                              <p className="text-[10px] text-slate-600 mt-0.5">{statusInfo.label}</p>
                            </div>
                          </div>
                          <ChevronRight className="w-3.5 h-3.5 text-slate-400 flex-shrink-0" />
                        </button>
                      );
                    })}
                    </div>
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
                        <span className="text-[10px] text-slate-600">Chrome (Default)</span>
                        <span className="text-[10px] text-slate-400">•</span>
                        <button className="text-[10px] text-[#F06423] hover:text-[#F06423]/80 font-medium">Rescan</button>
                        <span className="text-[10px] text-slate-400">•</span>
                        <button className="text-[10px] text-[#F06423] hover:text-[#F06423]/80 font-medium">Install Extension</button>
                        <span className="text-[10px] text-slate-400">•</span>
                        <button onClick={() => window.open('settings.html', '_blank')} className="text-[10px] text-[#F06423] hover:text-[#F06423]/80 font-medium">More Settings</button>
                      </div>
                    </div>
                  </div>
                </div>
              ) : showSuggestions && input.trim() === '' ? (
                <div className="p-4 space-y-2">
                  {suggestions.map((suggestion, idx) => (
                    <button
                      key={idx}
                      onClick={() => handleExecute(suggestion.text)}
                      className="w-full flex items-center justify-between gap-3 px-3 py-2 rounded-lg glass-suggestion transition-all text-left group"
                    >
                      <div className="flex-1 min-w-0">
                        <p className="text-xs text-[#111111] leading-snug font-medium">{suggestion.text}</p>
                      </div>
                      <span className="text-[10px] text-slate-500 flex-shrink-0">⌘{idx + 1}</span>
                    </button>
                  ))}
                </div>
              ) : null}
              </div>
            )}

            {/* Tab Navigation - Chrome Style (hidden in reply mode) */}
            {!isReplyMode && (
              <div className="relative glass-nav px-4 pb-2">
                {(showSuggestions || showThreadsModal || showSettingsModal) && (
                  <div className="absolute top-[4px] left-0 right-0 h-[2px] bg-[#F06423] z-0" />
                )}
                <div className="flex gap-1 pt-1.5 relative z-10">
                {/* Suggestions Tab */}
                <button
                  onClick={() => {
                    // Toggle suggestions on/off
                    setShowSuggestions(!showSuggestions);
                    setShowSettingsModal(false);
                    setShowThreadsModal(false);
                  }}
                  className={`relative flex items-center justify-center ${
                    showSuggestions ? 'w-auto px-4 gap-2' : 'w-10'
                  } py-2 text-xs font-medium transition-all rounded-b-lg ${
                    showSuggestions
                      ? 'bg-white text-[#F06423] shadow-sm border-l-2 border-r-2 border-b-2 border-[#F06423]'
                      : 'bg-transparent text-slate-600 hover:text-[#111111] hover:bg-white/40'
                  }`}
                  style={{
                    marginTop: showSuggestions ? '-2px' : '0px',
                    paddingTop: showSuggestions ? 'calc(0.5rem + 2px)' : '0.5rem',
                  }}
                >
                  <Lightbulb className="w-4 h-4 flex-shrink-0" />
                  {showSuggestions && <span>Suggestions</span>}
                </button>

                {/* Chat History Tab */}
                <button
                  onClick={() => {
                    // Toggle Chat History on/off
                    setShowThreadsModal(!showThreadsModal);
                    setShowSettingsModal(false);
                    setShowSuggestions(false);
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
                    setShowSuggestions(false);
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
                >
                  <Settings className="w-4 h-4 flex-shrink-0" />
                  {showSettingsModal && <span>Settings</span>}
                  <span className={`absolute top-0 right-0 w-[10px] h-[10px] rounded-full border border-white ${chromeConnected ? 'bg-green-500' : 'bg-[#F06423]'}`} />
                </button>

                {/* Spacer */}
                <div className="flex-1" />

                {/* Action Buttons */}
                <button 
                  onClick={() => setSharingEnabled(!sharingEnabled)}
                  className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg transition-colors text-xs font-medium self-center ${
                    sharingEnabled 
                      ? 'bg-[#F06423] hover:bg-[#F06423]/90 text-white' 
                      : 'bg-slate-200 hover:bg-slate-300 text-slate-600'
                  }`}
                >
                  <span>📤</span>
                  Sharing
                </button>
              </div>
            </div>
            )}

            {/* Search input */}
            <div className="glass-input">
              <div className="flex items-center gap-3 px-4 py-3">
                <CompositeLogoMark className="w-4 h-4 text-[#F06423] flex-shrink-0" />
                <input
                  ref={spotlightRef}
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter') handleExecute(input);
                    if (e.key === 'Escape') {
                      if (isReplyMode && replyThreadId) {
                        // Exit reply mode and go back to thread list
                        setIsReplyMode(false);
                        setReplyThreadId(null);
                        setInput('');
                      } else if (isReplyMode) {
                        setIsReplyMode(false);
                        setInput('');
                      } else {
                        setShowSpotlight(false);
                      }
                    }
                  }}
                  placeholder={isReplyMode ? "Reply to Composite" : "Describe your browser task. Watch it get done."}
                  className="flex-1 outline-none text-sm text-[#111111] placeholder-slate-500 bg-transparent"
                />
                <div className="flex items-center gap-1">
                  {/* Stop button - only show when in reply mode AND thread is executing */}
                  {isReplyMode && replyThreadId && (() => {
                    const replyThread = threads.find(t => t.id === replyThreadId);
                    return replyThread && replyThread.status === 'executing' && (
                      <button
                        onClick={() => handleStopExecution(replyThreadId)}
                        className="p-1 hover:bg-[#F8F7F4] rounded transition-colors flex-shrink-0"
                        title="Stop execution"
                      >
                        <Square className="w-4 h-4 text-slate-600" />
                      </button>
                    );
                  })()}
                  <button
                    onClick={() => setShowSpotlight(false)}
                    className="p-1 hover:bg-[#F8F7F4] rounded transition-colors"
                  >
                    <X className="w-4 h-4 text-slate-600" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}

