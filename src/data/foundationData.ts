import { Pillar, ValueItem, FlagshipInitiative, FoundationCommitment, KalamQuote } from '../types';
import foundationLogo from '../assets/images/kalam_foundation_logo_1786047653500.jpg';
import heroBannerImg from '../assets/images/kalam_hero_banner_1786046940724.jpg';

import academyImg from '../assets/images/initiative_academy_1794738148374.jpg';
import labsImg from '../assets/images/initiative_labs_1794738148623.jpg';
import skillsImg from '../assets/images/initiative_skills_1794738150341.jpg';
import startupsImg from '../assets/images/initiative_startups_1794738150341.jpg';
import careersImg from '../assets/images/initiative_careers_1794738150971.jpg';
import sportsImg from '../assets/images/initiative_sports_1794738151318.jpg';
import researchImg from '../assets/images/initiative_research_1794738151610.jpg';
import communitiesImg from '../assets/images/initiative_communities_1794738151945.jpg';
import leadershipImg from '../assets/images/initiative_leadership_1794738153835.jpg';

export const FOUNDATION_META = {
  name: 'Kalam Inspire Foundation',
  shortName: 'Kalam Inspire',
  logo: foundationLogo,
  heroBanner: heroBannerImg,
  tagline: 'Inspiring People. Transforming Communities. Building the Nation.',
  subtitle:
    'A newly established independent non-profit empowering individuals with knowledge, practical skills, scientific curiosity, and ethical leadership.',
  location: 'Bengaluru, Karnataka, India',
  contactPhone: '9844072671',
  formattedPhone: '+91 9844072671',
  address: 'Peenya Industrial Area, Bengaluru, Karnataka, India',
  email: 'kalaminspirefoundation@gmail.com',
  socials: {
    linkedin: 'https://www.linkedin.com/company/kalam-inspire-foundation',
    twitter: 'https://twitter.com/KalamInspire',
    instagram: 'https://www.instagram.com/kalaminspirefoundation',
    facebook: 'https://www.facebook.com/kalaminspirefoundation',
    youtube: 'https://www.youtube.com/@KalamInspireFoundation'
  },
  vision:
    'To build a future where every individual has access to quality education, practical skills, innovation, leadership opportunities, and sustainable livelihoods, contributing to a prosperous, equitable, and developed India.',
  mission:
    'Kalam Inspire Foundation is an independent non-profit organization committed to empowering individuals and communities through education, innovation, entrepreneurship, skill development, sports, research, leadership, and social development. Inspired by the vision and values of Dr. A.P.J. Abdul Kalam, we create opportunities that enable people to learn, innovate, lead, and serve society with integrity and purpose.',
  about:
    'Founded as an independent charitable initiative, Kalam Inspire Foundation focuses on laying strong, transparent foundations across education, employable skills, grassroots innovation, sports, open research, and civic leadership. We believe that meaningful, enduring change begins with education, grows through innovation, and succeeds through collaboration.',
  disclaimer:
    'Kalam Inspire Foundation is an independent organization inspired by the values of Dr. A.P.J. Abdul Kalam. It is not affiliated with, endorsed by, or representing Dr. Kalam\'s family, estate, or any government institution.',
};

