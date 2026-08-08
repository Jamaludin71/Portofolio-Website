/* ============================================
   CYBERPUNK 2077 PORTFOLIO - MAIN.JS
   ============================================ */

// ============================================
// LANGUAGE DATA (Bilingual: EN / ID)
// ============================================
const translations = {
    en: {
        nav_home: "HOME",
        nav_about: "ABOUT",
        nav_skills: "SKILLS",
        nav_projects: "PROJECTS",
        nav_experience: "EXPERIENCE",
        nav_blog: "BLOG",
        nav_hire: "HIRE_ME",
        hero_loading: "Initializing profile...",
        hero_role: "Fullstack Developer & Data Engineer",
        hero_status: "● AVAILABLE FOR OPPORTUNITIES",
        hero_subtitle: "Fullstack Developer & Data Engineer crafting secure digital systems",
        btn_view_projects: "VIEW_PROJECTS",
        btn_hire_me: "HIRE_ME",
        btn_contact: "CONTACT",
        scroll_down: "SCROLL_DOWN",
        tag_about: "&lt;ABOUT_ME/&gt;",
        title_about: "SYSTEM_PROFILE",
        photo_placeholder: "[PHOTO_PLACEHOLDER]",
        photo_sub: "Upload your profile photo here",
        about_who: "WHO_AM_I",
        about_bio: "A passionate multidisciplinary engineer bridging the gap between frontend elegance, backend robustness, data intelligence, infrastructure reliability, and security awareness. Based in Sleman, Yogyakarta, Indonesia.",
        stat_domains: "Domains",
        stat_projects: "Projects",
        stat_certs: "Certificates",
        tag_skills: "&lt;SKILL_MATRIX/&gt;",
        title_skills: "CORE_COMPETENCIES",
        skill_fullstack: "FULLSTACK_WEB",
        skill_data: "DATA_ENGINEERING",
        skill_linux: "LINUX_INFRASTRUCTURE",
        skill_cyber: "CYBER_SECURITY",
        tag_projects: "&lt;MISSION_LOGS/&gt;",
        title_projects: "DEPLOYED_SYSTEMS",
        cat_fullstack: "FULLSTACK",
        cat_cyber: "CYBERSEC",
        desc_evoting: "Online voting system for OSIS chair and vice-chair elections. Built to handle 3000+ concurrent users with real-time vote counting and secure authentication.",
        desc_marketplace: "Full-featured e-commerce marketplace with user authentication, product management, cart system, and order processing. Built with modern Next.js ecosystem.",
        desc_pos: "Modern cashier management system for Warmindo (Warung Indomie) with inventory tracking, sales reporting, and real-time transaction processing.",
        desc_ramadhan: "Productivity tracking web application for Ramadhan month featuring daily activity logs, prayer time reminders, and progress visualization.",
        desc_vuln: "Intentionally vulnerable attendance web application for cybersecurity practice. Designed for learning penetration testing techniques including SQL injection and security bypass.",
        desc_zakat: "Islamic zakat calculator supporting multiple zakat types including income, savings, gold, and business assets with automatic nisab detection.",
        tag_exp: "&lt;DEPLOYMENT_HISTORY/&gt;",
        title_exp: "EXPERIENCE_LOG",
        exp_pkl_title: "Internship (PKL)",
        exp_pkl_desc: "Internship at ICT Unit of FKIP UNS. Gained hands-on experience in IT infrastructure management, technical support, and system administration within an academic environment.",
        tag_edu: "&lt;KNOWLEDGE_BASE/&gt;",
        title_edu: "EDUCATION_CERTS",
        subtitle_edu: "🎓 EDUCATION",
        subtitle_cert: "🏆 CERTIFICATES & ACHIEVEMENTS",
        edu_smk: "Vocational High School - Software Engineering / Computer Science",
        edu_smp: "Junior High School",
        edu_sd: "Elementary School",
        cert_ctf: "CTF Amikom 2025",
        cert_ctf_desc: "Participation in Capture The Flag cybersecurity competition",
        cert_linux_desc: "Linux System Administration course completion",
        cert_docker_desc: "Docker containerization fundamentals",
        cert_ansible_desc: "Automation with Ansible course completion",
        cert_osis: "OSIS Membership",
        cert_osis_desc: "Student Organization membership certificate - SMP",
        cert_mpk: "MPK Membership",
        cert_mpk_desc: "Student Council membership certificate - SMK",
        tag_blog: "&lt;KNOWLEDGE_BASE/&gt;",
        title_blog: "WRITEUPS_LOGS",
        blog_1_title: "Building Intentionally Vulnerable Apps for Learning",
        blog_1_desc: "How I created Presensi-Vuln as a hands-on cybersecurity lab for practicing penetration testing techniques safely.",
        blog_2_title: "From Ubuntu to Arch: My Linux Journey",
        blog_2_desc: "Documenting my transition through various Linux distributions and what each taught me about system administration.",
        blog_3_title: "Scaling E-Voting for 3000+ Users",
        blog_3_desc: "Architecture decisions and challenges faced when building a voting system capable of handling thousands of concurrent users.",
        blog_note: "More writeups coming soon on Medium/Dev.to...",
        tag_hire: "&lt;CONTRACT_AVAILABLE/&gt;",
        title_hire: "HIRE_ME",
        hire_intro: "Available for freelance projects and collaborations. I bring multidisciplinary expertise across the entire stack — from frontend interfaces to backend systems, data pipelines, infrastructure, and security audits.",
        svc_web_title: "Web Development",
        svc_web_desc: "Fullstack web applications, landing pages, dashboards, and e-commerce platforms built with modern technologies.",
        svc_data_title: "Data Solutions",
        svc_data_desc: "Data pipelines, ETL processes, analytics dashboards, and database optimization for your business intelligence needs.",
        svc_infra_title: "Infrastructure",
        svc_infra_desc: "Server setup, deployment automation, containerization, and CI/CD pipeline configuration.",
        svc_sec_title: "Security Audit",
        svc_sec_desc: "Basic vulnerability assessments, penetration testing, and security awareness training for your applications.",
        btn_start_project: "START_A_PROJECT",
        tag_contact: "&lt;ESTABLISH_CONNECTION/&gt;",
        title_contact: "CONTACT_NODE",
        form_name: "NAME",
        form_email: "EMAIL",
        form_subject: "SUBJECT",
        form_message: "MESSAGE",
        btn_send: "SEND_MESSAGE",
        footer_tagline: "Crafting secure digital systems across the stack.",
        footer_nav: "NAVIGATION",
        footer_social: "SOCIAL",
        footer_copy: "2026 Muhammad Hilmy Dzakya. All systems operational."
    },
    id: {
        nav_home: "BERANDA",
        nav_about: "TENTANG",
        nav_skills: "KEAHLIAN",
        nav_projects: "PROYEK",
        nav_experience: "PENGALAMAN",
        nav_blog: "BLOG",
        nav_hire: "REKRUT",
        hero_loading: "Memuat profil...",
        hero_role: "Fullstack Developer & Data Engineer",
        hero_status: "● TERBUKA UNTUK KESEMPATAN",
        hero_subtitle: "Fullstack Developer & Data Engineer yang membangun sistem digital yang aman",
        btn_view_projects: "LIHAT_PROYEK",
        btn_hire_me: "REKRUT_SAYA",
        btn_contact: "KONTAK",
        scroll_down: "GULIR_KE_BAWAH",
        tag_about: "&lt;TENTANG_SAYA/&gt;",
        title_about: "PROFIL_SISTEM",
        photo_placeholder: "[TEMPAT_FOTO]",
        photo_sub: "Unggah foto profil Anda di sini",
        about_who: "SIAPA_SAYA",
        about_bio: "Seorang engineer multidisiplin yang penuh semangat menjembatani kesenjangan antara keanggunan frontend, kekuatan backend, inteligensi data, keandalan infrastruktur, dan kesadaran keamanan. Berbasis di Sleman, Yogyakarta, Indonesia.",
        stat_domains: "Domain",
        stat_projects: "Proyek",
        stat_certs: "Sertifikat",
        tag_skills: "&lt;MATRIKS_KEAHLIAN/&gt;",
        title_skills: "KOMPETENSI_INTI",
        skill_fullstack: "FULLSTACK_WEB",
        skill_data: "DATA_ENGINEERING",
        skill_linux: "LINUX_INFRASTRUKTUR",
        skill_cyber: "CYBER_SECURITY",
        tag_projects: "&lt;LOG_MISI/&gt;",
        title_projects: "SISTEM_TERDEPLOY",
        cat_fullstack: "FULLSTACK",
        cat_cyber: "CYBERSEC",
        desc_evoting: "Sistem pemungutan suara online untuk pemilihan ketua dan wakil ketua OSIS. Dibangun untuk menangani 3000+ pengguna secara bersamaan dengan penghitungan suara real-time dan autentikasi yang aman.",
        desc_marketplace: "Marketplace e-commerce lengkap dengan autentikasi pengguna, manajemen produk, sistem keranjang, dan pemrosesan pesanan. Dibangun dengan ekosistem Next.js modern.",
        desc_pos: "Sistem manajemen kasir modern untuk Warmindo (Warung Indomie) dengan pelacakan inventori, laporan penjualan, dan pemrosesan transaksi real-time.",
        desc_ramadhan: "Aplikasi web pelacak produktivitas untuk bulan Ramadhan dengan fitur log aktivitas harian, pengingat waktu sholat, dan visualisasi progres.",
        desc_vuln: "Aplikasi web presensi yang sengaja dibuat rentan untuk latihan cybersecurity. Dirancang untuk mempelajari teknik penetration testing termasuk SQL injection dan bypass keamanan.",
        desc_zakat: "Kalkulator zakat Islami yang mendukung berbagai jenis zakat termasuk penghasilan, tabungan, emas, dan aset bisnis dengan deteksi nisab otomatis.",
        tag_exp: "&lt;RIWAYAT_DEPLOYMENT/&gt;",
        title_exp: "LOG_PENGALAMAN",
        exp_pkl_title: "Magang (PKL)",
        exp_pkl_desc: "Magang di Unit ICT FKIP UNS. Mendapatkan pengalaman langsung dalam manajemen infrastruktur IT, dukungan teknis, dan administrasi sistem dalam lingkungan akademik.",
        tag_edu: "&lt;BASIS_PENGETAHUAN/&gt;",
        title_edu: "PENDIDIKAN_SERTIFIKAT",
        subtitle_edu: "🎓 PENDIDIKAN",
        subtitle_cert: "🏆 SERTIFIKAT & PENGHARGAAN",
        edu_smk: "SMK - Rekayasa Perangkat Lunak / Ilmu Komputer",
        edu_smp: "Sekolah Menengah Pertama",
        edu_sd: "Sekolah Dasar",
        cert_ctf: "CTF Amikom 2025",
        cert_ctf_desc: "Partisipasi dalam kompetisi cybersecurity Capture The Flag",
        cert_linux_desc: "Penyelesaian kursus Linux System Administration",
        cert_docker_desc: "Dasar-dasar kontainerisasi Docker",
        cert_ansible_desc: "Penyelesaian kursus Automation with Ansible",
        cert_osis: "Keanggotaan OSIS",
        cert_osis_desc: "Sertifikat keanggotaan Organisasi Siswa Intra Sekolah - SMP",
        cert_mpk: "Keanggotaan MPK",
        cert_mpk_desc: "Sertifikat keanggotaan Majelis Perwakilan Kelas - SMK",
        tag_blog: "&lt;BASIS_PENGETAHUAN/&gt;",
        title_blog: "LOG_TULISAN",
        blog_1_title: "Membangun Aplikasi Sengaja Rentan untuk Pembelajaran",
        blog_1_desc: "Bagaimana saya membuat Presensi-Vuln sebagai lab cybersecurity praktis untuk berlatih teknik penetration testing dengan aman.",
        blog_2_title: "Dari Ubuntu ke Arch: Perjalanan Linux Saya",
        blog_2_desc: "Mendokumentasikan transisi saya melalui berbagai distribusi Linux dan apa yang diajarkan masing-masing tentang administrasi sistem.",
        blog_3_title: "Menskalakan E-Voting untuk 3000+ Pengguna",
        blog_3_desc: "Keputusan arsitektur dan tantangan yang dihadapi saat membangun sistem voting yang mampu menangani ribuan pengguna bersamaan.",
        blog_note: "Tulisan lebih lanjut segera hadir di Medium/Dev.to...",
        tag_hire: "&lt;KONTRAK_TERBUKA/&gt;",
        title_hire: "REKRUT_SAYA",
        hire_intro: "Tersedia untuk proyek freelance dan kolaborasi. Saya membawa keahlian multidisiplin di seluruh stack — dari antarmuka frontend hingga sistem backend, pipeline data, infrastruktur, dan audit keamanan.",
        svc_web_title: "Pengembangan Web",
        svc_web_desc: "Aplikasi web fullstack, landing page, dashboard, dan platform e-commerce yang dibangun dengan teknologi modern.",
        svc_data_title: "Solusi Data",
        svc_data_desc: "Pipeline data, proses ETL, dashboard analitik, dan optimasi database untuk kebutuhan business intelligence Anda.",
        svc_infra_title: "Infrastruktur",
        svc_infra_desc: "Setup server, otomatisasi deployment, kontainerisasi, dan konfigurasi pipeline CI/CD.",
        svc_sec_title: "Audit Keamanan",
        svc_sec_desc: "Penilaian kerentanan dasar, penetration testing, dan pelatihan kesadaran keamanan untuk aplikasi Anda.",
        btn_start_project: "MULAI_PROYEK",
        tag_contact: "&lt;HUBUNGI/&gt;",
        title_contact: "NODE_KONTAK",
        form_name: "NAMA",
        form_email: "EMAIL",
        form_subject: "SUBJEK",
        form_message: "PESAN",
        btn_send: "KIRIM_PESAN",
        footer_tagline: "Membangun sistem digital yang aman di seluruh stack.",
        footer_nav: "NAVIGASI",
        footer_social: "SOSIAL",
        footer_copy: "2026 Muhammad Hilmy Dzakya. Semua sistem beroperasi normal."
    }
};

