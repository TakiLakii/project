document.addEventListener('DOMContentLoaded', function() {
    const galleryItems = document.querySelectorAll('.gallery-item');
    const modal = document.querySelector('.modal');

    console.log("started")
    
    if (!modal) {
        const modalDiv = document.createElement('div');
        modalDiv.className = 'modal';
        
        const modalContent = document.createElement('img');
        modalContent.className = 'modal-content';
        
        const closeBtn = document.createElement('span');
        closeBtn.className = 'close';
        closeBtn.innerHTML = '&times;';
        
        modalDiv.appendChild(closeBtn);
        modalDiv.appendChild(modalContent);
        document.body.appendChild(modalDiv);
    }

    console.log("after modal")
    
    const modalImg = document.querySelector('.modal-content');
    const closeBtn = document.querySelector('.close');
    const modalElement = document.querySelector('.modal');
    
    console.log("selectors")

    galleryItems.forEach(img => {
        console.log("added listener")
        img.style.cursor = 'pointer';
        img.addEventListener('click', function() {
            console.log("clicked")
            modalElement.style.display = 'block';
            modalImg.src = this.src;
        });
    });
    
    closeBtn.addEventListener('click', function() {
        modalElement.style.display = 'none';
    });
    
    modalElement.addEventListener('click', function(e) {
        if (e.target === modalElement) {
            modalElement.style.display = 'none';
        }
    });
});
