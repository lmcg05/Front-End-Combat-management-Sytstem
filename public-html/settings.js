let host = 0;
let friendly = 0;
let neutral = 0;
let air = 0;
let land = 0;
let subsurface = 0;
let sea = 0;

function openNav() {
  document.getElementById("settingsSidebar").style.width = "250px";
  // document.getElementById("main").style.marginLeft = "250px";
}
  
function closeNav() {
  document.getElementById("settingsSidebar").style.width = "0";
  sorty();
  //document.getElementById("main").style.marginLeft = "0";
}
// $("html").click(function() {
//   closeNav()
// });

// $("#sidebar").click(function(event){
//    event.stopPropagation(); 
// });

function appendToteInfo(table_info) {
  $('#main_table').append(table_info);
  let buttons = document.getElementsByClassName("button1")
  for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', function () {
      buttons[i].innerHTML = "Targeted";
    });
  }
}

function hostileCheckboxHandlers() {
  let el = document.getElementById('hostile');

  let hostile = el.getElementsByTagName('input');

  for (let i = 0, len = hostile.length; i < len; i++) {
    if (hostile[i].type === 'checkbox') {
      hostile[i].onclick = hostileUpdate;
    }
  }
}

function hostileUpdate(e) {

  if (this.checked) {
    host += 1
  }
  else {
    host -= 1
  }
}

function friendlyCheckboxHandlers() {
  let el = document.getElementById('friendly');

  let hostile = el.getElementsByTagName('input');

  for (let i = 0, len = hostile.length; i < len; i++) {
    if (hostile[i].type === 'checkbox') {
      hostile[i].onclick = friendlyUpdate;
    }
  }
}

function friendlyUpdate(e) {

  if (this.checked) {
    friendly += 1
  }
  else {
    friendly -= 1
  }
}
function neutralCheckboxHandlers() {
  let el = document.getElementById('neutral');

  let hostile = el.getElementsByTagName('input');

  for (let i = 0, len = hostile.length; i < len; i++) {
    if (hostile[i].type === 'checkbox') {
      hostile[i].onclick = neutralUpdate;
    }
  }
}

function neutralUpdate(e) {

  if (this.checked) {
    neutral += 1
  }
  else {
    neutral -= 1
  }
}
function airCheckboxHandlers() {
  let el = document.getElementById('air');

  let hostile = el.getElementsByTagName('input');

  for (let i = 0, len = hostile.length; i < len; i++) {
    if (hostile[i].type === 'checkbox') {
      hostile[i].onclick = airUpdate;
    }
  }
}

function airUpdate(e) {

  if (this.checked) {
    air += 1
  }
  else {
    air -= 1
  }
}
function landCheckboxHandlers() {
  let el = document.getElementById('land');

  let hostile = el.getElementsByTagName('input');

  for (let i = 0, len = hostile.length; i < len; i++) {
    if (hostile[i].type === 'checkbox') {
      hostile[i].onclick = landUpdate;
    }
  }
}

function landUpdate(e) {

  if (this.checked) {
    land += 1
  }
  else {
    land -= 1
  }
}
function subsurfaceCheckboxHandlers() {
  let el = document.getElementById('subsurface');

  let hostile = el.getElementsByTagName('input');

  for (let i = 0, len = hostile.length; i < len; i++) {
    if (hostile[i].type === 'checkbox') {
      hostile[i].onclick = subsurfaceUpdate;
    }
  }
}

function subsurfaceUpdate(e) {

  if (this.checked) {
    subsurface += 1
  }
  else {
    subsurface -= 1
  }
}
function seaCheckboxHandlers() {
  let el = document.getElementById('sea');

  let hostile = el.getElementsByTagName('input');

  for (let i = 0, len = hostile.length; i < len; i++) {
    if (hostile[i].type === 'checkbox') {
      hostile[i].onclick = seaUpdate;
    }
  }
}

function seaUpdate(e) {

  if (this.checked) {
    sea += 1
  }
  else {
    sea -= 1
  }
}

function sorty(){   
  $(document).ready(function () {
    
    $.getJSON("http://35.246.123.101/api/plottable", function (data) {
      document.getElementById("sub_table").innerHTML = ""
      let distanceFiltered = [];
      let ClassificationFiltered = [];
      let filteredJson = [];
      $.each(data, function (key, value) {
        if (value.distance <= document.getElementById('maxDistance').value)
        distanceFiltered.push(value)
      })
      distanceFiltered.forEach(value => {
        if (land==0){
        if (value.classification == "Land"){
          ClassificationFiltered.push(value);
        }
      }
      if (sea==0){
        if (value.classification == "Sea"){
          ClassificationFiltered.push(value);
        }
      }
      if (air==0){
        if (value.classification == "Air"){
          ClassificationFiltered.push(value);
        }
      }
      if (subsurface==0){
        if (value.classification == "Subsurface"){
          ClassificationFiltered.push(value);
        }
      }
      })
        ClassificationFiltered.forEach(item => {
          console.log(item)
          if(friendly ==0){
            if( item.hostility == "Friendly"){
              filteredJson.push(item);
            }
          }
            if(host ==0){
              if( item.hostility == "Hostile"){
                filteredJson.push(item);
              }
            }
              if(neutral ==0){
                if( item.hostility == "Neutral"){
                  filteredJson.push(item);
                }

          }})
          console.log(filteredJson);
          let sort_info = "";
    filteredJson.forEach(value => {
      if (value.subclassification != "i am the senate") {  
        sort_info += '<tr>';
        if (value.hostility == "Hostile") {
          sort_info += '<td>' + '<button id= '+value.id+' type="button" class="button1" value="Target">Target</button>' + '</td>';
        }
        else {
          sort_info += '<td>' + '</td>';
        }
      }
      let tv = new Date();
      let t = tv.getTime();
      console.log(t)
      let v = (value.lastUpdate)
      let x = ((t-v)/1000);
      sort_info += '<td>' + value.identifier + '</td>';
      sort_info += '<td>'+value.id+'</td>';
      sort_info += '<td>' + value.classification + " , " + value.subclassification + '</td>';
      sort_info += '<td>' + value.hostility + '</td>';
      sort_info += '<td>' + value.armed + '</td>';
      sort_info += '<td>' + value.moveableEntity.bearing + '</td>';
      sort_info += '<td>' + value.moveableEntity.heading + '</td>';
      sort_info += '<td>' + value.elevation + '</td>';
      sort_info += '<td>' + value.moveableEntity.speed + '</td>';
      sort_info += '<td>' + value.longitude + " , " + value.latitude + '</td>';
      sort_info += '<td>' + value.distance + '</td>';
      sort_info += '<td>' + x + '</td>';
      sort_info += '</tr>';
        }
    )
    appendToteInfo(sort_info);
    let targetModal = document.getElementById("modal1");
    let buttons = document.getElementsByClassName("button1")

    for (let i = 0; i < buttons.length; i++) {
      buttons[i].addEventListener('click', function () {
        buttons[i].innerHTML = "Targeted";
      
        localStorage.setItem("id",this.id);
        targetModal.style.display = "block";
      });
    }

    let untargetBtn = document.getElementById("untarget");

    untargetBtn.onclick = function () {
      targetModal.style.display = "none";
      let buttons = document.getElementsByClassName("button1")
      for (let i = 0; i < buttons.length; i++) {
        buttons[i].innerHTML = "Target";
      }
    }
  })})}
  