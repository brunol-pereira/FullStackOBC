# Display FLEX

## flex-direction

Direcionamento do itens

- flex-direction: column -> Alinha os itens como coluna
- flex-direction: column-reverse -> Alinha os itens como coluna (de baixo para cima)
- flex-direction: row-reverse -> Alinha os itens como linha (da direita pra esquerda)

## gap

Espaço entre os itens

- row-gap: 15px -> Para itens em coluna
- column-gap: 15px -> Para itens em linha
- gap: 15px -> gap vertical e gap horizontal iguais
- gap: 0px 15px -> gap vertical e gap horizontal(respectivamentes) diferentes

## justify-content

Centralizações **horizontais** (obs: depende do flex-direction)

- justify-content: center -> Centraliza o conteúdo ao centro
- justify-content: end -> Centraliza o conteúdo ao fim
- justify-content: space-around -> Espaçamentos iguais da esquerda e direita
- justify-content: space-between -> Espamentos o maior possível entre os itens
- justify-content: space-evenly -> Espaçamentos iguais entre os itens

## align-items

Centralizações **verticais** (obs: depende do flex-direction)

- align-items: center -> Centraliza o conteúdo ao centro
- align-items: flex-end -> Centraliza o conteúdo ao fim
- align-items: stretch -> Estica os itens

## flex-wrap

flex-wrap: wrap -> Os itens quebram quando não tiverem mais espaço

## flex-basis

flex-basis: 200px -> Tamanho do item

## flex-grow

flex-grow: 1 -> Os itens preenchem todo o espaço disponível que eles tem

*A junção dele e do flex-basis é importante para ativar o wrap

## flex-shrink

flex-shrink: 2 -> O Item diminui quanto maior é o número
flex-shrink: 0 -> O Item NÃO diminui

## flex

flex: 1 0 200px -> Grow / shrink / basis