import style from "./marketplace.module.css"


export default function Marketplace() {
    return (
        <>
            <div className={style.container}>
                <div className={style.card} >
                    <img src="..." className={style.cardimgtop} alt="..." />
                    <div className={style.cardbody}>
                        <h5 className={style.cardtitle}>Card title</h5>
                        <p className={style.cardtext}>Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <a href="#" className={style.button}>Go somewhere</a>
                    </div>
                </div>
                <h1>Teste</h1>
                <h1>Teste</h1>
            </div>

            

        </>
    )
}