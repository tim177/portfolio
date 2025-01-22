'use client';
import { siteConfig } from '@/src/configs/config';

export interface ExperienceEntry {
  title: string;
  description: string;
  startDate: string;
  endDate: string;
  isActive?: boolean;
  companyUrl?: string;
}

export const experienceEntries: ExperienceEntry[] = [
  {
    title: 'Looking for Job Opportunities | Present',
    description:
      "Currently seeking job opportunities in **Software Engineering**, **AI**, **Data Science**, and **Full Stack** development. Open to full-time roles, internships, or freelance work. Let's connect!",
    startDate: 'Present',
    endDate: 'Present',
    isActive: true,
    companyUrl: siteConfig.social.linkedin
  },
  {
    title: 'TeachEdison | Nov. 2024 - Jan 2025',
    description:
      'Developed Bluebook Insights, a web application for SAT score analysis, using Next.js, TypeScript, and Tailwind CSS. Implemented dynamic report generation, interactive visual analytics, and user-specific insights to enhance student and tutor engagement. Built a modular, API-driven architecture with scalable data handling and seamless authentication. Integrated Lexical editor for real-time text editing and Shaka Player for adaptive media streaming with DRM support and dynamic quality switching.',
    startDate: 'Feb 2024',
    endDate: 'Jan 2025',
    isActive: false,
    companyUrl: 'https://www.teachedison.com/'
  }
];
