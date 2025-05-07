import { useState } from 'react';
import estilo from './FormLivro.module.css';
import LivroRequests from '../../../../fetch/LivroRequests';

function FormLivro() {
    const [formData, setFormData] = useState({
        titulo: '',
        autor: '',
        editora: '',
        anoPublicacao: '',
        isbn: '',
        quantTotal: '0',
        quantDisponivel: '0',
        valorAquisicao: '0',
        statusLivroEmprestado: ''
    });

    // Função para atualizar o state
    const handleChange = (titulo: string, valor: string) => {
        setFormData({ ...formData, [titulo]: valor });
    };

    const handleSubmit = async (formData: { titulo: string; autor: string; editora: string; anoPublicao: string; isbn: number; 
        quantTotal: number; quantDisponivel: number; valorAquicao: number; statusLivroEmprestado: string  }) => {
        const resposta = await LivroRequests.enviaFormularioLivro(JSON.stringify(formData));
        if(resposta) {
            alert('Livro cadastrado com sucesso.');
        } else {
            alert('Erro ao cadastrar Livro.');
        }
    }

    return (
        <section className={estilo['sec-form-Livro']}>
            <h1>Cadastro Livro</h1>
            <form action="post" onSubmit={(e) => { e.preventDefault(); handleSubmit(formData); }}
                    className={estilo['form-Livro']}
                >
                    <label htmlFor="">
                        Titulo
                        <input
                            type="text"
                            name="titulo"
                            id="titulo"
                            required
                            maxLength={3}
                            onChange={(e) => handleChange("titulo", e.target.value)}
                        />
                    </label>

                    <label htmlFor="">
                        Autor
                        <input
                            type="text"
                            name="autor"
                            id="autor"
                            required
                            maxLength={3}
                            onChange={(e) => handleChange("autor", e.target.value)}
                        />
                    </label>

                    <label htmlFor="">
                        Editora
                        <input
                            type="text"
                            name="editora"
                            id="editora"
                            onChange={(e) => handleChange("editora", e.target.value)}
                        />
                    </label>

                    <label htmlFor="">
                        Ano de publicação
                        <input
                            type="text"
                            name="anoPublicacao"
                            id="anoPublicacao"
                            maxLength={4}
                            onChange={(e) => handleChange("anoPublicacao", e.target.value)}
                        />
                    </label>

                    <label htmlFor="">
                        ISBN
                        <input
                            type="number"
                            name="isbn"
                            id="isbn"
                            maxLength={13}
                            onChange={(e) => handleChange("isbn", e.target.value)}
                        />
                    </label>

                    <label htmlFor="">
                        Quantidade total
                        <input
                            type="number"
                            name="quantTotal"
                            id="quantTotal"
                            minLength={1}
                            onChange={(e) => handleChange("quantTotal", e.target.value)}
                        />
                    </label>

                    <label htmlFor="">
                        Quantidade disponível
                        <input
                            type="number"
                            name="quantDisponivel"
                            id="quantDisponivel"
                            minLength={1}
                            onChange={(e) => handleChange("quantDisponivel", e.target.value)}
                        />
                    </label>

                    <label htmlFor="">
                        Valor de aquisição
                        <input
                            type="number"
                            name="valorAquisicao"
                            id="valorAquisicao"
                            minLength={1}
                            onChange={(e) => handleChange("valorAquisicao", e.target.value)}
                        />
                    </label>

                    <label htmlFor="">
                        Status  do livro emprestado
                        <input
                            type="number"
                            name="statusLivroEmprestado"
                            id="statusLivroEmprestado"
                            minLength={1}
                            onChange={(e) => handleChange("statusLivroEmprestado", e.target.value)}
                        />
                    </label>

                <input type="submit" value="ENVIAR" />
            </form>
        </section>
    );
}

export default FormLivro;