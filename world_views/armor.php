<?php

foreach($rxml->children() as $town)
  {
$id = $town->id;
$placename = $town->place;
$lon = $town->Point->xc;
$lat = $town->Point->yc;

$agri_a = $town->capital->arms;
$agri_b = $town->castle->arms;
$agri_c = $town->town->arms;
$agri_d = $town->abbey->arms;

if ($agri_a =="armorer" || $agri_b =="armorer" || $agri_c =="armorer" || $agri_d =="armorer"){
$armorer ="armorer";	
}
else {
$armorer ="none";		
}

if ($agri_a =="smithy" || $agri_b =="smithy" || $agri_c =="smithy" || $agri_d =="smithy"){
$smithy ="smithy";	
}
else {
$smithy ="none";		
}

if ($agri_a =="shipyard" || $agri_b =="shipyard" || $agri_c =="shipyard" || $agri_d =="shipyard"){
$shipyard ="shipyard";	
}
else {
$shipyard ="none";		
}

$stroke_width =0;
$stroke_color ="rgb(0,0,0)";
$radius_size =8;
$radius_color ="rgb(0,0,0)";
$descript =" ";

//tier 1
if ($armorer =="armorer"){
$stroke_width++;
$radius_size--;
$radius_color ="rgb(255,0,0)";
$descript ="armorer";
}
else {
$stroke_width =$stroke_width;
$radius_size =$radius_size;
$stroke_color = $stroke_color;
$radius_color =$radius_color;
$descript =$descript;
}

//tier 2
if ($smithy =="smithy"){
$stroke_width++;
$radius_size--;
$stroke_color = $radius_color;
$radius_color ="rgb(92,0,92)";
if ($radius_size<7){
$descript = $descript." and smithy";}
else {
$descript ="smithy";}
}
else {
$stroke_width =$stroke_width;
$radius_size =$radius_size;
$stroke_color = $stroke_color;
$radius_color =$radius_color;
$descript =$descript;
}

//tier 3
if ($shipyard =="shipyard"){
$stroke_width++;
$radius_size--;
$stroke_color = $radius_color;
$radius_color ="rgb(0,255,255)";
if ($radius_size<7){
$descript = $descript." and shipyard";}
else {
$descript ="shipyard";}
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