export const PILLARS: Pillar[] = [
  {
    id: 'education',
    title: 'Education',
    iconName: 'GraduationCap',
    summary: 'Promoting quality education, digital learning, STEM education, scholarships, academic excellence, and lifelong learning.',
    details: 'Bridging foundational learning gaps by connecting schools and learners with structured STEM mentorship, digital learning resources, and need-based educational support.',
    keyFocusAreas: ['Digital Learning & Smart Classrooms', 'STEM & Hands-on Science', 'Merit & Need-based Support', 'Teacher Training & Capacity Building']
  },
  {
    id: 'innovation',
    title: 'Innovation',
    iconName: 'Lightbulb',
    summary: 'Encouraging creativity, scientific thinking, research, technology, design thinking, and problem-solving for societal progress.',
    details: 'Fostering a culture of scientific inquiry and grassroots problem-solving through tinkering workshops, robotics clubs, and local challenge sprints.',
    keyFocusAreas: ['Community Tinkering & Innovation Hubs', 'AI, Robotics & IoT Workshops', 'Design Thinking for Social Good', 'Student Prototype Mentorship']
  },
  {
    id: 'skills',
    title: 'Skill Development',
    iconName: 'Wrench',
    summary: 'Providing vocational training, digital skills, industry certifications, financial literacy, communication, and employability programs.',
    details: 'Equipping young adults with market-relevant technical and communication skills that support sustainable livelihoods and self-reliance.',
    keyFocusAreas: ['Vocational & Technical Training', 'Digital Literacy & Data Skills', 'Financial & Business Literacy', 'Communication & Soft Skills']
  },
  {
    id: 'entrepreneurship',
    title: 'Entrepreneurship',
    iconName: 'Rocket',
    summary: 'Supporting aspiring entrepreneurs through mentorship, incubation, networking, business development, and startup ecosystem engagement.',
    details: 'Guiding early-stage founders and grassroots innovators with structured mentorship, peer networks, and practical venture-building workshops.',
    keyFocusAreas: ['Early-Stage Mentorship', 'Grassroots & Rural Entrepreneurship', 'Women Founder Circles', 'Ecosystem & Network Access']
  },
  {
    id: 'careers',
    title: 'Careers & Employment',
    iconName: 'Briefcase',
    summary: 'Career guidance, internships, placement support, resume development, interview preparation, and employment readiness.',
    details: 'Helping learners navigate career transitions through structured counselling, portfolio clinics, and mentor-led interview readiness.',
    keyFocusAreas: ['Personalized Career Counselling', 'Internship Readiness Pathways', 'Employer & Partner Introductions', 'Resume & Interview Clinics']
  },
  {
    id: 'sports',
    title: 'Sports & Youth Development',
    iconName: 'Trophy',
    summary: 'Developing sporting talent, leadership, teamwork, fitness, discipline, and holistic youth development.',
    details: 'Supporting community athletics and holistic physical fitness with basic training kits, coaching clinics, and discipline-focused youth programs.',
    keyFocusAreas: ['Grassroots Talent Identification', 'Sports Equipment & Ground Access', 'Youth Leadership & Fitness Clinics', 'Coaching & Nutrition Guidance']
  },
  {
    id: 'research',
    title: 'Research & Knowledge',
    iconName: 'BookOpen',
    summary: 'Conducting research, policy studies, impact assessments, publications, and open knowledge-sharing initiatives.',
    details: 'Building transparent, evidence-based perspectives on education, technology policy, sustainable development, and community resilience.',
    keyFocusAreas: ['Policy & Education Studies', 'Field Learning Assessments', 'Open Knowledge Briefs', 'Collaborative Reading Circles']
  },
  {
    id: 'community',
    title: 'Community Development',
    iconName: 'HeartHandshake',
    summary: 'Working in health, sanitation, women empowerment, child welfare, rural development, environmental sustainability, and social inclusion.',
    details: 'Partnering directly with neighbourhoods and villages on preventive health awareness, clean water access, tree planting, and women-led livelihoods.',
    keyFocusAreas: ['Community Health & Hygiene', 'Women Empowerment & Self-Help', 'Clean Water & Rural Access', 'Environmental Sustainability']
  },
  {
    id: 'leadership',
    title: 'Leadership & Civic Engagement',
    iconName: 'ShieldCheck',
    summary: 'Developing ethical leaders, volunteers, changemakers, and responsible citizens committed to nation-building.',
    details: 'Encouraging active, ethical civic participation through volunteer cadres, youth roundtables, and local community stewardship.',
    keyFocusAreas: ['Ethical Youth Leadership', 'Civic Action Dialogues', 'Community Volunteer Cadre', 'Public Service Mentorship']
  }
];

export const VALUES: ValueItem[] = [
  { name: 'Integrity', description: 'Upholding unwavering honesty, ethics, and transparency in all programs and governance.', iconName: 'Shield' },
  { name: 'Innovation', description: 'Embracing creative thinking, technology, and novel solutions to tackle practical challenges.', iconName: 'Sparkles' },
  { name: 'Excellence', description: 'Striving for thoughtful quality and genuine outcomes in every initiative we undertake.', iconName: 'Award' },
  { name: 'Inclusion', description: 'Ensuring equal access and dignity for individuals regardless of background, gender, or region.', iconName: 'Users' },
  { name: 'Compassion', description: 'Serving communities with empathy, care, and a deep respect for human dignity.', iconName: 'Heart' },
  { name: 'Collaboration', description: 'Building synergies with schools, institutions, mentors, and volunteers for shared progress.', iconName: 'Handshake' },
  { name: 'Accountability', description: 'Taking full ownership of our commitments, resources, and transparent community reporting.', iconName: 'CheckCircle2' },
  { name: 'Lifelong Learning', description: 'Encouraging continuous curiosity, skill renewal, and personal growth across every stage of life.', iconName: 'BookMarked' },
  { name: 'Service to Society', description: 'Dedicating our efforts to the upliftment of communities and thoughtful nation-building.', iconName: 'Globe' }
];

