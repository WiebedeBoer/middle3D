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

if ($agri_a =="wool" || $agri_b =="wool" || $agri_c =="wool" || $agri_d =="wool"){
$wool ="wool";	
}
else {
$wool ="none";		
}

if ($agri_a =="flax" || $agri_b =="flax" || $agri_c =="flax" || $agri_d =="flax"){
$flax ="flax";	
}
else {
$flax ="none";		
}

if ($agri_a =="silk" || $agri_b =="silk" || $agri_c =="silk" || $agri_d =="silk"){
$silk ="silk";	
}
else {
$silk ="none";		
}

if($town_a =="tailor" || $town_b =="tailor" || $town_c =="tailor" || $town_d =="tailor"){
$cloth ="cloth";	
}
else {
$cloth ="none";	
}

if($town_a =="leather" || $town_b =="leather" || $town_c =="leather" || $town_d =="leather"){
$leather ="leather";	
}
else {
$leather ="none";	
}

if($town_a =="fur" || $town_b =="fur" || $town_c =="fur" || $town_d =="fur"){
$fur ="fur";	
}
else {
$fur ="none";	
}

$stroke_width =0;
$stroke_color ="rgb(0,0,0)";
$radius_size =8;
$radius_color ="rgb(0,0,0)";
$descript =" ";

//tier 1
if ($wool =="wool"){
$stroke_width++;
$radius_size--;
$radius_color ="rgb(192,192,192)";
$descript ="wool";
}
else {
$stroke_width =$stroke_width;
$radius_size =$radius_size;
$stroke_color = $stroke_color;
$radius_color =$radius_color;
$descript =$descript;
}

//tier 2
if ($flax =="flax"){
$stroke_width++;
$radius_size--;
$stroke_color = $radius_color;
$radius_color ="rgb(0,192,255)";
if ($radius_size<7){
$descript = $descript." and flax";}
else {
$descript ="flax";}
}
else {
$stroke_width =$stroke_width;
$radius_size =$radius_size;
$stroke_color = $stroke_color;
$radius_color =$radius_color;
$descript =$descript;
}

//tier 3
if ($silk =="silk"){
$stroke_width++;
$radius_size--;
$stroke_color = $radius_color;
$radius_color ="rgb(255,0,255)";
if ($radius_size<7){
$descript = $descript." and silk";}
else {
$descript ="silk";}
}
else {
$stroke_width =$stroke_width;
$radius_size =$radius_size;
$stroke_color = $stroke_color;
$radius_color =$radius_color;
$descript =$descript;
}

//tier 4
if ($cloth =="cloth"){
$stroke_width++;
$radius_size--;
$stroke_color = $radius_color;
$radius_color ="rgb(255,255,0)";
if ($radius_size<7){
$descript = $descript." and cloth";}
else {
$descript ="cloth";}
}
else {
$stroke_width =$stroke_width;
$radius_size =$radius_size;
$stroke_color = $stroke_color;
$radius_color =$radius_color;
$descript =$descript;
}

//tier 5
if ($leather =="leather"){
$stroke_width++;
$radius_size--;
$stroke_color = $radius_color;
$radius_color ="rgb(128,64,32)";
if ($radius_size<7){
$descript = $descript." and leather";}
else {
$descript ="leather";}
}
else {
$stroke_width =$stroke_width;
$radius_size =$radius_size;
$stroke_color = $stroke_color;
$radius_color =$radius_color;
$descript =$descript;
}

//tier 6
if ($fur =="fur"){
$stroke_width++;
$radius_size--;
$stroke_color = $radius_color;
$radius_color ="rgb(192,32,0)";
if ($radius_size<7){
$descript = $descript." and fur";}
else {
$descript ="fur";}
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