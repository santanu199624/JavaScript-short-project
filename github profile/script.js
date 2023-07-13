const url = "https://api.github.com/users/";
const search_input = document.querySelector("#search_input")
const search_button = document.querySelector("#search_btn")
const main_section = document.querySelector(".main")
const card_container = document.querySelector(".card_container")

const generateProfile = (profile) =>{
   return `<div class="card">
     
    <div class="top_section">
        <div class="left">
            <div class="avatar">
                <img src="${profile.avatar_url}" alt="" />
            </div>
            <div class="self">
                <h1>${profile.name}</h1>
                <h1>${profile.bio}</h1>
            </div>
        </div>
        <a href="${profile.html_url}">
        <button id="check_profile_btn" class="primary_btn">Check Profile</button>
        </a>
    </div>

     
    <div class="about">
        <h2>About</h2>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Et amet ducimus dolore.</p>
    </div>

     
    <div class="status">
        <div class="status_item">
            <h3>Followers</h3>
            <p>${profile.followers}</p>
        </div>

        <div class="status_item">
            <h3>Followings</h3>
            <p>${profile.following}</p>
        </div>

        <div class="status_item">
            <h3>Repos</h3>
            <p>${profile.public_repos}</p>
        </div>
    </div>
</div>
   `;
    // main_section.innerHTML = card;
};

const fetchProfile = async()=>{
    const username = search_input.value;
    const res = await fetch(url + username);
    const data = await res.json();

    card_container.innerHTML = generateProfile(data)
    console.log(data)
    
    
    
}

search_button.addEventListener('click', fetchProfile)

