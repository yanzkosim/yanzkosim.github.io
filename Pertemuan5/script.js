function validasi() {
    let nama = document.getElementById("nama").value;
    let email = document.getElementById("email").value;
    let alamat = document.getElementById("alamat").value;
    let nrp = document.getElementById("nrp").value;
    let status_vaksin = document.querySelector('input[name="status-vaksin"]:checked').value;
    if(nama != "" && email != "" && alamat != "" && nrp != "" && status_vaksin != "Belum") {
        return true;
    }
    else if(nama != "" && email != "" && alamat != "" && nrp != "" && status_vaksin === "Belum") {
        alert("Anda harus vaksin terlebih dahulu untuk melanjutkan kuliah tatap muka");
    }
    else {
        alert("Anda harus mengisi data dengan lengkap!");
    }
}