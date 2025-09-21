
    const divPostit = document.getElementsByClassName('postit_container')[0];
    const conteudo = document.getElementById('conteudo');



function mostrarConteudo(event, topico) {
    event.preventDefault(); // evita que o link recarregue a página


    

    const textos = {
        senhas: `
     
            <img src="img/de-volta.png" alt="setinhaVoltar" onclick="voltar()">
            <h1>O que é uma senha forte?</h1>
  <p>
    Imagine que a senha é como a chave da porta da sua casa. Se for uma chave
    simples, qualquer um pode copiar e entrar. Já uma senha forte é como uma
    chave bem diferente e difícil de imitar.
  </p>
            <h2>Cibercriminosos</h2>
  <p>
    Cibercriminosos são indivíduos ou organizações que utilizam computadores,
    a internet ou outras tecnologias digitais para cometer atividades ilegais,
    como roubo de dados financeiros e pessoais, fraude, extorsão, disseminação
    de malware ou vandalismo digital. O objetivo pode ser obter lucro, causar
    danos ou até fins políticos.
  </p>
  <p>
    Eles podem atuar de forma isolada ou em grupos organizados, usando técnicas
    avançadas e até inteligência artificial para realizar ataques cada vez mais
    sofisticados. Por isso, a segurança digital se tornou essencial para todos.
  </p>

  

  <h2>Por que é importante usar senhas fortes?</h2>
  <p>
    Uma senha forte é a principal barreira para evitar que suas contas on-line
    sejam invadidas. Sem práticas atualizadas, você pode estar usando senhas que
    cibercriminosos conseguem adivinhar facilmente em poucas horas.
  </p>
  <p>
    Expor-se ao roubo de identidade e à extorsão é um risco que você nunca deve
    correr. Fraquezas em credenciais de contas são o sonho de consumo de qualquer
    cibercriminoso. Mas o sucesso deles é o seu pesadelo, e por isso você deve
    agir para evitar ser a próxima vítima.
  </p>

  <h2>Como criar uma senha forte?</h2>
  <p>
    Para se proteger dos métodos mais modernos de invasão, você precisa de senhas
    robustas. Veja algumas dicas práticas:
  </p>
  <ul>
    <li><strong>Ela é longa?</strong> Use pelo menos 10 ou 12 caracteres, ou o máximo possível.</li>
    <li><strong>Ela é difícil de adivinhar?</strong> Evite sequências como "12345" ou "abcde", e palavras comuns como "senha1".</li>
    <li><strong>Tem variedade de caracteres?</strong> Misture letras maiúsculas, minúsculas, números e símbolos.</li>
    <li><strong>Evita substituições óbvias?</strong> Como trocar "O" por "0". Essas trocas já são conhecidas por softwares de invasão.</li>
    <li><strong>Usa combinações incomuns de palavras?</strong> Agrupe palavras inesperadas ou em ordens diferentes para confundir ataques de dicionário.</li>
    <li><strong>Você consegue memorizá-la?</strong> Senhas precisam ser fortes, mas também lembráveis.</li>
    <li><strong>Não reutilize senhas.</strong> Sempre crie algo original para cada conta.</li>
    <li><strong>Use regras criativas.</strong> Exemplo: três palavras com quatro letras cada, alterando as duas primeiras letras por números ou símbolos.  
      Em vez de <em>casagatovida</em>, crie algo como <em>?4sa#2to?6da</em>.
    </li>
  </ul>

        `,
        golpes: `
        <img src="img/de-volta.png" alt="setinhaVoltar" onclick="voltar()">
           <h1>Golpes mais comuns na internet e como se proteger</h1>


  <h2>1. Phishing (roubo de dados por links falsos)</h2>
  <p>O golpista envia um e-mail, mensagem ou site falso que imita bancos, lojas ou redes sociais para roubar senhas e informações pessoais.</p>
  <ul>
    <li>Confira sempre o endereço do site (domínio verdadeiro).</li>
    <li>Não clique em links de e-mails ou mensagens suspeitas.</li>
    <li>Ative autenticação em duas etapas nas suas contas.</li>
  </ul>

  <h2>2. Golpe do falso suporte</h2>
  <p>Criminosos se passam por atendentes de bancos, operadoras ou até do WhatsApp, pedindo códigos, senhas ou acessos.</p>
  <ul>
    <li>Empresas sérias nunca pedem senhas ou códigos por mensagem.</li>
    <li>Entre em contato diretamente com o suporte oficial pelo site ou aplicativo.</li>
    <li>Nunca compartilhe códigos de SMS recebidos.</li>
  </ul>

  <h2>3. Golpes em redes sociais</h2>
  <p>Perfis falsos ou contas invadidas pedem dinheiro, divulgam promoções falsas ou espalham links maliciosos.</p>
  <ul>
    <li>Desconfie de pedidos de dinheiro por mensagens privadas.</li>
    <li>Confirme a identidade da pessoa por ligação antes de enviar algo.</li>
    <li>Ative autenticação em duas etapas em todas as redes sociais.</li>
  </ul>

  <h2>4. Compras falsas em sites e anúncios</h2>
  <p>Sites falsos e anúncios em redes sociais oferecem produtos com preços muito baixos, mas não entregam nada.</p>
  <ul>
    <li>Pesquise a reputação da loja em sites de reclamação.</li>
    <li>Verifique se o site tem certificado de segurança (https://).</li>
    <li>Desconfie de promoções “imperdíveis” ou muito baratas.</li>
  </ul>

  <h2>5. Golpes de investimento</h2>
  <p>Promessas de ganhos fáceis e rápidos em criptomoedas, ações ou pirâmides financeiras atraem vítimas.</p>
  <ul>
    <li>Ganhos altos e garantidos quase sempre são fraude.</li>
    <li>Pesquise a empresa na CVM (Comissão de Valores Mobiliários).</li>
    <li>Não invista por links enviados por desconhecidos.</li>
  </ul>

  <h2>6. Golpe do delivery ou encomenda</h2>
  <p>Mensagens falsas informam sobre entregas retidas ou taxas para liberar pedidos.</p>
  <ul>
    <li>Não clique em links recebidos por SMS ou WhatsApp.</li>
    <li>Verifique a situação da compra diretamente no site oficial da transportadora ou loja.</li>
    <li>Desconfie de cobranças inesperadas.</li>
  </ul>

  <h2>7. Golpes com aplicativos falsos</h2>
  <p>Apps falsos prometem benefícios, mas instalam vírus que roubam dados bancários.</p>
  <ul>
    <li>Baixe aplicativos apenas da Google Play ou App Store.</li>
    <li>Confira o desenvolvedor e as avaliações do app.</li>
    <li>Mantenha antivírus ativo no celular ou computador.</li>
  </ul>

  <h2>Checklist rápido para se proteger</h2>
  <ul>
    <li>Use senhas fortes e diferentes em cada conta.</li>
    <li>Ative autenticação em duas etapas sempre que possível.</li>
    <li>Desconfie de mensagens urgentes pedindo dinheiro ou dados.</li>
    <li>Não clique em links suspeitos ou recebidos de desconhecidos.</li>
    <li>Baixe apps apenas de lojas oficiais.</li>
    <li>Mantenha celular e computador atualizados.</li>
  </ul>

        `,
        cuidados: `
            <img src="img/de-volta.png" alt="setinhaVoltar" onclick="voltar()">
            <h1>Cuidados nas redes sociais</h1>

  <h2>1. Proteja suas contas</h2>
  <ul>
    <li>Use senhas fortes e diferentes para cada rede social.</li>
    <li>Ative a <strong>autenticação em duas etapas</strong> (2FA) sempre que possível.</li>
    <li>Não compartilhe senhas com ninguém.</li>
    <li>Evite fazer login em computadores públicos.</li>
  </ul>

  <h2>2. Configure sua privacidade</h2>
  <ul>
    <li>Revise as <strong>configurações de privacidade</strong> de cada rede social.</li>
    <li>Restrinja quem pode ver suas fotos, publicações e informações pessoais.</li>
    <li>Evite deixar seu número de telefone e e-mail visíveis para todos.</li>
  </ul>

  <h2>3. Cuidado com o que compartilha</h2>
  <ul>
    <li>Não poste endereço, rotina diária ou dados bancários.</li>
    <li>Pense antes de compartilhar fotos de documentos ou cartões.</li>
    <li>Evite publicar em tempo real sua localização.</li>
  </ul>

  <h2>4. Atenção a contatos e mensagens</h2>
  <ul>
    <li>Desconfie de perfis novos ou sem foto que enviam pedidos de amizade.</li>
    <li>Não clique em links recebidos por mensagens de desconhecidos.</li>
    <li>Cuidado com pedidos de dinheiro feitos por amigos — confirme por telefone.</li>
  </ul>

  <h2>5. Cuidados com golpes e fake news</h2>
  <ul>
    <li>Desconfie de promoções muito boas para ser verdade.</li>
    <li>Verifique a fonte antes de compartilhar notícias.</li>
    <li>Não participe de sorteios que pedem dados pessoais ou bancários.</li>
  </ul>

  <h2>6. Proteja seus dispositivos</h2>
  <ul>
    <li>Mantenha o celular e o computador atualizados.</li>
    <li>Use antivírus confiável.</li>
    <li>Ative bloqueio por senha, biometria ou PIN no aparelho.</li>
  </ul>

  <h2>Checklist rápido</h2>
  <ul>
    <li>Senhas fortes e 2FA ativada</li>
    <li>Privacidade revisada</li>
    <li>Não compartilhar dados pessoais</li>
    <li>Desconfiar de links e mensagens suspeitas</li>
    <li>Dispositivos sempre atualizados e protegidos</li>
  </ul>

        `,
        whatsapp: `
         <img src="img/de-volta.png" alt="setinhaVoltar" onclick="voltar()">
            <h1>Como usar o WhatsApp com segurança</h1>
 
  <h2>1. Proteja sua conta</h2>

  <ul>
    <li>Ative a <strong>verificação em duas etapas</strong> (Configurações → Conta → Verificação em duas etapas).</li>
    <li>Nunca compartilhe <strong>códigos de confirmação por SMS</strong>.</li>
    <li>Ative <strong>bloqueio por impressão digital ou Face ID</strong> no app.</li>
    <li>Mantenha o <strong>app e o celular atualizados</strong>.</li>
  </ul>

  <h2>2. Ajuste sua privacidade</h2>
  <ul>
    <li>Defina <strong>Foto, Visto por último e Status</strong> apenas para "Meus contatos" ou "Ninguém".</li>
    <li>Controle quem pode <strong>te adicionar em grupos</strong>.</li>
    <li>Desative <strong>pré-visualização de mensagens</strong> na tela de bloqueio.</li>
  </ul>

  <h2>3. Cuidado com golpes</h2>
  <ul>
    <li>Desconfie de mensagens que pedem <strong>urgência, códigos ou dinheiro</strong>.</li>
    <li>Não clique em <strong>links suspeitos</strong> nem instale arquivos desconhecidos.</li>
    <li>Confirme pedidos de amigos ou familiares <strong>por ligação</strong> antes de transferir dinheiro.</li>
  </ul>

  <h2>4. Use bem os recursos do app</h2>
  <ul>
    <li>Ative <strong>mensagens temporárias</strong> em conversas sensíveis.</li>
    <li>Use <strong>"Ver uma vez"</strong> para fotos e vídeos privados.</li>
    <li>Revise sempre os <strong>Dispositivos vinculados</strong> em WhatsApp Web.</li>
  </ul>

  <h2>5. Se sua conta for invadida</h2>
  <ul>
    <li>Tente <strong>reinstalar e validar seu número</strong> com o código SMS.</li>
    <li>Avise seus contatos sobre a invasão.</li>
    <li>Entre em contato com o <strong>suporte do WhatsApp</strong>.</li>
    <li>Se o chip foi clonado, <strong>bloqueie com a operadora</strong>.</li>
  </ul>

  <h2>Checklist rápido</h2>
  <ul>
    <li>Ative verificação em duas etapas</li>
    <li>Bloqueio por biometria/senha</li>
    <li>Revise dispositivos vinculados</li>
    <li>Ajuste privacidade</li>
    <li>Desconfie de links e pedidos suspeitos</li>
  </ul>

        `,
        bancos: `
        <img src="img/de-volta.png" alt="setinhaVoltar" onclick="voltar()">
            <h1>Cuidados com PIX e bancos digitais</h1>

  <h2>1. Proteja sua conta</h2>
  <ul>
    <li>Ative a <strong>autenticação em duas etapas</strong> no app do banco.</li>
    <li>Use senha forte, diferente de outras contas.</li>
    <li>Ative biometria (impressão digital ou reconhecimento facial) no aplicativo.</li>
    <li>Não compartilhe senhas, códigos ou tokens com ninguém.</li>
  </ul>

  <h2>2. Cuidados com o PIX</h2>
  <ul>
    <li>Confirme sempre o nome e CPF/CNPJ antes de concluir a transferência.</li>
    <li>Desconfie de pedidos de PIX urgentes, mesmo que venham de amigos ou familiares.</li>
    <li>Não clique em links de promoções ou supostos sorteios de PIX.</li>
    <li>Use chaves aleatórias em vez do seu CPF ou telefone para mais privacidade.</li>
  </ul>

  <h2>3. Golpes mais comuns</h2>
  <ul>
    <li><strong>Falso boleto ou QR Code:</strong> golpistas enviam boletos ou códigos falsos. Verifique sempre no app oficial do banco.</li>
    <li><strong>Golpe do falso funcionário:</strong> alguém liga pedindo atualização de cadastro ou dados de acesso. Bancos nunca pedem senhas por telefone.</li>
    <li><strong>Clonagem de WhatsApp:</strong> criminosos usam sua conta para pedir PIX aos seus contatos.</li>
    <li><strong>Links falsos:</strong> páginas que imitam o site do banco para roubar login e senha.</li>
  </ul>

  <h2>4. Segurança do celular</h2>
  <ul>
    <li>Ative bloqueio de tela com PIN ou biometria.</li>
    <li>Não instale aplicativos fora da loja oficial (Google Play / App Store).</li>
    <li>Evite usar Wi-Fi público para acessar apps de banco.</li>
    <li>Mantenha sistema e aplicativos sempre atualizados.</li>
  </ul>

  <h2>5. Em caso de golpe</h2>
  <ul>
    <li>Entre em contato com o banco imediatamente pelo aplicativo oficial ou telefone oficial.</li>
    <li>Registre um boletim de ocorrência (BO) digital.</li>
    <li>Se for PIX, peça a devolução imediata pela função <strong>PIX Devolução</strong> (quando disponível).</li>
    <li>Avise contatos próximos se tiver sua conta comprometida.</li>
  </ul>

  <h2>Checklist rápido</h2>
  <ul>
    <li>2FA ativada no app do banco</li>
    <li>Senha forte e biometria ativa</li>
    <li>Usar chaves aleatórias no PIX</li>
    <li>Conferir dados antes de enviar dinheiro</li>
    <li>Desconfiar de links, promoções e pedidos urgentes</li>
    <li>Celular sempre protegido e atualizado</li>
  </ul>

        `,
        ligacoes: `
        <img src="img/de-volta.png" alt="setinhaVoltar" onclick="voltar()">
            <h1>Cuidados com ligações e mensagens suspeitas</h1>
  

  <h2>1. Ligações suspeitas</h2>
  <p>Criminosos se passam por bancos, operadoras ou empresas conhecidas para pedir dados.</p>
  <ul>
    <li>Desconfie de ligações pedindo <strong>senhas, códigos de SMS ou dados pessoais</strong>.</li>
    <li>Se alguém disser que é do banco, desligue e ligue você mesmo para o número oficial.</li>
    <li>Não instale aplicativos indicados por atendentes desconhecidos.</li>
    <li>Evite retornar ligações de números desconhecidos do exterior.</li>
  </ul>

  <h2>2. Mensagens suspeitas</h2>
  <p>Mensagens falsas podem chegar por SMS, WhatsApp, Telegram, e-mail ou redes sociais.</p>
  <ul>
    <li>Não clique em <strong>links recebidos de desconhecidos</strong>.</li>
    <li>Desconfie de mensagens com erros de português ou promessas exageradas.</li>
    <li>Não forneça dados pessoais em formulários enviados por mensagem.</li>
    <li>Se a mensagem pedir dinheiro de urgência, confirme por telefone com a pessoa.</li>
  </ul>

  <h2>3. Golpes mais comuns</h2>
  <ul>
    <li><strong>Falso suporte:</strong> alguém se passa por banco ou operadora pedindo acesso remoto.</li>
    <li><strong>Golpe do amigo/familiar:</strong> mensagens de contatos pedindo dinheiro via PIX.</li>
    <li><strong>Promoções falsas:</strong> prêmios, sorteios ou links de descontos inexistentes.</li>
    <li><strong>Mensagens de encomenda:</strong> SMS dizendo que há taxa para liberar entrega.</li>
  </ul>

  <h2>4. Como se proteger</h2>
  <ul>
    <li>Não compartilhe <strong>senhas, códigos ou tokens</strong> por telefone ou mensagem.</li>
    <li>Bloqueie e denuncie números suspeitos.</li>
    <li>Prefira sempre usar os canais oficiais das empresas.</li>
    <li>Instale um identificador de chamadas ou bloqueador de spam no celular.</li>
  </ul>

  <h2>5. Em caso de golpe</h2>
  <ul>
    <li>Desconecte imediatamente a chamada ou conversa.</li>
    <li>Se tiver passado dados, entre em contato com o banco ou empresa oficial.</li>
    <li>Troque senhas comprometidas.</li>
    <li>Registre boletim de ocorrência, se necessário.</li>
  </ul>

  <h2>Checklist rápido</h2>
  <ul>
    <li>Desconfiar de ligações pedindo senhas ou códigos</li>
    <li>Não clicar em links suspeitos recebidos por mensagem</li>
    <li>Confirmar pedidos de dinheiro diretamente com a pessoa</li>
    <li>Usar apenas canais oficiais para falar com empresas</li>
    <li>Bloquear e denunciar números suspeitos</li>
  </ul>

        `
    };

    // Esconde os post-its
    divPostit.style.display = 'none';
    // Mostra o conteúdo
    conteudo.innerHTML = textos[topico];
}
function voltar(){
     divPostit.style.display = 'flex';
      conteudo.innerHTML = ''; 
    }