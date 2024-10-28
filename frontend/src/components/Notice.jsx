import moment from 'moment';
import React from 'react'
function Notice({notice}) {
  console.log(notice);
    return (
    <div className='m-10 bg-slate-100 p-4'>
        <p dangerouslySetInnerHTML={{ __html: notice.content }}/>
        <div>
            <h1>Attachments</h1>
            {notice.files.length>0?notice.files.map(file=><a className=' font-bold' href={file.url}>Link</a>):<span>NA</span>}
            <h1 className=' text-right'>{moment(notice.createdAt).format('MMMM Do YYYY, h:mm:ss a')}</h1>
        </div>
    </div>
  )
}

export default Notice