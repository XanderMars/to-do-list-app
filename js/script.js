let inputs = $('input');
inputs.addClass('my-class');

let list = $('#list');
  list.append("<li>the value of the (inputValue) from the input element<li>");
let li = $('<li></li>');
  list.append(li);

let inputValue = $('#input').val();
  li.append(inputValue);
  li.addClass("strike");
