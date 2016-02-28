var Button = Java.type("javafx.scene.control.Button");
var StackPane = Java.type("javafx.scene.layout.StackPane");
var Scene = Java.type("javafx.scene.Scene");

$STAGE.title = "Hello World!";
var button = new Button();
button.text = "Say 'Hello World'";
button.onAction = function() {print("Hello World!");}
var root = new StackPane();
root.children.add(button);
$STAGE.scene = new Scene(root, 300, 200);
$STAGE.show();
