import mongoose from 'mongoose'

export default async function Database(server: string, db: string) {
    try {
        await mongoose.connect(`${server}/${db}`)
        console.log('Db connected')
    } catch(e) {
        console.error(e)
        return e
    } 
}