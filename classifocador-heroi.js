let nomePersonagem = "Mandrgora";
let xp = 700;
let nivel = "";

if(xp < 1000){
  nivel = "Ferro";
}else if(Xp > 1001 && xp < 2000){
  nivel = "Bronze";
}else if(Xp > 2001 && xp < 5000){
  nivel = "Prata";
}else if(Xp > 6001 && xp < 7000){
  nivel = "Ouro";
}else if(Xp > 7001 && xp < 8000){
  nivel = "Platina";
}else if(Xp > 8001 && xp < 9000){
  nivel = "Acendente";
}else if(Xp > 9001 && xp < 1000){
  nivel = "Imortal";
} else if(Xp > 10001){
  nivel = "Radiante";
}

console.log("O Heroi de nome "+ nomePersonagem+ " esta no nivel "  + nivel);
