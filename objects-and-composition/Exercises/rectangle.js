function rectangle(width, height, colour) {
  let rectFigure = {
    width,
    height,
    colour:colour[0].toUpperCase() + colour.slice(1),
  };
  

  rectFigure.calcArea = () => {
    return Number(rectFigure.width * rectFigure.height);
  };

  return rectFigure;
}

let rect = rectangle(4, 5, "red");
console.log(rect.width);
console.log(rect.height);
console.log(rect.colour);
console.log(rect.calcArea());
