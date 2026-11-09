# Mathematics (offline-ready exam and quiz app)

**Students**
1. Open the site → type Last Name and First Name → choose the subject.
2. Open the app once while online: all exams and quizzes download by themselves (iPhone: also Share → Add to Home Screen).
3. Tap **Take exam** → type the exam or quiz code from the teacher.
4. Optional practice, then the exam. It submits by itself when time is up.

**Rules**
- Each session code works for the exam's time (`minutes` in `config.js`, default 90) after it is first used.
- One attempt per student. Results go to Google Sheets (queued on the phone when offline).
- Flags (leaving the app, copy/paste, etc.) are logged only.

**Adding an exam or quiz:** add an entry to `EXAMS` in `config.js` (with `subject:` set to an id from `SUBJECTS`) and its encrypted bank in `/exams`. Quizzes need `kind: "quiz"` (listed under Quizzes); others are listed under Examinations. Add a line to `VERSIONS` in `config.js` for each update.
**Result columns for checking answers** (item numbers = bank order = answer key): `answers` (student's letter), `marks` (e.g. `6:B✗C` = item 6 answered B, correct C), `correct` (the key), `order` (e.g. `6→#2` = shown as question 2 on that phone).
Optional fields: `minutes` (time limit), `shuffle: true` (per-student question + choice order), `rules` (shown before the exam).
Codes not listed in the Apps Script `CODES` are accepted by the bank and timed on the device.
