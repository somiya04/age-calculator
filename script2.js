function launchConfetti() {
    const colors = ['#667eea', '#764ba2', '#ff6b6b', '#ffd93d', '#6bcb77'];
    for(let i = 0; i < 60; i++) {
        const confetti = document.createElement('div');
        confetti.style.position = 'fixed';
        confetti.style.width = '8px';
        confetti.style.height = '8px';
        confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
        confetti.style.left = Math.random() * 100 + 'vw';
        confetti.style.top = '-10px';
        confetti.style.borderRadius = '50%';
        confetti.style.zIndex = '999';
        confetti.style.animation = `fall ${Math.random() * 2 + 1}s linear forwards`;
        document.body.appendChild(confetti);
        setTimeout(() => confetti.remove(), 3000);
    }
}


const yearFacts = {
    2000: "Y2K bug ki dhamki thi! 🖥️ Aur Google sirf 2 saal ka tha!",
    2001: "iPod launch hua tha — 1000 songs pocket mein! 🎵",
    2002: "Euro currency pehli baar use hui Europe mein! 💶",
    2003: "Facebook nahi tha — MySpace tha! 😄",
    2004: "Facebook launch hua — duniya badal gayi! 📱",
    2005: "YouTube launch hua is saal! 🎥",
    2006: "Twitter ka pehla tweet is saal aaya! 🐦",
    2007: "Pehla iPhone launch hua! 📱",
    2008: "Global financial crisis — duniya bhar mein recession aaya",
    2009: "WhatsApp launch hua! 💬",
    2010: "Instagram launch hua! 📸",
    2011: "Snapchat launch hua! 👻",
    2012: "Gangnam Style ne internet tod diya! 🕺",
    2013: "Candy Crush ka zamana tha! 🍬",
    2014: "Ice Bucket Challenge viral hua! 🧊",
    2015: "PUBG nahi tha — Blue Whale tha internet pe 😅",
    2016: "Pokemon Go ne logon ko sadkon pe nikaal diya! 🎮",
    2017: "TikTok launch hua — duniya naachne lagi! 💃",
    2018: "Fortnite ka craze tha! 🎯",
    2019: "COVID se pehle ki aakhri normal zindagi! 😄",
    2020: "COVID-19 — lockdown, masks, aur online classes! 😷",
    2021: "NFTs ka craze tha! 🖼️",
    2022: "ChatGPT launch hua — AI ka naya daur! 🤖",
    2023: "AI har jagah chhaa gaya! 🚀",
    2024: "GenAI tools ne coding badal di! 💻",
}



const btn = document.getElementById("calculateBtn");
const result = document.getElementById("result");

btn.addEventListener("click", function() {
    launchConfetti();
    const dob = document.getElementById("dob").value;
    
    if(!dob) {
        result.innerHTML = "Please select your date of birth!";
        return;
    }
    
    const birthDate = new Date(dob);
    const today = new Date();
    
    let years = today.getFullYear() - birthDate.getFullYear();
    let months = today.getMonth() - birthDate.getMonth();
    let days = today.getDate() - birthDate.getDate();
    
    if(days < 0) {
        months--;
        days += 30;
    }
    if(months < 0) {
        years--;
        months += 12;
    }
    
let emoji = "";
if(years <= 12) emoji = "👶 Child";
else if(years <= 17) emoji = "🧒 Teen";
else if(years <= 30) emoji = "👨 Young Adult";
else if(years <= 60) emoji = "🧔 Adult";
else emoji = "👴 Senior";

// Birthday check
const isBirthday = today.getMonth() === birthDate.getMonth() && 
                   today.getDate() === birthDate.getDate();

if(isBirthday) {
    result.innerHTML = `
        <div style="font-size: 50px;">🎉🎂🎊</div>
        <div style="font-size: 22px; color: #764ba2; font-weight: bold;">Happy Birthday!</div>
        <div>You are <b>${years} years</b> old today!</div>
        <div style="font-size: 30px; margin-top: 10px;">🥳✨🎈</div>
    `;
    return;
}

result.innerHTML = `
    <div style="font-size: 40px; margin-bottom: 10px;">${emoji}</div>
    <div>You are <b>${years} years</b>, ${months} months, and ${days} days old!</div>
`;
// Birthday countdown
const nextBirthday = new Date(today.getFullYear(), birthDate.getMonth(), birthDate.getDate());
if(nextBirthday < today) {
    nextBirthday.setFullYear(today.getFullYear() + 1);
}
const daysUntilBirthday = Math.ceil((nextBirthday - today) / (1000 * 60 * 60 * 24));

// Day of birth
const days_of_week = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const birthDay = days_of_week[birthDate.getDay()];

result.innerHTML = `
    <div style="font-size: 40px; margin-bottom: 10px;">${emoji}</div>
    <div>You are <b>${years} years</b>, ${months} months, and ${days} days old!</div>
    <div style="margin-top: 15px; font-size: 14px; color: #999;">
        🎂 Birthday in <b>${daysUntilBirthday} days</b><br>
        📅 You were born on a <b>${birthDay}</b>
    </div>
`;
const birthYear = birthDate.getFullYear();
const fact = yearFacts[birthYear] || "Aap ek unique saal mein paida hue! ✨";

result.innerHTML += `
    <div style="margin-top: 15px; background: linear-gradient(135deg, #667eea22, #764ba222); 
    padding: 12px; border-radius: 10px; font-size: 13px; color: #555;">
        🌍 <b>${birthYear} mein:</b> ${fact}
    </div>
`;
});
