import fs from 'fs';
import path from 'path';

const baseDir = '/Users/aksha/.gemini/antigravity/scratch/akshaya-portfolio';

// Helper to write SVG file
function writeSVG(filePath, svgContent) {
  fs.writeFileSync(filePath, svgContent, 'utf-8');
  console.log(`Generated: ${filePath}`);
}

// 1. Profile photo SVG / JPG placeholder
const profileSVG = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 800" width="800" height="800">
  <defs>
    <linearGradient id="bgGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#0A1128"/>
      <stop offset="50%" stop-color="#101B3B"/>
      <stop offset="100%" stop-color="#060A17"/>
    </linearGradient>
    <linearGradient id="goldGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#FFC857"/>
      <stop offset="100%" stop-color="#E6AF2E"/>
    </linearGradient>
    <linearGradient id="avatarGrad" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stop-color="#1C2A54"/>
      <stop offset="100%" stop-color="#0F1833"/>
    </linearGradient>
    <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
      <feGaussianBlur stdDeviation="15" result="blur" />
      <feComposite in="SourceGraphic" in2="blur" operator="over"/>
    </filter>
  </defs>

  <!-- Background -->
  <rect width="800" height="800" rx="30" fill="url(#bgGrad)"/>
  
  <!-- Neural Net Background Decor -->
  <g opacity="0.15" stroke="url(#goldGrad)" stroke-width="1.5">
    <circle cx="150" cy="150" r="6"/>
    <circle cx="650" cy="180" r="8"/>
    <circle cx="700" cy="600" r="5"/>
    <circle cx="120" cy="650" r="7"/>
    <circle cx="400" cy="100" r="6"/>
    <line x1="150" y1="150" x2="400" y2="100"/>
    <line x1="400" y1="100" x2="650" y2="180"/>
    <line x1="650" y1="180" x2="700" y2="600"/>
    <line x1="120" y1="650" x2="150" y2="150"/>
  </g>

  <!-- Glowing Ring -->
  <circle cx="400" cy="380" r="260" fill="none" stroke="url(#goldGrad)" stroke-width="4" filter="url(#glow)" opacity="0.8"/>
  <circle cx="400" cy="380" r="248" fill="url(#avatarGrad)" stroke="#1E2E5D" stroke-width="2"/>

  <!-- Avatar Portrait Graphic -->
  <g transform="translate(400, 380)">
    <!-- Head/Hair silhouette -->
    <path d="M-90,-60 C-90,-160 90,-160 90,-60 C90,40 -90,40 -90,-60 Z" fill="#D4AF37" opacity="0.2"/>
    <!-- Face -->
    <ellipse cx="0" cy="-30" rx="65" ry="85" fill="#E5C198"/>
    <!-- Hair style -->
    <path d="M-75,-50 C-70,-130 70,-130 75,-50 C75,-10 65,40 55,70 C45,30 -45,30 -55,70 C-65,40 -75,-10 -75,-50 Z" fill="#1A110B"/>
    <path d="M-68,-40 C-60,-115 60,-115 68,-40 C65,-10 50,70 45,95 C25,20 -25,20 -45,95 C-50,70 -65,-10 -68,-40 Z" fill="#2C1B10"/>
    <!-- Shoulders Blazer -->
    <path d="M-180,210 C-160,110 -90,90 -45,95 L0,140 L45,95 C90,90 160,110 180,210 Z" fill="#0D1630"/>
    <path d="M-120,210 L-45,95 L0,150 L45,95 L120,210 Z" fill="#162447"/>
    <path d="M-35,100 L0,150 L35,100 L0,210 Z" fill="#FFC857" opacity="0.8"/>
  </g>

  <!-- Name Badge Overlay -->
  <rect x="150" y="660" width="500" height="90" rx="20" fill="#0A1128" stroke="url(#goldGrad)" stroke-width="2" filter="url(#glow)"/>
  <text x="400" y="705" font-family="Inter, sans-serif" font-size="28" font-weight="700" fill="#FFFFFF" text-anchor="middle">Akshaya Vajpeyarr</text>
  <text x="400" y="735" font-family="Inter, sans-serif" font-size="16" font-weight="600" fill="#FFC857" letter-spacing="2" text-anchor="middle">AI ENGINEER &amp; RAG SPECIALIST</text>
