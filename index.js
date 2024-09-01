// Your code goes here

document.addEventListener("DOMContentLoaded", function() {
    console.log("The DOM has loaded");

    // Target the paragraph element with id="text"
    let id = document.getElementById('text');

    // Log the element to confirm it's correctly targeted
    console.log(id);

    // Replace the text content
    id.textContent = "This is really cool!";
});
