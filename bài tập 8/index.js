document.getElementById("sosanh").onclick = function(){
    // Đầu vào
    let tenSV1 = document.getElementById("tenSv1").value;
    let toadoX1 = document.getElementById("toadoX1").value * 1;
    let toadoY1 = document.getElementById("toadoY1").value * 1;

    let tenSV2 = document.getElementById("tenSv2").value;
    let toadoX2 = document.getElementById("toadoX2").value * 1;
    let toadoY2 = document.getElementById("toadoY2").value * 1;

    let tenSV3 = document.getElementById("tenSv3").value;
    let toadoX3 = document.getElementById("toadoX3").value * 1;
    let toadoY3 = document.getElementById("toadoY3").value * 1;

    let toadoX4 = document.getElementById("toadoX4").value * 1;
    let toadoY4 = document.getElementById("toadoY4").value * 1;

    // Xứ lí
    /* Tính chiều dài quảng đường bằng đường chéo hình chữ nhật                      z = Math.sqrt(X*X + Y*Y) */
    let long1 = Math.sqrt(toadoX1 * toadoX1 + toadoY1 * toadoY1);
    let long2 = Math.sqrt(toadoX2 * toadoX2 + toadoY2 * toadoY2);
    let long3 = Math.sqrt(toadoX3 * toadoX3 + toadoY3 * toadoY3);
    let long4 = Math.sqrt(toadoX4 * toadoX4 + toadoY4 * toadoY4);

    let range1 = Math.abs(long4 - long1);
    let range2 = Math.abs(long4 - long2);
    let range3 = Math.abs(long4 - long3);
    let result = "";
    if(range1 > range2 && range1 > range3){
        result = tenSV1;
    }
    else if(range2 > range1 && range2 > range3){
        result = tenSV2;
    }else if(range3 > range1 && range3 > range2){
        result = tenSV3;
    }else{
        result = "không xác định";
    }

    //Đầu ra
    document.getElementById("showResult").innerHTML = "Sinh viên xa nhất là : " + result;
}