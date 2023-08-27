export const getStartup = async (id: string) => {
    const response = await fetch(`https://aislide.ru/php/catalog/read.php?id=${id}`)
    if(response.ok){
        const startup = await response.json()
        return startup.catalog
    }
}
