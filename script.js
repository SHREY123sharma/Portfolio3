// Typing animation for About, Projects, and each Project card (looping)
window.addEventListener('DOMContentLoaded', function() {
    // Header Typing Animation
    const headerText = "Shrey Sharma";
    const headerTyping = document.getElementById('header-typing');
    let hidx = 0;
    function typeHeaderChar() {
        if (hidx <= headerText.length) {
            headerTyping.innerHTML = headerText.slice(0, hidx) + '<span style="border-right:2px solid #ffe082;">&nbsp;</span>';
            hidx++;
            setTimeout(typeHeaderChar, 22 + Math.random() * 32);
        } else {
            headerTyping.innerHTML = headerText;
            setTimeout(() => {
                hidx = 0;
                headerTyping.innerHTML = '';
                setTimeout(typeHeaderChar, 900);
            }, 1800);
        }
    }
    typeHeaderChar();

    // Header Subtitle Typing Animation (loops: subtitle, then name)
    const subtitleText = "Full Stack Developer | BCA Student at KIT College";
    const subtitleTyping = document.getElementById('header-subtitle-typing');
    let sidx = 0;
    let showName = false;
    function typeSubtitleChar() {
        let text = showName ? headerText : subtitleText;
        if (sidx <= text.length) {
            subtitleTyping.innerHTML = text.slice(0, sidx) + '<span style="border-right:2px solid #ffe082;">&nbsp;</span>';
            sidx++;
            setTimeout(typeSubtitleChar, 18 + Math.random() * 32);
        } else {
            subtitleTyping.innerHTML = text;
            setTimeout(() => {
                sidx = 0;
                showName = !showName;
                subtitleTyping.innerHTML = '';
                setTimeout(typeSubtitleChar, 700);
            }, 1600);
        }
    }
    typeSubtitleChar();

    // About Section Typing
    const aboutText = "I'm Shrey Sharma, a full stack developer and BCA student at KIT College with a CGPA of 8+. I enjoy building modern, user-friendly websites and web apps, and I'm passionate about learning new technologies and improving my skills. My projects showcase my expertise in both frontend and backend development, utilizing technologies like React.js, Node.js, and MongoDB . I'm always looking for opportunities to collaborate and learn from others. Let's connect!";
    const aboutTyping = document.getElementById('about-typing');
    let idx = 0;
    function typeChar() {
        if (idx <= aboutText.length) {
            aboutTyping.innerHTML = aboutText.slice(0, idx) + '<span style="border-right:2px solid #ffe082;">&nbsp;</span>';
            idx++;
            setTimeout(typeChar, 18 + Math.random() * 35);
        } else {
            aboutTyping.innerHTML = aboutText;
            setTimeout(() => {
                idx = 0;
                aboutTyping.innerHTML = '';
                setTimeout(typeChar, 600);
            }, 1800);
        }
    }
    typeChar();

    // Skills Typing Animation
    const skillsText = document.getElementById('skills-static').innerHTML.replace(/<br>/g, '\n');
    const skillsTyping = document.getElementById('skills-typing');
    let skidx = 0;
    function typeSkillsChar() {
        if (skidx <= skillsText.length) {
            let display = skillsText.slice(0, skidx).replace(/\n/g, '<br>');
            skillsTyping.innerHTML = display + '<span style="border-right:2px solid #ffe082;">&nbsp;</span>';
            skidx++;
            setTimeout(typeSkillsChar, 16 + Math.random() * 28);
        } else {
            skillsTyping.innerHTML = skillsText.replace(/\n/g, '<br>');
            setTimeout(() => {
                skidx = 0;
                skillsTyping.innerHTML = '';
                setTimeout(typeSkillsChar, 900);
            }, 2000);
        }
    }
    typeSkillsChar();
    // Projects Section Typing
    const projectsText = "Here are some of my best projects, including web apps, business sites, and clones of popular platforms. Each project demonstrates my skills in full stack development, UI/UX, and modern web technologies.";
    const projectsTyping = document.getElementById('projects-typing');
    let pidx = 0;
    function typeProjectsChar() {
        if (pidx <= projectsText.length) {
            projectsTyping.innerHTML = projectsText.slice(0, pidx) + '<span style="border-right:2px solid #ffe082;">&nbsp;</span>';
            pidx++;
            setTimeout(typeProjectsChar, 18 + Math.random() * 35);
        } else {
            projectsTyping.innerHTML = projectsText;
            setTimeout(() => {
                pidx = 0;
                projectsTyping.innerHTML = '';
                setTimeout(typeProjectsChar, 600);
            }, 1800);
        }
    }
    typeProjectsChar();

    // Project 1 Typing
    const project1Text = document.getElementById('project1-static').innerHTML;
    const project1Typing = document.getElementById('project1-typing');
    let pr1idx = 0;
    function typeProject1Char() {
        if (pr1idx <= project1Text.length) {
            project1Typing.innerHTML = project1Text.slice(0, pr1idx) + '<span style="border-right:2px solid #ffe082;">&nbsp;</span>';
            pr1idx++;
            setTimeout(typeProject1Char, 14 + Math.random() * 28);
        } else {
            project1Typing.innerHTML = project1Text;
            setTimeout(() => {
                pr1idx = 0;
                project1Typing.innerHTML = '';
                setTimeout(typeProject1Char, 600);
            }, 1800);
        }
    }
    typeProject1Char();

    // Project 2 Typing
    const project2Text = document.getElementById('project2-static').innerHTML;
    const project2Typing = document.getElementById('project2-typing');
    let pr2idx = 0;
    function typeProject2Char() {
        if (pr2idx <= project2Text.length) {
            project2Typing.innerHTML = project2Text.slice(0, pr2idx) + '<span style="border-right:2px solid #ffe082;">&nbsp;</span>';
            pr2idx++;
            setTimeout(typeProject2Char, 14 + Math.random() * 28);
        } else {
            project2Typing.innerHTML = project2Text;
            setTimeout(() => {
                pr2idx = 0;
                project2Typing.innerHTML = '';
                setTimeout(typeProject2Char, 600);
            }, 1800);
        }
    }
    typeProject2Char();

    // Project 3 Typing
    const project3Text = document.getElementById('project3-static').innerHTML;
    const project3Typing = document.getElementById('project3-typing');
    let pr3idx = 0;
    function typeProject3Char() {
        if (pr3idx <= project3Text.length) {
            project3Typing.innerHTML = project3Text.slice(0, pr3idx) + '<span style="border-right:2px solid #ffe082;">&nbsp;</span>';
            pr3idx++;
            setTimeout(typeProject3Char, 14 + Math.random() * 28);
        } else {
            project3Typing.innerHTML = project3Text;
            setTimeout(() => {
                pr3idx = 0;
                project3Typing.innerHTML = '';
                setTimeout(typeProject3Char, 600);
            }, 1800);
        }
    }
    typeProject3Char();

    // Project 4 Typing
    const project4Text = document.getElementById('project4-static').innerHTML;
    const project4Typing = document.getElementById('project4-typing');
    let pr4idx = 0;
    function typeProject4Char() {
        if (pr4idx <= project4Text.length) {
            project4Typing.innerHTML = project4Text.slice(0, pr4idx) + '<span style="border-right:2px solid #ffe082;">&nbsp;</span>';
            pr4idx++;
            setTimeout(typeProject4Char, 14 + Math.random() * 28);
        } else {
            project4Typing.innerHTML = project4Text;
            setTimeout(() => {
                pr4idx = 0;
                project4Typing.innerHTML = '';
                setTimeout(typeProject4Char, 600);
            }, 1800);
        }
    }
    typeProject4Char();
});
