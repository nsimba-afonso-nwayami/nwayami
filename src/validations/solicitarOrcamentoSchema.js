import * as yup from "yup";

export const solicitarOrcamentoSchema = yup.object().shape({
  nome: yup.string().required("O nome é obrigatório"),
  email: yup.string().email("Email inválido").required("O email é obrigatório"),
  telefone: yup.string().required("O telefone é obrigatório"),
  servicos: yup.array().min(1, "Selecione ao menos um serviço"),
  mensagem: yup.string().required("Digite uma mensagem"),
});
