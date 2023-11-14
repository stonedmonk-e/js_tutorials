# Projects related to DOM

## Project Link
[click here] (https://github.com/hiteshchoudhary/js-hindi-youtube/blob/main/07_projects/projectsset1.md#project-link)

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

