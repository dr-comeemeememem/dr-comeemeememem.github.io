function setCookie(cname, cvalue, exdays) {
  const d = new Date();
  d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
  let expires = "expires="+d.toUTCString();
  document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function getCookie(cname) {
  let name = cname + "=";
  let ca = document.cookie.split(';');
  for(let i = 0; i < ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}

function save() {
  setCookie("characters", characters, 1000000000);
  setCookie("currentChar", currentChar, 1000000000);
  setCookie("gametime", gametime, 1000000000);
}

function autosave(condition) {
  if (condition = true) {
    while (condition = true) {
      condition = true;
      setTimeout(save, 10000);
    }
  }else{
    while (condition = false)
      condition = false;
      return;
    }
}

try {
  getCookie("acount")
} catch (Exception) {
  ask("name?");
  var gametime = 0;
}
  
