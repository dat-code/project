// let greet = "Xin chào codegym online!";
// const Lesson = "Sử dụng modul trong es6";
// alert(greet);
// function greeting(name, content) {
//     return name + " " + content;
// }

// // Xuất các biến và hàm
// export {greet, Lesson, greeting};

// 
let Kids = [
    {id: 1, name: "a", age: 3},
    {id: 2, name: "b", age: 2},
    {id: 3, name: "c", age: 7},
    {id: 4, name: "d", age: 4},
    {id: 5, name: "e", age: 8}
];
const mau_giao = [];
Kids.forEach( Kid => {
   if(Kid.age < 6) {
       mau_giao.push({
           id:Kid.id,
           name:Kid.name
       })
   }
});
console.log(mau_giao);
const Kids2 = [];
 Kids.forEach(Kid => {
     if (Kid.age < 11 && Kid.age > 5 ) {
        Kids2.push({
               Id: Kid.id,
               name:Kid.name
           })
     }
 });
 console.log(Kids2)

 const chidren = Kids.filter(kid => kid.age < 11 && kid.age > 5).map(kid => ({
     id:kid.age,
     name:kid.name
 }));
 console.log(chidren)


// console.log([...[...'...']].length)
