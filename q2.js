// ? Question-2:Select all spans  with the 'circle' class and write a code to change classes that have 'blue' with 'purple' and vice versa

// !Answer:

const circles = document.querySelectorAll(".circle")
circles.forEach(circle => {
    circle.classList.toggle('blue')
    circle.classList.toggle('purple')
})