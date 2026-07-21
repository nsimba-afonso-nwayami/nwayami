import * as yup from "yup";

export const contactSchema = yup.object({
  name: yup
    .string()
    .required("O nome é obrigatório.")
    .min(3, "O nome deve ter pelo menos 3 caracteres.")
    .max(100, "O nome é demasiado longo."),

  email: yup
    .string()
    .required("O e-mail é obrigatório.")
    .email("Introduza um e-mail válido."),

  phone: yup
    .string()
    .required("O telefone é obrigatório.")
    .matches(
      /^[0-9+\s()-]{9,20}$/,
      "Introduza um número de telefone válido."
    ),

  subject: yup
    .string()
    .required("O assunto é obrigatório.")
    .min(5, "O assunto deve ter pelo menos 5 caracteres.")
    .max(150, "O assunto é demasiado longo."),

  message: yup
    .string()
    .required("A mensagem é obrigatória.")
    .min(20, "A mensagem deve ter pelo menos 20 caracteres.")
    .max(2000, "A mensagem é demasiado longa."),
});
