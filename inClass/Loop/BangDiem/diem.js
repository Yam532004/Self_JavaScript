function myFunction() {
  var a = document.getElementById("core1").value;
  a = parseFloat(a);
  var b = document.getElementById("core2").value;
  b = parseFloat(b);
  var c = document.getElementById("opt");
  var val = c.options[c.selectedIndex].value;
  val = parseInt(val);
  var k;
  switch (val) {
    case 1: {
      k = (a + b * 2) / 3;
      k = parseFloat(k);
      break;
    }
    case 2: {
      k = (a * 2 + b * 3) / 5;
      k = parseFloat(k);
      break;
    }
    case 3: {
      k = (a * 3 + b * 4) / 5;
      k = parseFloat(k);
      break;
    }
  }

  document.getElementById('result').value=k;

  if (k >= 8) {
    document.getElementById("result").value = k;
    document.getElementById("demo").innerHTML = "Hoc sinh gioi";
    document.getElementById("demo").style.color = "red";
  }
  if (k < 8 && k >= 6.5) {
    document.getElementById("demo").innerHTML = "Hoc sinh kha";
    document.getElementById("demo").style.color = "blue";
  }
  if (k < 6.5 && k >= 5) {
    document.getElementById("demo").innerHTML = "Hoc sinh trung binh";
    document.getElementById("demo").style.color = "yellow";
  }
  if (k < 5) {
    document.getElementById("demo").innerHTML =
      "Hoc sinh yeu. Ban can co gang nhieu hon nua !";
    document.getElementById("demo").style.color = "pink";
  }
}
function Cans() {
  document.getElementById("ten").value = "";
  document.getElementById("opt").value = "";
  document.getElementById("core1").value = "";
  document.getElementById("core2").value = "";
  document.getElementById("result").value = "";
  document.getElementById("demo").innerHTML = "HOC LUC";
}
