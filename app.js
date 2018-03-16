var key = 'persistentData';

function flags() {

  var persistentDataString = localStorage.getItem(key);
  var persistentData = persistentDataString == null ? null : JSON.parse(persistentDataString);

  console.log('JS flags() persistentData', persistentData);

  var date = new Date();

  return {
    savedData: persistentData,
    currentDate: [
      date.getFullYear(),
      date.getMonth() + 1,
      date.getDate(),
    ]
  };

};


var app = Elm.Main.fullscreen(flags());

app.ports.save.subscribe(function(persistentData) {
    console.log('JS save()', persistentData);
    var persistentDataString = JSON.stringify(persistentData);
    localStorage.setItem(key, persistentDataString);
});
