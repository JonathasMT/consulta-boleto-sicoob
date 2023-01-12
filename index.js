const axios = require('axios');

const api = axios.create({
    baseURL: 'https://api.sicoob.com.br/cobranca-bancaria/v2'
});

// integer // obrigatório // número que identifica o contrato do beneficiário no Sisbr.
const numeroContrato = 000000;

// integer // obrigatório // identifica a modalidade do boleto.
const modalidade = 1;

// integer // número identificador do boleto no Sisbr. Caso seja infomado, não é necessário infomar a linha digitável ou código de barras.
const nossoNumero = null;

// string // número da linha digitável do boleto com 47 posições. Caso seja informado, não é necessário informar o nosso número ou código de barras.
const linhaDigitavel = '11111111111111111111111111111111111111111111111';

// string // número de código de barras do boleto com 44 posições.Caso seja informado, não é necessário informar o nosso número ou linha digitável.
const codigoBarras = '';

// string // obrigatório
const clientid = 'asdf123asdf123asdf123asdf123asdf123';

// string // obrigatório
const token = 'qwer456qwer456qwer456qwer456qwer456qwer456qwer456';

async function consultarBoleto() {
    try {
        const resposta = await api.get('/boletos', {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`,
                'Accept': 'application/json',
                'x-sicoob-clientid': clientid

            },
            params: {
                numeroContrato: numeroContrato,
                modalidade: modalidade,
                nossoNumero: nossoNumero,
                linhaDigitavel: linhaDigitavel,
                codigoBarras: codigoBarras
            }
        });

        try {
            console.log(resposta.response.data);
        } catch (err) {
           console.log(resposta);

        }
      } catch (erro) {
        try {
            console.log(erro.response.data);
        } catch (error) {
           console.erro(erro);
        }
      }
};

consultarBoleto();