const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const path = require('path')
const fs = require('fs')

async function hashPassword(password) {
    const salt = await bcrypt.genSalt(10)
    const hashedPassword = await bcrypt.hash(password, salt)
    return hashedPassword
}

function generateAuthToken(userId) {
    const token = jwt.sign({ _id: userId }, process.env.JWT_SECRET_KEY, { expiresIn: '1d' })
    return token
}

function deleteNullishData(data) {
    const nullishData = ['', ' ', '0', 0, null, undefined]
    for (const key of Object.keys(data)) {
        if(nullishData.includes(key)) delete data[key]
        if(nullishData.includes(data[key])) delete data[key]
        if(Array.isArray(data[key]) && data[key].length == 0) delete data[key]
    }
}

function deleteFileFromPublic(fileAddress) {
    if(fileAddress) {
        const filePath = path.join(__dirname, '..', '..', 'public', fileAddress)
        if(fs.existsSync(filePath)) fs.unlinkSync(filePath)
    }
}

function getImagesFromReq(files, uploadPath) {
    if(files?.length > 0) {
        return ((files.map(file => path.join(uploadPath, file.filename))).map(item => item.replace(/\\/g, '/')))
    } else {
        return []
    }
}

function createSlug(name) {
    return name.replace(/([^۰-۹آ-یa-zA-Z0-9]|-)+/g, '-')
}

function addFilter(data) {
    if(data.price) {
        const minPrice = parseInt(data.price?.min) || undefined
        const maxPrice = parseInt(data.price?.max) || undefined
        if(minPrice && maxPrice) data.price = { $gte: minPrice, $lte: maxPrice }
        if(minPrice) data.price = { $gte: minPrice }
        if(maxPrice) data.price = { $lte: maxPrice }
    } 

    if(data.color) {
        data['inventory.color'] = data.color
        delete data.color
    }

    if(data.size) {
        data['inventory.size'] = data.size
        delete data.size
    }

    return data
}

module.exports = {
    hashPassword,
    generateAuthToken,
    deleteNullishData,
    deleteFileFromPublic,
    getImagesFromReq,
    createSlug,
    addFilter
}