export default async function Api() {
    const response = await fetch('http://mock-api.com/VLn4JZzx.mock/user',{
        headers: new Headers({
            'Content-Type': 'application/json',

        })
    });
    const data = await response.json();
    console.log(data)
}