</svg>`;

writeSVG(path.join(baseDir, 'profile-photo.jpg'), profileSVG);
writeSVG(path.join(baseDir, 'assets/profile-photo.jpg'), profileSVG);

// 2. Certificate Generator
const certificates = [
  { name: 'AI Ethics & Governance', filename: 'AI-Ethics-amp-Governance_AI-Ethics-Governance_Akshaya.jpg', issuer: 'Nanyang / Enterprise SG' },
  { name: 'Python 101 for Data Science', filename: 'Cognitiveclass_Python_101_for_Data_Science.jpg', issuer: 'Cognitive Class' },
  { name: 'AI For Everyone', filename: 'Coursera_AI_for_Everyone.jpg', issuer: 'Coursera (DeepLearning.AI)' },
  { name: 'AI For Everyone (PDF)', filename: 'Coursera_AI_for_Everyone.pdf', issuer: 'Coursera (DeepLearning.AI)' },
  { name: 'An Intuitive Introduction to Probability', filename: 'Coursera_An_Intuitive_Introduction_to_Probability.jpg', issuer: 'Coursera (University of Zurich)' },
  { name: 'Foundations: Data, Data Everywhere', filename: 'Coursera_Foundations_Data_Data_Everywhere.jpg', issuer: 'Coursera (Google)' },
  { name: 'IBM Data Science Professional Certificate', filename: 'Coursera_IBM_Data_Science_Professional_Certification.jpg', issuer: 'Coursera (IBM)' },
  { name: 'Programming for Everybody', filename: 'Coursera_Programming_for_Everybody.jpg', issuer: 'Coursera (University of Michigan)' },
  { name: 'Python Data Structures', filename: 'Coursera_Python_Data_Structures.jpg', issuer: 'Coursera (University of Michigan)' },
  { name: 'Web Application Technologies and Django', filename: 'Coursera_Web_Application_Technologies_and_Django.jpg', issuer: 'Coursera (University of Michigan)' },
  { name: 'Python (Basic)', filename: 'Hackerrank_python_basic_certificate.jpg', issuer: 'HackerRank' },
  { name: 'Fundamentals of Large Language Models', filename: 'fundamentals_of_LLM_hugging_face.jpg', issuer: 'Hugging Face' }
];

certificates.forEach(cert => {
  const certSVG = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 700" width="1000" height="700">
    <defs>
      <linearGradient id="certBg" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#0D1630"/>
        <stop offset="100%" stop-color="#060A17"/>
      </linearGradient>
      <linearGradient id="goldBorder" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#FFC857"/>
        <stop offset="50%" stop-color="#F3C64F"/>
        <stop offset="100%" stop-color="#99751D"/>
      </linearGradient>
    </defs>

    <!-- Certificate Background -->
    <rect width="1000" height="700" fill="url(#certBg)"/>
    
    <!-- Outer Gold Border -->
    <rect x="30" y="30" width="940" height="640" rx="12" fill="none" stroke="url(#goldBorder)" stroke-width="6"/>
    <rect x="45" y="45" width="910" height="610" rx="8" fill="none" stroke="#FFC857" stroke-width="1.5" opacity="0.5" stroke-dasharray="8,4"/>

    <!-- Corner Ornaments -->
    <g fill="#FFC857">
      <circle cx="60" cy="60" r="6"/>
      <circle cx="940" cy="60" r="6"/>
      <circle cx="60" cy="640" r="6"/>
      <circle cx="940" cy="640" r="6"/>
    </g>

    <!-- Header / Issuer -->
    <text x="500" y="120" font-family="Inter, sans-serif" font-size="20" font-weight="700" fill="#FFC857" letter-spacing="4" text-anchor="middle">${cert.issuer.toUpperCase()}</text>
    <text x="500" y="170" font-family="'Cinzel', Georgia, serif" font-size="38" font-weight="700" fill="#FFFFFF" text-anchor="middle">CERTIFICATE OF ACHIEVEMENT</text>
    
    <line x1="350" y1="200" x2="650" y2="200" stroke="url(#goldBorder)" stroke-width="2"/>

    <!-- Body -->
    <text x="500" y="260" font-family="Inter, sans-serif" font-size="18" fill="#A0AEC0" text-anchor="middle">PROUDLY PRESENTED TO</text>
    <text x="500" y="320" font-family="'Playfair Display', Georgia, serif" font-size="44" font-weight="700" fill="#FFC857" text-anchor="middle">Akshaya Vajpeyarr</text>
    <text x="500" y="375" font-family="Inter, sans-serif" font-size="18" fill="#A0AEC0" text-anchor="middle">FOR SUCCESSFULLY COMPLETING THE CURRICULUM AND REQUIREMENTS FOR</text>

    <!-- Course Title Box -->
    <rect x="150" y="410" width="700" height="80" rx="10" fill="#162447" stroke="url(#goldBorder)" stroke-width="1.5"/>
    <text x="500" y="460" font-family="Inter, sans-serif" font-size="26" font-weight="700" fill="#FFFFFF" text-anchor="middle">${cert.name}</text>

    <!-- Gold Ribbon Seal Badge -->
    <g transform="translate(500, 580)">
      <circle cx="0" cy="0" r="45" fill="url(#goldBorder)"/>
      <circle cx="0" cy="0" r="38" fill="#0D1630" stroke="#FFC857" stroke-width="2"/>
      <path d="M-15,-10 L0,-25 L15,-10 L0,20 Z" fill="#FFC857"/>
      <text x="0" y="8" font-family="Inter, sans-serif" font-size="12" font-weight="800" fill="#FFC857" text-anchor="middle">VERIFIED</text>
    </g>

    <!-- Footer Signatures -->
    <line x1="150" y1="600" x2="350" y2="600" stroke="#4A5568" stroke-width="1.5"/>
    <text x="250" y="625" font-family="Inter, sans-serif" font-size="14" fill="#A0AEC0" text-anchor="middle">Authorized Signature</text>

    <line x1="650" y1="600" x2="850" y2="600" stroke="#4A5568" stroke-width="1.5"/>
    <text x="750" y="625" font-family="Inter, sans-serif" font-size="14" fill="#A0AEC0" text-anchor="middle">Issue Date: 2024 - 2026</text>
  </svg>`;

  writeSVG(path.join(baseDir, 'certificates', cert.filename), certSVG);
});

