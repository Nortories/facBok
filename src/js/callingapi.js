// Vishal Work

export async function getPost(id) {
    try {
        const response = await fetch(`facebok-2q7r.onrender.com/${id}`);
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error fetching single item:', error);
        return null;
    }
}

export async function getSingleItem(id) {
    try {
        const response = await fetch(`https://facebok-2q7r.onrender.com/${id}`);
        const data = await response.json();
        return data;

    } catch (error) {
        console.error('Error fetching single item:', error);
        return null;
    }
}

// export function() {
    
// }

// export async function getAllItems() {
//     try {
//         const response = await fetch('https://facebok-2q7r.onrender.com/groups/');
//         const data = await response.json();
//         console.log(data);

//         return data;
//     } catch (error) {
//         console.error('Error fetching all items:', error);
//         return null;
//     }
// }

export async function updateItem(id, newData) {
    try {
        const response = await fetch(`facebok-2q7r.onrender.com/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newData)
        });
        const updatedItem = await response.json();
        return updatedItem;
    } catch (error) {
        console.error('Error updating item:', error);
        return null;
    }
}

export async function deleteItem(id) {
    try {
        await fetch(`facebok-2q7r.onrender.com/${id}`, {
            method: 'DELETE'
        });
        return true; // Return true to indicate successful deletion
    } catch (error) {
        console.error('Error deleting item:', error);
        return false; // Return false to indicate failure
    }
}