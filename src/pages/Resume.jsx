import React from 'react';
import { studies, experiences } from '../data/resume';

function Resume() {
  return (
    <div>
      <h1>Currículum</h1>

      <h2>Experiencia Laboral</h2>
      {experiences.map((exp) => (
        <div key={exp.id}>
          <h3>{exp.title}</h3>
          <p>{exp.company} — {exp.date}</p>
        </div>
      ))}

      <h2>Educación</h2>
      {studies.map((study) => (
        <div key={study.id}>
          <h3>{study.title}</h3>
          <p>{study.institution} — {study.date}</p>
        </div>
      ))}
    </div>
  );
}

export default Resume;