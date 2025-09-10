interface ILivro{
    titulo: string;
    ano: number;
    isbn: string;
    preco: number;
    autor: string;
    editora: string;
    estoque: number;

    exibirDados(): void;
    atualizarEstoque(estoque: number): void;
    //colocar os métodos aqui
}

class LivroFisico implements ILivro{
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
        console.log(`Dados EBook: `);
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
        alert(`Ajustando o estoque, quantidade atual: ${this.estoque}.`);
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



class Ebook implements ILivro{
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
        console.log(`Dados EBook: `);
        console.log(`Título: ${this.titulo}`);
        console.log(`Ano: ${this.ano}`);
        console.log(`ISBN: ${this.isbn}`);
        console.log(`Preço: ${this.preco}`);
        console.log(`Autor: ${this.autor}`);
        console.log(`Editora: ${this.editora}`);
        console.log(`Estoque: ${this.estoque}`);
        console.log(`Tamanho: ${this.tamanho}`);
    }

    atualizarEstoque(estoque: number): void {
        this.estoque += estoque;
        alert(`Ajustando o estoque, quantidade atual: ${this.estoque}.`);
    }
}



class GerenciaLivro{
    private livro: ILivro[] = []

    adicionarLivro(livro: ILivro): void{
        
    }

    excluirLivro(titulo: string): void{
        
    }

    venderLivro(ltitulo: string): void{
        
    }

}

const gerenciadorLivro = new GerenciaLivro();

const livro1 = new LivroFisico('Jogos Vorazes', 2008, '123456789', 50.84, 'Suzanne Collins', 'Rocco Jovens Leitores', 5);
const livro2 = new LivroFisico('Jogos Vorazes: Em Chamas', 2009, '121212121', 51.94, 'Suzanne Collins', 'Rocco Jovens Leitores', 5);
const livro3 = new LivroFisico('Jogos Vorazes: A Esperança', 2010, '987654321', 50.03, 'Suzanne Collins', 'Rocco Jovens Leitores', 5);

const livro4 = new Ebook('Jogos Vorazes', 2008, '123456789', 31.26, 'Suzanne Collins', 'Rocco Jovens Leitores', 5, 2.8);
const livro5 = new Ebook('Jogos Vorazes: Em Chamas', 2009, '121212121', 31.26, 'Suzanne Collins', 'Rocco Jovens Leitores', 5, 2.9);
const livro6 = new Ebook('Jogos Vorazes: A Esperança', 2010, '987654321', 31.26, 'Suzanne Collins', 'Rocco Jovens Leitores', 6, 2.6);

