import style from './cart.module.css';

export default function Cart() {
  return (
    <>
      <div className={style.titleD}>

        <h1 className={style.clr} >Meu Carrinho</h1>

      </div>
      <div className={style.f}>
        <div className={style.container}>



          <div className={style.produtos1}>
            <img className={style.imgC} src="https://acdn.mitiendanube.com/stores/001/112/372/products/mockup-of-a-man-wearing-a-customizable-t-shirt-against-a-plain-color-backdrop-1422-el-371-b7520e91e0f6e9b13416954035045357-480-0.png" alt="" />
            <button className={style.bt}>Tamanho</button>
            <button className={style.bt}>Cor</button>
            <button className={style.bt}>COMPRAR</button>
          </div>
          <div className={style.produtos2}>
            <img className={style.imgC} src="https://acdn.mitiendanube.com/stores/001/112/372/products/mockup-of-a-man-wearing-a-customizable-t-shirt-against-a-plain-color-backdrop-1422-el-371-b7520e91e0f6e9b13416954035045357-480-0.png" alt="" />
            <button className={style.bt}>Tamanho</button>
            <button className={style.bt}>Cor</button>
            <button className={style.bt}>COMPRAR</button>
          </div>
          <div className={style.produtos3}>
            <img className={style.imgC} src="https://acdn.mitiendanube.com/stores/001/112/372/products/mockup-of-a-man-wearing-a-customizable-t-shirt-against-a-plain-color-backdrop-1422-el-371-b7520e91e0f6e9b13416954035045357-480-0.png" alt="" />
            <button className={style.bt}>Tamanho</button>
            <button className={style.bt}>Cor</button>
            <button className={style.bt}>COMPRAR</button>
          </div>

        </div>
        <div className={style.container}>

            <button className={style.button}>Finalizar compra</button>
            
        </div>
      </div>
    </>
  )
}
