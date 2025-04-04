#utf-8
#language: pt

Funcionalidade: acesso ao portal e preenchimento de abas
    Cenário: Preenchimento de informações para envio
        Dado que o usuario acessa o portal Tricentis - home
        E navega ate a area de cadastro de automovel - home
        Quando o usuario valida a pagina "Automobile Insurance" - vehicle_data
        E preenche a aba Enter Vehicle Data - vehicle_data
        E valida se os campos obrigatorios estao preenchidos - vehicle_data
        E avanca para a pagina seguinte - vehicle_data
