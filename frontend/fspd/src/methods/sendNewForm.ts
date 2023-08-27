//@ts-ignore
export const sendNewForm = async (data) => {
    const respCreate = await fetch('https://aislide.ru/php/catalog/create.php')
    let presId
    if(respCreate.ok){
        presId = await respCreate.json()
    }
    const respUpdate = await fetch(`https://aislide.ru/php/catalog/answer.php?id=${presId}`, {
        method: 'put',
        body: JSON.stringify(data)
    })
}
