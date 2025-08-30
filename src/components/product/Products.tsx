import Image from 'next/image';
import { memo } from 'react';

interface IData {
    id: string
    title: string
    category: string
    price: number
    thumbnail: string
}

const Products = async () => {
    const response = await fetch("https://dummyjson.com/products")
    const data = await response.json()
  return (
    <div className="grid grid-cols-4 gap-[1rem] max-[900px]:grid-cols-3 max-[500px]:grid-cols-2 my-[30px]">
      {
        data?.products?.slice(0, 12).map((item: IData) => (
            <div className='shadow-lg' key={item.id}>
                <div className='flex items-center justify-center'>
                    <Image src={item.thumbnail} alt={item.title} width={300} height={300}/>
                </div>
                <div className='p-[1rem] max-[555px]:p-[10px]'>
                    <p className='line-clamp-1 font-medium'>{item.title}</p>
                    <p>{item.category}</p>
                    <p>{item.price.toFixed(1)} USD</p>
                </div>
            </div>
        ))
      }
    </div>
  );
};

export default memo(Products);