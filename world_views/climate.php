<?php

foreach($rxml->children() as $town)
  {
$id = $town->id;
$placename = $town->place;
$lon = $town->Point->xc;
$lat = $town->Point->yc;

$ride = $town->climate;

$stroke_width =0;
$stroke_color ="rgb(0,0,0)";
$radius_size =8;
$radius_color ="rgb(0,0,0)";
$descript =" ";

//tier 1
if ($ride =="temperate_grasslands"){
$stroke_width++;
$radius_size--;
$stroke_color ="rgb(255,0,0)";
$radius_color ="rgb(0,192,128)";
$descript ="temperate grasslands";
}
elseif ($ride =="temperate_grasslands_marshes"){
$stroke_width++;
$radius_size--;
$stroke_color ="rgb(0,255,255)";
$radius_color ="rgb(0,192,128)";
$descript ="temperate grasslands and marshes";
}
elseif ($ride =="temperate_woodlands"){
$stroke_width++;
$radius_size--;
$stroke_color ="rgb(255,0,0)";
$radius_color ="rgb(0,255,0)";
$descript ="temperate woodlands";
}
elseif ($ride =="temperate_woodlands_marshes"){
$stroke_width++;
$radius_size--;
$stroke_color ="rgb(0,255,255)";
$radius_color ="rgb(0,255,0)";
$descript ="temperate woodlands and marshes";
}
elseif ($ride =="mediterranean_shrublands"){
$stroke_width++;
$radius_size--;
$stroke_color ="rgb(255,0,0)";
$radius_color ="rgb(255,128,0)";
$descript ="mediterranean shrublands";
}
elseif ($ride =="mediterranean_shrublands_marshes"){
$stroke_width++;
$radius_size--;
$stroke_color ="rgb(0,255,255)";
$radius_color ="rgb(255,128,0)";
$descript ="mediterranean shrublands and marshes";
}
elseif ($ride =="mediterranean_woodlands"){
$stroke_width++;
$radius_size--;
$stroke_color ="rgb(255,0,0)";
$radius_color ="rgb(128,192,0)";
$descript ="mediterranean woodlands";
}
elseif ($ride =="mediterranean_woodlands_marshes"){
$stroke_width++;
$radius_size--;
$stroke_color ="rgb(0,255,255)";
$radius_color ="rgb(128,192,0)";
$descript ="mediterranean woodlands and marshes";
}
elseif ($ride =="steppe"){
$stroke_width++;
$radius_size--;
$stroke_color ="rgb(255,0,0)";
$radius_color ="rgb(128,64,0)";
$descript ="steppe";
}
elseif ($ride =="desert"){
$stroke_width++;
$radius_size--;
$stroke_color ="rgb(255,0,0)";
$radius_color ="rgb(255,255,0)";
$descript ="desert";
}
elseif ($ride =="desert_marshes"){
$stroke_width++;
$radius_size--;
$stroke_color ="rgb(0,255,255)";
$radius_color ="rgb(255,255,0)";
$descript ="desert and marshes";
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
<circle cx="'.$lon.'" cy="'.$lat.'" r="7" stroke="'.$stroke_color.'" stroke-width="1" fill="'.$radius_color.'" />
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