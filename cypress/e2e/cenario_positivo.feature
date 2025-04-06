#utf-8
#language: pt

Funcionalidade: Acesso ao portal e envio de informações
    Cenário: Preenchimento e validação de campos para envio
        
        Dado que o usuario acessa o portal Tricentis - home
        E navega ate a area de cadastro de automovel - home
        E o usuario valida a aba - vehicle_data
        E preenche a aba Enter Vehicle Data - vehicle_data
        E valida se os campos obrigatorios estao preenchidos - vehicle_data
        E preenche a aba Enter Insurance Data - insurant_data
        E valida se os campos obrigatorios estao preenchidos - insurant_data
        E preenche a aba Enter Product Data - product_data
        E valida se os campos obrigatorios estao preenchidos - product_data
        E preenche a aba Select Price Option - price_option
        E valida se todos os campos obrigatorios estao preenchidos - price_option
        E preenche a aba Send Quote - send_quote
        E valida se os campos obrigatorios estao preenchidos - send_quote
        Quando o usuario clica no botao Send - send_quote
        Entao o usuario ver a mensagem de sucesso - send_quote