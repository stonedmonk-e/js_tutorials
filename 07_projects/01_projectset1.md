# Projects related to DOM

## Project Link
[click here] (https://stackblitz.com/edit/dom-project-chaiaurcode?file=index.html)

# Solution Code

## Project 1

```javascript
const buttons = document.querySelectorAll('.button')
const body = document.querySelector("body")

buttons.forEach(function(button) {
  console.log(button);
  button.addEventListener('click', function(e){
    console.log(e);
    console.log(e.target);

    if(e.target.id === 'grey'){
      body.style.backgroundColor = e.target.id;
    }
    if(e.target.id === 'white'){
      body.style.backgroundColor = e.target.id;
    }
    if(e.target.id === 'blue'){
      body.style.backgroundColor = e.target.id;
    }
    if(e.target.id === 'yellow'){
      body.style.backgroundColor = e.target.id;
    }
    if(e.target.id === 'purple'){
      body.style.backgroundColor = e.target.id;
    }
  })
});

```

## Project 2

```javascript
const form = document.querySelector('form');
// this usecase will give you empty =>
// const height = parseInt(document.querySelector('#height').value);
// coz by the time we submit, page will reload and null value will be stored in height

form.addEventListener('submit', function (e) {
  e.preventDefault();
  const height = parseInt(document.querySelector('#height').value);
  const weight = parseInt(document.querySelector('#weight').value);
  const results = document.querySelector('#results');
  const bmi = 0;

  if (height === '' || height < 0 || isNaN(height)) {
    results.innerHTML = `Please give a valid height ${height}`;
  } else if (weight === '' || weight < 0 || isNaN(weight)) {
    results.innerHTML = `Please give a valid weight ${weight}`;
  } else {
    const bmi = (weight / ((height * height) / 10000)).toFixed(2);
    results.innerHTML = `<span>${bmi}</span>`;
  }
  if (bmi < 18.6) {
    comments.innerHTML = 'Under weight';
  } else if (bmi > 24.9) {
    comments.innerHTML = 'Overweight';
  } else {
    comments.innerHTML = 'Normal Range';
  }
});

```

## Project 3

```javscript
const clock = document.getElementById('clock');
// const clock = document.querySelector('#clock');

// time in miliseconds, 1000 => 1 sec
setInterval(function(){
  let date = new Date()
  // console.log(date.toLocaleString());
  clock.innerHTML = date.toLocaleTimeString();
}, 1000);

```