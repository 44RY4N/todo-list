import { addProject } from "./addProject.js";
import { state } from "./projectHandler.js";

// Creates project structure and

class Project {
  static copy = 1;
  static id = 1;
  constructor(title, desc) {
    this.title = title || `Project#${Project.copy++}`;
    this.desc = desc || "no description";
    this.items = [];
    this.id = Project.id++;
  }
  showProject() {
    projectShower(this);
  }
  add(obj) {
    this.items.push(obj);
  }
  toJSON(){
    return {
      title: this.title,desc: this.desc,id: this.id,
     todos: this.items.map(item => item.toJSON())
    };
  }
}



function projectShower(project) {
  console.log(`Project Title => ${project.title}`);
  console.log(`Project desc => ${project.desc}`);
  console.log(`Project items`);
  for (const item of project.items) {
    console.log(item.title);
  }
}
function createProject(title, desc) {
  let newProject = new Project(title, desc);
  state.allProjects.push(newProject);
  addProject(newProject);
  return newProject;
}

createProject.setIdCounter = function(counter) {
  Project.id = Math.max(Project.id, counter);
};

export { createProject };
