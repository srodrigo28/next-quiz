export default class UserModel {
    #id: number
    #nome: string
    #email: string
    #senha: string
    #posts: any[]

    constructor(id: number, nome: string, email: string, senha: string, posts:[] ){
        this.#id = id
        this.#nome = nome
        this.#email = email
        this.#senha = senha
        this.#posts = posts
    }

    // metodos acessores
    get id()    { return this.#id    }
    get nome()  { return this.#nome  }
    get email() { return this.#email }
    get senha() { return this.#senha }
    get posts() { return this.#posts }

}