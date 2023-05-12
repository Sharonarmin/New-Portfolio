function sendMail(){
    var params = {
        name : document.getElementById("name").value,
        email : document.getElementById("email").value,
        message : document.getElementById("message").value,
    };

    const serviceID = "service_yicijks"
    const templateID = "template_w4vfksl"

    emailjs.send(serviceID,templateID,params)
    .then(
        res =>{
            document.getElementById("name").value = "";
            document.getElementById("email").value = "";
            document.getElementById("message").value = "";
            console.log(res);
            Swal("Message send Successfully")
        }
    )
    .catch((err) => console.log(err));
}