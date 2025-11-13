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
- Clicking 'Esc' button in tab bar closes interface
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
- ContentEditable div at bottom of modal (NOT a textarea)
  - Automatically grows from 1 line up to maximum 6 lines as user types
  - Text wraps naturally to new lines
  - Becomes scrollable if content exceeds 6 lines
- Voice Input icon displayed on left side of input (animated waveforms)
  - Shows 5 vertical bars that animate when voice is active
  - Activates on Ctrl (Mac) or Alt (Windows) key hold for 250ms
  - Tooltip: "Voice Input (Hold Ctrl)" or "Voice Input (Hold Alt)"
  - Click to toggle voice input on/off
  - Orange color (#F06423) for waveforms
- **Inline Tab Autocomplete System**:
  - When input is empty or contains only current tab mention, shows inline suggestion
  - Default suggestion: "@Current Tab" (when empty)
  - After current tab mention: Shows task suggestion like "Send reminder emails for today"
  - Suggestion appears in gray italic text with "tab" badge
  - Press Tab key to accept and insert suggestion
  - Suggestion automatically advances as user types matching text
- **@ Mention System**:
  - Typing "@" triggers dropdown menu above input field
  - Menu header: "Mention a tab or file"
  - Menu items include:
    1. Current browser tab (always first, with "Current Tab" badge)
    2. "Upload a file" option (blue icon)
    3. Ungrouped tabs (individual tabs not in any group)
    4. Tab groups (collapsible sections with color dots)
       - Shows group name, color dot, and tab count
       - Click to expand/collapse group
       - Grouped tabs shown indented under header
    5. All other open browser tabs
  - Arrow keys navigate menu items
  - Enter or Tab selects highlighted item
  - Escape closes dropdown
  - Typing after "@" filters tabs by title or URL
  - When searching (has query), all groups auto-expand
- **Mention Pills** (inline display of mentioned items):
  - Tab mentions: Orange background, favicon, title, remove button
    - Current tab shows as "@Current Tab" instead of full title
    - Long titles truncated with ellipsis (20 char limit)
    - Click X button to remove mention
  - File mentions: Blue background, file icon, name, size, remove button
    - Shows file size in KB (e.g., "23.5KB")
    - Click X button to remove mention
  - Pills are non-editable inline elements
  - Cursor moves around pills, cannot edit text inside
- Right side buttons (in order):
  - Stop button (square icon) - visible ONLY when replying to executing thread
    - Tooltip: "Stop execution (⌘P)"
  - Send button (up arrow icon) - visible ONLY when input has text (at least 1 character)
    - Filled light orange circular button (orange-100 background)
    - Dark gray icon (slate-700)
    - Hover state: darker orange background (orange-200)
    - Same functionality as pressing Enter
- Input automatically focused when spotlight opens
- On spotlight open (when NOT in reply mode): Automatically inserts current tab mention with space
- Enter key submits command (Shift+Enter adds new line)
- Text styling: medium size, dark text on light/transparent background

**Content Area (Above Input)**
- Scrollable region with maximum height constraint (max-h-96)
- Displays one of two views (when a tab is toggled on):
  1. **Chat History View**: List of all task threads
  2. **Reply Mode / Thread Detail View**: Individual thread conversation (replaces Chat History view)
  3. **Settings View**: Quick settings and extension status
- **Default state**: No tabs toggled on (content area hidden)
- **Empty state**: When all tabs are toggled off, content area is not displayed at all
- Glass morphism continuation for visual consistency

### 3.2 Tab Navigation System

**Tab Bar Positioning**
- Located between content area and input field
- Horizontal layout with left-aligned tabs
- Two tabs: Chat History, Settings
- Esc button positioned on right side
- Orange top border (2px) visible when any tab is active
- Tabs rendered in Chrome-style rounded-bottom design

**Tab Behavior**
- Two primary tabs: Chat History, Settings
- All tabs are **toggleable** (click to show/hide their content)
- Multiple tabs can be closed simultaneously (content area disappears entirely)
- Only one tab can be active/open at a time (mutually exclusive)
- Tabs expand on selection (show icon + label)
- Tabs collapse when inactive (show icon only, fixed width 40px / w-10)
- Active tab styling:
  - Extends upward slightly (-2px margin-top) to connect with orange border
  - Border highlighting (2px border on left, right, bottom) in orange (#F06423)
  - White/solid background
  - Orange text (#F06423)
  - Shadow for elevation
- Inactive tab styling:
  - Transparent background
  - Gray/muted icon color (slate-600)
  - Hover state: text-[#111111], bg-white/40

**Tab-Specific Features**

1. **Chat History Tab**
   - Icon: Clock
   - Toggleable (click to show/hide)
   - MUST display notification badge with count when threads need attention
   - Badge positioning: top-right corner of tab (absolute top-0 right-0)
   - Badge styling: red circular background (bg-red-500), white number, small size (min-w-[12px] h-[12px]), border: white, text size: 8px, font-bold
   - Badge count calculation:
     - Include threads with status = `executing` (unless dismissed as ongoing)
     - Include threads with status = `clarification_needed` (unless dismissed)
     - Include threads with status = `success` where notification not yet dismissed
     - Exclude threads that have been viewed since last action
   - Tooltip: "Chat History (⌘B)"

2. **Settings Tab**
   - Icon: Gear/Settings icon
   - Toggleable (click to show/hide)
   - MUST display connection status indicator
   - Status dot positioning: top-right corner of icon (absolute top-0 right-0)
   - Status dot styling:
     - Green dot (bg-green-500): Connected
     - Orange dot (bg-[#F06423]): Disconnected
     - 10px diameter (w-[10px] h-[10px]), circular (rounded-full), white border (border border-white)
   - Tooltip: "Settings (⌘,)"

**Additional Action Buttons (Right Side of Tab Bar)**

**Esc Button**
- Positioned on right side of tab bar (after flexible spacer)
- Closes spotlight modal when clicked
- Visual styling:
  - Gray background (bg-slate-200)
  - Gray text (text-slate-600)
  - Hover state: bg-slate-300
  - Rounded corners (rounded)
  - Small text (text-[10px]), medium weight (font-medium)
  - Compact padding (px-1.5 py-0.5)
- Label: "Esc"
- Tooltip: "Close (Esc)"

**Tab Navigation Hiding**
- MUST be hidden when in Reply Mode (viewing specific thread conversation)
- User in Reply Mode sees only conversation view with back button
- Exiting Reply Mode restores tab navigation

### 3.3 Chat History View

**Thread List Display**
- Shown when Chat History tab active and no specific thread selected
- Vertical list of all task threads (most recent first)
- Each thread shows:
  - Status indicator dot (left side, colored by status, 2px/w-2 h-2 diameter) - only shown if `showDot` is true
  - Task command text (truncated if too long, tab mentions removed via `removeTabMentions()`)
  - Status pill (right side) with color-coded background and label
    - Ongoing (executing): blue background (bg-blue-50), blue text (text-blue-600), blue border
    - Attention Needed (clarification_needed): yellow background (bg-yellow-50), yellow text (text-yellow-600), yellow border
    - Error: red background (bg-red-50), red text (text-red-600), red border
    - Completed (success): green background (bg-green-50), green text (text-green-600), green border
    - Cancelled: gray background (bg-gray-100), gray text (text-gray-600), gray border
- Thread item spacing for easy selection (px-2 py-1.5, gap-2)
- Hover effect: white/60 background for non-active threads
- Active thread: orange background tint (bg-[#F06423]/10) with orange border

**Search Functionality**
- Search bar positioned at top of thread list (sticky)
- Styling: glass morphism (bg-white/80 backdrop-blur-sm), border-b
- Search icon (w-3 h-3) positioned on left side of input (absolute left-2)
- Input field: pl-7 pr-7 py-1, text-xs, bg-white/60
- Clear button (X icon) appears when search query is present (absolute right-2)
- Placeholder: "Search threads..."
- Searches across:
  - Thread command/title
  - Conversation history messages
  - Current action text
- Empty state when no results: Search icon with message "No threads found matching '[query]'"
- Search query state persisted until cleared or user navigates back from thread detail

**Thread Status Indicators**

| Status | Dot Color | Label | Show Dot If... |
|--------|-----------|-------|----------------|
| executing | Blue | "Ongoing" | Not dismissed as ongoing task |
| clarification_needed | Yellow | "Attention Needed" | Not dismissed |
| error | Red | "Error" | Not dismissed |
| success | Green | "Completed" | Notification not dismissed |
| cancelled | Gray | "Cancelled" | Never show dot |

**Status Determination Logic**
- `success`: All todo list items are completed (ticked off) when execution finishes
- `clarification_needed`: Execution has finished but not all todo list items are ticked off, and the user did not explicitly cancel the task

**Thread Item Interactions**
- Click thread item → Enter Reply Mode for that thread
- Hover effect: subtle background highlight (group-hover)
- Active thread has orange/accent background tint
- Three-dot menu button appears on hover (right side of thread item)
  - MoreVertical icon (w-3.5 h-3.5, text-slate-600)
  - opacity-0 normally, opacity-100 on group-hover
  - Hover state: bg-white/80
  - Opens dropdown menu with options

**Thread Management Menu**
Appears when three-dot button is clicked:
- **Rename option**:
  - Edit2 icon (w-3.5 h-3.5)
  - Label: "Rename"
  - Opens rename modal
  - Text: text-xs text-slate-700
  - Hover: bg-slate-50
  - Padding: px-3 py-2
- **Delete option**:
  - Trash icon (w-3.5 h-3.5)
  - Label: "Delete"
  - Permanently removes thread
  - Clears active thread state if the deleted thread was active
  - Text: text-xs text-red-600
  - Hover: bg-red-50
  - Padding: px-3 py-2
- Menu styling:
  - Width: w-40 (160px)
  - Background: white
  - Border: border-slate-200
  - Rounded: rounded-lg
  - Shadow: shadow-lg
  - Padding: py-1
  - z-index: z-50
  - Position: absolute right-0 top-full mt-1

**Rename Thread Modal**
- Fixed overlay: inset-0 with bg-black/40 backdrop-blur-sm
- Modal dimensions: w-96 max-w-[90vw]
- Centered positioning
- Components:
  - Title: "Rename Thread" (text-base font-semibold)
  - Text input: Full width, border-slate-300, focus:ring-[#F06423]
  - Auto-focused on open
  - Buttons:
    - Cancel: text-slate-600
    - Save: bg-[#F06423] text-white
- Keyboard shortcuts:
  - Enter: Save rename
  - Escape: Cancel rename
- Styling: white bg, rounded-xl, shadow-2xl, p-6

**Empty State**
- When no threads exist: Display centered message "No active threads"
- Styling: small gray text (text-xs text-slate-500), centered in content area with vertical padding (py-8)

### 3.4 Settings View

**Display Conditions**
- Shown when Settings tab is active
- Displays quick settings and extension connection status
- Minimal view with link to full settings page

**Content**
- **Header Section** (flex items-center gap-2.5):
  - User avatar: Circular (w-8 h-8 rounded-full), orange background (#F06423), white text, user initial "W"
  - Email address: "wasabininjaa@gmail.com" (text-xs font-medium text-[#111111])
  - **Inline extension info** (below email, flex items-center gap-2 mt-0.5):
    - Chrome icon (w-3 h-3 text-slate-600)
    - Status dot: Green (bg-green-500) or Orange (bg-[#F06423]), 1.5px size (w-1.5 h-1.5 rounded-full)
    - Status text: "Connected" or "Disconnected" (text-[10px] text-slate-600)
    - Bullet separator: "•" (text-[10px] text-slate-400)
    - Browser info: "Chrome (Default)" (text-[10px] text-slate-600)
    - Refresh button: RefreshCw icon (w-3 h-3), gray hover: orange (text-slate-500 hover:text-[#F06423])
    - Bullet separator: "•"
    - "Install Extension" link (text-[10px] text-[#F06423] hover:text-[#F06423]/80 font-medium)
    - Bullet separator: "•"
    - "More Settings" link (text-[10px] text-[#F06423] hover:text-[#F06423]/80 font-medium)
      - Opens settings.html in new window/tab via window.open('settings.html', '_blank')

**Visual Styling**
- Compact layout with padding (p-4)
- Small text sizes for efficient space usage (text-[10px] and text-xs)
- Orange accent color (#F06423) for action links
- Status indicators match global color scheme

### 3.5 Reply Mode / Thread Detail View

**Entry Points**
- Click any thread from Chat History list (automatically enters reply mode)
- Click notification card
- Use `Option/Alt + R` when notification visible

**Visual Layout**
- Replaces Chat History list with single thread detail view
- Occupies full content area
- Sticky header at top (single line, minimized)
- Scrollable conversation history in middle
- Input field remains at bottom
- Tab navigation hidden in reply mode

**Sticky Header Components** (Single Line, Minimized)
1. **Back Button** (left side)
   - Icon: Corner-up-left arrow (CornerUpLeft, w-4 h-4)
   - No text label - icon only
   - Tooltip: "Chat History (Esc)"
   - Click or press Escape to return to thread list
   - Styling: text-slate-600 hover:text-[#F06423]
2. **Thread Title** (center, flex-1)
   - Original command as title (text-sm font-semibold text-[#111111])
   - Tab mentions removed via `removeTabMentions()`
   - Truncated with text-center
3. **Relative Timestamp** (right side, flex-shrink-0)
   - Displays relative time (e.g., "5m", "2h", "3d")
   - Formatted via `formatRelativeTime()` utility function
   - Tooltip shows full timestamp on hover (e.g., "11/12/2025, 2:30:00 PM")
   - Styling: text-xs text-slate-600 font-medium

**Header Styling**
- Background: gradient from orange-50/90 to white/80 with backdrop-blur-sm
- Border: border-b-2 border-orange-200/40
- Padding: px-4 py-3
- Sticky positioning: top-0 z-10
- Items aligned horizontally: flex items-center gap-3

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
- Background: White/60 glass effect with white/20 border (bg-white/60 border border-white/20)
- Rounded corners (rounded-lg)
- Padding: p-2.5
- Margin: mr-4 (right margin)
- Shows major steps as numbered list with spacing (space-y-2)

**Major Step States**
1. **Pending**
   - Icon: Empty circle outline (w-3 h-3 rounded-full border-2 border-slate-300)
   - Text: text-[10px] font-semibold text-slate-400 line-through
   - Substeps: Hidden (not shown until step starts executing)

2. **Executing** (only on live/latest progress)
   - Icon: Animated spinner/Loader (w-3 h-3 text-[#F06423])
   - Text: text-[10px] font-semibold text-slate-700 (bold, no strikethrough)
   - Substeps: Completed substeps shown when expanded
   - Current substep updates in real-time
   - Auto-expands when step has completed substeps

3. **Completed**
   - Icon: Green checkmark in circle (CheckCircle, w-3 h-3 text-green-500)
   - Text: text-[10px] font-semibold text-slate-700 (bold, dark color)
   - Substeps: All completed substeps shown when expanded
   - Auto-collapses after completion

4. **Cancelled/Interrupted**
   - Icon: X icon (w-3 h-3 text-slate-400)
   - Text: text-[10px] font-semibold text-slate-400 line-through
   - Substeps: Not shown

**Substep Expansion Controls**
- Chevron button appears on left of step title when substeps are present
- Click to toggle expansion (chevron down = expanded, chevron right = collapsed)
- Button styling: p-0.5 hover:bg-white/50 rounded transition-colors
- Chevron icon: w-2.5 h-2.5 text-slate-500
- Auto-expand behavior: Steps auto-expand when executing and have substeps
- Auto-collapse behavior: Steps auto-collapse when completed

**Substep Display**
- Indented list under major step (pl-2 mt-1.5)
- List container: space-y-0.5
- Each substep shows:
  - Green checkmark: "✓" (text-green-500 flex-shrink-0)
  - Substep description text (text-[10px] text-slate-600)
  - Layout: flex items-start gap-1.5
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
- Placeholder text: "Reply to Composite" (generated by `getSuggestionText()` when in reply mode)
- Enter key sends reply and adds to conversation
- Spotlight remains open after sending reply (user sees response)
- Stop button visible in input area if thread currently executing
- Input automatically focused when entering reply mode
- Tab mentions NOT automatically inserted in reply mode

**Escape Key Behavior in Reply Mode**
- First Escape: Exit Reply Mode, return to Chat History list
- Input field cleared
- Thread remains selected in list (activeThreadId cleared)
- Search query cleared when returning to thread list
- Tab navigation becomes visible again

### 3.6 Settings Page (Standalone - Full Version)

**Overview**
- Accessed via "More Settings" link in Settings View (3.5)
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

**Accessing Settings**
1. **Quick Settings (within Spotlight)**
   - Click Settings tab (gear icon) in tab bar
   - Shows Settings View (3.5) in content area
   - Displays connection status and quick actions
   
2. **Full Settings Page (standalone)**
   - Click "More Settings" link in Settings View (3.5)
   - Opens full settings page in separate window/tab
   - Independent from Spotlight modal
   - Spotlight can remain open or be closed

**Settings Tab Location**
- Positioned in tab bar (third tab, after Suggestions and Chat History)
- Shows gear icon
- Displays connection status dot (green/orange) on top-right corner
- Toggleable like other tabs

**Returning to Main Application**
- Close settings window/page via browser close or navigation
- Settings changes persist and apply to main application
- Click other tabs in Spotlight to exit Settings View
- No explicit "back" button needed

**State Synchronization**
- Settings changes (theme, blocklist, profile) sync immediately to main app
- Connection status updates reflected in both Settings tab and full Settings page
- User profile changes available to task execution context

### 3.8 Tab Mentioning System

**Overview**
- Allows users to reference specific browser tabs or tab groups in their commands
- Uses @ syntax similar to social media mentions
- Provides context about which tabs the task should operate on

**Utility Functions**
Two key utility functions manage mention display:

1. **`removeTabMentions(text)`**: Removes all @[...] patterns from text
   - Used when displaying thread titles in Chat History and notifications
   - Cleans up extra whitespace after removal
   - Returns plain text without mention syntax
   - Example: "@[Gmail - Inbox] Send email" → "Send email"

2. **`renderMessageWithTabBadges(message)`**: Renders mentions as inline badges
   - Used in Reply Mode conversation history
   - Converts @[...] patterns to styled badge components
   - Shows favicon and truncated title (max 30 chars)
   - Orange styling matching mention pills (bg-orange-50, border-[#F06423]/30)
   - Returns React component with mixed text and badge elements

**Mention Dropdown Behavior**
- Triggered by typing "@" character in input field
- Dropdown appears above input field (fixed positioning with transform: translateY(-100%))
- Dropdown width matches input field width
- Maximum height: 256px (max-h-64) with overflow scroll
- Glass card styling with shadow and border

**Dropdown Content Structure**
1. **Header**: "Mention a tab or file" (text-xs font-medium text-slate-500, bg-white, border-b)
2. **Menu Items** (py-1 overflow-y-auto):
   - Current Tab (always first if matches filter)
   - Upload a file option
   - Ungrouped tabs
   - Tab groups (with expand/collapse)
   - Grouped tabs (indented when group expanded)

**Tab Item Display**
- Favicon (w-4 h-4)
- Tab title (text-sm font-medium text-slate-900, truncated)
- "Current Tab" badge for active tab (bg-[#F06423] text-white text-[10px])
- Group color dot for grouped tabs (w-1 h-1 rounded-full)
- Selection indicator: Orange background (bg-orange-50) with orange left border (border-l-2 border-[#F06423])
- Enter key hint (↵) shown when item is selected

**Tab Group Display**
- Chevron icon (rotates 90° when expanded)
- Color dot matching group color (w-2 h-2 rounded-full)
- Group name (text-sm font-medium text-slate-700)
- Tab count (text-xs text-slate-500)
- Selection indicator: Gray background (bg-slate-100) with gray left border
- Enter key hint shown when selected

**Search/Filter Behavior**
- Typing after "@" filters tabs by title or URL (case-insensitive)
- Search automatically expands all groups
- No group headers shown during search
- Grouped tabs shown flat with group color dots
- Current tab always shown first if it matches

**Keyboard Navigation**
- Arrow Down/Up: Navigate through items
- Enter or Tab: Select highlighted item
- Escape: Close dropdown
- Mouse hover: Updates selection (disables keyboard navigation mode until next arrow key)

**Mention Pills** (rendered in input)
- Tab mentions: Orange themed (bg-orange-50 border-orange-[#F06423]/30)
- File mentions: Blue themed (bg-blue-50 border-blue-300)
- Non-editable inline elements (contenteditable="false")
- Show favicon/icon, title/name, and remove button (X)
- Remove button: Hover effect (hover:bg-[#F06423]/20 for tabs, hover:bg-blue-200 for files)

**Data Storage**
- `mentionedTabs`: Map storing tab data keyed by tab title
- `uploadedFiles`: Map storing file data keyed by file name
- Input state stores mention as text: `@[Tab Title]` or `@[File Name]`
- Pills rendered from Map data for display

### 3.9 File Upload System

**Overview**
- Allows users to upload files to attach to commands
- Integrated into mention dropdown as "Upload a file" option
- Files treated as mentions with blue styling

**Upload Flow**
1. User types "@" to open mention dropdown
2. "Upload a file" option appears second in list (after current tab)
3. User clicks option or selects with keyboard and presses Enter
4. Hidden file input triggered (multiple files supported)
5. File(s) selected by user
6. File mention inserted into input: `@[filename.ext]`
7. File data stored in `uploadedFiles` Map

**File Data Structure**
```javascript
{
  id: 'file_${timestamp}_${random}',
  name: 'filename.ext',
  size: 12345, // bytes
  type: 'image/png',
  file: File object
}
```

**File Mention Pill Display**
- Blue background (bg-blue-50)
- Blue border (border-blue-300)
- File icon (w-3 h-3 text-blue-700)
- Truncated filename (max 20 chars)
- File size in KB (text-[10px] text-blue-500)
- Remove button with blue hover (hover:bg-blue-200)

**File Upload Option Display**
- Blue upload icon (cloud with arrow, w-4 h-4 text-blue-600)
- Label: "Upload a file" (text-sm font-medium text-blue-700)
- Selection: Blue background (bg-blue-50) with blue left border (border-l-2 border-blue-600)
- Enter key hint when selected

**Technical Implementation**
- Hidden file input element (ref: fileInputRef)
- Multiple file selection enabled (multiple attribute)
- Input reset after upload (value = '')
- Mention dropdown closes after file selected
- Input refocused automatically

### 3.10 Voice Input System

**Overview**
- Provides voice input capability for commands
- Activated by holding Ctrl (Mac) or Alt (Windows) key
- Visual feedback through animated waveform

**Activation Behavior**
- Hold Ctrl (Mac) or Alt (Windows) for 250ms to activate
- Release key to deactivate
- Hold click icon to toggle on/off
- Activation state tracked in `isVoiceActive`

**Visual Indicator**
- 5 vertical bars (w-0.5 rounded-full bg-[#F06423])
- Each bar has different height when active/inactive:
  - Bar 1: 16px active, 6px inactive
  - Bar 2: 20px active, 10px inactive
  - Bar 3: 24px active, 14px inactive
  - Bar 4: 20px active, 10px inactive
  - Bar 5: 16px active, 6px inactive
- Bars animate with staggered delays when active (0s, 0.1s, 0.2s, 0.3s, 0.4s)
- CSS class 'voice-wave' applied when active
- Smooth transitions (transition-all duration-150)

**Positioning**
- Left side of input field (before contentEditable div)
- w-4 h-4 dimensions
- flex-shrink-0 mt-0.5 (aligned to top of input)
- gap-3 between icon and input

**Tooltip**
- "Voice Input (Hold Ctrl)" on Mac
- "Voice Input (Hold Alt)" on Windows
- Platform detected via `navigator.platform.toUpperCase().indexOf('MAC')`

**Key Hold Detection**
- Timer starts on keydown (250ms delay)
- Timer cleared if key released before 250ms
- Voice activates only after timer completes
- Deactivates immediately on key release
- Prevents accidental activation from brief key presses

**Interaction**
- Hover opacity: 80% (hover:opacity-80)
- Cursor: pointer
- Click toggles state immediately (no delay)
- Both click and key hold can activate

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

### 4.3 Notification Carousel System

**Positioning**
- Fixed position: Top-right corner of screen
- Offset from edge: ~24px from top, ~24px from right
- Width: Fixed width (~380px)
- Shows one notification at a time in a carousel format

**Count Synchronization**
- Number of notifications = Chat History badge count (see 4.6)
- **1:1 correspondence**: Each notification corresponds to exactly one unviewed/undismissed thread
- Badge shows "3" → 3 notifications available to cycle through when Spotlight is closed

**Notification Prioritization**

Notifications are sorted by timestamp (creation time) for chronological display:

**Sorting Rules**:
- Sort by `timestamp` (thread creation time)
- Most recent threads appear first (newest to oldest)
- Implemented via `getSortedNotifications()` utility function
- Uses `threadB.timestamp.getTime() - threadA.timestamp.getTime()` for descending order
- Sorting determines carousel order
- First notification (index 0) is the most recently created thread

**Note**: Previous priority-based sorting (error > clarification > executing > success) has been replaced with simple timestamp-based sorting for more intuitive chronological display.

**Carousel Behavior**

**Single Notification**
- Displays one notification card
- Fully interactive (click to open thread)
- No sidebar controls visible

**Multiple Notifications (2 or more)**
- Shows one notification at a time
- Sidebar with controls visible on left side
- Sidebar contains (top to bottom):
  1. Dismiss All button (Ban icon, red) - Tooltip: "Dismiss all notifications (⌥X)"
  2. Up arrow - Cycles to previous notification - Tooltip: "Previous notification (⌥↑)"
  3. Down arrow - Cycles to next notification - Tooltip: "Next notification (⌥↓)"
  4. Counter display - Shows "X/Y" format (e.g., "1/3" for first of 3 notifications)
- Sidebar buttons have hover effect (bg-white/20)
- Sidebar separated by border-r border-white/10
- Each control separated by border-b border-white/10

**Carousel Navigation**
- **Keyboard shortcuts**:
  - `Option + ↑` (Alt + Up Arrow): Previous notification (cycles to last if at first)
  - `Option + ↓` (Alt + Down Arrow): Next notification (cycles to first if at last)
  - `Option + R` (Alt + R): Reply to current notification (opens Spotlight in Reply Mode)
  - `Option + P` (Alt + P): Stop execution of current notification (if executing)
  - `Option + X` (Alt + X): Dismiss all notifications
- **Mouse interactions**:
  - Click Up/Down arrows to cycle
  - Click main card to open thread
  - Click Stop button (if thread executing)
  - Click X button to dismiss current notification
- **Cycling behavior**:
  - Infinite loop: Last → First, First → Last
  - Current index tracked in state (`currentNotificationIndex`)
  - Index automatically resets to 0 if current notification is dismissed

### 4.4 Notification Card Design

**Card Structure**
- Glass morphism background (semi-opaque, blurred)
- Rounded corners (rounded-xl)
- Border with light color (border-white/20)
- Shadow for elevation (shadow-2xl)
- Two sections: Header and Body

**Header Section**
- Background: Slightly more opaque (bg-white/10)
- Border bottom: Subtle separator (border-white/10)
- Layout: Horizontal flex with justify-between
- Padding: px-3 py-1.5
- Components:
  - Composite logo icon (left, w-3.5 h-3.5, text-[#F06423])
  - Task command text (center, text-xs, truncated, font-medium, text-[#111111])
  - Stop button (if thread executing, before X) - Square icon, w-3.5 h-3.5
  - Close/Dismiss button (X icon, right, w-3.5 h-3.5)
- Tab mentions removed from command display using `removeTabMentions()` utility

**Body Section**
- Padding: px-3 py-2
- Status icon (left, appropriate for thread status)
- Current action text (text-xs, text-slate-700, leading-snug)
- Layout: flex items-start gap-2

**Reply Button (macOS-style)**
- Positioned: Absolute bottom-right corner (bottom-1.5 right-1.5)
- Visibility: opacity-0 by default, opacity-100 on group-hover
- Styling:
  - Orange background (bg-orange-100)
  - Rounded corners
  - Slate text (text-slate-700)
  - Shadow (shadow-md)
  - Orange border (border-orange-200)
  - Padding: p-1.5
  - Backdrop blur (backdrop-blur-sm)
- Icon: CornerDownLeft (w-3.5 h-3.5)
- Tooltip: "Reply (⌥R)"
- Smooth fade transition (transition-opacity)

**Interaction Behaviors**
- Click card body: Opens Spotlight with thread in Reply Mode
- Click X button: Dismiss current notification (with event propagation stop)
- Click Stop button: Stop thread execution (with event propagation stop)
  - Tooltip: "Stop execution (⌥P)"
  - Only visible when thread is executing
- Hover: Reply button fades in at bottom-right corner

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
- **CRITICAL**: Badge count MUST equal the number of notification cards that would be shown
- Count = Number of threads that meet notification triggering conditions (4.1)
- **1:1 Correspondence**: Each thread counted in badge = one notification card when Spotlight is closed
- Includes:
  - `executing` threads (not dismissed as ongoing)
  - `clarification_needed` threads (not dismissed)
  - `success` threads (notification not dismissed)
- Excludes:
  - Threads viewed since last action
  - Explicitly dismissed ongoing tasks
  - Explicitly dismissed attention-needed threads
  - Cancelled threads

**Synchronization**
- Badge count updates immediately when:
  - New notification is triggered
  - User views a thread (removes from count)
  - User dismisses a notification
  - Thread status changes
- Badge count MUST always match the number of visible notification cards (when Spotlight closed)

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
- Keyboard shortcuts:
  - `Cmd/Ctrl + P` - When in Spotlight with active executing thread
  - `Cmd/Ctrl + P` - When Spotlight closed, stops first executing notification
  - `Cmd/Ctrl + P` + `2-9` - When Spotlight closed, stops notification at that position (if executing)
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
| `Option/Alt + R` | Enter Reply Mode for current (visible) notification | Global (when Spotlight closed, notification visible) |
| `Option/Alt + P` | Stop execution of current notification | Global (when Spotlight closed, current notification executing) |
| `Option/Alt + ↑` | Cycle to previous notification | Global (when Spotlight closed, multiple notifications) |
| `Option/Alt + ↓` | Cycle to next notification | Global (when Spotlight closed, multiple notifications) |
| `Option/Alt + X` | Dismiss all notifications | Global (when Spotlight closed, notifications visible) |
| `Cmd/Ctrl + P` | Stop execution of active thread | In Spotlight (when active thread is executing) |

**Note on macOS Option/Alt Key Handling**:
- macOS generates special characters when Option is pressed with certain keys (e.g., Option+R = ®, Option+P = π, Option+X = ≈)
- Implementation uses `e.code` (e.g., 'KeyR', 'KeyP', 'KeyX') instead of `e.key` to reliably detect these shortcuts
- Shortcuts check both `e.key` and `e.code` for cross-platform compatibility

### 7.2 Context-Specific Shortcuts

| Shortcut | Action | Context |
|----------|--------|---------|
| `Enter` | Submit command/reply | Input field focused |
| `Tab` | Autocomplete inline suggestion | Input empty or has only tab mention |
| `Shift + Enter` | Add new line | Input field focused |
| `Escape` | Close Spotlight | Spotlight open, not in Reply Mode |
| `Escape` | Exit Reply Mode | In Reply Mode |
| `Escape` | Close mention dropdown | Mention dropdown open |
| `Ctrl` (Mac) / `Alt` (Windows) | Activate voice input (hold 250ms) | Spotlight open |
| `@` | Open tab/file mention dropdown | Input field focused |
| `Arrow Down` / `Arrow Up` | Navigate mention dropdown items | Mention dropdown open |
| `Enter` or `Tab` | Select highlighted mention item | Mention dropdown open |

### 7.3 Spotlight View Shortcuts

| Shortcut | Action | Context |
|----------|--------|---------|
| `Cmd/Ctrl + B` | Toggle Chat History tab | Spotlight open, not in Reply Mode |
| `Cmd/Ctrl + ,` | Toggle Settings modal | Spotlight open, not in Reply Mode |


### 7.5 Focus Management

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

```javascript
{
  // UI State
  showSpotlight: boolean,
  input: string,
  showThreadsModal: boolean,
  showSettingsModal: boolean,
  isReplyMode: boolean,
  replyThreadId: number/string | null,
  activeThreadId: number/string | null,
  modalPosition: object { x: number, y: number }, // Draggable position
  isDragging: boolean,
  dragStart: object { x: number, y: number },
  chromeConnected: boolean, // Connection status (green = true, orange = false)
  currentTab: object { id: string, title: string, favicon: string, url: string }, // Current browser tab info
  threadSearchQuery: string, // Search query for filtering threads in Chat History
  
  // Voice Input State
  isVoiceActive: boolean, // Whether voice input is active
  voiceKeyTimerRef: ref, // Timer for key hold detection
  voiceActivatedRef: ref, // Track if voice was activated
  
  // Tab Mention State
  showMentionDropdown: boolean,
  mentionQuery: string,
  mentionCursorPosition: number | null,
  selectedMentionIndex: number,
  mentionDropdownPosition: object { top: number, left: number, width: number },
  isKeyboardNavigating: boolean,
  mentionedTabs: Map (tab title → tab data),
  
  // File Upload State
  uploadedFiles: Map (file name → file data),
  fileInputRef: ref,
  
  // Tab Groups State
  tabGroups: array of group objects (id, name, color, tabs),
  ungroupedTabs: array of tab objects,
  availableTabs: array (flattened from groups + ungrouped),
  expandedGroups: Set of group IDs,
  
  // Thread Data
  threads: array of thread objects,
  
  // Notification State
  visibleNotifications: array of thread IDs,
  currentNotificationIndex: number, // Current index in notification carousel
  lastNotificationAction: object (threadId → currentAction),
  threadViewTimestamps: object (threadId → timestamp),
  dismissedOngoingTasks: Set of thread IDs,
  dismissedAttentionNeeded: Set of thread IDs,
  
  // Thread Management State
  openMenuThreadId: number/string | null, // Track which thread has menu open
  renamingThreadId: number/string | null, // Track which thread is being renamed
  renameValue: string, // Temporary value for rename input
  
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

## 14. Features Removed in Current Version

*These features were present in earlier versions but have been removed or replaced in the current implementation:*

### 14.1 Removed Features

**Suggestions Tab**
- Previously: Default tab showing 4 pre-configured example tasks with keyboard shortcuts (⌘1-⌘4)
- Replaced by: Inline tab autocomplete system with dynamic suggestions based on context
- Rationale: Inline suggestions provide more context-aware and space-efficient guidance

**Share Current Tab Button**
- Previously: Toggleable button on right side of tab bar to enable/disable sharing current browser tab
- Showed favicon and tab title with orange styling when enabled
- Keyboard shortcut: ⌘T
- Replaced by: @ mention system that allows referencing any tab inline in commands
- Rationale: @ mentions provide more flexible and explicit tab referencing

**Close Button (X) in Input Area**
- Previously: Always-visible X button on right side of input field
- Replaced by: Esc button in tab bar
- Rationale: Consolidated close action with keyboard shortcut hint

**Static Placeholder Text**
- Previously: "Describe your browser task. Watch it get done."
- Replaced by: Dynamic inline autocomplete suggestions
- Rationale: More helpful to show actionable suggestions than generic instructions

### 14.2 Changed Features

**Input Field Type**
- Changed from: Textarea element
- Changed to: ContentEditable div
- Rationale: Enables rich inline elements (mention pills) with non-editable components

**Tab Bar Default State**
- Changed from: Suggestions tab toggled ON by default
- Changed to: All tabs closed by default (content area hidden)
- Rationale: Cleaner initial state, allows user to focus on input

**Input Initialization**
- Added: Automatic insertion of current tab mention when spotlight opens
- Behavior: "@[Current Tab] " pre-filled in input (not in reply mode)
- Rationale: Encourages users to specify context for their commands

## 15. Future Enhancements (Out of Scope for Current Version)

*These features are NOT currently implemented but may be considered for future versions:*

### 15.1 Advanced Features
- Voice-to-text transcription (voice input UI exists but not connected)
- Scheduled/recurring tasks
- Task templates and macros
- Multi-user collaboration on tasks
- Mobile companion app
- Integration with non-browser apps (desktop software automation)
- Drag-and-drop file upload (currently requires using @ mention menu)

### 15.2 AI Improvements
- More sophisticated natural language understanding
- Proactive task suggestions based on user behavior
- Learning from user corrections and preferences
- Visual element recognition without accessibility labels

### 15.3 Enterprise Features
- Team workspaces and shared tasks
- Admin controls and usage analytics
- SSO and directory integration
- Compliance logging and audit trails

---

## 16. Success Metrics & KPIs

### 16.1 User Engagement Metrics
- Daily active users
- Tasks initiated per user per day
- Task completion rate (success vs. cancelled/failed)
- Average task complexity (number of major steps)
- Repeat usage rate (users returning within 7 days)
- Tab mention usage rate (percentage of commands using @ mentions)
- File upload usage rate (percentage of commands with file attachments)
- Voice input usage rate (percentage of commands using voice input)

### 16.2 Performance Metrics
- Average task execution time
- Time to first notification
- UI responsiveness (p95 latency for interactions)
- Extension connection uptime
- Error rate per task type
- Mention dropdown load time
- Input field rendering performance with multiple mentions

### 16.3 User Satisfaction Metrics
- User survey scores (NPS, CSAT)
- Feature usage (which tabs/settings used most)
- Support ticket volume
- User retention (30-day, 90-day)

---

## 17. Technical Stack Recommendations

*While this PRD focuses on functionality rather than implementation, these technical choices are implied by the codebase structure:*

### 17.1 Frontend Technology
- **Framework**: React.js with hooks (as evidenced by useState, useEffect, useCallback, useMemo, useRef)
- **Styling**: Tailwind CSS for utility classes, CSS modules for glass morphism effects
- **Build Tool**: Vite for fast development and optimized builds
- **State Management**: React hooks (useState, useEffect, useCallback) for local state
- **Rich Text Input**: ContentEditable API for mention pills and inline elements

### 17.2 Browser Extension
- **Extension Type**: Chrome Extension (Manifest V3 recommended)
- **Communication**: WebSocket or Chrome runtime messaging API
- **Permissions**: Tabs, activeTab, scripting, storage, possibly microphone (for voice input) at minimum
- **Tab Access**: Chrome tabs API for retrieving tab groups, titles, favicons, and URLs

### 17.3 Backend Services
- **AI/NLP**: Large language model for command interpretation (e.g., OpenAI GPT, Claude)
- **Task Orchestration**: Backend service to coordinate execution plans
- **Authentication**: OAuth 2.0 or JWT-based auth

---

## 18. Visual Design System

### 18.1 Color Palette

**Primary Colors**:
- **Orange Accent** (#F06423): Primary brand color used for active states, buttons, mentions
  - Variations: /10 (light backgrounds), /20 (borders), /30 (subtle borders), /80 (hover states)
- **Slate Gray**: Text and UI elements
  - slate-300: Borders, inactive icons
  - slate-400: Placeholder text, secondary text
  - slate-500: Secondary icons
  - slate-600: Primary text, icons
  - slate-700: Emphasized text
- **White/Transparent**: Glass morphism backgrounds
  - white/40: Hover states
  - white/60: Card backgrounds
  - white/80: Stronger backgrounds
  - white/90: Nearly opaque backgrounds

**Status Colors**:
- **Blue** (blue-500, blue-50, blue-600, blue-200): Executing, ongoing tasks
- **Yellow** (yellow-500, yellow-50, yellow-600, yellow-200): Attention needed, clarification required
- **Red** (red-500, red-50, red-600, red-200): Errors, critical issues
- **Green** (green-500, green-50, green-600, green-200): Success, completed states
- **Gray** (gray-100, gray-600, gray-200): Cancelled, inactive states

### 18.2 Typography

**Font Sizes**:
- `text-[10px]`: Status pills, substeps, small labels
- `text-xs`: Thread titles, messages, most UI text (12px)
- `text-sm`: Headers, emphasized text (14px)
- `text-base`: Modal titles (16px)

**Font Weights**:
- `font-medium`: Standard emphasis (500)
- `font-semibold`: Headers, important text (600)
- `font-bold`: Badges, strong emphasis (700)

### 18.3 Spacing & Sizing

**Padding Scale**:
- `p-0.5`: 2px - Tiny buttons
- `p-1`: 4px - Small buttons
- `p-1.5`: 6px - Compact elements
- `p-2`: 8px - Standard buttons
- `p-2.5`: 10px - Cards, messages
- `p-3`: 12px - Larger cards
- `p-4`: 16px - Containers
- `p-6`: 24px - Modals

**Gap Scale**:
- `gap-1`: 4px - Tight spacing
- `gap-1.5`: 6px - Icon-text spacing
- `gap-2`: 8px - Standard element spacing
- `gap-2.5`: 10px - Comfortable spacing
- `gap-3`: 12px - Header spacing

**Size Scale**:
- Icons: w-3 h-3 (12px), w-3.5 h-3.5 (14px), w-4 h-4 (16px), w-8 h-8 (32px)
- Dots: w-1.5 h-1.5 (6px), w-2 h-2 (8px), w-[10px] h-[10px] (status dots)
- Badges: min-w-[12px] h-[12px] (notification count)

### 18.4 Glass Morphism Effect

**Implementation**:
- Background: Semi-transparent white (bg-white/80, bg-white/60)
- Backdrop filter: backdrop-blur-sm (4px blur)
- Borders: Light transparent borders (border-white/20, border-white/40)
- Shadows: shadow-2xl for elevation

**Usage**:
- Spotlight modal background
- Content area backgrounds
- Settings panel
- Notification cards
- Thread list items

### 18.5 Rounded Corners

**Border Radius Scale**:
- `rounded`: 4px - Small buttons, inputs
- `rounded-lg`: 8px - Cards, containers
- `rounded-xl`: 12px - Modals
- `rounded-full`: 9999px - Pills, badges, dots, circles
- `rounded-b-lg`: Bottom-only rounding for tabs

### 18.6 Shadows & Elevation

**Shadow Scale**:
- `shadow-sm`: Subtle elevation for active tabs
- `shadow-md`: Medium elevation for hover states
- `shadow-lg`: Menu dropdowns
- `shadow-2xl`: Modal overlays, notification cards

### 18.7 Transitions & Animations

**Transition Classes**:
- `transition-colors`: Color changes (hover states)
- `transition-opacity`: Fade in/out effects
- `transition-all`: Multiple property transitions

**Animation Durations**:
- `duration-150`: Fast (150ms) - Voice input bars
- `duration-200`: Standard (200ms) - Hover effects

**Special Animations**:
- Voice waveform: Staggered delays (0s, 0.1s, 0.2s, 0.3s, 0.4s)
- Loader/Spinner: `animate-spin` class

### 18.8 Interactive States

**Hover States**:
- Buttons: Darker background or text-[#F06423]
- Thread items: bg-white/60
- Icons: opacity-80 or text-[#F06423]
- Menu items: bg-slate-50 or bg-red-50

**Active States**:
- Tabs: Orange border, text, and shadow
- Thread items: Orange background tint (bg-[#F06423]/10) with border

**Focus States**:
- Inputs: ring-1 ring-[#F06423]/20, border-[#F06423]/40
- Automatic focus on input when Spotlight opens

## 19. Accessibility Standards

### 19.1 WCAG Compliance
- MUST meet WCAG 2.1 Level AA standards minimum
- Color contrast ratios of at least 4.5:1 for normal text
- Focus indicators visible on all interactive elements
- No reliance on color alone for status indication

### 19.2 Keyboard Navigation
- All functionality accessible via keyboard
- Logical tab order through interface
- Escape key for dismissing modals/overlays
- Enter key for submitting forms
- Arrow keys for list navigation (mention dropdown, thread list)
- Tab key for autocomplete suggestions

### 19.3 Screen Reader Support
- Semantic HTML elements (button, nav, main, etc.)
- ARIA labels for icon-only buttons (Voice Input, Stop, Send, Esc)
- ARIA live regions for status updates (task progress, notifications)
- ARIA expanded/collapsed states for expandable sections (tab groups)
- Proper heading hierarchy
- ContentEditable accessibility considerations (mention pills announced properly)

### 19.4 Reduced Motion
- Respect `prefers-reduced-motion` media query
- Disable animations for users with motion sensitivity
- Instant state changes instead of transitions when reduced motion preferred

---

## 19. Internationalization (i18n) Considerations

*While v2.0 may launch English-only, design decisions should support future localization:*

### 19.1 Text Externalization
- All UI strings should be externalized (not hardcoded)
- Use i18n library for string management
- Support for RTL languages in layout design

### 19.2 Date & Time Formatting
- Use locale-aware date/time formatting
- Respect user's timezone and calendar preferences
- Support for 12-hour and 24-hour time formats

### 19.3 Natural Language Commands
- Command parsing should support multiple languages
- AI backend trained on multilingual commands
- Clarification questions in user's language

---

## 20. Testing Requirements

### 20.1 Functional Testing

**Spotlight Interface**:
- Cmd/Ctrl + Shift + Space toggles Spotlight visibility correctly
- Spotlight draggability works smoothly and position persists across sessions
- Spotlight modal cannot be dragged off-screen (stays within bounds)
- Input field auto-focuses when Spotlight opens
- Current tab mention auto-inserted when Spotlight opens (not in reply mode)
- Esc key closes Spotlight (when not in reply mode)
- Glass morphism visual effects render correctly

**Tab Navigation**:
- Chat History and Settings tabs toggle correctly
- Only one tab can be active at a time
- Tab styling (expanded/collapsed) works correctly
- Notification badge on Chat History tab displays correct count
- Status dot on Settings tab shows correct connection state
- Orange top border appears when any tab is active
- Tab navigation hides in Reply Mode

**Tab Mention System**:
- @ character triggers mention dropdown
- Dropdown appears above input with correct positioning
- Current tab always appears first in dropdown (when matches filter)
- "Upload a file" option appears second
- Ungrouped tabs display correctly
- Tab groups show with expand/collapse functionality
- Search/filter works across tab titles and URLs
- Search auto-expands all groups
- Group color dots display correctly
- Arrow keys navigate dropdown items
- Enter/Tab selects highlighted item
- Escape closes dropdown
- Mention pills render with favicon and title
- @Current Tab shows special label (not full title)
- Remove buttons on mention pills work correctly
- Mention pills are non-editable

**File Upload**:
- File upload option appears in mention dropdown
- Click opens file selector
- Multiple files can be uploaded
- File mentions render with blue styling and file size
- File data stored in uploadedFiles Map
- Remove buttons work on file mentions

**Voice Input**:
- Hold Ctrl (Mac) / Alt (Windows) for 250ms activates voice
- Release key deactivates voice
- Click icon toggles voice on/off
- Waveform animation plays when active
- Bars have correct heights and stagger timing
- Tooltip shows correct key (platform-specific)

**Inline Autocomplete**:
- Suggestions appear dynamically based on input state
- "@Current Tab" suggestion when empty
- Task suggestion after current tab mention
- Tab key accepts and inserts suggestion
- Suggestion advances as user types matching text

**Thread Management**:
- Thread list displays with correct status dots and pills
- Search bar filters threads by command, messages, and current action
- Search clear button (X) works correctly
- Empty state shows when no search results
- Search query persists until cleared or navigating back
- Three-dot menu appears on thread hover
- Rename option opens modal correctly
- Rename saves and updates thread title
- Delete removes thread and clears active state if needed
- Clicking thread enters Reply Mode automatically
- Status pill colors match thread status
- Tab mentions removed from thread titles

**Reply Mode**:
- Clicking thread automatically enters Reply Mode
- Tab navigation hidden in Reply Mode
- Sticky header shows back button, title, and relative timestamp
- Relative time formats correctly (5m, 2h, 3d, etc.)
- Tooltip shows full timestamp on hover
- Back button returns to thread list
- Escape key exits Reply Mode
- Search query cleared when returning to list
- Conversation history displays chronologically
- User messages styled with orange tint
- Composite messages styled with white background
- Tab mentions render as badges in messages

**Progress Visualization**:
- Major steps show with correct icons (spinner, checkmark, empty circle, X)
- Substep chevron appears when substeps present
- Click chevron toggles substep expansion
- Auto-expand when step executing with substeps
- Auto-collapse when step completes
- Substeps display with green checkmarks
- Live progress updates in last message
- Historical snapshots frozen in previous messages
- Final message displays after todo list

**Notification System**:
- Notifications only visible when Spotlight closed
- Notifications sorted by timestamp (newest first)
- Option + ↑/↓ cycles through notifications (infinite loop)
- Option + R opens Spotlight with notification in Reply Mode
- Option + P stops executing notification
- Option + X dismisses all notifications
- Sidebar controls appear only with multiple notifications
- Counter displays correctly (X/Y format)
- Notification card shows tab mentions stripped
- Stop button visible on executing threads
- Click card opens thread in Reply Mode

**Settings**:
- Settings tab opens settings view
- Connection status displays correctly (green/orange dot)
- Extension info shows browser and connection state
- Refresh button clickable
- "Install Extension" link present
- "More Settings" opens settings.html in new window/tab
- User avatar and email display correctly

**Utility Functions**:
- removeTabMentions() strips mentions correctly
- renderMessageWithTabBadges() renders badges correctly
- formatRelativeTime() formats timestamps correctly
- getSortedNotifications() sorts by timestamp
- getNotificationCount() calculates badge count correctly
- getThreadStatusIndicator() returns correct dot/label
- detectMention() triggers dropdown correctly
- insertMention() inserts and stores mention data
- getSuggestionText() generates correct suggestions

### 20.2 Integration Testing
- Desktop app ↔ Extension communication reliable
- Extension connection detection accurate
- Task execution flows end-to-end
- Error recovery from disconnections
- Concurrent task execution without conflicts

### 20.3 User Acceptance Testing
- Real users complete sample tasks successfully
- UI intuitiveness (can users find features without documentation?)
- Tab mention system usability (do users understand @ syntax?)
- Inline suggestion helpfulness
- Notification clarity (do users understand what's happening?)
- Error messages helpful and actionable

### 20.4 Performance Testing
- UI responsiveness under load (many threads)
- Memory usage stays within acceptable bounds
- Notification rendering doesn't cause lag
- State updates don't block UI thread

---

## 21. Documentation Requirements

### 21.1 User Documentation
- Getting started guide
- Feature overview and screenshots
- Keyboard shortcuts reference
- Tab mention system guide (@ syntax, how to reference tabs)
- File upload instructions
- Voice input usage guide
- Inline autocomplete explanation
- Settings page guide (profile setup, theme selection, blocklist management, usage tracking)
- Sample tasks with expected outcomes
- Troubleshooting common issues
- FAQ section

### 21.2 Developer Documentation
- Architecture overview
- State management patterns
- Extension communication protocol
- API reference for backend services
- Contributing guidelines

---

## Appendix A: Core Utility Functions

The system implements several critical utility functions that handle data transformation and display logic:

### A.1 Text Processing Functions

**`removeTabMentions(text)`**
- **Purpose**: Removes all @[...] mention patterns from text for clean display
- **Usage**: Thread titles in Chat History, notification cards, search results
- **Implementation**: 
  - Regex: `/@\[([^\]]+)\]/g`
  - Removes mention patterns and cleans up extra whitespace
  - Returns plain text without mention syntax
- **Example**: `"@[Gmail - Inbox] Send email"` → `"Send email"`

**`renderMessageWithTabBadges(message)`**
- **Purpose**: Converts @[...] mention text to styled badge components in conversation history
- **Usage**: Reply Mode conversation messages
- **Implementation**:
  - Parses text to find @[...] patterns
  - Creates React components mixing text spans and badge elements
  - Retrieves tab data from `mentionedTabs` Map for favicon display
  - Returns JSX with inline badges
- **Badge styling**: bg-orange-50, border-[#F06423]/30, truncates to 30 chars
- **Example**: Text with mentions becomes interactive badges with favicons

### A.2 Time Formatting Functions

**`formatRelativeTime(timestamp)`**
- **Purpose**: Converts absolute timestamps to relative time strings
- **Returns**: Human-readable relative time (e.g., "5m", "2h", "3d", "1w", "2mo", "1y")
- **Logic**:
  - < 60s: "now"
  - < 60min: "[n]m"
  - < 24h: "[n]h"
  - < 7d: "[n]d"
  - < 4w: "[n]w"
  - < 12mo: "[n]mo"
  - >= 12mo: "[n]y"
- **Usage**: Thread timestamps in Reply Mode header, notification cards

### A.3 State Query Functions

**`getSortedNotifications()`**
- **Purpose**: Returns notifications sorted by creation time (most recent first)
- **Implementation**:
  - Copies `visibleNotifications` array
  - Sorts by thread `timestamp` property
  - Most recent threads first (descending order)
- **Usage**: Notification carousel navigation, keyboard shortcuts

**`getNotificationCount()`**
- **Purpose**: Calculates badge count for Chat History tab
- **Returns**: Number of threads requiring attention
- **Criteria**: Same as notification triggering logic (executing, clarification_needed, or success without dismissal)
- **Usage**: Red badge on Chat History tab

**`getThreadStatusIndicator(status, notificationDismissed, threadId)`**
- **Purpose**: Determines status dot visibility and label for thread list items
- **Returns**: Object with `{ showDot: boolean, color: string, label: string }`
- **Logic**:
  - Executing (not dismissed): blue dot, "Ongoing"
  - Clarification needed (not dismissed): yellow dot, "Attention Needed"
  - Error (not dismissed): red dot, "Error"
  - Success (not dismissed): green dot, "Completed"
  - Cancelled: no dot, "Cancelled"
- **Usage**: Thread list rendering

### A.4 Input Processing Functions

**`detectMention(text, cursorPos)`**
- **Purpose**: Detects @ character and triggers mention dropdown
- **Logic**:
  - Searches backward from cursor for @ symbol
  - Checks if @ is at start or preceded by whitespace
  - Extracts query between @ and cursor
  - Only triggers if no spaces in query
  - Updates mention state and dropdown position
- **Usage**: ContentEditable input change handling

**`insertMention(tab)`**
- **Purpose**: Inserts tab mention at cursor position in input
- **Implementation**:
  - Calculates text before/after mention
  - Inserts `@[tabTitle]` format
  - Stores tab data in `mentionedTabs` Map
  - Closes dropdown and refocuses input
- **Usage**: Tab selection from mention dropdown

**`getSuggestionText()`**
- **Purpose**: Generates inline autocomplete suggestion dynamically
- **Logic**:
  - Reply mode: "Reply to Composite"
  - No input: "@Current Tab"
  - Has current tab: "Send reminder emails for today"
  - Default: "@Current Tab"
- **Usage**: Placeholder/suggestion display in input field

## Appendix B: Glossary

- **Active Thread**: Thread currently being viewed or interacted with (tracked via `activeThreadId`)
- **Atomic Substep**: Individual action within a major step (e.g., "Click search bar")
- **Carousel**: Notification display system showing one notification at a time with cycling controls
- **Chat History**: List of all task threads with their conversation history
- **Clarification**: When system pauses execution to ask user a question
- **Composite**: The AI assistant name/brand
- **ContentEditable**: Rich text input field (div, not textarea) that allows inline styled elements like mention pills
- **Expanded Steps**: Set tracking which major steps have their substeps visible (format: `${threadId}-${stepId}`)
- **formatRelativeTime**: Utility function converting timestamps to relative time strings (e.g., "5m", "2h")
- **getSortedNotifications**: Utility function returning notifications sorted by creation time
- **getThreadStatusIndicator**: Utility function determining status dot and label for threads
- **Major Step**: High-level phase of task execution (e.g., "Extract contact information")
- **Mention**: Reference to a browser tab or file using @ syntax (e.g., "@[Tab Title]")
- **Mention Dropdown**: Menu that appears when typing @ to select tabs or files
- **Mention Pill**: Non-editable inline element showing a mentioned tab or file with icon and remove button
- **mentionedTabs**: Map storing tab data keyed by tab title for rendering pills
- **Notification Carousel**: System for displaying notifications one at a time with navigation controls
- **Notification Index**: Current position in the notification carousel (0-based, sorted by timestamp)
- **Progress Snapshot**: Frozen copy of majorSteps at a point in time, stored with conversation messages
- **removeTabMentions**: Utility function that strips @[...] patterns from text for clean display
- **renderMessageWithTabBadges**: Utility function that converts mention text to styled badge components
- **Reply Mode**: UI state where user is viewing and replying to specific thread (auto-enabled when clicking thread)
- **Settings Page**: Standalone full-page interface for managing user profile, preferences, and system configuration (separate from Spotlight)
- **Spotlight**: Main command interface modal (draggable, positioned via `modalPosition` state)
- **Status Pill**: Color-coded badge showing thread status in thread list (orange/red/green/gray)
- **Tab Group**: Collection of related browser tabs with a name and color (can be expanded/collapsed)
- **Thread**: Single task execution instance with conversation history
- **Thread Management Menu**: Dropdown menu with Rename and Delete options for threads
- **Thread Search**: Search functionality in Chat History that filters threads by command, messages, and current action
- **Thread View Timestamp**: Timestamp tracking when user last viewed each thread (for notification suppression)
- **To-Do List**: Visual representation of major steps and progress with collapsible substeps
- **Voice Input**: Voice command feature activated by holding Ctrl (Mac, 250ms delay) or Alt (Windows, 250ms delay)

---

## Appendix C: Design Principles

1. **Transparency**: Users should always know what Composite is doing
2. **Control**: Users can stop, pause, or redirect execution at any time
3. **Forgiveness**: Easy to undo or correct mistakes
4. **Efficiency**: Minimize keystrokes and clicks to accomplish tasks
5. **Clarity**: Status messages and UI labels are unambiguous
6. **Consistency**: Similar actions behave similarly throughout the app
7. **Responsiveness**: UI feels immediate even during background processing

---

## Appendix D: Non-Functional Requirements Summary

- **Reliability**: 99.5% uptime for backend services, graceful degradation on connection loss
- **Performance**: < 200ms UI response time for user actions, < 1s to show task plan
- **Scalability**: Support 10,000+ concurrent users, 1000+ threads per user
- **Maintainability**: Modular codebase, clear separation of concerns, comprehensive logging
- **Security**: Encrypted data at rest and in transit, regular security audits, vulnerability patching SLA
- **Compatibility**: Support latest 2 major versions of Chrome, Edge, Safari (extension platform permitting)
- **Accessibility**: WCAG 2.1 AA compliance, keyboard-only navigation support

---

**End of Product Requirements Document**

