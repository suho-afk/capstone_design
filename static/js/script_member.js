//# 데이터를 안보내고 그냥 페이지에서 java 스크립에서
var idcheck = "아이디를 입력해주세요";
var idmsg = "아이디를 입력해주세요";
var confiridmmsg = "아이디 중복체크해주세요";
var passwdck = "비번을 입력해라";
var repasswdck = "비밀번호가 다릅니다";
var telcheck = "전화번호를 입력해 주세요";
var confiteldmmsg = "아이디 중복체크해주세요";

var nameck = "이름을 입력해주세요";
var repasswdck = "비밀번호를 일치하게 써주세요 ";
var email ="이메일 입력해주세요";
var tel ="전화번호 입력해주세요";
var password ="알맞은 형식으로 입력하세요";


//비밀번호 입력 형식 
function isPassword(passwd) {
	var regExp = /^(?=.*\d)(?=.*[a-zA-Z])[0-9a-zA-Z]{8,16}$/;
 	alert( password );
	return regExp.test(passwd);
}


function sample6_execDaumPostcode() {
    new daum.Postcode({
        oncomplete: function(data) {
            // 우편번호와 주소 정보를 해당 필드에 넣는다.
            document.getElementById('sample6_postcode').value = data.zonecode;
            document.getElementById("sample6_address").value =  data.address;
            // 커서를 상세주소 필드로 이동한다.
            document.getElementById("sample6_detailAddress").focus();
        }
    }).open();
}


//여기부터 수정단 알람창
function modtelconfirm() {
   if( ! modifyform.tel2.value ) {
      alert( telcheck );
      modifyform.tel2.focus();
   } else if( ! modifyform.tel3.value ){
	  alert(telcheck)
	  modifyform.tel3.focus();	
   } else {
      url = "telmodifyconfirm"+"?tel1="+modifyform.tel1.value+"&tel2="+modifyform.tel2.value+"&tel3="+modifyform.tel3.value;
      open( url, "telmodifyconfirm", "toolbar=no, menubar=no, scrollbar=no, status=no, width=500, height=300" );
   }
}
function modtelconfirmcheck(){
	if ( ! confirmform.tel2.value){
		alert(telcheck);
		modifyform.tel2.focus();	
		} else if( ! modifyform.tel3.value ){
		  alert(telcheck)
		  modifyform.tel3.focus();
		  return false;	
	   }
}
function modsettel1(tel1){
	opener.document.modifyform.tel1.value = tel1;

}
function modsettel2(tel2){
	opener.document.modifyform.tel2.value = tel2;

}
function modsettel3(tel3){
	opener.document.modifyform.tel3.value = tel3;
	window.close();
}





// 회원가입 전화 번호 알람단
function telconfirm() {
   if( ! inputform.tel2.value ) {
      alert( telcheck );
      inputform.tel2.focus();
   } else if( ! inputform.tel3.value ){
	  alert(telcheck)
	  inputform.tel3.focus();	
   } else {
      url = "telconfirm"+"?tel1="+inputform.tel1.value+"&tel2="+inputform.tel2.value+"&tel3="+inputform.tel3.value;
      open( url, "telconfirm", "toolbar=no, menubar=no, scrollbar=no, status=no, width=500, height=300" );
   }
}
function telconfirmcheck(){
	if ( ! confirmform.tel2.value){
		alert(telcheck);
		telconfirmform.tel2.focus();	
	} else if( ! inputform.tel3.value ){
	  alert(telcheck)
	  inputform.tel3.focus();
	  return false;	
   }
}
function settel1(tel1){
	opener.document.inputform.tel1.value = tel1;

}
function settel2(tel2){
	opener.document.inputform.tel2.value = tel2;

}
function settel3(tel3){
	opener.document.inputform.tel3.value = tel3;
	window.close();
}


//회원가입 중복 확인
function confirm() {
   if( ! inputform.id.value ) {
      alert( idcheck );
      inputform.id.focus();
   } else {
      url = "confirm" + "?id=" + inputform.id.value;
      open( url, "confirm", "toolbar=no, menubar=no, scrollbar=no, status=no, width=500, height=300" );
   }
}

function confirmcheck(){
	if ( ! confirmform.id.value){
		alert(idmsg);
		confirmform.id.focus();
		return false;
	}
}

//중복한 안된 아이디 화면에 다시 넣어주기
function setid(id){
	opener.document.inputform.id.value = id;
	window.close();
}


// 가입 페이지
function inputcheck() {
   if( ! inputform.id.value ) {
      alert( idcheck );
      inputform.id.focus();
      return false;
    } else if(inputform.check.value=="0"){
		alert(confirmmsg);
		inputform.id.focus();
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
   if( ! mainform.id.value ) {
      alert( idcheck )
      mainform.id.focus();
      return false;
   } else if( ! mainform.passwd.value ) {
      alert( passwdck );
      mainform.passwd.focus();
      return false;
   }
   
}
