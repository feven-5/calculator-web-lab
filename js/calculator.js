let buttons = document.querySelectorAll("button");
let input = document.querySelector("input")
let string = '';
let arr = Array.from(buttons);
arr.forEach(button => {
  button.addEventListener('click', (event) => {
    if(event.target.innerHTML == '='){
      string = eval(string);
      input.value = string;
    }
    else if(event.target.innerHTML == 'C'){
      string = '';
      input.value = string;
    }
    else{
      string += event.target.innerHTML;
      input.value = string;
    }
  });
});