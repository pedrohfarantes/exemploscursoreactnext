import Navegador from '../components/Navegador'

export default function Inicio() {
    return (
        <div style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            flexWrap: 'wrap',
            height: '100vh'
        }}>
            <Navegador destino="/estiloso" texto="Estiloso" />
            <Navegador destino="/exemplo" texto="Exemplo" cor="darkviolet" />
            <Navegador destino="/jsx" texto="JSX" cor="crimson" />
            <Navegador destino="/navegacao/" texto="Navegação #01" cor="green" />
            <Navegador destino="/cliente/sp-2/123/" texto="Navegação #02" cor="blue" />
            <Navegador destino="/estado" texto="Componente com Estado" cor="pink" />
            <Navegador destino="/integracao_1" texto="Integração com API" cor="yellow" />
            <Navegador destino="/estatico" texto="Conteúdo Estático" cor="brown" />
            <Navegador destino="/dinamico" texto="Conteúdo Dinâmico" cor="grey" />
        </div>
    )
}