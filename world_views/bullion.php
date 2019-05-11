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

if ($agri_a =="silver" || $agri_b =="silver" || $agri_c =="silver" || $agri_d =="silver"){
$silver ="silver";	
}
else {
$silver ="none";		
}

if ($agri_a =="gold" || $agri_b =="gold" || $agri_c =="gold" || $agri_d =="gold"){
$gold ="gold";	
}
else {
$gold ="none";		
}

if ($agri_a =="emeralds" || $agri_b =="emeralds" || $agri_c =="emeralds" || $agri_d =="emeralds"){
$emeralds ="emeralds";	
}
else {
$emeralds ="none";		
}

if ($agri_a =="rubies" || $agri_b =="rubies" || $agri_c =="rubies" || $agri_d =="rubies"){
$rubies ="rubies";	
}
else {
$rubies ="none";		
}

if($town_a =="mint" || $town_b =="mint" || $town_c =="mint" || $town_d =="mint"){
$mint ="mint";	
}
else {
$mint ="none";	
}

if($town_a =="ivory" || $town_b =="ivory" || $town_c =="ivory" || $town_d =="ivory"){
$ivory ="ivory";	
}
else {
$ivory ="none";	
}

$stroke_width =0;
$stroke_color ="rgb(0,0,0)";
$radius_size =8;
$radius_color ="rgb(0,0,0)";
$descript =" ";

//tier 1
if ($silver =="silver"){
$stroke_width++;
$radius_size--;
$radius_color ="rgb(192,192,192)";
$descript ="silver";
}
else {
$stroke_width =$stroke_width;
$radius_size =$radius_size;
$stroke_color = $stroke_color;
$radius_color =$radius_color;
$descript =$descript;
}

//tier 2
if ($gold =="gold"){
$stroke_width++;
$radius_size--;
$stroke_color = $radius_color;
$radius_color ="rgb(255,255,0)";
if ($radius_size<7){
$descript = $descript." and gold";}
else {
$descript ="gold";}
}
else {
$stroke_width =$stroke_width;
$radius_size =$radius_size;
$stroke_color = $stroke_color;
$radius_color =$radius_color;
$descript =$descript;
}

//tier 3
if ($rubies =="rubies"){
$stroke_width++;
$radius_size--;
$stroke_color = $radius_color;
$radius_color ="rgb(128,0,0)";
if ($radius_size<7){
$descript = $descript." and rubies";}
else {
$descript ="rubies";}
}
else {
$stroke_width =$stroke_width;
$radius_size =$radius_size;
$stroke_color = $stroke_color;
$radius_color =$radius_color;
$descript =$descript;
}

//tier 4
if ($rubies =="emeralds"){
$stroke_width++;
$radius_size--;
$stroke_color = $radius_color;
$radius_color ="rgb(80,200,120)";
if ($radius_size<7){
$descript = $descript." and emeralds";}
else {
$descript ="emeralds";}
}
else {
$stroke_width =$stroke_width;
$radius_size =$radius_size;
$stroke_color = $stroke_color;
$radius_color =$radius_color;
$descript =$descript;
}

//tier 5
if ($mint =="mint"){
$stroke_width++;
$radius_size--;
$stroke_color = $radius_color;
$radius_color ="rgb(128,64,0)";
if ($radius_size<7){
$descript = $descript." and mint";}
else {
$descript ="mint";}
}
else {
$stroke_width =$stroke_width;
$radius_size =$radius_size;
$stroke_color = $stroke_color;
$radius_color =$radius_color;
$descript =$descript;
}

//tier 6
if ($ivory =="ivory"){
$stroke_width++;
$radius_size--;
$stroke_color = $radius_color;
$radius_color ="rgb(255,0,255)";
if ($radius_size<7){
$descript = $descript." and ivory";}
else {
$descript ="ivory";}
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