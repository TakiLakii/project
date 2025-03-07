// Animacja po kliknięciu przycisku
document.getElementById('animateButton').addEventListener('click', function() {
    var element = document.getElementById('animatedElement');
    element.style.transform = 'rotate(360deg)';
});

// Scroll Animations
window.addEventListener('scroll', function() {
    var sections = document.querySelectorAll('section');
    sections.forEach(function(section) {
        var rect = section.getBoundingClientRect();
        if (rect.top >= 0 && rect.bottom <= window.innerHeight) {
            section.style.transform = 'translateY(0)';
        } else {
            section.style.transform = 'translateY(50px)';
        }
    });
});


// Get all the images in the gallery
const images = document.querySelectorAll('.gallery-item');

// Get the modal element
const modal = document.getElementById("imageModal");
const modalImg = document.getElementById("modalImg");
const captionText = document.getElementById("caption");
const closeBtn = document.getElementsByClassName("close")[0];

// Add click event to each image
images.forEach(img => {
    img.onclick = function() {
        modal.style.display = "block";
        modalImg.src = this.src; // Ustawia obrazek w modalu
        captionText.innerHTML = this.alt; // Ustawia podpis obrazu w modalu
    };
});

// When the user clicks on the close button, close the modal
closeBtn.onclick = function() {
    modal.style.display = "none";
};

// Close the modal if the user clicks anywhere outside of the image
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
};
