import estilo from './Welcome.module.css';

function Welcome() {
    return( 
        <main className={estilo.principal}>
            <p>Seja Bem-vindo(a) á Biblioteca</p>
            <p>Para ter ums melhor experiência, faça login no site</p>
        </main>
    );
}

export default Welcome;