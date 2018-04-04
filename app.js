var key = 'persistentData';

function flags() {

  var defaultPersistentData = {
    ideas: [],
    plans: [],
    lastColor: null,
  };
  var persistentDataString = localStorage.getItem(key);
  var persistentData = persistentDataString == null ? {} : JSON.parse(persistentDataString);
  var persistentDataWithDefaults = Object.assign(defaultPersistentData, persistentData)

  var date = new Date();

  return {
    savedData: persistentDataWithDefaults,
    currentDate: [
      date.getFullYear(),
      date.getMonth() + 1,
      date.getDate(),
    ],
    seedForColor: Math.floor(Math.random()*0xFFFFFFFF)
  };

};

var app = Elm.Main.fullscreen(flags());

app.ports.save.subscribe(function(persistentData) {
    var persistentDataString = JSON.stringify(persistentData);
    localStorage.setItem(key, persistentDataString);
});
