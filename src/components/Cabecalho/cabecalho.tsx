// Importa o tipo JSX do React para definir o tipo de retorno do componente
import { JSX } from 'react';

// Importa os estilos CSS específicos para o componente de cabeçalho
import estilo from './Cabecalho.module.css';

// Importa a imagem do logotipo da aplicação
import logotipo from '../../assets/logotipo.png';

// Importa as rotas da aplicação definidas no arquivo de configuração
import { APP_ROUTES } from '../../appConfig';

// Declara o componente funcional Cabecalho que retorna um elemento JSX
function Cabecalho(): JSX.Element {
    return (
        // Define o cabeçalho da aplicação com uma classe CSS personalizada
        <header className={estilo.cabecalho}>
            
            {/* Link para navegar até a ROUTE_HOME quando clicar na imagem */}
            <a href={APP_ROUTES.ROUTE_HOME} className={estilo.imgLogo}>
                {/* Logotipo da aplicação */}
                <img src={logotipo} alt="logotipo" />
            </a>

            {/* Link para navegar até a listagem de alunos */}
            <a href={APP_ROUTES.ROUTE_LISTAGEM_ALUNOS}>Alunos</a>

            {/* Link para navegar até a listagem de livros */}
            <a href={APP_ROUTES.ROUTE_LISTAGEM_LIVROS}>Livros</a>

            {/* Link para navegar até a listagem de empréstimos */}
            <a href={APP_ROUTES.ROUTE_LISTAGEM_EMPRESTIMOS}>Empréstimos</a>

            {/* Link para navegar até a página de login */}
            <a href={APP_ROUTES.ROUTE_LOGIN}>Login</a>
        </header>
    );
}

// Exporta o componente para ser utilizado em outros arquivos
export default Cabecalho;
