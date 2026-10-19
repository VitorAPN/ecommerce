import type { Cliente } from './types.ts';

const listaClientes: Cliente[] = [];

function cadastrarCliente(cliente: Cliente) : void {
    listaClientes.push(cliente);
}

function listarClientes() : Cliente[] {
    return listaClientes;
}

export {cadastrarCliente, listarClientes }