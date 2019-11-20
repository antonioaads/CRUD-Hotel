# CRUD Hotel

## Grupo 6 - Tela CRUD do hotel
A partir de um hotel criado, o CRUD do quarto e, logo após será feita a tela de reserva de quartos (para criar elementos ReservaQuarto). Na tela de reserva de quartos, o usuário deverá selecionar o período inicial e final da viagem e a cidade que deseja efetuar a reserva e assim, será listado os tipos de quartos disponíveis neste período para a cidade em questão e o preço total (calculado a partir do preço da diária que por temporada). O usuário selecionará um desses tipos de quarto de um determinado hotel e, assim reservará um quarto desse determinado tipo do hotel correspondente. O TipoQuarto e PrecoPorTemporada deve ser cadastrado anualmente.

---

## Preparando e executando o backend
1. Certifique-se de que possui o PostgreSQL instalado/executando e tenha as credenciais em mão.
2. Crie o arquivo `.env` na pasta raíz do back, seguindo o formato registrado em `.env.example` e preencha com as credenciais corretas
3. Instale as dependências por meio de `npm i`
4. Execute no terminal o projeto por meio de um dos scripts no `package.json` (*e.g. npm start OU npm run start-windows*)
    - ou utilize a *recipe* do `launch.json` abaixo 

---

## .vscode
Recipe para facilitar a execução do back utilizando o debugging do Vscode + Node.

Utilizando a pasta *backend* como workspace do Vscode, criar `backend/.vscode/launch.json` e copiar o conteúdo.
``` json
{
  "version": "0.2.0",
  "configurations": [{
    "type": "node",
    "request": "launch",
    "name": "Launch",
    "runtimeExecutable": "node",
    "runtimeArgs": [
      "--nolazy",
      "--inspect-brk=3676",
      "index"
    ],
    "port": 3676,
    "env":{
        "NODE_PATH": "."
    },
    "skipFiles": [
      "<node_internals>/**"
    ]
  }],
  "compounds": []
}
```

---

## PostgreSQL Cheatsheet
``` shell
# Inicialização
sudo service postgresql start

# Login como postgres
sudo -u postgres psql

# Criar/dropar banco do terminal
createdb "db_name"
dropdb "db_name"

# Rodar script sob banco
psql "db_name" < "script_path"

# Terminal PSQL
\l                    # listar bancos
\c "db_name"          # conectar em banco
\dt                   # listar tabelas
\password "username"  # mudar senha
\q                    # quit
```
