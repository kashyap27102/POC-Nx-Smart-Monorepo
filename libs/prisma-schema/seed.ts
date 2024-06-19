/*
    This file is made for seeding the testing data
*/

import { PrismaClient } from '@prisma/client';
const prismaClient = new PrismaClient();

async function main() {
  const course = await prismaClient.course.createMany({
    data: [
      {
        title: 'Introduction to JavaScript',
        category: 'Programming',
        progress: 80, // In percentage
      },
      {
        title: 'Advanced CSS Techniques',
        category: 'Web Design',
        progress: 50, // In percentage
      },
      {
        title: 'Data Structures and Algorithms',
        category: 'Computer Science',
        progress: 70, // In percentage
      },
      {
        title: 'Machine Learning Basics',
        category: 'Artificial Intelligence',
        progress: 40, // In percentage
      },
      {
        title: 'Introduction to Databases',
        category: 'Database Management',
        progress: 90, // In percentage
      },
      {
        title: 'Python for Data Science',
        category: 'Programming',
        progress: 60, // In percentage
      },
      {
        title: 'Responsive Web Design',
        category: 'Web Design',
        progress: 45, // In percentage
      },
      {
        title: 'Operating Systems Concepts',
        category: 'Computer Science',
        progress: 75, // In percentage
      },
      {
        title: 'Deep Learning with TensorFlow',
        category: 'Artificial Intelligence',
        progress: 30, // In percentage
      },
      {
        title: 'SQL and Database Design',
        category: 'Database Management',
        progress: 85, // In percentage
      },
    ],
  });
  console.log(`${course.count} Courses are created successfully.`);

  const skill = await prismaClient.skill.createMany({
    data: [
      {
        name: 'JavaScript',
        category: 'Programming',
        level: 'Advanced',
        status: 'In Progress',
      },
      {
        name: 'CSS',
        category: 'Web Design',
        level: 'Intermediate',
        status: 'In Progress',
      },
      {
        name: 'Python',
        category: 'Programming',
        level: 'Advanced',
        status: 'In Progress',
      },
      {
        name: 'Machine Learning',
        category: 'Data Science',
        level: 'Intermediate',
        status: 'Yet to Start',
      },
      {
        name: 'SQL',
        category: 'Database Management',
        level: 'Beginner',
        status: 'Yet to Start',
      },
      {
        name: 'HTML',
        category: 'Web Design',
        level: 'Advanced',
        status: 'Completed',
      },
      {
        name: 'Data Analysis',
        category: 'Data Science',
        level: 'Advanced',
        status: 'In Progress',
      },
      {
        name: 'React',
        category: 'Programming',
        level: 'Intermediate',
        status: 'Yet to Start',
      },
      {
        name: 'Node.js',
        category: 'Programming',
        level: 'Intermediate',
        status: 'In Progress',
      },
      {
        name: 'Project Management',
        category: 'Management',
        level: 'Beginner',
        status: 'Completed',
      },
    ],
  });
  console.log(`${skill.count} Skills are created successfully.`);

  const softskill = await prismaClient.softSkill.createMany({
    data: [
      {
        name: 'English As Second Language',
        category: 'Communication',
        level: 'Advanced',
        status: 'In Progress',
      },
      {
        name: 'Client Communication',
        category: 'Communication',
        level: 'Intermediate',
        status: 'Ready to evaluate',
      },
      {
        name: 'Critical Thinking & Ownership',
        category: 'Communication',
        level: 'Advanced',
        status: 'Ready to evaluate',
      },
      {
        name: 'Public Speaking',
        category: 'Communication',
        level: 'Advanced',
        status: 'In Progress',
      },
      {
        name: 'Conflict Resolution',
        category: 'Communication',
        level: 'Intermediate',
        status: 'Yet to Start',
      },
      {
        name: 'Team Collaboration',
        category: 'Communication',
        level: 'Advanced',
        status: 'In Progress',
      },
      {
        name: 'Active Listening',
        category: 'Communication',
        level: 'Beginner',
        status: 'Yet to Start',
      },
      {
        name: 'Persuasion',
        category: 'Communication',
        level: 'Intermediate',
        status: 'In Progress',
      },
      {
        name: 'Writing Skills',
        category: 'Communication',
        level: 'Advanced',
        status: 'Completed',
      },
      {
        name: 'Negotiation',
        category: 'Communication',
        level: 'Intermediate',
        status: 'Yet to Start',
      },
    ],
  });
  console.log(`${softskill.count} Skills are created successfully.`);
}

main()
  .then(async () => {
    await prismaClient.$disconnect();
  })
  .catch(async (e) => {
    console.log(e);
    await prismaClient.$disconnect();
    process.exit(1);
  });