export const FLAGSHIP_INITIATIVES: FlagshipInitiative[] = [
  {
    id: 'academy',
    plateNumber: 'Plate 01',
    name: 'Kalam Inspire Academy',
    subtitle: 'Education, Scholarships & STEM Learning',
    category: 'Education',
    description: 'Building foundational pathways for school and college learners through digital learning modules, hands-on STEM kits, and teacher support.',
    iconName: 'GraduationCap',
    image: academyImg,
    stageLabel: 'Inaugural Cohort · Open',
    focusAreas: ['STEM Classrooms', 'Foundational Scholarships', 'Teacher Mentorship', 'Digital Learning Pods'],
    programs: [
      { id: 'p1', title: 'Ignited Minds STEM Fellowship', description: 'Introducing hands-on science kits and curiosity-led sessions for partner schools.', targetAudience: 'School Learners', status: 'Applications Open' },
      { id: 'p2', title: 'Kalam Foundational Scholarship', description: 'Need-based educational assistance for motivated learners pursuing higher studies.', targetAudience: 'College Applicants', status: 'Active' },
      { id: 'p3', title: 'Digital Literacy for Educators', description: 'Practical workshops helping local teachers adopt interactive science and digital tools.', targetAudience: 'School Teachers', status: 'Active' }
    ]
  },
  {
    id: 'labs',
    plateNumber: 'Plate 02',
    name: 'Kalam Inspire Labs',
    subtitle: 'Innovation, AI, Robotics & Design Thinking',
    category: 'Innovation',
    description: 'Creating accessible tinkering workshops and robotics workbenches where young innovators learn electronics, AI basics, and prototype design.',
    iconName: 'Cpu',
    image: labsImg,
    stageLabel: 'Pilot Labs · Launching',
    focusAreas: ['Robotics & IoT', 'Applied AI Basics', 'Prototype Fabrication', 'Local Design Sprints'],
    programs: [
      { id: 'p4', title: 'Young Innovators Build Challenge', description: 'Seasonal showcase encouraging youth teams to prototype practical community solutions.', targetAudience: 'School & College Teams', status: 'Applications Open' },
      { id: 'p5', title: 'AI for Social Good Workshops', description: 'Guided hands-on sessions introducing responsible AI and assistive technology design.', targetAudience: 'Tech Learners', status: 'Active' },
      { id: 'p6', title: 'Open Maker Workbench Access', description: 'Shared electronics, soldering, and 3D fabrication access for grassroots builders.', targetAudience: 'Grassroots Makers', status: 'Active' }
    ]
  },
  {
    id: 'skills',
    plateNumber: 'Plate 03',
    name: 'Kalam Inspire Skills',
    subtitle: 'Vocational Training & Workforce Readiness',
    category: 'Skill Development',
    description: 'Delivering practical vocational training, green-energy technician workshops, digital fluency, and financial literacy for everyday employability.',
    iconName: 'Wrench',
    image: skillsImg,
    stageLabel: 'Foundational Track · Active',
    focusAreas: ['Digital Tech Bootcamps', 'Solar & Clean-Tech Wiring', 'Financial Literacy', 'Communication Skills'],
    programs: [
      { id: 'p7', title: 'Digital & Data Skills Bootcamp', description: 'Structured introductory cohort covering software fundamentals and practical problem-solving.', targetAudience: 'Job Seekers & Graduates', status: 'Applications Open' },
      { id: 'p8', title: 'Solar & Clean Energy Technician Track', description: 'Hands-on vocational training in solar panel setup, safety, and routine maintenance.', targetAudience: 'Rural & Urban Youth', status: 'Active' },
      { id: 'p9', title: 'Women Financial Literacy Circle', description: 'Practical community sessions on household budgeting, digital banking, and micro-enterprise.', targetAudience: 'Women Participants', status: 'Active' }
    ]
  },
  {
    id: 'startups',
    plateNumber: 'Plate 04',
    name: 'Kalam Inspire Startups',
    subtitle: 'Incubation, Mentorship & Founder Studio',
    category: 'Entrepreneurship',
    description: 'Supporting early-stage social and deep-tech builders with candid mentor feedback, prototype reviews, and ecosystem introductions.',
    iconName: 'Rocket',
    image: startupsImg,
    stageLabel: 'First Cohort · Enrolling',
    focusAreas: ['Agritech & Clean Energy', 'EdTech & Healthcare', 'Prototype Validation', 'Mentor Office Hours'],
    programs: [
      { id: 'p10', title: 'Kalam Social Impact Incubator', description: 'Guided early-stage cohort helping founders validate community-first solutions and business models.', targetAudience: 'Early-Stage Founders', status: 'Applications Open' },
      { id: 'p11', title: 'Regional Founder Mentorship Circle', description: 'Connecting emerging builders in tier-2 and tier-3 towns with experienced operators.', targetAudience: 'Regional Founders', status: 'Active' }
    ]
  },
  {
    id: 'careers',
    plateNumber: 'Plate 05',
    name: 'Kalam Inspire Careers',
    subtitle: 'Career Counselling, Internships & Readiness',
    category: 'Careers & Employment',
    description: 'Helping emerging graduates prepare for meaningful work through structured career counselling, portfolio reviews, and interview practice.',
    iconName: 'Briefcase',
    image: careersImg,
    stageLabel: 'Advisory Desk · Open',
    focusAreas: ['1-on-1 Career Mentorship', 'Internship Matching', 'Resume & Portfolio Clinics', 'Mock Technical Interviews'],
    programs: [
      { id: 'p12', title: 'Kalam Career Readiness Fellowship', description: 'Mentor-guided preparation connecting learners to foundational internships and project work.', targetAudience: 'Final-Year Learners', status: 'Applications Open' },
      { id: 'p13', title: 'Campus-to-Career Portfolio Clinic', description: 'Interactive sessions refining resumes, communication clarity, and interview confidence.', targetAudience: 'Fresh Graduates', status: 'Upcoming' }
    ]
  },
  {
    id: 'sports',
    plateNumber: 'Plate 06',
    name: 'Kalam Inspire Sports',
    subtitle: 'Grassroots Athletics, Coaching & Discipline',
    category: 'Sports & Youth',
    description: 'Encouraging physical fitness, teamwork, and discipline through local track clinics, basic equipment support, and community coaching.',
    iconName: 'Trophy',
    image: sportsImg,
    stageLabel: 'Community Clinics · Active',
    focusAreas: ['Grassroots Track & Field', 'Community Playgrounds', 'Fitness & Nutrition Basics', 'Team Leadership'],
    programs: [
      { id: 'p14', title: 'Community Athletics & Fitness Clinics', description: 'Weekend coaching sessions focused on running fundamentals, agility, and healthy habits.', targetAudience: 'Youth Athletes', status: 'Active' },
      { id: 'p15', title: 'Local Playfield Kit Initiative', description: 'Providing foundational sports gear and training cones to neighbourhood schools.', targetAudience: 'Partner Schools', status: 'Active' }
    ]
  },
  {
    id: 'research',
    plateNumber: 'Plate 07',
    name: 'Kalam Inspire Research',
    subtitle: 'Policy Studies, Field Notes & Publications',
    category: 'Research & Policy',
    description: 'Curating accessible research briefs, field observations, and open reading circles on education, clean energy, and community progress.',
    iconName: 'BookOpen',
    image: researchImg,
    stageLabel: 'Open Archive · Launching',
    focusAreas: ['Education Policy Notes', 'Clean Energy Transitions', 'Rural Development Studies', 'Responsible AI Ethics'],
    programs: [
      { id: 'p16', title: 'Young Researchers Study Group', description: 'Collaborative fellowship supporting emerging scholars writing practical field briefs.', targetAudience: 'Scholars & Fellows', status: 'Applications Open' },
      { id: 'p17', title: 'Open Knowledge Monograph Series', description: 'Publicly accessible reading notes and case studies for educators and civic planners.', targetAudience: 'Educators & Readers', status: 'Active' }
    ]
  },
  {
    id: 'communities',
    plateNumber: 'Plate 08',
    name: 'Kalam Inspire Communities',
    subtitle: 'Health, Clean Water, Women & Environment',
    category: 'Community Welfare',
    description: 'Working alongside neighbourhood and rural groups on sapling plantation, clean water awareness, hygiene drives, and women self-help collectives.',
    iconName: 'HeartHandshake',
    image: communitiesImg,
    stageLabel: 'Grassroots Drives · Open',
    focusAreas: ['Preventive Health Awareness', 'Clean Water & Sanitation', 'Native Tree Plantation', 'Women Self-Help Collectives'],
    programs: [
      { id: 'p18', title: 'Green Kalam Sapling Drive', description: 'Community-led native tree planting and watershed care alongside local schools.', targetAudience: 'Local Eco-Volunteers', status: 'Active' },
      { id: 'p19', title: 'Clean Water & Hygiene Outreach', description: 'Collaborative village workshops on safe drinking water and solar filtration upkeep.', targetAudience: 'Rural Households', status: 'Active' }
    ]
  },
  {
    id: 'leadership',
    plateNumber: 'Plate 09',
    name: 'Kalam Inspire Leadership',
    subtitle: 'Ethics, Governance & Civic Changemakers',
    category: 'Leadership & Ethics',
    description: 'Cultivating thoughtful, ethical young citizens through civic roundtables, volunteer leadership cohorts, and community service dialogue.',
    iconName: 'ShieldCheck',
    image: leadershipImg,
    stageLabel: 'Founding Cadre · Enrolling',
    focusAreas: ['Civic Dialogue Roundtables', 'Ethical Governance Seminars', 'Volunteer Stewardship', 'Community Service Projects'],
    programs: [
      { id: 'p20', title: 'Kalam Civic Leadership Cohort', description: 'Experiential civic cohort engaging young participants with local community problem-solving.', targetAudience: 'Graduates & Volunteers', status: 'Applications Open' },
      { id: 'p21', title: 'Ethics in Public Life Seminars', description: 'Open discussions with educators, engineers, and civic practitioners on principled leadership.', targetAudience: 'Youth & Citizens', status: 'Active' }
    ]
  }
];

