import {
  logo,
  backend,
  creator,
  mobile,
  web,
  github,
  menu,
  close,
  css,
  gearXpert,
  mysql,
  express,
  aws,
  mui,
  gsap,
  framer,
  figma,
  git,
  html,
  javascript,
  mongodb,
  nodejs,
  reactjs,
  redux,
  tailwind,
  threejs,
  flood1,
  flood2,
} from '../assets'

// Import company logos separately
import tekisky from "../assets/company/tekisky.png";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "skills",
    title: "Skills",
  },
  {
    id: "cv",
    title: "CV",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Android Developer",
    icon: mobile,
  },
  {
    title: "Kotlin Developer",
    icon: web,
  },
  {
    title: "Firebase Integration",
    icon: backend,
  },
  {
    title: "ML Kit",
    icon: creator,
  },
  {
    title: "API Development",
    icon: backend,
  },
  {
    title: "UI/UX Design",
    icon: creator,
  },
];

const technologies = [
  {
    name: "Kotlin",
    icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/kotlin/kotlin-original.svg",
  },
  {
    name: "Java",
    icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/java/java-original.svg",
  },
  {
    name: "XML",
    icon: html,
  },
  {
    name: "C++",
    icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/cplusplus/cplusplus-original.svg",
  },
  {
    name: "SQLite",
    icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/sqlite/sqlite-original.svg",
  },
  // {
  //   name: "Room Database",
  //   icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/android/android-original.svg",
  // },
  {
    name: "Firebase",
    icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/firebase/firebase-plain.svg",
  },
  // {
  //   name: "Retrofit",
  //   icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/android/android-original.svg",
  // },
  // {
  //   name: "Volley",
  //   icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/android/android-original.svg",
  // },
  // {
  //   name: "ML Kit",
  //   icon: "https://developers.google.com/static/ml-kit/images/ml-kit-icon.png",
  // },
  {
    name: "Android Studio",
    icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/android/android-original.svg",
  },
  {
    name: "Git",
    icon: git,
  },
  {
    name: "Material Design",
    icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/materialui/materialui-original.svg",
  },
  {
    name: "Gradle",
    icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/gradle/gradle-original.svg",
  },
  {
    name: "JSON",
    icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/json/json-original.svg",
  },
  {
    name: "REST API",
    icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original.svg",
  },
  // {
  //   name: "Flutter",
  //   icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/flutter/flutter-original.svg",
  // },
];

const experiences = [
  {
    title: "Android Developer",
    company_name: "IT Zone – Islamabad, Pakistan",
    icon: tekisky,
    iconBg: "#383E56",
    date: "01 March 2024 – 07 April 2025",
    points: [
      "Maintained and enhanced existing Android apps to improve performance, stability, and user engagement.",
      "AI Face Detection: Built a face detection feature using ML Kit to identify the number of people and integrated a free pre-trained model to detect gender. Implemented as an Android Kotlin extension for Flutter developers.",
      "Anti-Theft App: Developed a security app with password protection, motion detection, pocket removal alerts, and voice/clap-based unlock features.",
    ],
  },
  {
    title: "Android Developer",
    company_name: "Maida Technology – Remote (Contract)",
    icon: tekisky,
    iconBg: "#383E56",
    date: "16 Nov 2023 – 15 Feb 2024",
    points: [
      "Improved existing apps and added new features for performance and functionality enhancement.",
      "Unread SMS: Enabled users to read deleted WhatsApp messages and monitor status updates from contacts without opening the app.",
    ],
  },
  {
    title: "Android Developer",
    company_name: "KI Technologies – Islamabad, Pakistan",
    icon: tekisky,
    iconBg: "#383E56",
    date: "May 2023 – Nov 2023",
    points: [
      "Designed and developed multiple utility and media apps using Kotlin and API scripting.",
      "FCM Notification Tool: Implemented Firebase Cloud Messaging to send real-time notifications to Play Store apps.",
      "Hindi to English Translator: Built a multilingual translation tool supporting Hindi, Tamil, Gujarati, and Marathi with voice speed playback.",
      "Smart Alarm Clock: Created a customizable alarm app with live wallpaper and lock screen time display.",
      "All Video Downloader: Enabled downloads from multiple social platforms using scripting in Kotlin.",
      "TikTok Downloader (No Watermark): TikTok video download using Kotlin.",
    ],
  },
  {
    title: "Android Developer",
    company_name: "FHA Technologies – Islamabad, Pakistan",
    icon: tekisky,
    iconBg: "#383E56",
    date: "20/12/2020 - 05/05/2023",
    points: [
      "Developed full-cycle Android apps from UI/UX to deployment using Java and Kotlin.",
      "Neon Clock – Smart Night Clock: Displayed clock on screen-off using broadcast receiver services.",
      "Notification History Manager: Aggregated and displayed missed app notifications in one view.",
      "Digital Clock Live Wallpaper: Enabled live wallpaper clock customization.",
      "Zip File Manager: Converted files to ZIP and uploaded via the app.",
      "Grocery App: Managed e-commerce purchases using Firebase; enabled clients to view and manage orders.",
      "App Monitoring Tool: Alerted users about apps accessing the camera and microphone.",
    ],
  },
];

