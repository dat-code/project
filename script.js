function login() {
    let ar1 = document.getElementById("name").value;
    let ar2 = document.getElementById("mk").value;
    // let kq = "";
     if (ar1 == "Phan Văn Đạt" && ar2 == "pdat14102000") {
        location.assign("demo.html");

     } else if (ar1 !== "Phan Văn Đạt")
         {
             alert("sai tài khoản")
         } else {
             alert("sai mật khẩu")
         }
     

}