let currentLang = 'en';

// ============================================
// LANGUAGE TOGGLE
// ============================================
function toggleLanguage() {
    currentLang = currentLang === 'en' ? 'id' : 'en';
    document.querySelector('.lang-current').textContent = currentLang.toUpperCase();
    applyTranslations();
}

function applyTranslations() {
    const elements = document.querySelectorAll('[data-key]');
    elements.forEach(el => {
        const key = el.getAttribute('data-key');
        if (translations[currentLang][key]) {
            el.innerHTML = translations[currentLang][key];
        }
    });
}

// ============================================
// PARTICLE BACKGROUND
// ============================================
class ParticleSystem {
    constructor(canvas) {
        this.canvas = canvas;
        this.ctx = canvas.getContext('2d');
        this.particles = [];
        this.connections = [];
        this.resize();
        this.init();
        this.animate();
        window.addEventListener('resize', () => this.resize());
    }

    resize() {
        this.canvas.width = window.innerWidth;
        this.canvas.height = window.innerHeight;
        this.init();
    }

    init() {
        this.particles = [];
        const count = Math.min(80, Math.floor((this.canvas.width * this.canvas.height) / 15000));
        for (let i = 0; i < count; i++) {
            this.particles.push({
                x: Math.random() * this.canvas.width,
                y: Math.random() * this.canvas.height,
                vx: (Math.random() - 0.5) * 0.5,
                vy: (Math.random() - 0.5) * 0.5,
                radius: Math.random() * 2 + 1,
                color: Math.random() > 0.5 ? 'rgba(0,240,255,' : 'rgba(189,0,255,',
                alpha: Math.random() * 0.5 + 0.2
            });
        }
    }

