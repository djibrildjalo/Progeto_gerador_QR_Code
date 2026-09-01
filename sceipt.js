const container = document.querySelector(".container");
const qrCodeBtn = document.querySelector("#qr-form button")

const qrCodeInput = document.querySelector("#qr-form input")

const qrCodeImg = document.querySelector("#qr-code img")

// eventos
// Gerar QR Code
function generationQrCode(){
    const qrCodeInputValue = qrCodeInput.value;

    if(!qrCodeInputValue) return;

    qrCodeBtn.innerHTML = "Gerando código...";

    qrCodeImg.src = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${qrCodeInputValue}`

    qrCodeImg.addEventListener("load", () => {
        container.classList.add("active");
        qrCodeBtn.innerHTML = "Código criado!";
    })
}

qrCodeBtn.addEventListener("click", () => {
    generationQrCode();
});

// Para permitir ENTER gerar codigo quando precionado
qrCodeInput.addEventListener("keydown", (e) => {
    if(e.code === "Enter"){
        generationQrCode();
    }
});

// Limpar área do QR Code
qrCodeInput.addEventListener("keyup", () => {
    if(!qrCodeInput.value) {
        container.classList.remove("active");
        qrCodeBtn.innerHTML = "Gerar QR Code!";
    }
})