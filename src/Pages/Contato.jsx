import Header from "../Components/Header"
import contato from '../assets/contato.svg'
import styles from '../styles/pages/contato.module.css'
import { useState } from "react"

const Contato = () => {
     const [nome, setNome] = useState('')
     const [email, setEmail] = useState('')
     const [mensagem, setMensagem] = useState('')

     function handleInputNome(e) {
       setNome(e.target.value) 
     }

     function handleInputEmail(e) {
        setEmail(e.target.value) 
      }
     
      function handleInputMensagem(e) {
        setMensagem(e.target.value) 
      }


    return (
     <>
     <Header title="Mande mensagem para Eli💕" 
             image={contato}/>

     <main>
        <form className={styles.form} onSubmit={() =>{}}>
            <input
             className={styles.formInput}            
            type="text" 
            placeholder="Digite seu nome"
            onChange={handleInputNome}
            value={nome}
            />
            <input 
            className={styles.formInput}
            type="email" 
            placeholder="Digite seu email"
            onChange={handleInputEmail}
            value={email}
            /> 
            <textarea 
            className={styles.formInput}
            placeholder="Deixe seu recado"
            onChange={handleInputMensagem}
            value={mensagem}
                        />  
            <button
            className={styles.formButton} 
            type="submit">Enviar Recadinho
            </button> 
        </form>
     </main>
   
     </>
  

       

    )
}

export default Contato