    animate() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

        this.particles.forEach(p => {
            p.x += p.vx;
            p.y += p.vy;
            if (p.x < 0 || p.x > this.canvas.width) p.vx *= -1;
            if (p.y < 0 || p.y > this.canvas.height) p.vy *= -1;

            this.ctx.beginPath();
            this.ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
            this.ctx.fillStyle = p.color + p.alpha + ')';
            this.ctx.fill();
        });

        // Draw connections
        for (let i = 0; i < this.particles.length; i++) {
            for (let j = i + 1; j < this.particles.length; j++) {
                const dx = this.particles[i].x - this.particles[j].x;
                const dy = this.particles[i].y - this.particles[j].y;
                const dist = Math.sqrt(dx * dx + dy * dy);
                if (dist < 150) {
                    this.ctx.beginPath();
                    this.ctx.moveTo(this.particles[i].x, this.particles[i].y);
                    this.ctx.lineTo(this.particles[j].x, this.particles[j].y);
                    this.ctx.strokeStyle = `rgba(0,240,255,${0.1 * (1 - dist / 150)})`;
                    this.ctx.lineWidth = 0.5;
                    this.ctx.stroke();
                }
            }
        }

        requestAnimationFrame(() => this.animate());
    }
}

// ============================================
// TYPING EFFECT
// ============================================
class TypeWriter {
    constructor(element, text, speed = 50) {
        this.element = element;
        this.text = text;
        this.speed = speed;
        this.index = 0;
        this.type();
    }

