<?php

foreach($rxml->children() as $town)
  {
$id = $town->id;
$placename = $town->place;
$lon = $town->Point->xc;
$lat = $town->Point->yc;

$agri_a = $town->capital->monastic;
$agri_b = $town->castle->monastic;
$agri_c = $town->town->monastic;
$agri_d = $town->abbey->monastic;

if ($agri_a =="lord_abbot" || $agri_b =="lord_abbot" || $agri_c =="lord_abbot" || $agri_d =="lord_abbot" || $agri_a =="prince-abbot" || $agri_b =="prince-abbot" || $agri_c =="prince-abbot" || $agri_d =="prince-abbot"){
$abbot ="abbey";	
}
else {
$abbot ="none";		
}

if ($agri_a =="teutonic" || $agri_b =="teutonic" || $agri_c =="teutonic" || $agri_d =="teutonic"){
$teutonic ="teutonic";	
}
else {
$teutonic ="none";		
}

if ($agri_a =="hospitaller" || $agri_b =="hospitaller" || $agri_c =="hospitaller" || $agri_d =="hospitaller"){
$hospitaller ="hospitaller";	
}
else {
$hospitaller ="none";		
}

if ($agri_a =="templar" || $agri_b =="templar" || $agri_c =="templar" || $agri_d =="templar"){
$templar ="templar";	
}
else {
$templar ="none";		
}

$stroke_width =0;
$stroke_color ="rgb(0,0,0)";
$radius_size =8;
$radius_color ="rgb(0,0,0)";
$descript =" ";

//tier 1
if ($abbot =="abbey"){
$stroke_width++;
$radius_size--;
$radius_color ="rgb(255,255,0)";
$descript ="abbey";
}
else {
$stroke_width =$stroke_width;
$radius_size =$radius_size;
$stroke_color = $stroke_color;
$radius_color =$radius_color;
$descript =$descript;
}

//tier 2
if ($teutonic =="teutonic"){
$stroke_width++;
$radius_size--;
$stroke_color = $radius_color;
$radius_color ="rgb(0,255,255)";
if ($radius_size<7){
$descript = $descript." and teutonic";}
else {
$descript ="teutonic";}
}
else {
$stroke_width =$stroke_width;
$radius_size =$radius_size;
$stroke_color = $stroke_color;
$radius_color =$radius_color;
$descript =$descript;
}

//tier 3
if ($hospitaller =="hospitaller"){
$stroke_width++;
$radius_size--;
$stroke_color = $radius_color;
$radius_color ="rgb(64,64,64)";
if ($radius_size<7){
$descript = $descript." and hospitaller";}
else {
$descript ="hospitaller";}
}
else {
$stroke_width =$stroke_width;
$radius_size =$radius_size;
$stroke_color = $stroke_color;
$radius_color =$radius_color;
$descript =$descript;
}

//tier 4
if ($templar =="templar"){
$stroke_width++;
$radius_size--;
$stroke_color = $radius_color;
$radius_color ="rgb(255,0,0)";
if ($radius_size<7){
$descript = $descript." and templar";}
else {
$descript ="templar";}
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