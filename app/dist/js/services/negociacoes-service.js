import { Negociacao } from "../models/negociacao.js";
export class NegociacoesServices {
    obterNegociacoesDoDia() {
        return fetch("http://localhost:2500/dados")
            .then((res) => res.json())
            .then((dados) => {
            return dados.map((dadoDeHoje) => {
                return new Negociacao(new Date(), dadoDeHoje.vezes, dadoDeHoje.montante);
            });
        });
    }
}
