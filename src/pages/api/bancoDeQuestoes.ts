import QuestaoModel from "@/model/questao";
import RespostaModel from "@/model/respostas";

const questoes: QuestaoModel[] = [
    new QuestaoModel(306, 'Qual o inserto transmissor da doença de Chagas?', [
        RespostaModel.errada('Abelha'),
        RespostaModel.errada('Barata'),
        RespostaModel.errada('Pulga'),
        RespostaModel.certa('Barbeiro')
    ]),

    new QuestaoModel(307, 'Qual fruto é conhecido no Norte e Nordeste como  "jerimum" ?', [
        RespostaModel.errada('Caju'),
        RespostaModel.errada('Côco'),
        RespostaModel.errada('Chchu'),
        RespostaModel.certa('Abóbora')
    ]),

    new QuestaoModel(308, 'Qual é o coletivo de cães ?', [
        RespostaModel.errada('Manada'),
        RespostaModel.errada('ALcateia'),
        RespostaModel.errada('Rebanho'),
        RespostaModel.certa('Matilha')
    ]),

    new QuestaoModel(309, 'Qual é o triângulo que tem todos os lados diferentes ?', [
        RespostaModel.errada('Equilátero'),
        RespostaModel.errada('Isóceles'),
        RespostaModel.errada('Trapézio'),
        RespostaModel.certa('Escaleno')
    ]),

]

export default questoes