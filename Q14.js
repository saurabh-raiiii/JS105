let arr = ["task1", "Task2", "Task3", "Task4", "Task5"];

console.log("Initial Task :", arr);
arr.shift();
arr.unshift("priorityTask1")
arr.unshift("priorityTask2")
console.log("updated task list:", arr);