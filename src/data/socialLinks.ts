/**
 * ==========================================================
 * Social Links
 * ==========================================================
 *
 * Centralized social/contact links.
 *
 * ==========================================================
 */

import { Mail } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa6";

import type { SocialLink } from "../types/common";

const socialLinks: SocialLink[] = [
  {
    id: 1,
    name: "GitHub",
    url: "https://github.com/yourusername",
    icon: FaGithub,
  },
  {
    id: 2,
    name: "LinkedIn",
    url: "https://linkedin.com/in/yourusername",
    icon: FaLinkedin,
  },
  {
    id: 3,
    name: "Email",
    url: "mailto:your@email.com",
    icon: Mail,
  },
];

export default socialLinks;