$(document).ready( function () {
  // Creare una Todo-list in cui si possano aggiungere nuovi todo e rimuoverli.
  // Rendiamo il tutto gradevole alla vista.
  $("#add-todo").click(function () {
    var newTask = $("#add").val()
    var listaTodo = $("#todo li").clone()
    listaTodo.children("span.task").text(newTask)

    listaTodo.children("span.delete").click(function () {
      $(this).parent().remove()
    })

    listaTodo.children("span.edit").click(function () {
      $(this).siblings().show().val(newTask)
      $(this).siblings("span.task").hide()
    })

    listaTodo.children("input.edit-task").keyup(function (e) {
      if (e.which == 13) {
        var change = $(this).val()
        $(this).hide()
        $(this).siblings("span.task").text(change).show()
        newTask = change;
      }
    })

    $("#todo-list").append(listaTodo)
  })
})
