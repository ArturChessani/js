/*Создать переменные и записать в них ответ пользователя.
из полученных переменных посчитать площадь фигуры
вывести результат в консоль или alert

Предусмотрите что пользователь мог ввести буквы и сделайте преобразования.

1. Спросить стороны треугольника и посчитать площадь
2. Спросить стороны трапеции и посчитать площадь
3. Спросить стороны круга и посчитать площадь
4. Спросить стороны паралеллограма и посчитать площадь

5. Спросить стороны цилиндра и посчитать объем
6. Спросить стороны сферы и посчитать объем*/

/* 1. Спросить стороны треугольника и посчитать площадь*/

const sideA = prompt('Enter the side A of the triangle');
console.log(sideA);
console.log(typeof sideA === 'number');
const sideaAnumber = Number (sideA);
console.log (typeof sideaAnumber);
console.log(sideaAnumber);


const height = prompt('Enter the height of the triangle');
console.log(height);
console.log(typeof height === 'number');
const heightA = Number (height);
console.log (typeof heightA);
console.log(heightA);

const s = 1/2*sideaAnumber*heightA;
console.log(s);



