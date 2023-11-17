import { HeaderNav } from "@/components/HeaderNav"
import { userDataCookie } from "@/models/User";
import { getServerSession } from "next-auth/next";
import { redirect } from "next/navigation";
import { useEffect } from "react";
import { authOptions } from "../api/auth/[...nextauth]/route";
import { FormProduct } from "@/components/FormProduct";
import { CardBasicProdcut } from "@/components/CardBasicProdcut";

export default async function Dashboard() {

  const session = await getServerSession(authOptions);

  const userData = session?.user 

  if( userData?.role !== "ADMIN"){
    redirect('/')
  }

  return(
    <>
      <HeaderNav/>
         <main className="global-container">
            <div className="mt-[100px]">
              <h1 className="text-3xl">
                Bienevnido {userData?.name}
              </h1>
            
              <div className=" flex flex-col justify-center items-center">
                <FormProduct/>
  
                <section className="mt-10">
                  <h2 className=" text-2xl font-semibold">
                    Prodctos creados
                  </h2>
  
                  <div className=" h-[400px] overflow-y-auto mt-10 px-4">
                    <CardBasicProdcut
                      id="1"
                      imgUrl="https://m.media-amazon.com/images/I/71UcVYxIL9L._AC_SL1500_.jpg"
                      name="Producto 1"
                      price={100}
                      shortDescription="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam, voluptates."
                    />
                    <CardBasicProdcut
                      id="2"
                      imgUrl="https://m.media-amazon.com/images/I/71UcVYxIL9L._AC_SL1500_.jpg"
                      name="Producto 1"
                      price={100}
                      shortDescription="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam, voluptates."
                    />
                    <CardBasicProdcut
                      id="3"
                      imgUrl="https://m.media-amazon.com/images/I/71UcVYxIL9L._AC_SL1500_.jpg"
                      name="Producto 1"
                      price={100}
                      shortDescription="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam, voluptates."
                    />
                    <CardBasicProdcut
                      id="3"
                      imgUrl="https://m.media-amazon.com/images/I/71UcVYxIL9L._AC_SL1500_.jpg"
                      name="Producto 1"
                      price={100}
                      shortDescription="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam, voluptates."
                    />
                    <CardBasicProdcut
                      id="3"
                      imgUrl="https://m.media-amazon.com/images/I/71UcVYxIL9L._AC_SL1500_.jpg"
                      name="Producto 1"
                      price={100}
                      shortDescription="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam, voluptates."
                    />
                    <CardBasicProdcut
                      id="3"
                      imgUrl="https://m.media-amazon.com/images/I/71UcVYxIL9L._AC_SL1500_.jpg"
                      name="Producto 1"
                      price={100}
                      shortDescription="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam, voluptates."
                    />
                    <CardBasicProdcut
                      id="3"
                      imgUrl="https://m.media-amazon.com/images/I/71UcVYxIL9L._AC_SL1500_.jpg"
                      name="Producto 1"
                      price={100}
                      shortDescription="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam, voluptates."
                    />
                    <CardBasicProdcut
                      id="3"
                      imgUrl="https://m.media-amazon.com/images/I/71UcVYxIL9L._AC_SL1500_.jpg"
                      name="Producto 1"
                      price={100}
                      shortDescription="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam, voluptates."
                    />
                  </div>
                </section>
              </div>
            </div>
         </main>
        
    </>
  )
}