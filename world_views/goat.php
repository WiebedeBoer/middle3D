<?php

foreach($rxml->children() as $town)
  {
$id = $town->id;
$placename = $town->place;
$lon = $town->Point->xc;
$lat = $town->Point->yc;

$culture = $town->goat;

$stroke_width =0;
$radius_size =8;
$descript =" ";

if ($culture =="Thuringian"){
$stroke_width++;
$radius_size--;
$radius_color ="rgb(0,255,255)";
$stroke_color ="rgb(0,0,128)";
$descript ="Thuringian";
}
elseif ($culture =="Alpine"){
$stroke_width++;
$radius_size--;
$radius_color ="rgb(255,255,0)";
$stroke_color ="rgb(0,0,0)";
$descript ="Alpine";
}
elseif ($culture =="Poitou"){
$stroke_width++;
$radius_size--;
$radius_color ="rgb(128,0,0)";
$stroke_color ="rgb(0,0,0)";
$descript ="Poitou";
}
elseif ($culture =="British"){
$stroke_width++;
$radius_size--;
$radius_color ="rgb(192,0,0)";
$stroke_color ="rgb(0,0,0)";
$descript ="British";
}
elseif ($culture =="Norwegian"){
$stroke_width++;
$radius_size--;
$radius_color ="rgb(192,128,0)";
$stroke_color ="rgb(0,0,0)";
$descript ="Norwegian";
}
elseif ($culture =="Murciana"){
$stroke_width++;
$radius_size--;
$radius_color ="rgb(192,192,0)";
$stroke_color ="rgb(0,0,0)";
$descript ="Murciana";
}
elseif ($culture =="Maltese"){
$stroke_width++;
$radius_size--;
$radius_color ="rgb(192,0,192)";
$stroke_color ="rgb(0,0,0)";
$descript ="Maltese";
}
elseif ($culture =="Carpathian"){
$stroke_width++;
$radius_size--;
$radius_color ="rgb(64,0,64)";
$stroke_color ="rgb(0,0,0)";
$descript ="Carpathian";
}
elseif ($culture =="Cretan"){
$stroke_width++;
$radius_size--;
$radius_color ="rgb(64,64,64)";
$stroke_color ="rgb(0,0,0)";
$descript ="Cretan";
}
elseif ($culture =="Angora"){
$stroke_width++;
$radius_size--;
$radius_color ="rgb(64,0,0)";
$stroke_color ="rgb(0,0,0)";
$descript ="Angora";
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