var courses = [
    {
        id: 1,
        name: "JS",
        coin: 500
    },
    {
        id: 2,
        name: "php",
        coin: 200
    },
    {
        id: 3,
        name: "C++",
        coin: 300
    },
    {
        id: 4,
        name: "Android",
        coin: 0
    }

];

        //lặp mảng, lấy ra tất cả phần tử của mảng
course.forEach(function(course, index){
    console.log(course, index)
});

        // every(): lặp qua từng phần tử, truyền cho 2 tham số là course và index

// kiểm tra điều kiện từng thằng 1 và trả về kết quả
//nếu false thì trả về kết quả và dừng luôn
var isFree = course.every(function(course, index){
    return course.coin === 0;
})
console.log(isFree);

        // some(): chỉ cần 1 ông trong mảng đúng thì trả về kết quả luôn


        // find(): tìm phần tử trong mảng, luôn chỉ tìm được 1 phần tử đúng đầu tiên

var course = course.find(function(course, index){
    return course.name === 'ruby';
})
console.log(course);

 



    //important     // map(): map trả về 1 array mới có số phần tử bằng với arr cũ
        // function return lại cái gì nó sẽ nhận chính cái giá trị đó      
        //ứng dụng thực tế: render ra view trên web
function courseHandler(courses, index){
    return {
        id: courses.id,
        name: `Khoa hoc: ${courses.name}`,
        coin: courses.coin,
        coinText: `Gia: ${courses.coin}`
    }
     
}

var newCourses = courses.map(courseHandler);
console.log(newCourses);


        //reduce(): có 4 tham số trả về như ở dưới
        //accumulator: biến lưu trữ, giá trị đầu tiên nhận được ở đối số truyền vào, ở đây là 0  
        //return cái gì thì nhận lại cái đó ở lần chạy thứ 2

    // function coinHandler(accumulator, currentValue, currentIndex, originArray){
        
    // }

    var totalCoin = courses.reduce(coinHandler, 0); // giá trị khởi tạo được gán cho accumulator lần đầu tiên
        //currentValue: trả về object theo thứ tự
        //curentIndex: tương tự
        //

        var totalCoin = courses.reduce(function(total, course){
            return total + course.coin;
        }, 0); // để ý có giá trị khởi tạo(initial value (0)) 
                // để giải quyết bài toán
                // mong muốn nhận được kiểu dữ liệu gì thì để giá trị khởi tạo kiểu đó

    // làm phẳng mảng
    // var depthArray = [1, 2, [3, 4], 5, 6, [7, 8, 9]];

    var flatArray = depthArray.reduce(function(flatOutput, depthItem){
        return flatOutput.concat(depthItem);
    }, []); 


/* math.PI
- Math.round(): làm tròn
- Math.abs(): giá trị tuyệt đối
- Math.ceil(): làm tròn trên
- Math.floor(): làm tròn dưới
- Math.random(): trả về số thập phân ngẫu nhiên nhỏ hơn 1*/
//VD:
 console.log(Math.floor(Math.random() * 10))
    var random = Math.floor(Math.random() * 10);

    var bonus = [
        '10 coin',
        '10 coin',
        '10 coin',
        '10 coin',
        '10 coin'
    ];

    //VD về tỉ lệ ngẫu nhiên
    var random = Math.floor(Math.random() * 100);
    if (random < 5) {
        console.log('Cường hóa thành công!');
    }

    // Math.min(-100, 1,90,50,40): trả về số nhỏ nhất
    //Math.max(): tương tự