export type CourseRecord = {
  code: string;
  title: string;
  community: string;
};

export type CourseActivity = {
  activeStudents: number;
  postsThisWeek: number;
  discussions: number;
  lastActive: string;
  trending: boolean;
};

export const courseRecords: CourseRecord[] = [
  {
    code: 'Campus General',
    title: 'General Campus Discussion',
    community: 'Campus General',
  },

  // Accounting
  { code: 'ACCT 101', title: 'Financial Accounting', community: 'Accounting' },
  { code: 'ACCT 102', title: 'Managerial Accounting', community: 'Accounting' },
  { code: 'ACCT 201', title: 'Intermediate Accounting I', community: 'Accounting' },
  { code: 'ACCT 202', title: 'Intermediate Accounting II', community: 'Accounting' },
  { code: 'ACCT 301', title: 'Cost Accounting', community: 'Accounting' },
  { code: 'ACCT 401', title: 'Auditing', community: 'Accounting' },

  // Architecture / Design
  { code: 'ARCH 101', title: 'Introduction to Architecture', community: 'Architecture' },
  { code: 'ARCH 201', title: 'Architectural Design Studio I', community: 'Architecture' },
  { code: 'ARCH 202', title: 'Architectural Design Studio II', community: 'Architecture' },
  { code: 'ARCH 301', title: 'History of Architecture', community: 'Architecture' },
  { code: 'ARCH 401', title: 'Advanced Architectural Design', community: 'Architecture' },

  // Art / Digital Art
  { code: 'ARTA 101', title: 'Art Foundations', community: 'Art & Design' },
  { code: 'ARTC 201', title: 'Computer Graphics', community: 'Art & Design' },
  { code: 'ARTD 201', title: 'Design Foundations', community: 'Art & Design' },
  { code: 'ARTG 301', title: 'Advanced Graphics', community: 'Art & Design' },
  { code: 'ARTM 301', title: 'Motion Capture', community: 'Art & Design' },

  // Bioengineering
  { code: 'BIOE 201', title: 'Introduction to Bioengineering', community: 'Bioengineering' },
  { code: 'BIOE 301', title: 'Biomedical Instrumentation', community: 'Bioengineering' },
  { code: 'BIOE 320', title: 'Statistics for Bioengineers', community: 'Bioengineering' },
  { code: 'BIOE 401', title: 'Bioengineering Design I', community: 'Bioengineering' },
  { code: 'BIOE 402', title: 'Bioengineering Design II', community: 'Bioengineering' },
  { code: 'BIOE 440', title: 'Process Control in Biotechnology', community: 'Bioengineering' },

  // Biology
  { code: 'BIOL 110', title: 'General Biology I', community: 'Biology' },
  { code: 'BIOL 120', title: 'General Biology II', community: 'Biology' },
  { code: 'BIOL 210', title: 'Cell Biology', community: 'Biology' },
  { code: 'BIOL 220', title: 'Genetics', community: 'Biology' },
  { code: 'BIOL 365', title: 'Microbiology', community: 'Biology' },
  { code: 'BIOL 401', title: 'Advanced Biology Seminar', community: 'Biology' },

  // Business
  { code: 'BUSA 101', title: 'Business Analytics Foundations', community: 'Business' },
  { code: 'BUSI 101', title: 'Introduction to Business', community: 'Business' },
  { code: 'BUSI 201', title: 'Business Communications', community: 'Business' },
  { code: 'BUSI 301', title: 'Business Analytics', community: 'Business' },
  { code: 'BUSI 401', title: 'Strategic Management', community: 'Business' },

  // Chemistry
  { code: 'CHEM 110', title: 'General Chemistry I', community: 'Chemistry' },
  { code: 'CHEM 120', title: 'General Chemistry II', community: 'Chemistry' },
  { code: 'CHEM 201', title: 'Organic Chemistry I', community: 'Chemistry' },
  { code: 'CHEM 202', title: 'Organic Chemistry II', community: 'Chemistry' },
  { code: 'CHEM 301', title: 'Biochemistry', community: 'Chemistry' },

  // Chinese / Languages
  { code: 'CHIN 101', title: 'Elementary Chinese I', community: 'Languages' },
  { code: 'CHIN 102', title: 'Elementary Chinese II', community: 'Languages' },
  { code: 'ARAB 101', title: 'Elementary Arabic I', community: 'Languages' },
  { code: 'FREN 101', title: 'Elementary French I', community: 'Languages' },
  { code: 'SPAN 101', title: 'Elementary Spanish I', community: 'Languages' },

  // Communications / Media
  { code: 'CAMP 101', title: 'Communication and Media Production', community: 'Communications' },
  { code: 'COMM 101', title: 'Introduction to Communications', community: 'Communications' },
  { code: 'COMM 201', title: 'Public Speaking', community: 'Communications' },
  { code: 'COMM 301', title: 'Media Studies', community: 'Communications' },
  { code: 'COMM 401', title: 'Strategic Communication', community: 'Communications' },

  // Computer Science
  { code: 'CSCI 120', title: 'Programming I', community: 'Computer Science' },
  { code: 'CSCI 125', title: 'Computer Programming I', community: 'Computer Science' },
  { code: 'CSCI 135', title: 'Digital Logic', community: 'Computer Science' },
  { code: 'CSCI 155', title: 'Computer Programming II', community: 'Computer Science' },
  { code: 'CSCI 185', title: 'Web Technologies', community: 'Computer Science' },
  { code: 'CSCI 235', title: 'Elements of Discrete Structures', community: 'Computer Science' },
  { code: 'CSCI 260', title: 'Data Structures', community: 'Computer Science' },
  { code: 'CSCI 270', title: 'Probability and Statistics for Computer Science', community: 'Computer Science' },
  { code: 'CSCI 300', title: 'Operating Systems', community: 'Computer Science' },
  { code: 'CSCI 303', title: 'Internet Programming Languages', community: 'Computer Science' },
  { code: 'CSCI 310', title: 'Mobile App Development', community: 'Computer Science' },
  { code: 'CSCI 312', title: 'Theory of Computation', community: 'Computer Science' },
  { code: 'CSCI 318', title: 'Computer Networks', community: 'Computer Science' },
  { code: 'CSCI 330', title: 'Database Systems', community: 'Computer Science' },
  { code: 'CSCI 335', title: 'Design and Analysis of Algorithms', community: 'Computer Science' },
  { code: 'CSCI 340', title: 'Software Engineering', community: 'Computer Science' },
  { code: 'CSCI 355', title: 'Artificial Intelligence', community: 'Computer Science' },
  { code: 'CSCI 370', title: 'Cybersecurity Fundamentals', community: 'Computer Science' },
  { code: 'CSCI 380', title: 'Network Security', community: 'Computer Science' },
  { code: 'CSCI 401', title: 'Senior Project I', community: 'Computer Science' },
  { code: 'CSCI 402', title: 'Senior Project II', community: 'Computer Science' },

  // Graduate Computer Science / Cybersecurity-style courses
  { code: 'CSCI 507', title: 'Data Structures', community: 'Computer Science' },
  { code: 'CSCI 508', title: 'Compiler Design', community: 'Computer Science' },
  { code: 'CSCI 509', title: 'Operating Systems', community: 'Computer Science' },
  { code: 'CSCI 606', title: 'Distributed Systems', community: 'Computer Science' },
  { code: 'CSCI 620', title: 'Operating System Security', community: 'Cybersecurity' },
  { code: 'CSCI 790', title: 'Advanced Software Engineering', community: 'Computer Science' },

  // Computer Technology / IT
  { code: 'CTEC 101', title: 'Introduction to Computer Technology', community: 'Information Technology' },
  { code: 'CTEC 201', title: 'Computer Hardware Fundamentals', community: 'Information Technology' },
  { code: 'CTEC 301', title: 'Systems Integration', community: 'Information Technology' },
  { code: 'CTEC 401', title: 'Advanced Computer Technology', community: 'Information Technology' },
  { code: 'ITEC 205', title: 'Introduction to Information Technology', community: 'Information Technology' },
  { code: 'ITEC 290', title: 'Database Systems', community: 'Information Technology' },
  { code: 'ITEC 305', title: 'Internet Programming I', community: 'Information Technology' },
  { code: 'ITEC 315', title: 'Internet Programming II', community: 'Information Technology' },
  { code: 'ITEC 325', title: 'Database Applications', community: 'Information Technology' },
  { code: 'ITEC 405', title: 'Networked Information Systems', community: 'Information Technology' },
  { code: 'ITEC 410', title: 'Web Application Development', community: 'Information Technology' },

  // Construction Engineering
  { code: 'CENG 101', title: 'Introduction to Construction Engineering', community: 'Engineering' },
  { code: 'CENG 201', title: 'Construction Materials', community: 'Engineering' },
  { code: 'CENG 301', title: 'Structural Systems', community: 'Engineering' },
  { code: 'CENG 401', title: 'Construction Project Management', community: 'Engineering' },

  // Criminal Justice
  { code: 'CRIM 101', title: 'Introduction to Criminal Justice', community: 'Criminal Justice' },
  { code: 'CRIM 201', title: 'Criminology', community: 'Criminal Justice' },
  { code: 'CRIM 301', title: 'Law and Society', community: 'Criminal Justice' },

  // Data / Data Science
  { code: 'DATA 101', title: 'Introduction to Data Literacy', community: 'Data Science' },
  { code: 'DATA 201', title: 'Data Visualization', community: 'Data Science' },
  { code: 'DATA 301', title: 'Applied Data Modeling', community: 'Data Science' },
  { code: 'DTSC 101', title: 'Introduction to Data Science', community: 'Data Science' },
  { code: 'DTSC 201', title: 'Probability and Statistics for Data Science', community: 'Data Science' },
  { code: 'DTSC 301', title: 'Machine Learning Foundations', community: 'Data Science' },

  // Economics / Finance / Management / Marketing
  { code: 'ECON 201', title: 'Microeconomics', community: 'Economics' },
  { code: 'ECON 202', title: 'Macroeconomics', community: 'Economics' },
  { code: 'ECON 301', title: 'International Economics', community: 'Economics' },
  { code: 'ECON 401', title: 'Managerial Economics', community: 'Economics' },
  { code: 'FINC 201', title: 'Principles of Finance', community: 'Finance' },
  { code: 'FINC 301', title: 'Corporate Finance', community: 'Finance' },
  { code: 'MGMT 101', title: 'Principles of Management', community: 'Management' },
  { code: 'MGMT 201', title: 'Organizational Behavior', community: 'Management' },
  { code: 'MGMT 301', title: 'Operations Management', community: 'Management' },
  { code: 'MGMT 401', title: 'Leadership and Strategy', community: 'Management' },
  { code: 'MRKT 101', title: 'Principles of Marketing', community: 'Marketing' },
  { code: 'MRKT 201', title: 'Consumer Behavior', community: 'Marketing' },
  { code: 'MRKT 301', title: 'Digital Marketing', community: 'Marketing' },
  { code: 'MRKT 401', title: 'Marketing Strategy', community: 'Marketing' },

  // Electrical Engineering
  { code: 'EENG 201', title: 'Circuit Analysis I', community: 'Electrical Engineering' },
  { code: 'EENG 202', title: 'Circuit Analysis II', community: 'Electrical Engineering' },
  { code: 'EENG 281', title: 'Electrical Circuits II', community: 'Electrical Engineering' },
  { code: 'EENG 341', title: 'Control Systems', community: 'Electrical Engineering' },
  { code: 'EENG 371', title: 'Signals and Systems', community: 'Electrical Engineering' },
  { code: 'EENG 401', title: 'Electrical Engineering Design I', community: 'Electrical Engineering' },
  { code: 'EENG 402', title: 'Electrical Engineering Design II', community: 'Electrical Engineering' },

  // Engineering Technology / General Engineering
  { code: 'ETEC 201', title: 'Electronics I', community: 'Engineering Technology' },
  { code: 'ETEC 202', title: 'Electronics II', community: 'Engineering Technology' },
  { code: 'ETEC 301', title: 'Digital Systems', community: 'Engineering Technology' },
  { code: 'ETEC 401', title: 'Advanced Engineering Technology', community: 'Engineering Technology' },
  { code: 'ETCS 105', title: 'Introduction to Engineering and Technology', community: 'Engineering' },
  { code: 'ETCS 108', title: 'Computer, Internet and Society', community: 'Engineering' },
  { code: 'ETCS 201', title: 'Technical Computing', community: 'Engineering' },
  { code: 'ETCS 301', title: 'Applied Technical Systems', community: 'Engineering' },
  { code: 'ENGR 101', title: 'Engineering Design', community: 'Engineering' },
  { code: 'ENGR 201', title: 'Engineering Mechanics', community: 'Engineering' },
  { code: 'ENGR 301', title: 'Engineering Analysis', community: 'Engineering' },
  { code: 'ENGR 401', title: 'Senior Engineering Design', community: 'Engineering' },

  // Exercise / Health Science
  { code: 'EXSC 101', title: 'Introduction to Exercise Science', community: 'Health Science' },
  { code: 'EXSC 201', title: 'Kinesiology', community: 'Health Science' },
  { code: 'HSCI 101', title: 'Introduction to Health Sciences', community: 'Health Science' },
  { code: 'HSCI 201', title: 'Public Health Foundations', community: 'Health Science' },

  // Film / Media
  { code: 'FILM 101', title: 'Fundamentals of Film Production', community: 'Film & Media' },
  { code: 'DGIM 101', title: 'Digital Media Foundations', community: 'Digital Media' },
  { code: 'JOUR 101', title: 'Introduction to Journalism', community: 'Journalism' },
  { code: 'PREL 101', title: 'Introduction to Public Relations', community: 'Public Relations' },

  // English / Writing
{ code: 'ENG 101', title: 'Writing I', community: 'English' },
{ code: 'ENG 102', title: 'Writing II', community: 'English' },
{ code: 'ENG 110', title: 'College Writing', community: 'English' },
{ code: 'FCWR 101', title: 'Foundations of Writing', community: 'English' },
{ code: 'WRIT 101', title: 'Foundations of Writing', community: 'English' },
{ code: 'WRIT 151', title: 'Writing and Rhetoric', community: 'English' },
{ code: 'WRIT 201', title: 'Professional Writing', community: 'English' },
{ code: 'WRIT 301', title: 'Advanced Composition', community: 'English' },
{ code: 'LITR 101', title: 'Introduction to Literature', community: 'English' },
{ code: 'ICLT 101', title: 'Literature Core', community: 'English' },

  // Industrial / Mechanical Engineering
  { code: 'IENG 201', title: 'Introduction to Industrial Engineering', community: 'Industrial Engineering' },
  { code: 'IENG 301', title: 'Operations Research', community: 'Industrial Engineering' },
  { code: 'IENG 401', title: 'Engineering Management', community: 'Industrial Engineering' },
  { code: 'MENG 201', title: 'Engineering Mechanics', community: 'Mechanical Engineering' },
  { code: 'MENG 301', title: 'Thermodynamics', community: 'Mechanical Engineering' },
  { code: 'MENG 302', title: 'Fluid Mechanics', community: 'Mechanical Engineering' },
  { code: 'MENG 401', title: 'Mechanical Engineering Design I', community: 'Mechanical Engineering' },
  { code: 'MENG 402', title: 'Mechanical Engineering Design II', community: 'Mechanical Engineering' },

  // Mathematics
  { code: 'MATH 136', title: 'College Algebra', community: 'Mathematics' },
  { code: 'MATH 141', title: 'Precalculus', community: 'Mathematics' },
  { code: 'MATH 150', title: 'Precalculus Review', community: 'Mathematics' },
  { code: 'MATH 151', title: 'Fundamentals of Calculus', community: 'Mathematics' },
  { code: 'MATH 170', title: 'Calculus I', community: 'Mathematics' },
  { code: 'MATH 180', title: 'Calculus II', community: 'Mathematics' },
  { code: 'MATH 250', title: 'Statistics', community: 'Mathematics' },
  { code: 'MATH 270', title: 'Linear Algebra', community: 'Mathematics' },
  { code: 'MATH 280', title: 'Differential Equations', community: 'Mathematics' },
  { code: 'MATH 300', title: 'Mathematical Methods for Data Science', community: 'Mathematics' },
  { code: 'MATH 301', title: 'Advanced Calculus', community: 'Mathematics' },

  // Nursing / Nutrition
  { code: 'NURS 101', title: 'Introduction to Nursing', community: 'Nursing' },
  { code: 'NURS 201', title: 'Foundations of Nursing Practice', community: 'Nursing' },
  { code: 'NTSI 101', title: 'Introduction to Nutrition Science', community: 'Health Science' },

  // NYIT / University
  { code: 'NYIT 110', title: 'Introduction to Computer Conferencing', community: 'NYIT' },
  { code: 'NYIT 120', title: 'Information Literacy', community: 'NYIT' },
  { code: 'NYIT 150', title: 'Portfolio Development', community: 'NYIT' },
  { code: 'NYIT 310', title: 'Global Middle East', community: 'NYIT' },
  { code: 'NYIT 401', title: 'Special Topics I', community: 'NYIT' },
  { code: 'NYIT 402', title: 'Special Topics II', community: 'NYIT' },

  // Philosophy / Ethics
  { code: 'PHIL 101', title: 'Introduction to Philosophy', community: 'Philosophy' },
  { code: 'PHIL 201', title: 'Ethics', community: 'Philosophy' },
  { code: 'ICPH 101', title: 'Philosophy and Ethics Core', community: 'Philosophy' },

  // Physics
  { code: 'PHYS 130', title: 'Introductory Physics', community: 'Physics' },
  { code: 'PHYS 150', title: 'Introductory Physics II', community: 'Physics' },
  { code: 'PHYS 180', title: 'Physics I', community: 'Physics' },
  { code: 'PHYS 185', title: 'Physics Lab', community: 'Physics' },
  { code: 'PHYS 280', title: 'Physics II', community: 'Physics' },
  { code: 'PHYS 285', title: 'Physics II Lab', community: 'Physics' },
  { code: 'PHYS 301', title: 'Modern Physics', community: 'Physics' },

  // Psychology / Sociology / Social Science
  { code: 'PSYC 101', title: 'Introduction to Psychology', community: 'Psychology' },
  { code: 'PSYC 201', title: 'Developmental Psychology', community: 'Psychology' },
  { code: 'PSYC 301', title: 'Cognitive Psychology', community: 'Psychology' },
  { code: 'PSYC 370', title: 'Introductory Research Methods for Behavioral Sciences', community: 'Psychology' },
  { code: 'PSYC 401', title: 'Advanced Psychology Seminar', community: 'Psychology' },
  { code: 'SOCI 101', title: 'Introduction to Sociology', community: 'Sociology' },
  { code: 'SOCI 201', title: 'Social Problems', community: 'Sociology' },
  { code: 'SOCI 301', title: 'Cultural Studies', community: 'Sociology' },
  { code: 'ICSS 101', title: 'Social Science Core', community: 'Social Science' },

  // Speech / Theatre / Urban
  { code: 'SPCH 101', title: 'Speech Communication', community: 'Speech' },
  { code: 'THEA 101', title: 'Theatre Production', community: 'Theatre' },
  { code: 'URBA 101', title: 'Urban Administration', community: 'Urban Studies' },
];

