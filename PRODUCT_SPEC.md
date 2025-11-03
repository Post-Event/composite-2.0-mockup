# Composite 2.0 - Product Requirements Document

**Version:** 2.0  
**Product Name:** Composite  
**Product Type:** Autopilot for your browser
**Last Updated:** November 2, 2025

---

## 1. Product Overview

### 1.1 Product Description
Composite 2.0 is a browser-based AI copilot that enables users to automate complex, multi-step tasks across web applications through natural language commands. The system executes tasks by directly interacting with web pages, navigating between sites, extracting data, filling forms, and performing actions autonomously while providing real-time progress visibility.

### 1.2 Core Value Proposition
- **Natural Language Task Execution**: Users describe tasks in plain English; Composite translates them into automated browser actions
- **Multi-Step Task Orchestration**: Handles complex workflows spanning multiple web applications (email, calendar, documents, etc.)
- **Real-Time Progress Transparency**: Users see granular progress updates as tasks execute
- **Interactive Clarification**: System pauses for user input when needed, then continues execution
- **Conversational Thread Management**: Each task maintains a conversation history with context preservation

---

## 2. System Architecture Requirements

### 2.1 Component Structure
The system MUST consist of:

1. **Desktop Application** (Main UI)
   - Runs as standalone application on user's computer
   - Provides command interface via Spotlight modal and task monitoring
   - Provides settings management via standalone Settings page
   - Maintains websocket/IPC connection with browser extension

2. **Browser Extension**
   - Installed in user's Chrome/browser
   - Executes DOM manipulation, navigation, and data extraction
   - Reports status and progress back to desktop app
   - Requires active connection to function

3. **Backend Service** (Implied, for AI processing)
   - Interprets natural language commands
   - Plans task execution steps
   - Coordinates between desktop app and extension

### 2.2 Connection Architecture

**Connection Status Monitoring**
- System MUST continuously monitor connection between desktop app and browser extension
- Connection states:
  - **Connected** (Green indicator): Extension is installed, browser is open, connection active
  - **Disconnected** (Orange indicator): Extension missing, browser closed, or connection lost

**Connection Management Features**
- Connection status visible as status dot on Settings button in Spotlight
- Full connection details and management available in Settings page
- "Rescan Browser" functionality to re-establish connection (if included in Settings page)
- "Install Extension" direct link when extension not detected (if included in Settings page)
- Version information display for both app and extension (e.g., "App: v0.9.9", "Extension: v1.6.3") may be shown in Settings page

---

## 3. User Interface Requirements

### 3.1 Spotlight Interface (Primary Command Entry)

**Activation & Deactivation**
- MUST support keyboard shortcut: `Cmd/Ctrl + Shift + Space` to toggle visibility
- When activated, interface appears as modal overlay at bottom-center of screen
- Clicking 'X' button closes interface
- Pressing `Escape` key closes interface (with context-aware behavior - see below)

**Visual Design Requirements**
- Modal window with glass morphism effect (semi-transparent, blurred background)
- Rounded corners for modern aesthetic
- Maximum width constraint (approximately 600-700px)
- Default position: Centered horizontally, positioned near bottom of viewport
- Border with subtle white/light outline
- Drop shadow for depth perception

**Draggability**
- Spotlight modal MUST be draggable by user
- User can click and drag header/top area to reposition modal anywhere on screen
- Default position: Bottom-center of screen (on first open or reset)
- Position persists across sessions (remembered for next time Spotlight opens)
- Drag cursor (move/grab) appears on hover over draggable area
- Smooth dragging with no lag or jank
- Modal stays within viewport bounds (cannot be dragged off-screen)
- Optional: Snap to edges/corners for convenient positioning

**Input Field**
- Single-line text input at bottom of modal
- Composite logo icon displayed on left side of input
- Placeholder text:
  - Default: "Describe your browser task. Watch it get done."
  - When replying to thread: "Reply to Composite"
- Right side buttons (in order):
  - Stop button (square icon) - visible ONLY when replying to executing thread
    - Tooltip: "Stop execution (⌘P)"
  - Send button (up arrow icon) - visible ONLY when input has text (at least 1 character)
    - Filled light orange circular button (orange-100 background)
    - Dark gray icon (slate-700)
    - Hover state: darker orange background (orange-200)
    - Same functionality as pressing Enter
  - Close button (X icon) - always visible
- Input automatically focused when spotlight opens
- Enter key submits command
- Text styling: medium size, dark text on light/transparent background

**Content Area (Above Input)**
- Scrollable region with maximum height constraint
- Displays one of two views: Suggestions or Chat History
- Empty when all tabs closed
- Glass morphism continuation for visual consistency

### 3.2 Tab Navigation System

**Tab Bar Positioning**
- Located between content area and input field
- Horizontal layout with left-aligned tabs
- Action buttons (Settings icon button) positioned on right side
- Subtle separator line or visual break from content area

**Tab Behavior**
- Two primary tabs: Suggestions, Chat History
- Tabs expand on selection (show icon + label)
- Tabs collapse when inactive (show icon only, fixed width ~40px)
- Active tab styling:
  - Extends upward slightly to connect with content area
  - Border highlighting (2px border on left, right, bottom)
  - White/solid background
  - Accent color text
  - Shadow for elevation
- Inactive tab styling:
  - Transparent background
  - Gray/muted icon color
  - Hover state with semi-transparent background

**Tab-Specific Features**

1. **Suggestions Tab**
   - Icon: Lightbulb
   - Active by default when Spotlight opens
   - Toggleable (click to show/hide)
   - Automatically untoggles when user starts typing in input field
   - No notification badge
   - Tooltip: "Suggestions (⌘S)"

2. **Chat History Tab**
   - Icon: Clock
   - Toggleable (click to show/hide)
   - MUST display notification badge with count when threads need attention
   - Badge positioning: top-right corner of tab
   - Badge styling: red circular background, white number, small size (~12px diameter)
   - Badge count calculation:
     - Include threads with status = `executing` (unless dismissed as ongoing)
     - Include threads with status = `clarification_needed` (unless dismissed)
     - Include threads with status = `success` where notification not yet dismissed
     - Exclude threads that have been viewed since last action
   - Tooltip: "Chat History (⌘B)"

**Settings Button (Replaces Settings Tab)**
- Positioned on right side of tab bar
- Icon: Gear/Settings icon
- Click action: Opens standalone settings page in separate window/view
- MUST display connection status indicator
- Status dot positioning: top-right corner of icon
- Status dot styling:
  - Green dot: Connected
  - Orange dot: Disconnected
  - ~10px diameter, circular, white border
- Tooltip: "Settings (⌘,)"

