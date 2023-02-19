//스크롤 버튼 :  연습용으로 만든거니 나중에 지우자
function sTo() {
  window.scrollTo({ top: 0, behavior: "smooth" });
}
function sBy() {
  window.scrollBy({ top: 500, behavior: "smooth" });
}

//로그인창 띄우기
function openLogInWindow() {
  window.open(
    "200.contents/220.topMenu/loginPage.html",
    "loginwidow",
    "width=1000px,height=1000px,left=400px,top=150px"
  );
}
//스터디 하위메뉴 default 값 none -> 클릭시 block 되는 함수
function doDisplaystudySubMenu() {
  var con = document.getElementById("studySubMenu");
  if (con.style.display == "none") {
    con.style.display = "block";
  } else {
    con.style.display = "none";
  }
}
//갤러리박스 이미지 변경
function changeImg(animal) {
  let value = "";
  if (animal === "dog") {
    value = "999.images/chi.jpg";
  } else if (animal === "cat") {
    value = "999.images/cat.jpg";
  } else if (animal === "tiger") {
    value = "999.images/tiger.png";
  } else if (animal === "lion") {
    value = "999.images/lion.jpg";
  }
  document.getElementById("galleryImg").src = value;
  console.log(animal); //확인용 콘솔 창
  console.log((document.getElementById("galleryImg").src = value)); //확인용 콘솔 창
}
