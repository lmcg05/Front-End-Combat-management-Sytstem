sorty()
refreshData();
function refreshData(){
  x = 10;
  sorty();
  
  setTimeout(refreshData, x*1000)
}

$(document).ready(function () {
  $.getJSON("http://35.246.123.101/api/plottable", function (data) {
    let modal_info = '';
      modal_info += '<tr>';
      modal_info += '<td>' + 'Fire:' + '</td>'
      modal_info += '<td>' + '<button class="fireBtn">FIRE</button>' + '</td>'
      modal_info += '</tr>';
    $('#modal_table').append(modal_info);

    let targetModal = document.getElementById("modal1");
    let untargetBtn = document.getElementById("untarget");

    untargetBtn.onclick = function () {
      event.preventDefault();
      targetModal.style.display = "none";
      let buttons = document.getElementsByClassName("button1")
      for (let i = 0; i < buttons.length; i++) {
        buttons[i].innerHTML = "Target";
      }
    }

    let buttons = document.getElementsByClassName("fireBtn")
    for (let i = 0; i < buttons.length; i++) {
      buttons[i].addEventListener('click', function () {
        //debugger
        event.preventDefault();
        let code = $('#Ath').val();

        if (code == 'QA2020') {

          let id = localStorage.getItem("id");
          console.log(id)

          $.ajax({
            type: "DELETE",
            url: 'http://35.246.123.101/api/plottable/' + id,
            contentType: "application/json",
            crossDomain: true,
            success: function (data, status, jqXHR) {

              alert("Missile has been fired");
              location.reload();
            },
            error: function (jqXHR, status) {
              console.log(status);
            }
          })
        }
        else if(code == ""){
          alert("Enter authentication code")
        }
        else {
          alert("Incorrect code")
        }
      })
    }
  })
})

$(document).ready(function () {
  $('#addBtn').on("click", function (event) {

    let identifier = $('#identifier').val();
    let classification = $('#classification').val();
    let subclassification = $('#subclassification').val();
    let longitude = $('#longitude').val();
    let latitude = $('#latitude').val();
    let elevation = $('#elevation').val();
    let lastUpdate = $('#lastUpdate').val();
    let armed = $('#armed').val();

    let hostility = $('#hostility').val();
    let bearing = $('#bearing').val();
    let heading = $('#heading').val();
    let speed = $('#speed').val();



    let data = {
      "identifier": identifier,
      "classification": classification,
      "subclassification": subclassification,
      "longitude": longitude,
      "latitude": latitude,
      "elevation": elevation,
      "lastUpdate": lastUpdate,
      "armed": armed,
      "hostility": hostility,
      "moveableEntity": {
        "bearing": bearing,
        "heading": heading,
        "speed": speed
      }
    }
    console.log(data);

    $.ajax({
      type: "POST",
      url: 'http://35.246.123.101/api/plottable',
      data: JSON.stringify(data),
      contentType: "application/json",
      crossDomain: true,
      dataType: "json",
      success: function (data, status, jqXHR) {

        alert("success");
        location.reload();
      },
      error: function (jqXHR, status) {
        // error handler
        //console.log(data)
        //console.log(statusCode);

      }
    });
    ;

  })
})
$(document).ready(function () {
  $('#editBtn').on("click", function (event) {
    let id = $('#ID2').val();
    let identifier = $('#identifier2').val();
    let classification = $('#classification2').val();
    let subclassification = $('#subclassification2').val();
    let hostility = $('#hostility2').val();

    $.ajax({
      type: "PUT",
      url: 'http://35.246.123.101/api/plottable/'+id+"?identifier="+identifier+"&classification="+classification
      +"&subclassification="+subclassification+"&hostility="+hostility,
      contentType: "application/json",
      crossDomain: true,
      success: function (data, status, jqXHR) {

        alert("success");
        location.reload();
      },
      error: function (jqXHR, status) {
        // error handler
        //console.log(data)
        //console.log(statusCode);

      }
    });
    ;

  })
})
$(document).ready(function () {
  $('#DELBtn').on("click", function (event) {
    let id = $('#ID4').val();
    console.log(id)

    $.ajax({
      type: "DELETE",
      url: 'http://35.246.123.101/api/plottable/'+id,
      contentType: "application/json",
      crossDomain: true,
      success: function (data, status, jqXHR) {

        alert("success");
        location.reload();
      },
      error: function (jqXHR, status) {
        // error handler
        //console.log(data)
        //console.log(statusCode);

      }
    });
    ;

  })
})