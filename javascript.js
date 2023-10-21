
// JavaScript for multi-page setup with mock-up posts

// Function for Login Page
function login() {
  const username = document.getElementById("username").value;
  if (username) {
    localStorage.setItem("currentUser", username);
    window.location.href = "home.html";
  }
}

// Function for Home Page
let posts = [];
function createPost() {
  const postContent = document.getElementById("newPost").value;
  if (postContent) {
    const username = localStorage.getItem("currentUser");
    posts.push({username: username, content: postContent});
    displayPosts();
  }
}

function displayPosts() {
  const allPosts = document.getElementById("allPosts");
  allPosts.innerHTML = "";
  posts.forEach(post => {
    const postElement = document.createElement("div");
    postElement.className = "post";
    postElement.innerHTML = `<strong>${post.username}</strong>: ${post.content}`;
    allPosts.appendChild(postElement);
  });
}

// Function for Messenger Page
function sendMessage() {
  const newMessage = document.getElementById("newMessage").value;
  if (newMessage) {
    // Simulated: normally this would update a chat history
    alert(`Sending message: ${newMessage}`);
  }
}

// Initialize user if they are logged in
if (localStorage.getItem("currentUser")) {
  const usernameElement = document.getElementById("profileUsername");
  if (usernameElement) {
    usernameElement.innerText = localStorage.getItem("currentUser");
  }
}
