export const loadWishlist = () =>{
    try{
        const data = localStorage.getItem('wishlist')
        return data ? JSON.parse(data):[]
    }catch(err){
        console.log(err)
        return []
    }
}

// export const updateList = () =>{
//     const wishlist = loadWishlist()

//     try{
//         const isDuplicate = wishlist.some(p => p.id === product.id)
//         if (isDuplicate) return alert('Sorry vai')
//         const updatedList = [...wishlist, product]
//         localStorage.setItem('wishlist', JSON.stringify(updatedList))
//     }catch(err){
//         console.log(err)
//     }
// }