export const FOUNDATION_COMMITMENTS: FoundationCommitment[] = [
  {
    code: '01',
    label: 'Access',
    title: 'Open & Inclusive Participation',
    description: 'Designed as a fresh, accessible platform welcoming learners, mentors, and community partners without barriers.'
  },
  {
    code: '02',
    label: 'Method',
    title: 'Practical, Grounded Programs',
    description: 'Every flagship initiative starts with small, real-world cohorts focused on tangible learning rather than inflated claims.'
  },
  {
    code: '03',
    label: 'Guidance',
    title: 'Mentor-Led Learning',
    description: 'Connecting emerging youth directly with working engineers, educators, coaches, and grassroots organizers.'
  },
  {
    code: '04',
    label: 'Stewardship',
    title: 'Transparent & Independent',
    description: 'Operating independently from Bengaluru with clear ethical governance, honest reporting, and community accountability.'
  }
];

export const KALAM_QUOTES: KalamQuote[] = [
  {
    text: "Dream is not that which you see while sleeping; it is something that does not let you sleep.",
    context: "On ambition, perseverance, and dedication to nation-building.",
  },
  {
    text: "Excellence is a continuous process and not an accident.",
    context: "On continuous learning, skill development, and personal growth.",
  },
  {
    text: "You have to dream before your dreams can come true.",
    context: "Inspiring young minds to innovate and imagine a greater future.",
  },
  {
    text: "Learning gives creativity, creativity leads to thinking, thinking provides knowledge, knowledge makes you great.",
    context: "The philosophical foundation of Kalam Inspire Academy & Labs.",
  }
];

