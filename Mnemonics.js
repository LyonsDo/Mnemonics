function initMap() {
  var MapCenter = {
    lat: 43,
    lng: 12
  };
  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 4,
    center: MapCenter
  });
  

  var m_dat = [
    ['Acerenza', 40.79637, 15.93473],
    ['Adiacium', 41.91922, 8.73863],
    ['Ahlen', 51.76009, 7.89732],
    ['Assisi', 43.0707, 12.61959],
    ['Canossa', 44.55199, 10.41589],
    ['Denmark', 55.67609, 12.56833],
    ['Hanover', 52.37589, 9.73201],
    ['Santander', 52.37589, 9.73201],
    ['Cambridge', 52.20533, 0.12181],
    ['Damascus', 33.5138, 36.27652],
    ['Hamburg', 53.55108, 9.99368],
    ['Samarra', 34.166, 43.90551],
    ['Cardiff', 51.48158, -3.17908],
    ['Darlowo', 54.42106, 16.41061],
    ['Haarlem', 52.38738, 4.64621],
    ['Serrano', 40.18515, 18.34898],
    ['Calais', 50.95129, 1.85868],
    ['Delphi', 38.48238, 22.50096],
    ['Halifax', 53.72702, -1.85753],
    ['Salamanca', 40.9701, -5.66353],
    ['Cashel', 52.5159, -7.89158],
    ['Dachau', 48.26299, 11.4339],
    ['Hoechst', 50.10248, 8.54745],
    ['Sashalom', 47.51086, 19.17467],
    ['Cagliari', 39.22376, 9.12186],
    ['Dagestan', 42.14318, 47.09497],
    ['Hook of Holland', 51.98063, 4.13418],
    ['Sagrada Familia', 41.38506, 2.1734],
    ['Cave', 41.65524, 12.98961],
    ['Davos', 46.80274, 9.83597],
    ['Hove', 50.82793, -0.16874],
    ['Savoie', 45.4932, 6.47239],
    ['Capua', 41.10612, 14.21304],
    ['Dublin', 53.3498, -6.2603],
    ['Hebron', 31.52567, 35.10612],
    ['Sappenberg', 51.45735, 8.34106],
    ['Tachesteda', 51.95326, 0.34461],
    ['Todi', 42.78807, 12.41513],
    ['Tehran', 35.72484, 51.38165],
    ['Tuscany', 43.77105, 11.24862],
    ['Jockland', 56.49067, -4.20264],
    ['Judenhof', 48.39832, 9.99484],
    ['Johns town', 56.39499, -3.43083],
    ['Jastorf', 53.04392, 10.60398],
    ['Qacentina', 36.36015, 6.64243],
    ['Quadix', 37.30113, -3.14032],
    ['Quahira', 30.11979, 31.537],
    ['Qis', 27.43789, 30.81629],
    ['Kacs', 47.95747, 20.61458],
    ['Kidderminster', 52.38859, -2.24968],
    ['Khaifa', 32.79404, 34.98957],
    ['Kashgar', 39.4704, 75.98975]
  ];
  
  var contents_l = '<div class="info_content"><h3>';
  var contents_m = '</h3><p>';
  var contents_r = '</p></div>';
  var url_l = 'http://github.com/LyonsDo/Mnemonics/blob/master/images/';
	var url_r = '?raw=true';

