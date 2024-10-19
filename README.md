Propósito da API
A Task Manager API foi desenvolvida com o objetivo de fornecer uma maneira simples e eficiente de gerenciar tarefas. A API permite que os usuários realizem as operações básicas de CRUD (Criar, Ler, Atualizar e Deletar) em tarefas. Isso a torna útil para aplicações que necessitam de um sistema básico de gerenciamento de tarefas, podendo ser integrada em projetos maiores como gerenciadores de projetos, sistemas de produtividade ou plataformas de colaboração.

Funcionalidades principais:

Criar Tarefas: Permite adicionar novas tarefas ao sistema.
Visualizar Tarefas: Retorna uma lista com todas as tarefas cadastradas.
Atualizar Tarefas: Permite modificar os detalhes de uma tarefa específica.
Deletar Tarefas: Remove uma tarefa do sistema.
O foco principal desta API é oferecer uma interface clara e simples, respeitando os princípios de boas práticas em desenvolvimento de software e aplicando metodologias ágeis como Lean, com entregas iterativas e incrementais.

Instruções de Instalação e Uso
Pré-requisitos
Antes de começar, certifique-se de ter o seguinte instalado:

Node.js (versão 14 ou superior)
npm ou yarn (gerenciador de pacotes)
Passo a Passo de Instalação
Clone o repositório: Abra o terminal ou prompt de comando e execute o seguinte comando para clonar o repositório:

bash
Copiar código
git clone https://github.com/seu-usuario/task-manager-api.git
Navegue até o diretório do projeto:

bash
Copiar código
cd task-manager-api
Instale as dependências: Para instalar todas as dependências necessárias, execute o comando abaixo:

bash
Copiar código
npm install
ou, se estiver usando yarn:

bash
Copiar código
yarn install
Rodando o Servidor
Após instalar as dependências, você pode iniciar o servidor local com o comando:

bash
Copiar código
npm start
ou, se estiver usando yarn:

bash
Copiar código
yarn start
O servidor será iniciado em http://localhost:3000.

Testando a API
Para testar a API localmente, você pode usar ferramentas como Postman ou Insomnia. Você também pode utilizar curl no terminal para fazer chamadas HTTP.

Exemplos de Endpoints:

GET /tasks: Retorna todas as tarefas.
POST /tasks: Adiciona uma nova tarefa.
PUT /tasks/
: Atualiza uma tarefa existente.
DELETE /tasks/
: Remove uma tarefa específica.
Comandos para Rodar o Projeto e os Testes
Rodando o Projeto
Para rodar a API localmente:
bash
Copiar código
npm start
ou
bash
Copiar código
yarn start
Isso iniciará o servidor local na porta 3000.

Executando os Testes
A API foi configurada para ser testada com o Jest e o Supertest, garantindo que os endpoints estão funcionando corretamente.

Para rodar os testes automatizados:
bash
Copiar código
npm test
ou
bash
Copiar código
yarn test
Os testes cobrem todos os endpoints de CRUD (Criar, Ler, Atualizar e Deletar) para garantir que eles estão funcionando conforme o esperado.

Dicas para os Testes:

Antes de rodar os testes, certifique-se de que o servidor esteja parado para evitar conflitos.
Os testes garantem que as respostas dos endpoints estão corretas e validam possíveis erros de entrada e saída de dados.
Com essas explicações detalhadas, o README.md ficará claro e funcional, oferecendo todas as informações que um desenvolvedor precisa para entender, instalar e utilizar a API.






