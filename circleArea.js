const arguments = process.argv.slice(2);

function CircleArea(radius) {
  let Area= Math.PI * radius * radius;
  let result = Area.toFixed(2);
  return result;
}
console.log('Radius: ',arguments[0],',','Area:',CircleArea(arguments[0]));