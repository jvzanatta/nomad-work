
# Tem Wi-Fi?

Esse projeto tem como objetivo o desenvolvimento de uma plataforma onde pessoas poderiam encontrar facilmente bons locais abertos para trabalhar. 

O front-end do projeto é feito em Angular 6 e o back-end com Laravel 5.6 e MySQL.

## Primeiros passos

O primeiro passo para iniciar nesse projeto é clonar o repositório. Para isso execute no terminal o seguinte comando:
```
git clone git@github.com:jvzanatta/nomad-work.git
```

### Pré-requisitos

Para executar este projeot você precisa ter instalado: 

```
PHP >= 7
Composer
Laravel
Node / Npm
MySQL
```

### Instalação

Depois de clonar o projeto você precisa executar os seguintes comandos (após acessar a pasta do projeto):

Instalar as dependências do Laravel
```
cd backend
composer install
```

Executar as migrations e seeds para popular o banco com dados para testes
```
php artisan migrate? --seed
```

Mudar para a pasta referente ao front-end
```
cd ../frontend
npm install
```

## Desenvolvimento

Para executar as aplicações em desenvolvimento, utilize os seguintes comandos:

###Front-end:
O comando abaixo irá disponibilizar a aplicação em http://localhost:4200

```
cd <pasta-do-projeto>/frontend
ng serve -o
```

###Back-end:
O comando abaixo irá disponibilizar a API em http://localhost:8000

```
cd <pasta-do-projeto>/backend
php artisan serve
```

### Documentação WEB APP

O comando abaixo irá disponibilizar a aplicação em http://localhost:8080
```
cd <pasta-do-projeto>/frontend
npm run compodoc
```


## Stack envolvida

* [Laravel 5.6](https://laravel.com) - Framework da API
* [Angular 6](https://angular.io) - Framework do front-end
* [Angular Material](https://material.angular.io) - Componentes Material para Angular
* [MySQL](https://www.mysql.com) - Banco de dados relacional


## Authors

* **João Victor Zanatta** - *Trabalho inicial* - [jvzanatta](https://github.com/jvzanatta)
