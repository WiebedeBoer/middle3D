<?php

foreach($rxml->children() as $town)
  {
$id = $town->id;
$placename = $town->place;
$lon = $town->Point->xc;
$lat = $town->Point->yc;

$culture = $town->cattle;

$stroke_width =0;
$radius_size =8;
$descript =" ";

if ($culture =="Anatolian"){
$stroke_width++;
$radius_size--;
$radius_color ="rgb(64,64,64)";
$stroke_color ="rgb(192,0,0)";
$descript ="Anatolian";
}
elseif ($culture =="Andalusian"){
$stroke_width++;
$radius_size--;
$radius_color ="rgb(64,64,64)";
$stroke_color ="rgb(192,0,192)";
$descript ="Andalusian";
}
elseif ($culture =="Angeln"){
$stroke_width++;
$radius_size--;
$radius_color ="rgb(106,44,21)";
$stroke_color ="rgb(192,0,0)";
$descript ="Angeln";
}
elseif ($culture =="Blaarkop"){
$stroke_width++;
$radius_size--;
$radius_color ="rgb(106,44,21)";
$stroke_color ="rgb(192,0,192)";
$descript ="Blaarkop";
}
elseif ($culture =="Braunvieh"){
$stroke_width++;
$radius_size--;
$radius_color ="rgb(202,168,131)";
$stroke_color ="rgb(0,0,0)";
$descript ="Braunvieh";
}
elseif ($culture =="Charolais"){
$stroke_width++;
$radius_size--;
$radius_color ="rgb(232,215,197)";
$stroke_color ="rgb(0,0,0)";
$descript ="Charolais";
}
elseif ($culture =="Fjall"){
$stroke_width++;
$radius_size--;
$radius_color ="rgb(221,216,197)";
$stroke_color ="rgb(0,0,0)";
$descript ="Fjall";
}
elseif ($culture =="Fleckvieh"){
$stroke_width++;
$radius_size--;
$radius_color ="rgb(156,104,64)";
$stroke_color ="rgb(0,0,0)";
$descript ="Fleckvieh";
}
elseif ($culture =="Friesian"){
$stroke_width++;
$radius_size--;
$radius_color ="rgb(53,53,53)";
$stroke_color ="rgb(221,216,197)";
$descript ="Friesian";
}
elseif ($culture =="Gloucester"){
$stroke_width++;
$radius_size--;
$radius_color ="rgb(106,44,21)";
$stroke_color ="rgb(231,228,213)";
$descript ="Gloucester";
}
elseif ($culture =="Highland"){
$stroke_width++;
$radius_size--;
$radius_color ="rgb(114,56,92)";
$stroke_color ="rgb(192,0,0)";
$descript ="Highland";
}
elseif ($culture =="Irish_Moiled"){
$stroke_width++;
$radius_size--;
$radius_color ="rgb(221,216,197)";
$stroke_color ="rgb(106,44,21)";
$descript ="Irish_Moiled";
}
elseif ($culture =="Limousine"){
$stroke_width++;
$radius_size--;
$radius_color ="rgb(158,105,63)";
$stroke_color ="rgb(0,0,0)";
$descript ="Limousine";
}
elseif ($culture =="Normande"){
$stroke_width++;
$radius_size--;
$radius_color ="rgb(221,216,197)";
$stroke_color ="rgb(0,0,0)";
$descript ="Normande";
}
elseif ($culture =="Parthenais"){
$stroke_width++;
$radius_size--;
$radius_color ="rgb(198,163,123)";
$stroke_color ="rgb(192,0,0)";
$descript ="Parthenais";
}
elseif ($culture =="Piedmontese"){
$stroke_width++;
$radius_size--;
$radius_color ="rgb(231,228,213)";
$stroke_color ="rgb(0,192,192)";
$descript ="Piedmontese";
}
elseif ($culture =="Pirenaica"){
$stroke_width++;
$radius_size--;
$radius_color ="rgb(217,161,112)";
$stroke_color ="rgb(192,0,192)";
$descript ="Pirenaica";
}
elseif ($culture =="Podolian"){
$stroke_width++;
$radius_size--;
$radius_color ="rgb(0,192,192)";
$stroke_color ="rgb(0,0,0)";
$descript ="Podolian";
}
elseif ($culture =="Rotvieh"){
$stroke_width++;
$radius_size--;
$radius_color ="rgb(117,65,51)";
$stroke_color ="rgb(192,0,0)";
$descript ="Rotvieh";
}
else {
$stroke_width =$stroke_width;
$radius_size =$radius_size;
$stroke_color ="rgb(0,0,0)";
$radius_color ="rgb(0,0,0)";
$descript =$descript;
}

//display
if ($radius_size ==8){
echo '<g z-index="2">
<a xlink:href="region.php?id='.$id.'&view='.$getv.'"><title>'.$placename.' ('.$lon.','.$lat.')</title>
<circle cx="'.$lon.'" cy="'.$lat.'" r="5" stroke="'.$stroke_color.'" stroke-width="1" fill="rgb(0,0,0)" />
</a></g>';
}
elseif ($radius_size ==7){
echo '<g z-index="2">
<a xlink:href="region.php?id='.$id.'&view='.$getv.'"><title>'.$placename.', '.$descript.' ('.$lon.','.$lat.')</title>
<circle cx="'.$lon.'" cy="'.$lat.'" r="7" stroke="'.$stroke_color.'" stroke-width="1" fill="'.$radius_color.'" />
</a></g>';
}
else {
echo '<g z-index="2">
<a xlink:href="region.php?id='.$id.'&view='.$getv.'"><title>'.$placename.', '.$descript.' ('.$lon.','.$lat.')</title>
<circle cx="'.$lon.'" cy="'.$lat.'" r="'.$radius_size.'" stroke="'.$stroke_color.'" stroke-width="'.$stroke_width.'" fill="'.$radius_color.'" />
</a></g>';
}

  }

?>