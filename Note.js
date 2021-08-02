// HTML, CSS, JavaScript
// ES6+
// Nodejs và Code Editor
// Nguyên tắc cơ bản của Reactjs: Kiến trúc, State, Props, Fucntional / Class components, CSS trong Reactjs, APIs
// React Router
// Webpack
// Server Rendering
// Redux
// Tiếp tục học tập



// 6 falsy value: 
// Kiểu Boolean có falsy value là false
// Kiểu Number có falsy value là 0 và NaN
// Kiểu String có falsy value là ''
// Kiểu null là có falsy value null
// Kiểu undefined có falsy value là undefined

//Còn lại đều là truely value


	//String
.length()		// tìm chiều dài
search(), indexOf('')		// tìm chuỗi trong biến
slice() 	//cắt chuỗi
replace() 	//ghi đè
trim() 	//loại bỏ khaongr trắng 2 đầu
split() 		//chuyển từ string sang object
toString() 	//chuyển về dạng chuỗi
toFixed() 	//rút gọn sau số thập phân

console.log(var.[stt])	//lấy phần tử theo index

				// 	Array:
console.log(Array.isArray(var))	// kiểm tra mảng
array.length 	//độ dài mảng, bắt đầu từ 0
var.join() 		//bieens tu arry thanh chuoi~
var.pop()		// xóa element cuối mảng và trả về phần tử đã xóa
var.push() 		//thêm một hoặc nhiều phần tử vào cuối mảng và trả về độ dài mới
var.shift()		//xóa phần tử đầu mảng và trả về phần tử đó
var.unshift() 	//thêm phần tử va trả về độ dài
var.splice: 

			//	//		Object: 
var.keyname = 'value' /*hay*/ var.['keyname']	// thêm key vs value trong Object
delete var.key		//xóa trong object

var.forEach(function(tham số, tham số){
	//code here
})  // duyệt qua từng phàn tử của mảng 
 
var.every() 	//kiểm tra tất cả các phần tử thuộc mảng phải thỏa mãn 1 đều kiện nào đó
var.some() 	//ktra các phần tử, chỉ cần 1 ptu thảo mãn dkien
var.find()	// tìm phần tử có gá trị = nào đó, trả về kết quả đầu tiên
var.filter()	//gioogns find nhưng trả về tất cả kết quả

//quan trọng, hay dùng
var var = var.map(function(){
	
}): //đối số phải là function, duyệt qua từng phần tử của mảng, 
	//truyền dữ liệu gì thì nhận dlieu dó(vd chuyển từ number-> string, tring-> number


	var.reduce() //khi muốn nhận về giá trị duy nhất khi tính toán và xử lý trên aray

include()	// method của aray vs string: 
var.include('đối số') //tìm kiếm phần tử, trả về boolean


	//for in/ for of
	var myInfor = {
		name: "Mark",
		age: 18
	};
	for(var value of Object.keys(myInfor)){
		console.log(value);
	}
	// do while: ứng dụng trong thực tế nạp thẻ cào khi mạng lag

					
	//Callback
//Là hàm, được truyền qua đối số khi gọi hàm khác, được gọi lại
var courses = [
	'JS',
	'PHP',
	'...'
]; 

courses.map(function(course) {
	console.log(course);
})

//------------Get element method: ***Chú ý giá trị trả về là element hay nodelist  **trả về htmlcollection dạng mảng, cần thêm [vi tri]
	//querySelector sẽ trả ra element 	
	//document.querySelector('h1')
	// VD: <h1 id="heading" class = "heading">heading 1</h1> //đây là element

	// Con getElementByTagName, className sẽ trả về 1 html collection(giống 1 array) 
	//nên phải điền vào vị trí []
	//document.getElementByTagname('h1')[1]

	//SelectorAll trả về 1 nodelist
document.getElementById('id')	// lấy giá trị qua ID
**document.getElementsByClassName('class')
**document.getElementsByTagname('tag')	// thẻ vd p
document.querySelector('class')		// CSS selector, 
document.querySelector('.class tên thẻ(vd p, li)')
document.querySelector('.thẻcha .thẻ con')			
document.querySelector('.thẻcha .class:first-child')	//lấy thẻ đầu tiên ở nơi có nhiều class
document.querySelector('thercha .class:nth-child(2)')	//lấy theo stt
***document.querySelectorAll()	//lấy ra tất cả element matching 		trả về nodelist
document.forms	//ko cần select tới id hoặc document.forms[stt]: stt element hoặc
				// document.forms.id: lấy theo id
document.anchors	//lấy qua name

//	var = document.querySelector('.class') 
//000000000	-> var.getElementByTagName('li') hay 
var.querySelector('li')	// lấy element con của .class


			// -------------------	DOM attributes	---------------------------
VD: var headingElement = document.querySelector('h1')	// muốn thêm attribute vào thẻ thì:
	headingElement.className = 'Heading';
	
	headingElement.href = '...'; //Với thẻ ko có cách thêm attribute hợp lệ thì:

	headingElement.setAttribute('đối soos1, đối số 2'); //1.tên attr muốn set, 2: giá trị

//get ra giá trị của attribute: 
	headingElement.getAttribute('class')	// lấy ra giá trị hợp lệ hay ko hợp lệ đều đc
	headingElement.Attribute	// chỉ lấy ra đc giá trị hợp lệ

// -------------------InnerText, textContent property		: bỏ qua các thẻ tag
VD: var headingElement = document.querySelector('.heading');
	//getter and setter;
	headingElement.innerText = 'New heading'; //Thay đổi nội dung của một text note
	headingElement.innerContent = 'New heading' // tương tự
