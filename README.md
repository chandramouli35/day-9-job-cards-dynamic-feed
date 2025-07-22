# Day 9 – Dynamic Job Listing Cards with useEffect + Tailwind

This project is part of my 150-day developer preparation journey focused on building scalable frontend interfaces with dynamic data rendering. On Day 9, I built a job listing UI that maps data from a JSON feed into clean, responsive card components using React and Tailwind CSS.

## ✅ What I Practiced:
- useEffect for fetching mock JSON job data
- useState for managing fetched list
- Dynamic rendering with `.map()` over array
- Conditional badge display (Remote / Onsite)
- Card component architecture for reusability
- Tailwind grid/flexbox for responsive layout
- Loading and empty state UI handling

## 🧠 Key Concepts Covered:
- Side effects in React via useEffect
- Data-driven UI generation
- Case-based rendering with conditional styles
- Modular component structure (JobCard, JobList)
- Graceful fallback UX when list is empty

## 🛠 Features:
- Load job list dynamically from mock JSON
- Each card shows job title, company, location, tags
- Conditional badge based on job.type
- Responsive card layout using Tailwind CSS
- Optional tag-based filtering for bonus logic

## ⚙️ Tech Stack:
- React.js (Hooks and component composition)
- Tailwind CSS (Utility-first styling)
- useState and useEffect for data + lifecycle

## 🔥 Why This Matters:
Real-world apps don’t run on static components — they render dynamic datasets, react to state changes, and optimize layout accordingly. This pattern is used in dashboards, job boards, admin panels, and product feeds. Today’s structure showcases clarity, responsiveness, and scalability.

> Day 9 complete. Every dataset I render brings me closer to UI architecture mastery.
