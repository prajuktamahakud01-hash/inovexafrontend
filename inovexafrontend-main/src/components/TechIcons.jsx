import React from 'react'

export const TechIcons = {
  // Frontend
  React: () => (
    <svg viewBox="0 0 32 32" className="w-8 h-8 transition-transform group-hover:scale-110" fill="none">
      <circle cx="16" cy="16" r="2.8" fill="#00D8FF" />
      <g stroke="#00D8FF" strokeWidth="1.6">
        <ellipse cx="16" cy="16" rx="12" ry="4.6" />
        <ellipse cx="16" cy="16" rx="12" ry="4.6" transform="rotate(60 16 16)" />
        <ellipse cx="16" cy="16" rx="12" ry="4.6" transform="rotate(120 16 16)" />
      </g>
    </svg>
  ),
  'Next.js': () => (
    <svg viewBox="0 0 32 32" className="w-8 h-8 transition-transform group-hover:scale-110" fill="none">
      <circle cx="16" cy="16" r="14" fill="#000000" />
      <path d="M22.5 23.5L13.8 11.5H11.5V20.5H13.5V14.1L21.1 24.3C21.6 24.1 22.1 23.8 22.5 23.5Z" fill="url(#nextGrad)" />
      <path d="M19.5 11.5H21.5V20.5H19.5V11.5Z" fill="#FFFFFF" />
      <defs>
        <linearGradient id="nextGrad" x1="16.5" y1="15" x2="21.5" y2="23.5" gradientUnits="userSpaceOnUse">
          <stop stopColor="white" />
          <stop offset="1" stopColor="white" stopOpacity="0" />
        </linearGradient>
      </defs>
    </svg>
  ),
  HTML5: () => (
    <svg viewBox="0 0 32 32" className="w-8 h-8 transition-transform group-hover:scale-110" fill="none">
      <path d="M5.5 3.5L7.5 26.5L16 29L24.5 26.5L26.5 3.5H5.5Z" fill="#E44D26" />
      <path d="M16 5.5V27L23 25L24.7 5.5H16Z" fill="#F16529" />
      <path d="M16 10.5H10.5L11 15.5H16V10.5ZM16 18.5H11.2L11.5 21.8L16 23V20.8L13.5 20.2L13.3 18.5H16V18.5Z" fill="#EBEBEB" />
      <path d="M16 10.5H21.5L21 15.5H16V10.5ZM16 18.5H20.7L20.3 22.8L16 24V21.8L18.4 21.2L18.7 18.5H16V18.5Z" fill="#FFFFFF" />
    </svg>
  ),
  CSS3: () => (
    <svg viewBox="0 0 32 32" className="w-8 h-8 transition-transform group-hover:scale-110" fill="none">
      <path d="M5.5 3.5L7.5 26.5L16 29L24.5 26.5L26.5 3.5H5.5Z" fill="#1572B6" />
      <path d="M16 5.5V27L23 25L24.7 5.5H16Z" fill="#33A9DC" />
      <path d="M16 10.5H10.5L11 15.5H16V10.5ZM16 18.5H11.2L11.5 21.8L16 23V20.8L13.5 20.2L13.3 18.5H16V18.5Z" fill="#EBEBEB" />
      <path d="M16 10.5H21.5L21.2 13.5H16V10.5ZM16 15.5H20.9L20.4 20.2L16 21.4V18.5L18.2 18.1L18.4 15.5H16V15.5Z" fill="#FFFFFF" />
    </svg>
  ),
  JavaScript: () => (
    <svg viewBox="0 0 32 32" className="w-8 h-8 transition-transform group-hover:scale-110" fill="none">
      <rect width="32" height="32" rx="4" fill="#F7DF1E" />
      <path d="M8.5 21.5C9.2 22.8 10.3 23.6 12 23.6C13.6 23.6 14.8 22.7 14.8 21.1C14.8 19.6 13.8 19 12.3 18.3L11.4 17.9C9.2 17 7.7 15.8 7.7 13.4C7.7 10.8 9.8 8.8 13.2 8.8C15.6 8.8 17.2 9.8 18.1 11.6L15.3 13.2C14.7 12.2 13.9 11.6 13 11.6C12.1 11.6 11.4 12.2 11.4 13.1C11.4 14.2 12.1 14.6 13.4 15.2L14.3 15.6C16.9 16.7 18.6 17.9 18.6 20.8C18.6 24 16.1 26 12.2 26C9.1 26 7.2 24.3 6.1 22.2L8.5 21.5Z" fill="#000000" />
      <path d="M22.5 9.2V21.4C22.5 23.2 21.4 24 19.6 24C18.4 24 17.5 23.5 16.8 22.6L19 21C19.4 21.5 19.7 21.8 20.2 21.8C20.6 21.8 20.9 21.5 20.9 20.8V9.2H22.5Z" fill="#000000" />
    </svg>
  ),

  // Backend
  'Node.js': () => (
    <svg viewBox="0 0 32 32" className="w-8 h-8 transition-transform group-hover:scale-110" fill="none">
      <path d="M16 2.5L28 9.5V22.5L16 29.5L4 22.5V9.5L16 2.5Z" fill="#339933" />
      <path d="M16 5.8L25.2 11.1V20.9L16 26.2L6.8 20.9V11.1L16 5.8Z" fill="#388E3C" />
      <path d="M16 11L21 14V20L16 23L11 20V14L16 11Z" fill="#FFFFFF" fillOpacity="0.9" />
      <path d="M16 14L18.5 15.5V18.5L16 20L13.5 18.5V15.5L16 14Z" fill="#339933" />
    </svg>
  ),
  Express: () => (
    <div className="flex items-center justify-center w-full h-full">
      <span className="font-mono text-xl font-bold tracking-tighter text-slate-800 dark:text-slate-100 group-hover:text-black dark:group-hover:text-white transition-colors">
        ex
      </span>
    </div>
  ),
  Python: () => (
    <svg viewBox="0 0 32 32" className="w-8 h-8 transition-transform group-hover:scale-110" fill="none">
      <path d="M15.8 3C9.8 3 10.2 5.6 10.2 5.6L10.2 8.3H16V9.2H7.9C7.9 9.2 4 8.8 4 14.7C4 20.7 7.4 20.4 7.4 20.4H9.5V17.5C9.5 17.5 9.4 14 13 14H18.7C18.7 14 22.1 14.1 22.1 10.8V5.6C22.1 5.6 22.6 3 15.8 3ZM12.9 5.3C13.6 5.3 14.1 5.8 14.1 6.5C14.1 7.2 13.6 7.7 12.9 7.7C12.2 7.7 11.7 7.2 11.7 6.5C11.7 5.8 12.2 5.3 12.9 5.3Z" fill="#3776AB" />
      <path d="M16.2 29C22.2 29 21.8 26.4 21.8 26.4L21.8 23.7H16V22.8H24.1C24.1 22.8 28 23.2 28 17.3C28 11.3 24.6 11.6 24.6 11.6H22.5V14.5C22.5 14.5 22.6 18 19 18H13.3C13.3 18 9.9 17.9 9.9 21.2V26.4C9.9 26.4 9.4 29 16.2 29ZM19.1 26.7C18.4 26.7 17.9 26.2 17.9 25.5C17.9 24.8 18.4 24.3 19.1 24.3C19.8 24.3 20.3 24.8 20.3 25.5C20.3 26.2 19.8 26.7 19.1 26.7Z" fill="#FFD43B" />
    </svg>
  ),
  PHP: () => (
    <svg viewBox="0 0 32 32" className="w-8 h-8 transition-transform group-hover:scale-110" fill="none">
      <ellipse cx="16" cy="16" rx="14" ry="9" fill="#777BB4" />
      <path d="M10 13H12.5C13.5 13 14 13.5 14 14.5C14 15.5 13.5 16 12.5 16H10.8L10 19H8.8L10 13ZM11.1 15H12.3C12.8 15 13.1 14.8 13.1 14.4C13.1 14 12.8 13.8 12.3 13.8H11.3L11.1 15Z" fill="#FFFFFF" />
      <path d="M14.5 13H15.7L15 15.5H17C17.8 15.5 18.3 16 18.3 16.8C18.3 17.2 18.1 17.8 17.7 18.2C17.3 18.7 16.7 19 15.8 19H13.5L14.5 13ZM14.9 18H15.9C16.4 18 16.8 17.8 17 17.5C17.2 17.2 17.2 16.9 17.2 16.6C17.2 16.3 16.9 16.2 16.4 16.2H15.3L14.9 18Z" fill="#FFFFFF" />
      <path d="M19.5 13H22C23 13 23.5 13.5 23.5 14.5C23.5 15.5 23 16 22 16H20.3L19.5 19H18.3L19.5 13ZM20.6 15H21.8C22.3 15 22.6 14.8 22.6 14.4C22.6 14 22.3 13.8 21.8 13.8H20.8L20.6 15Z" fill="#FFFFFF" />
    </svg>
  ),
  Laravel: () => (
    <svg viewBox="0 0 32 32" className="w-8 h-8 transition-transform group-hover:scale-110" fill="none">
      <path d="M16 3L4 10V22L16 29L28 22V10L16 3Z" fill="#FFF1F0" />
      <path d="M16 4.5L26 10.5V21.5L16 27.5L6 21.5V10.5L16 4.5Z" stroke="#FF2D20" strokeWidth="1.8" strokeLinejoin="round" fill="none" />
      <path d="M16 4.5V16M16 16L6 10.5M16 16L26 10.5M16 16V27.5M16 16L6 21.5M16 16L26 21.5" stroke="#FF2D20" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),

  // Database
  PostgreSQL: () => (
    <svg viewBox="0 0 32 32" className="w-8 h-8 transition-transform group-hover:scale-110" fill="none">
      <path d="M16 3C10.5 3 6.5 7 6.5 13C6.5 18 9 21.5 12 23.5V28L15.5 26.5V23.8C15.7 23.8 15.8 23.8 16 23.8C16.2 23.8 16.3 23.8 16.5 23.8V26.5L20 28V23.5C23 21.5 25.5 18 25.5 13C25.5 7 21.5 3 16 3Z" fill="#336791" />
      <path d="M16 5.5C19.5 5.5 22.5 8.5 22.5 13C22.5 16.8 20.2 19.8 17.5 21.2L16 19.5L14.5 21.2C11.8 19.8 9.5 16.8 9.5 13C9.5 8.5 12.5 5.5 16 5.5Z" fill="#FFFFFF" fillOpacity="0.25" />
      <circle cx="12" cy="12" r="1.5" fill="#FFFFFF" />
      <circle cx="20" cy="12" r="1.5" fill="#FFFFFF" />
      <path d="M14 17C15 18 17 18 18 17" stroke="#FFFFFF" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  ),
  MySQL: () => (
    <svg viewBox="0 0 32 32" className="w-8 h-8 transition-transform group-hover:scale-110" fill="none">
      <path d="M10 26C14 26 18 24 21 21C25 17 26 11 23 7C20 3 15 4 12 7C9 10 7 15 8 20L5 22C6.5 24 8 25.5 10 26Z" fill="#00758F" />
      <path d="M14 8C17 5 21 5 23 8C25 11 24 15 21 19C18 23 14 25 10 25C13 22 14 18 13 14C12 11 10 9 7 9C9 8.5 11.5 8.2 14 8Z" fill="#F29111" />
      <circle cx="20" cy="9" r="1.2" fill="#FFFFFF" />
    </svg>
  ),
  MongoDB: () => (
    <svg viewBox="0 0 32 32" className="w-8 h-8 transition-transform group-hover:scale-110" fill="none">
      <path d="M16 3C16 3 9.5 9 9.5 17C9.5 22.5 13.5 26.5 15.5 28.5C15.8 28.8 16.2 28.8 16.5 28.5C18.5 26.5 22.5 22.5 22.5 17C22.5 9 16 3 16 3Z" fill="#47A248" />
      <path d="M16 4V27.5C17.5 25.5 20.8 21.8 20.8 17C20.8 10.5 16 5 16 4Z" fill="#499D4A" />
      <path d="M16 28.5C15.6 28.5 15.3 27 15.3 25C15.3 20 16 16 16 16C16 16 16.7 20 16.7 25C16.7 27 16.4 28.5 16 28.5Z" fill="#FFFFFF" fillOpacity="0.4" />
    </svg>
  ),
  'SQL Server': () => (
    <svg viewBox="0 0 32 32" className="w-8 h-8 transition-transform group-hover:scale-110" fill="none">
      <path d="M16 4C22.5 4 27 6 27 8.5C27 11 22.5 13 16 13C9.5 13 5 11 5 8.5C5 6 9.5 4 16 4Z" fill="#E83D3D" />
      <path d="M27 9V15.5C27 18 22.5 20 16 20C9.5 20 5 18 5 15.5V9C5 11.5 9.5 13.5 16 13.5C22.5 13.5 27 11.5 27 9Z" fill="#CC292B" />
      <path d="M27 16V22.5C27 25 22.5 27 16 27C9.5 27 5 25 5 22.5V16C5 18.5 9.5 20.5 16 20.5C22.5 20.5 27 18.5 27 16Z" fill="#991B1E" />
      <ellipse cx="16" cy="8.5" rx="10" ry="3.5" fill="#FF8F8F" fillOpacity="0.7" />
    </svg>
  ),
  'IBM DB2': () => (
    <svg viewBox="0 0 32 32" className="w-8 h-8 transition-transform group-hover:scale-110" fill="none">
      <rect x="2" y="2" width="28" height="28" rx="6" fill="#0B132B" />
      <text x="16" y="14" textAnchor="middle" fontSize="8" fontWeight="800" fill="#60A5FA" letterSpacing="0.1em">
        IBM
      </text>
      <rect x="5.5" y="17" width="21" height="9.5" rx="3" fill="#22C55E" />
      <text x="16" y="24.5" textAnchor="middle" fontSize="8" fontWeight="900" fill="#FFFFFF" letterSpacing="0.05em">
        DB2
      </text>
    </svg>
  ),
  Snowflake: () => (
    <svg viewBox="0 0 32 32" className="w-8 h-8 transition-transform group-hover:scale-110" fill="none">
      <path d="M16 3V29M3 16H29M6.8 6.8L25.2 25.2M6.8 25.2L25.2 6.8" stroke="#29B5E8" strokeWidth="2.2" strokeLinecap="round" />
      <path d="M16 7L13.5 9.5M16 7L18.5 9.5M16 25L13.5 22.5M16 25L18.5 22.5M7 16L9.5 13.5M7 16L9.5 18.5M25 16L22.5 13.5M25 16L22.5 18.5" stroke="#29B5E8" strokeWidth="2" strokeLinecap="round" />
    </svg>
  ),

  // Data Engineering
  'Apache Hop': () => (
    <svg viewBox="0 0 100 64" className="w-9 h-7 sm:w-10 sm:h-8 transition-transform group-hover:scale-110 object-contain" fill="none">
      {/* Apache text */}
      <text
        x="2"
        y="42"
        fill="#0C4573"
        className="dark:fill-cyan-400"
        fontSize="17"
        fontWeight="800"
        fontFamily="system-ui, -apple-system, sans-serif"
        letterSpacing="-0.03em"
      >
        Apache
      </text>
      {/* Official HOP Connected Monogram */}
      {/* H left leg */}
      <path
        d="M 62 25 V 50"
        stroke="#0C4573"
        className="dark:stroke-cyan-400"
        strokeWidth="4.2"
        strokeLinecap="round"
      />
      {/* H crossbar */}
      <path
        d="M 62 37 H 73"
        stroke="#0C4573"
        className="dark:stroke-cyan-400"
        strokeWidth="4.2"
        strokeLinecap="round"
      />
      {/* Arrowhead */}
      <polygon
        points="73,7 80,18 66,18"
        fill="#0C4573"
        className="dark:fill-cyan-400"
      />
      {/* Arrow shaft -> U loop base -> P vertical stem */}
      <path
        d="M 73 17 V 42 C 73 51 86 51 86 42 V 25"
        stroke="#0C4573"
        className="dark:stroke-cyan-400"
        strokeWidth="4.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {/* P Loop */}
      <path
        d="M 86 25 C 98 25 98 37 86 37"
        stroke="#0C4573"
        className="dark:stroke-cyan-400"
        strokeWidth="4.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  ),
  'Apache Spark': () => (
    <svg viewBox="0 0 32 32" className="w-8 h-8 transition-transform group-hover:scale-110" fill="none">
      <path d="M16 2L18 11L25 5L20 13L29 13L21 17L28 23L19 20L20 29L15 22L11 29L12 20L3 24L10 17L2 14L11 13L6 6L13 11L16 2Z" fill="#E25A1C" />
      <path d="M16 6L17.5 12.5L22 8.5L18.5 14L24 14L18.5 17L23 21L17 19L17.5 25L14.5 20L12 25L13 19L7 21.5L11.5 17L7 14.5L12.5 14L9 9L13.5 12.5L16 6Z" fill="#FF8A3D" />
    </svg>
  ),
  Airflow: () => (
    <svg viewBox="0 0 32 32" className="w-8 h-8 transition-transform group-hover:scale-110" fill="none">
      <path d="M16 16V4C21 4 25 8 25 13C25 16 16 16 16 16Z" fill="#017CEE" />
      <path d="M16 16H28C28 21 24 25 19 25C16 25 16 16 16 16Z" fill="#00C7B7" />
      <path d="M16 16V28C11 28 7 24 7 19C7 16 16 16 16 16Z" fill="#E43921" />
      <path d="M16 16H4C4 11 8 7 13 7C16 7 16 16 16 16Z" fill="#FFBA00" />
      <circle cx="16" cy="16" r="3" fill="#FFFFFF" />
    </svg>
  ),
  Kafka: () => (
    <svg viewBox="0 0 32 32" className="w-8 h-8 transition-transform group-hover:scale-110" fill="none">
      <circle cx="16" cy="16" r="4.5" fill="#231F20" />
      <circle cx="8" cy="8" r="3.5" fill="#231F20" />
      <circle cx="24" cy="8" r="3.5" fill="#231F20" />
      <circle cx="24" cy="24" r="3.5" fill="#231F20" />
      <circle cx="8" cy="24" r="3.5" fill="#231F20" />
      <path d="M10.5 10.5L13.5 13.5M21.5 10.5L18.5 13.5M21.5 21.5L18.5 18.5M10.5 21.5L13.5 18.5" stroke="#231F20" strokeWidth="2.2" strokeLinecap="round" />
    </svg>
  ),
  dbt: () => (
    <svg viewBox="0 0 32 32" className="w-8 h-8 transition-transform group-hover:scale-110" fill="none">
      <path d="M16 3L26 8.5V20L16 25.5L6 20V8.5L16 3Z" fill="#FF694B" />
      <path d="M16 3L26 8.5L16 14L6 8.5L16 3Z" fill="#FF8B73" />
      <path d="M16 14V25.5L6 20V8.5L16 14Z" fill="#FF5029" />
      <path d="M16 14L26 8.5V20L16 25.5V14Z" fill="#E03813" />
    </svg>
  ),
  Databricks: () => (
    <svg viewBox="0 0 32 32" className="w-8 h-8 transition-transform group-hover:scale-110" fill="none">
      <path d="M16 3L4 9.5L16 16L28 9.5L16 3Z" fill="#FF3621" />
      <path d="M4 13.5L16 20L28 13.5" stroke="#FF3621" strokeWidth="3" strokeLinecap="round" fill="none" />
      <path d="M4 19.5L16 26L28 19.5" stroke="#FF3621" strokeWidth="3" strokeLinecap="round" fill="none" />
    </svg>
  ),
  'AWS Glue': () => (
    <svg viewBox="0 0 32 32" className="w-8 h-8 transition-transform group-hover:scale-110" fill="none">
      <path d="M6 7H26L19 16V25L13 25V16L6 7Z" fill="#8C4FFF" />
      <circle cx="16" cy="11" r="2" fill="#FFFFFF" />
      <circle cx="16" cy="20" r="1.5" fill="#FFFFFF" />
      <path d="M16 13V18.5" stroke="#FFFFFF" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  ),
  'Azure Data Factory': () => (
    <svg viewBox="0 0 32 32" className="w-8 h-8 transition-transform group-hover:scale-110" fill="none">
      <rect x="5" y="14" width="22" height="13" rx="2" fill="#0078D4" />
      <path d="M9 14V6H13V14H9ZM19 14V9H23V14H19Z" fill="#00BCF2" />
      <circle cx="11" cy="20.5" r="2.5" fill="#FFFFFF" />
      <circle cx="21" cy="20.5" r="2.5" fill="#FFFFFF" />
      <path d="M13.5 20.5H18.5" stroke="#FFFFFF" strokeWidth="1.5" />
    </svg>
  ),
  IICS: () => (
    <svg viewBox="0 0 32 32" className="w-8 h-8 transition-transform group-hover:scale-110" fill="none">
      <path d="M16 4L26 21H6L16 4Z" fill="#FF5A00" />
      <path d="M16 11L21 21H11L16 11Z" fill="#001830" />
      <circle cx="16" cy="17" r="2" fill="#FFFFFF" />
    </svg>
  ),
  'IBM Datastage': () => (
    <svg viewBox="0 0 32 32" className="w-8 h-8 transition-transform group-hover:scale-110" fill="none">
      <rect x="3" y="3" width="26" height="26" rx="6" fill="#006699" />
      <text x="16" y="15" textAnchor="middle" fontSize="8" fontWeight="800" fill="#FFFFFF" letterSpacing="0.05em">
        IBM
      </text>
      <text x="16" y="24" textAnchor="middle" fontSize="7.5" fontWeight="800" fill="#38BDF8" letterSpacing="0.05em">
        STAGE
      </text>
    </svg>
  ),
  Talend: () => (
    <svg viewBox="0 0 32 32" className="w-8 h-8 transition-transform group-hover:scale-110" fill="none">
      <circle cx="16" cy="16" r="13" fill="#FF5D5B" />
      <path d="M10 12H22M16 12V22" stroke="#FFFFFF" strokeWidth="3" strokeLinecap="round" />
    </svg>
  ),

  // Analytics & BI
  'Power BI': () => (
    <svg viewBox="0 0 32 32" className="w-8 h-8 transition-transform group-hover:scale-110" fill="none">
      <rect x="6" y="16" width="5" height="11" rx="1.5" fill="#F2C811" fillOpacity="0.6" />
      <rect x="13.5" y="10" width="5" height="17" rx="1.5" fill="#F2C811" fillOpacity="0.85" />
      <rect x="21" y="5" width="5" height="22" rx="1.5" fill="#E8B000" />
    </svg>
  ),
  Tableau: () => (
    <svg viewBox="0 0 32 32" className="w-8 h-8 transition-transform group-hover:scale-110" fill="none">
      <path d="M16 4V10M13 7H19" stroke="#E8762D" strokeWidth="2.4" strokeLinecap="round" />
      <path d="M16 22V28M13 25H19" stroke="#E8762D" strokeWidth="2.4" strokeLinecap="round" />
      <path d="M4 16H10M7 13V19" stroke="#1F77B4" strokeWidth="2.4" strokeLinecap="round" />
      <path d="M22 16H28M25 13V19" stroke="#1F77B4" strokeWidth="2.4" strokeLinecap="round" />
      <path d="M16 11V21M11 16H21" stroke="#E45756" strokeWidth="3.2" strokeLinecap="round" />
      <path d="M8 8H11M9.5 6.5V9.5" stroke="#54A24B" strokeWidth="1.8" strokeLinecap="round" />
      <path d="M21 8H24M22.5 6.5V9.5" stroke="#B279A2" strokeWidth="1.8" strokeLinecap="round" />
      <path d="M8 24H11M9.5 22.5V25.5" stroke="#4C78A8" strokeWidth="1.8" strokeLinecap="round" />
      <path d="M21 24H24M22.5 22.5V25.5" stroke="#EECA3B" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  ),
  Looker: () => (
    <svg viewBox="0 0 32 32" className="w-8 h-8 transition-transform group-hover:scale-110" fill="none">
      <circle cx="11" cy="16" r="6" stroke="#4285F4" strokeWidth="2.8" />
      <circle cx="21" cy="16" r="6" stroke="#4285F4" strokeWidth="2.8" />
      <circle cx="16" cy="16" r="2" fill="#4285F4" />
    </svg>
  ),
  'Apache Superset': () => (
    <svg viewBox="0 0 32 32" className="w-8 h-8 transition-transform group-hover:scale-110" fill="none">
      <path d="M11 10C7.7 10 5 12.7 5 16C5 19.3 7.7 22 11 22C14.5 22 17.5 10 21 10C24.3 10 27 12.7 27 16C27 19.3 24.3 22 21 22C17.5 22 14.5 10 11 10Z" stroke="#1E293B" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
  Panintelligence: () => (
    <svg viewBox="0 0 32 32" className="w-8 h-8 transition-transform group-hover:scale-110" fill="none">
      <rect x="3" y="7" width="26" height="18" rx="9" fill="#1E3A8A" />
      <text x="16" y="19" textAnchor="middle" fontSize="10" fontWeight="900" fill="#FFFFFF" letterSpacing="-0.03em">
        pan
      </text>
    </svg>
  ),
  'Data Warehousing': () => (
    <svg viewBox="0 0 32 32" className="w-8 h-8 transition-transform group-hover:scale-110" fill="none">
      <path d="M16 4L4 10V22L16 28L28 22V10L16 4Z" fill="#0284C7" fillOpacity="0.1" stroke="#0284C7" strokeWidth="1.8" />
      <path d="M4 10L16 16L28 10M16 16V28" stroke="#0284C7" strokeWidth="1.8" strokeLinecap="round" />
      <ellipse cx="16" cy="10" rx="6" ry="2.5" fill="#38BDF8" />
      <ellipse cx="16" cy="20" rx="5" ry="2" fill="#0284C7" />
    </svg>
  ),
  'Data Visualization': () => (
    <svg viewBox="0 0 32 32" className="w-8 h-8 transition-transform group-hover:scale-110" fill="none">
      <circle cx="16" cy="16" r="11" stroke="#E2E8F0" strokeWidth="4" />
      <circle cx="16" cy="16" r="11" stroke="#3B82F6" strokeWidth="4" strokeDasharray="35 70" strokeLinecap="round" />
      <circle cx="16" cy="16" r="11" stroke="#F59E0B" strokeWidth="4" strokeDasharray="18 70" strokeDashoffset="-38" strokeLinecap="round" />
      <circle cx="16" cy="16" r="11" stroke="#10B981" strokeWidth="4" strokeDasharray="12 70" strokeDashoffset="-58" strokeLinecap="round" />
    </svg>
  ),
  'Advanced Analytics': () => (
    <svg viewBox="0 0 32 32" className="w-8 h-8 transition-transform group-hover:scale-110" fill="none">
      <rect x="5" y="19" width="4" height="8" rx="1" fill="#C084FC" />
      <rect x="11" y="14" width="4" height="13" rx="1" fill="#A855F7" />
      <rect x="17" y="9" width="4" height="18" rx="1" fill="#9333EA" />
      <rect x="23" y="5" width="4" height="22" rx="1" fill="#7E22CE" />
      <path d="M6 16L12 11L18 7L25 3" stroke="#F43F5E" strokeWidth="2" strokeLinecap="round" />
      <circle cx="25" cy="3" r="2" fill="#F43F5E" />
    </svg>
  ),

  // Cloud
  AWS: () => (
    <svg viewBox="0 0 32 32" className="w-8 h-8 transition-transform group-hover:scale-110" fill="none">
      <text x="16" y="16" textAnchor="middle" fontSize="10.5" fontWeight="900" fill="#232F3E" letterSpacing="0.02em">
        aws
      </text>
      <path d="M7 19.5C12 23.5 20 23.5 25 19.5" stroke="#FF9900" strokeWidth="2.2" strokeLinecap="round" />
      <path d="M22.5 18L26 19.5L24 22.5" fill="#FF9900" />
    </svg>
  ),
  'Microsoft Azure': () => (
    <svg viewBox="0 0 32 32" className="w-8 h-8 transition-transform group-hover:scale-110" fill="none">
      <path d="M14.5 4.5L5.5 24.5H12L16 15.5L19.5 24.5H26.5L18.5 4.5H14.5Z" fill="#0089D6" />
      <path d="M16 15.5L12 24.5H23.5L16 15.5Z" fill="#0078D4" />
      <path d="M19.5 24.5L14.5 11L18.5 4.5L26.5 24.5H19.5Z" fill="#50E6FF" fillOpacity="0.4" />
    </svg>
  ),
  'Google Cloud': () => (
    <svg viewBox="0 0 32 32" className="w-8 h-8 transition-transform group-hover:scale-110" fill="none">
      <path d="M19.5 11C18.5 7.5 14.5 5.5 11 6.8C8.5 7.7 6.8 9.8 6.5 12.5C4 13 2 15.2 2 18C2 21.3 4.7 24 8 24H23C26.3 24 29 21.3 29 18C29 15 26.8 12.5 23.8 12.1C23.2 9.5 21.2 11.2 19.5 11Z" fill="#4285F4" />
      <path d="M8 24C4.7 24 2 21.3 2 18C2 15.2 4 13 6.5 12.5C6.8 9.8 8.5 7.7 11 6.8L14 14.5L8 24Z" fill="#EA4335" />
      <path d="M11 6.8C14.5 5.5 18.5 7.5 19.5 11L21 17L14 14.5L11 6.8Z" fill="#FBBC05" />
      <path d="M19.5 11C21.2 11.2 23.2 9.5 23.8 12.1C26.8 12.5 29 15 29 18C29 21.3 26.3 24 23 24H16L21 17L19.5 11Z" fill="#34A853" />
      <circle cx="15" cy="17" r="4.5" fill="#FFFFFF" />
    </svg>
  ),

  // AI & ML
  'Machine Learning': () => (
    <svg viewBox="0 0 32 32" className="w-8 h-8 transition-transform group-hover:scale-110" fill="none">
      <rect x="4" y="4" width="24" height="24" rx="6" fill="#0284C7" fillOpacity="0.12" />
      <path d="M16 7V11M16 21V25M7 16H11M21 16H25M9.5 9.5L12.5 12.5M19.5 19.5L22.5 22.5M9.5 22.5L12.5 19.5M19.5 12.5L22.5 9.5" stroke="#0284C7" strokeWidth="1.8" strokeLinecap="round" />
      <circle cx="16" cy="16" r="4" fill="#0EA5E9" />
      <circle cx="16" cy="16" r="1.8" fill="#FFFFFF" />
    </svg>
  ),
  'Generative AI': () => (
    <svg viewBox="0 0 32 32" className="w-8 h-8 transition-transform group-hover:scale-110" fill="none">
      <path d="M16 3C16 9.5 21.5 15 28 15C21.5 15 16 20.5 16 27C16 20.5 10.5 15 4 15C10.5 15 16 9.5 16 3Z" fill="url(#genAiGradCard)" />
      <path d="M24 4C24 6.5 26 8.5 28.5 8.5C26 8.5 24 10.5 24 13C24 10.5 22 8.5 19.5 8.5C22 8.5 24 6.5 24 4Z" fill="#C084FC" />
      <defs>
        <linearGradient id="genAiGradCard" x1="4" y1="3" x2="28" y2="27" gradientUnits="userSpaceOnUse">
          <stop stopColor="#8B5CF6" />
          <stop offset="1" stopColor="#D946EF" />
        </linearGradient>
      </defs>
    </svg>
  ),
  LLMs: () => (
    <svg viewBox="0 0 32 32" className="w-8 h-8 transition-transform group-hover:scale-110" fill="none">
      <rect x="3" y="3" width="26" height="26" rx="7" fill="#10A37F" />
      <path d="M16 8C18.2 8 20 9.8 20 12C20 13.5 19.2 14.8 18 15.5V16.5C19.2 17.2 20 18.5 20 20C20 22.2 18.2 24 16 24C13.8 24 12 22.2 12 20C12 18.5 12.8 17.2 14 16.5V15.5C12.8 14.8 12 13.5 12 12C12 9.8 13.8 8 16 8Z" fill="#FFFFFF" fillOpacity="0.3" />
      <path d="M16 11V21M11 16H21" stroke="#FFFFFF" strokeWidth="2.2" strokeLinecap="round" />
      <circle cx="16" cy="16" r="2.5" fill="#FFFFFF" />
    </svg>
  ),

  // Mobile
  Flutter: () => (
    <svg viewBox="0 0 32 32" className="w-8 h-8 transition-transform group-hover:scale-110" fill="none">
      <path d="M18.5 3L8 13.5L12.5 18L27.5 3H18.5Z" fill="#42A5F5" />
      <path d="M18.5 18.5L12 25L16.5 29.5L27.5 18.5H18.5Z" fill="#0D47A1" />
      <path d="M12.5 18L18.5 12H27.5L17 22.5L12.5 18Z" fill="#29B6F6" />
    </svg>
  ),
  'React Native': () => (
    <svg viewBox="0 0 32 32" className="w-8 h-8 transition-transform group-hover:scale-110" fill="none">
      <rect x="2" y="2" width="28" height="28" rx="6" fill="#0B132B" />
      <circle cx="16" cy="16" r="2.2" fill="#61DAFB" />
      <g stroke="#61DAFB" strokeWidth="1.4" fill="none">
        <ellipse cx="16" cy="16" rx="10" ry="3.8" />
        <ellipse cx="16" cy="16" rx="10" ry="3.8" transform="rotate(60 16 16)" />
        <ellipse cx="16" cy="16" rx="10" ry="3.8" transform="rotate(120 16 16)" />
      </g>
    </svg>
  ),
  Kotlin: () => (
    <svg viewBox="0 0 32 32" className="w-8 h-8 transition-transform group-hover:scale-110" fill="none">
      <path d="M28 4H4V28H28L16 16L28 4Z" fill="url(#kotlinGradCard)" />
      <defs>
        <linearGradient id="kotlinGradCard" x1="28" y1="4" x2="4" y2="28" gradientUnits="userSpaceOnUse">
          <stop stopColor="#C711E1" />
          <stop offset="0.5" stopColor="#7F52FF" />
          <stop offset="1" stopColor="#0095D5" />
        </linearGradient>
      </defs>
    </svg>
  ),
  Swift: () => (
    <svg viewBox="0 0 32 32" className="w-8 h-8 transition-transform group-hover:scale-110" fill="none">
      <path d="M28 17C27.5 17 24.5 14 22 12C20.5 10.8 19 8.5 19 8.5C21 11.5 24 14 26 15C24 13.5 21 11 18.5 8C16 5 13 3 13 3C15 6 17 9 17 12C17 15 15.5 17.5 13 20C10.5 22.5 7 24 4 25C9 28 16 29 22 25C27 21.5 28.5 18 28 17Z" fill="#F05138" />
      <path d="M19 8.5C18 12 15 15 11 17C14 16 17 14 19 8.5Z" fill="#FA7343" />
    </svg>
  ),
}
