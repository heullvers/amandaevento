import * as Yup from 'yup';

export default Yup.object().shape({
    name: Yup.string().min(2, 'Nome necessita ter 2 dígitos ou mais').required('Nome é um campo obrigatório.'),
    email: Yup.string().email("Digite um email válido").required('Email é um campo obrigatório.')
})