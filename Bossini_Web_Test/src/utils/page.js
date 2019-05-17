

export default async function Page(contentHtml) {
    document.querySelector('#App').innerHTML=await contentHtml;
    return document.querySelector('html').innerHTML;
}