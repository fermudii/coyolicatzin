import {AfterViewInit, Component, ElementRef, NgZone, OnDestroy, ViewChild} from '@angular/core';
import {scrollToElementById} from '../../../shared/constants';

@Component({
  selector: 'app-footer',
  imports: [],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent implements AfterViewInit, OnDestroy {
  scrollTo(id: string, event: Event) {
    event.preventDefault();
    scrollToElementById(id, -60);
  }
  @ViewChild('footerVideo') videoRef!: ElementRef<HTMLVideoElement>;

  private handler = () => this.resumeVideo();
  private visHandler = () => {
    if (document.visibilityState === 'visible') this.resumeVideo();
  };
  private touchHandler = () => {
    this.resumeVideo();
  };

  constructor(private zone: NgZone) {}

  ngAfterViewInit(): void {
    const video = this.videoRef.nativeElement;
    video.muted = true;
    video.defaultMuted = true;
    video.setAttribute('playsinline', '');

    this.zone.runOutsideAngular(() => {
      document.addEventListener('visibilitychange', this.visHandler);
      window.addEventListener('pageshow', this.handler);
      window.addEventListener('focus', this.handler);
      // Fallback: cualquier toque reanuda si quedó pausado
      document.addEventListener('touchstart', this.touchHandler, { passive: true });

      // Si el sistema pausa el video por su cuenta, lo reintentamos
      video.addEventListener('pause', this.onPause);
    });
  }

  private onPause = () => {
    // Solo reintenta si la página está visible y no terminó el video
    if (document.visibilityState === 'visible' && !this.videoRef.nativeElement.ended) {
      setTimeout(() => this.resumeVideo(), 300);
    }
  };

  private async resumeVideo(attempt = 0): Promise<void> {
    const video = this.videoRef?.nativeElement;
    if (!video || !video.paused) return;

    console.log('[video] intento', attempt, {
      readyState: video.readyState,
      networkState: video.networkState,
      error: video.error?.message
    });

    try {
      // Si el video quedó en mal estado, lo recargamos conservando la posición
      if (video.error || video.readyState < 2) {
        const t = video.currentTime;
        video.load();
        video.currentTime = t;
      }
      await video.play();
    } catch (err) {
      console.warn('[video] play() rechazado:', err);
      if (attempt < 3) {
        setTimeout(() => this.resumeVideo(attempt + 1), 300 * (attempt + 1));
      }
    }
  }

  ngOnDestroy(): void {
    const video = this.videoRef?.nativeElement;
    document.removeEventListener('visibilitychange', this.visHandler);
    window.removeEventListener('pageshow', this.handler);
    window.removeEventListener('focus', this.handler);
    document.removeEventListener('touchstart', this.touchHandler);
    video?.removeEventListener('pause', this.onPause);
  }
}
