import fs from 'fs'

export const save = (images, fileName, dir)  => {
    //create dir if it doesn't exist
    if (!fs.existsSync(dir)){
        fs.mkdirSync(dir);
    }

    //get previous images if exists
    const path =`${dir}/${fileName}`
    if(fs.existsSync(path)) {
        const previous = JSON.parse(fs.readFileSync(path).toString())
        images.push(...previous)
    }

    //write final images
    fs.writeFileSync(path, JSON.stringify(images))
}

export const replace = (images, fileName, dir)  => {
    //create dir if it doesn't exist
    if (!fs.existsSync(dir)){
        fs.mkdirSync(dir);
    }

    const path =`${dir}/${fileName}`

    //write final images
    fs.writeFileSync(path, JSON.stringify(images))
}