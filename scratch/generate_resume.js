import PDFDocument from 'pdfkit';
import fs from 'fs';
import path from 'path';

// Initialize PDF Document with Letter size and 36pt (0.5 inch) margins
const doc = new PDFDocument({
  size: 'LETTER',
  margins: {
    top: 36,
    bottom: 36,
    left: 36,
    right: 36
  }
});

const outputPath = 'public/assets/Sanjay-M-Resume.pdf';

// Ensure the directory exists
const dir = path.dirname(outputPath);
if (!fs.existsSync(dir)){
  fs.mkdirSync(dir, { recursive: true });
}

const stream = fs.createWriteStream(outputPath);
doc.pipe(stream);

// Page count tracker
let pageCount = 1;
doc.on('pageAdded', () => {
  pageCount++;
});

// Helper: Section Headers
function addSectionHeader(title) {
  doc.y += 4; // Spacing before section
  doc.fillColor('#0f172a') // Dark Navy/Slate
     .font('Helvetica-Bold')
     .fontSize(9.5)
     .text(title, { characterSpacing: 0.8 });
  
  // Thin underline
  const y = doc.y + 2;
  doc.moveTo(36, y)
     .lineTo(612 - 36, y)
     .strokeColor('#cbd5e1')
     .lineWidth(0.5)
     .stroke();
  
  doc.y = y + 4; // Spacing after line
}

// Helper: Two-column row
function writeRow(leftText, rightText, options = {}) {
  const currentY = doc.y;
  const leftFont = options.leftFont || 'Helvetica-Bold';
  const rightFont = options.rightFont || 'Helvetica';
  const fontSize = options.fontSize || 8.5;
  const leftColor = options.leftColor || '#0f172a';
  const rightColor = options.rightColor || '#475569';
  
  doc.font(leftFont).fontSize(fontSize).fillColor(leftColor);
  doc.text(leftText, 36, currentY);
  
  doc.font(rightFont).fontSize(fontSize).fillColor(rightColor);
  doc.text(rightText, 36, currentY, { align: 'right', width: 540 });
  
  doc.y = currentY + fontSize + 2; // move cursor down
}

// Helper: Bullet point
function addBullet(text) {
  const bulletSymbol = '•';
  const startY = doc.y;
  
  doc.font('Helvetica').fontSize(8.2).fillColor('#334155');
  doc.text(bulletSymbol, 44, startY);
  doc.text(text, 52, startY, { width: 524, align: 'left', lineGap: 1 });
  doc.y += 1; // space between bullets
}

// Helper: Project builder
function addProject(title, techStack, bullets) {
  writeRow(title, techStack, { leftFont: 'Helvetica-Bold', rightFont: 'Helvetica-Bold', rightColor: '#0284c7', fontSize: 8.5 });
  doc.y -= 1;
  bullets.forEach(b => {
    addBullet(b);
  });
  doc.y += 2; // space after project
}

// --- 1. HEADER ---
doc.fillColor('#0f172a')
   .font('Helvetica-Bold')
   .fontSize(17)
   .text('SANJAY M', { align: 'center', characterSpacing: 1 });

doc.y += 1;

doc.fillColor('#0284c7') // Sky blue/cyan dark accent
   .font('Helvetica-Bold')
   .fontSize(9)
   .text('B.TECH INFORMATION TECHNOLOGY STUDENT', { align: 'center', characterSpacing: 0.5 });

doc.y += 2;

doc.fillColor('#475569') // Muted body
   .font('Helvetica')
   .fontSize(8)
   .text('Tamil Nadu, India  |  +91 9585824595  |  sanjaymp2107@gmail.com', { align: 'center' });

doc.y += 1.5;

doc.text('Portfolio: portfolio-sanjaym.vercel.app  |  GitHub: github.com/Sanjaymp21  |  LinkedIn: linkedin.com/in/sanjay-m-39b99a385', { align: 'center' });

// --- 2. PROFILE ---
addSectionHeader('PROFILE');
doc.fillColor('#334155')
   .font('Helvetica')
   .fontSize(8.2)
   .text(
     'Second-year B.Tech Information Technology student with hands-on experience in full-stack web development, artificial intelligence, machine learning, and data-driven applications. Proficient in developing responsive web interfaces and building technology solutions through academic projects, hackathons, and technical initiatives. Strong interest in applying software engineering and emerging technologies to solve real-world problems.',
     { align: 'justify', lineGap: 1.2 }
   );

// --- 3. EDUCATION ---
addSectionHeader('EDUCATION');
writeRow(
  'Bannari Amman Institute of Technology, Tamil Nadu',
  '2025 – 2029',
  { leftFont: 'Helvetica-Bold', rightFont: 'Helvetica-Bold' }
);
doc.font('Helvetica').fontSize(8.2).fillColor('#334155');
doc.text('B.Tech – Information Technology  |  First-Year CGPA: 8.05 / 10', 36, doc.y);
doc.y += 3;

writeRow(
  'Higher Secondary Schooling (12th Grade)  |  Secondary School (10th Grade)',
  '90%  |  96%',
  { leftFont: 'Helvetica', rightFont: 'Helvetica' }
);

