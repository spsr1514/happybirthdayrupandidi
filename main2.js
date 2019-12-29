function addNumbers() 
{
 var val1 = parseInt(document.getElementById("value1").value); 
 var val2 = parseInt(document.getElementById("value2").value); 
 var ansD = document.getElementById("answer"); 
 ansD.value = val1 + val2; 
 }
function subNumbers() 
{
 var val1 = parseInt(document.getElementById("value1").value); 
 var val2 = parseInt(document.getElementById("value2").value); 
 var ansD = document.getElementById("answer"); 
 ansD.value = val1 - val2; 
 }
function divNumbers() 
{
 var val1 = parseInt(document.getElementById("value1").value); 
 var val2 = parseInt(document.getElementById("value2").value); 
 var ansD = document.getElementById("answer"); 
 ansD.value = val1 / val2; 
 }
 function multiNumbers() 
{
 var val1 = parseInt(document.getElementById("value1").value); 
 var val2 = parseInt(document.getElementById("value2").value); 
 var ansD = document.getElementById("answer"); 
 ansD.value = val1 * val2; 
 }
  function powerNumbers() 
{
 var val1 = parseInt(document.getElementById("value1").value); 
 var val2 = parseInt(document.getElementById("value2").value); 
 var ansD = document.getElementById("answer"); 
 ansD.value = Math.pow(val1,val2); 
 }
  function maxNumbers() 
{
 var val1 = parseInt(document.getElementById("value1").value); 
 var val2 = parseInt(document.getElementById("value2").value); 
 var ansD = document.getElementById("answer"); 
 ansD.value = Math.max(val1,val2); 
 }
  function sinNumbers() 
{
 var val1 = parseInt(document.getElementById("value1").value); 
 var val2 = parseInt(document.getElementById("value2").value); 
 var ansD = document.getElementById("answer"); 
 ansD.value = Math.sin(val1*Math.PI/180); 
 }
 
  function cosNumbers() 
{
 var val1 = parseInt(document.getElementById("value1").value); 
 var val2 = parseInt(document.getElementById("value2").value); 
 var ansD = document.getElementById("answer"); 
 ansD.value = Math.cos(val1*Math.PI/180); 
 }
  function tanNumbers() 
{
 var val1 = parseInt(document.getElementById("value1").value); 
 var val2 = parseInt(document.getElementById("value2").value); 
 var ansD = document.getElementById("answer"); 
 ansD.value = Math.tan(val1*Math.PI/180); 
 
 }
   function sqrtNumbers() 
{
 var val1 = parseInt(document.getElementById("value1").value); 
 var val2 = parseInt(document.getElementById("value2").value); 
 var ansD = document.getElementById("answer"); 
 ansD.value = Math.sqrt(val1); 
 
 }