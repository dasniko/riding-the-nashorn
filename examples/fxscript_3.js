load("fx:base.js");
load("fx:controls.js");
load("fx:graphics.js");

$STAGE.title = "Hello World!";
var button = new Button();
button.text = "Say 'Hello World'";
button.onAction = function() {print("Hello World!");}
var root = new StackPane();
root.children.add(button);
$STAGE.scene = new Scene(root, 300, 200);
$STAGE.show();
