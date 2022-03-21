var matchText = "Add friend";
var matchText2 = "Add Friend";
var friendsAdded = 0,
  total = 5;
delay = 0;
addFriends = () => {
  var clicked = false;
  console.clear();
  var buttons = document.getElementsByTagName("div");
  for (var counter = 0; counter < buttons.length; counter++) {
    var target = buttons[counter];
    if (target) {
      var ariaLable = target.getAttribute("aria-label");
      if (ariaLable) {
        var text = ariaLable.trim();
        if (text === matchText || text === matchText2) {
          target.click();
          friendsAdded++;
          console.log(`Add Friend Button Clicked:- ${friendsAdded}`);
          if (friendsAdded % 20 == 0) {
            delay = 0;
          }
          if (friendsAdded < total) {
            window.scrollBy(0, 85);
            clicked = true;
          } else {
            clicked = false;
          }
          target.remove();

          break;
        }
      }
    }
  }
  if (clicked) {
    return true;
  } else {
    return false;
  }
};

startAddingFriends = () => {
  if (addFriends()) {
    if (delay) {
      delay = 0;

      var dTime = 30 * 1000;
      console.log("30 Seconds");
      setTimeout(function () {
        startAddingFriends();
      }, dTime);
    } else {
      setTimeout(function () {
        startAddingFriends();
      }, delayTime);
    }
  } else {
    total = 0;
    alert(`Friend Requests Sent:- ${friendsAdded}`);
  }
};
var delayTime = prompt("Enter Delay Time", 5) * 1000;
var total = prompt("How Many Requests Do You Want To Send?");

if (delayTime >= 0) {
  console.log("Script is Started");
  startAddingFriends();
} else {
  console.log("Opps! Failed To Start");
}
