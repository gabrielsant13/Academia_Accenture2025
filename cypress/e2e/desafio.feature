#utf-8
#language: pt

Funcionalidade: acesso ao portal e preenchimento de abas
    Cenário: Preenchimento de informações para envio
        Dado que acesso o portal Tricentis - home
        E navego ate a area de cadastro de automovel - home
        Quando valido a pagina "Automobile Insurance" - vehicle_data
        E preencho a aba Enter Vehicle Data - vehicle_data
        E valida se os campos obrigatorios estao preenchidos - vehicle_data
