//import contactUrl from 'contactUrl'

import axios from 'axios'

export default async function Api() {
    const response = await fetch('http://mock-api.com/VLn4JZzx.mock/user',{
        headers: new Headers({
            'Content-Type': 'application/json',

        })
    });

    //console.log(contactUrl)
    axios.post('/api/v1/auth/cms/login', {
        username: 'i.staff',
        password: 'eiga'
    }).then(function (response) {
            console.log(response);
        }).catch(function (error) {
            console.log(error);
        });

    axios.request({
        method:'post',
        url: '/api/v1/auth/cms/login',
        headers: {'Content-Type': 'application/json'},
        data: {
            username: 'i.staff',
            password: 'eiga'
        }
    }).then((res)=>{
        console.log(res)
    }).catch((err)=>{
        console.log(err)
    })




    console.log(process.env.NODE_ENV)
    const data = await response.json();
    console.log(data)





}