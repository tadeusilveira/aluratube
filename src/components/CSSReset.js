import { createGlobalStyle } from "styled-components";

export const CSSReset = createGlobalStyle`
  /* Redefinir */
  * {
    margem: 0;
    preenchimento: 0;
    dimensionamento de caixa: caixa de borda;
  }
  corpo {
    família de fontes: sem serifa;
  }
  /* PróximoJS */
  html{
    exibição: flexível;
    direção flexível: coluna;
    altura mínima: 100%;
  }
  corpo {
    exibição: flexível;
    flexível: 1;
  }
  #__próximo {
    exibição: flexível;
    flexível: 1;
  }
  /* Globais */
  botão,
  uma {
    decoração de texto: nenhuma;
    opacidade: 1;
    transição: .3s;
    &:flutuar,
    &:foco {
      opacidade: 0,5;
    }
  }
` ;