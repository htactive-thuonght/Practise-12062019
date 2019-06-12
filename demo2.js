// let { name, school, company } = internship;

// console.log(internship.name, internship.school, internship.company);

// control flow if else for switch
// let const

// data type
Number;
String;
Array;
Object;

// represent entity
const students = [
{ name: "sdfsdf", age: 20, grade: 4, gender: true },
{ name: "Thuy", age: 20, grade: 5, gender: false },
{ name: "sdfdsf", age: 20, grade: 7, gender: true },
{ name: "Huong", age: 30, grade: 9, gender: false }
];

// query
// filter, map, reduce, foreach
// lọc ra những sv nam
const maleStudent = students.filter(student => student.gender);
//lọc những sv nữ và tính tổng tuổi của những sv đó
const femaleStudent = students
.filter(student => !student.gender)
.map(student => student.age)
.reduce((sum, current) => sum + current, 0);
console.log(femaleStudent);

// In ra điểm trung bình của những sinh viên có điểm >=5 sử dụng filter, map và reduce
//cachs 1
// let averageGrade = students.filter(student =>student.grade>=5 );
// let grade =  averageGrade.map(student=>student.grade)
// let total = grade.reduce((sum,current)=>(sum + current) ,0)
// const avg = total/averageGrade.length;
// console.log(grade);
// console.log("length",averageGrade.length)
// console.log(avg);


//cách 2
let averageGrade = students.filter(student =>student.grade>=5 )
.map(student=>student.grade)
let total = averageGrade.reduce((sum,current)=>(sum + current) ,0)
const avg = total/averageGrade.length;
console.log(avg);
//In ra mảng
function a() {
	var names = ["Ben", "Jafar", "Matt", "Priya", "Brian"];
    console.log("In ra mảng với forEach loop")
	names.forEach(function(name) {
		console.log(name);
    });
    console.log("In ra mảng với for loop")
    for(counter = 0; counter < names.length; counter++) {
		console.log(names[counter]);
	}
}
a();


// ---- Hiển thị các video có rating=5.0 sử dụng foreach
function b() {
	var newReleases = [
		{
			"id": 70111470,
			"title": "Die Hard",
			"boxart": "http://cdn-0.nflximg.com/images/2891/DieHard.jpg",
			"uri": "http://api.netflix.com/catalog/titles/movies/70111470",
			"rating": 4.0,
			"bookmark": []
		},
		{
			"id": 654356453,
			"title": "Bad Boys",
			"boxart": "http://cdn-0.nflximg.com/images/2891/BadBoys.jpg",
			"uri": "http://api.netflix.com/catalog/titles/movies/70111470",
			"rating": 5.0,
			"bookmark": [{ id: 432534, time: 65876586 }]
		},
		{
			"id": 65432445,
			"title": "The Chamber",
			"boxart": "http://cdn-0.nflximg.com/images/2891/TheChamber.jpg",
			"uri": "http://api.netflix.com/catalog/titles/movies/70111470",
			"rating": 4.0,
			"bookmark": []
		},
		{
			"id": 675465,
			"title": "Fracture",
			"boxart": "http://cdn-0.nflximg.com/images/2891/Fracture.jpg",
			"uri": "http://api.netflix.com/catalog/titles/movies/70111470",
			"rating": 5.0,
			"bookmark": [{ id: 432534, time: 65876586 }]
		}
	],
	videos = [];
newReleases.forEach(video => {
  if(video.rating === 5.0){
    videos.push(video);
	};
	console.log(videos) ;
})
}// ----------------List ra id vaf title bang foreach
function c() {
	var movieLists = [
			{
				name: "New Releases",
				videos: [
					{
						"id": 70111470,
						"title": "Die Hard",
						"boxart": "http://cdn-0.nflximg.com/images/2891/DieHard.jpg",
						"uri": "http://api.netflix.com/catalog/titles/movies/70111470",
						"rating": 4.0,
						"bookmark": []
					},
					{
						"id": 654356453,
						"title": "Bad Boys",
						"boxart": "http://cdn-0.nflximg.com/images/2891/BadBoys.jpg",
						"uri": "http://api.netflix.com/catalog/titles/movies/70111470",
						"rating": 5.0,
						"bookmark": [{ id: 432534, time: 65876586 }]
					}
				]
			},
			{
				name: "Dramas",
				videos: [
					{
						"id": 65432445,
						"title": "The Chamber",
						"boxart": "http://cdn-0.nflximg.com/images/2891/TheChamber.jpg",
						"uri": "http://api.netflix.com/catalog/titles/movies/70111470",
						"rating": 4.0,
						"bookmark": []
					},
					{
						"id": 675465,
						"title": "Fracture",
						"boxart": "http://cdn-0.nflximg.com/images/2891/Fracture.jpg",
						"uri": "http://api.netflix.com/catalog/titles/movies/70111470",
						"rating": 5.0,
						"bookmark": [{ id: 432534, time: 65876586 }]
					}
				]
			}
		],
		allVideoIdsInMovieLists = [];

	movieLists.forEach(movieList=> {
		movieList.videos.forEach(function(video) {
			allVideoIdsInMovieLists.push(video.id, video.title);
		});
	});

	console.log(allVideoIdsInMovieLists);

}
c();


