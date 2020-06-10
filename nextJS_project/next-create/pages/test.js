import Comtest from './../components/Comtest'
import Nav from './../components/Nav'
import Link from 'next/link'
function Test(){
    return (
        <>
            <Nav/>
            <button>Testtest</button>
            <Comtest>Comtest</Comtest>
            <Link href="/post/23"><a>Pid</a></Link>
            <Link href="/queryTest?name=testsdf"><a>Query Test</a></Link>
        </>
    )
}

export default Test