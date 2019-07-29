export default function validateKey(key : number) {
    return new Promise((resolve, reject) => {
        if(key !== (process.env.ALBOR_KEY || 0)) {
            reject(new Error('Invalid albor key.'))
        }
        resolve()
    })
}