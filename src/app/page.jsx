import Header from '@/components/Header/Header';
import styles from "./page.module.css"

export default function Home() {
  return (
    <>

      <Header />

      <div>
        <h1>Beleza no Budget</h1>
        <h3>AMIGAS QUE NÃO PAGAM CARO Á TOA ESTÃO AQUI! VEM FAZER PARTE DA NOSSA COMUNIDADE</h3>
      </div>

      <div className={styles.corpo}>

        <div>
          <img src="/corpo.png" alt="Imagm" className={styles.imagem}></img>
        </div>

        <div>
          <img src="/clean.jpg" alt="clean" className={styles.clean}></img>
        </div>

      </div>





    </>
  )
}