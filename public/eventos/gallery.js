/* gallery.js - EventPix v4.0 */
(function () {
    // Logging helper
    function log(msg, type = 'info') {
        const timestamp = new Date().toISOString().split('T')[1].split('.')[0];
        const message = `[EventPix ${timestamp}] ${msg}`;
        console.log(message);
        if (type === 'error') console.error(message);
    }

    log('Gallery Script v4.0 Executing...');

    const statusEl = document.getElementById('status-indicator');
    if (statusEl) {
        statusEl.textContent = 'Cargando módulos...';
        statusEl.style.color = 'orange';
    }

    // Configuración Supabase
    const SUPABASE_URL = 'https://qzyjblkfrlkwbuljssco.supabase.co';
    const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InF6eWpibGtmcmxrd2J1bGpzc2NvIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjQzOTk5NDEsImV4cCI6MjA3OTk3NTk0MX0.6KuO6c2qLpZ0jZFH6CPk2g1sDLc5IX5ARA_m89tZKFE';

    let supabase;

    // Inicialización
    try {
        if (typeof window.supabase === 'undefined') {
            throw new Error('Supabase SDK no cargó. Verifica tu conexión.');
        }

        if (typeof window.supabase.createClient !== 'function') {
            throw new Error('createClient no es una función.');
        }

        supabase = window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
        log('Supabase client created successfully');

        if (statusEl) {
            statusEl.textContent = 'Sistema listo';
            statusEl.style.color = '#4ade80';
        }
    } catch (e) {
        log('Init Error: ' + e.message, 'error');
        if (statusEl) {
            statusEl.textContent = 'Error: ' + e.message;
            statusEl.style.color = 'red';
        }
    }

    // Elements
    const searchBtn = document.getElementById('search-btn');
    const codeInput = document.getElementById('event-code-input');
    const searchMsg = document.getElementById('search-msg');
    const galleryGrid = document.getElementById('gallery-grid');
    const eventHeader = document.getElementById('event-header');
    const eventNameTitle = document.getElementById('event-name');

    // Search Functionality
    window.searchEvent = async function () {
        log('searchEvent Triggered');
        const code = codeInput ? codeInput.value.trim().toUpperCase() : '';

        if (!code) {
            if (searchMsg) searchMsg.textContent = 'Ingresa un código';
            return;
        }

        if (!supabase) {
            alert('Error: Supabase no está listo.');
            return;
        }

        if (searchBtn) {
            searchBtn.disabled = true;
            searchBtn.textContent = 'BUSCANDO...';
        }
        if (searchMsg) searchMsg.textContent = '';
        if (galleryGrid) galleryGrid.innerHTML = '<div class="msg-container">Buscando fotos...</div>';

        try {
            // 1. Get Event
            const { data: event, error } = await supabase
                .from('events')
                .select('*')
                .eq('code', code)
                .eq('is_active', true)
                .maybeSingle();

            if (error) throw error;
            if (!event) throw new Error('Evento no encontrado (Revisa el código)');

            log('Event Found: ' + event.name);

            // 2. Setup UI
            if (eventNameTitle) eventNameTitle.textContent = event.name;
            if (eventHeader) eventHeader.style.display = 'block';

            // 3. Get Files
            const folderPath = event.folder_path;
            const { data: files, error: storageError } = await supabase.storage
                .from(event.bucket)
                .list(folderPath, {
                    limit: 1000,
                    offset: 0,
                    sortBy: { column: 'created_at', order: 'desc' }
                });

            if (storageError) throw storageError;

            const validFiles = files ? files.filter(f => f.name !== '.emptyFolderPlaceholder') : [];
            log(`Files: ${validFiles.length}`);

            if (validFiles.length === 0) {
                galleryGrid.innerHTML = '<div class="msg-container">No hay fotos aún.</div>';
            } else {
                renderGallery(validFiles, event);
            }

        } catch (e) {
            log('Search Error: ' + e.message, 'error');
            if (searchMsg) {
                searchMsg.textContent = e.message;
                searchMsg.className = 'error-msg';
            }
            if (galleryGrid) galleryGrid.innerHTML = '<div class="msg-container">Intenta de nuevo</div>';
        } finally {
            if (searchBtn) {
                searchBtn.disabled = false;
                searchBtn.textContent = 'BUSCAR';
            }
        }
    };

    function renderGallery(files, event) {
        galleryGrid.innerHTML = '';

        let folderPrefix = event.folder_path;
        if (!folderPrefix.endsWith('/')) folderPrefix += '/';
        if (folderPrefix === '/') folderPrefix = '';

        files.forEach(file => {
            const filePath = `${folderPrefix}${file.name}`;
            const { data } = supabase.storage.from(event.bucket).getPublicUrl(filePath);
            const publicUrl = data.publicUrl;

            // Detect type
            const name = file.name.toLowerCase();
            const isImage = /\.(jpg|jpeg|png|gif|webp)$/i.test(name);
            const isPdf = /\.(pdf)$/i.test(name);
            const isAudio = /\.(mp3|wav|ogg|m4a|aac|flac|webm|mp4|opus|wma)$/i.test(name);
            const isText = /\.(txt|md)$/i.test(name);

            const item = document.createElement('div');
            item.className = 'photo-item';

            let contentHtml = '';
            let clickFunction = '';

            if (isImage) {
                contentHtml = `<img src="${publicUrl}" class="photo-img" loading="lazy">`;
                clickFunction = () => window.openModal(publicUrl, 'image');
            } else if (isPdf) {
                contentHtml = `<div style="display:flex;align-items:center;justify-content:center;height:100%;color:white;flex-direction:column;"><span style="font-size:3rem;">📄</span></div>`;
                clickFunction = () => window.open(publicUrl, '_blank');
            } else if (isAudio) {
                contentHtml = `<div style="display:flex;align-items:center;justify-content:center;height:100%;color:white;flex-direction:column;"><span style="font-size:3rem;">🎵</span><small>${file.name}</small></div>`;
                clickFunction = () => window.open(publicUrl, '_blank');
            } else if (isText) {
                contentHtml = `<div style="display:flex;align-items:center;justify-content:center;height:100%;color:white;flex-direction:column;"><span style="font-size:3rem;">💬</span></div>`;
                clickFunction = () => window.openModal(publicUrl, 'text');
            } else {
                contentHtml = `<div style="display:flex;align-items:center;justify-content:center;height:100%;color:white;flex-direction:column;"><span style="font-size:3rem;">📁</span><small>${file.name}</small></div>`;
                clickFunction = () => window.open(publicUrl, '_blank');
            }

            const contentDiv = document.createElement('div');
            contentDiv.style.width = '100%';
            contentDiv.style.height = '100%';
            contentDiv.innerHTML = contentHtml;
            contentDiv.onclick = clickFunction;

            item.appendChild(contentDiv);

            // Overlay
            const overlay = document.createElement('div');
            overlay.className = 'photo-overlay';
            overlay.innerHTML = `<button class="download-btn">⬇ Descargar</button>`;
            overlay.querySelector('button').onclick = (e) => {
                e.stopPropagation();
                window.open(publicUrl, '_blank');
            };
            item.appendChild(overlay);

            galleryGrid.appendChild(item);
        });
    }

    // Modal Logic
    const modal = document.getElementById('photo-modal');
    const modalImg = document.getElementById('modal-image');
    const modalDownload = document.getElementById('modal-download-btn');
    const modalText = document.getElementById('modal-text');
    const modalClose = document.querySelector('.modal-close');

    if (modalClose) modalClose.onclick = () => modal.style.display = 'none';
    if (modal) modal.onclick = (e) => { if (e.target === modal) modal.style.display = 'none'; };

    window.openModal = async function (url, type) {
        if (!modal) return;

        if (modalImg) modalImg.style.display = 'none';
        if (modalText) modalText.style.display = 'none';
        if (modalDownload) modalDownload.href = url;

        if (type === 'image') {
            if (modalImg) {
                modalImg.src = url;
                modalImg.style.display = 'block';
            }
            modal.style.display = 'flex';
        } else if (type === 'text') {
            if (modalText) {
                modalText.textContent = 'Cargando...';
                modalText.style.display = 'block';
                modal.style.display = 'flex';
                try {
                    const r = await fetch(url);
                    if (r.ok) modalText.textContent = await r.text();
                    else modalText.textContent = 'Error loading text';
                } catch (e) { modalText.textContent = 'Error: ' + e.message; }
            }
        }
    };

    // Navbar Mobile
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    if (mobileMenuBtn) {
        mobileMenuBtn.onclick = () => document.querySelector('.nav-links').classList.toggle('active');
    }

})();
