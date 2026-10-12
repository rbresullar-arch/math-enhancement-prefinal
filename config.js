// ===== Site settings =====
// Results upload (Google Apps Script web app, owner: gericabalangue@sec.edu.ph)
const API_URL = "https://script.google.com/macros/s/AKfycbyiqxFMAFSW4ni5WNmBnz2YpBIqmfMRLOOLfw-DAWEVodnELaIT_KLiQqoAdtw-_82FTg/exec";

// Exams shown on the home page. To add an exam: add an entry + its encrypted bank file in /exams.
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
  }
];

// Minutes a session code stays valid after its first use
const CODE_MINUTES = 90;
