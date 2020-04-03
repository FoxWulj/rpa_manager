function identify(){

    var subButton = document.getElementById("subBut");
    var userID = document.getElementById("checkInID");
    var userP = document.getElementById("checkInPass");

    subButton.onclick = function() {
        if(userID.value == "" || userP.value == ""){
            var info = document.getElementById("login-info");
            var infoStyle = info.style;
            infoStyle.visibility = "visible";
            info.innerText = "用户名或密码不能为空";
        }else if(userID.value == "tom" && userP.value == 123){
            window.location.href="http://mail.swpu.edu.cn/";    
        }else{
            var info = document.getElementById("login-info");
            var infoStyle = info.style;
            infoStyle.visibility = "visible";
            info.innerText = "用户名或密码错误";
        }
    }
}

window.onload = identify;