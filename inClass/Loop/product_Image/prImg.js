const courseList = document.querySelector("#add");
courseList.addEventListener('click', Add);

function Add() {
  var pname = frm.product.value;
  var price = frm.price.value;
  var img = frm.img.value;
  var image = img.slice(12);
  var html = `
  <div class="card" style="width: 18rem;">
  <img class="card-img-top" src="./img/${image}" alt="Card image cap" style="height:350px">
  <div class="card-body">
    <h5 class="card-title">${pname}</h5>
    <p class="card-text" id ="price">${price}</p>
    <a href="#" class="btn btn-primary">Đặt Mua</a>
  </div>
</div>
  `;
  var app = document.querySelector(".row");
  app.innerHTML += html;
}