// Info Window Content
 var contents_v = [
 ['Acerenza.png', 'Acerenza coat of arms.'],
 ['Ajaccio.png', 'Nowadays known as Ajaccio.'],
['Ahlen.png', 'Ahab harpooning ahorse is 27 in Ahlen.'], 
['', 'Assad assaulting astride is 40 in Assisi (St Francis statue).'], 
['Canossa.png', 'Cindy caning with cunt, condom is 02 in Canossa.'],
['', 'Daenerys denuding a donkey is 15 in Denmark.'], 
['', 'Honey honking a Hun is 28 in Hanover.'],
['', 'Sanders sandblasting with a snorkel is 41 in Santander.'], 
['', 'Combs combing with a comb is 03 in Cambridge.'], 
['', 'Domino dominating with a domino is 16 in Damascus.'], 
['', 'Humbert humping in a hammock is 29 in Hamburg.'], 
['', 'Smeagol somersaulting with a sombrero is 42 in Samarra.'],
['', 'Crusoe crucifying with a cross is 04 in Cardiff.'],
['', 'Drew dressing in a dress is 17 in Darlowo.'],                  			
['', 'Harpo hardening with a hard-on is 30 in Haarlem.'],   	
['', 'Serafina serratinga serviette is 43 in Serrano.'],
['', 'Claire climaxing with a clit is 05 in Calais.'], 
['', 'Dali dildoing with a dildo is 18 in Delphi.'],
['', 'Halle howling with a halo is 31 in Halifax.'],
['', 'Salome salivating with a slit is 44 in Salamanca.'], 
['', 'Cash coshing with a cosh is 06 in Cashel.'],
['', 'Duchene douching with a douche is 19 in Dachau.'], 
['', 'Joshua hijacking on hashish is 32 in Hoechst.'],
['', 'Sasha sashaying (up to) with an asshole is 45 in Sashalom.'],
['', 'Coghlan cocking with his cock is 07 in Cagliari.'], 
['', 'Digby digging into (her digit) is 20 in Dagestan.'], 
['', 'Hook hooking with a hook is 33 in the Hook.'],
['', 'Signe signaling with a sock is 46 in Sagrada Familia.'],
['', 'Cavafy cavorting a cavity is 08 in Cave.'], 
['', 'DeVito devouring a daffodil is 21 in Davos.'], 
['', 'Hoover hoovering with a hoover is 34 in Hove.'], 
['', 'Savage savaging with a saveloy is 47 in Savoie.'], 
['', 'Capshaw cupping with a cup is 09 in Capua.'],
['', 'Depp depilating with a dipstick is 22 in Dublin.'], 
['', 'Hopper hopping with a hoop is 35 in Hebron.'], 
['', 'Spacek spanking with a spoon is 48 in Sappenberg.'], 
['', 'Touchstone touching with a taco is 10 in Tachesteda.'], 
['', 'Teodora teetering with a teddy is 23 in Todi.'],
['', 'Thresher throwing in a thong is 36 in Tehran.'], 
['', 'Tasha tasting a testicle is 49 in Tuscany.'],
['', 'Jackie jacking with a jockstrap is 11 in Jockland.'],
['', 'Jody juddering in jodhpurs is 24 in Judenhof.'], 
['', 'Johnny johnnying with his johnny is 37 in Johns town (Perth).'],
['', 'Jessye jostling with jumpers is 50 in Jastorf.'], 
['', 'Crime quickstepping with a quiche is 12 in Qacentina.'], 
['', 'Diana quadrupling with a quid is 25 in Quadix.'], 
['', 'Red Queen quenching with a quahog is 38 in El-Qahira.'],
['', 'Sorrows questioning queasily is 51 in Qis.'], 
['', 'Cole kicking a kike is 13 in Kacs.'],
['', 'David kidding a kid is 26 in Kidderminster.'],
['', 'Henry keyholing a keyhole is 39 in Khaifa.'], 
['', 'Solomon kissing a keister is 52 in Kashgar. ']
    ];		
   
var positions = [];
var markers = [];
var infowindows = [];
var bounds = new google.maps.LatLngBounds();
var i;

for (i = 0; i < m_dat.length; i++) { 
	positions[i] = new google.maps.LatLng(m_dat[i][1], m_dat[i][2]);
  bounds.extend(positions[i]);
/*
    markers[i] = new google.maps.Marker({
      position: ,
      map: map,
      icon : 'http://imageshack.us/a/img826/9489/x1my.png',
      title: m_dat[i][0],
        clickable : true
    });
 */   
 markers[i] = new google.maps.Marker();
    markers[i].setPosition(positions[i]);
    markers[i].setMap(map);
    markers[i].setTitle(m_dat[i][0]);
    
  if (contents_v[i][0].length>1) {
     markers[i].setIcon(url_l+contents_v[i][0]+url_r);
  }
   
    markers[i].index = i;
    markers[i].info = new google.maps.InfoWindow();

// Allow each marker to have an info window    
  infowindows[i] = new google.maps.InfoWindow({
    content: contents_l + m_dat[i][0] + contents_m + contents_v[i][1] + contents_r
    });

  google.maps.event.addListener(markers[i], 'click', function() {
            infowindows[this.index].open(map,markers[this.index]);
    });  
	}
  
 map.fitBounds(bounds);
 
 // Override our map zoom level once our fitBounds function runs (Make sure it only runs once)
    var boundsListener = google.maps.event.addListener((map), 'bounds_changed', function(event) {
        this.setZoom(6);
        google.maps.event.removeListener(boundsListener);
    });
}
