function addBook() {
    // Retrieve input values
    var title = document.getElementById("title").value;
    var author = document.getElementById("author").value;
    var year = document.getElementById("year").value;

    // Create a new list item
    var listItem = document.createElement("li");
    listItem.className = "list-group-item  d-flex justify-content-between align-items-center ";
    listItem.innerHTML = "<strong>" + title + "</strong> by " + author + "," + " year: " + year + " ";

    // Add a remove button
    var removeButton = document.createElement("button");
    removeButton.className = "btn btn-danger remove-button";
    removeButton.innerHTML = "Remove";
    removeButton.onclick = function () {
        listItem.remove();
    };

    listItem.appendChild(removeButton);

    // Add the new list item to the book list
    document.getElementById("bookList").appendChild(listItem);

    // Clear the input fields
    document.getElementById("title").value = "";
    document.getElementById("author").value = "";
    document.getElementById("year").value = "";
}
