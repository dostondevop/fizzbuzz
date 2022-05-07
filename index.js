var elfizzbuzz = document.querySelector('.fizzbuzz');
var elfizz = document.querySelector('.fizz');
var elbuzz = document.querySelector('.buzz');
var elfizzbuzztable = document.querySelector('.fizzbuzz-table');
var elfizztable = document.querySelector('.fizz-table');
var elbuzztable = document.querySelector('.buzz-table');
var elTitle = document.querySelector('.title');
var elTitle1 = document.querySelector('.title1');
var elTitle2 = document.querySelector('.title2');
var userNumber = prompt(`Iltimos Son kirg'azing!`, 0) - 0;
var fizz = 0;
var buzz = 0;
var fizzbuzz = 0;

for(var i = 1; i <= userNumber; i++) {
    var elLi = document.createElement('li');
    elLi.textContent = i;
     if (i % 3 === 0 && i % 5 === 0) {
         fizzbuzz += 1;
         elfizzbuzztable.append(elLi);
     } else if (i % 3 === 0) {
        fizz += 1;
        elfizztable.append(elLi);
        } else if (i % 5 === 0) {
        buzz += 1;  
        elbuzztable.append(elLi);
    }
}
elTitle.textContent = 'Siz kiritgan raqam';
elTitle1.textContent = userNumber;
elTitle2.textContent = `va uni ichida nechta 'Fizz', 'Buzz' va 'FizzBuzz' borligini quyida ko'rishingiz mumkin😊`;
elfizzbuzz.textContent = fizzbuzz;
elfizz.textContent = fizz;
elbuzz.textContent = buzz;