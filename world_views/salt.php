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

$yard_a = $town->capital->arms;
$yard_b = $town->castle->arms;
$yard_c = $town->town->arms;
$yard_d = $town->abbey->arms;

if ($agri_a =="salt" || $agri_b =="salt" || $agri_c =="salt" || $agri_d =="salt"){
$salt ="salt";	
}
else {
$salt ="none";		
}

if ($town_a =="fishery" || $town_b =="fishery" || $town_c =="fishery" || $town_d =="fishery" || $yard_a =="shipyard" || $yard_b =="shipyard" || $yard_c =="shipyard" || $yard_d =="shipyard"){
$fish ="fish";	
}
else {
$fish ="none";		
}

$stroke_width =0;
$stroke_color ="rgb(0,0,0)";
$radius_size =8;
$radius_color ="rgb(0,0,0)";
$descript =" ";

//tier 1
if ($salt =="salt"){
$stroke_width++;
$radius_size--;
$radius_color ="rgb(255,0,0)";
$descript ="salt";
}
else {
$stroke_width =$stroke_width;
$radius_size =$radius_size;
$stroke_color = $stroke_color;
$radius_color =$radius_color;
$descript =$descript;
}

//tier 2
if ($fish =="fish"){
$stroke_width++;
$radius_size--;
$stroke_color = $radius_color;
$radius_color ="rgb(92,0,92)";
if ($radius_size<7){
$descript = $descript." and fish";}
else {
$descript ="fish";}
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