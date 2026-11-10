// ===== Site settings =====
// Results upload (Google Apps Script web app, owner: gericabalangue@sec.edu.ph)
const API_URL = "https://script.google.com/macros/s/AKfycbyiqxFMAFSW4ni5WNmBnz2YpBIqmfMRLOOLfw-DAWEVodnELaIT_KLiQqoAdtw-_82FTg/exec";

// Subjects shown on the first screen. Each exam/quiz below has subject: one of these ids.
const SUBJECTS = [
  { id: "me",  title: "Math Enhancement",         icon: "∑" },
  { id: "mmw", title: "Math in the Modern World", icon: "φ" },
  { id: "dm",  title: "Discrete Mathematics",     icon: "∀" }
];

// Exams shown on the home page. To add an exam: add an entry + its encrypted bank file in /exams.
// kind: "exam" (default) is listed under Examinations, "quiz" under Quizzes.
const EXAMS = [
  {
    id: "math-enhancement",
    subject: "me",
    title: "Math Enhancement",
    topic: "Simple and Compound Interest",
    info: "15 items · 60 points",
    bank: "exams/math-enhancement.enc.js",
    points: { "Concept": 2, "Problem Solving": 5 }
  },
  {
    id: "math-in-the-modern-world",
    subject: "mmw",
    title: "Math in the Modern World",
    topic: "Apportionment and Voting · Mathematics of Finance",
    info: "40 items · 40 points · 60 minutes",
    bank: "exams/math-in-the-modern-world.v2.enc.js",
    minutes: 60,
    shuffle: true,
    points: { "Apportionment and Voting": 1, "Mathematics of Finance": 1 },
    rules: [
      "Tap the letter of your choice for each item.",
      "No alteration of answers allowed. Once submitted, answers can no longer be changed.",
      "Cheating/coaching deemed by the proctor will forfeit your entry for the examination.",
      "Keep the exam page open. Do not refresh, close, or switch to other apps or browser tabs.",
      "The proctor will handle your questions. Raise your hand, say “Excuse me, ma’am/sir”.",
      "No borrowing of calculators allowed. Use your own scientific calculator."
    ]
  },
  {
    id: "mmw-prelim",
    subject: "mmw",
    title: "Math in the Modern World — Prelim",
    topic: "Mathematics in Our World · Mathematical Language and Symbols · Problem-Solving Strategies",
    info: "40 items · 40 points · 60 minutes",
    bank: "exams/mmw-prelim.enc.js",
    minutes: 60,
    shuffle: true,
    points: { "Mathematics in Our World": 1, "Mathematical Language and Symbols": 1, "Problem-Solving Strategies": 1 },
    rules: [
      "Tap the letter of your choice for each item.",
      "No alteration of answers allowed. Once submitted, answers can no longer be changed.",
      "Cheating/coaching deemed by the proctor will forfeit your entry for the examination.",
      "Keep the exam page open. Do not refresh, close, or switch to other apps or browser tabs.",
      "The proctor will handle your questions. Raise your hand, say “Excuse me, ma’am/sir”.",
      "No borrowing of calculators allowed. Use your own scientific calculator."
    ]
  },
  {
    id: "abstract-reasoning-finals",
    subject: "me",
    kind: "quiz",
    title: "Abstract Reasoning — Finals",
    topic: "Series · Analogy · Odd One Out · Matrix · Mirror and Rotation",
    info: "30 items · 30 points · 60 minutes",
    bank: "exams/abstract-reasoning-finals.v4.enc.js",
    minutes: 60,
    shuffle: true,
    points: { "Series": 1, "Analogy": 1, "Odd One Out": 1, "Matrix": 1, "Mirror and Rotation": 1 },
    rules: [
      "Each item has a picture. Look at it carefully, then tap the letter of your choice.",
      "No alteration of answers allowed. Once submitted, answers can no longer be changed.",
      "Cheating/coaching deemed by the proctor will forfeit your entry for the quiz.",
      "Keep the quiz page open. Do not refresh, close, or switch to other apps or browser tabs.",
      "The proctor will handle your questions. Raise your hand, say “Excuse me, ma’am/sir”."
    ]
  },
  {
    id: "abstract-reasoning-final-exam",
    subject: "me",
    title: "Abstract Reasoning — Final Examination",
    topic: "Series · Analogy · Odd One Out · Matrix · Mirror and Rotation",
    info: "40 items · 40 points · 60 minutes",
    bank: "exams/abstract-reasoning-final-exam.enc.js",
    minutes: 60,
    shuffle: true,
    points: { "Series": 1, "Analogy": 1, "Odd One Out": 1, "Matrix": 1, "Mirror and Rotation": 1 },
    rules: [
      "Each item has a picture. Look at it carefully, then tap the letter of your choice.",
      "No alteration of answers allowed. Once submitted, answers can no longer be changed.",
      "Cheating/coaching deemed by the proctor will forfeit your entry for the examination.",
      "Keep the exam page open. Do not refresh, close, or switch to other apps or browser tabs.",
      "The proctor will handle your questions. Raise your hand, say “Excuse me, ma’am/sir”."
    ]
  },
  {
    id: "discrete-math-prefinal",
    subject: "dm",
    title: "Discrete Mathematics — Prefinal Examination",
    topic: "Functions: Function or Not · Domain, Codomain, Range · Classifying Functions · Composition and Inverse · Floor and Ceiling",
    info: "30 items · 30 points · 60 minutes · Sets A–C",
    bank: "exams/discrete-math-prefinal.enc.js",
    minutes: 60,
    shuffle: true,
    points: { "Function or Not?": 1, "Domain, Codomain, and Range": 1, "Classifying Functions": 1, "Composition and Inverse": 1, "Floor and Ceiling Functions": 1 },
    rules: [
      "Tap the letter of your choice for each item.",
      "No alteration of answers allowed. Once submitted, answers can no longer be changed.",
      "Cheating/coaching deemed by the proctor will forfeit your entry for the examination.",
      "Keep the exam page open. Do not refresh, close, or switch to other apps or browser tabs.",
      "The proctor will handle your questions. Raise your hand, say “Excuse me, ma’am/sir”.",
      "No borrowing of calculators allowed. Use your own scientific calculator."
    ]
  },
  {
    id: "discrete-math-set-theory",
    subject: "dm",
    title: "Discrete Mathematics — Midterm Examination",
    topic: "Set Notation · Set Operations · Membership and Subset · Venn Diagrams · Sets in Python · More Set Concepts",
    info: "50 items · 50 points · 75 minutes · Sets A–C",
    bank: "exams/discrete-math-set-theory.enc.js",
    minutes: 75,
    shuffle: true,
    points: { "Set Notation": 1, "Set Operations": 1, "Membership and Subset": 1, "Venn Diagram Problem": 1, "Sets in Python": 1, "More Set Concepts": 1 },
    rules: [
      "Read each item carefully and tap the letter of the best answer. Only one answer is correct.",
      "Some items share the same given information (shown in the pink box). Read it before answering.",
      "No alteration of answers allowed. Once submitted, answers can no longer be changed.",
      "Cheating/coaching deemed by the proctor will forfeit your entry for the examination.",
      "Keep the exam page open. Do not refresh, close, or switch to other apps or browser tabs.",
      "The proctor will handle your questions. Raise your hand, say “Excuse me, ma’am/sir”."
    ]
  },
  {
    id: "mmw-cipher-exam",
    subject: "mmw",
    mode: "cipher",
    title: "Math in the Modern World — Final Examination",
    topic: "Coding Theory and Cryptography · Caesar cipher · decode 5 paragraphs",
    info: "5 paragraphs · 1 point per correct letter · 60 minutes",
    bank: "exams/mmw-cipher-exam.v5.enc.js",
    minutes: 60,
    shuffle: true,
    points: { "Cipher": 1 },
    rules: [
      "Each paragraph is encrypted with a Caesar cipher. Every paragraph has its own shift.",
      "Each paragraph has an encrypted clue word with its definition. Use it to find the shift; the boxes under the clue are for your own notes (not checked).",
      "Enter your answer one letter at a time (cipher letter → real letter). Entries are hidden after you enter them.",
      "You will not be told whether a paragraph is solved. Your score is the number of correct letters.",
      "No alteration of answers allowed. Once submitted, answers can no longer be changed.",
      "Cheating/coaching deemed by the proctor will forfeit your entry for the examination.",
      "Keep the exam page open. Do not refresh, close, or switch to other apps or browser tabs."
    ]
  }
];

