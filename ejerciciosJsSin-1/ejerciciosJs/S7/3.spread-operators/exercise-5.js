const colors = ['rojo', 'azul', 'amarillo', 'verde', 'naranja']; 

const copyColors = [...colors.slice(0, 2), ...colors.slice(3)];

console.log(copyColors);

