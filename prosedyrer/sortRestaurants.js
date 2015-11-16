//Listen holder på restaurantobjektene
var restst = [];
//Restaurantobjekt
function Restaurant(headPic,picsPaths, inf, priLevel,spesialiteter,urel,infom) {
  this.picPath = picsPaths;
  this.infon = inf;
  this.priceLevel = priLevel;
  this.headPicP = headPic;
  this.spesialitet = spesialiteter||"Like god på alt";
  this.url = urel||"/";
  this.informasjon=infom||"";
}
//Oppretter objekter for våre utvalgte restauranter
function initRestaurants() {
//restst.push(new Restaurant(Headerpic, Deltaljepics, navn, pris);
  restst.push(new Restaurant("../Images/ResPic/0.jpg",["../Images/ResPic/0_1.jpg","../Images/ResPic/0_2.jpg","../Images/ResPic/0_3.jpg"],"Fisketorget",7,"Sjømat","https://www.bergen.kommune.no/aktuelt/tema/fisketorget","Fisketorget skal tilby publikum en arena hvor det handles naturlige og ferske kvalitetsprodukter, med vekt på lokale varer og spesialiteter fra hav og landbruk. Fisketorget skal utelukkende fremstå som omsetningssted for fisk, sjømat og skalldyr, lokalprodusert gardsmat, frukt, bær, grønnsaker og blomster/planter. "));
  restst.push(new Restaurant("../Images/ResPic/1.png",["../Images/ResPic/1_1.jpg","../Images/ResPic/1_2.jpg","../Images/ResPic/1_3.jpg"],"1877",9,"Storfe","http://www.restaurant1877.no","Restaurant 1877 åpnet i Bergen i Januar 2013. Restauranten ligger i ærverdige Kjøttbasaren midt i hjertet av byen. Med en slik beliggenhet var det for oss helt naturlig å ta vare på de tradisjoner og mat kultur-verdier som Kjøttbasaren bærer med seg. Her serveres det mat og drikke med kjærlighet og kunnskap, hvor vi gjør vårt beste for å gi alle en unik opplevelse."));
  restst.push(new Restaurant("../Images/ResPic/2.jpg",["../Images/ResPic/2-1.jpg","../Images/ResPic/2-2.jpg","../Images/ResPic/2-3.jpg"],"Horn of Africa",8,"Eksotisk mat","http://www.bergensentrum.no/restauranter/2595_horn-of-africa-restaurant","Welcome to our Ethiopian & Eritrean kitchen in Bergen. Horn of Africa restaurant is located in the beautiful city Bergen in Norway, at STRANDGATEN 212. Our little kitchen is good enough to prepare a very lovely vegetarian as well as Non-vegetarian dishes with delicious spices and rich flavor. Come and visit us in our modern but with a Eritrean and Ethiopian traditional touches here and there."));
  restst.push(new Restaurant("../Images/ResPic/3.png",["../Images/ResPic/3-1.jpg","../Images/ResPic/3-2.jpg","../Images/ResPic/3-3.jpg"],"Cornelius Sjømatrestaurant",7,"Sjømat","http://corneliusrestaurant.no","Cornelius ble startet i 2003 av sjømatentusiastene Alf Roald Sætre og Odd Einar Tufteland. De to hadde en felles idé om å skape et restaurantkonsept med helt unike sjømatopplevelser. Tilbud som ingen andre hadde."));
}
//Kjører res-objektene gjennom htmlRes
// og legger de til på siden
function showRestaurants() {
  var sidi = document.getElementById('rests');
  sidi.innerHTML="";
  for(var i = 0; i < restst.length; i++) {
    var mid = htmlRes(restst[i]);
    if(i==0){
      var a = document.createElement("DIV");
      var b = document.createElement("h1");
      b.appendChild(document.createTextNode("Restaurant"));
      a.appendChild(b);
      mid.innerHTML = a.innerHTML + " " + mid.innerHTML;
    }
    sidi.appendChild(mid);
  }
}
//kloner res-objekt
function clone(obj) {
    return new Restaurant(obj.headPicP,obj.picPath,obj.infon,obj.priceLevel,obj.spesialitet,obj.url,obj.informasjon);
}
//Lager all HTMLen for hvert restautrant-objekt
//Tar inn JS-objektet, returnere en HTML-representasjon
function htmlRes(restOb) {
  var a = document.createElement("img");
  a.src = restOb.headPicP;
  a.style.width = '200px';
  a.style.height= '150px';
  a.setAttribute("class", "logon flyt");
  var b = document.createElement("h3");
  b.appendChild(document.createTextNode(restOb.infon));
  b.setAttribute("onclick","location.href='" + restOb.url + "';");
  b.setAttribute("class", "flyt");
  var c = document.createElement("p");
  var cinfo = document.createElement("p");
  cinfo.setAttribute("class", "resInfo");
  cinfo.innerHTML = restOb.informasjon;
  c.appendChild(cinfo);
  c.appendChild(document.createTextNode("Prisklasse: "+restOb.priceLevel));
  c.appendChild(document.createElement("BR"));
  c.appendChild(document.createTextNode("Spesialitet: "+restOb.spesialitet));
  var d = document.createElement("DIV");
  d.setAttribute("class", "content");
  d.appendChild(a);
  d.appendChild(b);
  d.appendChild(c);
  var im = document.createElement("DIV");
  im.setAttribute("class", "imga");
  for (var e in restOb.picPath) {
    var eg = restOb.picPath[e];
    var f = document.createElement("img");
    f.src = eg;
    f.style.width = '300px';
    f.style.height= '220px';
    f.setAttribute("class", "imgen");
    im.appendChild(f);
  }
  d.appendChild(im);
  d.appendChild(document.createElement("BR"));
  return d
}
//Få objekter, nøyer oss med Insertion Sort
function sortIt(sortingAtt) {
  var lista = restst.slice();
	for (var i = 1; i < lista.length; i++) {
	var n = 1;
  var onHand = clone(lista[i]);
  if(sortingAtt==1){
    while((i-n) > -1 && lista[i-n].priceLevel > onHand.priceLevel){
      console.log(onHand);
      lista[(i-n)+1] = clone(lista[i-n]);
      n = n+1;
    }
  } if(sortingAtt==0) {
    while((i-n) > -1 && lista[i-n].infon > onHand.infon){
		console.log(onHand);
		lista[(i-n)+1] = clone(lista[i-n]);
		n = n+1;
	 }
  }
  if(sortingAtt==2){
  	while((i-n) > -1 && lista[i-n].spesialitet > onHand.spesialitet){
		console.log(onHand);
		lista[(i-n)+1] = clone(lista[i-n]);
		n = n+1;
	 }
  }
	lista[i-(n-1)] = clone(onHand);
 }
  restst = lista.slice();
  showRestaurants();
}

//Lyttere til knappene
document.getElementById('sortNa').addEventListener("click", function(){sortIt(0);});
document.getElementById('sortPr').addEventListener("click", function(){sortIt(1);});
document.getElementById('sortCa').addEventListener("click", function(){sortIt(2);});
