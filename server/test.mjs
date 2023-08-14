//just a simple test to run in github action
import fs from 'fs'

const execute = () => {
        const dir = 'server/out'
        //create dir if it doesn't exist
        if (!fs.existsSync(dir)){
            fs.mkdirSync(dir);
        }
        const path = `${dir}/raw.test`

        let fileContent = fs.existsSync(path) ? Number(fs.readFileSync(path).toString()) : 0

        fileContent++

        fs.writeFileSync(path, fileContent.toString())

        console.log(`fileContent: ${fileContent}`)
}

execute()