interface ILivro {
    titulo: string;
    ano: number;
    isbn: string;
    preco: number;
    autor: string;
    editora: string;
    estoque: number;

    exibirDados(): void;
    atualizarEstoque(estoque: number): void;
    vender(quant: number): void;
}

class LivroFisico implements ILivro {
    titulo: string;
    ano: number;
    isbn: string;
    preco: number;
    autor: string;
    editora: string;
    estoque: number;
        
    constructor(titulo: string, ano: number, isbn: string, preco: number,
        autor: string, editora: string, estoque: number){
        this.titulo = titulo;
        this.ano = ano;
        this.isbn = isbn;
        this.preco = preco;
        this.autor = autor;
        this.editora = editora;
        this.estoque = estoque;
    }

    exibirDados(): void {
        console.log(`Dados Livro Físico:`);
        console.log(`Título: ${this.titulo}`);
        console.log(`Ano: ${this.ano}`);
        console.log(`ISBN: ${this.isbn}`);
        console.log(`Preço: ${this.preco}`);
        console.log(`Autor: ${this.autor}`);
        console.log(`Editora: ${this.editora}`);
        console.log(`Estoque: ${this.estoque}`);
    }

    atualizarEstoque(estoque: number): void {
        this.estoque += estoque;
        console.log(`Ajustando o estoque, quantidade atual: ${this.estoque}.`);
    }

    vender(quant: number): void {
        if (this.estoque >= quant) {
            this.estoque -= quant;
            console.log(`Venda realizada com sucesso! Estoque atualizado, quantidade atual: ${this.estoque}.`);
        } else {
            console.log('Estoque insuficiente para a venda, tente outro livro!');
        }
    }
}

class Ebook implements ILivro {
    titulo: string;
    ano: number;
    isbn: string;
    preco: number;
    autor: string;
    editora: string;
    estoque: number;
    tamanho: number; 
        
    constructor(titulo: string, ano: number, isbn: string, preco: number,
        autor: string, editora: string, estoque: number, tamanho: number){
        this.titulo = titulo;
        this.ano = ano;
        this.isbn = isbn;
        this.preco = preco;
        this.autor = autor;
        this.editora = editora;
        this.estoque = estoque;
        this.tamanho = tamanho;
    }

    exibirDados(): void {
        console.log(`Dados EBook:`);
        console.log(`Título: ${this.titulo}`);
        console.log(`Ano: ${this.ano}`);
        console.log(`ISBN: ${this.isbn}`);
        console.log(`Preço: ${this.preco}`);
        console.log(`Autor: ${this.autor}`);
        console.log(`Editora: ${this.editora}`);
        console.log(`Estoque: ${this.estoque}`);
        console.log(`Tamanho: ${this.tamanho}MB`);
    }

    atualizarEstoque(estoque: number): void {
        this.estoque += estoque;
        console.log(`Ajustando o estoque, quantidade atual: ${this.estoque}.`);
    }

    vender(quant: number): void {
        if (this.estoque >= quant) {
            this.estoque -= quant;
            console.log(`Venda realizada com sucesso! Estoque atualizado, quantidade atual: ${this.estoque}.`);
        } else {
            console.log('Estoque insuficiente para a venda, tente outro livro!');
        }
    }
}

class GerenciaLivro {
    private livros: ILivro[] = []

    adicionarLivro(livro: ILivro): void {
        this.livros.push(livro);
        console.log(`Livro '${livro.titulo}' adicionado ao estoque.`);
    }

    excluirLivro(isbn: string): void {
        const indice = this.livros.findIndex(livro => livro.isbn === isbn);
        if (indice !== -1) {
            this.livros.splice(indice, 1);
            console.log(`Livro com ISBN ${isbn} excluído do estoque.`);
        } else {
            console.log(`Livro com ISBN ${isbn} não encontrado.`);
        }
    }

    venderLivro(isbn: string, quant: number): void {
        const livro = this.livros.find(l => l.isbn === isbn);
        if (livro) {
            livro.vender(quant);
        } else {
            console.log(`Livro com ISBN ${isbn} não encontrado.`);
        }
    }
}

const gerenciadorDosLivros = new GerenciaLivro();

const livro1 = new LivroFisico('Jogos Vorazes', 2008, '123456789', 50.84, 'Suzanne Collins', 'Rocco Jovens Leitores', 5);
const livro2 = new LivroFisico('Jogos Vorazes: Em Chamas', 2009, '121212121', 51.94, 'Suzanne Collins', 'Rocco Jovens Leitores', 5);
const livro3 = new LivroFisico('Jogos Vorazes: A Esperança', 2010, '343434343', 50.03, 'Suzanne Collins', 'Rocco Jovens Leitores', 5);

const livro4 = new Ebook('Jogos Vorazes', 2008, '565656565', 31.26, 'Suzanne Collins', 'Rocco Jovens Leitores', 5, 2.8);
const livro5 = new Ebook('Jogos Vorazes: Em Chamas', 2009, '787878787', 31.26, 'Suzanne Collins', 'Rocco Jovens Leitores', 5, 2.9);
const livro6 = new Ebook('Jogos Vorazes: A Esperança', 2010, '909090909', 31.26, 'Suzanne Collins', 'Rocco Jovens Leitores', 6, 2.6);

gerenciadorDosLivros.adicionarLivro(livro1);
gerenciadorDosLivros.adicionarLivro(livro2);
gerenciadorDosLivros.adicionarLivro(livro3);
gerenciadorDosLivros.adicionarLivro(livro4);
gerenciadorDosLivros.adicionarLivro(livro5);
gerenciadorDosLivros.adicionarLivro(livro6);

gerenciadorDosLivros.venderLivro('121212121', 2);
gerenciadorDosLivros.excluirLivro('123456789');
