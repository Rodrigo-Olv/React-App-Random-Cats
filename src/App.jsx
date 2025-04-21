import { useEffect, useState } from "react";
import "./style.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Header } from "./components/Header";
import { RandomCat} from "./components/RandomCat";
import { CustomCat } from "./components/CustomCat";
import { Footer } from "./components/Footer";

const URL_FACTS_CATS = 'https://catfact.ninja/fact'
const URL_IMG_INIT = 'https://cataas.com/cat/says/'

export function App () {
    const [fact, setFact] = useState()
    const [imgUrl, setImgUrl] = useState()
    const [customText, setCustomText] = useState('')
    const [saveText, setSaveText] = useState('')
    const [refreshImage, setRefreshImage] = useState(false);
    const [fontSize, setFontSize] = useState(50)

    const [color, setColor] = useState('#ff6900')
    const [showPicker, setShowPicker] = useState(true)

    //Colores personalizados
    const customColors = [
      '#FF6900',
      '#FCB900',
      '#7BDCB5',
      '#00D084',
      '#8ED1FC',
      '#0693E3',
      '#ABB8C3',
      '#EB144C',
      '#F78DA7',
      '#9900EF',
      '#FFFFFF',
      '#000000',
    ]
    //Ontener random fact
    const getFact = async () => {
        try {
            const res = await fetch(URL_FACTS_CATS)
            if (!res.ok) throw new Error('Error al obtener el dato')
            
            const data = await res.json()
            setFact(data.fact)
        } catch (error) {
            console.error('Error al obtener la frase',error)
            setFact(null)
        }  
    }
    
    useEffect(() => {
        getFact()
    }, [])

    //Obtener random img
    useEffect(() => {
        if (!fact) return
        const fetchImg = async () => {
            try {
                const firstWord = fact.split(" " ,3).join(" ")
                const res = await fetch(`${URL_IMG_INIT}${firstWord}?json=true&fontSize=50`)
                if (!res.ok) throw new Error('Error al obtener la imagen')
                const data = await res.json()
                const { url } = data
                setImgUrl(url)
            } catch (error) {
                console.error('Error al obtener la imagen', error)
                setImgUrl(null)
            }
        }
        fetchImg()
    }, [fact])

    //obtener img personalizada
    useEffect(() => {
        if (!fact) return
        const fetchCustomImg = async () => {
            try {
                if (!customText) return
                const res = await fetch(`${URL_IMG_INIT}${customText}?json=true&fontSize=${fontSize}&fontColor=%23${color.slice(1)}`)
                if (!res.ok) throw new Error('Error al obtener la imagen')
                const data = await res.json()
                const { url } = data
                setImgUrl(url)
            } catch (error) {
                console.error('Error al obtener la imagen', error)
                setImgUrl(null)
            }
        }
        fetchCustomImg()
    }, [customText, refreshImage])

    return (
      <>
      <Header/>
      <main className="container d-flex flex-column align-items-center justify-content-center">
        <div className="d-lg-flex flex-row container-fluid">
          <RandomCat imgUrl={imgUrl} fact={fact} getFact={getFact}/>
          <CustomCat             
            saveText={saveText}
            setSaveText={setSaveText}
            setCustomText={setCustomText}
            setRefreshImage={setRefreshImage}
            fontSize={fontSize}
            setFontSize={setFontSize}
            color={color}
            setColor={setColor}
            customColors={customColors}
            showPicker={showPicker}
          />
        </div>
      </main>
      <Footer/>
      </>
    );
}