    type() {
        if (this.index < this.text.length) {
            this.element.textContent += this.text.charAt(this.index);
            this.index++;
            setTimeout(() => this.type(), this.speed);
        }
    }
}

// ============================================
// TERMINAL OUTPUT REVEAL
// ============================================
function revealTerminalOutput() {
    const lines = document.querySelectorAll('.output-line');
    lines.forEach((line, index) => {
        setTimeout(() => {
            line.classList.add('visible');
        }, (index + 1) * 800);
    });
}

// ============================================
// SCROLL REVEAL
// ============================================
function initScrollReveal() {
    const reveals = document.querySelectorAll('.skill-category, .project-card, .timeline-item, .edu-item, .cert-card, .blog-card, .service-card');

    reveals.forEach(el => {
        el.classList.add('reveal');
    });

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');

                // Animate skill bars
                if (entry.target.classList.contains('skill-category')) {
                    const fills = entry.target.querySelectorAll('.skill-fill');
                    fills.forEach((fill, i) => {
                        setTimeout(() => {
                            fill.style.width = fill.style.getPropertyValue('--width');
                        }, i * 200);
                    });
                }
            }
        });
    }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });

    reveals.forEach(el => observer.observe(el));
}

// ============================================
// NAVBAR SCROLL EFFECT
// ============================================
function initNavbar() {
    const navbar = document.getElementById('navbar');
    let lastScroll = 0;

    window.addEventListener('scroll', () => {
        const currentScroll = window.pageYOffset;
        if (currentScroll > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
        lastScroll = currentScroll;
    });
}

// ============================================
// MOBILE MENU
// ============================================
function initMobileMenu() {
    const toggle = document.getElementById('nav-toggle');
    const menu = document.getElementById('nav-menu');

    toggle.addEventListener('click', () => {
        toggle.classList.toggle('active');
        menu.classList.toggle('active');
    });

    // Close menu when clicking a link
    menu.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            toggle.classList.remove('active');
            menu.classList.remove('active');
        });
    });
}

