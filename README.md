Math Quiz v13.4.8 (no-PWA)
A browser-based multiplication/addition quiz optimized for desktop and mobile.
This version does not include PWA/offline support — runs directly in any modern browser.

📌 Features
Centered Question Display
The question is centered in the main card, with the timer fixed at the top right for better visibility.

Landscape Restriction for Mobile
On mobile devices, a rotation overlay appears in landscape mode.
Desktop browsers are not affected by the orientation check.

Auto-Focus & Quick Answer Submission

Focus automatically moves to the answer box each question.

Three ways to submit:

Press Enter (desktop)

Tap Submit button

On iOS/Android keyboards, pressing the send/return key will submit immediately (no “Done” tap needed).

Keyboard-Aware Layout
The answer bar automatically moves above the on-screen keyboard on mobile.

Dynamic Font Sizing
Question and answer font sizes scale automatically based on screen size.

Mistake Review Mode
After completing a quiz, users can retry only the questions they missed.

Settings Persistence
User settings are saved in localStorage for next time.

🛠 How to Use
Download & Unzip the package.

Open index.html in any modern browser (Chrome, Safari, Edge, Firefox).

Configure your quiz in the settings page:

Question type (multiplication, addition, etc.)

Number of questions

Time limit

Press Start to begin the quiz.

📱 Mobile Tips
Keep the device in portrait mode.

The answer box is always focused so you can type immediately.

Submit using:

Keyboard send/return key

Submit button

💡 Tech Notes
Built with pure HTML + CSS + JavaScript.

No dependencies, no external libraries.

Orientation detection uses user agent + screen size to avoid false triggers on desktops.

All quiz state and mistake logs are stored in browser localStorage.
