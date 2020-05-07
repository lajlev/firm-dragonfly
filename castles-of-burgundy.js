var $finishTurn = document.getElementById("ctl09_btnBaseFinishTurn"),
    $undo = document.getElementById("undoBtn"),
    $reset = document.getElementById("ctl09_btnBaseCancelMove"),
    $nextGame = document.getElementById("ctl09_btnNextGame"),
    $die1 = document.getElementById("die1_overlay"),
    $die2 = document.getElementById("die2_overlay");
  


$undo.title = "Press [ctrl] + [Z]";
$finishTurn.title = "Press [ctrl] + [D]";
$reset.title = "Press [ctrl] + [Q]";
$nextGame.title = "Press [ctrl] + [<]";
$die1.title = "Press [ctrl] + [1]";
$die2.title = "Press [ctrl] + [2]";

function elementClicked(e){
  e.click();
}

hotkeys('ctrl+d,ctrl+z,ctrl+q,ctrl+<,ctrl+1,ctrl+2', function (event, handler){
  switch (handler.key) {
    case 'ctrl+q': elementClicked($reset);
      break;
    case 'ctrl+d': elementClicked($finishTurn);
      break;
    case 'ctrl+z': elementClicked($undo);
      break;
    case 'ctrl+<': elementClicked($nextGame);
      break;
    case 'ctrl+1': elementClicked($die1);
      break;
    case 'ctrl+2': elementClicked($die2);
  }
});