var docso = require('./index');

function test(num, text) {
  var chuoi = docso(num);
  console.log((chuoi === text) + ' :> ' + chuoi);
}

test(0, 'không');
test('0', 'không');
test(1928, 'một nghìn chín trăm hai mươi tám');
test(1920893830, 'một tỷ chín trăm hai mươi triệu tám trăm chín mươi ba nghìn tám trăm ba mươi');
test('1920893830', 'một tỷ chín trăm hai mươi triệu tám trăm chín mươi ba nghìn tám trăm ba mươi');
test('197400292802893830', 'một trăm chín mươi bảy triệu bốn trăm nghìn hai trăm chín mươi hai tỷ tám trăm lẻ hai triệu tám trăm chín mươi ba nghìn tám trăm ba mươi');
test('197 400,292,802,893,830', 'một trăm chín mươi bảy triệu bốn trăm nghìn hai trăm chín mươi hai tỷ tám trăm lẻ hai triệu tám trăm chín mươi ba nghìn tám trăm ba mươi');
test('904,625,697,166,532,776,746,648,320,380,374,280,103,671,755', 'chín trăm lẻ bốn triệu sáu trăm hai mươi lăm nghìn sáu trăm chín mươi bảy tỷ một trăm sáu mươi sáu triệu năm trăm ba mươi hai nghìn bảy trăm bảy mươi sáu tỷ bảy trăm bốn mươi sáu triệu sáu trăm bốn mươi tám nghìn ba trăm hai mươi tỷ ba trăm tám mươi triệu ba trăm bảy mươi bốn nghìn hai trăm tám mươi tỷ một trăm lẻ ba triệu sáu trăm bảy mươi mốt nghìn bảy trăm năm mươi lăm');
