import style from "./Products.module.css"
import { useParams } from "react-router"
import { format } from "../Basket/Basket"
import { useEffect, useState } from "react"
import { Loader } from "../Loader"

const Tovar = ({setBasket, basket}) => {
    const [tovar, setServicesTovar] = useState(null)

    const params = useParams()
    const id = params.id

    const fetchServices = async () => {
        const response = await fetch(`https://flowers.avavion.ru/api/products/${id}`)
        const data = await response.json()

        setServicesTovar(data.data)
    }

    useEffect(() => {
        fetchServices()
    }, [])

    const handleSetBasket = ({id, name, preview_image, text, price}) => {
        setBasket(prev => [...prev, {id: id, name:name, image_url:preview_image, text:text, price: tovar.discount === 0 ? price : price * (tovar.discount/100)}])
    }

    const idBasket = basket.find(item => item.id == id)


    if(!tovar) {
        return <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center', minHeight: '600px'}}><Loader /></div>
    }

    return (
        <div className={style.tovar}>
            <div className={style.img_tovar_one}>
                <img src={tovar.preview_image} alt="" />
            </div>
            <div className={style.content_tovar}>
                <h1>{tovar.name}</h1>
                <p>{tovar.text}</p>
                <h2>
                     {
                        tovar.discount === 0 ?  format(tovar.price) :
                        format(tovar.price * (tovar.discount/100))
                     } 
                     ₽
                </h2>
                {
                     idBasket ? <p>Товар в корзине</p> : (
                        <button onClick={() => handleSetBasket({...tovar})}>Добавить в корзину</button>
                     )
                }
            </div>
        </div>
    )
}

export default Tovar