**Sharing Button**
- Positioned on right side of tab bar (after Settings button)
- Toggleable button to enable/disable sharing current browser tab
- Visual states:
  - Enabled: Orange background (#F06423), white text
  - Disabled: Light orange background (orange-100), dark gray text (slate-600)
- Icon behavior:
  - **When enabled**: Displays favicon of current browser tab
    - Fallback to globe icon (🌐) if favicon fails to load
  - **When disabled**: Shows globe icon (🌐)
- Button label changes based on state:
  - **Enabled (unhovered)**: "Sharing"
  - **Enabled (hovered)**: Shows current tab title (e.g., "hi - Google Search")
  - **Disabled**: "Share current tab"
- Tooltip:
  - **When enabled**: Shows tab title with shortcut (e.g., "hi - Google Search (⌘T)")
  - **When disabled**: "Share current tab (⌘T)"

**Tab Navigation Hiding**
- MUST be hidden when in Reply Mode (viewing specific thread conversation)
- User in Reply Mode sees only conversation view with back button
- Exiting Reply Mode restores tab navigation

### 3.3 Suggestions View

**Display Conditions**
- Shown when Suggestions tab is active
- Suggestions tab is active by default when Spotlight opens
- Automatically becomes inactive (untoggles) when user starts typing in input field
- Hidden when other tabs are active
- Can be manually toggled on/off at any time via the tab button

**Suggestion Items**
- List of 4+ pre-configured example tasks
- Each suggestion is clickable button
- Keyboard shortcuts displayed: ⌘1, ⌘2, ⌘3, ⌘4 for first four suggestions
- Clicking suggestion immediately executes that command

**Suggestion Button Design**
- Full-width layout
- Left-aligned text with task description
- Right-aligned keyboard shortcut hint
- Hover state: subtle background highlight
- Glass morphism background (transparent when not hovering)
- Spacing between suggestions for touch-friendly interaction

**Example Suggestions**
1. "Send reminder emails for today's reference check calls"
2. "Create interview summary doc for today's candidates"
3. "Add missing Zoom links to upcoming calendar events"
4. "Export this week's calendar to CSV for reporting"

### 3.4 Chat History View

**Thread List Display**
- Shown when Chat History tab active and no specific thread selected
- Vertical list of all task threads (most recent first)
- Each thread shows:
  - Status indicator dot (left side, colored by status, 8px diameter)
  - Task command text (truncated if too long)
  - Status label below command (e.g., "Ongoing", "Completed", "Attention Needed")
  - Right chevron icon indicating clickable
- Thread item spacing for easy selection

**Thread Status Indicators**

| Status | Dot Color | Label | Show Dot If... |
|--------|-----------|-------|----------------|
| executing | Orange (#F06423) | "Ongoing" | Not dismissed as ongoing task |
| clarification_needed | Red | "Attention Needed" | Not dismissed |
| success | Green | "Completed" | Notification not dismissed |
| cancelled | Gray | "Cancelled" | Never show dot |

**Status Determination Logic**
- `success`: All todo list items are completed (ticked off) when execution finishes
- `clarification_needed`: Execution has finished but not all todo list items are ticked off, and the user did not explicitly cancel the task

**Thread Item Interactions**
- Click thread item → Enter Reply Mode for that thread
- Hover effect: subtle background highlight
- Active thread has orange/accent background tint

**Empty State**
- When no threads exist: Display centered message "No active threads"
- Styling: small gray text, centered in content area

### 3.5 Reply Mode / Thread Detail View

**Entry Points**
- Click any thread from Chat History list
- Click notification card
- Use `Cmd/Ctrl + R` when notification visible

**Visual Layout**
- Replaces Chat History list with single thread detail view
- Occupies full content area
- Sticky header at top
- Scrollable conversation history in middle
- Input field remains at bottom

**Sticky Header Components**
1. **Back Button**
   - Icon: Corner-up-left arrow
   - Text: "Chat History"
   - Keyboard hint: "Esc" shown in badge
   - Click or press Escape to return to thread list
2. **Thread Title Section**
   - Composite logo icon
   - Original command as title (bold, larger text)
   - Timestamp of thread creation (smaller gray text below)
   - Horizontal separator line below header

**Conversation History Display**
- Chronological message flow (oldest at top)
- Two message types: User messages and Composite messages

**User Messages**
- Alignment: Indented from left (margin-left)
- Background: Light orange tint (accent color at low opacity)
- Border: Orange accent border
- Text: Dark, readable
- Rounded corners

**Composite Messages**
- Alignment: Indented from right (margin-right)
- Background: White/light glass effect
- Border: Subtle light border
- Text: Dark, readable
- Rounded corners

**Progress Visualization (To-Do List)**
- Appears below relevant user message in conversation
- Background: White/light glass effect with border
- Shows major steps as numbered list

**Major Step States**
1. **Pending**
   - Icon: Empty circle outline (gray)
   - Text: Normal weight, dark color
   - Substeps: Hidden

2. **Executing** (only on live/latest progress)
   - Icon: Animated spinner (orange)
   - Text: Bold, dark color
   - Substeps: Completed substeps shown with green checkmarks
   - Current substep updates in real-time

3. **Completed**
   - Icon: Green checkmark in circle
   - Text: Bold, dark color
   - Substeps: All completed substeps shown with green checkmarks

4. **Cancelled/Interrupted**
   - Icon: X icon (gray)
   - Text: Gray, crossed out
   - Substeps: Not shown

**Substep Display**
- Indented list under major step
- Each substep shows:
  - Green checkmark icon
  - Substep description text
  - Small font size
- Only completed substeps are shown
- As task executes, substeps appear incrementally

**Progress Snapshot Behavior**
- For historical messages: Show frozen snapshot of progress at time of that message
- For current/last message: Show live, updating progress
- When thread is stopped/cancelled: Last snapshot saved with that state
- When user replies and execution resumes: Continue updating from last snapshot

**Final Message Display**
- When task completes (`status = success`): Show Composite's completion message AFTER the to-do list
- When task needs clarification (`status = clarification_needed`): Show Composite's question AFTER the to-do list
- Message styling: Same as other Composite messages (white/light background)

**Reply Mode Input Behavior**
- Placeholder text: "Reply to Composite"
- Enter key sends reply and adds to conversation
- Spotlight remains open after sending reply (user sees response)
- Stop button visible in input area if thread currently executing

**Escape Key Behavior in Reply Mode**
- First Escape: Exit Reply Mode, return to Chat History list
- Input field cleared
- Thread remains selected in list

### 3.6 Settings Page (Standalone)

**Overview**
- Settings accessed via gear icon button in Spotlight tab bar
- Opens as separate page/window (not within Spotlight modal)
- Full-page layout with professional settings interface
- Persists independently from Spotlight interface

**Page Layout Structure**

**Header Section**
- Fixed header at top of page
- White background with subtle bottom border
- Components:
  - Composite logo (40px) on left
  - "Composite Settings" title text (20px, bold)
- Sticky positioning for scroll persistence

**Main Layout**
- Two-column layout: Sidebar (240px) + Content area (flexible)
- Sidebar has sticky positioning relative to header
- Content area scrolls independently
- White background for sidebar, light gray (#fafafa) for main content area

**Sidebar Navigation**

Organized into sections with uppercase section headers:

1. **SETTINGS Section**
   - Profile & Privacy (user icon) - Default active page
   - Appearance (palette icon)
   - Blocklist (ban circle icon)
   - Usage (bar chart icon)

2. **ACCOUNT Section**
   - Manage Billing (credit card icon) - External link to Stripe

3. **RESOURCES Section**
   - Changelog (document icon)
   - Contact Support (help icon) - mailto link
   - Community (users icon) - External link to Discord

4. **Logout** (separate, at bottom)
   - Logout (arrow icon)

**Navigation Item Styling**
- Active item: Orange left border, orange background tint, orange text
- Hover: Light gray background
- Each item shows icon + label
- Font size: 14px, medium weight

**Content Pages**

**1. Profile & Privacy Page**
- Two-tab system: "Profile" and "Other"
- Profile tab contains:
  - Profile Information section
  - Form fields: First Name, Last Name, Title, Company (2-column grid)
  - Internal Sites textarea for custom website URLs
  - "Save Changes" primary button
- Other tab contains:
  - Privacy Settings section
  - Privacy Mode toggle: "Your data will not be trained on or used to improve the product"

**2. Appearance Page**
- Theme section with dropdown selector
- Three theme options:
  - Light Theme (sun icon)
  - Dark Theme (moon icon)
  - Follow System (monitor icon)

**3. Blocklist Page**
- Section for blocked websites
- Input field + "Add Site" button to add domains
- Empty state: "No restricted websites yet" with icon
- List items show domain name, date added, and "Remove" button
- Description: "Sites added here will be blocked by Composite"

**4. Usage Page**
- Monthly usage overview: "Last 30 days of requests that resets every 30 days"
- Usage statistics:
  - Current usage count / limit (e.g., "1,982 / 5,000")
  - Percentage used (e.g., "39.6%")
  - Progress bar visualization (green)
- Request Distribution section with chart placeholder

**5. Changelog Page**
- Version entries organized by date
- Each entry shows:
  - Version number and date (e.g., "0.9.9 (2025-10-26)")
  - New Features list
  - Improvements list
- Scrollable list of historical versions

**6. Logout Page**
- Confirmation section
- Warning text: "Are you sure you want to logout? You'll need to sign in again to continue using Composite."
- Primary "Logout" button with icon

**Connection Status**
- Connection status removed from inline display in settings
- Status indicator remains on Settings button in Spotlight (as status dot)
- Connection management may be integrated into Profile or separate System page if needed

**Visual Design**
- Clean, modern interface with card-based sections
- White content cards with subtle borders and rounded corners
- Consistent spacing and typography
- Form inputs with focus states (orange border)
- Primary buttons use orange accent color (#F06423)
- Responsive layout collapses sidebar on mobile

**Navigation Behavior**
- Clicking sidebar items switches content page (single-page app behavior)
- Active page highlighted in sidebar
- External links open in new tab/browser
- Back to main app via window close or app navigation

### 3.7 Navigation Between Spotlight and Settings

**Opening Settings Page**
- Click Settings button (gear icon) on right side of Spotlight tab bar
- Opens settings page in separate window/view
- Settings page is independent from Spotlight modal
- Spotlight can remain open or be closed (product decision)

**Settings Button Location**
- Positioned on right side of tab bar in Spotlight
- Shows gear icon
- Displays connection status dot (green/orange) on top-right corner

**Returning to Main Application**
- Close settings window/page via browser close or navigation
- Settings changes persist and apply to main application
- No explicit "back to Spotlight" needed if separate window
- May have app-level navigation if settings within same window

**State Synchronization**
- Settings changes (theme, blocklist, profile) sync immediately to main app
- Connection status updates reflected in both Spotlight button and Settings page
- User profile changes available to task execution context

---

## 4. Notification System Requirements

### 4.1 Notification Triggering Logic

**When to Show Notification**
A notification MUST be shown for a thread if ALL of the following are true:
1. Thread status is `executing`, `clarification_needed`, or `success` (not yet dismissed)
2. The currentAction has changed since last notification (new action)
3. Notification for this thread is not currently visible
4. Thread has NOT been viewed by user since the action occurred (timestamp tracking)
5. For `executing` threads: Not dismissed as ongoing task
6. For `clarification_needed` threads: Not dismissed as attention needed

**When NOT to Show Notification**
- User has spotlight open and is viewing the thread in Reply Mode
- User clicked into thread in Chat History after the action occurred
- User explicitly dismissed the notification (for that execution session)
- Thread status is `cancelled` or other non-active state

### 4.2 Notification Visibility Conditions

**Display Rule**
- Notifications ONLY visible when Spotlight interface is CLOSED
- All notifications immediately hidden when Spotlight opens
- Notifications reappear when Spotlight closes (if still meeting trigger conditions)

### 4.3 Notification Cards (macOS Style)

**Positioning**
- Fixed position: Top-right corner of screen
- Offset from edge: ~24px from top, ~24px from right
- Width: Fixed width (~380px)
- Stack vertically when multiple notifications present

**Notification Prioritization**

Notifications MUST be sorted by priority to ensure most urgent items appear first:

**Priority Levels (highest to lowest)**:
1. **Error** (status = `error`) - Highest priority
2. **Action Required** (status = `clarification_needed`) - High priority  
3. **Ongoing** (status = `executing`) - Medium priority
4. **Completed** (status = `success`) - Low priority
5. **Other statuses** (e.g., `cancelled`) - Lowest priority

**Sorting Rules**:
- Sort primarily by priority level
- Within same priority level, sort by `lastActionTime` (most recent first)
- Priority sorting applies to both collapsed and expanded notification views
- Top notification always shows highest priority thread

**Stacking Behavior (macOS Style)**

**Single Notification**
- Displays one notification card
- Fully interactive (click to open thread)
- No stack indicators

**Two Notifications**
- Top notification shows highest priority thread
- One "stack edge" indicator visible below (visual only, not interactive)
- Click top card → Expands to show all notifications in priority order

**Three or More Notifications**
- Top notification shows highest priority thread
- Two "stack edge" indicators visible below (visual only)
- Click top card → Expands to show all notifications in priority order

**Stack Edge Indicator Specs**
- Positioned behind and slightly below the main card
- Each edge offset by 4px lower than previous
- Partial height showing (~16px of visibility)
- Same glass morphism styling as notification cards
- Only bottom and side borders visible
- Creates layered appearance

**Expanded Stack View**
- All notifications shown in vertical list, sorted by priority
- Notifications ordered: Error → Action Required → Ongoing → Completed
- Spacing between cards: ~8px
- Each card fully interactive
- Scroll if needed (more notifications than fit on screen)
- "Collapse" button at bottom (returns to collapsed view)
- "Dismiss All" button at bottom (clears all notifications)

### 4.4 Notification Card Design

**Card Structure**
- Glass morphism background (semi-opaque, blurred)
- Rounded corners
- Border with light color
- Shadow for elevation
- Two sections: Header and Body

**Header Section**
- Background: Slightly more opaque than body
- Border bottom: Subtle separator
- Layout: Horizontal flex
- Components:
  - Composite logo icon (left)
  - Task command text (center, truncated if needed)
  - Stop button (if thread executing, before X)
  - Close/Dismiss button (X icon, right)

**Body Section**
- Padding for comfortable reading
- Status icon (left, appropriate for thread status)
- Current action text (body text, word-wrapped)

**Interaction Behaviors**
- Hover: Subtle shadow increase or border highlight
  - Shows "Reply ⌘R" button in bottom right corner (macOS style)
  - Button styling: Light orange background (orange-100), darker gray text (slate-700), orange border (orange-200), medium shadow
  - Does not take up additional space (overlays on top of content)
  - Smooth fade-in/fade-out transition
- Click card body: Open Spotlight with thread in Reply Mode
- Click X button: Dismiss notification (with event propagation stop)
- Click Stop button: Stop thread execution (with event propagation stop)
  - Tooltip: "Stop execution (⌘P)"
  - Only visible when thread is executing

### 4.5 Notification Dismissal

**Dismissal Actions**
- Click X button on notification card
- Click "Dismiss All" in expanded view
- Click notification card and view thread (implicit dismissal)

**Dismissal Tracking**

**For Executing Threads (Ongoing Tasks)**
- Dismissing hides notification for entire execution session
- Notification does NOT reappear for new actions in same execution
- Dismissal state cleared when thread changes to different status
- User can view thread in Chat History without triggering new notifications

**For Clarification Needed Threads**
- Dismissing hides notification until user responds or status changes
- Similar behavior to executing threads
- Allows user to delay responding without repeated notifications

**For Completed Threads (Success)**
- Dismissing marks notification as permanently dismissed for that thread
- Thread marked with `notificationDismissed = true`
- No further notifications for this thread
- Green dot removed from thread in Chat History

**Viewing vs. Dismissing**
- Viewing thread in Chat History (clicking thread item) counts as implicit dismissal
- Timestamp tracking: `threadViewTimestamps[threadId] = Date.now()`
- No new notifications shown if thread viewed after action occurred

### 4.6 Notification Count Badge

**Location**
- Chat History tab in Spotlight interface
- Top-right corner of tab

**Count Calculation**
- Count = Number of threads that need attention AND haven't been dismissed/viewed
- Includes:
  - `executing` threads (not dismissed as ongoing)
  - `clarification_needed` threads (not dismissed)
  - `success` threads (notification not dismissed)
- Excludes:
  - Threads viewed since last action
  - Explicitly dismissed ongoing tasks
  - Explicitly dismissed attention-needed threads
  - Cancelled threads

**Visual Design**
- Circular badge
- Red background
- White number text
- Small size (~12px diameter)
- White border for contrast
- Hidden when count = 0

---

## 5. Task Execution System Requirements

### 5.1 Command Submission

**Input Processing**
- User enters natural language command in input field
- Enter key or suggestion click triggers execution
- Empty/whitespace-only commands ignored (no action)

**Thread Creation**
- Each command creates new "thread" (task execution instance)
- Thread properties:
  - Unique ID (timestamp-based or UUID)
  - Original command text
  - Creation timestamp
  - Status (initially `executing`)
  - Current action description
  - Conversation history array (starts with user command)
  - Major steps array (initialized after planning)
  - Last action timestamp (for notification logic)

**UI State Changes on Submit**
- Spotlight closes automatically (unless in Reply Mode)
- Input field clears
- New thread added to beginning of threads list (most recent first)
- Notification may appear if conditions met

### 5.2 Task Planning Phase

**Initialization**
- Brief delay (~500ms) before showing plan
- System analyzes command and breaks down into major steps
- Status updates to show "Planning task..."

**Major Steps Structure**
- Each task decomposed into 2-5 major steps
- Each major step contains:
  - Unique ID
  - Title (describes what this step does)
  - Status (pending/executing/completed/cancelled)
  - Atomic substeps array
  - Completed atomic substeps array (builds as execution proceeds)

**Atomic Substeps Structure**
- Each major step contains 3-8 atomic substeps
- Substep properties:
  - Description text
  - Delay/duration estimate (for simulation/pacing)

**Display of Plan**
- Major steps shown as to-do list in notification or thread view
- All steps initially show as `pending`
- Substeps not shown until major step starts executing

### 5.3 Task Execution Flow

**Sequential Execution**
- Major steps execute in order (step 1, then step 2, etc.)
- Cannot skip forward (unless step fails/cancelled)

**Major Step Execution**
1. Mark step status as `executing`
2. Update currentAction to step title
3. Begin executing atomic substeps sequentially
4. As each substep completes, add to `completedAtomicSteps` array
5. Update currentAction to show current substep text
6. When all substeps complete, mark major step as `completed`
7. Move to next major step

**Real-Time Progress Updates**
- Current action text updates to reflect active substep
- To-do list icons update (spinner for executing, checkmark for completed)
- Completed substeps appear incrementally under major step
- Last action timestamp updates with each significant change
- These updates trigger notification logic

**Example Flow (Reference Emails Task)**
1. Planning complete → Shows 3 major steps
2. Step 1 starts (`executing`) → Shows step title
3. Step 1, substep 1 executes → Current action updates
4. Step 1, substep 1 completes → Checkmark appears in substeps list
5. Step 1, substep 2 executes → Current action updates
6. (Continue for all substeps in step 1)
7. Step 1 completes → Step icon changes to checkmark
8. Step 2 starts (`executing`)
9. (Continue until all steps complete OR clarification needed)

### 5.4 Task Interruption - Clarification Needed

**Trigger Conditions**
- System encounters ambiguity (e.g., "Which email account to use?")
- Missing required information
- Multiple options available, user preference needed
- Task cannot proceed without user input

**System Behavior on Clarification**
1. Pause execution (current major step remains in `executing` or changes to `pending`)
2. Update thread status to `clarification_needed`
3. Update currentAction to clarification question
4. Save progress snapshot (freeze current state of major steps)
5. Show notification (if Spotlight closed)
6. Question appears AFTER to-do list in thread view

**User Response Required**
- User must reply to thread with answer
- Reply sent via Reply Mode or by clicking notification
- Input placeholder: "Reply to Composite"

**Resuming After Clarification**
1. User's response added to conversation history
2. Progress snapshot restored
3. Status returns to `executing`
4. CurrentAction updates to show proceeding
5. Remaining major steps execute sequentially
6. Execution continues from where it stopped

### 5.5 Task Completion

**Success State**
- When all major steps complete successfully
- Status changes to `success`
- CurrentAction updates with completion message
- Completion message displayed AFTER to-do list
- Notification shown (if Spotlight closed)

**Completion Message Requirements**
- Starts with "Done!" or similar affirmative
- Summarizes what was accomplished
- Mentions specific outcomes (e.g., number of emails sent, document created)
- Friendly, clear, concise tone

**Example Completion Messages**
- "Done! I've successfully sent reminder emails for today's 5 reference check calls using your Work Gmail. All contacts have been notified with personalized messages including the scheduled call times."
- "Done! I've successfully created a comprehensive interview summary document for Arya Sharma. The document includes all key points from the interview notes, technical assessment results, and interviewer feedback, formatted and saved in Google Docs."

### 5.6 Task Cancellation/Stopping

**Stop Command Trigger**
- Keyboard shortcut: `Cmd/Ctrl + P` (when in active thread)
- Stop button click in:
  - Notification card (if thread executing)
  - Spotlight input area (if in Reply Mode with executing thread)
  - Reply Mode header (if thread executing)

**Stop Behavior**
1. Thread status changes to `cancelled`
2. Current action updates to "Task stopped by user"
3. Progress snapshot saved (freezes current state)
4. Execution stops immediately (no further substeps execute)
5. Major steps not yet started remain as `pending`
6. In-progress major step may show as incomplete

**Visual Indication**
- Cancelled major steps show X icon with gray color
- Text may be grayed out or crossed out
- Completed steps remain visible with checkmarks
- No further progress updates occur

**User Can Review**
- Thread remains in Chat History
- Status shows "Cancelled"
- Progress snapshot preserved
- User can see what completed before stop

---

## 6. Conversation History & Thread Management

### 6.1 Thread Persistence

**Thread Storage**
- All threads stored in application state
- Persist across session (unless user clears)
- Ordered by most recent first
- No automatic cleanup (user can manually delete if feature added)

**Thread Properties**
```
{
  id: number/string (unique),
  command: string (original user command),
  status: 'executing' | 'clarification_needed' | 'success' | 'error' | 'cancelled',
  timestamp: Date (creation time),
  lastActionTime: number (timestamp of last update),
  currentAction: string (latest status message),
  conversationHistory: array (all messages),
  majorSteps: array (task plan and progress),
  notificationDismissed: boolean (for completed threads),
}
```

### 6.2 Conversation History Structure

**Message Types**
1. **User Messages**
   - Role: 'user'
   - Message: User's command or response text
   - Timestamp: When message sent
   - Progress snapshot: null (users don't have progress)

2. **Composite Messages** (implicit, shown via currentAction)
   - Not stored as separate messages in history
   - Represented by changes to thread's currentAction
   - Associated with progress updates
   - Final completion/clarification messages stored indirectly

**History Array**
- Each entry in conversationHistory array has:
  - `role`: 'user' | 'composite'
  - `message`: Text content
  - `timestamp`: When message created
  - `progressSnapshot`: Copy of majorSteps at time of message (for historical view)

**Snapshot Mechanism**
- When user sends message: Save current state of majorSteps with that message
- Allows historical view to show progress at each point in conversation
- Current/last message always shows LIVE progress (not snapshot)

### 6.3 Multi-Turn Conversations

**Clarification Flow**
1. Initial user command → Composite starts execution
2. Composite pauses with question → Stored as currentAction
3. User replies → New user message added to history, includes progress snapshot
4. Composite continues → Updates currentAction and majorSteps
5. Process repeats if more clarification needed

**Reply Mode Behavior**
- User can reply to any thread, not just clarification-needed ones
- Replying to completed thread could restart or continue task (product decision)
- Replying to executing thread could provide additional context/guidance
- Each reply adds to conversation history with snapshot

### 6.4 Thread Viewing & Navigation

**Accessing Threads**
- Click thread in Chat History list
- Click notification card
- Keyboard: `Cmd/Ctrl + R` when notification visible

**View Tracking**
- System tracks when user views each thread
- Timestamp stored: `threadViewTimestamps[threadId] = timestamp`
- Used for notification suppression logic
- Viewing thread counts as implicit acknowledgment

**Navigation Within Thread**
- Back button returns to Chat History list
- Escape key returns to Chat History list
- Input field remains focused for easy replying
- Scrollable conversation history for long threads

---

## 7. Keyboard Shortcuts & Accessibility

### 7.1 Global Shortcuts

| Shortcut | Action | Context |
|----------|--------|---------|
| `Cmd/Ctrl + Shift + Space` | Toggle Spotlight visibility | Global (anywhere in app) |
| `Cmd/Ctrl + R` | Enter Reply Mode for first visible notification | Global (when Spotlight closed) |
| `Cmd/Ctrl + R` | Enter Reply Mode for current thread | In Spotlight (not already in Reply Mode) |
| `Cmd/Ctrl + P` | Stop execution of active thread | When active thread is executing |

### 7.2 Context-Specific Shortcuts

| Shortcut | Action | Context |
|----------|--------|---------|
| `Enter` | Submit command/reply | Input field focused |
| `Escape` | Close Spotlight | Spotlight open, not in Reply Mode |
| `Escape` | Exit Reply Mode | In Reply Mode |
| `⌘1` through `⌘4` | Execute suggestion 1-4 | Suggestions view visible |

### 7.3 Spotlight View Shortcuts

| Shortcut | Action | Context |
|----------|--------|---------|
| `Cmd/Ctrl + S` | Toggle Suggestions tab | Spotlight open, not in Reply Mode |
| `Cmd/Ctrl + B` | Toggle Chat History tab | Spotlight open, not in Reply Mode |
| `Cmd/Ctrl + ,` | Toggle Settings modal | Spotlight open, not in Reply Mode |
| `Cmd/Ctrl + T` | Toggle Share Current Tab | Spotlight open, not in Reply Mode |

### 7.4 Focus Management

**Auto-Focus Behavior**
- Input field automatically focused when Spotlight opens
- Focus remains on input when switching tabs
- Focus maintained when entering/exiting Reply Mode
- Focus NOT lost during drag operations

**Tab Navigation**
- Standard tab order through interactive elements
- Tab bar buttons keyboard accessible
- Thread list items keyboard navigable

**Mouse/Pointer Interactions**
- Drag cursor (move/grab) appears on draggable area
- Clear visual feedback during drag operation
- Smooth drag with no lag for users with motion sensitivity

**Screen Reader Support**
- Status updates announced for execution progress
- Notification appearance announced
- Thread status changes announced
- Button labels clear and descriptive
- Draggable area properly labeled for screen readers

---

## 8. Task Execution Examples (Reference Implementations)

The system MUST support complex, multi-step tasks similar to these examples:

### 8.1 Example Task: Send Reminder Emails

**User Command**: "Send reminder emails for today's reference check calls"

**Major Steps**:
1. Open calendar and find today's reference check calls
   - Navigate to calendar.google.com
   - Click on "Today" view
   - Filter for events with "reference check" keyword
   - Found 5 reference check calls scheduled for today

2. Extract contact information
   - Reading event details for first call...
   - Extracting email: john.smith@company.com
   - Reading event details for second call...
   - Extracting email: sarah.jones@company.com
   - Reading event details for remaining calls...
   - Successfully extracted all 5 contact emails

3. Compose and send reminder emails
   - Opening Gmail...
   - Composing email for John Smith (9:00 AM call)
   - Sending email to john.smith@company.com
   - Composing email for Sarah Jones (10:30 AM call)
   - Sending email to sarah.jones@company.com
   - Composing and sending remaining 3 emails...
   - All reminder emails sent successfully

**Clarification Point**: After step 2, system asks "Which email account should I use to send the reminder emails?"

**User Response**: "Work Gmail" or "Personal Gmail" or specific email address

**Completion**: System completes step 3 and shows success message

### 8.2 Example Task: Create Interview Summary

**User Command**: "Create interview summary doc for today's candidates"

**Major Steps**:
1. Read through interview notes
   - Navigate to drive.google.com
   - Click on search bar
   - Search for "Interview Notes"
   - Press Enter to complete search
   - Click on "Q4 2024 Interview Notes" document
   - Reading document contents...

2. Create a new document for summary
   - Navigate to docs.google.com
   - Click on "Blank" template
   - Type title: "Interview Summary - Oct 30, 2024"
   - Press Enter to confirm title

3. Summarize within document
   - Analyzing interview notes...
   - Typing candidate name: "Arya Sharma"
   - Adding position: "Senior Software Engineer"
   - Summarizing key points...
   - Adding technical assessment notes...
   - Adding interviewer feedback...
   - Formatting document...
   - Saving document...

**Completion**: All steps complete, success message shown

### 8.3 Example Task: Add Zoom Links

**User Command**: "Add missing Zoom links to upcoming calendar events"

**Major Steps**:
1. Find calendar events without Zoom links
   - Navigate to calendar.google.com
   - Click on "Upcoming" view
   - Scanning events for next 7 days...
   - Checking event 1: "Team Standup" - No Zoom link
   - Checking event 2: "Client Demo" - No Zoom link
   - Checking event 3: "Design Review" - No Zoom link
   - Found 3 events without Zoom links

2. Generate Zoom meeting links
   - Opening Zoom scheduler in new tab
   - Generating Zoom link for "Team Standup"...
   - Created: https://zoom.us/j/123456789
   - Generating Zoom link for "Client Demo"...
   - Created: https://zoom.us/j/987654321
   - Generating Zoom link for "Design Review"...
   - Created: https://zoom.us/j/456789123

3. Add links to calendar events
   - Returning to Google Calendar...
   - Opening "Team Standup" event
   - Adding Zoom link to event description
   - Saving event...
   - Opening "Client Demo" event
   - Adding Zoom link to event description
   - Saving event...
   - Opening "Design Review" event
   - Adding Zoom link to event description
   - Saving event...
   - All calendar invites updated successfully

**Completion**: All steps complete, success message shown

### 8.4 Example Task: Export Calendar to CSV

**User Command**: "Export this week's calendar to CSV for reporting"

**Major Steps**:
1. Access calendar and select date range
   - Navigate to calendar.google.com
   - Click on date range selector
   - Select "This week" option
   - Date range set: Oct 28 - Nov 3, 2024

2. Fetch and organize calendar events
   - Fetching calendar events for selected range...
   - Found 15 events in date range
   - Extracting event titles...
   - Extracting dates and times...
   - Extracting attendee information...
   - Extracting locations...
   - All event data collected successfully

3. Convert to CSV and download
   - Creating CSV headers...
   - Formatting event data to CSV rows...
   - Adding 15 events to CSV file...
   - Validating CSV format...
   - Generating download file...
   - CSV file ready: calendar_export_week_44.csv

**Completion**: All steps complete, success message shown

---

## 9. Data Flow & State Management

### 9.1 Application State Structure

**Core State Objects**:

```
{
  // UI State
  showSpotlight: boolean,
  input: string,
  showSuggestions: boolean,
  showThreadsModal: boolean,
  isReplyMode: boolean,
  replyThreadId: number/string | null,
  activeThreadId: number/string | null,
  spotlightPosition: object { x: number, y: number } | null, // null = default position
  chromeConnected: boolean, // Connection status (green = true, orange = false)
  sharingEnabled: boolean, // Whether tab sharing is enabled
  currentTab: object { title: string, favicon: string }, // Current browser tab info
  
  // Thread Data
  threads: array of thread objects,
  
  // Notification State
  visibleNotifications: array of thread IDs,
  expandedNotificationGroup: boolean,
  lastNotificationAction: object (threadId → currentAction),
  threadViewTimestamps: object (threadId → timestamp),
  dismissedOngoingTasks: Set of thread IDs,
  dismissedAttentionNeeded: Set of thread IDs,
  
  // Settings (persisted, accessed via separate settings page)
  chromeConnected: boolean,
  userProfile: object (firstName, lastName, title, company, internalSites),
  privacyMode: boolean,
  theme: string ('light' | 'dark' | 'system'),
  blocklist: array of domain strings,
  userEmail: string,
  appVersion: string,
  extensionVersion: string,
}
```

### 9.2 State Update Triggers

**UI State Updates**:
- User keyboard shortcuts → Toggle showSpotlight, isReplyMode
- Tab clicks → Update active tab booleans
- Thread clicks → Update replyThreadId, activeThreadId, isReplyMode
- Spotlight drag → Update spotlightPosition, persist to localStorage/preferences

**Thread State Updates**:
- Command submission → Create new thread, add to threads array
- Execution progress → Update thread.majorSteps, thread.currentAction
- User response → Add to thread.conversationHistory
- Status changes → Update thread.status

**Notification State Updates**:
- Action updates → Check conditions, add to visibleNotifications
- User views thread → Update threadViewTimestamps, remove from visibleNotifications
- User dismisses → Add to dismissedOngoingTasks or dismissedAttentionNeeded
- Status changes → Clean up dismissed sets

### 9.3 Communication Flows

**Desktop App ↔ Browser Extension**:
1. Desktop app sends command to extension via IPC/websocket
2. Extension executes DOM actions, navigates pages
3. Extension sends progress updates back to desktop app
4. Desktop app updates UI and thread state
5. Bidirectional status heartbeat for connection monitoring

**Desktop App ↔ Backend Service**:
1. Desktop app sends user command to backend for processing
2. Backend analyzes command, creates task plan
3. Backend returns major steps and atomic substeps
4. Desktop app displays plan and coordinates execution
5. Backend may request clarification via desktop app

**State Synchronization**:
- All thread state changes trigger UI re-renders
- Notification visibility recalculated on each thread state change
- Connection status polled or event-driven from extension

---

## 10. Error Handling & Edge Cases

### 10.1 Execution Errors

**Browser Extension Disconnection During Task**:
- Detect connection loss mid-execution
- Pause task execution immediately
- Update thread status to 'error' or show warning
- Display error message: "Connection to browser lost. Please reconnect extension and try again."
- Allow user to retry or cancel task

**Timeout on Substep**:
- If substep takes longer than expected timeout (e.g., 30 seconds)
- Mark substep as potentially stuck
- Optionally pause and ask user if should continue waiting or skip

**Web Page Changes / Element Not Found**:
- Extension reports element not found during DOM interaction
- System tries alternative selectors or methods
- If fails after retries: Pause execution and ask for clarification
- Example: "I couldn't find the search bar on the calendar page. Has the page layout changed?"

**Permission Denied (e.g., Email Sending)**:
- Browser blocks action due to permissions
- System pauses and informs user
- Example: "Gmail is asking for permission to send emails. Please approve and I'll continue."

### 10.2 User Input Edge Cases

**Empty Command Submission**:
- Input field whitespace-only or empty
- No action taken, no error shown
- Input field remains focused

**Command During Active Execution**:
- User submits new command while another task executing
- Creates new separate thread (parallel execution support depends on system capabilities)
- OR: Show warning and ask if user wants to queue or cancel current task

**Reply to Completed Thread**:
- User sends reply to thread with status 'success'
- Could restart task with new context
- OR: Show message "This task is already completed. Start a new task?"
- Product decision needed

**Reply to Cancelled Thread**:
- User sends reply to cancelled thread
- Could restart task from beginning
- OR: Show message and offer to start fresh

### 10.3 Notification Edge Cases

**Rapid Status Changes**:
- Thread changes status multiple times in quick succession
- Notification system should debounce and show latest state
- Avoid notification spam for intermediate states

**User Opens Spotlight While Notification Animating In**:
- Hide notification immediately
- No animation completion needed
- Prevents visual conflict

**All Notifications Dismissed But More Actions Occur**:
- If user dismissed ongoing task notification, but task continues
- No new notifications for that execution session
- User can check Chat History to see progress

**Thread Deleted While Notification Visible**:
- Remove notification immediately
- Clean up related state (dismissed sets, view timestamps)

### 10.4 Connection & Sync Issues

**Extension Version Mismatch**:
- Desktop app and extension have incompatible versions
- Show warning in settings: "Extension version incompatible. Please update."
- Disable task execution until resolved
- Provide update link

**Browser Closed During Execution**:
- Detect browser/extension disconnection
- Pause all executing threads
- Show notification: "Browser closed. Tasks paused."
- Resume capability when browser reopens (if supported)

**Multiple Browser Windows/Profiles**:
- Extension installed in multiple browser profiles
- System should ask which browser/profile to use
- Settings to configure primary browser

---

## 11. Performance & Scalability Requirements

### 11.1 Responsiveness Targets

**UI Responsiveness**:
- Input field typing: < 16ms latency (60fps)
- Spotlight open/close animation: < 300ms
- Spotlight drag operations: < 16ms per frame (60fps, smooth dragging)
- Tab switching: < 100ms
- Thread list rendering: < 200ms for 100+ threads
- Notification appearance: < 100ms

**Execution Updates**:
- Progress updates reflected in UI within 100ms of receiving from extension
- Smooth progress animations, no janky updates
- Efficient re-renders (only affected threads update, not entire list)

### 11.2 Data Management

**Thread History Limits**:
- Support at least 1000 threads in history without performance degradation
- Implement virtualization for thread list if needed
- Older threads can be archived or cleaned up (user-configurable)

**Memory Management**:
- Limit stored progress snapshots to reasonable size
- Clear old snapshots after certain age (e.g., 30 days)
- Efficient JSON storage for thread data

### 11.3 Concurrent Execution

**Multiple Executing Threads**:
- System should support multiple threads executing simultaneously
- Each thread has independent progress tracking
- Notifications for multiple threads stack correctly
- No race conditions in state updates

**Resource Limits**:
- Configurable max concurrent executions (e.g., 3 tasks at once)
- Queue additional tasks if limit reached
- Show queued status in thread list

---

## 12. Security & Privacy Requirements

### 12.1 Data Privacy

**Sensitive Data Handling**:
- Commands and conversation history may contain sensitive information
- Credentials, API keys, personal info should never be stored in plain text
- Consider end-to-end encryption for conversation history

**Screenshot/Screen Recording**:
- Extension may need to capture page content for AI analysis
- User MUST consent to screen capture
- Clear indicator when capture is active
- Option to disable capture in settings

**Data Retention**:
- User controls how long conversation history is retained
- Option to auto-delete old threads (e.g., after 30 days)
- Manual delete option for individual threads

### 12.2 Execution Boundaries

**Blocklist Functionality**:
- Users can specify domains/URLs that Composite should never access via Settings page
- Blocklist managed through dedicated Blocklist page in settings
- Input field to add sites, list view to manage/remove sites
- Blocklist checked before any navigation or interaction
- Override requires explicit user approval
- Default blocklist for sensitive sites (banking, etc.) may be pre-populated

**Permission Prompts**:
- High-risk actions require user confirmation (e.g., "Send email to 100 people?")
- User can set trust level (prompt for all, some, or no actions)
- Audit log of all actions taken

### 12.3 Authentication

**User Account**:
- Secure authentication to Composite service
- Session management with timeouts
- Logout functionality with state cleanup

**Browser Extension Authorization**:
- Extension requires user approval to connect to desktop app
- Token-based auth between app and extension
- Revocation mechanism if extension compromised

---

## 13. Onboarding & First-Run Experience

### 13.1 Initial Setup

**First Launch Flow**:
1. Welcome screen explaining Composite
2. Account creation or login
3. Browser extension installation prompt with instructions
4. Connection verification (check extension installed and connected)
5. Quick tutorial on using Spotlight and commands
6. Sample task execution (guided walkthrough)

**Extension Installation**:
- Clear instructions with screenshots
- Auto-detect browser type
- Link to appropriate extension store
- Verification step with connection test
- Connection status visible on Settings button in Spotlight (status dot indicator)

### 13.2 Tutorial System

**Interactive Tutorial**:
- Overlay guidance on first Spotlight open
- Highlight input field, tabs, and suggestions
- Prompt user to try sample command
- Show notification system in action
- Explain Reply Mode and Chat History

**Help Resources**:
- In-app help accessible from Settings page (Contact Support, Community links)
- Link to documentation and video tutorials
- Community forum or support chat access
- Settings page provides access to Changelog, Support, and Community resources

---

## 14. Future Enhancements (Out of Scope for v2.0)

*These features are NOT required for Composite 2.0 but may be considered for future versions:*

### 14.1 Advanced Features
- Voice command input
- Scheduled/recurring tasks
- Task templates and macros
- Multi-user collaboration on tasks
- Mobile companion app
- Integration with non-browser apps (desktop software automation)

### 14.2 AI Improvements
- More sophisticated natural language understanding
- Proactive task suggestions based on user behavior
- Learning from user corrections and preferences
- Visual element recognition without accessibility labels

### 14.3 Enterprise Features
- Team workspaces and shared tasks
- Admin controls and usage analytics
- SSO and directory integration
- Compliance logging and audit trails

---

## 15. Success Metrics & KPIs

### 15.1 User Engagement Metrics
- Daily active users
- Tasks initiated per user per day
- Task completion rate (success vs. cancelled/failed)
- Average task complexity (number of major steps)
- Repeat usage rate (users returning within 7 days)

### 15.2 Performance Metrics
- Average task execution time
- Time to first notification
- UI responsiveness (p95 latency for interactions)
- Extension connection uptime
- Error rate per task type

### 15.3 User Satisfaction Metrics
- User survey scores (NPS, CSAT)
- Feature usage (which tabs/settings used most)
- Support ticket volume
- User retention (30-day, 90-day)

---

## 16. Technical Stack Recommendations

*While this PRD focuses on functionality rather than implementation, these technical choices are implied by the codebase structure:*

### 16.1 Frontend Technology
- **Framework**: React.js with hooks (as evidenced by useState, useEffect)
- **Styling**: Tailwind CSS for utility classes, CSS modules for glass morphism effects
- **Build Tool**: Vite for fast development and optimized builds
- **State Management**: React hooks (useState, useEffect, useCallback) for local state

### 16.2 Browser Extension
- **Extension Type**: Chrome Extension (Manifest V3 recommended)
- **Communication**: WebSocket or Chrome runtime messaging API
- **Permissions**: Tabs, activeTab, scripting, storage at minimum

### 16.3 Backend Services
- **AI/NLP**: Large language model for command interpretation (e.g., OpenAI GPT, Claude)
- **Task Orchestration**: Backend service to coordinate execution plans
- **Authentication**: OAuth 2.0 or JWT-based auth

---

## 17. Accessibility Standards

### 17.1 WCAG Compliance
- MUST meet WCAG 2.1 Level AA standards minimum
- Color contrast ratios of at least 4.5:1 for normal text
- Focus indicators visible on all interactive elements
- No reliance on color alone for status indication

### 17.2 Keyboard Navigation
- All functionality accessible via keyboard
- Logical tab order through interface
- Escape key for dismissing modals/overlays
- Enter key for submitting forms
- Arrow keys for list navigation (optional enhancement)

### 17.3 Screen Reader Support
- Semantic HTML elements (button, nav, main, etc.)
- ARIA labels for icon-only buttons
- ARIA live regions for status updates
- ARIA expanded/collapsed states for expandable sections
- Proper heading hierarchy

### 17.4 Reduced Motion
- Respect `prefers-reduced-motion` media query
- Disable animations for users with motion sensitivity
- Instant state changes instead of transitions when reduced motion preferred

---

## 18. Internationalization (i18n) Considerations

*While v2.0 may launch English-only, design decisions should support future localization:*

### 18.1 Text Externalization
- All UI strings should be externalized (not hardcoded)
- Use i18n library for string management
- Support for RTL languages in layout design

### 18.2 Date & Time Formatting
- Use locale-aware date/time formatting
- Respect user's timezone and calendar preferences
- Support for 12-hour and 24-hour time formats

### 18.3 Natural Language Commands
- Command parsing should support multiple languages
- AI backend trained on multilingual commands
- Clarification questions in user's language

---

## 19. Testing Requirements

### 19.1 Functional Testing
- All keyboard shortcuts work as specified
- Spotlight draggability works smoothly and position persists across sessions
- Spotlight modal cannot be dragged off-screen (stays within bounds)
- Tab navigation behaves correctly (Suggestions and Chat History tabs)
- Settings button opens settings page correctly
- Settings page navigation and all sub-pages function properly
- Settings changes (profile, theme, blocklist) persist and sync to main app
- Notification logic triggers appropriately
- Thread state transitions valid
- Reply Mode enter/exit functions correctly
- Progress updates reflect in UI accurately

### 19.2 Integration Testing
- Desktop app ↔ Extension communication reliable
- Extension connection detection accurate
- Task execution flows end-to-end
- Error recovery from disconnections
- Concurrent task execution without conflicts

### 19.3 User Acceptance Testing
- Real users complete sample tasks successfully
- UI intuitiveness (can users find features without documentation?)
- Notification clarity (do users understand what's happening?)
- Error messages helpful and actionable

### 19.4 Performance Testing
- UI responsiveness under load (many threads)
- Memory usage stays within acceptable bounds
- Notification rendering doesn't cause lag
- State updates don't block UI thread

---

## 20. Documentation Requirements

### 20.1 User Documentation
- Getting started guide
- Feature overview and screenshots
- Keyboard shortcuts reference
- Settings page guide (profile setup, theme selection, blocklist management, usage tracking)
- Sample tasks with expected outcomes
- Troubleshooting common issues
- FAQ section

### 20.2 Developer Documentation
- Architecture overview
- State management patterns
- Extension communication protocol
- API reference for backend services
- Contributing guidelines

---

## Appendix A: Glossary

- **Atomic Substep**: Individual action within a major step (e.g., "Click search bar")
- **Chat History**: List of all task threads with their conversation history
- **Clarification**: When system pauses execution to ask user a question
- **Composite**: The AI assistant name/brand
- **Major Step**: High-level phase of task execution (e.g., "Extract contact information")
- **Notification**: Pop-up card showing task status when Spotlight closed
- **Progress Snapshot**: Frozen copy of majorSteps at a point in time, stored with conversation messages
- **Reply Mode**: UI state where user is viewing and replying to specific thread
- **Settings Page**: Standalone full-page interface for managing user profile, preferences, and system configuration (separate from Spotlight)
- **Spotlight**: Main command interface modal
- **Thread**: Single task execution instance with conversation history
- **To-Do List**: Visual representation of major steps and progress

---

## Appendix B: Design Principles

1. **Transparency**: Users should always know what Composite is doing
2. **Control**: Users can stop, pause, or redirect execution at any time
3. **Forgiveness**: Easy to undo or correct mistakes
4. **Efficiency**: Minimize keystrokes and clicks to accomplish tasks
5. **Clarity**: Status messages and UI labels are unambiguous
6. **Consistency**: Similar actions behave similarly throughout the app
7. **Responsiveness**: UI feels immediate even during background processing

---

## Appendix C: Non-Functional Requirements Summary

- **Reliability**: 99.5% uptime for backend services, graceful degradation on connection loss
- **Performance**: < 200ms UI response time for user actions, < 1s to show task plan
- **Scalability**: Support 10,000+ concurrent users, 1000+ threads per user
- **Maintainability**: Modular codebase, clear separation of concerns, comprehensive logging
- **Security**: Encrypted data at rest and in transit, regular security audits, vulnerability patching SLA
- **Compatibility**: Support latest 2 major versions of Chrome, Edge, Safari (extension platform permitting)
- **Accessibility**: WCAG 2.1 AA compliance, keyboard-only navigation support

---

**End of Product Requirements Document**

