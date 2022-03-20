function enviar(){
    let nome = document.querySelector('#nome')
    let email = document.querySelector('#email');
    let mensagem = document.querySelector('#mensagem');
    let conteudo_nome = nome.value;
    let conteudo_email = email.value;
    let conteudo_texto = mensagem.value;
    let usuario = conteudo_nome.substring(0, conteudo_email.indexOf("@"));
    let dominio = conteudo_email.substring(conteudo_email.indexOf("@") + 1, conteudo_email.indexOf('.'));
    let dominio_completo = conteudo_email.substring(conteudo_email.indexOf("@") + 1, conteudo_email.length);
    console.log(conteudo_email, usuario, dominio)
    
    let texto_bool = (
        conteudo_texto === ''
    )

    let email_bool = (
        (conteudo_email.search('@') === -1) || 
        (usuario.length < 1) || 
        (usuario.length >32) ||
        (dominio.length < 1) ||
        (dominio.length > 16) ||
        (conteudo_email.search(' ')) !== -1 ||
        (dominio_completo.search(".com") === -1)
    )

    if(texto_bool) {
        alert(` Erro no envio: Insira uma mensagem ${usuario}`)
    }
    if(email_bool){
        alert('Erro no envio: Endereço de mail inválido')
    }

    if((texto_bool === false) && (email_bool === false)){
        alert(`Obrigado pelo contato, ${usuario}!`)
    }
    
    const form = document.querySelector('form')
        form.addEventListener('.botao_enviar', e => {
        e.preventDefault()
        })
}