// 3. Achievement Photos Generator
const achievements = [
  { name: "Rajyapuraskar Governor Award", filename: "rajyapuraskar_award.jpg", desc: "Presented by Governor of Tamil Nadu" },
  { name: "Hack@SRET Finalist", filename: "hackathon_sret.jpg", desc: "AI Agriculture Crop Recommendation" },
  { name: "NUS Anti-Scam Volunteer", filename: "nus_antiscam.jpg", desc: "AI Deepfake & Phishing Training" },
  { name: "Teach Singapore Mentor", filename: "teach_singapore.jpg", desc: "Digital Literacy & Critical Thinking" },
  { name: "NUS SoC Peer Mentor", filename: "soc_peer_mentor.jpg", desc: "School of Computing Student Leadership" },
  { name: "NUS ISCO Peer Connector", filename: "isco_peer_connector.jpg", desc: "International Student Onboarding" },
  { name: "Invited Speaker SRET", filename: "invited_speaker.jpg", desc: "Keynote on Research & Publishing" },
  { name: "SciExpo 2023 Presenter", filename: "sciexpo_presentation.jpg", desc: "Breast Cancer Histopathology ML" },
  { name: "TechFest 2023 Student Leader", filename: "techfest_relay.jpg", desc: "Relay Programming Event Lead" }
];

achievements.forEach(ach => {
  const achSVG = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 600" width="800" height="600">
    <defs>
      <linearGradient id="achBg" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#162447"/>
        <stop offset="100%" stop-color="#0A1128"/>
      </linearGradient>
      <linearGradient id="goldAcc" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#FFC857"/>
        <stop offset="100%" stop-color="#E6AF2E"/>
      </linearGradient>
    </defs>

    <rect width="800" height="600" fill="url(#achBg)"/>
    <rect x="20" y="20" width="760" height="560" rx="16" fill="none" stroke="url(#goldAcc)" stroke-width="2"/>

    <!-- Trophy / Medal Icon -->
    <g transform="translate(400, 220)">
      <circle cx="0" cy="0" r="70" fill="#0D1630" stroke="url(#goldAcc)" stroke-width="4"/>
      <!-- Star / Award Icon -->
      <polygon points="0,-40 12,-12 40,-8 18,12 24,40 0,24 -24,40 -18,12 -40,-8 -12,-12" fill="#FFC857"/>
    </g>

    <!-- Text -->
    <text x="400" y="370" font-family="Inter, sans-serif" font-size="32" font-weight="700" fill="#FFFFFF" text-anchor="middle">${ach.name}</text>
    <text x="400" y="420" font-family="Inter, sans-serif" font-size="20" font-weight="500" fill="#FFC857" text-anchor="middle">${ach.desc}</text>
    <text x="400" y="480" font-family="Inter, sans-serif" font-size="16" fill="#A0AEC0" text-anchor="middle">NATIONAL UNIVERSITY OF SINGAPORE / SRET</text>
  </svg>`;

  writeSVG(path.join(baseDir, 'achievements', ach.filename), achSVG);
});

console.log('All synthetic image assets created successfully!');
