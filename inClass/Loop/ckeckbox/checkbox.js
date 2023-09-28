function Check(){
    var swimming = document.getElementById("swim")
    var sing = document.getElementById("sing")
    var dance = document.getElementById("dance")
    var eat= document.getElementById("eat")

    var money=0
    if(swimming.checked){
        money+=500;
    }
    if(sing.checked){
        money+=700
    }
    if(dance.checked){
        money+=1000;
    }
    if(eat.checked){
        money+=1500
    }

    var discount_student = document.getElementById("student")
    var discount_teacher = document.getElementById("teacher")
    
    if(discount_student.checked){
        money=money*0.9;
    }
    else if (discount_teacher.checked){
        money=money*0.7;
    }
    else{
        money=money*0.5;
    }

    document.getElementById('total').innerHTML="Your total is: $"+ money;
}