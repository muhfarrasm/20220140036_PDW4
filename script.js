function show() {
    alert("halaman error, silahkan kembali lain waktu :)")
}

function updateClock() {
    var tanggal = new Date();
    document.getElementById("hasil").innerHTML = tanggal;
}

updateClock(); 

setInterval(updateClock, 1000); 
