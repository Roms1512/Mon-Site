let submit = document.getElementById('submit');
console.log(submit);

// la fonction doit valider le formulaire

function valid(data) {
  //* Regex *//
  let regexName = /^[A-Za-z][a-z\é\è\ê\-]+$/;
  let regexMail = /[a-zA-Z0-9]+@.+[a-z]\.[a-z]{2,3}/;
  // let regexNameAndNumber = /([0-9]{1,3}) ?([a-zA-Z,\., ?]+)*/;

  // input
  let name = document.getElementById('name');
  let email = document.getElementById('email');
  let business = document.getElementById('business');
  let textArea = document.querySelector('textarea');

  console.log(regexName.test(name.value));
  console.log(regexMail.test(email.value));
  console.log(regexName.test(business.value));
  console.log(textArea.value);

  // si le formulaire et correctement rempli alors on envois
  if (regexName.test(name.value) && regexMail.test(email.value) && textArea.value!= null) {
    console.log("merci de m'avoir envoyer un message");
  } else {
    console.error('formulaire mal remplis');
  }

  // sinon on renvoie faut
} 

submit.addEventListener('click', (e)=> {
  e.preventDefault();
  console.log(e.target);
  valid()
})

