function nextDay(year, month, day) {
    let nextDay = new Date(year, month - 1, day + 1);
    let newYear = nextDay.getFullYear();
    let newMonth = nextDay.getMonth() + 1;
    let newDate = nextDay.getDate();
    console.log(`${newYear}-${newMonth}-${newDate}`);
}
nextDay(2016, 12, 31)


/*function nextDay2(year, month, day) {
    let date = new Date(year, month - 1, day);
    date.setDate(date.getDate() + 1);
    let newYear = date.getFullYear();
    let newMonth = date.getMonth() + 1;
    let newDate = date.getDate();
    console.log(`${newYear}-${newMonth}-${newDate}`);
}

function nextDay3(year, month, day) {
    if (year <= 99) year += 1900;
    let date = new Date(`${year}-${month}-${day} 12:00`);
    date.setDate(date.getDate() + 1);
    let newDate = date.toISOString().split('T')[0];
    [yyyy, mm, dd] = newDate.split('-');
    console.log(`${yyyy}-${removeLeadingZeroe(mm)}-${removeLeadingZeroe(dd)}`);

    function removeLeadingZeroe (str) {
        return str.replace(/^0+/, '');
    }
}


Едва ли бих бил по-изчерпателен от документацията:
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/Date
виж в Date() конструктора, който поддържа няколко варианта за създаване на обект от клас дата.
После създадения обект има методи, например за добавяне на дни date.setDate(date.getDate() + days) или за взимане на година .getFullYear() или за взимане на месец .getMonth() (! тук особеното е, че месеците са изместени с един напред от 0 до 11, това е поради исторически причини) ... и т.н.
btw в реален проект може би никога няма да ти се наложи да работиш с Date в JS, всички импортват една библиотека moment.js която има много добра документация, супер лесно се използва и те спасява от дребните тънкости за работа с дати в JS, но при всички положения е добре да имаш обща представа.


*/



