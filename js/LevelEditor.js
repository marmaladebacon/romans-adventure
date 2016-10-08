var isEditorMode = false;
var tileWidthScaled = WORLD_W * PIXEL_SCALE_UP;
var tileHeightScaled = WORLD_H * PIXEL_SCALE_UP;

var mouseOverTileIdx = -1;

var mouseX = 0;
var mouseY = 0;

// Get current mouse position on screen
function updateMousePos(evt)
{
	var rect = scaledCanvas.getBoundingClientRect();
	var root = document.documentElement;

	mouseX = evt.clientX - rect.left - root.scrollLeft;
	mouseY = evt.clientY - rect.top - root.scrollTop;
}

function editorKeyHandle(keyEvt)
{
	switch(keyEvt.keyCode)
	{
		case KEY_1:
			worldGrid[mouseOverTileIdx] = TILE_GROUND;
			break;
		case KEY_2:
			worldGrid[mouseOverTileIdx] = TILE_WALL;
		default:
			break;
	}
}

// Round mouse position and return grid coordinate mouse cursor is currently hovering over. Draw rect around tile.
function levelGridCoordinate()
{
  var levelCol = Math.floor(mouseX / tileWidthScaled);
  var levelRow = Math.floor(mouseY / tileWidthScaled);

  var gridX = (levelCol * tileWidthScaled);
  var gridY = (levelRow * tileHeightScaled);

  mouseOverTileIdx = rowColToArrayIndex(levelCol, levelRow);

  // Display grid coordinate in UI
  displayUIText("Grid coordinate: "+levelCol+","+levelRow + " Index: " + mouseOverTileIdx);

  // Draw outline around highlighted tile, snap to grid
  drawStrokeRect(scaledContext, gridX, gridY, tileWidthScaled, tileHeightScaled, 'red');
}
