function calcular()
{
var nota1, nota2, nota3, nota4, media;
nota1 = frmMedia.txtNota1.value;
nota2 = frmMedia.txtNota2.value;
nota3 = frmMedia.txtNota3.value;
nota4 = frmMedia.txtNota4.value;
nota1 = parseFloat(nota1);
nota2 = parseFloat(nota2);
nota3 = parseFloat(nota3);
nota4 = parseFloat(nota4);
media = (nota1 + nota2 + nota3 + nota4)/4;
frmMedia.txtMedia.value = media;
}