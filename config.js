// ===== Site settings =====
// Results upload (Google Apps Script web app, owner: gericabalangue@sec.edu.ph)
const API_URL = "https://script.google.com/macros/s/AKfycbyiqxFMAFSW4ni5WNmBnz2YpBIqmfMRLOOLfw-DAWEVodnELaIT_KLiQqoAdtw-_82FTg/exec";

// Exams shown on the home page. To add an exam: add an entry + its encrypted bank file in /exams.
// kind: "exam" (default) is listed under Examinations, "quiz" under Quizzes.
const EXAMS = [
  {
    id: "math-enhancement",
    title: "Math Enhancement",
    topic: "Simple and Compound Interest",
    info: "15 items · 60 points",
    bank: "exams/math-enhancement.enc.js",
    points: { "Concept": 2, "Problem Solving": 5 }
  },
  {
    id: "math-in-the-modern-world",
    title: "Math in the Modern World",
    topic: "Apportionment and Voting · Mathematics of Finance",
    info: "40 items · 40 points · 60 minutes",
    bank: "exams/math-in-the-modern-world.enc.js",
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
    kind: "quiz",
    title: "Abstract Reasoning — Finals",
    topic: "Series · Analogy · Odd One Out · Matrix · Mirror and Rotation",
    info: "30 items · 30 points · 60 minutes",
    bank: "exams/abstract-reasoning-finals.enc.js",
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
  }
];

// Minutes a session code stays valid after its first use
const CODE_MINUTES = 90;

// Version history shown at the bottom of the home page (newest first)
const VERSIONS = [
  { v: "1.4", date: "2026-11-03", notes: ["Separate Examinations and Quizzes buttons on the home page.", "Version history added."] },
  { v: "1.3", date: "2026-11-03", notes: ["Abstract Reasoning — Finals quiz (30 picture items).", "Questions and choices can now show figures.", "Code prompt reads “Quiz Code” for quizzes, “Exam Code” for examinations."] },
  { v: "1.2", date: "2026-10-23", notes: ["Math in the Modern World — Prelim exam added."] },
  { v: "1.1", date: "2026-10-12", notes: ["Math in the Modern World exam added (shuffled questions and choices).", "Scores submitted on other devices now show on the home page."] },
  { v: "1.0", date: "2026-10-12", notes: ["First release: name entry, offline download and install, session codes, flag logging.", "Math Enhancement exam."] }
];
