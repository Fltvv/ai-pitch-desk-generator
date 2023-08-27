export const getStartups = async () => {
    const response = await fetch('https://aislide.ru/php/catalog/read.php')
    if(response.ok){
        const startups = await response.json()
        return startups.catalog
    }
}
