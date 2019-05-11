<?php

foreach($rxml->children() as $town)
  {
$id = $town->id;
$placename = $town->place;
$lon = $town->Point->xc;
$lat = $town->Point->yc;

$agri_a = $town->capital->church;
$agri_b = $town->castle->church;
$agri_c = $town->town->church;
$agri_d = $town->abbey->church;

if ($agri_a =="lord_bishop" || $agri_b =="lord_bishop" || $agri_c =="lord_bishop" || $agri_d =="lord_bishop" || $agri_a =="prince-bishop" || $agri_b =="prince-bishop" || $agri_c =="prince-bishop" || $agri_d =="prince-bishop"){
$silver ="bishop";	
}
else {
$silver ="none";		
}

if ($agri_a =="lord_archbishop" || $agri_b =="lord_archbishop" || $agri_c =="lord_archbishop" || $agri_d =="lord_archbishop" || $agri_a =="prince-archbishop" || $agri_b =="prince-archbishop" || $agri_c =="prince-archbishop" || $agri_d =="prince-archbishop"){
$gold ="archbishop";	
}
else {
$gold ="none";		
}

$stroke_width =0;
$stroke_color ="rgb(0,0,0)";
$radius_size =8;
$radius_color ="rgb(0,0,0)";
$descript =" ";

//tier 1
if ($silver =="bishop"){
$stroke_width++;
$radius_size--;
$radius_color ="rgb(192,192,192)";
$descript ="bishop";
}
else {
$stroke_width =$stroke_width;
$radius_size =$radius_size;
$stroke_color = $stroke_color;
$radius_color =$radius_color;
$descript =$descript;
}

//tier 2
if ($gold =="archbishop"){
$stroke_width++;
$radius_size--;
$stroke_color = $radius_color;
$radius_color ="rgb(255,255,0)";
if ($radius_size<7){
$descript = $descript." and archbishop";}
else {
$descript ="archbishop";}
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