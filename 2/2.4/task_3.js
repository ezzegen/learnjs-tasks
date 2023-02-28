/* 3.
У нас есть константа birthday, а также age, которая вычисляется при помощи некоторого кода,
используя значение из birthday (в данном случае детали не имеют значения, поэтому код не
рассматривается).

Можно ли использовать заглавные буквы для имени birthday? А для age?
Или одновременно для обеих переменных?
*/

'use strict'

// можно, т.к. значение переменной известно до начала исполнения скрипта.
const BIRTHDAY = '21.04.1995';

// переменная каждый год должна менять значение, поэтому смысла "жестко" кодировать ее нет.
let age = someCode(BIRTHDAY);   