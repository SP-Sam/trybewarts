function checaBox() {
  const checar = document.querySelector('#agreement').checked;
  if (checar === true) {
    document.querySelector('#submit-btn').disabled = '';
  } else {
    document.querySelector('#submit-btn').disabled = 'true';
  }
}

window.onload = () => {
  const email = document.getElementById('email');
  const password = document.getElementById('password');
  const loginButton = document.getElementById('login');

  function checkLogin() {
    if (email.value === 'tryber@teste.com' && password.value === '123456') {
      return window.alert('Olá, Tryber!');
    }
    return window.alert('Email ou senha inválidos.');
  }

  document.querySelector('#agreement').addEventListener('click', checaBox);
  loginButton.addEventListener('click', checkLogin);
};
