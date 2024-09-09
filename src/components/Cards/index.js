import styles from "./Cards.module.css";

function Cards( {id} ){
    return(
        <section className={styles.card}>
            <a href={`https://youtube.com.br/watch?v=${id}`}
               rel="nor?ferrer noopener" 
               target="_blank">
                <img src={`https://img.youtube.com/vi/${id}/mqdefault.jpg`}
                     alt="Capa" />
            </a>
        </section>
    )
}

export default Cards;