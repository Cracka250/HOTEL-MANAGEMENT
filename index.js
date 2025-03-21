  // CHECKED PROPERTY (property that determines the chacked state of HTML checkbox or radio button)

  document.addEventListener("DOMContentLoaded", function() {
    const commentInput = document.getElementById("comment");
    const submitBtn = document.getElementById("submit-btn");
    const resetBtn = document.getElementById("reset-btn");
    const commentSection = document.getElementById("comment-section");
  
    // Submit Button Functionality
    submitBtn.addEventListener("click", function() {
        const commentText = commentInput.value.trim();
        if (commentText !== "") {
            const newComment = document.createElement("p");
            newComment.textContent = commentText;
            commentSection.appendChild(newComment);
            commentInput.value = ""; // Clear input after submission
        } else {
            alert("Please enter a comment before submitting!");
        }
    });
     // Reset Button Functionality
  resetBtn.addEventListener("click", function() {
    commentInput.value = ""; // Clear input field
});
});

// Function to handle form submission (Sign Up)
document.getElementById("myform").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent page refresh
  
    // Get user inputs
    let username = document.getElementById("user-name").value;
    let password = document.getElementById("password").value;
    let email = document.getElementById("email").value;
    let phone = document.getElementById("phone").value;
    let signUpDate = document.getElementById("date").value;
  
    // Create user object and save to localStorage
    let user = { username, password, email, phone, signUpDate };
    localStorage.setItem("loggedInUser", JSON.stringify(user));
  
    alert("Sign-up successful!");
    document.getElementById("myform").reset();
  
    // Show logout button and update login status
    checkLoginStatus();
  });
  
  // Function to check login status and control the logout button
  function checkLoginStatus() {
    const logoutBtn = document.getElementById("logout-btn");
    const loggedInUser = localStorage.getItem("loggedInUser");
  
    if (loggedInUser) {
        logoutBtn.style.display = "block"; // Show logout button if logged in
    } else {
        logoutBtn.style.display = "none"; // Hide logout button if not logged in
    }
  }
  
  // Logout Functionality
  document.getElementById("logout-btn").addEventListener("click", function() {
    localStorage.removeItem("loggedInUser"); // Remove user from localStorage
    alert("You have successfully logged out.");
    checkLoginStatus(); // Hide logout button after logout
  });
  // Check login status on page load
  window.onload = checkLoginStatus;

// NEW BOOKING AND VIEWING BY ADMIN

// Booking Functionality
document.getElementById("book-room-btn").addEventListener("click", function() {
    let name = document.getElementById("name").value;
    let roomType = document.getElementById("room-type").value;
    
    if (name === "") {
        alert("Please enter your name.");
        return;
    }
  
    let booking = { name, roomType };
    let bookings = JSON.parse(localStorage.getItem("bookings")) || [];
    bookings.push(booking);
    localStorage.setItem("bookings", JSON.stringify(bookings));
  
    alert(`Room booked successfully for ${name} in ${roomType}.`);
  });
  
  // Food Ordering Functionality
  document.getElementById("order-food-btn").addEventListener("click", function() {
    let foodItem = document.getElementById("food").value;
    let quantity = document.getElementById("quantity").value;
  
    if (quantity < 1) {
        alert("Please enter a valid quantity.");
        return;
    }
  
    let order = { foodItem, quantity };
    let orders = JSON.parse(localStorage.getItem("foodOrders")) || [];
    orders.push(order);
    localStorage.setItem("foodOrders", JSON.stringify(orders));
  
    alert(`Order placed: ${quantity} x ${foodItem}`);
  });
  
  // Admin - View Room Bookings
  function viewBookings() {
    let bookings = JSON.parse(localStorage.getItem("bookings")) || [];
    let display = "<h3>Room Bookings</h3><ul>";
  
    if (bookings.length === 0) {
        display += "<p>No bookings available.</p>";
    } else {
        bookings.forEach((b, index) => {
            display += `<li>
                ${b.name} - ${b.roomType}
                <button onclick="deleteBooking(${index})">Delete</button>
            </li>`;
        });
    }
  
    display += "</ul>";
    document.getElementById("adminDisplay").innerHTML = display;
  }
  
  function deleteBooking(index) {
    let bookings = JSON.parse(localStorage.getItem("bookings")) || [];
    bookings.splice(index, 1);
    localStorage.setItem("bookings", JSON.stringify(bookings));
    viewBookings();
  }
  
  function viewOrders() {
    let orders = JSON.parse(localStorage.getItem("foodOrders")) || [];
    let display = "<h3>Food Orders</h3><ul>";
  
    if (!orders || orders.length === 0) {
        display += "<p>No food orders available.</p>";
    } else {
        orders.forEach((order, index) => {
            display += `<li>
                ${order.quantity} x ${order.foodItem}
                <button onclick="deleteOrder(${index})">Delete</button>
            </li>`;
        });
    }
  
    display += "</ul>";
    document.getElementById("adminDisplay").innerHTML = display;
  }
  
  function deleteOrder(index) {
    let orders = JSON.parse(localStorage.getItem("foodOrders")) || [];
  
    if (orders.length > index) {
        orders.splice(index, 1);
        localStorage.setItem("foodOrders", JSON.stringify(orders));
    }
  
    viewOrders();
  }
  // TO ROLL A THREE-DICE

  const myBttton = document.getElementById("myBttton");
  const myLeboo1 = document.getElementById("myLeboo1");
  const myLeboo2 = document.getElementById("myLeboo2");
  const myLeboo3 = document.getElementById("myLeboo3");
  const min = 0;
  const max = 100;
  let randomNum1;
  let randomNum2;
  let randomNum3;
  
  myBttton.onclick = function(){
    randomNum1 = Math.floor(Math.random()*(max - min + 1))+ min;
    randomNum2 = Math.floor(Math.random()*(max - min + 1))+ min;
    randomNum3 = Math.floor(Math.random()*(max - min + 1))+ min;
    myLeboo1.textContent = randomNum1;
    myLeboo2.textContent = randomNum2;
    myLeboo3.textContent = randomNum3;
  }
    