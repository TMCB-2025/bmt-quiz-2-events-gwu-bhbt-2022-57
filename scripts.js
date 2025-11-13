// Get references to the DOM elements we need
const taskInput = document.getElementById('taskInput');
const addButton = document.getElementById('addButton');
const taskList = document.getElementById('taskList');

// Function to add a new task
function addTask() {
    // 1. Get the trimmed value from the input field
    const taskText = taskInput.value.trim();

    // 2. Check if the input is not empty
    if (taskText === "") {
        alert("Please enter a task!");
        return; // Exit the function if input is empty
    }

    // 3. Create a new list item (<li>) for the task
    const listItem = document.createElement('li');
    
    // Set the content of the list item
    listItem.innerHTML = `
        <span>${taskText}</span>
        <button class="delete-btn">Delete</button>
    `;

    // 4. Attach the delete functionality to the new button
    const deleteButton = listItem.querySelector('.delete-btn');
    deleteButton.addEventListener('click', function() {
        // Remove the parent list item (the task) when clicked
        taskList.removeChild(listItem);
    });

    // 5. Add the new list item to the main unordered list (<ul>)
    taskList.appendChild(listItem);

    // 6. Clear the input field after adding the task
    taskInput.value = "";
}

// Event Listener: Add task when the "Add Task" button is clicked
addButton.addEventListener('click', addTask);

// Event Listener: Add task when the "Enter" key is pressed in the input field
taskInput.addEventListener('keypress', function(event) {
    // KeyCode 13 is the Enter key
    if (event.key === 'Enter') {
        addTask();
    }
});