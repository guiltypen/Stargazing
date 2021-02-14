function moonphase() {
  let date = new Date();
  let newMoonDate = new Date("Feb, 11, 2021,12:08:06");
  let newdate = date.getTime() - newMoonDate.getTime();
  let newdateinMinutes = newdate / 60000;
  let percent;
  let cycle = 0;
  let stateText;
  //console.log(newdateinMinutes);
  if (newdateinMinutes <= 21262) {
    percent = (newdateinMinutes / 21262) * 100;
  } else {
    while (newdateinMinutes > 21262) {
      cycle++;
      newdateinMinutes = newdateinMinutes - 21262;
    }
    if (cycle % 2 == 1) {
      percent = 100 - (newdateinMinutes / 21262) * 100;
    } else {
      percent = (newdateinMinutes / 21262) * 100;
    }
  }



  return percent;
}

function moonphasein() {
    let dateControl = document.getElementById("dateInput").value;

console.log(dateControl)
    let date = new Date(dateControl);
    let newMoonDate = new Date("Feb, 11, 2021,12:08:06");
    let newdate = date.getTime() - newMoonDate.getTime();
    let newdateinMinutes = newdate / 60000;
    let percent;
    let cycle = 0;
    let stateText;
    //console.log(newdateinMinutes);
    if (newdateinMinutes <= 21262) {
      percent = (newdateinMinutes / 21262) * 100;
    } else {
      while (newdateinMinutes > 21262) {
        cycle++;
        newdateinMinutes = newdateinMinutes - 21262;
      }
      if (cycle % 2 == 1) {
        percent = 100 - (newdateinMinutes / 21262) * 100;
      } else {
        percent = (newdateinMinutes / 21262) * 100;
      }
    }  console.log(percent)
    
    print(percent)
    return percent;
  }

let percent=moonphase()

function print(percent) {

if (percent<=25){
    console.log(percent)
    let element = document.getElementById("state");
    element.innerHTML = "the visibility is high for stargazing.The moon is in shade";
    // document.write("the visiblty is high for stargazing.The moon is in shade");
}else if (percent<=50){
    console.log(percent)
    let element = document.getElementById("state");
    element.innerHTML = "the visibility is good for stargazing.The moon is mostly in shade";
    // document.write("the visiblty is good for stargazing.The moon is mostly in shade");
}else if (percent<=75){
    console.log(percent)
    let element = document.getElementById("state");
    element.innerHTML = "the stars visibility is bad .The moon is mostly bright";
    // document.write("the stars visiblty is bad .The moon is mostly bright ");
}else if (percent>75){
    console.log(percent)
    let element = document.getElementById("state");
    element.innerHTML = "the stars visibility is terrible but you can still enjoy the moon";
    // document.write("the stars visiblty is terrible but you can enjoy the moon");
}
}
print(percent)
persent = moonphasein();
