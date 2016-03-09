var arrOfName = [];

for (var i = 0; i < 5; i++) {
    arrOfName[i] = prompt('Введите имя', '');
}
var login = prompt ('Введите имя пользователя');


for (var i = 0; i < arrOfName[i].length; i++ ) {
    if ( login == arrOfName[i] ) {
        alert ('Вы успешно вошли')
    } else {
        alert ( 'Ошибка входа' )
    }
}


