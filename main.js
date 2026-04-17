function youmayproceed() {
    let password = ""
    do {
        password = prompt ("Enter Password longer than 4 characters", "");
    }
    while (password.length < 5);
    window.alert("Entered Password: " + password);

}

