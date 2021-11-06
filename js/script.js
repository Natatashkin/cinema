const schemeSvg = document.querySelector('.scheme-svg');
const totalPriceTag = document.querySelector('.counter');
const payment = document.querySelector('.button-pay');
let ticketPrice = 15;
let totalPrice = 0;

schemeSvg.addEventListener('click', onSeatClick);
payment.addEventListener('click', onPaymentClick);

function onSeatClick(e) {
  if (
    e.target.classList.value === '' ||
    (e.target.classList.value === 'active' &&
      e.target.classList.value !== 'booked')
  ) {
    e.target.classList.toggle('active');
    countTotalPrice();
  }
}

function countTotalPrice() {
  let totalSeats = document.querySelectorAll('.active').length;
  totalPrice = totalSeats * ticketPrice;
  totalPriceTag.textContent = totalPrice;
}

function onPaymentClick() {
  let checkedSeats = document.querySelectorAll('.active');
  checkedSeats.forEach(seat => {
    seat.classList.remove('.active');
    seat.classList.add('booked');
  });
}
