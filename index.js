function confirmation(event) {
    event.stopPropagation();
    event.preventDefault();

    let formConfirm = `Please confirm account creation for ${inputEmail.value}?`;
    const confirmation = confirm(formConfirm);
    if (confirmation == true) {
        formConfirm = document.querySelector("#signUp");
        let inputEmail = document.querySelector("#inputEmail");
        formConfirm.innerHTML = `<div>Hello user with email: ${inputEmail.value}</div><img src="https://i.natgeofe.com/n/548467d8-c5f1-4551-9f58-6817a8d2c45e/NationalGeographic_2572187.jpg?w=374&h=250" class="img-fluid" alt="cat">`;
        inputEmail.innerHTML = inputEmail.value;
    }
    else window.location.reload();
}




