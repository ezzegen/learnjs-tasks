/* 1.
Напишите if..else, соответствующий следующему switch:

switch (browser) {
  case 'Edge':
    alert( "You've got the Edge!" );
    break;

  case 'Chrome':
  case 'Firefox':
  case 'Safari':
  case 'Opera':
    alert( 'Okay we support these browsers too' );
    break;

  default:
    alert( 'We hope that this page looks ok!' );
}
*/

'use strict'

let browser = 'Firefox';

// 1 вариант

if (browser == 'Edge') {
    console.log(`You've got the Edge!`);
} else if (['Chrome', 'Firefox', 'Safari', 'Opera'].find((browser) => true)) {
    console.log('Okay we support these browsers too');
} else {
    console.log('We hope that this page looks ok!');
}

// 2 вариант

if (browser == 'Edge') {
    console.log(`You've got the Edge!`);
} else if (
    browser == 'Chrome' ||
    browser == 'Firefox' ||
    browser == 'Safari' ||
    browser == 'Opera') {
    console.log('Okay we support these browsers too');
} else {
    console.log('We hope that this page looks ok!');
}
