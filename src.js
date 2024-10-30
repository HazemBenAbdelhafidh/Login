function verif() {
  // Retrieve values from input fields
  let nom = document.getElementById("username").value.trim();
  let email = document.getElementById("Email").value.trim();
  let pw = document.getElementById("password").value.trim();
  let day = document.getElementById("day").value;
  let month = document.getElementById("month").value;
  let year = document.getElementById("year").value;

  // Regular expression for alphabetical characters only

  if (day > 31 || day < 1) {
    alert("Jour doit etre <=31");
    return false;
  }
  if (month > 12 || month < 1) {
    alert("Mois doit etre <=12");
    return false;
  }
  if (year > 2013) {
    alert("Annés doit etre <2013");
    return false;
  }

  // Validate 'nom' (name)
  if (nom === "" || !test(nom)) {
    alert("Nom et prénom erroné");
    return false;
  }

  // Validate 'email'
  const atIndex = email.indexOf("@");
  const dotIndex = email.lastIndexOf(".");
  const domain = email.substring(dotIndex + 1);

  if (atIndex < 1 || dotIndex < atIndex + 2 || domain !== "com") {
    alert("Email erroné");
    return false;
  }

  // Validate 'password' (minimum length)
  if (pw.length < 6) {
    alert("Le mot de passe doit contenir au moins 6 caractères");
    return false;
  }
}

function test(ch) {
  ch = ch.toUpperCase();
  ok = true;
  for (i = 0; i <= ch.length; i++) {
    if (ch[i] > "Z" || (ch[i] < "A" && ch[i] != " ")) {
      ok = false;
    }
  }
  return ok;
}
