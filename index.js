import api from './src/services/api';

const numeroContrato = 000000;
const modalidade = 1;
const nossoNumero = '';
const linhaDigitavel = '';
const codigoBarras = '00190500954014481606906809350314337370000000100';

const clientid = 'dsfsd1f85sdf185dsf10s25df4';
const token = 'aasdsadsad1asdsadsad1asd1sa2d5sad4sad1sa2d5';

// const dados = {
//     "x-sicoob-clientid": "",
//     numeroContrato: 000,
//     modalidade: 1,
//     nossoNumero: '',
//     linhaDigitavel: '',
//     codigoBarras: ''
// };

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
        console.log(resposta);
      } catch (erro) {
        console.error(erro);
      }
};

consultarBoleto();