let bg, oven, ingredients = [];
let ingredientsOven = [];
let selectedIngredient = null;
let timerValue = 20;
let timestart = 0; // 1 minute timer
let over = 0;
let whit;

let port;
let isConnected = false; 

let synth = new Tone.AMSynth().toDestination();
synth.type = 'sine';
synth.harmonicity.value = 0.1;
synth.volume.value = 3;

let num = 0;

function preload() {
  bg = loadImage('/assets/background.png');
  oven = loadImage('/assets/oven.png');
  whit = loadImage('/assets/white.png');

  // Load ingredient images
  ingredients.push({img: loadImage('/assets/flour.png'), x: 150, y: 400});
  ingredients.push({img: loadImage('/assets/suga.png'), x: 480, y: 425});
  ingredients.push({img: loadImage('/assets/but.png'), x: 10, y: 850});
  ingredients.push({img: loadImage('/assets/egg.png'), x: 300, y: 115});
  ingredients.push({img: loadImage('/assets/milk.png'), x: 1850, y: 700});
  ingredients.push({img: loadImage('/assets/bowl.png'), x: 520, y:90}); 
  ingredients.push({img: loadImage('/assets/van.png'), x: 680, y:250});
  ingredients.push({img: loadImage('/assets/soda.png'), x: 150, y:770});
  ingredients.push({img: loadImage('/assets/salt.png'), x: 720, y:720});
  ingredients.push({img: loadImage('/assets/whisk.png'), x: 1355, y:650});

  ingredients.push({img: loadImage("/assets/a1.png"), x: 0, y: 5});
  ingredients.push({img: loadImage("/assets/a2.png"), x: 150, y: 100});
  ingredients.push({img: loadImage("/assets/a3.png"), x: 350, y: 75});
  ingredients.push({img: loadImage("/assets/a4.png"), x: 680, y: 60});

  ingredients.push({img: loadImage("/assets/a5.png"), x: 0, y: 265});
  ingredients.push({img: loadImage("/assets/a6.png"), x: 70, y: 298});
  ingredients.push({img: loadImage("/assets/a7.png"), x: 200, y: 250});
  ingredients.push({img: loadImage("/assets/a8.png"), x: 330, y: 280});
  ingredients.push({img: loadImage("/assets/a9.png"), x: 500, y: 280});

  ingredients.push({img: loadImage("/assets/a10.png"), x: 0, y: 470});
  ingredients.push({img: loadImage("/assets/a11.png"), x: 50, y: 460});
  ingredients.push({img: loadImage("/assets/a12.png"), x: 330, y: 470});
  ingredients.push({img: loadImage("/assets/a13.png"), x: 630, y: 420});
  ingredients.push({img: loadImage("/assets/a14.png"), x: 700, y: 390});

  ingredients.push({img: loadImage("/assets/a15.png"), x: 240, y: 700});
  ingredients.push({img: loadImage("/assets/a16.png"), x: 280, y: 700});
  ingredients.push({img: loadImage("/assets/a17.png"), x: 330, y: 730});
  ingredients.push({img: loadImage("/assets/a18.png"), x: 370, y: 705});
  ingredients.push({img: loadImage("/assets/a19.png"), x: 415, y: 685});
  ingredients.push({img: loadImage("/assets/a20.png"), x: 490, y: 680});
  ingredients.push({img: loadImage("/assets/a21.png"), x: 560, y: 690});
  ingredients.push({img: loadImage("/assets/a22.png"), x: 630, y: 685});

  ingredients.push({img: loadImage("/assets/a23.png"), x: 1670, y: 705});
}

function setup() {
  createCanvas(2048, 1500);
  textSize(50);
  textFont('Courier New');
  textStyle(BOLD);
  textAlign(CENTER);

  setInterval(timer, 1000);

  port = createSerial();

  button = createButton("Connect Arduino");
  button.size(400, 70);
  button.position(windowWidth/2 - 200, 2120);
  //button.center();
  button.style("font-family", "Courier New");
  button.mousePressed(connect);
}

