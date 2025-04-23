window.addEventListener('DOMContentLoaded', () => {
    const contenedor = document.getElementById('contenedor-video');
    const video = document.createElement('video');
  
    video.setAttribute('autoplay', '');
    video.setAttribute('muted', '');
    video.setAttribute('loop', '');
    video.setAttribute('playsinline', '');
    video.style.width = '100%';
    video.style.display = 'block';
  
    const source = document.createElement('source');
    source.src = 'videos/video-presentacion.mp4';
    source.type = 'video/mp4';
  
    video.appendChild(source);
    contenedor.appendChild(video);
  });