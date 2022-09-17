export const Header = ({busca, buscaODA}) => {
    var logo = require('./img/logo.png');
return(
    <html>
        <head>
        </head>
        <body>
            <div className='flex'>
                <div className='logo'>
                    <img src={logo} alt="Logo do BocaWeb"/>
                </div>
                
                <div className='titulo'>
                    <h1> BocaWeb</h1>
                </div>
                <div className='input'>
                    <input name="busca" type="text" class="search" value={busca} 
                    placeholder="O que deseja buscar?" onChange={buscaODA}></input>
                </div>
            </div>
            
            <div className='background'/>
        </body>
    </html>
)
}