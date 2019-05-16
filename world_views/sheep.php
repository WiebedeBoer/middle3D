<?php

foreach($rxml->children() as $town)
  {
$id = $town->id;
$placename = $town->place;
$lon = $town->Point->xc;
$lat = $town->Point->yc;

$culture = $town->sheep;

$stroke_width =0;
$radius_size =8;
$descript =" ";

if ($culture =="East_Friesian"){
$stroke_width++;
$radius_size--;
$radius_color ="rgb(0,255,255)";
$stroke_color ="rgb(0,0,128)";
$descript ="East Friesian";
}
elseif ($culture =="Zaupelschaf"){
$stroke_width++;
$radius_size--;
$radius_color ="rgb(255,128,0)";
$stroke_color ="rgb(0,0,0)";
$descript ="Zaupelschaf";
}
elseif ($culture =="Ryeland"){
$stroke_width++;
$radius_size--;
$radius_color ="rgb(255,255,0)";
$stroke_color ="rgb(0,0,0)";
$descript ="Ryeland";
}
elseif ($culture =="Herdwick"){
$stroke_width++;
$radius_size--;
$radius_color ="rgb(192,0,0)";
$stroke_color ="rgb(0,0,0)";
$descript ="Herdwick";
}
elseif ($culture =="Lincoln"){
$stroke_width++;
$radius_size--;
$radius_color ="rgb(192,0,192)";
$stroke_color ="rgb(0,0,0)";
$descript ="Lincoln";
}
elseif ($culture =="Short_Tailed"){
$stroke_width++;
$radius_size--;
$radius_color ="rgb(128,128,0)";
$stroke_color ="rgb(0,0,0)";
$descript ="Short Tailed";
}
elseif ($culture =="Merino"){
$stroke_width++;
$radius_size--;
$radius_color ="rgb(64,64,0)";
$stroke_color ="rgb(0,0,0)";
$descript ="Merino";
}
elseif ($culture =="Churra"){
$stroke_width++;
$radius_size--;
$radius_color ="rgb(64,0,64)";
$stroke_color ="rgb(0,0,0)";
$descript ="Churra";
}
elseif ($culture =="Fat_Tailed"){
$stroke_width++;
$radius_size--;
$radius_color ="rgb(128,128,128)";
$stroke_color ="rgb(0,0,0)";
$descript ="Fat Tailed";
}
elseif ($culture =="Bardoka"){
$stroke_width++;
$radius_size--;
$radius_color ="rgb(75,75,0)";
$stroke_color ="rgb(0,0,0)";
$descript ="Bardoka";
}
elseif ($culture =="Thin_Tailed"){
$stroke_width++;
$radius_size--;
$radius_color ="rgb(192,192,192)";
$stroke_color ="rgb(0,0,0)";
$descript ="Thin Tailed";
}
elseif ($culture =="Arabi"){
$stroke_width++;
$radius_size--;
$radius_color ="rgb(64,0,64)";
$stroke_color ="rgb(0,0,0)";
$descript ="Arabi";
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