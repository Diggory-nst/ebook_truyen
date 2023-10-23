
function slugify(text) {
    return text
        .toString()
        .toLowerCase()
        .trim()
        .replace(/\s+/g, '-') // Replace spaces with hyphens
        .replace(/đ/g, 'd') // Replace 'đ' with 'd'
        .replace(/[àáảãạâầấẩẫậăằắẳẵặ]/g, 'a')
        .replace(/[èéẻẽẹêềếểễệ]/g, 'e')
        .replace(/[ìíỉĩị]/g, 'i')
        .replace(/[òóỏõọôồốổỗộơờớởỡợ]/g, 'o')
        .replace(/[ùúủũụưừứửữự]/g, 'u')
        .replace(/[ỳýỷỹỵ]/g, 'y')
        .replace(/[^a-z0-9-]/g, '') // Remove any remaining special characters
        .replace(/-{2,}/g, '-') // Replace multiple hyphens with a single hyphen
    // .substr(0, 50); // Limit the slug length (adjust as needed)
}

export default slugify