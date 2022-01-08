onEvent("Start", "click", function( ) {
  timedLoop(1000, function() {
    setNumber("seconds", getNumber("seconds") + 1);
    if (getNumber("seconds") == 60) {
      setNumber("Minute", getNumber("Minute") + 1);
      setNumber("seconds", 0);
    }
    onEvent("Stop", "click", function( ) {
      stopTimedLoop();
    });
    onEvent("Reset", "click", function( ) {
      setNumber("seconds", 0);
      setNumber("Minute", 0);
    });
  });
});
