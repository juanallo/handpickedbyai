import fs from 'fs'

export const save = (images, fileName) => {
    const dir = `out`
    
    //create dir if it doesn't exist
    if (!fs.existsSync(dir)){
        fs.mkdirSync(dir);
    }

    //get previous data if exists
    const path =`${dir}/${fileName}`
    if(fs.existsSync(path)) {
        const previous = JSON.parse(fs.readFileSync(path).toString())
        images.push(...previous)
    }

    //write final data
    fs.writeFileSync(path, JSON.stringify(images))
}