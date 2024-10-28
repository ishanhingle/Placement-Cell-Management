import React, { useEffect, useState } from 'react'
import { Loader2 } from 'lucide-react'
import { NOTICE_API_END_POINT } from '@/utils/constant';
import Notice from './Notice';
import axios from 'axios';

function AllNotices() {
    const [loading, setLoading] = useState(false);
    const [notices,setNotices]=useState([]);
    useEffect(()=>{
        const fetchData = async () => {
            try {
              setLoading(true);
              axios.get(NOTICE_API_END_POINT+'/getAll').then((response)=>{
                console.log(response);
                setNotices(response.data.notices);
              })
            } catch (err) {
              console.log(err);
            }
            finally{
                setLoading(false);
            }
          };
          fetchData()
    },[loading])
    return (
    <div>{
        loading?<Loader2/>:
        <div>
            { notices.length>0 && notices.map((notice,i)=><Notice key={i} notice={notice}></Notice>)}
        </div>
    }</div>
  )
}

export default AllNotices