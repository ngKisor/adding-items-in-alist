var para;
var input;
var value;
function setup()
{
  noCanvas();
  var button= select('#button');
   input = createInput('ADD things ');
  
  button.mousePressed(addItems);
}

function addItems()
{
  val=input.value();
  var li=createElement('li',val);
  li.parent('submit');
  
}
