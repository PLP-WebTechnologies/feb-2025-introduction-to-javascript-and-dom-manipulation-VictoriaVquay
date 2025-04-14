// Change text content dynamically
document.getElementById("changeTextBtn").addEventListener("click", function () {
    document.getElementById("description").textContent = "The text has been changed!";
  });
  
  // Modify CSS styles via JavaScript
  document.getElementById("changeStyleBtn").addEventListener("click", function () {
    const title = document.getElementById("main-title");
    title.style.color = "purple";
    title.style.backgroundColor = "lightyellow";
    title.style.padding = "10px";
    title.style.fontSize = "2.5rem";
  });
  
  // Add or remove an element when a button is clicked
  document.getElementById("toggleElementBtn").addEventListener("click", function () {
    const container = document.getElementById("container");
    const existingBox = document.querySelector(".box");
  
    if (existingBox) {
      container.removeChild(existingBox);
    } else {
      const newBox = document.createElement("div");
      newBox.classList.add("box");
      container.appendChild(newBox);
    }
  });
  // Handle form submission with validation
document.getElementById("contactForm").addEventListener("submit", function (e) {
    e.preventDefault();
  
    const nameInput = document.getElementById("name");
    const messageInput = document.getElementById("message");
    const displayArea = document.getElementById("submittedData");
  
    const name = nameInput.value.trim();
    const message = messageInput.value.trim();
  
    // Clear previous messages
    displayArea.innerHTML = "";
  
    // Validation checks
    if (name.length < 3) {
      displayArea.innerHTML = `<p style="color: red;">Name must be at least 3 characters long.</p>`;
      return;
    }
  
    if (message.length < 10) {
      displayArea.innerHTML = `<p style="color: red;">Message must be at least 10 characters long.</p>`;
      return;
    }
  
    // Display valid data
    displayArea.innerHTML = `
      <h3>Thank you, ${name}!</h3>
      <p><strong>Your Message:</strong> ${message}</p>
    `;
  
    this.reset();
  });
// Background color changer
const bgButton = document.getElementById("changeBgBtn");
const colors = ["color-one", "color-two", "color-three", "color-four"];
let colorIndex = 0;

bgButton.addEventListener("click", () => {
  // Remove previous class
  document.body.classList.remove(colors[colorIndex]);

  // Move to next color
  colorIndex = (colorIndex + 1) % colors.length;

  // Add new class
  document.body.classList.add(colors[colorIndex]);
});
  