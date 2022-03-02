// localStorage.setItem('armys', 'Phan Văn Giang');
// console.log(localStorage.getItem('armys'));

function save() {
    let fullname = document.getElementById("fullname").value;
    let day = document.getElementById("date").value;
    let number = document.getElementById("sh").value;
    let cv = document.getElementById("cv").value;
    let cb = document.getElementById("cb").value;
    let gender = "";
    if (document.getElementById("male").checked) {
            gender = document.getElementById("male").value;
    } else if (document.getElementById("female").checked) {
        gender = document.getElementById("female").value;
    }
    if (_.isEmpty(fullname)) {
      document.getElementById("fullname-error").innerHTML = "Bị trống";    
    }
else {
    document.getElementById("fullname-error").innerHTML = "";
}

if (_.isEmpty(day)) {
    document.getElementById("date-error").innerHTML = "Bị trống" ;
} else {
    document.getElementById("date-error").innerHTML = "" ;

}

if (_.isEmpty(number)) {
       document.getElementById("sh-error").innerHTML = "Bị trống";
} else if (number.length < 7) {
    document.getElementById("sh-error").innerHTML = "Số hiệu không tồn tại";

}
 else {
  document.getElementById("sh-error").innerHTML = "" ;
}

if (_.isEmpty(cv)) {
    document.getElementById("cv-error").innerHTML = "Bị trống";
} else {
    document.getElementById("cv-error").innerHTML = "";

}
if (_.isEmpty(cb)) {
     document.getElementById("cb-error").innerHTML = "Bị trống";
} else {
    document.getElementById("cb-error").innerHTML = "";

}
if (_.isEmpty(gender)) {
        document.getElementById("gender-error").innerHTML = "Bị trống";
} else {
    document.getElementById("gender-error").innerHTML = "";
}
   if (fullname && gender && day && number && cb && cv ) {
    let armys = localStorage.getItem('armys') ?  JSON.parse(localStorage.getItem('armys')) : [];
    armys.push({
        fullname: fullname,
        gender: gender,
        day: day,
        number: number,
        cb: cb,
        cv: cv,
    });
   localStorage.setItem('armys', JSON.stringify(armys));
   this.renderListarmys();
} 
}

function renderListarmys() 
{
    let armys = localStorage.getItem('armys') ?  JSON.parse(localStorage.getItem('armys')) : [];
    //   console.log(armys.length);
    if (armys.length === 0) { 
        document.getElementById("list-armys").style.display = 'none';
        return false;
    } 
    document.getElementById("list-armys").style.display = 'block';
    
    let tablearmys = `
   <tr>
   <td>STT</td>
   <td>Họ và tên</td>
   <td>giới tính</td>
   <td>Ngày tháng năm sinh</td>
   <td>số hiệu QN</td>
   <td>Cấp bậc</td>
   <td>Chức vụ</td>
   <td></td>
</tr>`;

armys.forEach((armys, index) => {
   
    let armysId = index;
    index++;
    tablearmys += `
    <tr>
    <td>${index}</td>
    <td>${armys.fullname}</td>
    <td>${armys.gender}</td>
    <td>${armys.day}</td>
    <td>${armys.number}</td>
    <td>${armys.cb}</td>
    <td>${armys.cv}</td>
    <td>
    <a href="#" >Edit</a> | <a href="#" onclick="Deletearmys(${armysId})">Xóa</a> 
    </td>
</tr>`
  });
  document.getElementById("grid-armys").innerHTML = tablearmys;
}     

function Deletearmys(id) {
    let armys = localStorage.getItem('armys') ?  JSON.parse(localStorage.getItem('armys')) : [];

    armys.splice(id, 1);
    localStorage.setItem('armys',JSON.stringify(armys));
    renderListarmys();
}