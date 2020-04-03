function changeCode(){
    var i = document.getElementById('icode');
    i.src = '/user/check_code/?'+Math.random();
}



function parse() {

    // alert(1);

    var password = document.getElementById('checkInPass').value;


    var password1 = md5(password);

    document.getElementById('checkInPass').value=password1

    return true;
}