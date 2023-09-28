var String =" ";
function argument(){
    for (var component of arguments){
        String+=`${component}- `
    }
    console.log(String)
}
argument(1,2,3,4,5,6,7,8,9);