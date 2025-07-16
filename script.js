let dolar = 5.6;

let usdInput = document.querySelector("#usd");
let brlInput = document.querySelector("#brl");

usdInput.addEventListener("input", () => {
    convert("usd-to-brl");
});

brlInput.addEventListener("input", () => {
    convert("brl-to-usd");
});

// Configura o valor inicial de USD
usdInput.value = "1000"; // valor inicial
convert("usd-to-brl");

// Funções

function formatCurrency(value, currency = 'BRL') {
    return new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: currency,
        minimumFractionDigits: 2
    }).format(value);
}

function fixValue(value) {
    let fixedValue = value.replace(/[^\d,.-]/g, ''); // Remove qualquer caractere não numérico
    let floatValue = fixedValue.replace(",", "."); // Substitui vírgula por ponto
    return parseFloat(floatValue) || 0;  // Retorna 0 se não for um número válido
}

function convert(type) {
    let result;

    if (type === "usd-to-brl") {
        let fixedValue = fixValue(usdInput.value);
        result = fixedValue * dolar;
        brlInput.value = formatCurrency(result, 'BRL');
    }

    if (type === "brl-to-usd") {
        let fixedValue = fixValue(brlInput.value);
        result = fixedValue / dolar;
        usdInput.value = result.toFixed(2);
    }
}
