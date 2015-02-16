$(document).ready(function() {
  $('form#to-do').submit(function(event) {
    event.preventDefault();

    var inputTask = $('input#task').val();
    var inputDueDate = $('input#due_date').val();
    var inputDetails = $('input#details').val();

    var newToDo = {task: inputTask, dueDate: inputDueDate, details: inputDetails};

    $('ul#tasks').append("<li><span class='task '>" + newToDo.task + "</span></li>");
    // $('ul#tasks').append("<button class='btn btn-sm btn-info' id='complete'>Completed?</button>");
    $('input#task').val("");
    $('input#due_date').val("");
    $('input#details').val("");

    $(".task").last().click(function() {
      $("#this-task").show();
      $("#this-task h4").text(newToDo.task);

      $(".Due_Date").text(newToDo.dueDate);
      $(".Details").text(newToDo.details);
    });

    $("li").last().dblclick(function() {
      $(this).appendTo("ul#completed");
    });

    // $("button#complete").click(function() {
    //   $('#tasks li').appendTo("ul#completed");
    //   $(this).remove();
    // }); could remove button after move, but moved all li items rather than one... has potential, though

  });
});
