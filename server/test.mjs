//just a simple test to run in github action
import fs from 'fs'

const execute = () => {
        const dir = 'out'
        //create dir if it doesn't exist
        if (!fs.existsSync(dir)){
            fs.mkdirSync(dir);
        }

        const fileContent = Number(fs.readFileSync(`${dir}/raw.test`).toString() ?? 0)
        console.log(fileContent)

        fileContent++

        fs.writeFileSync(`${dir}/raw.test`), fileContent.toString())
}