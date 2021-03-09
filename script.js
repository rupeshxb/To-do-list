// ------------ Managing Height of divs start --------------- //

if ($(window).width() > 768) {
  var windowHeight = $(".window-wrapper").height();
  var headerHeight = $(".header").height();
  var toDoListPaddingTop = $(".to-do-lists").css("padding-top");
  var toDoListPaddingBottom = $(".to-do-lists").css("padding-bottom");
  var toDoListPaddingTotal =
    parseInt(toDoListPaddingTop) + parseInt(toDoListPaddingBottom);
  var headerPaddingTop = $(".header").css("padding-top");
  var headerPaddingBottom = $(".header").css("padding-bottom");
  var headerPaddingTotal =
    parseInt(headerPaddingTop) + parseInt(headerPaddingBottom);
  var toDoListHeight =
    windowHeight - headerHeight - toDoListPaddingTotal - headerPaddingTotal;
  $(".to-do-lists").height(toDoListHeight);
}
if ($(".to-do-lists-inner").height() > toDoListHeight) {
  $(".to-do-lists").css("height", "auto");
}

// ------------ Managing Height of divs end --------------- //

// ------------ Appending cross (x) sign starts -------------- //

var lists = document.getElementById("list").getElementsByTagName("li");
var i;

for (i = 0; i < lists.length; i++) {
  var span = document.createElement("span");
  span.className = "close-btn";
  var icon = document.createElement("i");
  var iconClass = document.createAttribute("class");
  iconClass.value = "fas fa-times";
  icon.setAttributeNode(iconClass);
  span.appendChild(icon);
  lists[i].appendChild(span);
}

// ------------ Appending cross (x) sign ends -------------- //

// ------------ Close button to hide the list --------------- //

var close = document.getElementsByClassName("close-btn");
var x;
for (x = 0; x < close.length; x++) {
  close[x].onclick = function () {
    var selectedDiv = this.parentNode;
    selectedDiv.style.display = "none";
  };
}

// ------------ Close button to hide the list --------------- //

// ----------- Selecting a list to show done starts-------------- //

var singleList = document.getElementById("list").getElementsByTagName("li");
var y;
for (y = 0; y < singleList.length; y++) {
  singleList[y].onclick = (e) => {
    e.target.classList.toggle("checked");
  };
}

// ----------- Selecting a list to show done ends-------------- //

// ----------- Adding input value to the list starts-------------- //

function addElement() {
  var inputValue = document.querySelector("#myInput").value;
  var createLi = document.createElement("li");
  var textNode = document.createTextNode(inputValue);
  var mainUl = document.getElementById("list");
  var messageDiv = document.getElementById("error-message");
  if (inputValue == "") {
    messageDiv.style.display = "block";
    messageDiv.innerHTML = "No Input given";
    return;
  } else {
    createLi.appendChild(textNode);
    mainUl.appendChild(createLi);
    document.getElementById("myInput").value = "";
    for (i = 0; i < lists.length; i++) {
      var span = document.createElement("span");
      span.className = "close-btn";
      var icon = document.createElement("i");
      var iconClass = document.createAttribute("class");
      iconClass.value = "fas fa-times";
      icon.setAttributeNode(iconClass);
      span.appendChild(icon);
      lists[i].appendChild(span);
    }

    for (x = 0; x < close.length; x++) {
      close[x].onclick = function () {
        var selectedDiv = this.parentNode;
        selectedDiv.style.display = "none";
      };
    }

    for (y = 0; y < singleList.length; y++) {
      singleList[y].onclick = (e) => {
        e.target.classList.toggle("checked");
      };
    }
  }
}

// ----------- Adding input value to the list ends-------------- //
