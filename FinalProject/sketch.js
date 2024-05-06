let bg, oven, ingredients = [];
let selectedIngredient = null;
let timerValue = 60; // 1 minute timer

function preload() {
  bg = loadImage("/assets/background.png");

  ingredients.push(loadImage("/assets/a1.png"));
  ingredients.push(loadImage("/assets/a2.png"));
  ingredients.push(loadImage("/assets/a3.png"));
  ingredients.push(loadImage("/assets/a4.png"));
  ingredients.push(loadImage("/assets/a5.png"));
  ingredients.push(loadImage("/assets/a6.png"));
  ingredients.push(loadImage("/assets/a7.png"));
  ingredients.push(loadImage("/assets/a8.png"));
  ingredients.push(loadImage("/assets/a9.png"));
  ingredients.push(loadImage("/assets/a10.png"));
  ingredients.push(loadImage("/assets/a11.png"));
  ingredients.push(loadImage("/assets/a12.png"));
  ingredients.push(loadImage("/assets/a13.png"));
  ingredients.push(loadImage("/assets/a14.png"));
  ingredients.push(loadImage("/assets/a15.png"));
  ingredients.push(loadImage("/assets/a16.png"));
  ingredients.push(loadImage("/assets/a17.png"));
  ingredients.push(loadImage("/assets/a18.png"));
  ingredients.push(loadImage("/assets/a19.png"));
  ingredients.push(loadImage("/assets/a20.png"));
  ingredients.push(loadImage("/assets/a21.png"));
  ingredients.push(loadImage("/assets/a22.png"));
  ingredients.push(loadImage("/assets/a23.png"));
  ingredients.push(loadImage("/assets/a24.png"));
  ingredients.push(loadImage("/assets/a25.png"));
  ingredients.push(loadImage("/assets/a26.png"));

  ingredients.push(loadImage("/assets/bowl.png"));
  ingredients.push(loadImage("/assets/but.png"));
  ingredients.push(loadImage("/assets/egg.png"));
  ingredients.push(loadImage("/assets/flour.png"));
  ingredients.push(loadImage("/assets/milk.png"));
  ingredients.push(loadImage("/assets/oil.png"));
  ingredients.push(loadImage("/assets/salt.png"));
  ingredients.push(loadImage("/assets/soda.png"));
  ingredients.push(loadImage("/assets/suga.png"));
  ingredients.push(loadImage("/assets/van.png"));
  ingredients.push(loadImage("/assets/whisk.png"));

  oven = loadImage("/assets/oven.png");
}

function setup() {
  createCanvas(2048, 1500); // Updated canvas size
  textSize(20);
  textFont('Courier New');
  textStyle(BOLD);
  setInterval(timer, 1000);
}

function draw() {
  background(bg);
  image(oven, 745, 700); // Updated oven position

  // Draw ingredients
  for (let i = 0; i < ingredients.length; i++) {
    let x = 100 + i * 200; // Increased spacing between ingredients
    let y = 100;
    if (selectedIngredient !== null && selectedIngredient.index === i) {
      // Don't draw the selected ingredient at its original position
      continue;
    }
    image(ingredients[i], x, y);
  }

  if (selectedIngredient !== null) {
    image(selectedIngredient.img, mouseX, mouseY); // Draw the selected ingredient at the mouse position
  }

  if (timerValue >= 10) {
    text(timerValue + ' seconds', 20, 30);
  } else if (timerValue > 0) {
    text('0' + timerValue + ' seconds', 20, 30);
  } else {
    text('Time\'s up!', 20, 30);
  }
}

function mousePressed() {
  // Check if an ingredient is clicked
  for (let i = 0; i < ingredients.length; i++) {
    let x = 100 + i * 200;
    let y = 100;
    let imgWidth = ingredients[i].width;
    let imgHeight = ingredients[i].height;
    if (
      mouseX >= x &&
      mouseX <= x + imgWidth &&
      mouseY >= y &&
      mouseY <= y + imgHeight
    ) {
      selectedIngredient = { img: ingredients[i], index: i };
      break;
    }
  }
}

function mouseDragged() {
  // Drag the selected ingredient
  if (selectedIngredient !== null) {
    selectedIngredient.x = mouseX;
    selectedIngredient.y = mouseY;
  }
}

function mouseReleased() {
  // Check if the selected ingredient is dropped in the oven
  if (selectedIngredient !== null) {
    let ovenX = 745;
    let ovenY = 700;
    let ovenWidth = oven.width;
    let ovenHeight = oven.height;
    if (
      mouseX >= ovenX &&
      mouseX <= ovenX + ovenWidth &&
      mouseY >= ovenY &&
      mouseY <= ovenY + ovenHeight
    ) {
      // Ingredient dropped in the oven
      console.log('Ingredient added to the oven:', selectedIngredient.index);
      ingredients.splice(selectedIngredient.index, 1); // Remove the ingredient from the array
    }
    selectedIngredient = null;
  }
}

function timer() {
  if (timerValue > 0) {
    timerValue--;
  }
}