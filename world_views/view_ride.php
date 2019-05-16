<?php

foreach($rxml->children() as $town)
  {
$id = $town->id;
$placename = $town->place;
$lon = $town->Point->xc;
$lat = $town->Point->yc;

$ride = $town->ride;

$agri_a = $town->capital->arms;
$agri_b = $town->castle->arms;
$agri_c = $town->town->arms;
$agri_d = $town->abbey->arms;

$stroke_width =0;
$stroke_color ="rgb(0,0,0)";
$radius_size =8;
$radius_color ="rgb(0,0,0)";
$descript =" ";

if ($agri_a =="shipyard" || $agri_b =="shipyard" || $agri_c =="shipyard" || $agri_d =="shipyard"){
$shipyard ="shipyard";	
}
else {
$shipyard ="none";		
}

//tier 1
if ($ride =="stud"){
$stroke_width++;
$radius_size--;
$radius_color ="rgb(255,0,0)";
$descript ="stud";
}
elseif ($ride =="camel"){
$stroke_width++;
$radius_size--;
$radius_color ="rgb(255,128,0)";
$descript ="camel";
}
else {
$stroke_width =$stroke_width;
$radius_size =$radius_size;
$stroke_color = $stroke_color;
$radius_color =$radius_color;
$descript =$descript;
}

//tier 2
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