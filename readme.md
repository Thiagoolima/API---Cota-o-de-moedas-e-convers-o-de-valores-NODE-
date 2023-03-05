# API - Cotação de moedas e conversão de valores (NODE)
> Esta API faz consulta da cotação de algumas das principais moedas do mercado mundial com valores atualizados a cada 30 segundos e também faz a conversão de valores entre duas moedas. </br>
(importante se atentar que consulta fora do horário de pregão da bolsa irá retornar a cotação na ultima atualização, no caso o horário do fechamento do ultimo pregão)

## Como executar:

1. Clone este repositório: `git clone https://github.com/Thiagoolima/api-de-cambio`
2. Entre no diretório do projeto: `cd api-de-cambio`
3. Instale as dependências do projeto: `npm install`
4. Execute o projeto: `npm run dev`

## Como Usar

Para usar a API, basta enviar solicitações HTTP para os endpoints disponíveis.

## Endpoints

#### Listar Moedas
```
/listarmoedas

Exibe uma lista com as moedas disponpiveis para cotação e conversão de valores. 
Pode ser usada para consultar o código no padrão ISO de uma moeda para efetuar uma consulta. 
exemplo:(USD - Dólar Americano, BRL - Real Brasileiro...).
```
Para efetuar uma requisição nesse endpoint é necessário efetuar uma requisição sem corpo no body, e sem parametros na URL.
</br>
</br>
![reqListarMoedas](https://user-images.githubusercontent.com/112025168/222937090-cc4a561c-7455-4655-9bb3-640ae1ee2d4a.png)


Essa requisição retorna um json com a lista de todas as moedas disponíveis para consulta e conversão na API.
</br>
</br>
![resListarMoedas](https://user-images.githubusercontent.com/112025168/222937150-fa8902da-701f-47b1-9be2-15f5bee86158.png)

#### Efetuar cotação de moedas
```
/cotacao

Exibe a cotação atual de uma moeda com base em uma segunda moeda que também deve ser definida na requisição.
Para isso deve enviar um json no body da requisição contendo as seguintes propriedades:

{
	"moeda1": "USD",
	"moeda2": "BRL"
}
```
![reqCotacao](https://user-images.githubusercontent.com/112025168/222937266-cc380184-e412-4c82-9513-b94295dbcd7a.png)

```
Recebe como resposta outro objeto json:

{
	"Cotação atual": "1 Dólar Americano (USD) = 5.2296 Real Brasileiro (BRL)",
	"Última atualização": "06-01-2023 17:45:29"
}
```
![resCotacao](https://user-images.githubusercontent.com/112025168/222937358-1aafb873-51ed-4150-bb55-697e035794fb.png)


#### Efetuar conversão de valores
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
```
![reqConverter](https://user-images.githubusercontent.com/112025168/222937413-d8b8a952-191a-4d73-b1c2-877e9c3310c8.png)


```
Recebe como resposta outro objeto json:

{
	"Cotação atual": "1 Dólar Americano (USD) = 5.2209 Real Brasileiro (BRL)",
	"Valor Original": "1500.00  Dólar Americano (USD)",
	"Valor Convertido": "7831.35  Real Brasileiro (BRL)",
	"Última atualização": "06-01-2023 18:16:30"
}
```
![resConverter](https://user-images.githubusercontent.com/112025168/222937453-9d01089b-f997-46d0-9537-2e93c9b09cf3.png)

## Contribuindo

Aceito contribuições para este projeto! Para contribuir, siga estas etapas:

1. Fork este repositório
2. Crie uma branch com a sua feature: `git checkout -b minha-feature`
3. Faça commit das suas alterações: `git commit -m 'Minha nova feature'`
4. Faça push para a branch: `git push origin minha-feature`
5. Abra um Pull Request

## Contato

Se você tiver alguma dúvida ou sugestão sobre este projeto, sinta-se à vontade para entrar em contato comigo através do meu perfil no GitHub: [@Thiagoolima](https://github.com/Thiagoolima) ou no linkedin [@thiagooliveiradelima](https://www.linkedin.com/in/thiagooliveiradelima/).
