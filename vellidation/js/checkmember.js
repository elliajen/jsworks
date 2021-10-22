function checkMember(){
    var form = document.regForm;
    var id = form.memberid.value;
    var pwd1 = form.passwd.value;
    var pwd2 = form.passwd2.value;
    var name = form.name.value;

    //0-9A-Za-z 로 이루어진 5~ 10자리로 입력
    var regEx = /^[0-9A-Za-z]{5,10}$/;  //{-,-} 띄어쓰기하면 에러남

    //아이디는 4~8자까지 입력가능
    if(id.length < 4 || id.length > 8){
        alert("아이디는 4자에서 8자까지 입력해주세요");
        form.id.select();
        return false;
    }else if(!regEx.test(pwd1)){ //패스워드와 정규식이 일치하지 않으면 
        alert("패스워드는 5~10자리까지 영문과 숫자를 입력해주세요");
        form.pwd1.select();
        return false;
    }else if(pwd1 != pwd2){
        alert("비밀번호가 일치하지 않습니다.");
        form.pwd2.select();
        return false;
    }else if(name == ""){
        alert("이름은 필수 입력 항목입니다.");
        form.name.focus();
        return false;
    }
    else{
        form.submit();
    }
}