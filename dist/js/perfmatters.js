/*
 optimization 2017-06-08 
*/

function logCRP(){var o=window.performance.timing,n=o.domContentLoadedEventStart-o.domLoading,t=o.domComplete-o.domLoading;document.getElementById("crp-stats").textContent="DCL: "+n+"ms, onload: "+t+"ms"}window.addEventListener("load",function(o){logCRP()});