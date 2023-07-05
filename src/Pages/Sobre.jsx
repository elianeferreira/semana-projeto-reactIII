import Header from "../Components/Header"

import sobre from '../assets/sobre.svg'
import styles from '../styles/pages/sobre.module.css'

const Sobre = () => {
    return (
        <>
        <Header 
        title='Venha conhecer a Eli💕!'
        image={sobre}/>

        <h1>Prazer, eu sou a Eliane</h1>

        <div className={styles.Introducao}>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut reprehenderit eligendi dolore iusto aperiam ipsam exercitationem, eum aliquam dolorum fugiat officia, facere quam molestiae nam deserunt quod, minima a sed?

            </p>
             <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti illum optio voluptate, minus quam nobis veritatis cumque repudiandae, unde enim ipsa, porro quod eos ratione id labore placeat ipsam voluptatum.  
             </p>
        </div>
               
        </>

      

    )
}

export default Sobre