// Portfolio Multilingual Data & Configuration for Waremeth Buala (Mao)
const portfolioData = {
  th: {
    nav: {
      brand: "พอร์ตโฟลิโอ",
      about: "About",
      exp: "Experience & Education",
      labs: "Projects (In-Progress)",
      contact: "Contact"
    },
    hero: {
      tag: "ABOUT",
      status: "นักศึกษา ICT ม.ศรีปทุม (ปี 1 / จบ ปวส. เกรด 3.56) พร้อมสำหรับการเรียนรู้และฝึกงาน",
      headline: "มุ่งมั่นพัฒนาทักษะระบบเครือข่าย<br/>เพื่อโครงสร้างพื้นฐานไอทีที่มั่นคง",
      name: "วเรเมธ บัวลา (เหมา)",
      role: "ICT Undergraduate & Aspiring IT / Network Specialist",
      p1: "กำลังศึกษาต่อระดับปริญญาตรี สาขาเทคโนโลยีสารสนเทศและการสื่อสาร (ICT) ชั้นปีที่ 1 คณะเทคโนโลยีสารสนเทศ มหาวิทยาลัยศรีปทุม โดยมีพื้นฐานการศึกษาจากการสำเร็จการศึกษาระดับ ปวส. ด้วยผลการเรียนเฉลี่ยสะสม 3.56",
      p2: "มีความตั้งใจในการเรียนรู้ทั้งภาคทฤษฎีและภาคปฏิบัติการทดลองเพื่อปูพื้นฐานความรู้ด้านระบบเครือข่ายคอมพิวเตอร์ การดูแลระบบสารสนเทศ และการแก้ปัญหาอุปกรณ์ฮาร์ดแวร์อย่างเป็นระบบ",
      p3: "เปิดรับโอกาสในการเรียนรู้ การฝึกงาน เพื่อสั่งสมประสบการณ์จริงและพัฒนาสู่สายงานด้านเทคโนโลยีสารสนเทศและระบบเครือข่ายอย่างต่อเนื่อง",
      btnResume: "ดาวน์โหลด Resume (PDF)",
      btnExp: "ประวัติการศึกษา (ปวส. 3.56)",
      btnLabs: "สถานะโปรเจกต์",
      btnContact: "ติดต่อฉัน",
      exploreLink: "ดูประวัติการศึกษา →"
    },
    skills: {
      title: "Core Technical Competencies",
      subtitle: "ทักษะและความเชี่ยวชาญด้านระบบเครือข่ายและฮาร์ดแวร์ที่กำลังศึกษาและฝึกฝน",
      categories: [
        {
          name: "Computer Networking Basics",
          icon: "fa-network-wired",
          tags: ["OSI Model & TCP/IP", "IPv4 Subnetting", "IPv6 Basics", "LAN / WLAN Setup", "VLANs & Trunking", "Basic Routing & Switching", "DHCP & DNS Configuration"]
        },
        {
          name: "Hardware & Maintenance",
          icon: "fa-screwdriver-wrench",
          tags: ["PC Assembly & Diagnostics", "Structured Cabling (RJ45/Cat6)", "Patch Panel Termination", "Hardware Troubleshooting", "Preventive Maintenance", "Peripheral Setup"]
        },
        {
          name: "Simulation & Lab Tools",
          icon: "fa-laptop-code",
          tags: ["Cisco Packet Tracer", "VirtualBox", "VMware Workstation", "Command Prompt / Terminal", "Basic Linux Commands", "Wireshark Packet Capture"]
        },
        {
          name: "Operating Systems & Servers",
          icon: "fa-server",
          tags: ["Windows 10 / 11 Pro", "Windows Server Basics", "Ubuntu Desktop / Server", "User & Permission Management", "Shared Folders & Printers"]
        },
        {
          name: "Network Security Fundamentals",
          icon: "fa-shield-halved",
          tags: ["Firewall Concepts", "Access Control Lists (ACLs)", "Basic NAT / Port Forwarding", "Antivirus & Endpoint Security", "Password Policies & 2FA"]
        }
      ]
    },
    certs: {
      title: "Certifications & Learning Goals",
      subtitle: "เป้าหมายการสอบใบประกาศนียบัตรและการพัฒนาทักษะทางวิชาชีพ",
      btnVerify: "ดูรายละเอียดเป้าหมาย",
      items: [
        {
          id: "cert-ccna",
          title: "Cisco Certified Network Associate (CCNA 200-301)",
          issuer: "Cisco Systems",
          date: "อยู่ในช่วงศึกษาเตรียมสอบ (In-Preparation)",
          badge: "CCNA Candidate",
          level: "Associate Level",
          icon: "fa-certificate",
          color: "border-sky-500 text-sky-500",
          desc: "กำลังศึกษาเนื้อหา Network Fundamentals, Network Access, IP Connectivity, IP Services และ Security Fundamentals ตามหลักสูตรทางการของ Cisco"
        },
        {
          id: "cert-comptia",
          title: "CompTIA Network+ / Security+",
          issuer: "CompTIA",
          date: "เป้าหมายการศึกษา (Study Goal)",
          badge: "CompTIA Pathway",
          level: "Foundational",
          icon: "fa-award",
          color: "border-teal-500 text-teal-500",
          desc: "ศึกษาหลักการมาตรฐานด้านสถาปัตยกรรมเครือข่ายกลางและการป้องกันภัยคุกคามทางไซเบอร์ขั้นพื้นฐาน"
        },
        {
          id: "cert-spu-ict",
          title: "SPU ICT Network Specialization Program",
          issuer: "มหาวิทยาลัยศรีปทุม (SPU)",
          date: "ปีการศึกษา 2569 - ปัจจุบัน",
          badge: "Academic Track",
          level: "Undergraduate Degree",
          icon: "fa-graduation-cap",
          color: "border-indigo-500 text-indigo-500",
          desc: "หลักสูตรระดับปริญญาตรี เน้นการสื่อสารข้อมูล เครือข่ายคอมพิวเตอร์ และการประมวลผลบนคลาวด์"
        },
        {
          id: "cert-vocational",
          title: "ประกาศนียบัตรวิชาชีพชั้นสูง (ปวส.) เกรด 3.56",
          issuer: "สถาบันการอาชีวศึกษา",
          date: "สำเร็จการศึกษาเมื่อปี 2567 - 2569",
          badge: "เกียรตินิยม / GPA 3.56",
          level: "High Distinction",
          icon: "fa-medal",
          color: "border-emerald-500 text-emerald-500",
          desc: "สำเร็จการศึกษาด้วยผลการเรียนดีเยี่ยม มีความรับผิดชอบและทักษะการปฏิบัติงานจริงในระดับสูง"
        }
      ]
    },
    labs: {
      title: "ผลงานและโปรเจกต์ (Projects & Labs)",
      subtitle: "สถานะโครงงานและสิ่งที่กำลังศึกษาในปัจจุบัน",
      hasProjects: false,
      emptyState: {
        badge: "สถานะ: ยังไม่มีโปรเจกต์ในปัจจุบัน",
        title: "ยังไม่มีโปรเจกต์ในปัจจุบัน",
        desc: "เนื่องจากปัจจุบันกำลังศึกษาอยู่ชั้นปีที่ 1 สาขาเทคโนโลยีสารสนเทศและการสื่อสาร (ICT) มหาวิทยาลัยศรีปทุม (จบระดับ ปวส. ด้วยเกรดเฉลี่ย 3.56) จึงอยู่ในช่วงเริ่มต้นศึกษาองค์ความรู้และฝึกฝนการทดลองในห้องปฏิบัติการ ทั้งนี้จะมีการจัดทำและอัปเดตผลงานโปรเจกต์ระบบเครือข่ายในส่วนนี้ต่อไปเมื่อเริ่มทำโครงงานระหว่างเรียนครับ",
        btnContact: "สนใจติดต่อสอบถาม หรือพูดคุยเรื่องโอกาสฝึกงาน"
      }
    },
    terminal: {
      title: "Live Interactive Network CLI Simulator",
      subtitle: "ทดลองรันคำสั่งตรวจสอบอุปกรณ์เสมือนบนระบบเครือข่าย",
      hint: "คลิกปุ่มคำสั่งด้านล่างเพื่อรันคำสั่ง Cisco IOS เสมือนจริง:",
      buttons: [
        { label: "show ip route", cmd: "show ip route" },
        { label: "show ip bgp summary", cmd: "show ip bgp summary" },
        { label: "show interfaces status", cmd: "show interfaces status" },
        { label: "ping 8.8.8.8", cmd: "ping 8.8.8.8 repeat 5" },
        { label: "show vlan brief", cmd: "show vlan brief" }
      ]
    },
    education: {
      title: "Education & Journey",
      subtitle: "เส้นทางการเรียนรู้และประวัติการศึกษา",
      items: [
        {
          year: "ปีปัจจุบัน กำลังศึกษาอยู่ชั้นปีที่ 1 ปีการศึกษา 2569",
          degree: "วิทยาศาสตรบัณฑิต (วท.บ.) สาขาเทคโนโลยีสารสนเทศและการสื่อสาร (ICT)",
          school: "มหาวิทยาลัยศรีปทุม (Sripatum University - SPU)",
          details: "คณะเทคโนโลยีสารสนเทศ ศึกษาเจาะลึกด้านสถาปัตยกรรมระบบเครือข่าย ความมั่นคงปลอดภัยสารสนเทศ การสื่อสารข้อมูล และโครงสร้างพื้นฐานไอที",
          highlights: [
            "ศึกษาต่อยอดความรู้เชิงลึกด้าน Enterprise Networks & IT Systems",
            "ฝึกปฏิบัติการจำลองเครือข่ายด้วย Cisco Packet Tracer และการทดลองในห้องปฏิบัติการ",
            "เปิดรับโอกาสการฝึกงาน (Internship) เพื่อเพิ่มพูนประสบการณ์จริง"
          ]
        },
        {
          year: "สำเร็จการศึกษาเมื่อปี 2567 - 2569",
          degree: "ประกาศนียบัตรวิชาชีพชั้นสูง (ปวส.)",
          school: "ระดับอาชีวศึกษา (Vocational Education)",
          details: "สำเร็จการศึกษาด้วยผลการเรียนดีเด่น เกรดเฉลี่ยสะสม (GPA) 3.56 มีพื้นฐานการลงมือปฏิบัติงานจริงด้านฮาร์ดแวร์ การเดินสายระบบเครือข่าย การคอนฟิกอุปกรณ์ และการแก้ปัญหาหน้างานอย่างเป็นระบบ",
          highlights: [
            "ผลการเรียนเฉลี่ยสะสมโดดเด่น: GPA 3.56",
            "มีพื้นฐานปฏิบัติการด้านคอมพิวเตอร์และระบบเครือข่ายท้องถิ่น (LAN)",
            "มีวินัยและความกระตือรือร้นสูงในการลงมือปฏิบัติจริง (Hands-on Mindset)"
          ]
        }
      ]
    },
    contact: {
      title: "Get In Touch",
      subtitle: "พร้อมสำหรับการร่วมงาน ฝึกงาน และโอกาสทางด้านระบบไอทีและเครือข่าย",
      infoTitle: "ข้อมูลการติดต่อ",
      email: "maoth66y6@gmail.com",
      phone: "063-240-6675",
      location: "กรุงเทพมหานคร, ประเทศไทย",
      github: "https://github.com/waremeth-net",
      linkedin: "https://linkedin.com/in/waremeth-buala",
      formName: "ชื่อของคุณ",
      formEmail: "อีเมลของคุณ",
      formSubject: "หัวข้อ",
      formMsg: "ข้อความ",
      btnSend: "ส่งข้อความ",
      copySuccess: "คัดลอกข้อมูลเรียบร้อยแล้ว!"
    },
    footer: "© 2026 Waremeth Buala (Mao). All rights reserved."
  },

  en: {
    nav: {
      brand: "Portfolio",
      about: "About",
      exp: "Experience & Education",
      labs: "Projects (In-Progress)",
      contact: "Contact"
    },
    hero: {
      tag: "ABOUT",
      status: "SPU ICT Student (Year 1 | High Vocational GPA 3.56) - Eager to Learn & Ready for Internship",
      headline: "Dedicated to Building Strong Foundations<br/>in Network & IT Infrastructure",
      name: "Waremeth Buala (Mao)",
      role: "ICT Undergraduate & Aspiring IT / Network Specialist",
      p1: "Currently pursuing a Bachelor's Degree in Information and Communication Technology (ICT) in 1st Year at the Faculty of Information Technology, Sripatum University (SPU), backed by a strong academic foundation graduating with a High Vocational Certificate (GPA 3.56).",
      p2: "Committed to mastering foundational computer networking, operating systems, and hardware troubleshooting to establish strong competencies in IT and infrastructure support.",
      p3: "Actively seeking opportunities for internship and practical hands-on experience to continuously evolve into a skilled IT & Network Specialist.",
      btnResume: "Download Resume (PDF)",
      btnExp: "Education (GPA 3.56)",
      btnLabs: "Project Status",
      btnContact: "Contact Me",
      exploreLink: "View Education & Journey →"
    },
    skills: {
      title: "Core Technical Competencies",
      subtitle: "Hands-on skills, hardware maintenance, and networking knowledge in training",
      categories: [
        {
          name: "Computer Networking Basics",
          icon: "fa-network-wired",
          tags: ["OSI Model & TCP/IP", "IPv4 Subnetting", "IPv6 Basics", "LAN / WLAN Setup", "VLANs & Trunking", "Basic Routing & Switching", "DHCP & DNS Configuration"]
        },
        {
          name: "Hardware & Maintenance",
          icon: "fa-screwdriver-wrench",
          tags: ["PC Assembly & Diagnostics", "Structured Cabling (RJ45/Cat6)", "Patch Panel Termination", "Hardware Troubleshooting", "Preventive Maintenance", "Peripheral Setup"]
        },
        {
          name: "Simulation & Lab Tools",
          icon: "fa-laptop-code",
          tags: ["Cisco Packet Tracer", "VirtualBox", "VMware Workstation", "Command Prompt / Terminal", "Basic Linux Commands", "Wireshark Packet Capture"]
        },
        {
          name: "Operating Systems & Servers",
          icon: "fa-server",
          tags: ["Windows 10 / 11 Pro", "Windows Server Basics", "Ubuntu Desktop / Server", "User & Permission Management", "Shared Folders & Printers"]
        },
        {
          name: "Network Security Fundamentals",
          icon: "fa-shield-halved",
          tags: ["Firewall Concepts", "Access Control Lists (ACLs)", "Basic NAT / Port Forwarding", "Antivirus & Endpoint Security", "Password Policies & 2FA"]
        }
      ]
    },
    certs: {
      title: "Certifications & Learning Goals",
      subtitle: "Professional certifications in preparation and academic milestones",
      btnVerify: "View Goal Details",
      items: [
        {
          id: "cert-ccna",
          title: "Cisco Certified Network Associate (CCNA 200-301)",
          issuer: "Cisco Systems",
          date: "Currently In Preparation",
          badge: "CCNA Candidate",
          level: "Associate Level",
          icon: "fa-certificate",
          color: "border-sky-500 text-sky-500",
          desc: "Studying Network Fundamentals, Network Access, IP Connectivity, IP Services, and Security Fundamentals based on official Cisco curriculum."
        },
        {
          id: "cert-comptia",
          title: "CompTIA Network+ / Security+",
          issuer: "CompTIA",
          date: "Study Objective",
          badge: "CompTIA Pathway",
          level: "Foundational",
          icon: "fa-award",
          color: "border-teal-500 text-teal-500",
          desc: "Targeting foundational certifications in network architecture, troubleshooting, and fundamental cybersecurity practices."
        },
        {
          id: "cert-spu-ict",
          title: "SPU ICT Network Specialization Program",
          issuer: "Sripatum University (SPU)",
          date: "2026 - Present",
          badge: "Academic Track",
          level: "Undergraduate Degree",
          icon: "fa-graduation-cap",
          color: "border-indigo-500 text-indigo-500",
          desc: "Undergraduate coursework focusing on Data Communications, Enterprise Systems, and Cloud Infrastructure."
        },
        {
          id: "cert-vocational",
          title: "High Vocational Certificate (ปวส.) GPA 3.56",
          issuer: "Vocational Education Institution",
          date: "Graduated 2025",
          badge: "Distinction / GPA 3.56",
          level: "High Distinction",
          icon: "fa-medal",
          color: "border-emerald-500 text-emerald-500",
          desc: "Graduated with outstanding academic distinction, demonstrating disciplined work ethic and strong practical fundamentals."
        }
      ]
    },
    labs: {
      title: "Projects & Practical Labs",
      subtitle: "Current project status and hands-on learning roadmap",
      hasProjects: false,
      emptyState: {
        badge: "Status: Currently No Projects",
        title: "Currently No Public Projects",
        desc: "I am currently in my 1st Year of Information and Communication Technology (ICT) at Sripatum University, following my graduation with a High Vocational Certificate (GPA 3.56). I am presently focusing on core coursework, lab simulations, and theoretical foundations. Hands-on projects will be documented and showcased here as coursework progresses.",
        btnContact: "Contact Me for Inquiries or Internship Opportunities"
      }
    },
    terminal: {
      title: "Live Interactive Network CLI Simulator",
      subtitle: "Execute simulated real Cisco IOS commands in real-time",
      hint: "Click any command below to inspect live simulated network device states:",
      buttons: [
        { label: "show ip route", cmd: "show ip route" },
        { label: "show ip bgp summary", cmd: "show ip bgp summary" },
        { label: "show interfaces status", cmd: "show interfaces status" },
        { label: "ping 8.8.8.8", cmd: "ping 8.8.8.8 repeat 5" },
        { label: "show vlan brief", cmd: "show vlan brief" }
      ]
    },
    education: {
      title: "Education & Journey",
      subtitle: "Academic foundation and hands-on milestones",
      items: [
        {
          year: "Currently 1st Year (Academic Year 2026)",
          degree: "Bachelor of Science (B.S.) in Information and Communication Technology (ICT)",
          school: "Sripatum University (SPU), Bangkok, Thailand",
          details: "Faculty of Information Technology. Foundational study in Enterprise Network Architecture, Data Communications, IT Systems, and Cloud Basics.",
          highlights: [
            "Advancing higher engineering education in enterprise networking & IT systems",
            "Engaging in simulation labs using Cisco Packet Tracer and university facilities",
            "Actively looking for Internship & practical training opportunities"
          ]
        },
        {
          year: "Graduated (2024 - 2026)",
          degree: "High Vocational Certificate (ปวส.)",
          school: "Vocational Education Institution, Thailand",
          details: "Graduated with High Academic Distinction (GPA: 3.56). Solid foundation in hardware, physical network cabling, routing/switching configurations, and proactive troubleshooting.",
          highlights: [
            "Outstanding Academic Achievement: GPA 3.56",
            "Practical mastery in local area network deployment & system maintenance",
            "Strong disciplined hands-on problem-solving mindset"
          ]
        }
      ]
    },
    contact: {
      title: "Get In Touch",
      subtitle: "Available for internships, learning opportunities, and engineering collaborations",
      infoTitle: "Contact Information",
      email: "maoth66y6@gmail.com",
      phone: "+66 63-240-6675 (063-240-6675)",
      location: "Bangkok, Thailand",
      github: "https://github.com/waremeth-net",
      linkedin: "https://linkedin.com/in/waremeth-buala",
      formName: "Your Name",
      formEmail: "Your Email",
      formSubject: "Subject",
      formMsg: "Your Message",
      btnSend: "Send Message",
      copySuccess: "Copied to clipboard!"
    },
    footer: "© 2026 Waremeth Buala (Mao). All rights reserved."
  },

  ko: {
    nav: {
      brand: "포트폴리오",
      about: "소개",
      exp: "학력 & 이력",
      labs: "프로젝트 (준비 중)",
      contact: "연락처"
    },
    hero: {
      tag: "ABOUT",
      status: "SPU ICT 전공 (1학년 / 전문학사 평점 3.56) - 인턴십 및 실무 학습 준비 완료",
      headline: "탄탄한 기초 실무 역량을 바탕으로<br/>네트워크 인프라 엔지니어를 지향합니다",
      name: "와레멧 부아라 (Waremeth Buala / Mao)",
      role: "ICT Undergraduate & Aspiring IT / Network Specialist",
      p1: "전문학사 과정(ปวส.)을 우수한 성적(평점 3.56)으로 수료하며 다진 탄탄한 실무 역량을 바탕으로, 현재 스리파툼 대학교(SPU) 정보기술학부 정보통신기술학(ICT) 1학년에 재학 중입니다.",
      p2: "컴퓨터 네트워크, 운영체제 및 PC 하드웨어 기초를 다지며, 향후 실무 인프라 엔지니어로서의 역량을 체계적으로 기르고 있습니다.",
      p3: "인턴십 및 실무 배움의 기회에 적극적으로 참여하여 현업 경험을 쌓고자 합니다.",
      btnResume: "이력서 다운로드 (PDF)",
      btnExp: "학력 (GPA 3.56)",
      btnLabs: "프로젝트 상태",
      btnContact: "연락하기",
      exploreLink: "학력 및 이력 보기 →"
    },
    skills: {
      title: "핵심 기술 역량",
      subtitle: "현재 집중 학습 및 훈련 중인 네트워크 및 인프라 기초 기술",
      categories: [
        {
          name: "Computer Networking Basics",
          icon: "fa-network-wired",
          tags: ["OSI Model & TCP/IP", "IPv4 Subnetting", "IPv6 Basics", "LAN / WLAN Setup", "VLANs & Trunking", "Basic Routing & Switching", "DHCP & DNS Configuration"]
        },
        {
          name: "Hardware & Maintenance",
          icon: "fa-screwdriver-wrench",
          tags: ["PC Assembly & Diagnostics", "Structured Cabling (RJ45/Cat6)", "Patch Panel Termination", "Hardware Troubleshooting", "Preventive Maintenance", "Peripheral Setup"]
        },
        {
          name: "Simulation & Lab Tools",
          icon: "fa-laptop-code",
          tags: ["Cisco Packet Tracer", "VirtualBox", "VMware Workstation", "Command Prompt / Terminal", "Basic Linux Commands", "Wireshark Packet Capture"]
        },
        {
          name: "Operating Systems & Servers",
          icon: "fa-server",
          tags: ["Windows 10 / 11 Pro", "Windows Server Basics", "Ubuntu Desktop / Server", "User & Permission Management", "Shared Folders & Printers"]
        },
        {
          name: "Network Security Fundamentals",
          icon: "fa-shield-halved",
          tags: ["Firewall Concepts", "Access Control Lists (ACLs)", "Basic NAT / Port Forwarding", "Antivirus & Endpoint Security", "Password Policies & 2FA"]
        }
      ]
    },
    certs: {
      title: "자격증 및 목표",
      subtitle: "취득 준비 중인 공인 자격증 및 학업 성취",
      btnVerify: "목표 상세 보기",
      items: [
        {
          id: "cert-ccna",
          title: "Cisco Certified Network Associate (CCNA 200-301)",
          issuer: "Cisco Systems",
          date: "시험 준비 중 (In-Preparation)",
          badge: "CCNA Candidate",
          level: "Associate Level",
          icon: "fa-certificate",
          color: "border-sky-500 text-sky-500",
          desc: "Cisco 공식 커리큘럼에 기반하여 네트워크 기초, IP 연결성, 보안 기초 및 자동화 개념 학습 중"
        },
        {
          id: "cert-comptia",
          title: "CompTIA Network+ / Security+",
          issuer: "CompTIA",
          date: "학습 목표",
          badge: "CompTIA Pathway",
          level: "Foundational",
          icon: "fa-award",
          color: "border-teal-500 text-teal-500",
          desc: "국제 공인 네트워크 아키텍처 및 보안 기초 자격 취득 목표"
        },
        {
          id: "cert-spu-ict",
          title: "SPU ICT Network Specialization Program",
          issuer: "스리파툼 대학교 (SPU)",
          date: "2026 - 현재",
          badge: "Academic Track",
          level: "Undergraduate Degree",
          icon: "fa-graduation-cap",
          color: "border-indigo-500 text-indigo-500",
          desc: "데이터 통신, 컴퓨터 네트워크 및 클라우드 컴퓨팅 심화 학부 과정"
        },
        {
          id: "cert-vocational",
          title: "전문학사 과정 (ปวส.) 평점 3.56",
          issuer: "태국 직업교육대학",
          date: "2025년 졸업",
          badge: "우수 졸업 / GPA 3.56",
          level: "High Distinction",
          icon: "fa-medal",
          color: "border-emerald-500 text-emerald-500",
          desc: "우수한 성적으로 졸업하여 성실함과 높은 실무 기초 능력을 입증함"
        }
      ]
    },
    labs: {
      title: "프로젝트 및 실습 (Projects & Labs)",
      subtitle: "현재 프로젝트 상태 및 학습 로드맵",
      hasProjects: false,
      emptyState: {
        badge: "상태: 아직 등록된 프로젝트가 없습니다",
        title: "현재 프로젝트가 없습니다",
        desc: "스리파툼 대학교(SPU) ICT 학부 1학년 재학 중(전문학사 GPA 3.56 졸업)으로, 현재 기초 전공 이론 학습 및 실습에 집중하고 있습니다. 학기 중 진행되는 네트워크 과제 및 실습 결과물은 완성되는 대로 순차적으로 본 섹션에 업데이트될 예정입니다.",
        btnContact: "인턴십 기회 및 문의 사항 연락하기"
      }
    },
    terminal: {
      title: "Live Interactive Network CLI Simulator",
      subtitle: "ทดลองรันคำสั่งตรวจสอบอุปกรณ์เสมือนบนระบบเครือข่าย",
      hint: "คลิกปุ่มคำสั่งด้านล่างเพื่อรันคำสั่ง Cisco IOS เสมือนจริง:",
      buttons: [
        { label: "show ip route", cmd: "show ip route" },
        { label: "show ip bgp summary", cmd: "show ip bgp summary" },
        { label: "show interfaces status", cmd: "show interfaces status" },
        { label: "ping 8.8.8.8", cmd: "ping 8.8.8.8 repeat 5" },
        { label: "show vlan brief", cmd: "show vlan brief" }
      ]
    },
    education: {
      title: "Education & Journey",
      subtitle: "학력 및 주요 활동",
      items: [
        {
          year: "현재 1학년 재학 중 (2026학년도)",
          degree: "정보통신기술학사 (B.S. in Information & Communication Technology)",
          school: "스리파툼 대학교 (Sripatum University - SPU), 방콕 태국",
          details: "정보기술학부 ICT 전공. 엔터프라이즈 네트워크 설계, 데이터 통신, IT 시스템 기초 집중 이수",
          highlights: [
            "네트워크 및 IT 시스템 심화 엔지니어링 교육 이수 중",
            "Cisco Packet Tracer를 활용한 실습 프로젝트 진행",
            "실무 경험을 쌓기 위한 인턴십 기회 적극 탐색 중"
          ]
        },
        {
          year: "졸업 (2024 - 2026)",
          degree: "전문학사 과정 (ปวส.)",
          school: "태국 직업교육대학 (Vocational Education)",
          details: "우수 졸업 (평점 3.56). 하드웨어, 물리적 네트워크 배선, LAN 구축 및 장애 처리 실무 역량 보유",
          highlights: [
            "우수한 학업 성취도: 누적 평점 3.56",
            "네트워크 구축 및 실무 시스템 유지보수 능력 보유",
            "강한 책임감과 실무 중심의 문제 해결 능력 (Hands-on Mindset)"
          ]
        }
      ]
    },
    contact: {
      title: "Get In Touch",
      subtitle: "네트워크/IT 인턴십 기회 및 기술 협업 문의를 환영합니다",
      infoTitle: "연락처 정보",
      email: "maoth66y6@gmail.com",
      phone: "+66 63-240-6675 (063-240-6675)",
      location: "태국 방콕",
      github: "https://github.com/waremeth-net",
      linkedin: "https://linkedin.com/in/waremeth-buala",
      formName: "성함",
      formEmail: "이메일",
      formSubject: "제목",
      formMsg: "메시지 내용",
      btnSend: "메시지 보내기",
      copySuccess: "클립보드에 복사되었습니다!"
    },
    footer: "© 2026 Waremeth Buala (Mao). All rights reserved."
  }
};