// Activities: open directly (no code, no upload). Listed under the Activities tab of their subject.
const ACTIVITIES = [
  {
    id: "mmw-cipher",
    subject: "mmw",
    title: "Cipher Decoder",
    topic: "Coding Theory and Cryptography · Caesar cipher",
    info: "Decode a clue word, then a hidden message · works offline",
    url: "activities/cipher.html"
  }
];

// Minutes a session code stays valid after its first use
const CODE_MINUTES = 90;

// Version history shown at the bottom of the home page (newest first)
const VERSIONS = [
  { v: "3.6", date: "2026-11-10", notes: ["Math in the Modern World — Final Examination: attempts started on an older version open correctly."] },
  { v: "3.5", date: "2026-11-10", notes: ["Math in the Modern World — Final Examination: no blur or peeks; clue words now come from the Cipher Decoder activity, a different one per paragraph."] },
  { v: "3.4", date: "2026-11-10", notes: ["Math in the Modern World — Final Examination: clue shown as letter tiles with note boxes; no correct/incorrect check; paragraphs always open."] },
  { v: "3.3", date: "2026-11-10", notes: ["Math in the Modern World — Final Examination: a peek shows the paragraph with your entered letters filled in."] },
  { v: "3.2", date: "2026-11-10", notes: ["Math in the Modern World — Final Examination: a paragraph can never end up with a shift of 0 (unencrypted)."] },
  { v: "3.1", date: "2026-11-10", notes: ["Math in the Modern World — Final Examination: new clue definitions; no instructions on the clue."] },
  { v: "3.0", date: "2026-11-10", notes: ["Math in the Modern World — Final Examination: clue word before each paragraph; the encrypted paragraph is blurred and opened with peeks; entries stay hidden."] },
  { v: "2.9", date: "2026-11-10", notes: ["Math in the Modern World — Final Examination (cryptography): decode 5 Caesar-cipher paragraphs, 3 peeks each, scored by correct letters."] },
  { v: "2.8", date: "2026-11-09", notes: ["Set Theory exam renamed to “Discrete Mathematics — Midterm Examination”."] },
  { v: "2.7", date: "2026-11-09", notes: ["Discrete Mathematics — Set Theory Examination (50 items, Sets A–C).", "Items can show shared “given” information and Python code above the question."] },
  { v: "2.6", date: "2026-11-09", notes: ["New subject: Discrete Mathematics.", "Discrete Mathematics — Prefinal Examination (Functions, 30 items, Sets A–C)."] },
  { v: "2.5", date: "2026-11-09", notes: ["Abstract Reasoning — Final Examination (40 picture items, shuffled per student).", "Results now record each answer with the correct answer, for checking wrong answers."] },
  { v: "2.4", date: "2026-11-05", notes: ["New Activities tab. Math in the Modern World: Cipher Decoder (Caesar cipher).", "Cipher Decoder: message set assigned randomly per student.", "Cipher Decoder results go to the Google Sheet (Activities tab)."] },
  { v: "2.3", date: "2026-11-04", notes: ["Admin: tap “Mathematics” to sign in, see all codes and create new ones.", "Fixed: uploads were saved to the Sheet but the phone kept showing them as waiting.", "Scores for the Prelim and Abstract Reasoning now show on other devices."] },
  { v: "2.2", date: "2026-11-04", notes: ["Simpler footer: version number with a refresh button to check for updates."] },
  { v: "2.1", date: "2026-11-04", notes: ["Renamed to Mathematics. Choose a subject first: Math Enhancement or Math in the Modern World.", "New pastel pink look and home screen icon.", "Exams and quizzes download by themselves whenever the phone is online.", "Fixed: “waiting to upload” no longer stays after results already reached the Google Sheet."] },
  { v: "2.0", date: "2026-11-03", notes: ["Math in the Modern World: 3 more exam codes (download the exam again)."] },
  { v: "1.9", date: "2026-11-03", notes: ["Abstract Reasoning — Finals: 5 quiz codes (download the quiz again)."] },
  { v: "1.8", date: "2026-11-03", notes: ["Quizzes: after submitting, students see the correct answers with a short explanation."] },
  { v: "1.7", date: "2026-11-03", notes: ["“Check for updates” button on the home page (for iPhone home screen apps)."] },
  { v: "1.6", date: "2026-11-03", notes: ["App updates now load right away (no stale copy after an update)."] },
  { v: "1.5", date: "2026-11-03", notes: ["Screens and messages say “quiz” or “exam” to match what is being taken.", "Abstract Reasoning item 9: clearer answer choices (download the quiz again)."] },
  { v: "1.4", date: "2026-11-03", notes: ["Separate Examinations and Quizzes buttons on the home page.", "Version history added."] },
  { v: "1.3", date: "2026-11-03", notes: ["Abstract Reasoning — Finals quiz (30 picture items).", "Questions and choices can now show figures.", "Code prompt reads “Quiz Code” for quizzes, “Exam Code” for examinations."] },
  { v: "1.2", date: "2026-10-23", notes: ["Math in the Modern World — Prelim exam added."] },
  { v: "1.1", date: "2026-10-12", notes: ["Math in the Modern World exam added (shuffled questions and choices).", "Scores submitted on other devices now show on the home page."] },
  { v: "1.0", date: "2026-10-12", notes: ["First release: name entry, offline download and install, session codes, flag logging.", "Math Enhancement exam."] }
];