function draw() {
  background(bg);
  image(oven, 745, 700);

  textSize(40)
  text("Ingredients: \n Milk \n Butter \n Salt \n Baking Soda \n Vanilla \n Oil \n Sugar \n Egg \n Flour \n Bowl \n Whisk", 1600, 70)
  
  // // Draw ingredients
  // for (let i = 0; i < ingredients.length; i++) {
  //   let x = 100 + i * 200; // Increased spacing between ingredients
  //   let y = 100;
  //   if (selectedIngredient !== null && selectedIngredient.index === i) {
  //     // Don't draw the selected ingredient at its original position
  //     continue;
  //   }
  //   image(ingredients[i], x, y);
  // // }

  // if (selectedIngredient !== null) {
  //   image(selectedIngredient.img, mouseX, mouseY); // Draw the selected ingredient at the mouse position
  // }

  for (let i = 0; i < ingredients.length; i++) {
    image(ingredients[i].img, ingredients[i].x, ingredients[i].y);
  }

  if (timerValue >= 1) {
    text(timerValue + ' seconds', width/2, 550);
  } else {
    text('Time\'s up!', width/2, 550);
    over = 1;
  }
  
  let yOffset = 150;

  if(over == 1) {
    image(whit, 0, 0);
    // fill(0);
    // rect(2048, 1500, width/2, height/2);
    // fill(220);
    // text("Ingredients In The Oven", width/2, 80);
    // for (let i = 0; i < ingredientsOven.length; i++) {
    //   text("- " + ingredientsOven[i].name, width/2, yOffset);
    //   yOffset += 50;
    // }
    text("Congrats!! You put " + num + " ingredients in the Oven!", width/2, height/2);

  }

}

function mousePressed() {
  // Check if an ingredient is clicked
  // for (let i = 0; i < ingredients.length; i++) {
  //   let x = 100 + i * 200;
  //   let y = 100;
  //   let imgWidth = ingredients[i].width;
  //   let imgHeight = ingredients[i].height;
  //   if (
  //     mouseX >= x &&
  //     mouseX <= x + imgWidth &&
  //     mouseY >= y &&
  //     mouseY <= y + imgHeight
  //   ) {
  //     selectedIngredient = { img: ingredients[i], index: i };
  //     break;
  //   }
  // }
  for (let i = 0; i < ingredients.length; i++) {
    if (
      mouseX >= ingredients[i].x &&
      mouseX <= ingredients[i].x + ingredients[i].img.width &&
      mouseY >= ingredients[i].y &&
      mouseY <= ingredients[i].y + ingredients[i].img.height
    ) {
      selectedIngredient = ingredients[i];
      break;
    }
  }
  
}

function mouseDragged() {
  // Drag the selected ingredient
  if (selectedIngredient !== null) { // If an ingredient is selected
    selectedIngredient.x = mouseX - selectedIngredient.img.width / 2;
    selectedIngredient.y = mouseY - selectedIngredient.img.height / 2;
    serial.write('1'); 
  }

}

// function mouseReleased() {
//   // Drop the ingredient
//   selectedIngredient = null;
// }

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
      // console.log('Ingredient added to the oven:', selectedIngredient.index);
      ingredientsOven.push(selectedIngredient);
      ingredients = ingredients.filter(ingredient => ingredient !== selectedIngredient); // Remove the ingredient from the array

      synth.triggerAttackRelease("A6", 0.15); 

      
      num = num + 1;
    }
    selectedIngredient = null;
  }
}

function timer() {
  if (timerValue > 0 && timestart == 1) {
    timerValue--;
  }
}

function connect() {
  if (!port.opened()) {
    port.open('Arduino', 9600);
    button.html("Disconnect Arduino");
    isConnected = true;
    timestart = 1;
  } else {
    port.close();
    button.html("Connect Arduino");
    isConnected = false;
    timestart = 0;
  }
}