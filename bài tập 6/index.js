document.getElementById("tinhngay").onclick = function () {
  let ngay = 0;
  let thang = +document.getElementById("thang").value;
  let nam = +document.getElementById("nam").value;
  if (thang > 12 && thang < 1) {
    alert("Tháng phải lớn hơn 0 và nhỏ hơn 13");
  } else if (nam < 1900) {
    alert("năm phải lớn hơn 1900");
  }
  if (nam % 4 == 0) {
    switch (thang) {
      case 1:
        ngay = 31;
        break;
      case 2:
        ngay = 29;
        break;
      case 3:
        ngay = 31;
        break;
      case 4:
        ngay = 30;
        break;
      case 5:
        ngay = 31;
        break;
      case 6:
        ngay = 30;
        break;
      case 7:
        ngay = 31;
        break;
      case 8:
        ngay = 31;
        break;
      case 9:
        ngay = 30;
        break;
      case 10:
        ngay = 31;
        break;
      case 11:
        ngay = 30;
        break;
      case 12:
        ngay = 31;
        break;
    }
  } else {
    switch (thang) {
      case 1:
        ngay = 31;
        break;
      case 2:
        ngay = 28;
        break;
      case 3:
        ngay = 31;
        break;
      case 4:
        ngay = 30;
        break;
      case 5:
        ngay = 31;
        break;
      case 6:
        ngay = 30;
        break;
      case 7:
        ngay = 31;
        break;
      case 8:
        ngay = 31;
        break;
      case 9:
        ngay = 30;
        break;
      case 10:
        ngay = 31;
        break;
      case 11:
        ngay = 30;
        break;
      case 12:
        ngay = 31;
        break;
    }
  }
  document.getElementById("result6-wrapper").style.display = "block";
  document.getElementById("result6").innerHTML = "Có " + ngay + " ngày";
};
