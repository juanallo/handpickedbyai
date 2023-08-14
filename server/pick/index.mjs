export const dailyPick = async (images) => {
    const date = Date.now().toString()
    const randomIndex = Math.floor(Math.random() * images.length)
    
    const selectedImage = {...images[randomIndex], date}
    return selectedImage
}