//Khác: text: getter: nội dung lấy đc sẽ giống nội dung rtreen trình duyệt, 
//	tồn tại trên elementnode
	
//	content: trả về nội dung text trong DOM, nguyên bản kể cả khoảng trắng hay xuống dòng
//	tồn tại cả trên element node

		// -------------InnerHTML, outerHTMl
vd: var boxElement = document.querySelector('.box')
	boxElement.innerHTML = '<h1>new heading<h1>'; 
	//Thêm html(element, textnote) vào element, 
	//		bỏ h1 thì sẽ thành text note	


		// ----------------DOM CSS

	// Thêm thuộc tính css inline vào class
var boxElement = document.querySelector('.box')

Object.assign(boxElement.style,{
	width: '200px',
	height: '100px',
	backgroundColor: 'green' 
});


/* Classlist property: chỉ truy cập được khi lấy ra được elementnode*/

	var boxElement = document.querySelector('.box');
	
	boxElement.classList.add('red')		//thêm class 
	boxElement.classList.contains('red')	//kiểm tra xem có class hay k, trả về boolean
	boxElement.classList.remove('red')	 //xóa class
	boxElement.classList.toggle('red')	//ktra xem có class k, nếu có thì xóa, k có thìthêm

//----------------------DOM events
//1.Attribute events:	

//tìm hiểu các sự kiện DOM envet trên w3schools	
	// var h1Element = document.querySelector('h1');

//	h1Element.onclick = function(e){
//		console.log(e.target);			//mouse event (e.target) thì click vào th nào
										//thì sẽ trả lại thằng đó 
//	}


//Đoạn này sẽ lấy ra tất cả các thẻ khi click vào
var h1Elements = document.querySelectorAll('h1');

for(var i = 0; i < h1Elements.length; ++i){
		h1Elements[i].onclick = function(e){
			console.log(e.target);
		}
	}



//-----------------input, key up

	var inputElement = document.querySelector('input[type="text"]');
	
	inputElement.onchange = function(e){ 		//Dungf e target, lấy sau khi bỏ chuột
		console.log(e.target.value);			//(blur)	khỏi input
	}

	inputElement.oninput = function(e){ 	//	Lấy trujwc tiếp khi gõ
		console.log(e.target.value);
	}

	var inputElement = document.querySelector('input[type="checkbox"]');
	inputElement.onchange = function(e){
		console.log(e.target.checked);
	}

	input.onkeyup = function(e){
		console.log(e.which);
	}

	document.onkeydown = function(e){		//Bấm nút trên bàn phím để thực hện gì đó
	switch(e.which) {
		case 27:
			console.log('EXIT');
			break;
	}}

//-----------------------preventDeault
	var ulElement = document.querySelector('ul');
	
	ulElement.onmousedown = function(e){
	e.preventDefault();			//ngăn chặn hành động mặc định của trình duyệt
	}

	e.stopPropagation(); //Ngăn chặn nổi bọt của hành động trc



	
//------------------------Event listener: lắng nghe sự kiện
	
	var btn = document.getElementById('btn');

	// btn.addEventListener('click', function(e){
	// 	console.log('viec 1');
	// })
	
	function viec1() {
		console.log('viec 1');
	}
	//lắng nghe
	btn.addEventListener('click', viec1);

//hủy bỏ lắng nghe
	setTimeout(function() {
		btn.removeEventListener('click', viec1);
	}, 3000);


	// DÙNG DOM EVENT TRONG TH ĐƠN GIẢN, NGẮN GỌN
	// KHI SỰ KIỆN DÀI, SỰ KIỆN PHỨC TẠP, VÀ MUỐN HỦY BỎ CÁI Listenser DỄ DÀNG THÌDUNGF
	// EVENT LISTENER 

// -----------------------     JSON
// -Là một định dạng dữ liệu(chuỗi)

Stringify: 	// từ js type ->>  sang Json
parse: 	//từ json sang JS type

//Thể hiện dạng chuỗi ở JSON: thêm dấu ""
var a = '"abc"';
console.log(Json.parse(json));

//--- promise
setTimeout(), setInterval()	//trả về 1 id duy nhất, fetch, xmlhttprequest,
 //file reading, request animation frame: async: 	//bất đồng bộ
 
callback hell	//việc này xong mới thực hiện việc kia, lồng function trong function


    //Promisse là một khái niệm để xử lý thao tác bất đồng bộ, trước khi có pro thì t thường dung callback,
    //việc dùng callback sẽ xảy ra vấn đề call back hell(code khó nhìn, rối), pro khắc phục tình trạng này
    //3 trạng thái: penđing, fullfilled, reject 
var promise = new Promise(
    function(resolve, reject) {

    }
);
 
promise
    .then(function(course) {     //resolve chạy thì gọi then
    console.log(course);
})
    .catch(function(course) {     //reject chạy thì gọi catch
    console.log(course);
})
    .finally(function(course) {     //1 trong 2 cái chạy thì gọi cái này
    console.log(course);
});



//khai báo 2 biến promise1 và promise2 của resolve và reject
promise.resolve(),
promise.reject
promise.all([promise1, promise2])
	.then(function(result){
		var result1 = result[1];
		var result2 = result[2];

		console.log(result1.concat(result2));	//concat: nối chuỗi 
	})
	.catch(function(error){
		console.log(error);
	})
	;


-------------------------Fecth
Gọi API


