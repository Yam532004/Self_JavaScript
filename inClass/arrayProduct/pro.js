var women = [
  {
    id: 1,
    name: "Váy Fashion",
    code: "TC1025011BA",
    price: "250.000",
    image:
      "https://cbu01.alicdn.com/img/ibank/O1CN017JPjFz1apAappTU36_!!2208506583378-0-cib.jpg"
  },
  {
    id: 2,
    name: "Áo Local",
    code: "TC1025011BA",
    price: "100.000",
    image:
      "https://cbu01.alicdn.com/img/ibank/O1CN017JPjFz1apAappTU36_!!2208506583378-0-cib.jpg"
  },
  {
    id: 3,
    name: "Áo Vender",
    code: "TC1025011BA",
    price: "300.000",
    image:
      "https://cbu01.alicdn.com/img/ibank/O1CN017JPjFz1apAappTU36_!!2208506583378-0-cib.jpg"
  },
  {
    id: 4,
    name: "Áo khoác",
    code: "TC1025011BA",
    price: "250.000",
    image:
    "https://cbu01.alicdn.com/img/ibank/O1CN017JPjFz1apAappTU36_!!2208506583378-0-cib.jpg"},
];

var men = [
  {
    id: 1,
    name: "Áo khoác nam",
    code: "TC1025011BA",
    price: "250.000",
    image:
      "https://levents.asia/wp-content/uploads/2022/10/z3787001722124_b1f58b755e252d7859083e42d543a5b5-768x768.jpg"
  },
  {
    id: 2,
    name: "Quần Baggy nam",
    code: "TC1025011BA",
    price: "350.000",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxNn_VFkXHZrkLcT7DgV4aeNaZsNBpAnzQkg&usqp=CAU"
  },
  {
    id: 3,
    name: "Quần short Kaki",
    code: "TC1025011BA",
    price: "150.000",
    image:
      "https://product.hstatic.net/1000096703/product/1_7ad3ece11057404f8b5bac556b66cb70_master.jpg"
  },

  {
    id: 4,
    name: "Áo polo nam",
    code: "TC1025011BA",
    price: "550.000",
    image:
      "https://cbu01.alicdn.com/img/ibank/O1CN017JPjFz1apAappTU36_!!2208506583378-0-cib.jpg"
  },
];

function listProduct() {
  for (let i = 0; i <= men.length - 1; i++) {
    var demo = ' <div class="col-3" > ';
    demo += '<div class="card" style="width: 18rem;">';
    demo +=
      '<img class="card-img-top" src="' +
      men[i].image +
      '" alt="Card image cap">';
    demo += '<div class="card-body">';
    demo += '<h5 class="card-title">' + men[i].name + "</h5>";
    demo += '<p class="card-text">' + men[i].price + "</p>";
    demo += '<a href="#" class="btn btn-primary" onclick="order" >Dat mua</a>';
    demo += "</div>";
    demo += "</div>";
    demo += "</div>";
    console.log("demo");
    document.getElementById("men").innerHTML += demo;
  }

  for (let i = 0; i <= women.length - 1; i++) {
    var demo = ' <div class="col-3" > ';
    demo += '<div class="card" style="width: 18rem;">';
    demo +=
      '<img class="card-img-top" src="' +
      women[i].image +
      '" alt="Card image cap">';
    demo += '<div class="card-body">';
    demo += '<h5 class="card-title">' + women[i].name + "</h5>";
    demo += '<p class="card-text">' + women[i].price + "</p>";
    demo += '<a href="#" class="btn btn-primary" onclick="order" >Dat mua</a>';
    demo += "</div>";
    demo += "</div>";
    demo += "</div>";
    console.log("demo");
    document.getElementById("women").innerHTML += demo;
  }
}
