// Importa o tipo JSX do React para tipar corretamente o retorno do componente
import { JSX } from 'react';

// Importa o componente de cabeçalho da aplicação
import Cabecalho from "../../components/Cabecalho/Cabecalho";

// Importa o componente de boas-vindas
import Welcome from "../../components/Welcome/Welcome";

// Importa o componente de rodapé da aplicação
import Rodape from "../../components/Rodape/Rodape";

// Declara o componente funcional PHome, que representa a página inicial
function PHome(): JSX.Element {
    return (
        <div className="pagina-grid">
            {/* Renderiza o cabeçalho da página */}
            <Cabecalho />

            {/* Renderiza a mensagem de boas-vindas */}
            <Welcome />

            {/* Renderiza o rodapé da página */}
            <Rodape />
        </div>
    );
}

// Exporta o componente para ser usado em outras partes do projeto
export default PHome;
