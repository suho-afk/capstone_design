//# 데이터를 안보내고 그냥 페이지에서 java 스크립에서
var idcheck = "아이디를 입력해라";
var idmsg = "아이디를 입력해라";
var passwdck = "비번을 입력해라";
var repasswdck = "비번이 다름 ㅋㅋ";
var nameck = "이름을 입력해라";
var repasswdck = "비밀번호를 일치하게 써주세요 ";
var email ="이메일 입력해라 임마";
var tel ="전화번호 입력해라 임마";
var password ="알맞은 형식으로 입력하세요";


//비밀번호 입력 형식 
function isPassword(passwd) {
	var regExp = /^(?=.*\d)(?=.*[a-zA-Z])[0-9a-zA-Z]{8,16}$/;
 	alert( password );
	return regExp.test(passwd);
}




//중복 확인
function confirm() {
   if( ! inputform.userId.value ) {
      alert( idcheck );
      inputform.userId.focus();
   } else {
      url = "confirm" + "?userId=" + inputform.userId.value;
      open( url, "confirm", "toolbar=no, menubar=no, scrollbar=no, status=no, width=500, height=300" );
   }
}

//중복확인 
function confirmcheck(){
	if ( ! confirmform.userId.value){
		alert(idmsg);
		confirmform.userId.focus();
		return false;
	}
}




//중복한 안된 아이디 화면에 다시 넣어주기
function setid(userId){
	opener.document.inputform.userId.value = userId;
	window.close();
}




// 가입 페이지
function inputcheck() {
   if( ! inputform.userId.value ) {
      alert( idcheck );
      inputform.userId.focus();
      return false;
   } else if( ! inputform.passwd.value ) {
      alert( passwdck );
      inputform.passwd.focus();
      return false;
   } else if( inputform.passwd.value != inputform.repasswd.value ) {
      alert( repasswdck );
      inputform.passwd.focus();
      return false;
   } else if( ! inputform.name.value ) {
      alert( nameck );
      inputform.name.focus();
      return false;
   }else if( ! inputform.email1.value ) {
      alert( email );
      inputform.email1.focus();
      return false;
   }else if( ! inputform.email2.value ) {
      alert( email );
      inputform.email2.focus();
      return false;
   }else if( ! inputform.tel1.value ) {
      alert( tel );
      inputform.tel1.focus();
      return false;
   }else if( ! inputform.tel2.value ) {
      alert( tel );
      inputform.tel2.focus();
      return false;
   }else if( ! inputform.tel3.value ) {
      alert( tel );
      inputform.tel3.focus();
      return false;
   }
}


// 메인 페이지
function maincheck() {
   if( ! mainform.userId.value ) {
      alert( idcheck )
      mainform.userId.focus();
      return false;
   } else if( ! mainform.passwd.value ) {
      alert( passwdck );
      mainform.passwd.focus();
      return false;
   }
   
}