// Simulated CLI outputs for the interactive network playground
const cliResponses = {
  "show ip route": `Codes: C - connected, S - static, R - RIP, M - mobile, B - BGP
       D - EIGRP, EX - EIGRP external, O - OSPF, IA - OSPF inter area 

Gateway of last resort is 192.168.1.1 to network 0.0.0.0

S*    0.0.0.0/0 [1/0] via 192.168.1.1 (DEFAULT-GATEWAY)
      10.0.0.0/8 is variably subnetted, 3 subnets, 2 masks
C        10.10.10.0/24 is directly connected, GigabitEthernet0/1 (MGMT-VLAN)
C        10.10.20.0/24 is directly connected, GigabitEthernet0/2 (STUDENT-LAB)
C     192.168.1.0/24 is directly connected, GigabitEthernet0/0 (WAN-UPLINK)`,

  "show ip bgp summary": `BGP router identifier 192.168.1.254, local AS number 65001
BGP table version is 1, main routing table version 1

Neighbor        V           AS MsgRcvd MsgSent   TblVer  InQ OutQ Up/Down  State/PfxRcd
192.168.1.1     4        65000     140     138        1    0    0 01:12:00        1 (ISP-GATEWAY)`,

  "show interfaces status": `Port      Name               Status       Vlan       Duplex  Speed Type
Gi0/0     UPLINK-ROUTER      connected    routed     full    1000BaseTX
Gi0/1     VLAN10-MANAGEMENT  connected    10         full    1000BaseTX
Gi0/2     VLAN20-STUDENT-LAB connected    20         full    1000BaseTX
Gi0/3     SERVER-HOST        connected    20         full    1000BaseTX
Fa0/1     PC-WORKSTATION-01  connected    20         full    100BaseTX`,

  "ping 8.8.8.8 repeat 5": `Type escape sequence to abort.
Sending 5, 100-byte ICMP Echos to 8.8.8.8, timeout is 2 seconds:
!!!!!
Success rate is 100 percent (5/5), round-trip min/avg/max = 4/8/12 ms`,

  "show vlan brief": `VLAN Name                             Status    Ports
---- -------------------------------- --------- -------------------------------
1    default                          active    Gi0/4, Fa0/2, Fa0/3
10   MANAGEMENT                       active    Gi0/1
20   STUDENT_LAB                      active    Gi0/2, Gi0/3, Fa0/1
99   NATIVE_TRANSIT                   active    Gi0/0`
};
