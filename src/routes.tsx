import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { APP_ROUTES } from './appConfig';
import PHome from './pages/PHome/PHome';
import PLogin from './pages/PLogin/PLogin';
import PListaAlunos from './pages/PListagem/PListaAlunos/PListaAlunos';
import PListaEmprestimos from './pages/PListagem/PListaEmprestimos/PListaEmprestimos';
import PListagemLivros from './pages/PListagem/PListaLivros/PListaLivros';

/**
 * Componente que irá lidar com todas as rotas da aplicação
 * @returns Um componente web para lidar com as rotas
 */
function AppRoutes() {
    return (
        <BrowserRouter>
            <Routes>
                {/* Quando a rota representada pela variável ROUTE_HOME é acessada, renderiza a página PHome */}
                <Route path={APP_ROUTES.ROUTE_HOME} element={<PHome />} />
                {/* Quando a rota representada pela variável ROUTE_LOGIN é acessada, renderiza a página PLogin */}
                <Route path={APP_ROUTES.ROUTE_LOGIN} element={<PLogin />} />

                {/* Quando a rota representada pela variável ROUTE_LISTAGEM_ALUNOS é acessada, renderiza a página PListaAlunos */}
                <Route path={APP_ROUTES.ROUTE_LISTAGEM_ALUNOS} element={<PListaAlunos />} />
                {/* Quando a rota representada pela variável ROUTE_LISTAGEM_EMPRESTIMOS é acessada, renderiza a página PListaEmprestimos */}
                <Route path={APP_ROUTES.ROUTE_LISTAGEM_EMPRESTIMOS} element={<PListaEmprestimos />} />
                {/* Quando a rota representada pela variável ROUTE_LISTAGEM_LIVROS é acessada, renderiza a página PListagemLivros */}
                <Route path={APP_ROUTES.ROUTE_LISTAGEM_LIVROS} element={<PListagemLivros />} />
            </Routes>
        </BrowserRouter>
    );
}

export default AppRoutes;