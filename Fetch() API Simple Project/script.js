document.addEventListener('DOMContentLoaded',()=>{
    const apiUrl = 'https://dog.ceo/api/breeds/image/random';
    const fetchBtn = document.querySelector('#fetchBtn');
    const dataContainer = document.querySelector('#dataContainer');
    const loading = document.querySelector('#loading');
    const errorMessage = document.querySelector('#error');
    async function fetchData(){
        try{
            // Show loading and clear previous data:
            loading.classList.remove('hidden');
            dataContainer.innerHTML = '';
            // Fetch data:
            const response = await fetch(apiUrl);
            // Handle HTTP Errors:
            if(!response.ok)
                throw new Error(`HTTP Error! Status : ${response.status}`);
            // The throw statement allows you to create a custom error.
            const data = await response.json();
            // Display image:
            const div = document.createElement('div');
            div.className = 'responseData';
            
            const img = document.createElement('img');
            // img.className = 'div__img';
            img.src = data.message; // The API returns URL in 'message' property
            img.alt = 'Random Dog Image';
            img.loading = 'lazy';
            img.style.maxWidth = '100%';
            div.appendChild(img);
            dataContainer.appendChild(div);
        }
        catch(error){
            errorMessage.textContent = `Error: ${error.message}`;
            errorMessage.classList.remove('hidden');
        }
        finally{
            loading.classList.add('hidden');
        }
    }
    fetchBtn.addEventListener('click',fetchData);
})