var date = new Date();

var flags = {
  currentDate: {
    day: date.getDate(),
    month: date.getMonth() + 1,
    year: date.getFullYear()
  }
};

var app = Elm.Main.fullscreen(flags);
