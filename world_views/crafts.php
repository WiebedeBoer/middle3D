<?php

foreach($rxml->children() as $town)
  {
$id = $town->id;
$placename = $town->place;
$lon = $town->Point->xc;
$lat = $town->Point->yc;

$town_a = $town->capital->factory;
$town_b = $town->castle->factory;
$town_c = $town->town->factory;
$town_d = $town->abbey->factory;

if ($town_a =="potterer" || $town_b =="potterer" || $town_c =="potterer" || $town_d =="potterer"){
$potterer ="potterer";	
}
else {
$potterer ="none";		
}

if ($town_a =="glasswork" || $town_b =="glasswork" || $town_c =="glasswork" || $town_d =="glasswork"){
$glasswork ="glasswork";	
}
else {
$glasswork ="none";		
}

$stroke_width =0;
$stroke_color ="rgb(0,0,0)";
$radius_size =8;
$radius_color ="rgb(0,0,0)";
$descript =" ";

//tier 1
if ($potterer =="potterer"){
$stroke_width++;
$radius_size--;
$radius_color ="rgb(192,64,0)";
$descript ="pottery";
}
else {
$stroke_width =$stroke_width;
$radius_size =$radius_size;
$stroke_color = $stroke_color;
$radius_color =$radius_color;
$descript =$descript;
}

//tier 2
if ($glasswork =="glasswork"){
$stroke_width++;
$radius_size--;
$stroke_color = $radius_color;
$radius_color ="rgb(192,192,192)";
if ($radius_size<7){
$descript = $descript." and glass";}
else {
$descript ="glass";}
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
<a xlink:href="region.php?id='.$id.'&view='.$getv.'"><title>'.$placename.' ('.$lon.','.$lat.')</title>
<circle cx="'.$lon.'" cy="'.$lat.'" r="5" stroke="rgb(0,0,0)" stroke-width="1" fill="rgb(0,0,0)" />
</a></g>';
}
elseif ($radius_size ==7){
echo '<g z-index="2">
<a xlink:href="region.php?id='.$id.'&view='.$getv.'"><title>'.$placename.', '. $descript.' ('.$lon.','.$lat.')</title>
<circle cx="'.$lon.'" cy="'.$lat.'" r="7" stroke="rgb(0,0,0)" stroke-width="1" fill="'.$radius_color.'" />
</a></g>';
}
else {
echo '<g z-index="2">
<a xlink:href="region.php?id='.$id.'&view='.$getv.'"><title>'.$placename.', '. $descript.' ('.$lon.','.$lat.')</title>
<circle cx="'.$lon.'" cy="'.$lat.'" r="'.$radius_size.'" stroke="'.$stroke_color.'" stroke-width="'.$stroke_width.'" fill="'.$radius_color.'" />
</a></g>';
}

  }

?>