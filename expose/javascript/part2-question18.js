function thing(){
  let d = new Date();
  let time = d.toLocaleTimeString();
  console.log(time);
  return time;
}
setInterval(thing,1000);
