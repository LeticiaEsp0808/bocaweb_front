export const Lista = ({odas}) =>{
    return (
        <div className='lista'>
        <p className="numoda">{odas.length} odas</p>
        {odas.map(oda => (
          <div key={oda.id}>
            <h1 className="nome">Nome: {oda.nome}</h1>
            <p className="user">Usuario: {oda.usuario}</p>
            <p >Descrição: {oda.descricao}</p>
            <p className="bold">Data de Inclusão: {oda.data_inclusao}</p>
            <p className="bold">Palavras-Chave: {oda.palavras_chave}</p>
            </div>
        ))}
      </div>
    )
}