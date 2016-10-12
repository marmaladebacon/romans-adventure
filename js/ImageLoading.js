var heroPic = document.createElement("img");
var doorStrip = document.createElement("img");
var keyStrip = document.createElement("img");
var worldPics = [];
var roomArtStrips = [];
//var currentRoomArtIndex = TILE_ART_KITCHEN;

var picsToLoad = 0; // set automatically based on imageList in loadImages()

function countLoadedImagesAndLaunchIfReady()
{
	picsToLoad--;
	console.log(picsToLoad);
	if(picsToLoad == 0)
	{
		imageLoadingDoneSoStartGame(); // Main.js
	}
}

function beginLoadingImage(imgVar, fileName)
{
	imgVar.onload = countLoadedImagesAndLaunchIfReady;
	imgVar.src = "img/"+fileName;
}

function loadImageForWorldCode(worldCode, fileName)
{
	worldPics[worldCode] = document.createElement("img");
	beginLoadingImage(worldPics[worldCode], fileName);
}

function loadImages()
{
	var imageList =
	[
		// hero and pickup tiles
		{varName: heroPic, theFile: "roman.png"},

		// environmental tiles
		{worldType: TILE_GROUND, theFile: "world_ground.png"},
		{worldType: TILE_WALL, theFile: "world_wall.png"},

		// door tiles
		{varName: doorStrip, theFile: "door_strip.png"},
		//{worldType: TILE_DOOR_STUDY, theFile: "world_door.png"},
		//{worldType: TILE_DOOR_HOUSEENTRANCE, theFile: "world_door.png"},

		// key tiles
		{varName: keyStrip, theFile: "key_strip.png"},
		// {worldType: TILE_KEY_STUDY, theFile: "key.png"},

	];

	picsToLoad = imageList.length;

	for(var i=0;i<imageList.length;i++)
	{
		if(imageList[i].varName != undefined)
		{
			beginLoadingImage(imageList[i].varName, imageList[i].theFile);
		}
		else
		{
			loadImageForWorldCode(imageList[i].worldType, imageList[i].theFile);
		}
	}
}
