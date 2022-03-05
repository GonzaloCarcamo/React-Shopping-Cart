import { Component } from "react";

const styles = {
    detalles: {
        backgroundColor: '#fff',
        color: '#000',
        position: 'absolute',
        marginTop: '30px',
        boxShadow: '1px 5px 5px rgb(0,0,0,0.3)',
        borderRadius: '5px',
        width: '200px',
        right: 50
    },
    ul: {
        margin: 0,
        padding: 0
    },
    producto: {
        listStyle: 'none',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '20px 25px',
        borderBottom: '0.5px dashed #ccc'
    },
    total: {
        display: 'flex',
        justifyContent: 'center',
        margin: '10px 0 10px 0',
        fontWeight: '600'
    }
}

class Detalles extends Component {
    render(){
        const { carro } = this.props

        return(
            <div style={styles.detalles}>
                <ul style={styles.ul}>
                    {carro.map(x => <li style={styles.producto}key={x.name}>
                        <img src={x.img} alt={x.name} width='50' height='32'/>
                        {x.name} <span>{ x.cantidad}</span>
                    </li>)
                    }
                    <span style={styles.total}>$ 
                        {
                            carro.reduce((acc, el) => acc + (el.cantidad * el.price), 0)
                        }
                    </span>
                </ul>
            </div>
        )
    }
}

export default Detalles