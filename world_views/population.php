<?php

foreach($rxml->children() as $town)
  {
$id = $town->id;
$placename = $town->place;
$lon = $town->Point->xc;
$lat = $town->Point->yc;

$agri_a = $town->capital->pop;
$agri_b = $town->castle->pop;
$agri_c = $town->town->pop;
$agri_d = $town->abbey->pop;

if ($agri_a =="metropolis"){
$pop_a =4;	
}
elseif ($agri_a =="city"){
$pop_a =3;	
}
elseif ($agri_a =="town"){
$pop_a =2;	
}
elseif ($agri_a =="village"){
$pop_a =1;	
}
else {
$pop_a =0;		
}

if ($agri_b =="metropolis"){
$pop_b =4;	
}
elseif ($agri_b =="city"){
$pop_b =3;	
}
elseif ($agri_b =="town"){
$pop_b =2;	
}
elseif ($agri_b =="village"){
$pop_b =1;	
}
else {
$pop_b =0;		
}

if ($agri_c =="metropolis"){
$pop_c =4;	
}
elseif ($agri_c =="city"){
$pop_c =3;	
}
elseif ($agri_c =="town"){
$pop_c =2;	
}
elseif ($agri_c =="village"){
$pop_c =1;	
}
else {
$pop_c =0;		
}

if ($agri_d =="metropolis"){
$pop_d =4;	
}
elseif ($agri_d =="city"){
$pop_d =3;	
}
elseif ($agri_d =="town"){
$pop_d =2;	
}
elseif ($agri_d =="village"){
$pop_d =1;	
}
else {
$pop_d =0;		
}

$total_pop = $pop_a + $pop_b + $pop_c + $pop_d;
$avg_pop = $total_pop / 4;

$stroke_width =0;
$stroke_color ="rgb(0,0,0)";
$radius_size =8;
$radius_color ="rgb(0,0,0)";
$descript =" ";

//tier 1
if ($avg_pop >=3){
$stroke_width++;
$radius_size--;
$radius_color ="rgb(192,64,192)";
$descript ="highly urbanized";
}
elseif ($avg_pop >=2 && $avg_pop <3){
$stroke_width++;
$radius_size--;
$radius_color ="rgb(192,192,0)";
$descript ="urban";
}
elseif ($avg_pop >=1 && $avg_pop <2){
$stroke_width++;
$radius_size--;
$radius_color ="rgb(192,0,0)";
$descript ="rural";
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