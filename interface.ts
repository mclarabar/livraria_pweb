interface ILivro{
    titulo: string;
    ano: number;
    isbn: string;
    preco: number;
    autor: string;
    editora: string;
    estoque: number;

    exibirDados(): void;
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
}



class GerenciaLivro{
    private livro: ILivro[] = []

    //add livros, vender

}

