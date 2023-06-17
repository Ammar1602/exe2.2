function login() {
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;

    // Cek jika username dan password sesuai
    if (username === 'admin' && password === 'password') {
        alert('Login berhasil!');
        // Lanjutkan ke halaman berikutnya atau lakukan tindakan lain
        window.location.href = 'Page1.html';
    } else {
        alert('Username atau password salah!');
    }

    // Menghapus data input setelah proses login
    document.getElementById('username').value = '';
    document.getElementById('password').value = '';
}