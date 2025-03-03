import React from 'react'

function Service(params) {
  let {name,img,desc} = params;
  console.log(img)
  return (
    <div className='w-[25%]  border border-white m-6 min-h-[200px] max-h-[400px] flex flex-col p-2 bg-white rounded-lg hover:scale-[1.02]'>
        <img src={`https://picsum.photos/id/${img}/200/200`} alt="" className='w-[60px] h-[60px] rounded-lg' />
        <p className='text-black font-bold text-xl'>{name}</p>
        <p className='text-black text-sm overflow-hidden'>{desc}</p>
    </div>
  )
}

export default Service