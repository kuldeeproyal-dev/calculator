// Get the display input from the form
const display = document.forms[0].elements.display;

// Listen for keyboard presses
document.addEventListener('keydown', function (event) {
  const key = event.key;

  // Numbers and operators
  if (!isNaN(key) || "+-*/.".includes(key)) {
    display.value += key;
  }

  // Enter = evaluate
  else if (key === 'Enter') {
    event.preventDefault();
    try {
      display.value = eval(display.value);
    } catch {
      display.value = 'Error';
    }
  }

  // Backspace = delete last char
  else if (key === 'Backspace') {
    event.preventDefault();
    display.value = display.value.slice(0, -1);
  }

  // Escape = clear display
  else if (key === 'Escape') {
    display.value = '';
  }
});
