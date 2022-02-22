function send() {
    let arr = document.getElementsByTagName('input');
    let name = arr[0].value;
    var age = arr[1].value;
    var address = arr[2].value;
    var check1 = arr[5].checked;
    var check2 = arr[6].checked;
    var check3 = arr[7].checked;
    var gender = "";
    var favorite = "";
    for (var i = 5; i<=7; i++) {
              if(arr[i].checked) {
                 favorite += arr[i].value + " ";
              }
    }
    if (arr[3].checked) {
           gender = arr[3].value;
    } else {
        gender = arr[4].value;
    }
    
    if (name == "" || age == ""|| address == "") {
        alert("làm ơn! điền đầy đủ vào :-()");
        return;
    } 
    if (!Number(age)) {
        alert("age phải là số :-()");
        return;
        
    }
    if (check1 || check2 || check3) {
         
    } else {
        alert("Bạn chưa đăng ký khóa học");
        return
    }
   var choice =  confirm(" Thông tin của bạn đã được lưu: " + "</br>" + name + "</br>" + age + " </br>" + address + "</br>" + gender + " </br>"+ favorite);
    if (choice == 1) {
       alert("information sent");
    }
}

function resetForm() {
document.getElementsByTagName('form')[0].reset();

}

let nick = arr[0].value;
let old = arr[1].value;
function login() {
    if (nick && old) {
        alert("thành công")
    } else {
        alert("again")
    }
}