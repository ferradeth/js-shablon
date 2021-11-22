export async function getCards(){
    let response = await fetch('./js/goose-swan.json')
    return await response.json()
}
