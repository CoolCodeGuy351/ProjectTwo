$(document).ready(function() {

        var username = $("#username");
        var password = $("#password");
        var email = $("#email");

        //getUsers();
        
        $(document).on("submit", "#registerForm", registerSubmit);

        function registerSubmit(){

             event.preventDefault();
            // Don't do anything if the name fields hasn't been filled out
            if (!username.val().trim().trim()) {
              return;
            }
            // Calling the upsertAuthor function and passing in the value of the username input
            upsertUser({
              name: username.val().trim(),
              password: password.val().trim(),
              email: email.val().trim()
            });



            function upsertUser(userData) {
            $.post("/register", userData)
              .then(function(userData){
                console.log(userData)
                localStorage.setItem("authorId",userData.id);
                document.location.href="/home";
              });
         
            }

    }

    

});