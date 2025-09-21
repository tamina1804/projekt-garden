
        // Popup
        document.getElementById('generate').onclick = function() {
            document.getElementById('popup').style.display = 'flex'; 
        }

        document.getElementById('closePopup').onclick = function() {
            document.getElementById('popup').style.display = 'none'; 
        }

        window.onclick = function(event) {
            if (event.target == document.getElementById('popup')) {
                document.getElementById('popup').style.display = 'none'; 
            }
        }


// Eingabe
document.addEventListener('DOMContentLoaded', function() {
    
    const nameInput = document.getElementById('recipient');
    const amountRadios = document.querySelectorAll('input[name="amount"]');
    const customAmountInput = document.querySelector('input[type="number"]');
    const overlayName = document.getElementById('overlayName');
    const overlayAmount = document.getElementById('overlayAmount');

    nameInput.addEventListener('input', () => {
        overlayName.textContent = nameInput.value || 'Name';
    });

    function updateAmount() {
        const selected = [...amountRadios].find(r => r.checked);
        let value = selected ? selected.value : '';
        if (value === 'custom') {
            value = customAmountInput.value;
        }
        overlayAmount.textContent = value ? value + ' €' : 'Euro';
    }

    amountRadios.forEach(radio => {
        radio.addEventListener('change', updateAmount);
    });
    customAmountInput.addEventListener('input', updateAmount);

    updateAmount();
});


// Galerie
const images = [
    { src: 'img/Gutschein Rosen hell3.png'},
    { src: 'img/Gutschein Flowerpower3.png'},
    { src: 'img/Gutschein Biene33.png'},
    { src: 'img/Gutschein Halloween3.png'},
];

let currentIndex = 0;
const currentImage = document.getElementById('currentImage');
const imageIndicator = document.getElementById('imageIndicator');

function updateImage() {
    currentImage.src = images[currentIndex].src;
    imageIndicator.textContent = images[currentIndex].title;
}

document.getElementById('prevBtn').addEventListener('click', function() {
    currentIndex = (currentIndex > 0) ? currentIndex - 1 : images.length - 1;
    updateImage();
});

document.getElementById('nextBtn').addEventListener('click', function() {
    currentIndex = (currentIndex < images.length - 1) ? currentIndex + 1 : 0;
    updateImage();
});

// Update image on radio button change
const radioButtons = document.querySelectorAll('input[name="motif"]');
radioButtons.forEach(radio => {
    radio.addEventListener('change', function() {
        if (this.checked) {
            currentImage.src = this.value;
            const index = [...radioButtons].indexOf(this);
            imageIndicator.textContent = `Motiv ${index + 1} von ${radioButtons.length}`;
            currentIndex = index; // Update current index for navigation
        }
    });
});

// Initial image load
updateImage();

document.getElementById('generate').addEventListener('click', function() {
    alert("Geschenkgutschein wurde erfolgreich erstellt!");
});





       







