#utf-8
#language: pt

Funcionalidade: Validação de fluxo com dados incompletos ou inválidos
    Cenário: Avançar para a aba Price Option deixando algum campo de aba anterior vazio

        Dado que o usuario acessa o portal Tricentis - home
        E navega ate a area de cadastro de automovel - home       
        E o usuario valida a aba - vehicle_data
        E preenche a aba Enter Vehicle Data - vehicle_data
        E valida se os campos obrigatorios estao preenchidos - vehicle_data        
        E preenche a aba Enter Insurance Data - insurant_data
        E valida se os campos obrigatorios estao preenchidos - insurant_data
        E avanca para a aba Price Option - product_data
        Entao valida se os campos obrigatorios anteriores estao preenchidos - price_option