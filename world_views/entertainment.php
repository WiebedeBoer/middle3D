<?php

foreach($rxml->children() as $town)
  {
$id = $town->id;
$placename = $town->place;
$lon = $town->Point->xc;
$lat = $town->Point->yc;

$ride = $town->style;

$stroke_width =0;
$stroke_color ="rgb(0,0,0)";
$radius_size =8;
$radius_color ="rgb(0,0,0)";
$descript =" ";

//tier 1
if ($ride =="joust"){
$stroke_width++;
$radius_size--;
$radius_color ="rgb(192,0,0)";
$descript ="jousting";
}
elseif ($ride =="tavern"){
$stroke_width++;
$radius_size--;
$radius_color ="rgb(0,192,192)";
$descript ="tavern";
}
elseif ($ride =="minstrel"){
$stroke_width++;
$radius_size--;
$radius_color ="rgb(255,0,255)";
$descript ="minstrel";
}
elseif ($ride =="hunt"){
$stroke_width++;
$radius_size--;
$radius_color ="rgb(255,128,64)";
$descript ="hunting";
}
elseif ($ride =="falconry"){
$stroke_width++;
$radius_size--;
$radius_color ="rgb(128,64,32)";
$descript ="falconry";
}
elseif ($ride =="fair"){
$stroke_width++;
$radius_size--;
$radius_color ="rgb(255,255,0)";
$descript ="fairs";
}
elseif ($ride =="reliquary"){
$stroke_width++;
$radius_size--;
$radius_color ="rgb(192,192,192)";
$descript ="pelgrimage";
}
else {
$stroke_width =$stroke_width;
$radius_size =$radius_size;
$stroke_color = $stroke_color;
$radius_color =$radius_color;
$descript =$descript;
}

//display
if ($radius_size ==8){
echo '<g z-index="2">
<a xlink:href="settlement.php?id='.$id.'&view='.$getv.'"><title>'.$placename.' ('.$lon.','.$lat.')</title>
<circle cx="'.$lon.'" cy="'.$lat.'" r="5" stroke="rgb(0,0,0)" stroke-width="1" fill="rgb(0,0,0)" />
</a></g>';
}
elseif ($radius_size ==7){
echo '<g z-index="2">
<a xlink:href="settlement.php?id='.$id.'&view='.$getv.'"><title>'.$placename.', '. $descript.' ('.$lon.','.$lat.')</title>
<circle cx="'.$lon.'" cy="'.$lat.'" r="7" stroke="rgb(0,0,0)" stroke-width="1" fill="'.$radius_color.'" />
</a></g>';
}
else {
echo '<g z-index="2">
<a xlink:href="settlement.php?id='.$id.'&view='.$getv.'"><title>'.$placename.', '. $descript.' ('.$lon.','.$lat.')</title>
<circle cx="'.$lon.'" cy="'.$lat.'" r="'.$radius_size.'" stroke="'.$stroke_color.'" stroke-width="'.$stroke_width.'" fill="'.$radius_color.'" />
</a></g>';
}

  }

?>