// //створити 2 форми  по 2 інпути в кожній. ствоирити кнопку при кліку на яку считується та виводиться на консоль інформація з цих 2х форм.
// Кнопка повинна лежати за межами форм (Щоб ьуникнути  перезавантаження сторінки)
// Доступ до інпутів через Forms API. Отже дайте формі та інпутам всі необхідні атрибути.

// let divOne = document.createElement('div');
// divOne.innerText = 'Контейнер 1';
// divOne.style.margin = '20px';
// document.body.appendChild(divOne);
// let divTwo = document.createElement('div');
// divTwo.innerText = 'Контейнер 2';
// divTwo.style.margin = '20px';
// document.body.appendChild(divTwo);
//
// let formOne = document.createElement('form');
// formOne.setAttribute('name', 'formOne');
// divOne.appendChild(formOne);
//
// let formTwo = document.createElement('form');
// formTwo.setAttribute('name', 'formTwo');
// divTwo.appendChild(formTwo);
//
// let inputeOne = document.createElement('input');
// inputeOne.setAttribute('name', 'inputeOne');
//
// let inputeTwo = document.createElement('input');
// inputeTwo.setAttribute('name', 'inputeTwo');
//
// let inputeThree = document.createElement('input');
// inputeThree.setAttribute('name', 'inputeThree');
//
// let inputeFour = document.createElement('input');
// inputeFour.setAttribute('name', 'inputeFour');
//
// let button = document.createElement('button');
// button.innerText = 'DO IT';
//
// document.body.appendChild(button);
//
// formOne.append(inputeOne, inputeTwo);
// formTwo.append(inputeThree, inputeFour);
//
// button.addEventListener('click', function () {
//     console.log(document.forms.formOne.inputeOne.value)
//     console.log(document.forms.formOne.inputeTwo.value)
//     console.log(document.forms.formTwo.inputeThree.value)
//     console.log(document.forms.formTwo.inputeFour.value)
// })


//  //  - Створити 3 инпута та кнопку. Один визначає кількість рядків, другий - кількість ячеєк, третій вмиіст ячеєк.
//  //      При натисканні кнопки, вся ця інформація зчитується і формується табличка, з відповідним вмістом.

// let inputeOne = document.createElement('input');
// let inputeTwo = document.createElement('input');
// let inputeThree = document.createElement('input');
// let btn = document.createElement('button');
//
// btn.innerText = 'Створи таблицю';
// document.body.append(inputeOne, inputeTwo, inputeThree, btn);
//
//
// btn.addEventListener('click', function () {
//     let tr = inputeOne.value;
//     let td = inputeTwo.value;
//     let enterTxt = inputeThree.value;
//
//     function generateTbl(tr, td, inner) {
//         let table = document.createElement('table');
//         let divTable = document.createElement('div');
//
//         table.style.border = '1px solid red';
//         divTable.appendChild(table);
//         document.body.appendChild(divTable);
//
//         for (let i = 0; i < tr; i++){
//             let tr = document.createElement('tr');
//             tr.style.border = '1px solid blue';
//             for (let j = 0; j < td; j++){
//                 let td = document.createElement('td');
//                 td.style.border = '1px solid green'
//                 td.innerText = `${inner}`;
//                 table.appendChild(tr);
//                 tr.appendChild(td);
//             }
//         }
//     }
//     generateTbl(tr, td, enterTxt);
// })


// //- Сворити масив не цензцрних слів.
// //Сворити інпут текстового типу.
// //Якщо людина вводить слово і воно міститься в масиві не цензурних слів
// //кинути алерт з попередженням.
// //Перевірку робити при натисканні на кнопку

let words = ['Putin', 'Russia', 'Z', 'V'];
let input = document.createElement('input');
let button = document.createElement('button');
button.innerText = 'Перевірка';
document.body.append(input, button);

button.addEventListener('click', function () {
    let valueInput = input.value;

    for (let word of words){
        if (word === valueInput){
            alert('WOW WOW WOW SHUT UP!!!');
            input.value = '';
            return;
        }
    }
    if (valueInput){
        alert('Молодець)');
        input.value = '';
    }
})
