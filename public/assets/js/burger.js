// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(function() { 
  $(".create-form").on("submit", function(event) {
      // Make sure to preventDefault on a submit event.
      event.preventDefault();
      console.log(newBurger);
      var newBurger = {
        burgername: $("#bn").val().trim(),
        devoured: false,      
      };
      console.log(newBurger);

      // Send the POST request.
      $.ajax("/burgers/create", {
        type: "POST",
        data: newBurger
      }).then(function() {
          console.log("created a new burger");
          // Reload the page to get the updated list
          location.reload();
        }
      );
      
    });
})

// burger_name: $("#bn [name=burger-name]").val().trim(),

