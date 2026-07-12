/**
 * ==========================================================
 * Education Data
 * ==========================================================
 *
 * Centralized education history used throughout the portfolio.
 *
 * Features
 * ----------
 * ✓ Strongly Typed
 * ✓ Easily Extendable
 * ✓ Timeline Ready
 * ✓ Reusable
 *
 * ==========================================================
 */

import { GraduationCap, School } from "lucide-react";

import type { Education } from "../types/education";

const education: Education[] = [
  {
    id: 1,
    degree: "Master of Computer Applications (MCA)",
    level: "Master",
    institution: "Chandigarh University",
    location: "Mohali, Punjab",
    duration: "2021 – 2023",
    score: "Completed",
    status: "Completed",
    icon: GraduationCap,
  },
  {
    id: 2,
    degree: "Bachelor of Computer Applications (BCA)",
    level: "Bachelor",
    institution: "Panjab University",
    location: "Chandigarh",
    duration: "2018 – 2021",
    score: "Completed",
    status: "Completed",
    icon: GraduationCap,
  },
  {
    id: 3,
    degree: "Senior Secondary (Class XII)",
    level: "Senior Secondary",
    institution: "CBSE",
    location: "India",
    duration: "2017 – 2018",
    score: "Completed",
    status: "Completed",
    icon: School,
  },
  {
    id: 4,
    degree: "Secondary (Class X)",
    level: "Secondary",
    institution: "CBSE",
    location: "India",
    duration: "2015 – 2016",
    score: "Completed",
    status: "Completed",
    icon: School,
  },
];

export default education;