// ============================================
// SMOOTH SCROLL
// ============================================
function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

// ============================================
// GLITCH TEXT RANDOM TRIGGER
// ============================================
function initGlitchEffect() {
    const glitchText = document.querySelector('.glitch-text');
    if (!glitchText) return;

    setInterval(() => {
        glitchText.style.animation = 'none';
        glitchText.offsetHeight; // trigger reflow
        glitchText.style.animation = '';
    }, 5000);
}

// ============================================
// CONTACT FORM HANDLER
// ============================================
function initContactForm() {
    const form = document.getElementById('contact-form');
    if (!form) return;

    form.addEventListener('submit', (e) => {
        // The form uses mailto: action, so it will open email client
        // This is just for UX enhancement
        const btn = form.querySelector('.form-submit');
        const originalText = btn.innerHTML;
        btn.innerHTML = '<span class="btn-icon">&gt;</span><span>SENDING...</span>';
        btn.disabled = true;

        setTimeout(() => {
            btn.innerHTML = originalText;
            btn.disabled = false;
        }, 2000);
    });
}

// ============================================
// ACTIVE NAV LINK ON SCROLL
// ============================================
function initActiveNavLink() {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-link');

    window.addEventListener('scroll', () => {
        let current = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (pageYOffset >= sectionTop - 200) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === '#' + current) {
                link.classList.add('active');
            }
        });
    });
}

// ============================================
// INITIALIZATION
// ============================================
document.addEventListener('DOMContentLoaded', () => {
    // Initialize particle system
    const canvas = document.getElementById('particle-canvas');
    if (canvas) {
        new ParticleSystem(canvas);
    }

    // Initialize typing effect
    const typeCommand = document.getElementById('type-command');
    if (typeCommand) {
        setTimeout(() => {
            new TypeWriter(typeCommand, './init_profile.sh', 80);
        }, 500);
    }

    // Reveal terminal output
    setTimeout(revealTerminalOutput, 1000);

    // Initialize all modules
    initScrollReveal();
    initNavbar();
    initMobileMenu();
    initSmoothScroll();
    initGlitchEffect();
    initContactForm();
    initActiveNavLink();

    // Language toggle
    const langToggle = document.getElementById('lang-toggle');
    if (langToggle) {
        langToggle.addEventListener('click', toggleLanguage);
    }

    // Apply initial translations
    applyTranslations();
});
