import {createProject} from "./createProject.js";
import { createTodo } from "./createTodo.js";
const STORAGE_KEY = 'todoList';

const Storage = {
    save(projects) {
        try {
            const data = projects.map(project => project.toJSON());
            localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
            return true;
        } catch (error) {
            console.error('Error saving to localStorage:', error);
            return false;
        }
    },

    load() {
        try {
            const data = localStorage.getItem(STORAGE_KEY);
            if (!data) {
                return [];
            }

            return JSON.parse(data).map(projectData => {
                const project = createProject(projectData.title, projectData.desc);
                project.id = projectData.id;
                
                // Reconstruct todos
                projectData.todos.forEach(todoData => {
                    const todo = createTodo(
                        todoData.title,
                        todoData.description,
                        todoData.duedate,
                        todoData.priority,
                        todoData.checked,
                    );
                    todo.id = todoData.id;
                    project.add(todo);
                });

                return project;
            });
        } catch (error) {
            console.error('Error loading from localStorage:', error);
            return [];
        }
    },

    clear() {
        try {
            localStorage.removeItem(STORAGE_KEY);
            return true;
        } catch (error) {
            console.error('Error clearing localStorage:', error);
            return false;
        }
    }
};

export {Storage}; 