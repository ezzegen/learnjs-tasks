/* 8.
Какие из перечисленных ниже alert выполнятся?
Какие конкретно значения будут результатами выражений в условиях if(...)?
*/

if (-1 || 0) alert('first'); // -1, alert выполнится
if (-1 && 0) alert('second'); // 0, alert НЕ выполнится
if (null || -1 && 1) alert('third'); // 1, alert выполнится