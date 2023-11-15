import { CardProduct } from "../components/CardProduct";
import { HeaderNav } from "../components/HeaderNav";
import { SectionProduct } from "../components/SectionProduct";

export default function Home() {
  const products = [
    {  
      id : "1",
      imgUrl : "https://shop.hak5.org/cdn/shop/products/usb-rubber-ducky_mk2_800x.jpg?v=1659974440",
      name : "USB rubberducky",
      tags: ["tech", "hacking", "popular"],
      price : 1900,
      shortDescription : "Una herramienta indespensable para el hacking"
    },
    {  
      id : "2",
      imgUrl : "https://shop.hak5.org/cdn/shop/products/usb-rubber-ducky_mk2_800x.jpg?v=1659974440",
      name : "USB rubberducky",
      tags: ["tech", "hacking", "popular"],
      price : 1900,
      shortDescription : "Una herramienta indespensable para el hacking"
    },
    {  
      id : "3",
      imgUrl : "https://shop.hak5.org/cdn/shop/products/usb-rubber-ducky_mk2_800x.jpg?v=1659974440",
      name : "USB rubberducky",
      tags: ["tech", "hacking", "popular"],
      price : 1900,
      shortDescription : "Una herramienta indespensable para el hacking"
    },
  ]
  return (
    <>
      <HeaderNav/>

      <main className="global-container">
        
        <div className="mt-[100px]">
          <h1 className="text-3xl font-bold">
            Compra los mejores articulos de tecnlogia aquí mismo 🧑‍💻
          </h1>

          <SectionProduct titleSection="Algunos productos destacados">
            <div className="gridCardProduct">
              {products.map((pr) =>(
                <CardProduct
                  key={pr.id}
                  {...pr}
                />
              ))}
            </div>
          </SectionProduct>
  
          <SectionProduct titleSection="Recientes">
            <div className="gridCardProduct">
              {products.map((pr) =>(
                <CardProduct
                  key={pr.id}
                  {...pr}
                />
              ))}
            </div>
          </SectionProduct>
        </div>
      </main>
    </>
  )
}
