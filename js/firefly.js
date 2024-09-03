const fireflyContainer = document.querySelector('.firefly-container');
const numberOfFireflies = 150; // Adjust the number of fireflies as needed

for (let i = 0; i < numberOfFireflies; i++) {
    const firefly = document.createElement('div');
    firefly.classList.add('firefly');
    firefly.style.top = Math.random() * 100 + '%';  // Uniform distribution from 0% to 100% of the container's height
    firefly.style.left = Math.random() * 100 + '%'; // Uniform distribution from 0% to 100% of the container's width
    firefly.style.animationDelay = `${Math.random() * 5}s, ${Math.random() * 5}s`;
    firefly.style.animationDuration = `${5 + Math.random() * 5}s, ${15 + Math.random() * 10}s`;
    fireflyContainer.appendChild(firefly);
}
