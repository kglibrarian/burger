$("#createburger").on("submit", function(event) {
    // Make sure to preventDefault on a submit event.
    event.preventDefault();
    console.log(newBurger);
    var newBurger = {
      burger_name: $("#createburger [name=burgeridea]").val().trim()
    };
    console.log(newBurger);

    // Send the POST request.
    $.ajax("/api/burgers", {
      type: "POST",
      data: newBurger
    }).then(function() {
        console.log("created a new burger");
        // Reload the page to get the updated list
        location.reload();
      }
    );
    
  });