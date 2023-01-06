# API - Cotação de moedas e conversão de valores (NODE)
> Esta API faz consulta da cotação de algumas das principais moedas do mercado mundial com valores atualizados a cada 30 segundos e também faz a conversão de valores entre duas moedas.

## Como executar:

`npm install`  &&  `npm run dev`

## Rotas
```
/listarmoedas

Exibe uma lista com as moedas disponpiveis para cotação e conversão de valores. Pode ser usada para consultar o código no padrão ISO de uma moeda para efetuar uma consulta. exemplo:(USD - Dólar Americano, BRL - Real Brasileiro...).
```

```
/cotacao

Exibe a cotação atual de uma moeda com base em uma segunda moeda que também deve ser definida na requisição.
Para isso deve enviar um json no body da requisição contendo as seguintes propriedades:

{
	"moeda1": "USD",
	"moeda2": "BRL"
}

Recebe como resposta outro objeto json:

{
	"Cotação atual": "1 Dólar Americano (USD) = 5.2296 Real Brasileiro (BRL)",
	"Última atualização": "06-01-2023 17:45:29"
}
```
```
/convertervalores

Efetua a conversão de um valor entre duas moedas.
Para isso deve enviar um json no body da requisição contendo as seguintes propriedades:

{
	"moeda1": "USD",
	"moeda2": "BRL",
	"valor": 150000
}

O valor deverá ser informado em centavos sem ponto ou virgula!

Recebe como resposta outro objeto json:

{
	"Cotação atual": "1 Dólar Americano (USD) = 5.2209 Real Brasileiro (BRL)",
	"Valor Original": "1500.00  Dólar Americano (USD)",
	"Valor Convertido": "7831.35  Real Brasileiro (BRL)",
	"Última atualização": "06-01-2023 18:16:30"
}
```