export const FAQS = [
  {
    question: 'Is Kalam Inspire Foundation affiliated with Dr. A.P.J. Abdul Kalam\'s family or the government?',
    answer: 'No. Kalam Inspire Foundation is an independent non-profit organization inspired by the ideals, vision, and values of Dr. A.P.J. Abdul Kalam. It is not affiliated with, endorsed by, or representing Dr. Kalam\'s family, estate, or any government institution.'
  },
  {
    question: 'How can learners apply for Kalam Inspire Academy or STEM workshops?',
    answer: 'Applicants can browse the 9 Flagship Initiatives section, select Kalam Inspire Academy or Labs, and click "Apply / Join" to submit an introductory interest form for our inaugural cohorts.'
  },
  {
    question: 'How can early-stage founders connect with Kalam Inspire Startups?',
    answer: 'Aspiring founders can submit their background and venture idea through the Get Involved portal under the Startup Pitch category for mentor review.'
  },
  {
    question: 'How can schools and institutions partner with the foundation?',
    answer: 'Schools, colleges, and community spaces can reach out via the CSR / Partner option in Get Involved to host workshops, tinkering sessions, or reading circles.'
  },
  {
    question: 'Can individuals volunteer or serve as mentors?',
    answer: 'Yes. As a newly established foundation, we welcome founding volunteers, educators, industry mentors, and local coordinators through our Get Involved form.'
  }
];
