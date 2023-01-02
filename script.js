function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = window.document.getElementById('txtano')
    var res = window.document.querySelector('div#res')
    if(fano.value.length == 0 || fano.value > ano){
        window.alert('Verifique os dados e tente novamente!')
    } else{
        var fsex = window.document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = window.document.createElement('img')
        img.setAttribute('id', 'foto')
        if(fsex[0].checked){
            genero = 'homem'
            if(idade >= 0 && idade < 10){
                //criança
                img.setAttribute('src','bebe-menino.jpg')
            }else if(/* idade >= 10 &&*/ idade < 21){
                //Jovem
                img.setAttribute('src','jovem-homem.jpg')
            }else if(idade < 50){
                //adulto
                img.setAttribute('src','homem-adulto.jpg')
            }else /*if(idade > 50)*/{
                //idoso
                img.setAttribute('src','idoso-homem.jpg')
            }
        } else if (fsex[1].checked){
            genero = 'Mulher'
            if(idade >= 0 && idade < 10){
                //criança
                img.setAttribute('src','bebe-menina.jpg')
            }else if(/* idade >= 10 &&*/ idade < 21){
                //Jovem
                img.setAttribute('src','jovem-mulher.jpg')
            }else if(idade < 50){
                //adulto
                img.setAttribute('src','mulher-adulta.jpg')
            }else /*if(idade > 50)*/{
                //idoso
                img.setAttribute('src','idosa-mulher.jpg')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        res.appendChild(img)
    }
}