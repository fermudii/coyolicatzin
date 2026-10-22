import {AfterViewInit, Component, ElementRef, OnDestroy, ViewChild} from '@angular/core';
import {scrollToElementById} from '../../../shared/constants';

@Component({
  selector: 'app-footer',
  imports: [],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent implements AfterViewInit, OnDestroy {
  @ViewChild('footerVideo') videoRef!: ElementRef<HTMLVideoElement>;

  private visibilityListener!: () => void;


  scrollTo(id: string, event: Event) {
    event.preventDefault();
    scrollToElementById(id, -60);
  }


  ngAfterViewInit(): void {
    const videoElement = this.videoRef.nativeElement;

    // Intentar reproducir al iniciar
    this.playVideo(videoElement);

    // Escuchar cuando el usuario cambia de pestaña o regresa
    this.visibilityListener = () => {
      if (document.visibilityState === 'visible') {
        this.playVideo(videoElement);
      }
    };

    document.addEventListener('visibilitychange', this.visibilityListener);
  }

  private playVideo(video: HTMLVideoElement): void {
    if (video && video.paused) {
      video.play().catch(error => {
        console.warn('El navegador bloqueó la reproducción automática:', error);
      });
    }
  }

  ngOnDestroy(): void {
    // Muy importante: limpiar el event listener para evitar fugas de memoria
    if (this.visibilityListener) {
      document.removeEventListener('visibilitychange', this.visibilityListener);
    }
  }
}
