<!DOCTYPE HTML>
<HTML>
<HEAD>
<title>feudal map</title>
<style>
.mm {width:98%;min-height:100px;margin:auto;}
.ml {margin-left:5px;margin-right:5px;padding:3px;text-decoration:none;background-color:rgb(192,192,192);color:rgb(0,0,64);}
.mc {text-align:center;}
.wmin {width:100%;min-height:600px;}
.wmed {width:1500px;min-height:1258px;}
.wmax {width:3000px;min-height:2516px;}
.worldmap {width:100%;height:auto;}
</style>
</HEAD>
<BODY>
<?php

if (isset($_GET['sort']) && isset($_GET['view'])){
$view = $_GET['sort'];
$getv = $_GET['view'];

echo '<p class="mc"><a href="map.php?sort='.$view.'&view=mini" class="ml">Minimum Size</a> <a href="map.php?sort='.$view.'&view=medi" class="ml">Medium Size</a> <a href="map.php?sort='.$view.'&view=maxi" class="ml">Maximum Size</a></p>';

include("world_views/map_menu.php");

if ($getv =="mini"){
echo '<div class="wmin">';}
elseif ($getv =="medi"){
echo '<div class="wmed">';}
elseif ($getv =="maxi"){
echo '<div class="wmax">';}
else {
echo '<div class="wmin">';}

echo '<?xml version="1.0" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">';
echo '<svg width="3000" height="2516" viewBox="0 0 3000 2516" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" id="map" class="worldmap" zoomAndPan="magnify">';
echo '<g z-index="1">
<image xlink:href="good.png" x="0" y="0" width="3000" height="2516">
</g>';

$rxml=simplexml_load_file("regions.xml") or die("Error: Cannot create object");

/*general*/
if ($view =="vegetation"){

echo '<text x="100" y="50" fill="black" font-family="Verdana" font-size="35" stroke="white" stroke-width="2">vegetation</text>';

include("world_views/climate.php");

}
elseif ($view =="town"){

echo '<text x="100" y="50" fill="black" font-family="Verdana" font-size="35" stroke="white" stroke-width="2">population</text>';

include("world_views/population.php");

}
elseif ($view =="culture"){

echo '<text x="100" y="50" fill="black" font-family="Verdana" font-size="35" stroke="white" stroke-width="2">culture</text>';

include("world_views/culture.php");

}
/*livestock*/
elseif ($view =="cattle"){

echo '<text x="100" y="50" fill="black" font-family="Verdana" font-size="35" stroke="white" stroke-width="2">cattle</text>';

include("world_views/cattle.php");

}
elseif ($view =="sheep"){

echo '<text x="100" y="50" fill="black" font-family="Verdana" font-size="35" stroke="white" stroke-width="2">sheep</text>';

include("world_views/sheep.php");

}
elseif ($view =="goat"){

echo '<text x="100" y="50" fill="black" font-family="Verdana" font-size="35" stroke="white" stroke-width="2">goat</text>';

include("world_views/goat.php");

}
/*merchants*/
elseif ($view =="cloth"){

echo '<text x="100" y="50" fill="black" font-family="Verdana" font-size="35" stroke="white" stroke-width="2">clothing</text>';

include("world_views/view_cloth.php");

}
elseif ($view =="crafts"){

echo '<text x="100" y="50" fill="black" font-family="Verdana" font-size="35" stroke="white" stroke-width="2">crafts</text>';

include("world_views/crafts.php");

}
elseif ($view =="dyes"){

echo '<text x="100" y="50" fill="black" font-family="Verdana" font-size="35" stroke="white" stroke-width="2">dyes</text>';

include("world_views/view_dyes.php");

}
elseif ($view =="scents"){

echo '<text x="100" y="50" fill="black" font-family="Verdana" font-size="35" stroke="white" stroke-width="2">fragrances</text>';

include("world_views/view_scents.php");

}
elseif ($view =="herbs"){

echo '<text x="100" y="50" fill="black" font-family="Verdana" font-size="35" stroke="white" stroke-width="2">herbs</text>';

include("world_views/herbs.php");

}
elseif ($view =="metal"){

echo '<text x="100" y="50" fill="black" font-family="Verdana" font-size="35" stroke="white" stroke-width="2">metals</text>';

include("world_views/metal.php");

}
elseif ($view =="ride"){

echo '<text x="100" y="50" fill="black" font-family="Verdana" font-size="35" stroke="white" stroke-width="2">transport</text>';

include("world_views/view_ride.php");

}
elseif ($view =="currency"){

echo '<text x="100" y="50" fill="black" font-family="Verdana" font-size="35" stroke="white" stroke-width="2">bullion and gemstones</text>';

include("world_views/bullion.php");

}
/*clergy*/
elseif ($view =="edu"){

echo '<text x="100" y="50" fill="black" font-family="Verdana" font-size="35" stroke="white" stroke-width="2">education</text>';

include("world_views/education.php");

}
elseif ($view =="med"){

echo '<text x="100" y="50" fill="black" font-family="Verdana" font-size="35" stroke="white" stroke-width="2">medicine</text>';

include("world_views/medicine.php");

}
elseif ($view =="troubadour"){

echo '<text x="100" y="50" fill="black" font-family="Verdana" font-size="35" stroke="white" stroke-width="2">entertainment</text>';

include("world_views/entertainment.php");

}
elseif ($view =="book"){

echo '<text x="100" y="50" fill="black" font-family="Verdana" font-size="35" stroke="white" stroke-width="2">books and manuscripts</text>';

include("world_views/book.php");

}
elseif ($view =="diocese"){

echo '<text x="100" y="50" fill="black" font-family="Verdana" font-size="35" stroke="white" stroke-width="2">diocese</text>';

include("world_views/diocese.php");

}
elseif ($view =="crusader"){

echo '<text x="100" y="50" fill="black" font-family="Verdana" font-size="35" stroke="white" stroke-width="2">crusaders and monks</text>';

include("world_views/crusader.php");

}
/*farmer*/
elseif ($view =="grain"){

echo '<text x="100" y="50" fill="black" font-family="Verdana" font-size="35" stroke="white" stroke-width="2">cereals and granaries</text>';

include("world_views/grain.php");

}
elseif ($view =="fruit"){

echo '<text x="100" y="50" fill="black" font-family="Verdana" font-size="35" stroke="white" stroke-width="2">fruit and beverages</text>';

include("world_views/fruit.php");

}
elseif ($view =="sweet"){

echo '<text x="100" y="50" fill="black" font-family="Verdana" font-size="35" stroke="white" stroke-width="2">sweeteners</text>';

include("world_views/sweet.php");

}
elseif ($view =="animal"){

echo '<text x="100" y="50" fill="black" font-family="Verdana" font-size="35" stroke="white" stroke-width="2">diary</text>';

include("world_views/husbandry.php");

}
elseif ($view =="meat"){

echo '<text x="100" y="50" fill="black" font-family="Verdana" font-size="35" stroke="white" stroke-width="2">meat</text>';

include("world_views/meat.php");

}
elseif ($view =="forest"){

echo '<text x="100" y="50" fill="black" font-family="Verdana" font-size="35" stroke="white" stroke-width="2">forestry</text>';

include("world_views/forestry.php");

}
elseif ($view =="salt"){

echo '<text x="100" y="50" fill="black" font-family="Verdana" font-size="35" stroke="white" stroke-width="2">salt and fish</text>';

include("world_views/salt.php");

}
/*gentry*/
elseif ($view =="arms"){

echo '<text x="100" y="50" fill="black" font-family="Verdana" font-size="35" stroke="white" stroke-width="2">armories and shipyards</text>';

include("world_views/armor.php");

}
elseif ($view =="ranks"){

echo '<text x="100" y="50" fill="black" font-family="Verdana" font-size="35" stroke="white" stroke-width="2">feudal ranks</text>';

include("world_views/rank.php");

}
elseif ($view =="diplomacy"){

echo '<text x="100" y="50" fill="black" font-family="Verdana" font-size="35" stroke="white" stroke-width="2">diplomacy</text>';

include("world_views/diplomacy.php");

}

echo '</svg>';

echo '</div>';

}
else {

$rxml=simplexml_load_file("regions.xml") or die("Error: Cannot create object");

$getv ="mini";

include("world_views/map_menu.php");

echo '<?xml version="1.0" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">';
echo '<svg width="3000" height="2516" viewBox="0 0 3000 2516" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" id="map" class="worldmap" zoomAndPan="magnify">';
echo '<g z-index="1">
<image xlink:href="good.png" x="0" y="0" width="3000" height="2516">
</g>';

include("world_views/view_ride.php");

echo '</svg>';

}


?>
</BODY>
</HTML>