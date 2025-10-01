const IMAGE_SIZE = 80; // Width and height of each letter image
const IMAGE_SPACING = 10; // Space between images
const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    
let alphaImages = {};
let typedWord = "";
let wordInput;
let inputInstructions;

function handleInput() {
        // Update the word every time the user types, forcing uppercase and trimming whitespace
        let typedWord = wordInput.value().toUpperCase().trim();
        typedWord.html(typedWord);
}


function preload() {
        
        // Load A-Z images
        for (let i = 0; i < alphabet.length; i++) {
            const letter = alphabet[i];
            const filePath = `./imgs/png/${letter}.png`;
            
            // Note: If you use local files, the URL will be: `loadImage('./A.png')`
            try {
                alphaImages[letter] = loadImage(filePath, 
                    () => console.log(`Loaded: ${letter}`), 
                    () => console.error(`Failed to load image for: ${letter} at ${filePath}`)
                );
            } catch (e) {
                console.error(`Error during loadImage for ${letter}:`, e);
            }
        }
    }





function setup() {
      windowRatio(1280, 720);

        // Set an arbitrary size that can accommodate a reasonable word (e.g., 10 letters)
        const maxWordLength = 20;
        const totalWidth = (IMAGE_SIZE + IMAGE_SPACING) * maxWordLength + IMAGE_SPACING;
        const totalHeight = IMAGE_SIZE + 2 * IMAGE_SPACING;
        
        
        
        
        wordInput = createInput('type any word');
        wordInput.input(() => { 
            // Correctly access the value using the function call: .value()
            typedWord = wordInput.value().toUpperCase().trim();
        });
        wordInput.position(width*375/1000, height*3/4)
        wordInput.style('padding', '8px 10px'); // Increased vertical and horizontal padding
        wordInput.style('font-size', '1.125rem'); // Equivalent to Tailwind text-lg
        
        // 2. Green Border and Shadow Outline
        wordInput.style('border', '7px solid #d1ffbd'); // Tailwind Emerald 500 border
        wordInput.style('border-radius', '12px');
        wordInput.style('width', '25%');
        wordInput.style('font-family', 'Inter, sans-serif'); 
        wordInput.style('background-color', '#d1ffbd');


        // Parent the input to the wrapper div for correct centering
        const inputWrapper = document.getElementById('input-wrapper');
        if (inputWrapper) {
            wordInput.parent(inputWrapper);
        }

        
        wordInput.value("type a word");
        typedWord = "FLOSS SERIF";
    }

// --- P5 DRAW: Main rendering loop ---
    function draw() {
        // Using background(0) for a black background as requested
        background(0); 
        noStroke();


        // 1. Calculate the total width of the current word
        let validLetters = 0;
        for (let i = 0; i < typedWord.length; i++) {
            const char = typedWord[i];
            if (alphaImages[char]) {
                validLetters++;
            }
        }
        
        // Calculate total width based on valid letters and spacing
        let currentWordWidth = validLetters * IMAGE_SIZE + (validLetters > 0 ? (validLetters - 1) * IMAGE_SPACING : 0);

        // 2. Calculate the starting position (to center the word)
        const startX = (width - currentWordWidth) / 2;
        const startY = (height - IMAGE_SIZE) / 2; // Center vertically

        let currentX = startX;

        // 3. Draw the images
        for (let i = 0; i < typedWord.length; i++) {
            const char = typedWord[i];
            const img = alphaImages[char];

            if (img) {
                // Draw the image
                image(img, currentX, startY, IMAGE_SIZE, IMAGE_SIZE);
                
                // Move the starting X position for the next image
                currentX += IMAGE_SIZE + IMAGE_SPACING;
            } else if (char !== ' ') {
                // Draw placeholder for non-recognized letters (if not a space)
                fill(220, 100, 100);
                rect(currentX, startY, IMAGE_SIZE, IMAGE_SIZE, 5);
                fill(255);
                textAlign(CENTER, CENTER);
                textSize(16);
                text("?", currentX + IMAGE_SIZE / 2, startY + IMAGE_SIZE / 2);
                
                currentX += IMAGE_SIZE + IMAGE_SPACING;
            } else if (char === ' ') {
                 // Handle spaces with extra spacing
                 currentX += IMAGE_SIZE / 2;
            }
        }
    }
