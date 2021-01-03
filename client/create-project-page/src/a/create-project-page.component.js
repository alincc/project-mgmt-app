import React, { useReducer, useEffect } from "react";

export default function CreateProjectPage(props) {
  return (
    <div>
      <header>
        <h1> This is from create-project-page.component.js! </h1>
      </header>
      <ul>
        <li>Be able to assign developers to work on a project.</li>
        <li>
          Display a list of all developers, along with their availability
          status and when they will be available so that they can be added to
          the project team.
        </li>
        <li>Add a deadline and any required milestones.</li>
        <li>Be able to set a budget.</li>
        <li>Be able to specify the project requirements.</li>
        <li>
          Be able to assign a project manager to work on this new project.
        </li>
        <li>
          Display a list of all project managers, along with their
          availability status and when they will be available.
        </li>
      </ul>
    </div>
  );
}