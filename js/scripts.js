$(document).ready(function() {
  $('form#to-do').submit(function(event) {


    var inputTask = $('input#task').val();
    var inputDueDate = $('input#due_date').val();
    var inputDetails = $('input#details').val();

    var newToDo = {task: inputTask, dueDate: inputDueDate, details: inputDetails};

    $('ul#tasks').append("<li><span class='task'>" + newToDo.task + "</span></li>")

    $('input#task').val("");
    $('input#due_date').val("");
    $('input#details').val("");

    $(".task").last().click(function() {
      $("#this-task").show();
      $("#this-task h4").text(newToDo.task);

      $(".Due_Date").text(newToDo.dueDate);
      $(".Details").text(newToDo.details);



    });
    event.preventDefault();
  });
});
