let aula = [
    {
        titulo: 'HTML',
        descricao: 'HTML (HyperText Markup Language, ou Linguagem de Marcação de Hipertexto em português) é a linguagem fundamental utilizada para criar a estrutura e o conteúdo das páginas da web. É como se fosse o esqueleto de um site, definindo onde cada elemento (texto, imagens, vídeos, etc.) deve ser colocado',
        ensinado: `head: Contém informações sobre a página, como título, metadados e links para arquivos externos.<br>
                    body: Envolve todo o conteúdo visível da página, incluindo texto, imagens, vídeos e outros elementos.<br>
                    header: Geralmente usado para a parte superior da página, contendo elementos como logotipo, navegação, título e busca.<br>
                    title: O título da sua página
                    main: Representa o conteúdo principal da página, excluindo cabeçalho e rodapé.<br>
                    section: Define uma seção independente dentro da página, como um artigo, capítulo ou seção de comentários.<br>
                    br: insere uma quebra de linha simples em um ponto específico do seu texto.<br>
                    footer: Usado para a parte inferior da página, contendo informações como copyright, links úteis e informações de contato.<br><br>
                    Tags Interativas<br>
                    input: Cria campos de entrada, como caixas de texto, botões de rádio, caixas de seleção e botões de envio.<br>
                    button: Cria botões que podem ser clicados para executar ações.<br>
                    a: Cria links para outras páginas ou recursos.<br>
                    p: Define um parágrafo.<br><br>
                    Tags Especiais<br>
                    target: é utilizado na tag 'a' (âncora) em HTML para especificar onde um documento vinculado será aberto. Em outras palavras, ele define se o link será aberto na mesma aba/janela ou em uma nova.<br>
                    script src: Carrega um arquivo JS externo para a página.<br>
                    link: Conecta a página atual a recursos externos, como folhas de estilo.
                    h1: Define o cabeçalho principal da página.<br>
                    id: Atributo usado para identificar exclusivamente um elemento HTML na página.<br>
                    class: Atributo usado para aplicar estilos a um grupo de elementos.`,
        tags: 'html head body header main section br footer input button a p script src h1 id class title link <a>',
        link: 'https://developer.mozilla.org/pt-BR/docs/Learn/Getting_started_with_the_web/HTML_basics'
    },{
        titulo: 'CSS',
        descricao: 'CSS (Cascading Style Sheets) é como a roupa de uma página web. Com ele, você pode escolher as cores, fontes, tamanhos, espaçamentos e muito mais para cada elemento da sua página.',
        ensinado: ` Importando Estilos<br>
                        @import url: Importa um arquivo CSS externo para a sua página.<br><br>


                    Fontes<br>
                        font-family: Define a família de fontes a ser usada para o texto<br><br>


                    Cores e Fundo<br>
                        background-color: Define a cor de fundo de um elemento.<br><br>


                    Layout<br>
                        display: Define o tipo de caixa de um elemento (block, inline, inline-block, flex, grid, etc.).<br>
                        display-flex: Cria um contêiner flexbox, permitindo um layout flexível.<br>
                        -flex-direction: Define a direção do fluxo dos itens flexíveis dentro do contêiner.<br>
                        --row: Itens são dispostos horizontalmente.<br>
                        --column: Itens são dispostos verticalmente.<br>
                        align-items: Alinha os itens flexíveis na direção transversal do contêiner.<br>
                        -center: Alinha os itens no centro.<br>
                        justify-content: Alinha os itens flexíveis na direção principal do contêiner.<br><br>

                    Tamanho e Espaçamento<br>
                        height: Define a altura de um elemento.<br>
                        width: Define a largura de um elemento.<br>
                        margin: Define o espaço externo ao redor de um elemento.<br>
                        padding: Define o espaço interno dentro de um elemento.<br><br>
                    
                    Texto<br>
                        font-size: Define o tamanho da fonte.<br>
                        color: Define a cor do texto.<br>
                        text-align: Define o alinhamento do texto dentro de um elemento.<br>
                        letter-spacing: Define o espaço entre as letras.<br><br>

                    Bordas e Formatação<br>
                        border: Cria uma borda em torno de um elemento.<br>
                        border-radius: Arredonda os cantos de um elemento.<br>
                        box-sizing: Define como o tamanho de um elemento é calculado (content-box ou border-box).<br>
                        cursor: Define o cursor do mouse quando sobre um elemento.<br>
                        box-shadow: Adiciona uma sombra a um elemento.<br>
                        overflow-y: Define o comportamento de um elemento quando o conteúdo ultrapassa a sua altura.<br>
                        text-decoration: Define a decoração do texto (sublinhado, tachado, etc.).<br><br>

                    Posicionamento<br>
                        position: Define o método de posicionamento de um elemento (static, relative, absolute, fixed).<br>
                        bottom: Define a posição inferior de um elemento em relação ao seu pai ou ao viewport.<br><br>

                    Responsividade<br>
                        @media: Permite criar estilos específicos para diferentes tamanhos de tela.
                    `,
        tags: '@import import url font-family font family background-color background color display display-flex flex flex-direction row column align-items align items center justify-content justify content heigth width margin padding font-size size text-align text letter-spacing letter spacing border border-radius box-sizing box sizing cursor box-shadow shadow overflow-y text-decoration decoration position bottom @media media cor borda elemento sombra tamanho largura',
        link: 'https://developer.mozilla.org/pt-BR/docs/Web/CSS'
    },{
        titulo: 'JavaScript',
        descricao: '',
        ensinado: `Comandos básicos e suas funcionalidades:<br>
                        let: Declara uma variável. Por exemplo: let nome = "João";<br>
                        Obs.: Camel Case é um estilo de escrita utilizado em programação para nomear variáveis, funções e outros elementos do código de forma mais clara e consistente. Nessa convenção, as palavras são unidas sem espaços, e a primeira letra de cada palavra (exceto a primeira) é escrita em maiúscula, lembrando as corcovas de um camelo.<br>
                        Exemplo:<br>
                        Em vez de: primeiranota, segundanota<br>
                        Usamos: primeiraNota, segundaNota<br>
                        <br><br>
                        []: Cria um array (uma lista de itens). Por exemplo: let numeros = [1, 2, 3];<br>
                        {}: Cria um objeto (uma coleção de pares chave-valor). Por exemplo: let pessoa = { nome: "Ana", idade: 30 };<br>
                        function (){}: Define uma função. Por exemplo: function saudacao(nome) { console.log("Olá, " + nome); }<br><br>


                        Manipulação do DOM:<br>
                        document.getElementById(''): Obtém um elemento pelo seu ID.<br>
                        onclick(): Define uma função a ser executada quando um elemento é clicado.<br><br>


                        Saída para o console:<br>
                        console.log(): Imprime uma mensagem no console do navegador, útil para depuração.<br>


                        Controle de fluxo:<br>
                        if(): Executa um bloco de código se uma condição for verdadeira.<br>
                        return: é uma palavra-chave fundamental em JavaScript que serve para encerrar a execução de uma função e retornar um valor específico para o local onde a função foi chamada.<br>
                        for(let ... of ...): Itera sobre os elementos de um objeto iterável.<br><br>

                        Métodos de string:<br>
                        toLowerCase(): Converte uma string para letras minúsculas.<br>
                        includes(): Verifica se uma string contém uma subcadeia.<br><br>


                        Operadores:<br>
                        ||: Operador lógico OU.<br>
                        +=: Operador de atribuição de adição<br>
                        !: é conhecido como operador lógico de negação. Ele inverte o valor booleano de uma expressão. Em outras palavras, se uma expressão é verdadeira, o ! a torna false, e vice-versa(true).`,
        tags: '[] let {} function variável variavel array objeto função funcao console.log console log console.log() document document.getElementById() getElementById elemento onclick onclick() if condição return toLowerCase string métodos metodos includes operador || += = + ! lógico booleano',
        link: 'https://developer.mozilla.org/pt-BR/docs/Web/JavaScript'
    }
]