function Save()
{
    let fullname = document.getElementById('name').value;
    let email = document.getElementById('email').value;
    let phone = document.getElementById('phone').value;
    let address = document.getElementById('address').value;
    let gender = '';

    if (document.getElementById('male').checked)
    {
        gender = document.getElementById('male').value;
    }
    else if(document.getElementById('female').checked)
    {
        gender = document.getElementById('female').value;
    }
    

    if(fullname && email && phone && address && gender)
    {
        let students = localStorage.getItem('students') ?  JSON.parse(localStorage.getItem('students')) : [];
        students.push({
            fullname: fullname,
            email: email,
            phone: phone,
            address: address,
            gender: gender,
        });

        localStorage.setItem('students', JSON.stringify(students));

        this.liststudents();
    } 
 }

function liststudents() {
let students = localStorage.getItem('students') ?  JSON.parse(localStorage.getItem('students')) : [];

console.log(students.length);
if(students.length === 0){
    document.getElementById('grid-view-table').style.display = 'none';
    return false;
}
else{
document.getElementById('grid-view-table').style.display = 'block';
}
let tableContent = `
        <tr>
            <td>STT</td>
            <td>Họ và tên</td>
            <td>Cấp bậc</td>
            <td>Số hiệu</td>
            <td>Giới tính</td>
            <td>Đơn vị</td>
            <td></td>
        </tr> `;

    students.forEach((student,n) => {
        let studentId =  n;
        let genderLabel = parseInt(student.gender) === 1 ? 'Nam' : 'Nữ';
        n++;   

    tableContent += `
        <tr>
            <td>${n}</td>
            <td>${student.fullname}</td>
            <td>${student.email}</td>
            <td>${student.phone}</td>
            <td>${genderLabel}</td>
            <td>${student.address}</td>
            <td>
                <a href='#' onclick='Delete(${studentId})'>Delete</a> 
            </td>
        </tr> `;
    })

    document.getElementById('list-students').innerHTML = tableContent;
}

function Delete(id) {

alert("Bạn muốn xóa sinh viên này");

let students = localStorage.getItem('students') ?  JSON.parse(localStorage.getItem('students')) : [];

students.splice(id, 1);

localStorage.setItem('students', JSON.stringify(students));

liststudents(); 
}