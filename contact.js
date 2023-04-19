// formulaire de contact
btncontact.addEventListener("click", function () {
    contact.style.display = "block";
});

croixContact.addEventListener("click", function () {
    contact.style.display = "none";
})


// menu burger
menuBurger.addEventListener("click", function () {
    header.style.display = "initial";
    menuBurger.style.display = "none";
    croixHeader.style.display = "initial";
});

croixHeader.addEventListener("click", function () {
    header.style.display = "none";
    croixHeader.style.display = "none";
    menuBurger.style.display = "initial";
})

