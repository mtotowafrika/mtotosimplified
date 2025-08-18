import { Component } from '@angular/core';
import Swal from 'sweetalert2';
import emailjs, { EmailJSResponseStatus } from '@emailjs/browser';

@Component({
  selector: 'app-contact-us',
  standalone: true,
  imports: [],
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.scss']
})
export class ContactUsComponent {

  public contact(): void {
    Swal.fire({
      html: `
            <h2 class="fw-bold h1">Get in touch</h2>
            <p>We shall be glad to hear from you</p>
            
            <form id="contact-form">
              <div class="form-group">
                <input type="text" id="name" name="name" placeholder="Name" class="form-control mb-2" required>
              </div>
              <div class="form-group">
                <input type="tel" id="phone" name="phone" class="form-control mb-2" placeholder="Phone" required>
              </div>
              <div class="form-group">
                <input type="email" id="email" name="email" class="form-control mb-2" placeholder="Email" required>
              </div>
              <div class="form-group">
                <input type="text" id="subject" name="subject" class="form-control mb-2" placeholder="Subject" required>
              </div>
              <div class="form-group">
                <textarea id="message" name="message" placeholder="Message" class="form-control mb-2" rows="4" required></textarea>
              </div>
              <button type="submit" class="btn btn-dark mt-3">Submit</button>
            </form>
          `,
      showCloseButton: true,
      showCancelButton: false,
      showConfirmButton: false,
      didOpen: () => {
        const form = document.getElementById("contact-form");
        if (form) {
          form.addEventListener("submit", (e: Event) => {
            e.preventDefault();
            this.sendmessage(form as HTMLFormElement);
          });
        }
      },
    });
  }

  private sendmessage(form: HTMLFormElement): void {
    Swal.fire({
      title: "Sending...",
      text: "Please wait while we send your message.",
      icon: "info",
      allowOutsideClick: false,
      showConfirmButton: false,
      showCloseButton: true,
      didOpen: () => {
        Swal.showLoading(null);
      },
    });

    const serviceID = "service_tb3cck8";
    const templateID = "template_7pjxp4r";

    emailjs.sendForm(serviceID, templateID, form)
      .then((res: EmailJSResponseStatus) => {
        Swal.fire({
          title: "Success!",
          text: "Your message has been sent.",
          icon: "success",
          confirmButtonText: "OK",
        });
        form.reset();
      }, (err) => {
        console.error("Error occurred:", err);
        const errorMessage = err.text || "An unknown error occurred. Please try again later.";
        Swal.fire({
          title: "Error!",
          text: `An error occurred: ${errorMessage}`,
          icon: "error",
          confirmButtonText: "OK",
        });
      });
  }
}