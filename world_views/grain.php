<?php

foreach($rxml->children() as $town)
  {
$id = $town->id;
$placename = $town->place;
$lon = $town->Point->xc;
$lat = $town->Point->yc;

$agri_a = $town->capital->com;
$agri_b = $town->castle->com;
$agri_c = $town->town->com;
$agri_d = $town->abbey->com;

$town_a = $town->capital->factory;
$town_b = $town->castle->factory;
$town_c = $town->town->factory;
$town_d = $town->abbey->factory;

if ($agri_a =="grain" || $agri_b =="grain" || $agri_c =="grain" || $agri_d =="grain"){
$grain ="grain";	
}
else {
$grain ="none";		
}

if ($town_a =="granary" || $town_b =="granary" || $town_c =="granary" || $town_d =="granary"){
$granary ="granary";	
}
else {
$granary ="none";		
}

if ($town_a =="windmill" || $town_b =="windmill" || $town_c =="windmill" || $town_d =="windmill"){
$windmill ="windmill";	
}
else {
$windmill ="none";		
}

if ($town_a =="watermill" || $town_b =="watermill" || $town_c =="watermill" || $town_d =="watermill"){
$watermill ="watermill";	
}
else {
$watermill ="none";		
}

$stroke_width =0;
$stroke_color ="rgb(0,0,0)";
$radius_size =8;
$radius_color ="rgb(0,0,0)";
$descript =" ";

//tier 1
if ($grain =="grain"){
$stroke_width++;
$radius_size--;
$radius_color ="rgb(255,255,0)";
$descript ="grain";
}
else {
$stroke_width =$stroke_width;
$radius_size =$radius_size;
$stroke_color = $stroke_color;
$radius_color =$radius_color;
$descript =$descript;
}

//tier 2
if ($granary =="granary"){
$stroke_width++;
$radius_size--;
$stroke_color = $radius_color;
$radius_color ="rgb(192,92,0)";
if ($radius_size<7){
$descript = $descript." and granary";}
else {
$descript ="granary";}
}
else {
$stroke_width =$stroke_width;
$radius_size =$radius_size;
$stroke_color = $stroke_color;
$radius_color =$radius_color;
$descript =$descript;
}

//tier 3
if ($windmill =="windmill"){
$stroke_width++;
$radius_size--;
$stroke_color = $radius_color;
$radius_color ="rgb(192,192,192)";
if ($radius_size<7){
$descript = $descript." and windmill";}
else {
$descript ="windmill";}
}
else {
$stroke_width =$stroke_width;
$radius_size =$radius_size;
$stroke_color = $stroke_color;
$radius_color =$radius_color;
$descript =$descript;
}

//tier 2
if ($watermill =="watermill"){
$stroke_width++;
$radius_size--;
$stroke_color = $radius_color;
$radius_color ="rgb(0,255,255)";
if ($radius_size<7){
$descript = $descript." and watermill";}
else {
$descript ="watermill";}
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