import React from 'react'

const page = () => {
  return (
    <div>
    <form action=" " className="flex flex-col gap-4 mx-auto padding-3 bg-slate-50  max-w-[700px]">

<input type="text"  placeholder="Topic title" className="border p-2 rounded-sm  block"/>
<input type="text"  placeholder="Topic title" className="border p-2 rounded-sm "/>

<button className="p-3 rounded-sm text-white font-medium border-green-900 block">  post</button>
</form>
        </div>
  )
}

export default page