export const courseCodes = courseRecords.map((course) => course.code);

export const courses = courseRecords.map((course) => {
  if (course.code === 'Campus General') {
    return 'Campus General';
  }

  return `${course.code} - ${course.title}`;
});

export const courseLabels = courses;

export const communities = Array.from(
  new Set(courseRecords.map((course) => course.community))
).sort();

export function normalizeCourseCode(courseInput: string) {
  if (courseInput === 'Campus General') {
    return 'Campus General';
  }

  return courseInput.split(' - ')[0].trim();
}

export function getCourseRecord(courseInput: string) {
  const normalizedCode = normalizeCourseCode(courseInput);

  return courseRecords.find((course) => course.code === normalizedCode);
}

export function getCourseTitle(courseInput: string) {
  const found = getCourseRecord(courseInput);
  return found?.title || courseInput;
}

export function getCourseCommunity(courseInput: string) {
  const found = getCourseRecord(courseInput);
  return found?.community || 'General';
}

export function getCourseLabel(courseInput: string) {
  const found = getCourseRecord(courseInput);

  if (!found) {
    return courseInput;
  }

  if (found.code === 'Campus General') {
    return 'Campus General';
  }

  return `${found.code} - ${found.title}`;
}

// Deterministic activity generator.
// This makes the app look active without manually writing activity numbers for every class.
export function getCourseActivity(courseInput: string): CourseActivity {
  const normalizedCode = normalizeCourseCode(courseInput);

  if (normalizedCode === 'Campus General') {
    return {
      activeStudents: 248,
      postsThisWeek: 64,
      discussions: 31,
      lastActive: '5 min ago',
      trending: true,
    };
  }

  const seed = normalizedCode
    .split('')
    .reduce((total, char) => total + char.charCodeAt(0), 0);

  const activeStudents = 18 + (seed % 86);
  const postsThisWeek = 3 + (seed % 22);
  const discussions = 2 + (seed % 14);

  const activityTimes = [
    '8 min ago',
    '14 min ago',
    '26 min ago',
    '41 min ago',
    '1 hr ago',
    '2 hrs ago',
    'Today',
  ];

  return {
    activeStudents,
    postsThisWeek,
    discussions,
    lastActive: activityTimes[seed % activityTimes.length],
    trending: postsThisWeek >= 15 || activeStudents >= 70,
  };
}

export function searchCourses(query: string) {
  const search = query.trim().toLowerCase();

  if (!search) {
    return courseRecords;
  }

  return courseRecords.filter((course) => {
    const haystack = `${course.code} ${course.title} ${course.community}`.toLowerCase();
    return haystack.includes(search);
  });
}