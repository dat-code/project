const natural = [
  {"id":"1", "name":"voi","type":"có vú"},
  {"id":"2", "name":"vịt","type":"chim"},
  {"id":"3", "name":"cá chép","type":"cá"},
  {"id":"4", "name":"rắn","type":"bò sát"},
  {"id":"5", "name":"giun","type":"côn trùng"},
  {"id":"6", "name":"cá sấu","type":"bò sát"},
  {'id':"7", "name":"sâu","type":"côn trùng"}

];

// let animal = natural.map(Mysucvat);
// function Mysucvat(sucvat) {
//      return [sucvat.id,sucvat.name,sucvat.type].join(" ");
// }
let animal = new Set(natural)
console.log(animal)

const them = {"id":"8","name":"con mèo","type":"có vú"};

let animal2 = new Set(animal);
animal2.add(them)

console.log(animal2)

const check = {'id':"7", "name":"sâu","type":"côn trùng"};
let result = false;
natural.forEach(suc => {
if(check.id == suc.id && check.name == suc.name && check.type == suc.type) {
  return result = true;
} else {
  return result = false;
}
});
console.log(result)

// xóa
let deleteanimal = (xoa) => {
  animal.forEach(suc => {
    if(xoa == suc.id ) {
      animal.delete(suc);
    } 
    })
};

deleteanimal("4")




 

 
  
