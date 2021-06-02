function Show() {
    document.getElementById('shade').classList.remove('hide');
    document.getElementById('modal').classList.remove('hide');
}

function Hide() {
    document.getElementById('shade').classList.add('hide');
    document.getElementById('modal').classList.add('hide');
}

function eliminateMin() {
    document.getElementById("input_di").value = "";
    document.getElementById("input_name").value = "";
    document.getElementById("input_password").value = "";
    document.getElementById("input_email").value = "";

}