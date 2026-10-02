export interface Course {
  id: string;
  title: string;
  duration: string;
  description: string;
  curriculum: string[];
  level: 'Beginner' | 'Intermediate' | 'Professional';
  image: string;
  highlights: string;
}

export const coursesData: Course[] = [
  {
    id: 'course-basic-computing',
    title: 'Basic Computer Operations & Digital Literacy',
    duration: '4 Weeks',
    level: 'Beginner',
    image: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=800&auto=format&fit=crop&q=80',
    highlights: 'Zero experience required • Practical hands-on training',
    description:
      'Master essential computer operations, operating systems, file systems, cloud storage, safe internet navigation, and typing speed.',
    curriculum: [
      'Computer Hardware & Operating System Fundamentals',
      'File Management, Cloud Drives & Backup Workflows',
      'Email Etiquette & Online Collaboration Tools',
      'Internet Safety & Digital Productivity Habits',
    ],
  },
  {
    id: 'course-office-suite',
    title: 'Microsoft Office & Workspace Productivity',
    duration: '6 Weeks',
    level: 'Intermediate',
    image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&auto=format&fit=crop&q=80',
    highlights: 'Crucial for administrative, real estate & business roles',
    description:
      'In-depth mastery of Microsoft Word documentation, Excel financial modeling & inventory tracking, PowerPoint pitch decks, and Outlook communication.',
    curriculum: [
      'Advanced Document Styling & Templates in MS Word',
      'Excel Formulas, Data Analysis, Pivot Tables & Budgets',
      'Executive Presentation Design with MS PowerPoint',
      'Google Workspace Integration (Docs, Sheets, Slides)',
    ],
  },
  {
    id: 'course-web-development',
    title: 'Web Design & Modern Front-End Development',
    duration: '12 Weeks',
    level: 'Professional',
    image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&auto=format&fit=crop&q=80',
    highlights: 'Portfolio-driven projects • Responsive web building',
    description:
      'Learn semantic HTML5, modern CSS3 styling, responsive layouts, JavaScript fundamentals, and creating business landing pages from scratch.',
    curriculum: [
      'HTML5 Architecture & Accessible Semantic Web Structure',
      'Modern CSS Grid, Flexbox, Tailwind CSS & Responsive Design',
      'JavaScript Core, DOM Manipulation & Interactive Web UI',
      'Domain Registration, Hosting & Production Deployment',
    ],
  },
  {
    id: 'course-digital-marketing',
    title: 'Digital Marketing & Real Estate Lead Generation',
    duration: '8 Weeks',
    level: 'Intermediate',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&auto=format&fit=crop&q=80',
    highlights: 'High-conversion real estate social marketing techniques',
    description:
      'Master social media advertising, Meta Ads (Facebook & Instagram), Google Search presence, WhatsApp business funnel automation, and content creation.',
    curriculum: [
      'Social Media Branding & Strategic Content Creation',
      'Meta Ad Campaigns Setup, Retargeting & ROI Tracking',
      'WhatsApp Business Automation & CRM Lead Pipeline',
      'Local SEO & Google Business Profile Optimization',
    ],
  },
];
