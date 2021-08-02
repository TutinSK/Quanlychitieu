// var /let,const:  scope, hoisting khác nhau ở scope, ưu tiên giá trị của block gần nhất,
// const ko thể thay đổi giá trị ở cùng block
// hoisting là đưa lên đầu : only var
//vd: 
a = 1;
var a;

console.log(a); 
//tự đưa var a lên đầu => hoisting có thể truy cập sau khi định nghĩa, còn let const thì k

//const / let, var: assignment 
//vd
var a = 1;
a = 100;
//TH này a =100 , let tương tự còn const ko đươc như v(ko thể gán lại đến lần thứ 2)

//vd: 
const a = {
    name: 'javascript'
};
a.name = 'PHP'; // TH này gán được vì đây là gán cho thuộc tính của nó chứ kp thay đổi thằng a

// code thuần dùng Var
//Babel thì dùng let và const(khi dùng cần gán lại giá trị và định nghĩa lại thì dùng let, còn ko thì dùng const)

// Template literals
const courseName = 'Javascript';
const courseName2 = 'PHP';
const description = `Course name: ${courseName} ${courseName2}`; // biến nội suy, VD muốn đưa ${} 
                                //vào sau thì thêm dấu \ vào trc: \${}

console.log(description);// Javascript PHP

//multi-line string
const lines = 'line1\nline2';//thông thường
const lines = `line 1 line 2 line 3`; //dùng multi-line string


///////////arrow function

const sum = (a , b) => a + b; //tự hiểu sẽ return ra sum luôn
//const sum = (a, b) => {a: a, b: b}; //lỗi cú pháp vì trong arrow func cứ có {} là phải return về 1 gtri nào đó
const sum = (a , b) => ({a: a, b: b}); // in ra object chứa {a: a, b: b}

const logger = log => console.log(log);

logger('message'); //khi chỉ có 1 đối số có thể bỏ () 

//arrow func kphai là 1 constructor func
//class
class Course {
    constructor (name, price){
        this.name = name;
        this.price = price;
    }
    getName(){
        return this.name;
    }

    getPrice() {
        return this.price;
    }


}

const phpCourses = new Course('PHP', 1000);
const jsCourses = new Course('js', 1000); 

console.log(jsCourses);
console.log(jsCourses);


//Default parameter values
// function logger(log){
//     if(typeof logger === 'undefined'){
//         log = 'gia tri mac dinh';
//     }
//     console.log(log);
// }
// logger(''); ngoại trừ ko truyền và unde thì truyền vào giá trị nào sẽ nhận giá trị đó
function logger(log = 'Gia tri mặc định'){
    console.log(log);
}

logger();

///Enhhanced object literials
//1 định nghĩa key: value cho object
//2. định nghĩa method cho object
//3. định nghĩa key cho object dưới dạng

var name  ='javascript';
var price = 1000;

var course = {
    name,           // thay vì name: name,
    price,                       //price: price

    getName(){
        return name; // thay vì getName: function(){return name}
    }
};

/// Destructuring, rest(lấy ra những thằng còn lại) khi dùng vs destructuring
var array = ['js', 'php', 'ruby'];
var [a, b, c] = array;
var [a, , c] = array; //lấy ra a và c
var [a, ...rest] = array; //lấy ra những thằng còn lại, và là mảng


var course = {
    name: 'javascript',
    price: 111,
    image: 'image- add'
};

var {name, price} = course;//lấy ra phải đúng tên


///optinal chainning: chỉ thêm vào khi nghi ngờ nó có tồn tại hay ko
const obj = {
    getName(value){
        console.log(value);
    
    }
}
obj.getName?.(123);



