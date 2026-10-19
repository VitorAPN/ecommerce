import promptSync = require('prompt-sync');
import { cadastrarCliente, listarClientes } from './clientes';
import type { Cliente } from './types'

const prompt = promptSync({ sigint: true });

const nomeInput: string = prompt('Digite o nome do cliente: ');
const idadeInput: number = Number(prompt('Digite a idade do cliente: '));

const novoCliente: Cliente = {
    nome: nomeInput,
    idade: idadeInput
}

cadastrarCliente(novoCliente);

const listaAtual = listarClientes();
console.log(listaAtual)