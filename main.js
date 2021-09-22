//function myFunction() {
//    const id = document.getElementById("in").value;
//    var myobj = document.getElementById("card-"+id);
//    myobj.remove();
//  }

//Add close buton to all list itemssa
var myNodelist = document.getElementsByTagName("LI");
var i;
for (i = 0; i < myNodelist.length; i++) {
  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.appendChild(txt);
  myNodelist[i].appendChild(span);
  span.className = "close";
}

// Click on a close button to hide the current list item
var close = document.getElementsByClassName("close");
var i;
for (i = 0; i < close.length; i++) {
  close[i].onclick = function() {
    var div = this.parentElement;
    div.style.display = "none";
  }
}

//get checkbox
var check = document.getElementById('auto_clear');

//Creating new card
// Create a new list item when clicking on the "Add" button
function newElement() {
    var li = document.createElement("li");
    var in1 = document.getElementById("in1").value;
    var in2 = document.getElementById("in2").value;
    var in3 = document.getElementById("in3").value;
  
    if (in1 === '' ) {
      alert("You must write something!");
    } else {
      document.getElementById("myUL").appendChild(li);
    }

    if (check.checked == true) {
      document.getElementById("in1").value = "";
      document.getElementById("in2").value = "";
      document.getElementById("in3").value = "";
    }
    
  
    var span = document.createElement("SPAN");
    var span2 = document.createElement("SPAN");
    var span3 = document.createElement("SPAN");
    var span4 = document.createElement("SPAN");
    var txt = document.createTextNode("\u00D7");
    var txt2 = document.createTextNode(in1);
    var txt3 = document.createTextNode(in2);
    var txt4 = document.createTextNode(in3);
    var img = document.createElement('img');
    var div = document.createElement('div');
    var div2 = document.createElement('div');
    var h5 = document.createElement("h5");
    var p = document.createElement("p");
    var p2 = document.createElement("p");
    var p3 = document.createElement("p");
    var i = document.createElement("i");
  
    var badge_1 = document.createTextNode("sed");
    var badge_2 = document.createTextNode("sed");
    var badge_3 = document.createTextNode("voluptatem");
  
    const rndInt = Math.floor(Math.random() * 8) + 1
    img.src = 'https://bootdey.com/img/Content/avatar/avatar'+rndInt+'.png'
    li.className = "media";
    li.appendChild(img);
    img.className = "rounded-circle d-flex align-self-center un-select";
  
    li.appendChild(div);
    div.className = "media-body"
  
    div.appendChild(div2);
    div2.className = "information";

    div2.appendChild(h5);
    h5.className = "loc1";
    h5.appendChild(txt2);
  
    div2.appendChild(p);
    p.className = "loc2";
    p.appendChild(txt3);

    div2.appendChild(p3);
    p3.className = "info";
    p3.appendChild(txt4)
    
    div.appendChild(p2);
    p2.className = 'un-select';
    p2.appendChild(span2);
    span2.className = 'badge badge-outline badge-sm badge-info badge-pill un-select';
    span2.appendChild(badge_1);
    p2.appendChild(span3);
    span3.className = 'badge badge-outline badge-sm badge-primary badge-pill un-select';
    p2.appendChild(span4);
    span3.appendChild(badge_2);
    span4.className = 'badge badge-outline badge-sm badge-danger badge-pill un-select';
    span4.appendChild(badge_3);
  
    li.appendChild(i);
    i.className = "d-flex align-self-center fa fa-dot-circle-o color-success";
  
    span.className = "close";
    span.appendChild(txt);
    li.appendChild(span);
  
    for (i = 0; i < close.length; i++) {
      close[i].onclick = function() {
        var div = this.parentElement;
        div.style.display = "none";
      }
    }
  }