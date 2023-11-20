// data
const data = [
  {
    school: 'University Of Port Harcourt',
    name: 'Tope Fasasi',
    stateoforigin: 'Osun',
    age: 17,
    gender: 'Male',
    department: 'Computer Science',
    image: 'avatar/ava1.jpg'
  },
  {
    school: 'Covenant University',
    name: 'Anita Okorie',
    stateoforigin: 'Imo',
    age: 18,
    gender: 'Female',
    department: 'Computer Science',
    image: 'avatar/ava2.jpg'
  },
  {
    school: 'Rivers State University',
    name: 'Amanda Wilson',
    stateoforigin: 'Delta',
    age: 16,
    gender: 'Female',
    department: 'Computer Science',
    image: 'avatar/ava3.avif'
  }
];

// data var
const profiles = profile(data); 

// add event to button
document.getElementById('next').addEventListener('click', nextProfile);

// next profile
function nextProfile() {
  const currentProfile = profiles.next().value;

  if(currentProfile !== undefined) {
    document.getElementById('profile-display').innerHTML = `
      <ul>
        <li>Name: ${currentProfile.name}</li>
        <li>School: ${currentProfile.school}</li>
        <li>State of origin: ${currentProfile.stateoforigin}</li>
        <li>Age: ${currentProfile.age}</li>
        <li>Gender: ${currentProfile.gender}</li>
        <li>Department: ${currentProfile.department}</li>

      </ul>
    `;

    document.getElementById('display-image').innerHTML = `<img src="${currentProfile.image}">`;
  } else {
    // reload
    window.location.reload();
  }
}

nextProfile()

// profile iterator
function profile(profiles) {
  let nextIndex = 0;

  return {
    next: () => {
      return nextIndex < profiles.length ? 
      { value: profiles[nextIndex++], done: false } : 
      { done: true }
    }
  };
}