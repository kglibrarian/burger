// Make sure we wait to attach our handlers until the DOM is fully loaded.
 $(document).ready(function() { 
 
    $(".devour_form").on("click", function(event) {
        // event.preventDefault();

        var burger_id = $(this).children(".burger_id").val();
        
        console.log(burger_id);
        $.ajax("/burgers/" + burger_id, {
            type: "PUT",
            // url: "/burgers/" + burger_id
        }).then(function(data) {
            console.log(data);
            location.reload();
        });
   
    });


//   $(".create-form").on("submit", function(event) {
//       // Make sure to preventDefault on a submit event.
//       event.preventDefault();
//       console.log(newBurger);
//       var newBurger = {
//         burgername: $("#bn").val().trim(),
//         devoured: false,      
//       };
//       console.log(newBurger);

//       // Send the POST request.
//       $.ajax("/burgers/create", {
//         type: "POST",
//         data: burger
//       }).then(function() {
//           console.log("created a new burger");
//           // Reload the page to get the updated list
//           location.reload();
//         }
//       );
      
//     });
});

// burger_name: $("#bn [name=burger-name]").val().trim(),

