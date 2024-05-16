

const loginOut = document.getElementById('log__out');

loginOut.addEventListener('click', loginExit)

function loginExit() {
  localStorage.clear();
}