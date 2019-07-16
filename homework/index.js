let persons = [
    {
        ' id': '5b5e3168c6bf40f2c1235cd6',
        'index': 0,
        ' birthday': '2016-03-18T00:00:00',
        'eyeColor': 'green',
        'name': 'Stein',
        'favoriteFruit': 'apple'
    },
    {
        '_i': '5b5e3168e328c0d72e4f27d8',
        'index': 1 ,
        ' birthday ': '1991-02-11T00:00:00',
        'eyeColor': 'blue',
        'name': 'Cortez',
        'favoriteFruit': 'strawberry'
    },
    {
        '_id': '5b5e3168cc79132b631c666a',
        'index': 2,
        ' birthday ': '1984-04-17T00:00:00',
        'eyeColor': 'blue',
        'name': 'Suzette',
        'favoriteFruit': 'apple'
    },
    {
        '_id': '5b5e31682093adcc6cd0dde5',
        'index': 3,
        ' birthday ': '1994-04-17T00:00:00',
        'eyeColor': 'green',
        'name': 'George',
        'favoriteFruit': 'banana'
    }
];

let getNumbers = myString => {
    let arr = myString.split('');
    let numArr = [];
    arr.forEach(el => {
        if (parseInt(el)) {
            numArr.push(el);
        }
    });
    return numArr;
};

getNumbers('123hcds');

let findTypes = (...args) => {
    let obj = {};
    args.forEach(el => {
        let key = typeof el;
        if (obj[key]) {
            obj[key] += 1;
        } else {
            obj[key] = 1;
        }
    });
    return obj;
};

findTypes(null, 5, 'hello');

let executeforEach = (arr, fn) => {
    arr.forEach(el => {
        fn(el);
    });
};

executeforEach([1, 2, 3], function (el) {
    console.log(el);
});

let mapArray = (arr, fn) => {
    let myArr = [];
    executeforEach(arr, el => {
        myArr.push(fn(el));
    });
};
mapArray([2, 5, 8], function (el) {
    return el + 3;
});

let filterArray = (arr, fn) => {
    let myArr = [];
    executeforEach(arr, el => {
        if (fn(el)) {
            myArr.push(el);
        }
    });
    return myArr;
};

filterArray([2, 5, 8], function (el) {
    console.log(el > 3);
});

let showFormattedDate = myDate => {
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    let myMonth = myDate.getMonth();
    let day = myDate.getDate();
    let year = myDate.getFullYear();

    return 'Date: ' + months[myMonth] + ' ' + day + ' ' + year;
}

showFormattedDate(new Date('2019-01-27T01:10:00'));

let canConvertToDate = myDate => {
    return !!Date.parse(myDate);
}

canConvertToDate('2016-13-18T00:00:00');
canConvertToDate('2016-03-18T00:00:00');

let daysBetween = (firstDate, secondDate) => {
    const msInDay = 86400000;
    return Math.round((secondDate - firstDate) / msInDay);
}

daysBetween(new Date('2016-03-18T00:00:00'), new Date('2016-04-19T00:00:00'));

let getAmountOfAdultPeople = data => {
    let days = 365;
    let years = 18;
    let num = 0;
    filterArray(data, function(el) {
        if(daysBetween(Date.now(), +new Date(el.birthday)) / days > years){
            num++;
        }
    });
    return num; 
};

getAmountOfAdultPeople(persons);

let keys = obj => {
    let keyArray = [];
    for (let key in obj) {
        if (obj.hasOwnProperty(key)) {
            keyArray.push(key);
        }
    }
    return keyArray;
};

keys({keyOne: 1, keyTwo: 2, keyThree: 3});

let values = obj => {
    let valArray= [];
    for(let key in obj){
        if (obj.hasOwnProperty(key)) {
            valArray.push(obj[key]);
        } 
    }
    return valArray;
};

values({keyOne: 1, keyTwo: 2, keyThree: 3});
