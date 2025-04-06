#utf-8
#language: pt

Funcionalidade: acesso ao portal e preenchimento de abas
    Cenário: Preenchimento de informações para envio
        
        Dado que o usuario acessa o portal Tricentis - home
        E navega ate a area de cadastro de automovel - home
        
        Quando o usuario valida a pagina - vehicle_data
        E preenche a aba Enter Vehicle Data - vehicle_data
        E valida se os campos obrigatorios estao preenchidos - vehicle_data
        E avanca para a pagina seguinte - vehicle_data
        
        E preenche a aba Enter Insurance Data - insurant_data
        E valida se os campos obrigatorios estao preenchidos - insurant_data
        E avanca para a pagina seguinte - insurant_data
        
        E preenche a aba Enter Product Data - product_data
        E valida se os campos obrigatorios estao preenchidos - product_data
        E avanca para a pagina seguinte - product_data

        E preenche a aba Select Price Option - price_option
        E valida se os campos obrigatorios estao preenchidos - price_option
        E avanca para a pagina seguinte - price_option

        E preenche a aba Send Quote - send_quote
        E valida se os campos obrigatorios estao preenchidos - send_quote
        Entao o usuario clica no botao Send - send_quote
        E o usuario ver a mensagem de sucesso - send_quote