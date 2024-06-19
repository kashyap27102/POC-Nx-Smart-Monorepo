/**
 * This is not a production server yet!
 * This is only a minimal backend to get started.
 */

import express from 'express';
import * as path from 'path';
import cors from 'cors';
import { prismaClient } from '@simform/db';

const app = express();

app.use(cors());
app.use('/assets', express.static(path.join(__dirname, 'assets')));

app.get('/api', (req, res) => {
  res.send({ message: 'Welcome to simform-server!' });
});

app.get('/skills', async (req, res) => {
  try {
    const skills = await prismaClient.skill.findMany();
    res.send({
      message: 'skills are fetched successfully',
      data: skills,
    });
  } catch (error) {
    console.log(error);
  }
});

app.get('/soft-skills', async (req, res) => {
  try {
    const softSkills = await prismaClient.softSkill.findMany();
    res.send({
      message: 'soft skills are fetched successfully',
      data: softSkills,
    });
  } catch (error) {
    console.log(error);
  }
});

app.get('/courses', async (req, res) => {
  try {
    const courses = await prismaClient.course.findMany();
    res.send({
      message: 'Courses are fetched successfully',
      data: courses,
    });
  } catch (error) {
    console.log(error);
  }
});

const port = process.env.PORT || 3333;
const server = app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}/api`);
});
server.on('error', console.error);
