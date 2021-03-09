database.ref('/Positions/').on('value', function(snapshot) {
    let items = []
    snapshot.forEach(function(ds) {
        items.push(ds.child('Position').val())
    })

    sessionStorage.setItem('Positions', JSON.stringify(items))
})

$('.overlay').on('click', function() {
    $('#sidebar').removeClass('active');
    $('.overlay').removeClass('active');
});

$('#sidebarCollapse').on('click', function() {
    $('#sidebar').addClass('active');
    $('.overlay').addClass('active');
    $('.collapse.in').toggleClass('in');
    $('a[aria-expanded=true]').attr('aria-expanded', 'false');
});

// const addAdminForm = document.querySelector('#add-admin-form');
// addAdminForm.addEventListener('submit', (e) => {
//     e.preventDefault();

//     // get user info
//     const email = addAdminForm['email'].value;
//     const password = addAdminForm['password'].value;

//     // add user 
//     firebase.auth().createUserWithEmailAndPassword(email, password).then(cred => {
//         console.log(cred.user);

//         const modal = document.querySelector('#modal-add');
//         M.Modal.getInstance(modal);
//         addAdminForm.reset();
//         M.toast({html: 'New Administrator has been added successfully!'});
//     });
// })