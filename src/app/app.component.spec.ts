import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { Component } from '@angular/core';
import { AppComponent } from './app.component';

// Mock CoffeeListComponent for tests
@Component({
  selector: 'app-coffee-list',
  template: `CoffeeList`
})
export class CoffeeListComponent {
}

describe('AppComponent', () => {
  let fixture: ComponentFixture<AppComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        CoffeeListComponent
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
  });

  it('should create the app', () => {
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'El aroma mágico'`, () => {
    const app = fixture.componentInstance;
    expect(app.title).toEqual('El aroma mágico');
  });

  it(`should have a header with a h1 'El aroma mágico'`, () => {
    const headers = fixture.debugElement.queryAll(By.css('header h1'));
    expect(headers).toHaveSize(1);

    const header = headers[0];
    expect(header.nativeElement.textContent).toBe("El aroma mágico");
  });

  it(`should have a banner with an image of coffee`, () => {
    const imgs = fixture.debugElement.queryAll(By.css('.row.hero img'));
    expect(imgs).toHaveSize(1);

    const img = imgs[0];

    expect(img.nativeElement.getAttribute('src')).toBe("assets/image%201.png");
    expect(img.nativeElement.getAttribute('alt')).toBe("café");
  });

  it(`should have a footer with contact information (phone, email, instagram)`, () => {
    const footers = fixture.debugElement.queryAll(By.css('footer'));
    expect(footers).toHaveSize(1);

    const footer = footers[0];
    expect(footer.nativeElement.textContent).toBe("Contact us: +57 3102105253 - info@elaromamagico.com - @elaromamagico");

    const phone = footer.query(By.css('[data-testid="contact-phone"]'));
    expect(phone.nativeElement.getAttribute('href')).toBe("tel:+573102105253");

    const email = footer.query(By.css('[data-testid="contact-email"]'));
    expect(email.nativeElement.getAttribute('href')).toBe("mailto:info@elaromamagico.com");

    const instagram = footer.query(By.css('[data-testid="contact-instagram"]'));
    expect(instagram.nativeElement.getAttribute('href')).toBe("https://www.instagram.com/elaromamagico/");
  });
});
