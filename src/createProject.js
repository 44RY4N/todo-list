import {addProject} from "./addProject.js";
import { state } from "./projectHandler.js";

class Project {
    static copy = 1;
    static id = 1;
    constructor(title,desc){
        this.title = title || `Project#${Project.copy++}`;
        this.desc = desc || "no description";
        this.items = [];
        this.id = Project.id++;
    }
    showProject(){
        projectShower(this);
    }
    add(obj){
        this.items.push(obj);
    }
}

function createProject(title,desc){
    let newProject = new Project(title,desc);
    addProject(newProject);
    state.allProjects.push(newProject);
    return newProject;
}

function projectShower(project){
    console.log(`Project Title => ${project.title}`);
    console.log(`Project desc => ${project.desc}`);
    console.log(`Project items`);
    for(const item of project.items){
        console.log(item.title);
    }
}

export {createProject};

