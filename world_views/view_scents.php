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

if ($agri_a =="olive_oil" || $agri_b =="olive_oil" || $agri_c =="olive_oil" || $agri_d =="olive_oil"){
$olive_oil ="olive_oil";	
}
else {
$olive_oil ="none";		
}

if ($town_a =="frankincense" || $town_b =="frankincense" || $town_c =="frankincense" || $town_d =="frankincense"){
$frankincense ="frankincense";	
}
else {
$frankincense ="none";		
}

if ($town_a =="soapmaker" || $town_b =="soapmaker" || $town_c =="soapmaker" || $town_d =="soapmaker"){
$soapmaker ="soapmaker";	
}
else {
$soapmaker ="none";		
}

$stroke_width =0;
$stroke_color ="rgb(0,0,0)";
$radius_size =8;
$radius_color ="rgb(0,0,0)";
$descript =" ";

//tier 1
if ($frankincense =="frankincense"){
$stroke_width++;
$radius_size--;
$radius_color ="rgb(192,0,0)";
$descript ="frankincense";
}
else {
$stroke_width =$stroke_width;
$radius_size =$radius_size;
$stroke_color = $stroke_color;
$radius_color =$radius_color;
$descript =$descript;
}

//tier 2
if ($olive_oil =="olive_oil"){
$stroke_width++;
$radius_size--;
$stroke_color = $radius_color;
$radius_color ="rgb(192,192,0)";
if ($radius_size<7){
$descript = $descript." and olive oil";}
else {
$descript ="olive oil";}
}
else {
$stroke_width =$stroke_width;
$radius_size =$radius_size;
$stroke_color = $stroke_color;
$radius_color =$radius_color;
$descript =$descript;
}

//tier 3
if ($soapmaker =="soapmaker"){
$stroke_width++;
$radius_size--;
$stroke_color = $radius_color;
$radius_color ="rgb(0,192,192)";
if ($radius_size<7){
$descript = $descript." and soap";}
else {
$descript ="soap";}
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