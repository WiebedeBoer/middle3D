<?php

foreach($rxml->children() as $town)
  {
$id = $town->id;
$placename = $town->place;
$lon = $town->Point->xc;
$lat = $town->Point->yc;

$culture = $town->culture;

$stroke_width =0;
$radius_size =8;
$descript =" ";

//german
if ($culture =="saxon"){
$stroke_width++;
$radius_size--;
$radius_color ="rgb(0,255,255)";
$stroke_color ="rgb(0,0,128)";
$descript ="saxon";
}
elseif ($culture =="bavarian"){
$stroke_width++;
$radius_size--;
$radius_color ="rgb(0,223,223)";
$stroke_color ="rgb(0,0,0)";
$descript ="bavarian";
}
elseif ($culture =="swabian"){
$stroke_width++;
$radius_size--;
$radius_color ="rgb(0,191,191)";
$stroke_color ="rgb(0,0,0)";
$descript ="swabian";
}
elseif ($culture =="bohemian"){
$stroke_width++;
$radius_size--;
$radius_color ="rgb(0,159,159)";
$stroke_color ="rgb(0,0,0)";
$descript ="bohemian";
}
elseif ($culture =="franconian"){
$stroke_width++;
$radius_size--;
$radius_color ="rgb(0,127,127)";
$stroke_color ="rgb(0,0,0)";
$descript ="franconian";
}
elseif ($culture =="frisian"){
$stroke_width++;
$radius_size--;
$radius_color ="rgb(0,95,95)";
$stroke_color ="rgb(0,0,0)";
$descript ="frisian";
}
elseif ($culture =="flemish"){
$stroke_width++;
$radius_size--;
$radius_color ="rgb(0,63,63)";
$stroke_color ="rgb(0,0,0)";
$descript ="flemish";
}
elseif ($culture =="carinthian"){
$stroke_width++;
$radius_size--;
$radius_color ="rgb(0,31,31)";
$stroke_color ="rgb(0,0,0)";
$descript ="carinthian";
}
//french
elseif ($culture =="breton"){
$stroke_width++;
$radius_size--;
$radius_color ="rgb(255,0,0)";
$stroke_color ="rgb(0,0,0)";
$descript ="breton";
}
elseif ($culture =="frankish"){
$stroke_width++;
$radius_size--;
$radius_color ="rgb(191,0,0)";
$stroke_color ="rgb(0,0,0)";
$descript ="frankish";
}
elseif ($culture =="occitan"){
$stroke_width++;
$radius_size--;
$radius_color ="rgb(127,0,0)";
$stroke_color ="rgb(0,0,0)";
$descript ="occitan";
}
elseif ($culture =="arpitan"){
$stroke_width++;
$radius_size--;
$radius_color ="rgb(63,0,0)";
$stroke_color ="rgb(0,0,0)";
$descript ="arpitan";
}
//british
elseif ($culture =="english"){
$stroke_width++;
$radius_size--;
$radius_color ="rgb(0,255,0)";
$stroke_color ="rgb(0,0,0)";
$descript ="english";
}
elseif ($culture =="welsh"){
$stroke_width++;
$radius_size--;
$radius_color ="rgb(0,204,0)";
$stroke_color ="rgb(0,0,0)";
$descript ="welsh";
}
elseif ($culture =="scottish"){
$stroke_width++;
$radius_size--;
$radius_color ="rgb(0,153,0)";
$stroke_color ="rgb(0,0,0)";
$descript ="scottish";
}
elseif ($culture =="pictish"){
$stroke_width++;
$radius_size--;
$radius_color ="rgb(0,102,0)";
$stroke_color ="rgb(0,0,0)";
$descript ="pictish";
}
elseif ($culture =="irish"){
$stroke_width++;
$radius_size--;
$radius_color ="rgb(0,51,0)";
$stroke_color ="rgb(0,0,0)";
$descript ="irish";
}
//scandinavian
elseif ($culture =="norwegian"){
$stroke_width++;
$radius_size--;
$radius_color ="rgb(255,0,255)";
$stroke_color ="rgb(0,0,0)";
$descript ="norwegian";
}
elseif ($culture =="danish"){
$stroke_width++;
$radius_size--;
$radius_color ="rgb(204,0,204)";
$stroke_color ="rgb(0,0,0)";
$descript ="danish";
}
elseif ($culture =="swedish"){
$stroke_width++;
$radius_size--;
$radius_color ="rgb(153,0,153)";
$stroke_color ="rgb(0,0,0)";
$descript ="swedish";
}
//baltic
elseif ($culture =="baltic"){
$stroke_width++;
$radius_size--;
$radius_color ="rgb(102,0,102)";
$stroke_color ="rgb(0,0,0)";
$descript ="baltic";
}
//russian
elseif ($culture =="russian"){
$stroke_width++;
$radius_size--;
$radius_color ="rgb(51,0,51)";
$stroke_color ="rgb(0,0,0)";
$descript ="russian";
}
//spanish
elseif ($culture =="navarrese"){
$stroke_width++;
$radius_size--;
$radius_color ="rgb(255,255,0)";
$stroke_color ="rgb(0,0,0)";
$descript ="navarrese";
}
elseif ($culture =="aragonese"){
$stroke_width++;
$radius_size--;
$radius_color ="rgb(219,219,0)";
$stroke_color ="rgb(0,0,0)";
$descript ="aragonese";
}
elseif ($culture =="catalan"){
$stroke_width++;
$radius_size--;
$radius_color ="rgb(183,183,0)";
$stroke_color ="rgb(0,0,0)";
$descript ="catalan";
}
elseif ($culture =="leonese"){
$stroke_width++;
$radius_size--;
$radius_color ="rgb(147,147,0)";
$stroke_color ="rgb(0,0,0)";
$descript ="leonese";
}
elseif ($culture =="castilian"){
$stroke_width++;
$radius_size--;
$radius_color ="rgb(111,111,0)";
$stroke_color ="rgb(0,0,0)";
$descript ="castilian";
}
elseif ($culture =="galician"){
$stroke_width++;
$radius_size--;
$radius_color ="rgb(75,75,0)";
$stroke_color ="rgb(0,0,0)";
$descript ="galician";
}
elseif ($culture =="portuguese"){
$stroke_width++;
$radius_size--;
$radius_color ="rgb(39,39,0)";
$stroke_color ="rgb(0,0,0)";
$descript ="portuguese";
}
//arabic
elseif ($culture =="andalucian"){
$stroke_width++;
$radius_size--;
$radius_color ="rgb(0,255,0)";
$stroke_color ="rgb(0,0,0)";
$descript ="andalucian";
}
elseif ($culture =="maghreb"){
$stroke_width++;
$radius_size--;
$radius_color ="rgb(0,219,0)";
$stroke_color ="rgb(0,0,0)";
$descript ="maghreb";
}
elseif ($culture =="ifriqiya"){
$stroke_width++;
$radius_size--;
$radius_color ="rgb(0,183,0)";
$stroke_color ="rgb(0,0,0)";
$descript ="ifriqiya";
}
elseif ($culture =="misr"){
$stroke_width++;
$radius_size--;
$radius_color ="rgb(0,183,0)";
$stroke_color ="rgb(0,0,0)";
$descript ="misr";
}
elseif ($culture =="najd"){
$stroke_width++;
$radius_size--;
$radius_color ="rgb(0,147,0)";
$stroke_color ="rgb(0,0,0)";
$descript ="najd";
}
elseif ($culture =="hejaz"){
$stroke_width++;
$radius_size--;
$radius_color ="rgb(0,111,0)";
$stroke_color ="rgb(0,0,0)";
$descript ="hejaz";
}
elseif ($culture =="mashriq"){
$stroke_width++;
$radius_size--;
$radius_color ="rgb(0,75,0)";
$stroke_color ="rgb(0,0,0)";
$descript ="mashriq";
}
//italian
elseif ($culture =="lombard"){
$stroke_width++;
$radius_size--;
$radius_color ="rgb(0,0,255)";
$stroke_color ="rgb(0,0,0)";
$descript ="lombard";
}
elseif ($culture =="tuscan"){
$stroke_width++;
$radius_size--;
$radius_color ="rgb(0,0,204)";
$stroke_color ="rgb(0,0,0)";
$descript ="tuscan";
}
elseif ($culture =="neapolitan"){
$stroke_width++;
$radius_size--;
$radius_color ="rgb(0,0,153)";
$stroke_color ="rgb(0,0,0)";
$descript ="neapolitan";
}
elseif ($culture =="sardinian"){
$stroke_width++;
$radius_size--;
$radius_color ="rgb(0,0,102)";
$stroke_color ="rgb(0,0,0)";
$descript ="sardinian";
}
elseif ($culture =="sicilian"){
$stroke_width++;
$radius_size--;
$radius_color ="rgb(0,0,51)";
$stroke_color ="rgb(0,0,0)";
$descript ="sicilian";
}
//polish
elseif ($culture =="polish"){
$stroke_width++;
$radius_size--;
$radius_color ="rgb(255,0,0)";
$stroke_color ="rgb(0,0,0)";
$descript ="polish";
}
elseif ($culture =="lithuanian"){
$stroke_width++;
$radius_size--;
$radius_color ="rgb(219,0,0)";
$stroke_color ="rgb(0,0,0)";
$descript ="lithuanian";
}
//hungarian
elseif ($culture =="croatian"){
$stroke_width++;
$radius_size--;
$radius_color ="rgb(183,0,0)";
$stroke_color ="rgb(0,0,0)";
$descript ="croatian";
}
elseif ($culture =="hungarian"){
$stroke_width++;
$radius_size--;
$radius_color ="rgb(147,0,0)";
$stroke_color ="rgb(0,0,0)";
$descript ="hungarian";
}
elseif ($culture =="wallachian"){
$stroke_width++;
$radius_size--;
$radius_color ="rgb(111,0,0)";
$stroke_color ="rgb(0,0,0)";
$descript ="wallachian";
}
//bulgarian
elseif ($culture =="bulgarian"){
$stroke_width++;
$radius_size--;
$radius_color ="rgb(75,0,0)";
$stroke_color ="rgb(0,0,0)";
$descript ="bulgarian";
}
//serbian
elseif ($culture =="serbian"){
$stroke_width++;
$radius_size--;
$radius_color ="rgb(39,0,0)";
$stroke_color ="rgb(0,0,0)";
$descript ="serbian";
}
//turkish
elseif ($culture =="turkish"){
$stroke_width++;
$radius_size--;
$radius_color ="rgb(192,0,192)";
$stroke_color ="rgb(0,0,0)";
$descript ="turkish";
}
//byzantine
elseif ($culture =="byzantine"){
$stroke_width++;
$radius_size--;
$radius_color ="rgb(255,255,0)";
$stroke_color ="rgb(0,0,0)";
$descript ="byzantine";
}
//georgian
elseif ($culture =="georgian"){
$stroke_width++;
$radius_size--;
$radius_color ="rgb(204,204,0)";
$stroke_color ="rgb(0,0,0)";
$descript ="georgian";
}
//armenian
elseif ($culture =="armenian"){
$stroke_width++;
$radius_size--;
$radius_color ="rgb(153,153,0)";
$stroke_color ="rgb(0,0,0)";
$descript ="armenian";
}
//persian
elseif ($culture =="persian"){
$stroke_width++;
$radius_size--;
$radius_color ="rgb(102,102,0)";
$stroke_color ="rgb(0,0,0)";
$descript ="persian";
}
else {
$stroke_width =$stroke_width;
$radius_size =$radius_size;
$stroke_color ="rgb(0,0,0)";
$radius_color ="rgb(0,0,0)";
$descript =$descript;
}

//display
if ($radius_size ==8){
echo '<g z-index="2">
<a xlink:href="region.php?id='.$id.'&view='.$getv.'"><title>'.$placename.' ('.$lon.','.$lat.')</title>
<circle cx="'.$lon.'" cy="'.$lat.'" r="5" stroke="'.$stroke_color.'" stroke-width="1" fill="rgb(0,0,0)" />
</a></g>';
}
elseif ($radius_size ==7){
echo '<g z-index="2">
<a xlink:href="region.php?id='.$id.'&view='.$getv.'"><title>'.$placename.', '. $descript.' ('.$lon.','.$lat.')</title>
<circle cx="'.$lon.'" cy="'.$lat.'" r="7" stroke="'.$stroke_color.'" stroke-width="1" fill="'.$radius_color.'" />
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