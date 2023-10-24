// var id_nama = document.getElementById("nama");
// var id_umur = document.getElementById("umur");
// var id_tamp = document.getElementById("tampilan");

// function kirim(){
//     id_tamp.innerText = id_nama.value +", "+ id_umur.value; 
// }

// function replacename(
//     let name1 = prompt("Siapakah nama anda?", "")
//     document.getElementById("name1").innerHTML= name1
// )

// replacename()

function setSenderUI(name, birtDate, gender, messages){
    document.getElementById("sender-full-name").innerHTML= name;
    document.getElementById("sender-birt-date").innerHTML= birtDate;
    document.getElementById("sender-gender").innerHTML= gender;
    document.getElementById("sender-messages").innerHTML= messages;
}

function validateForm(){
    const name = document.forms["message-form"]["full-name"].value;
    const birtDate = document.forms["message-form"]["birth-date"].value;
    const gender = document.forms["message-form"]["gender"].value;
    const messages = document.forms["message-form"]["messages"].value;
    
    if(name=="" || birtDate=="" || gender=="" || messages==""){
        alert("Tidak boleh ada yang kosong");
        return false;
    }

    setSenderUI(name, birtDate, gender, messages);

    return false;
}