// --- 4. TECHNICAL SKILLS ---
addSectionHeader('TECHNICAL SKILLS');
const skills = [
  { category: 'Programming Languages', list: 'Python, C, Java, JavaScript, TypeScript' },
  { category: 'Web Development', list: 'HTML5, CSS3, React.js, Next.js, Tailwind CSS' },
  { category: 'Backend', list: 'Node.js, Express.js, REST API Development' },
  { category: 'Databases', list: 'MySQL, MongoDB, PostgreSQL' },
  { category: 'AI & Data', list: 'Machine Learning, Big Data Analytics, Data Analysis' }
];

skills.forEach(s => {
  doc.font('Helvetica-Bold').fontSize(8.2).fillColor('#0f172a');
  doc.text(s.category + ': ', 36, doc.y, { continued: true });
  doc.font('Helvetica').fontSize(8.2).fillColor('#334155');
  doc.text(s.list, { continued: false });
  doc.y += 1.5;
});

// --- 5. SELECTED PROJECTS ---
addSectionHeader('SELECTED PROJECTS');

addProject(
  'SST Groomers – Pet Grooming Trust & Booking Platform',
  'React.js | JavaScript | Tailwind CSS',
  [
    'Developed a responsive platform for online appointment booking, service discovery, and customer trust, with reusable UI components.',
    'Implemented service packages, reviews, trust indicators, and customer-oriented workflows.',
    'Developed as part of Software Innovation Challenge 2026.'
  ]
);

addProject(
  'EndoJourney AI – AI-Powered Journey & Recommendation Platform',
  'AI | Machine Learning | Web Development',
  [
    'Developed an AI-driven platform providing personalized journey planning and intelligent recommendations.',
    'Applied AI concepts to analyze user preferences and designed a user-friendly, personalization-focused interface.',
    'Explored the integration of AI capabilities into a practical real-world application.'
  ]
);

addProject(
  'EcoSense AI – Smart Environmental Monitoring System',
  'Python | Machine Learning | IoT',
  [
    'Designed an AI-driven environmental monitoring solution using sensor-based data and ML concepts.',
    'Focused on developing a technology-driven solution for sustainability-related challenges.',
    'Developed as part of a hackathon-based innovation project.'
  ]
);

addProject(
  'PCDP v4 – Secure Digital Attendance System',
  'Web Technologies | JavaScript | Database',
  [
    'Designed a digital attendance management solution to streamline attendance tracking.',
    'Focused on secure data handling and efficient digital workflows.',
    'Developed a user-friendly interface for managing attendance-related information.'
  ]
);

// --- 6. HACKATHONS & INNOVATION ---
addSectionHeader('HACKATHONS & INNOVATION');
const hackathons = [
  'Contributed to real-world software solutions through ideation, prototyping, development, and presentation.',
  'Collaborated with teams to transform problem statements into functional technology concepts across AI, sustainability, and software challenges.',
  'Gained practical experience in rapid problem-solving, solution design, and technical presentations.'
];
hackathons.forEach(h => addBullet(h));

// --- 7. LEADERSHIP & TECHNICAL ACTIVITIES ---
addSectionHeader('LEADERSHIP & TECHNICAL ACTIVITIES');
doc.font('Helvetica-Bold').fontSize(8.2).fillColor('#0f172a');
doc.text('Student Team Leader – Big Data Analytics & Machine Learning', 36, doc.y);
doc.y += 1;
const leadership = [
  'Coordinate a technical learning team focused on Big Data Analytics and Machine Learning.',
  'Organize structured learning sessions, technical events, and project-based activities.',
  'Support members in developing technical skills through hands-on learning and hackathons.'
];
leadership.forEach(l => addBullet(l));

// --- 8. CERTIFICATIONS & LEARNING ---
addSectionHeader('CERTIFICATIONS & LEARNING');
doc.font('Helvetica').fontSize(8.2).fillColor('#334155');
doc.text('Cisco – Python Programming  |  Full-Stack Web Development  |  Big Data Analytics  |  Machine Learning', 36, doc.y);

// --- 9. AREAS OF INTEREST & CORE COMPETENCIES ---
addSectionHeader('AREAS OF INTEREST & CORE COMPETENCIES');
doc.font('Helvetica-Bold').fontSize(8.2).fillColor('#0f172a');
doc.text('Interests: ', 36, doc.y, { continued: true });
doc.font('Helvetica').fontSize(8.2).fillColor('#334155');
doc.text('Artificial Intelligence • Machine Learning • Big Data Analytics • Full-Stack Development • Cloud Computing • Software Engineering', { continued: false });

doc.y += 2;

doc.font('Helvetica-Bold').fontSize(8.2).fillColor('#0f172a');
doc.text('Competencies: ', 36, doc.y, { continued: true });
doc.font('Helvetica').fontSize(8.2).fillColor('#334155');
doc.text('Problem Solving • Software Development • Team Collaboration • Leadership • Technical Communication • Rapid Learning', { continued: false });

// Finalize Document
doc.end();

stream.on('finish', () => {
  console.log(`PDF successfully generated at: ${outputPath}`);
  console.log(`Total Page Count: ${pageCount}`);
  if (pageCount > 1) {
    console.error('ERROR: Resume exceeds one page!');
    process.exit(1);
  } else {
    console.log('SUCCESS: Resume fits perfectly on one page.');
  }
});
