const urlAPI = 'https://youtube-v31.p.rapidapi.com/search?channelId=UCFR2oaNj02WnXkOgLH0iqOA&part=snippet%2Cid&order=date&maxResults=8';

const content = null || document.getElementById("contentP")

const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '4987cdea4bmsh354f7b3f20674b0p1d2cb9jsn9d6235a5db62',
		'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
	}
};
/*
try {
	const response = await fetch(url, options);
	const result = await response.text();
	console.log(result);
} catch (error) {
	console.error(error);
}
*/

async function fetchData(url){
    const response = await fetch(url, options)
    const data = await response.json()
    return data
}

(async () => {
    try{
        const videos = await fetchData(urlAPI)
        let view = `
        ${videos.items.map(video => `
            <div class="group relative bg-black rounded-md p-3">
                    <div
                    class=" w-full bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:aspect-none">
                        <img src="${video.snippet.thumbnails.high.url}" alt="${video.snippet.description}" class="w-full">
                    </div>
                    <div class="mt-0 flex justify-between ">
                        <h3 class="text-sm text-white -700">
                        <span aria-hidden="true" class="absolute inset-0 "></span>
                        ${video.snippet.title}
                        </h3>
                    </div>
                </div>
        
        `).slice(0.4).join("")}
            
        `
        content.innerHTML = view
    } catch (error){
        console.log(error)
    }
})();