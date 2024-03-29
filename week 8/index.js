class Task {
    constructor(id, name) {
      this.id = id;
      this.name = name;
    }
  }
  
  class TaskManager {
    constructor() {
      this.tasks = [];
    }
  //this is were it will be creating a task
    createTask(id, name) {
      const newTask = new Task(id, name);
      this.tasks.push(newTask);
      console.log(`Task "${name}" created with ID: ${id}`);
    }
  // this is where you view the tasks
    viewTasks() {
      console.log('Current Tasks:');
      this.tasks.forEach(task => console.log(`ID: ${task.id} - Name: ${task.name}`));
    }
  //Deleted tasks
    deleteTask(id) {
      const index = this.tasks.findIndex(task => task.id === id);
      if (index !== -1) {
        const deletedTask = this.tasks.splice(index, 1)[0];
        console.log(`Task "${deletedTask.name}" with ID ${deletedTask.id} deleted.`);
      } else {
        console.log(`Task with ID ${id} not found.`);
      }
    }
  }
  
  // Example usage:
  const taskManager = new TaskManager();
  
  taskManager.createTask(1, 'Complete assignment');
  taskManager.createTask(2, 'Send email');
  taskManager.viewTasks();
  
  taskManager.deleteTask(1);
  taskManager.viewTasks();