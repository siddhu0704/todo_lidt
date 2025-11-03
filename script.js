function add() {
  const taskInput = document.getElementById("inp");
  const taskValue = taskInput.value.trim();
  const updateInput = document.getElementById("updatetx");
  const updateButton = document.getElementById("btn4");
  const list = document.getElementById("list");

  if (taskValue === "") {
    alert("Please enter a task before adding!");
    return;
  }

  // Create list item
  const li = document.createElement("li");
  li.className =
    "list-group-item d-flex align-items-center justify-content-between mb-2 shadow-sm rounded";

  // Create text element
  const para = document.createElement("p");
  para.className = "flex-grow-1 mb-0";
  para.innerText = taskValue;

  // Create delete button
  const delBtn = document.createElement("button");
  delBtn.innerText = "Delete";
  delBtn.className = "btn btn-danger btn-sm me-2";
  delBtn.addEventListener("click", () => {
    list.removeChild(li);
  });

  // Create edit button
  const editBtn = document.createElement("button");
  editBtn.innerText = "Edit";
  editBtn.className = "btn btn-primary btn-sm";
  editBtn.setAttribute("data-bs-toggle", "modal");
  editBtn.setAttribute("data-bs-target", "#exampleModal");

  editBtn.addEventListener("click", () => {
    updateInput.value = para.innerText;

    // Temporarily attach an update handler for this specific task
    updateButton.onclick = () => {
      para.innerText = updateInput.value.trim() || para.innerText;
      const modal = bootstrap.Modal.getInstance(
        document.getElementById("exampleModal")
      );
      modal.hide();
    };
  });

  // Append elements
  li.appendChild(para);
  li.appendChild(delBtn);
  li.appendChild(editBtn);
  list.appendChild(li);

  // Clear input field
  taskInput.value = "";
}
