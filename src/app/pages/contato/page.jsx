import Header from "@/components/Header/Header"
import Link from "next/link"
import styles from "./contato.module.css"

export default function Cotato() {
    return (
        <>

            <Header />

            <h1 className={styles.h1}>Contato</h1>


            <header  className={styles.header}>
                <div className={styles.nome}>
                    <label className={styles.label}>Nome:</label>
                    <input className={styles.input} type="text" placeholder="Nome" />
                </div>

                <div className={styles.email}>
                    <label className={styles.label}>Email:</label>
                    <input className={styles.input} type="text" placeholder="" />
                </div>

                <div className={styles.telefone}>
                    <label className={styles.label}>Telefone:</label>
                    <input className={styles.input} type="string" placeholder="Telefone" />
                </div>

                <button className={styles.but}>Confirmar</button>

            </header>



        </>
    )
}