<?php

foreach($rxml->children() as $town)
  {
$id = $town->id;
$placename = $town->place;
$lon = $town->Point->xc;
$lat = $town->Point->yc;

$agri_a = $town->capital->factory;
$agri_b = $town->castle->factory;
$agri_c = $town->town->factory;
$agri_d = $town->abbey->factory;

if ($agri_a =="madder" || $agri_b =="madder" || $agri_c =="madder" || $agri_d =="madder"){
$madder ="madder";	
}
else {
$madder ="none";		
}

if ($agri_a =="woad" || $agri_b =="woad" || $agri_c =="woad" || $agri_d =="woad"){
$woad ="woad";	
}
else {
$woad ="none";		
}

if ($agri_a =="saffron" || $agri_b =="saffron" || $agri_c =="saffron" || $agri_d =="saffron"){
$saffron ="saffron";	
}
else {
$saffron ="none";		
}

$stroke_width =0;
$stroke_color ="rgb(0,0,0)";
$radius_size =8;
$radius_color ="rgb(0,0,0)";
$descript =" ";

//tier 1
if ($madder =="madder"){
$stroke_width++;
$radius_size--;
$radius_color ="rgb(192,0,0)";
$descript ="madder";
}
else {
$stroke_width =$stroke_width;
$radius_size =$radius_size;
$stroke_color = $stroke_color;
$radius_color =$radius_color;
$descript =$descript;
}

//tier 2
if ($woad =="woad"){
$stroke_width++;
$radius_size--;
$stroke_color = $radius_color;
$radius_color ="rgb(0,192,255)";
if ($radius_size<7){
$descript = $descript." and woad";}
else {
$descript ="woad";}
}
else {
$stroke_width =$stroke_width;
$radius_size =$radius_size;
$stroke_color = $stroke_color;
$radius_color =$radius_color;
$descript =$descript;
}

//tier 3
if ($saffron =="saffron"){
$stroke_width++;
$radius_size--;
$stroke_color = $radius_color;
$radius_color ="rgb(255,255,0)";
if ($radius_size<7){
$descript = $descript." and saffron";}
else {
$descript ="saffron";}
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