const projects = [
  {
    name: "AI Face Detection",
    description:
      "Built a face detection feature using ML Kit to identify the number of people and integrated a free pre-trained model to detect gender. Implemented as an Android Kotlin extension for Flutter developers.",
    tags: [
      { name: "ml-kit", color: "blue-text-gradient" },
      { name: "kotlin", color: "green-text-gradient" },
      { name: "flutter-extension", color: "pink-text-gradient" },
    ],
    // image: flood1,
    source_code_link: "https://github.com/sohailkarim",
  },
  {
    name: "Anti-Theft App",
    description:
      "Developed a security app with password protection, motion detection, pocket removal alerts, and voice/clap-based unlock features.",
    tags: [
      { name: "android", color: "blue-text-gradient" },
      { name: "security", color: "green-text-gradient" },
      { name: "motion-detection", color: "pink-text-gradient" },
    ],
    // image: flood2,
    source_code_link: "https://github.com/sohailkarim",
  },
  {
    name: "Unread SMS",
    description:
      "Enabled users to read deleted WhatsApp messages and monitor status updates from contacts without opening the app.",
    tags: [
      { name: "android", color: "blue-text-gradient" },
      { name: "whatsapp", color: "green-text-gradient" },
      { name: "sms", color: "pink-text-gradient" },
    ],
    source_code_link: "https://github.com/sohailkarim",
  },
  {
    name: "All Video Downloader",
    description:
      "Enabled downloads from multiple social platforms using scripting in Kotlin.",
    tags: [
      { name: "kotlin", color: "blue-text-gradient" },
      { name: "video-downloader", color: "green-text-gradient" },
      { name: "scripting", color: "pink-text-gradient" },
    ],
    source_code_link: "https://github.com/sohailkarim",
  },
  {
    name: "Grocery App",
    description:
      "Managed e-commerce purchases using Firebase; enabled clients to view and manage orders.",
    tags: [
      { name: "firebase", color: "blue-text-gradient" },
      { name: "e-commerce", color: "green-text-gradient" },
      { name: "android", color: "pink-text-gradient" },
    ],
    source_code_link: "https://github.com/sohailkarim",
  },
  {
    name: "TikTok Downloader (No Watermark)",
    description:
      "TikTok video download using Kotlin.",
    tags: [
      { name: "kotlin", color: "blue-text-gradient" },
      { name: "tiktok", color: "green-text-gradient" },
      { name: "downloader", color: "pink-text-gradient" },
    ],
    source_code_link: "https://github.com/sohailkarim",
  },
  {
    name: "Smart Alarm Clock",
    description:
      "Created a customizable alarm app with live wallpaper and lock screen time display.",
    tags: [
      { name: "android", color: "blue-text-gradient" },
      { name: "alarm", color: "green-text-gradient" },
      { name: "live-wallpaper", color: "pink-text-gradient" },
    ],
    source_code_link: "https://github.com/sohailkarim",
  },
  {
    name: "Hindi to English Translator",
    description:
      "Built a multilingual translation tool supporting Hindi, Tamil, Gujarati, and Marathi with voice speed playback.",
    tags: [
      { name: "kotlin", color: "blue-text-gradient" },
      { name: "translation", color: "green-text-gradient" },
      { name: "multilingual", color: "pink-text-gradient" },
    ],
    source_code_link: "https://github.com/sohailkarim",
  },
  {
    name: "FCM Notification Tool",
    description:
      "Implemented Firebase Cloud Messaging to send real-time notifications to Play Store apps.",
    tags: [
      { name: "firebase", color: "blue-text-gradient" },
      { name: "notifications", color: "green-text-gradient" },
      { name: "real-time", color: "pink-text-gradient" },
    ],
    source_code_link: "https://github.com/sohailkarim",
  },
];

// New Skills structure with categories and items
const skills = [
  {
    category: "E-commerce Skills",
    items: [
      "Shopify Product Hunting",
      "Shopify Product Sales",
      "Facebook Ads Campaigns (Basics)",
      "Amazon Wholesale Basics (Product Hunting using Helium 10)",
    ],
  },
  {
    category: "Technical Skills",
    items: [
      "Java Developer",
      "Google Ads Implementation",
      "API Integration",
      "Retrofit Library",
      "Volley Library",
      "MVVM Architecture",
      "Room Database",
      "Firebase Realtime Database",
      "Firebase Analytics",
      "Firebase Crashlytics",
      "Web Scraping",
      "RESTful APIs",
      "JSON Parsing",
      "SQLite Database",
      "Material Design",
      "Custom UI Components",
      "Background Services",
    ],
  },
  {
    category: "Tools & Technologies",
    items: [
      "Android Studio",
      "IntelliJ IDEA",
      "Git & GitHub",
      "Postman",
      "Figma",
      "Adobe XD",
      "Jira",
      "Slack",
      "Trello",
      "VS Code",
      "Chrome DevTools",
      "Firebase Console",
      "Google Play Console",
      "Android Debug Bridge (ADB)",
      "Gradle Build System",
      "ProGuard",
      "R8 Code Shrinking",
    ],
  },
];

export { services, technologies, experiences, projects, skills };