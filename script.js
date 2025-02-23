const form = document.getElementById("messageForm");
const successMessage = document.getElementById("success-message");
const errorMessage = document.getElementById("error-message");

form.addEventListener("submit", async (e) => {
    e.preventDefault();//Formun sayfayı yenilemesini engellemek için.

    //Form içindeki veriler.
    const name = document.getElementById("name").value.trim();;
    const email = document.getElementById("email").value.trim();;
    const message = document.getElementById("message").value.trim();;

    //Hata mesajları
    if (!name || !email || !message) {
        errorMessage.textContent = "Lütfen Tüm Alanları Doldurunuz!";
        errorMessage.style.display = "block";
        successMessage.style.display = "none";
        return;
    }

    //verileri json formatına dönüştürmek için
    const formMessage = {
        name: name,
        email: email,
        message: message
    };

    try {
        const res = await fetch(form.action, {
            method: form.method,
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(formMessage)
        });
        if (!res.ok) {
            successMessage.style.display = "none";
            errorMessage.style.display = "block";
            console.log("Mesaj gönderimi başarısız!,batuhancolk@gmail.com adresi ile bağlantıya geçiniz!", error);
        }
        successMessage.style.display = "block";
        errorMessage.style.display = "none";
        form.reset(); // Formu sıfırla
    } catch (error) {
        successMessage.style.display = "none";
        errorMessage.style.display = "block";
        console.log("Mesaj gönderimi başarısız!,batuhancolk@gmail.com adresi ile bağlantıya geçiniz!", error);
    }

});


