ymaps.ready(init);
    var myMap,
        myPlacemark;

    function init(){
        myMap = new ymaps.Map("map", {
            center: [60.038350, 30.340500],
            zoom: 18
        });
        alert(list_data.length);
        list_data.forEach(function(item, i, arr) {
          //alert("coord" + item[0] + " : " + item[1] );
          placemark = new ymaps.Placemark([item[0], item[1] ], {
              balloonContent: 'Точка ' + (i +1)
          });



        var myCircle = new ymaps.Circle([ [item[0], item[1]], 90], {}, {
        fillColor: "#DB709377",
        strokeColor: "#990066",
        strokeOpacity: 0.9,
        strokeWidth: 1
    });




          myMap.geoObjects.add(placemark);
          myMap.geoObjects.add(myCircle);

        });
        /*myPlacemark1 = new ymaps.Placemark([60.038331, 30.340205 ], {
            hintContent: 'Первая точка!',
            balloonContent: 'Точка номер 1'
        });
        myPlacemark2 = new ymaps.Placemark([60.038400, 30.340534], {
            hintContent: 'Вторая точка!',
            balloonContent: 'Точка номер 2'
        });*/
    }
