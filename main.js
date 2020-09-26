const $btn = document.querySelector('#btn-kick');
const $btnSecond = document.querySelector('#btn-high-kick');
const $btnReset= document.querySelector('#reset');

const character = {
  name: 'Picachu',
  defaultHP: 100,
  damageHP: 100,
  elHP: document.querySelector('#health-character'),
  elProgressBar: document.querySelector('#progressbar-character'),
}

const enemy = {
  name: 'Charmander',
  defaultHP: 100,
  damageHP: 100,
  elHP: document.querySelector('#health-enemy'),
  elProgressBar: document.querySelector('#progressbar-enemy'),
}

$btn.addEventListener('click', function () {
  console.log('kick: ');
  changeHP(random(20), character);
  changeHP(random(20), enemy);
})

$btnSecond.addEventListener('click', function () {
  changeHP(random(40), character);
  changeHP(random(40), enemy);
})

$btnReset.addEventListener('click', function () {
  console.log('console: ');
  reset(character);
  reset(enemy);
})

function init() {
  renderHP(character);
  renderHP(enemy);
}

function reset(person) {
  person.elProgressBar.style.width = 100 + '%';
  person.elHP.innerText = 100;
}

function renderHP(person) {
  renderHPLife(person);
  renderProgressbarHP(person);
}

function renderHPLife(person) {
  person.elHP.innerText = `${person.damageHP} / ${person.defaultHP}`
}

function renderProgressbarHP(person) {
  person.elProgressBar.style.width = person.damageHP + '%';
}

function changeHP(count, person) {
  if (person.damageHP < count) {
    person.damageHP = 0;
    alert(`Its lose ${person.name}`);
    $btn.disabled = true;
  } else {
    person.damageHP -= count;
  }

  renderHP(person);
}

function random(num) {
  return Math.ceil(Math.random() * num);
}

init();

