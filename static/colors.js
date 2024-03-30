//var randomColor = "#000000".replace(/0/g,function(){return (~~(Math.random()*16)).toString(16);});

var element = document.getElementById('meh');

setInterval(change_color, 500);

function change_color() {
  var color = getRandomColor();
  element.style.backgroundColor = color;
  console.log(color);
}

function getRandomColor() {
  return "#000000".replace(/0/g,function(){return (~~(Math.random()*16)).toString(16);});
}

