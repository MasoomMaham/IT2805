var restst = [];
//Objekt
function Restaurant(headPic,picsPaths, inf, priLevel,spesialiteter,urel) {
  this.picPath = picsPaths;
  this.infon = inf;
  this.priceLevel = priLevel;
  this.headPicP = headPic;
  this.spesialitet = spesialiteter||"Like god på alt";
  this.url = urel||"/";
}

function initRestaurants() {
//restst.push(new Restaurant(Headerpic, Deltaljepics, navn, pris);
  restst.push(new Restaurant("../Images/ResPic/0.jpg",["../Images/ResPic/0_1.jpg","../Images/ResPic/0_2.jpg","../Images/ResPic/0_3.jpg"],"Fisketorget",7,"Sjømat","https://www.bergen.kommune.no/aktuelt/tema/fisketorget"));
  restst.push(new Restaurant("../Images/ResPic/1.png",["../Images/ResPic/1_1.jpg","../Images/ResPic/1_2.jpg","../Images/ResPic/1_3.jpg"],"1877",9,null,"http://www.restaurant1877.no"));
  restst.push(new Restaurant("../Images/ResPic/2.jpg",["../Images/ResPic/2-1.jpg","../Images/ResPic/2-2.jpg","../Images/ResPic/2-3.jpg"],"Horn of Africa",8,"Eksotisk mat","http://www.bergensentrum.no/restauranter/2595_horn-of-africa-restaurant"));
  restst.push(new Restaurant("../Images/ResPic/3.png",["../Images/ResPic/3-1.jpg","../Images/ResPic/3-2.jpg","../Images/ResPic/3-3.jpg"],"Cornelius Sjømatrestaurant",7,"Sjømat","http://corneliusrestaurant.no"));
}
//Generer HTML og legger den til på siden
function showRestaurants() {
  var sidi = document.getElementById('rests');
  sidi.innerHTML="";
  for(var i = 0; i < restst.length; i++) {
    sidi.appendChild(htmlRes(restst[i]));
  }
}
//Denne må endres hver gang objektet endres - da denne skal klone res-objektet.
function clone(obj) {
    return new Restaurant(obj.headPicP,obj.picPath,obj.infon,obj.priceLevel,obj.spesialitet,obj.url);
}
//Lager all HTMLen for hvert restautrant-objekt
function htmlRes(restOb) {
  var a = document.createElement("img");
  a.src = restOb.headPicP;
  a.style.width = '200px';
  a.style.height= '150px';
  var b = document.createElement("h2");
  b.appendChild(document.createTextNode(restOb.infon));
  var c = document.createElement("p");
  c.appendChild(document.createTextNode("Prisklasse: "+restOb.priceLevel));
  c.appendChild(document.createElement("BR"));
  c.appendChild(document.createTextNode("Spesialitet: "+restOb.spesialitet));
  var d = document.createElement("DIV");
  d.setAttribute("class", "content");
  d.setAttribute("onclick","location.href='" + restOb.url + "';");
  var g = 0;
  d.appendChild(b);
  d.appendChild(a);
  d.appendChild(c);
  var im = document.createElement("DIV");
  im.setAttribute("class", "imga");
  for (var e in restOb.picPath) {
    var eg = restOb.picPath[e];
    var f = document.createElement("img");
    f.src = eg;
    f.style.width = '200px';
    f.style.height= '150px';
   if(g==1){
      f.style.width = '300px';
      f.style.height= '200px';
      f.setAttribute("class", "imgto");
    }
    else{
    	f.setAttribute("class", "imgen");
    }
    g=g+1;
    im.appendChild(f);
  }
  d.appendChild(im);
  return d
}

function sortIt(sortingAtt) {
  var lista = restst.slice();
  if(sortingAtt==0){
	for (var i = 1; i < lista.length; i++) {
	var n = 1;
   	var onHand = clone(lista[i]);
	while((i-n) > -1 && lista[i-n].infon > onHand.infon){
		console.log(onHand);
		lista[(i-n)+1] = clone(lista[i-n]);
		n = n+1;
	}
	lista[i-(n-1)] = clone(onHand);
	}
 }

 else{
   for (var i = 1; i < lista.length; i++) {
    var n = 1;
    var onHand = clone(lista[i]);
    while((i-n) > -1 && lista[i-n].priceLevel > onHand.priceLevel){
      console.log(onHand);
      lista[(i-n)+1] = clone(lista[i-n]);
      n = n+1;
    }
    lista[i-(n-1)] = clone(onHand);
 }
 }
  restst = lista.slice();
  showRestaurants();
}

//Lyttere til knappene
document.getElementById('sortNa').addEventListener("click", function(){sortIt(0);});
document.getElementById('sortPr').addEventListener("click", function(){sortIt(1);});