//-----map vaf concatall

function queryNestedArray() {
    var movieLists = [{
        name: "New Releases",
        videos: [{
          "id": 70111470,
          "title": "Die Hard",
          "rating": 4.0
        }, {
          "id": 654356453,
          "title": "Bad Boys",
          "rating": 5.0
        }]
      }, {
        name: "Dramas",
        videos: [{
          "id": 65432445,
          "title": "The Chamber",
          "rating": 4.0
        }, {
          "id": 675465,
          "title": "Fracture",
          "rating": 5.0
        }]
      }],
      allVideoIdsInMovieLists = [];
  
    return movieLists.map(movieList =>
        movieList.videos.map(video =>
          video.id
        ) // [id, id]
      ) // [[id, id], [id, id]]
      .concatAll() // [id, id, id, id]
  }
  
  console.log(queryNestedArray()); 


function g() {
	var movieLists = [
			{
				name: "Instant Queue",
				videos : [
					{
						"id": 70111470,
						"title": "Die Hard",
						"boxarts": [
							{ width: 150, height: 200, url: "http://cdn-0.nflximg.com/images/2891/DieHard150.jpg" },
							{ width: 200, height: 200, url: "http://cdn-0.nflximg.com/images/2891/DieHard200.jpg" }
						],
						"url": "http://api.netflix.com/catalog/titles/movies/70111470",
						"rating": 4.0,
						"bookmark": []
					},
					{
						"id": 654356453,
						"title": "Bad Boys",
						"boxarts": [
							{ width: 200, height: 200, url: "http://cdn-0.nflximg.com/images/2891/BadBoys200.jpg" },
							{ width: 150, height: 200, url: "http://cdn-0.nflximg.com/images/2891/BadBoys150.jpg" }

						],
						"url": "http://api.netflix.com/catalog/titles/movies/70111470",
						"rating": 5.0,
						"bookmark": [{ id: 432534, time: 65876586 }]
					}
				]
			},
			{
				name: "New Releases",
				videos: [
					{
						"id": 65432445,
						"title": "The Chamber",
						"boxarts": [
							{ width: 150, height: 200, url: "http://cdn-0.nflximg.com/images/2891/TheChamber150.jpg" },
							{ width: 200, height: 200, url: "http://cdn-0.nflximg.com/images/2891/TheChamber200.jpg" }
						],
						"url": "http://api.netflix.com/catalog/titles/movies/70111470",
						"rating": 4.0,
						"bookmark": []
					},
					{
						"id": 675465,
						"title": "Fracture",
						"boxarts": [
							{ width: 200, height: 200, url: "http://cdn-0.nflximg.com/images/2891/Fracture200.jpg" },
							{ width: 150, height: 200, url: "http://cdn-0.nflximg.com/images/2891/Fracture150.jpg" },
							{ width: 300, height: 200, url: "http://cdn-0.nflximg.com/images/2891/Fracture300.jpg" }
						],
						"url": "http://api.netflix.com/catalog/titles/movies/70111470",
						"rating": 5.0,
						"bookmark": [{ id: 432534, time: 65876586 }]
					}
				]
			}
		];

	return movieLists.
	  map(movieList=> {
		return movieList.videos.
		  map(video=> {
			return video.boxarts.
			  filter(function(boxart) {
				return boxart.width === 150 && boxart.height === 200;
			  }).
			  map(function(boxart) {
				return {id: video.id, title: video.title, boxart: boxart.url};
			  });
		  }).
		  concatAll();
	  }).
	  concatAll();

}
g();
		
