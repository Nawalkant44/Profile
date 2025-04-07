// Profile data
const profiles = [
    {
      name: "Ritika",
      age: 34,
      tagline: "Warm, thoughtful and loves poetry",
      location: "Vishakhapatnam, Andhra Pradesh",
      avatar: "https://i.pravatar.cc/150?img=47",
      description:
        "A grounded and creative soul, Ritika enjoys calm evenings, soulful music and meaningful conversations.",
      hobbies: [
        {
          title: "Poetry",
          description: "Writes and recites Hindi and Urdu verses during open mic nights",
        },
        {
          title: "Badminton",
          description: "Plays recreationally with friends every weekend",
        },
        {
          title: "Spirituality",
          description: "Practices meditation and reads spiritual literature regularly",
        },
        {
          title: "Long Walks",
          description: "Enjoys early morning walks in city parks",
        },
      ],
    },
    {
      name: "Sneha",
      age: 31,
      tagline: "Spiritual, grounded and ready for her next chapter",
      location: "Mumbai, Maharashtra",
      avatar: "https://i.pravatar.cc/150?img=48",
      description: "Sneha is rooted in values, loves connecting with people and believes in lifelong learning.",
      hobbies: [
        {
          title: "Volunteering",
          description: "Active in local community kitchens and NGO events",
        },
        {
          title: "Classical Music",
          description: "Learns Hindustani vocals from a private tutor",
        },
        {
          title: "Reading",
          description: "Avid reader of spiritual biographies and memoirs",
        },
      ],
    },
    {
      name: "Pavithra",
      age: 35,
      tagline: "Loves long walks, strategy games and filter coffee",
      location: "Bangalore, Karnataka",
      avatar: "https://i.pravatar.cc/150?img=49",
      description: "An introverted extrovert who enjoys deep conversations, nature and slow living.",
      hobbies: [
        {
          title: "Road Trips",
          description: "Often escapes on spontaneous weekend drives to the hills",
        },
        {
          title: "Filter Coffee",
          description: "A self-proclaimed connoisseur who brews her own every morning",
        },
        {
          title: "Board Games",
          description: "Hosts monthly strategy game nights with close friends",
        },
      ],
    },
  ]
  
  // Function to create profile cards
  function createProfileCards() {
    const profilesContainer = document.getElementById("profiles-container")
  
    profiles.forEach((profile, index) => {
      const card = document.createElement("div")
      card.className =
        "border border-amber-200 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow cursor-pointer"
      card.dataset.profileIndex = index
  
      card.innerHTML = `
        <!-- Avatar and basic info -->
        <div class="flex flex-col items-center pt-8 pb-4 border-b border-amber-100">
          <div class="relative w-24 h-24 rounded-full overflow-hidden border-4 border-amber-50 mb-4">
            <img src="${profile.avatar}" alt="${profile.name}" class="w-full h-full object-cover">
          </div>
          <h3 class="text-xl font-semibold">${profile.name}</h3>
          <p class="text-gray-600">${profile.age}</p>
        </div>
  
        <!-- Hobbies section -->
        <div class="p-4 border-b border-amber-100">
          <h4 class="font-semibold mb-2">Hobbies</h4>
          <div class="space-y-3">
            ${profile.hobbies
              .slice(0, 2)
              .map(
                (hobby) => `
              <div>
                <p>
                  <span class="font-medium">${hobby.title}:</span> 
                  ${hobby.description}
                </p>
              </div>
            `,
              )
              .join("")}
          </div>
        </div>
  
        <!-- Location and tagline -->
        <div class="p-4">
          <p class="font-medium">${profile.location}</p>
          <p class="text-gray-600 mt-1">${profile.tagline}</p>
        </div>
      `
  
      // Add click event to open modal
      card.addEventListener("click", () => {
        openProfileModal(profile)
      })
  
      profilesContainer.appendChild(card)
    })
  }
  
  // Function to open profile modal
  function openProfileModal(profile) {
    // Set modal content
    document.getElementById("modal-name").textContent = `${profile.name}, ${profile.age}`
    document.getElementById("modal-avatar").src = profile.avatar
    document.getElementById("modal-avatar").alt = profile.name
    document.getElementById("modal-location").textContent = profile.location
    document.getElementById("modal-tagline").textContent = `"${profile.tagline}"`
    document.getElementById("modal-description").textContent = profile.description
  
    // Clear and populate hobbies
    const hobbiesContainer = document.getElementById("modal-hobbies")
    hobbiesContainer.innerHTML = ""
  
    profile.hobbies.forEach((hobby) => {
      const hobbyElement = document.createElement("div")
      hobbyElement.className = "pb-2 border-b border-gray-100 last:border-0"
      hobbyElement.innerHTML = `
        <p class="font-medium">${hobby.title}</p>
        <p class="text-gray-600">${hobby.description}</p>
      `
      hobbiesContainer.appendChild(hobbyElement)
    })
  
    // Show modal using Flowbite's API
    const modal = document.getElementById("profile-modal")
    const modalInstance = new window.Flowbite.Modal(modal)
    modalInstance.show()
  }
  
  // Initialize the page
  document.addEventListener("DOMContentLoaded", () => {
    createProfileCards()
  })
  
  