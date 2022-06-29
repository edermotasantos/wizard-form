# Wizard Form

[![License: MIT](https://img.shields.io/badge/License-MIT-green.svg)](https://opensource.org/licenses/MIT)

<div> 
  <a href="https://www.linkedin.com/in/eder-santos-dev/" target="_blank"><img src="https://img.shields.io/badge/-LinkedIn-%230077B5?style=for-the-badge&logo=linkedin&logoColor=white" target="_blank"></a> 
  <a href = "mailto:eder.mota@outlook.com"><img src="https://img.shields.io/badge/Microsoft_Outlook-0078D4?style=for-the-badge&logo=microsoft-outlook&logoColor=white" target="_blank"></a> 
</div>

---
## Contexto

Esse projeto foi desenvolvido para uma vaga de Front End na empresa AVA.

A proposta era desenvolver uma aplicação Front End de cadastro no formato stepper (Wizard) utilizando React.js. Desse modo permitir cadastrar, listar os usuários por nome e exibir os dados de um determinado usuário quando solicitado.

## Renderização

Ela deve possuir um `menu` com as opções `Novo Cliente` e `Lista de Clientes`.

Na opção `Novo cliente` deve possuir um formulário divido em 3 renderizações condicionais e uma quarta renderização para mensagem de cadastro concluído com sucesso.

### Primeira Renderização

A primeira renderização possui o botão `Próximo` para ir para a próxima renderização e os seguintes campos:
 - `nome`
 - `sobrenome`
 -  `e-mail`
 - `telefone`
 
 ### Segunda Renderização
 
 A segunda renderização possui o botão `Próximo` para ir para a próxima renderização, um botão `Voltar` para voltar e os seguintes campos:
 - `endereço 1`
 - `CEP 1`
 - `endereço 2`
 - `CEP 2`

### Terceira Renderização
 
 A segunda renderização possui o botão `Enviar` para submeter os dados cadastrados, um botão `Voltar` para voltar e os seguintes campos:
 - `data de nascimento`
 - `CPF`
 - `renda mensal`
 
## Lista de Usuários

Após inclusão do usuário e ao clicar em `Lista de Clientes` é exibido o `nome completo` e o `id` do usuário. Caso não tenha sido cadastrado nenhum usuário, ao clicar em `Lista de Clientes` será exibido uma mensagem de que a lista está vazia.

## Dados do Usuário

Em `Lista de Clientes` ao clicar no `nome` ou `id` do usuário cadastrado, é renderizado os dados cadastrados desse cliente. Os dados exibidos são:
 - `sobrenome`
 -  `e-mail`
 - `telefone`
 - `endereço 1`
 - `CEP 1`
 - `endereço 2`
 - `CEP 2`
 - `data de nascimento`
 - `CPF`
 - `renda mensal`
 
 ## Geração de Id
 
 O `id` é gerado durante o cadastro do usuário, após um campo ser preenchido.
 
 ## Responsividade
 
Foi proposto que o desafio técnico fosse disponibilizado no Github e fosse observado a experiência do cliente, dando enfâse em uma aplicação responsiva que funcione bem em telas de diversos formatos.

## Armazenamento

Os Dados devem ser enviados em formato `JSON` da seguinte forma:

```json
[
  {
      "first_name": "nome",
      "last_name": "sobrenome",
      "full_name": "nome completo",
      "email": "email@email.com",
      "phone": "(12)3456-7891",
      "address_1": "rua XXXX",
      "cep_1": "01234567",
      "address_2": "rua YYYY",
      "cep_2": "01234567",
      "birth_day": "DD/MM/YYYY",
      "cpf": "123.456.789-10",
      "income": "XXXX,XX",
      "id": "M7R7wesNcr6KsCTStUWPTiZrTIRRyM",
  }
]
```
O armazenamento é feito no localStorage com uma lista de usuários.

### Tecnologias

* `React.js`
* `Context API e Hooks`
* `Material UI`

## Desenvolvimento

O desenvolvimento da aplicação foi feito no `VSCODE` utilizando `React.js` e `Material UI` não apresentando muitas dificuldades. Mas foi necessária um estudo mais detalhado na documentação do Material UI para o melhor uso. Foi entendido que a renderização condicional seria a mais adequada para ter como resultado um stepper wizard, descartando o uso da extensão `React Stepper Horizontal`.   

## Como instalar

Pre-requisitos para rodar o projeto: 
- `React.js`
- `Material UI`

Copie o ssh do projeto `git@github.com:edermotasantos/wizard-form.git`

* Abra um terminal no seu computador e utilize os comandos a baixo na ordem que são apresentados:

  * `git clone git@github.com:edermotasantos/wizard-form.git`
  * `cd wizard-form`
  * `npm install`
  * `npm start`

---

## Modo de utilização

A tela inicial é a de cadastro e basta digitar os dados solicitados clicando no botão `Próximo` e ao concluir clicar em `Enviar`. Caso necessário voltar em algum campo é só clicar em `Voltar`. Para ver a lista de usuários, clique em `menu` e clique em `Lista de Clientes` e caso deseje ver os dados detalhados, basta clicar no `nome` ou no `id`.

## Próximos passos

* Implementação de Testes
* Implementação de aplicação Back End

---


# Entre em contato:

<div> 
  <a href="https://www.linkedin.com/in/eder-santos-dev/" target="_blank"><img src="https://img.shields.io/badge/-LinkedIn-%230077B5?style=for-the-badge&logo=linkedin&logoColor=white" target="_blank"></a> 
  <a href = "mailto:eder.mota@outlook.com"><img src="https://img.shields.io/badge/Microsoft_Outlook-0078D4?style=for-the-badge&logo=microsoft-outlook&logoColor=white" target="_blank"></a> 
</div>
