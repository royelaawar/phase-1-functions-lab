// Code your solution in this file!


function distanceFromHqInBlocks(length){

    if (length<42){
        return(42-length);
      }
      else {
    
      return(length-42);
  }
}
   
function distanceFromHqInFeet(length){
    return distanceFromHqInBlocks(length)*264;
}

function distanceTravelledInFeet(start, destination) {

    if (destination>start){
        return ((destination-start)*264)
    }
    else {
        return ((start-destination)*264)
    }
  }

  function calculatesFarePrice(start, destination) {
   
     let distance = distanceTravelledInFeet(start,destination);
        if (distance<= 400){
          return 0;
        }
        if (distance>=400 && distance<=2000){
          return (distance-400)* 0.02;
        }
        else if(distance>=2000&& distance<=2500){
          return 25;
        }
        else if (distance > 2500){
          return "cannot travel that far";
        }
      }