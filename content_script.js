var words = "om nomnomnomnomnomnomnomnomnomnomn omomnomnomnomnomnomnomnomnomnomnomnom omnomnomnomnomnomnomnomnomnomnomnom nom nom nom ommmmmmmm nom nomnom mnomnomnomnomnomnomnomnomnomnomn omomnomnomnomnomnomnomnomnomnomnomnom omnomnomnomnomnomnomnomnomnomnomnom nom nom nom ommmmmmmm nom nomnom omnomnomivore om nomnomnomnomnomnomnomnomnomnomn omomnomnomnomnomnomnomnomnomnomnomnom omnomnomnomnomnomnomnomnomnomnomnom nom nom nom ommmmmmmm nom nomnom mnomnomnomnomnomnomnomnomnomnomn omomnomnomnomnomnomnomnomnomnomnomnom omnomnomnomnomnomnomnomnomnomnomnom nom nom nom ommmmmmmm nom nomnom omnomnomivore";
var nodes = $('p');
var temp, i, j, length, count;
var last = 0;
for(i=0; i<nodes.length; i++){
  temp = "";
  length = nodes[i].innerText.length;
  if (length > words.length){
    words += words;
  }
  for(j =0; j<length; j++){
    if(j + last >= words.length){
      last = 0;
    }
    temp += words[j+last];
  }
  last = last +length;
  nodes[i].innerText = temp;
}

$('h1').text('OM NOM NOM!');
$('h2').text('OM NOM NOM!');
$('h3').text('OM NOM NOM!');

$("img").attr("src",'https://cdn-shop.threadless.com/products/3890/636x460design_01.jpg');

$('#contain').style.backgroundImage="url(http://media.cmgdigital.com/shared/img/photos/2015/06/08/6e/41/dyc-dinosaur-park-01.jpg)";

$('a').attr("href","http://www.urbandictionary.com/define.php?term=Rawr"); 