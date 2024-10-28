import React, { useState, useRef, useMemo, useEffect } from 'react';
import JoditEditor from 'jodit-react';
import { Button } from '../ui/button';
import axios from 'axios';
import { NOTICE_API_END_POINT } from '@/utils/constant';
import { Label } from '../ui/label';
import { setLoading } from '@/redux/authSlice';
import { Loader2 } from 'lucide-react';
const PostNotice = ({ placeholder }) => {
    const editor = useRef(null);
    const [content, setContent] = useState('');
    const [files, setFiles] = useState([]);
    const [loading,setLoading]=useState(false);
    const fileChange = (e) => {
        setFiles(e.target.files);
    }
    useEffect(()=>{
        console.log(loading);
     },[loading])
    const handleSubmit = async(e) => {
        e.preventDefault();
        console.log(content);
        const formData = new FormData();
        formData.append('content', content);
        console.log("ready to upload");
        for (let file of files) {
            formData.append('files', file);
        }
        try {
            setLoading(true);
            console.log(loading);
            const url=`${NOTICE_API_END_POINT}/upload`
            console.log(url);
            const res=await axios.post(url, formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                },
                withCredentials: true
            });
        } catch (error) {
            console.log(error);
        }
        finally{
            setLoading(false);
        }
    
    }
    const config =
    {
        readonly: false, // all options from https://xdsoft.net/jodit/docs/,
        placeholder: placeholder || 'Start typings...',
        defaultTimeout: 2000
    }

    return (
        <div className='flex flex-col items-center p-20 justify-center'>
            <h1 className='w-full font-bold m-4 text-xl'>Add A Notice</h1>
            <div className='w-full'>
                <JoditEditor
                    ref={editor}
                    value={content}
                    config={config}
                    tabIndex={1} // tabIndex of textarea
                    onBlur={newContent => setContent(newContent)} // preferred to use only this option to update the content for performance reasons
                    onChange={newContent => { }}
                />
                <form onSubmit={handleSubmit}>
                    <Label>Upload Files</Label>
                    <input type='file' multiple onChange={fileChange} className='border-solid border-2 p-1 rounded-lg bg-slate-50 m-4  focus:bg-slate-200' name='files' />
                    <div>
                        {
                            loading ? <Button className="w-full my-4"> <Loader2 className='mr-2 h-4 w-4 animate-spin' /> Please wait </Button> : <Button type="submit" className="w-full my-4">Submit</Button>
                        }
                    </div>
                </form>
            </div>
        </div>
    );
};
export default PostNotice