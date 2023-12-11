// Defina a data final da promoção
const promotionEndDate = new Date('2023-12-31T23:59:59');

function updateCountdown() {
  const currentDate = new Date();
  const timeDifference = promotionEndDate - currentDate;

  if (timeDifference > 0) {
    const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

    document.getElementById('countdown').innerHTML = `${days}d | ${hours}h | ${minutes}m | ${seconds}s`;
  } else {
    document.getElementById('countdown').innerHTML = 'A promoção acabou!';
  }
}

// Atualiza o countdown a cada segundo
setInterval(updateCountdown, 1000);

// Chama a função uma vez para exibir o countdown imediatamente ao carregar a página
updateCountdown();
