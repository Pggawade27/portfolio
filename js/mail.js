const firebaseConfig = {
    apiKey: "AIzaSyBrklH96fra2J1HXES8adrmNPcyJ9uJ0Ms",
    authDomain: "contactform-cde43.firebaseapp.com",
    databaseURL: "https://contactform-cde43-default-rtdb.firebaseio.com",
    projectId: "contactform-cde43",
    storageBucket: "contactform-cde43.appspot.com",
    messagingSenderId: "136133069584",
    appId: "1:136133069584:web:eff7728ebb277948433395",
    measurementId: "G-85DNYNF1RT"
  };

  firebase.initializeApp(firebaseConfig);

 var contactFormDB = firebase.database().ref('contactForm')

  document.getElementById('contactForm').addEventListener('submit' , submitForm);

  function submitForm(e){
    e.preventDefault();

    var name = getElementVal('name');
    var cNumber = getElementVal('cNumber');
    var emailid = getElementVal('emailid');
    var text = getElementVal('text');

    saveMessages(name, cNumber, emailid, text);

    // enable alert

    document.querySelector('.alert').style.display = 'block';

    // remover alert

    setTimeout(() => {
        document.querySelector('.alert').style.display = 'none';
    }, 2000);

    // reset form

    document.getElementById('contactForm').reset();


  }

  const saveMessages = (name, cNumber, emailid, text ) =>{
    var newContactForm = contactFormDB.push();
    newContactForm.set({
        name: name,
        cNumber: cNumber,
        emailid: emailid,
        text: text,
    })
  }

  const getElementVal = (id) =>{
    return document.getElementById(id).value;
  }