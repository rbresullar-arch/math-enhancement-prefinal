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
  }
];

// Minutes a session code stays valid after its first use
const CODE_MINUTES = 90;
