function falarApolo(modelo) {
    const numero = "31995280992"; // Número que você me passou antes
    const mensagem = `Olá Apolo, vim pelo site e gostaria de consultar a disponibilidade do ${modelo}.`;
    const url = `https://wa.me/${numero}?text=${encodeURIComponent(mensagem)}`;
    window.open(url, '_blank');
}