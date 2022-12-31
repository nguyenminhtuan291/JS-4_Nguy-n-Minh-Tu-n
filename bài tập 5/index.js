document.getElementById("daybefore").onclick = function () {
  let yesterdayDate = today.valueAsDate;
  yesterdayDate.setDate(yesterdayDate.getDate() - 1);
  let day = yesterdayDate.getDate();
  let month = yesterdayDate.getMonth() + 1;
  let year = yesterdayDate.getFullYear();
  daybefore = month + "/" + day + "/" + year;
  document.getElementById("result5-wrapper").style.display = "block";
  document.getElementById("result5").innerHTML = daybefore;
};

document.getElementById("dayafter").onclick = function () {
  let tomorrowDate = today.valueAsDate;
  tomorrowDate.setDate(tomorrowDate.getDate() + 1);
  let day = tomorrowDate.getDate();
  let month = tomorrowDate.getMonth() + 1;
  let year = tomorrowDate.getFullYear();
  dayafter = month + "/" + day + "/" + year;
  document.getElementById("result5-wrapper").style.display = "block";
  document.getElementById("result5").innerHTML = dayafter;
};