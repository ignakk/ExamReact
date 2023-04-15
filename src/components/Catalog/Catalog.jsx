import style from "./catalog.module.css"
import search from "../../assets/img/search.png"
import { useEffect, useState } from "react"
import { Product } from "../product/product"
import { Loader } from "../Loader"
import { NotFound } from "../NotFound/NotFound"

const Catalog = () => {
    const [productData, setProductData] = useState({
        isLoading: false, 
        error: null,
        data: null
    });
    const [categoriesData, setCategoriesData] = useState({
        isLoading: false, 
        error: null,
        data: null
    });
    const [searchData, setSearchData] = useState(localStorage.getItem('searchData') || '');

    const tagId = localStorage.getItem('tagId');

    const fetchServices = async (tag = '') => {
        try {
            setProductData({
                ...productData,
                isLoading: true
            })
            const response = await fetch(`https://flowers.avavion.ru/api/products${tag ? '?tag=' + tag : ''}`);
            const data = await response.json();
            console.log({data});
            setProductData((prev) => ({
                ...prev,
                data: data.data
            }))
        } catch (error) {
            setProductData((prev) => ({
                isLoading: false,
                error: error.message,
                data: null,
            }))
        } finally {
            setProductData((prev) => ({
                ...prev,
                isLoading: false
            }))
        }
    }

    const fetchServicesCategories = async () => {
        try {
            setCategoriesData({
                ...productData,
                isLoading: true
            })
            const response = await fetch(`https://flowers.avavion.ru/api/tags`);
            const data = await response.json();
            console.log('fetchServicesCategories: ', {data});
            setCategoriesData((prev) => ({
                ...prev,
                data: [...data.data, {id: 0, name: 'Все'}]
            }))
        } catch (error) {
            setCategoriesData((prev) => ({
                isLoading: false,
                error: error.message,
                data: null,
            }))
        } finally {
            setCategoriesData((prev) => ({
                ...prev,
                isLoading: false
            }))
        }
    }

    useEffect(() => {
        fetchServices(Number(tagId));
        fetchServicesCategories();
    }, [])

    const bySearchData = (product) => product.name.toLowerCase().startsWith(searchData.toLowerCase());
    const products = productData.data?.filter(bySearchData);

    const handleChangeSearch = (e) => {
        setSearchData(e.target.value);
        localStorage.setItem('searchData', e.target.value);
        // save to localstorage
    }

    const searchByCategory = (tag) => {
        const id = categoriesData.data.find((item) => item.name === tag)?.id || 0;
        localStorage.setItem('tagId', JSON.stringify(id));
        fetchServices(id);
    }

    return (
        <div className={style.catalog} id={'#catalog'}>
            <div className="container">
                <div className={style.header_catalog}>
                    <h1 className={style.h1_catalog}>
                        Каталог
                    </h1>
                    <div className={style.tovars_filter}>
                    <div className={style.input}>
                        <input type="text" placeholder="Search..." onChange={(e) => handleChangeSearch(e)} value={searchData}/>
                        <div className={style.ikon_search}>
                            <img src={search} alt=""/>
                        </div>
                    </div>
                    {console.log('dataa: ', {categoriesData})}
                    {
                        categoriesData.data && !categoriesData.isLoading ?
                            <select name="" id="" value={categoriesData.data.find(item => item.id === Number(tagId)).name} onChange={(e) => searchByCategory(e.target.value)} className={style.cat_input}>
                            <option value={0}>Все</option>
                            {
                                categoriesData.data.map((category) => {
                                    return <option key={category.id} value={category.name}>{category.name}</option>
                                })
                            }
                            </select>
                            :
                            <div className={style.cat_input}>
                                <Loader className={style.selectLoader} />
                            </div>
                    }
                    
                    </div>
                    
                    
                </div>
            </div>
            
        
            
            <div className={style.catalog_wrapper}>
                {productData.isLoading ? <div className={style.loaderWrapper}><Loader /></div> :  products?.map((item) => 
                        <Product key={item.id} {...item} />)}
                {!productData.isLoading && !productData.error && productData.data?.length === 0 && <NotFound />}
            </div>
        </div>
    )
}

export default Catalog